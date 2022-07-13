const pick = require("lodash.pick");
const { processEvent } = require("./process-event");
const { getTweetById } = require("./twitter");
const directTweet = require("../../../fixtures/direct-mention.json");
const mentionWithinReplyTweet = require("../../../fixtures/mention-within-reply.json");

jest.mock("./twitter", () => ({
  getTweetById: jest.fn(),
}));

describe("processEvent", () => {
  afterEach(() => {
    getTweetById.mockReset();
  });

  it("ignores events that do not look like new tweets", async () => {
    expect(await processEvent()).toEqual([]);
    expect(await processEvent({})).toEqual([]);
    expect(
      await processEvent({
        for_user_id: "1524361268039233536",
        user_has_blocked: false,
        tweet_smth_else_events: {},
      })
    ).toEqual([]);
  });

  it("ignores direct tweets", async () => {
    expect(await processEvent(directTweet)).toEqual([]);
  });

  it("returns data for the original tweet next to current tweet data", async () => {
    const tweetByIdResponse = {
      id: "1525252600530100226",
      text: "This Week @ NASA:\n\n• NASA telescopes help spot Milky Way's black hole\n• @NASAInSight detects largest marsquake yet\n• Scientists grow plants in lunar soil\n\nOur NASA Newsletter has even more space for you: https://t.co/MyG37QzGhO https://t.co/LcUnARub6w",
      lang: "en",
      created_at: "2022-05-13T23:12:12.000Z",
      author: {
        id: "11348282",
        description: "There's space for everybody. ✨",
        name: "NASA",
        profile_image_url:
          "https://pbs.twimg.com/profile_images/1321163587679784960/0ZxKlEKB_normal.jpg",
        url: "https://t.co/9NkQJKAnuU",
        username: "NASA",
      },
      data: {
        /* detailed data from the API call */
      },
    };
    getTweetById.mockImplementation(async () =>
      Promise.resolve(tweetByIdResponse)
    );
    expect(await processEvent(mentionWithinReplyTweet)).toEqual([
      {
        id: "1524469496127401986",
        created_at: "2022-05-11T19:20:25.807Z",
        text: "track this @trackprediction",
        lang: "en",
        author: {
          id: "1524361268039233536",
          name: "Prediction Tracker",
          username: "trackprediction",
          url: null,
          description: null,
          profile_image_url:
            "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
        },
        original_tweet: {
          id: "1525252600530100226",
          text: "This Week @ NASA:\n\n• NASA telescopes help spot Milky Way's black hole\n• @NASAInSight detects largest marsquake yet\n• Scientists grow plants in lunar soil\n\nOur NASA Newsletter has even more space for you: https://t.co/MyG37QzGhO https://t.co/LcUnARub6w",
          lang: "en",
          created_at: "2022-05-13T23:12:12.000Z",
          author: {
            id: "11348282",
            description: "There's space for everybody. ✨",
            name: "NASA",
            profile_image_url:
              "https://pbs.twimg.com/profile_images/1321163587679784960/0ZxKlEKB_normal.jpg",
            url: "https://t.co/9NkQJKAnuU",
            username: "NASA",
          },
        },
        original_tweet_data: tweetByIdResponse,
        event_data: mentionWithinReplyTweet,
      },
    ]);

    expect(getTweetById).toHaveBeenCalledTimes(1);
    expect(getTweetById).toHaveBeenCalledWith({
      tweetId: "1524468956765257728",
    });
  });
});
