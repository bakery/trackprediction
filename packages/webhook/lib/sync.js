const axios = require("axios");
const omit = require("lodash.omit");

const cleanupFields = (twitterObj) => {
  return (
    twitterObj &&
    omit(
      Object.assign({}, twitterObj, {
        twitter_id: twitterObj.id,
        twitter_created_at: twitterObj.created_at,
      }),
      "id",
      "created_at"
    )
  );
};

const prepTweet = (t) => {
  return cleanupFields(
    Object.assign({}, t, {
      author: cleanupFields(t.author),
      original_tweet: t.original_tweet
        ? prepTweet(t.original_tweet)
        : undefined,
    })
  );
};

module.exports = {
  saveTweets: async ({ tweets, axiosInstance }) => {
    const instance =
      axiosInstance ||
      (() => {
        const inst = axios.create({
          baseURL: process.env.API_SERVER,
        });
        inst.defaults.headers.common["Authorization"] = process.env.API_AUTH;
        return inst;
      })();

    for (let i = 0; i < tweets.length; i++) {
      try {
        await instance.post("/tweets", {
          data: prepTweet(tweets[i]),
        });
      } catch (err) {
        console.error("save tweets failed with", err);
      }
    }
  },
};
