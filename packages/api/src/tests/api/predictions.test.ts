import omit from "lodash.omit";

const PREDICTIONS = "api::prediction.prediction";
const TWEETS = "api::tweet.tweet";
const TWITTER_USERS = "api::twitter-user.twitter-user";
const TRACKERS = "api::tracker.tracker";

// @ts-ignore
const entityService = strapi.entityService;

const incomingTweet = {
  twitter_id: "1524469496127401986",
  twitter_created_at: "2022-05-11T19:20:25.807Z",
  text: "track this @trackprediction",
  lang: "en",
  author: {
    twitter_id: "1524361268039233536",
    name: "Prediction Tracker",
    username: "trackprediction",
    url: null,
    description: null,
    profile_image_url:
      "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
  },
  original_tweet: {
    twitter_id: "1525252600530100226",
    text: "This Week @ NASA:\n\n• NASA telescopes help spot Milky Way's black hole\n• @NASAInSight detects largest marsquake yet\n• Scientists grow plants in lunar soil\n\nOur NASA Newsletter has even more space for you: https://t.co/MyG37QzGhO https://t.co/LcUnARub6w",
    author: {
      twitter_id: "11348282",
      description: "There's space for everybody. ✨",
      name: "NASA",
      profile_image_url:
        "https://pbs.twimg.com/profile_images/1321163587679784960/0ZxKlEKB_normal.jpg",
      url: "https://t.co/9NkQJKAnuU",
      username: "NASA",
    },
    lang: "en",
    twitter_created_at: "2022-05-13T23:12:12.000Z",
  },
  original_tweet_data: {},
  event_data: {},
};

describe("Predictions API", () => {
  beforeEach(async () => {
    const users = await entityService.findMany(TWITTER_USERS);
    const tweets = await entityService.findMany(TWEETS);
    const predictions = await entityService.findMany(PREDICTIONS);
    const trackers = await entityService.findMany(TRACKERS);

    for (let i = 0; i < users.length; i++) {
      await entityService.delete(TWITTER_USERS, users[i].id);
    }

    for (let i = 0; i < tweets.length; i++) {
      await entityService.delete(TWEETS, tweets[i].id);
    }

    for (let i = 0; i < predictions.length; i++) {
      await entityService.delete(PREDICTIONS, predictions[i].id);
    }

    for (let i = 0; i < trackers.length; i++) {
      await entityService.delete(TRACKERS, trackers[i].id);
    }
  });

  it("new tweet -> new prediction", async () => {
    expect(await entityService.findMany(TWITTER_USERS)).toEqual([]);
    expect(await entityService.findMany(TWEETS)).toEqual([]);
    expect(await entityService.findMany(PREDICTIONS)).toEqual([]);
    expect(await entityService.findMany(TRACKERS)).toEqual([]);

    await entityService.create(TWEETS, {
      data: incomingTweet,
    });

    // Make sure tweet is persisted in the system
    const tweets = await entityService.findMany(TWEETS, {
      filters: {
        twitter_id: incomingTweet.twitter_id,
      },
    });
    expect(tweets.length).toEqual(1);
    expect(tweets[0].twitter_id).toEqual("1524469496127401986");

    // Make sure a new prediction is created
    const predictions = await entityService.findMany(PREDICTIONS, {
      populate: [
        "author_user",
        "source_tweet",
        "author",
        "tweet",
        "tweet.author",
      ],
    });
    expect(predictions.length).toEqual(1);
    expect(
      omit(predictions[0], "id", "createdAt", "updatedAt", "publishedAt")
    ).toEqual({
      status: "pending",
      original_tweet_id: "1525252600530100226",
      source_tweet_id: "1524469496127401986",
      source_tweet: tweets[0],
      author: Object.assign({}, incomingTweet.original_tweet.author, {
        id: predictions[0].author.id,
      }),
      author_username: incomingTweet.original_tweet.author.username,
      prediction_text: incomingTweet.original_tweet.text,
      tweet: Object.assign(
        { id: predictions[0].tweet.id },
        incomingTweet.original_tweet,
        {
          author: Object.assign({}, incomingTweet.original_tweet.author, {
            id: predictions[0].tweet.author.id,
          }),
        }
      ),
      author_user: (
        await entityService.findMany(TWITTER_USERS, {
          filters: {
            twitter_id: incomingTweet.original_tweet.author.twitter_id,
          },
        })
      )[0],
    });

    // Make sure trackers collection is up to date
    const trackers = await entityService.findMany(TRACKERS, {
      populate: "*",
    });
    expect(trackers.length).toEqual(1);
    expect(trackers[0].twitter_user.twitter_id).toEqual("1524361268039233536");
  });

  it("tweet for existing prediction -> new tracker", async () => {
    expect(await entityService.findMany(TWITTER_USERS)).toEqual([]);
    expect(await entityService.findMany(TWEETS)).toEqual([]);
    expect(await entityService.findMany(PREDICTIONS)).toEqual([]);
    expect(await entityService.findMany(TRACKERS)).toEqual([]);

    // original tweet
    await entityService.create(TWEETS, {
      data: incomingTweet,
    });

    // new tweet referring to the same prediction
    await entityService.create(TWEETS, {
      data: Object.assign({}, incomingTweet, {
        twitter_id: "1524469496127401986-new",
        author: Object.assign({}, incomingTweet.author, {
          twitter_id: "1524361268039233536-new",
          username: "trackprediction-new",
        }),
      }),
    });

    // make sure there are 1 prediction, 2 tweets and 2 trackers
    expect((await entityService.findMany(PREDICTIONS)).length).toEqual(1);
    expect((await entityService.findMany(TWEETS)).length).toEqual(2);
    expect((await entityService.findMany(TRACKERS)).length).toEqual(2);
  });
});
