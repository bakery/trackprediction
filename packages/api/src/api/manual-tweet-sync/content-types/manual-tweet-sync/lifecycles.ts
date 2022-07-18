import { getTweetById } from "../../../../lib/twitter";
import omit from "lodash.omit";
import { getTwitterUserFromTwitterAuthor } from "../../../tweet/content-types/tweet/lifecycles";

const PREDICTIONS = "api::prediction.prediction";
const TWEETS = "api::tweet.tweet";
const TWITTER_USERS = "api::twitter-user.twitter-user";
const TRACKERS = "api::tracker.tracker";
const MANUAL_TWEET_SYNCS = "api::manual-tweet-sync.manual-tweet-sync";

const populateAll = { populate: ["author", "original_tweet.author"] };

export default {
  async afterCreate(event) {
    //@ts-ignore
    const entityService = strapi.entityService;
    const { id, tweet_id } = event.result;

    // XX: https://github.com/strapi/strapi/issues/11980
    // direct updates inside the hook do not seem to work
    setTimeout(async () => {
      let tweet = await getTweetById({ tweetId: tweet_id });
      tweet = {
        author: Object.assign({}, omit(tweet.author, "id"), {
          twitter_id: tweet.author.id,
        }),
        twitter_id: tweet.id,
        text: tweet.text,
        lang: tweet.lang,
        twitter_created_at: tweet.created_at,
      };
      await entityService.update(MANUAL_TWEET_SYNCS, id, {
        data: {
          tweet,
        },
      });

      let prediction = await entityService.findMany(PREDICTIONS, {
        filters: {
          original_tweet_id: tweet.twitter_id,
        },
        populate: ["tracked_by_users"],
      });

      prediction = prediction.length !== 0 ? prediction[0] : null;

      if (!prediction) {
        prediction = await entityService.create(PREDICTIONS, {
          data: {
            author_username: tweet.author.username,
            prediction_text: tweet.text,
            tweet,
            author: tweet.author,
            // source_tweet: newTweet.id,
            // source_tweet_id: newTweet.twitter_id,
            original_tweet_id: tweet.twitter_id,
            author_user: await getTwitterUserFromTwitterAuthor(tweet.author),
          },
        });
      }
    }, 500);
  },
};
