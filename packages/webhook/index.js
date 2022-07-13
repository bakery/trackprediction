const {
  Autohook,
  validateWebhook,
  validateSignature,
} = require("twitter-autohook");
const url = require("url");
const ngrok = require("ngrok");
const http = require("http");
const { saveTweets } = require("./lib/sync");
const { processEvent } = require("./lib/process-event");

require("dotenv").config();

const PORT = process.env.PORT || 4242;
const HOST = process.env.HOST || "localhost";

const startServer = (port, auth) =>
  http
    .createServer((req, res) => {
      const route = url.parse(req.url, true);

      if (!route.pathname) {
        return;
      }

      if (route.query.crc_token) {
        try {
          if (!validateSignature(req.headers, auth, url.parse(req.url).query)) {
            console.error("Cannot validate webhook signature");
            return;
          }
        } catch (e) {
          console.error(e);
        }

        const crc = validateWebhook(route.query.crc_token, auth, res);
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify(crc));
      }

      if (
        req.method === "POST" &&
        req.headers["content-type"] === "application/json"
      ) {
        let body = "";
        req.on("data", (chunk) => {
          body += chunk.toString();
        });
        req.on("end", async () => {
          try {
            if (!validateSignature(req.headers, auth, body)) {
              console.error("Cannot validate webhook signature");
              return;
            }
          } catch (e) {
            console.error(e);
          }

          console.log("Event received:", body);

          const tweets = await processEvent(JSON.parse(body));
          await saveTweets({ tweets });

          res.writeHead(200);
          res.end();
        });
      }
    })
    .listen(port);

(async () => {
  try {
    const { NGROK_AUTH_TOKEN } = process.env;
    if (NGROK_AUTH_TOKEN) {
      await ngrok.authtoken(NGROK_AUTH_TOKEN);
    }
    const url = HOST !== "localhost" ? HOST : await ngrok.connect(PORT);
    const webhookURL = `${url}/standalone-server/webhook`;

    const config = {
      token: process.env.TWITTER_TOKEN,
      token_secret: process.env.TWITTER_TOKEN_SECRET,
      consumer_key: process.env.TWITTER_CONSUMER_KEY,
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
      env: process.env.TWITTER_ENV,
    };

    startServer(PORT, config);

    const webhook = new Autohook(config);
    await webhook.removeWebhooks();
    await webhook.start(webhookURL);
    await webhook.subscribe({
      oauth_token: config.token,
      oauth_token_secret: config.token_secret,
    });
  } catch (e) {
    console.error(e);
    process.exit(-1);
  }
})();
