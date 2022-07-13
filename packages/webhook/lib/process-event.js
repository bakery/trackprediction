const pick = require("lodash.pick");
const { getTweetById } = require("./twitter");

const processEvent = async (event) => {
  const result = [];

  if (!event || !event.tweet_create_events) {
    return result;
  }

  const tweets = event.tweet_create_events.filter(
    // no interest in direct tweets atm
    // this needs to be updated to support person-to-bot comm
    // for querying stats
    (t) => t.in_reply_to_status_id !== null
  );

  for (let i = 0; i < tweets.length; i++) {
    const t = tweets[i];
    // grab original tweet info
    const { data, ...rest } = await getTweetById({
      tweetId: t.in_reply_to_status_id_str,
    });
    result.push(
      Object.assign(
        {
          id: t.id_str,
          created_at: new Date(parseInt(t.timestamp_ms, 10)).toISOString(),
          author: Object.assign(
            {
              id: t.user.id_str,
              username: t.user.screen_name,
              profile_image_url: t.user.profile_image_url_https,
            },
            pick(t.user, "name", "url", "description")
          ),
          original_tweet: rest,
          original_tweet_data: { data, ...rest },
          event_data: event,
        },
        pick(t, "text", "lang")
      )
    );
  }

  return result;
};

module.exports = {
  processEvent,
};
