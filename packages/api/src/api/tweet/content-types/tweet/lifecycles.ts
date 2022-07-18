const PREDICTIONS = "api::prediction.prediction";
const TWEETS = "api::tweet.tweet";
const TWITTER_USERS = "api::twitter-user.twitter-user";
const TRACKERS = "api::tracker.tracker";

const populateAll = { populate: ["author", "original_tweet.author"] };

const getTwitterUserFromTwitterAuthor = async (author) => {
  //@ts-ignore
  const entityService = strapi.entityService;
  const existingUsers = await entityService.findMany(TWITTER_USERS, {
    filters: {
      twitter_id: author.twitter_id,
    },
  });

  if (existingUsers.length !== 0) {
    return existingUsers[0];
  }

  return await entityService.create(TWITTER_USERS, {
    data: author,
  });
};

const cleanupComponent = (c) => {
  const { id, ...rest } = c;
  return Object.keys(rest).reduce((r, k) => {
    r[k] = typeof rest[k] !== "object" ? rest[k] : cleanupComponent(rest[k]);
    return r;
  }, {});
};

export default {
  async afterCreate(event) {
    //@ts-ignore
    const entityService = strapi.entityService;

    const { result } = event;
    const newTweet =
      result && (await entityService.findOne(TWEETS, result.id, populateAll));

    let prediction = await entityService.findMany(PREDICTIONS, {
      filters: {
        original_tweet_id: newTweet.original_tweet.twitter_id,
      },
      populate: ["tracked_by_users"],
    });

    prediction = prediction.length !== 0 ? prediction[0] : null;

    if (!prediction) {
      prediction = await entityService.create(PREDICTIONS, {
        data: {
          author_username: newTweet.original_tweet.author.username,
          prediction_text: newTweet.original_tweet.text,
          tweet: cleanupComponent(newTweet.original_tweet),
          author: cleanupComponent(newTweet.original_tweet.author),
          source_tweet: newTweet.id,
          source_tweet_id: newTweet.twitter_id,
          original_tweet_id: newTweet.original_tweet.twitter_id,
          author_user: await getTwitterUserFromTwitterAuthor(
            newTweet.original_tweet.author
          ),
        },
      });
    }

    await entityService.create(TRACKERS, {
      data: {
        prediction: prediction.id,
        twitter_user: await getTwitterUserFromTwitterAuthor(newTweet.author),
      },
    });
  },
};
