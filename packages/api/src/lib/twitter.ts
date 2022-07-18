import { TwitterApi, TTweetv2Expansion } from "twitter-api-v2";
import TwitterApiv2ReadOnly from "twitter-api-v2/dist/v2/client.v2.read";
import pick from "lodash.pick";

export const tweetByIdParams = {
  expansions: ["author_id", "referenced_tweets.id", "attachments.media_keys"],
  "user.fields": [
    "created_at",
    "description",
    "entities",
    "id",
    "location",
    "name",
    "pinned_tweet_id",
    "profile_image_url",
    "protected",
    "public_metrics",
    "url",
    "username",
    "verified",
    "withheld",
  ],
  "media.fields": [
    "duration_ms",
    "height",
    "media_key",
    "preview_image_url",
    "type",
    "url",
    "width",
    "public_metrics",
    "non_public_metrics",
    "organic_metrics",
    "alt_text",
  ],
  "tweet.fields": [
    "attachments",
    "author_id",
    "conversation_id",
    "created_at",
    "entities",
    "geo",
    "id",
    "in_reply_to_user_id",
    "lang",
    "public_metrics",
    "referenced_tweets",
    "source",
    "text",
    "withheld",
  ],
};

type GetTweetByIdParams = {
  tweetId: string;
  client?: TwitterApiv2ReadOnly;
};

export const getTweetById = async (params: GetTweetByIdParams) => {
  const { tweetId, client } = params;
  const twitterClient =
    client || new TwitterApi(process.env.TWITTER_BEARER_TOKEN).readOnly.v2;
  let result = null;

  try {
    // @ts-ignore
    result = await twitterClient.singleTweet(tweetId, tweetByIdParams);
  } catch (err) {
    throw new Error("API call failed");
  }

  if (result && result.errors) {
    throw new Error("API call failed");
  }

  const author = ((result.includes && result.includes.users) || []).find(
    (u) => u.id === result.data.author_id
  );
  return Object.assign(
    {
      data: result,
      author: pick(
        author,
        "id",
        "description",
        "name",
        "profile_image_url",
        "url",
        "username"
      ),
    },
    pick(result.data, "id", "text", "lang", "created_at")
  );
};
