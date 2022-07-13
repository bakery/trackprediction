const { saveTweets } = require("./sync");

describe("saveTweets", () => {
  it("works", async () => {
    const axiosInstance = {
      post: jest.fn(() => Promise.resolve({})),
    };
    await saveTweets({
      tweets: [
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
          original_tweet_data: {},
          event_data: {},
        },
      ],
      axiosInstance,
    });

    expect(axiosInstance.post).toHaveBeenCalledTimes(1);
    expect(axiosInstance.post.mock.calls[0]).toEqual([
      "/tweets",
      {
        data: {
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
            lang: "en",
            twitter_created_at: "2022-05-13T23:12:12.000Z",
            author: {
              twitter_id: "11348282",
              description: "There's space for everybody. ✨",
              name: "NASA",
              profile_image_url:
                "https://pbs.twimg.com/profile_images/1321163587679784960/0ZxKlEKB_normal.jpg",
              url: "https://t.co/9NkQJKAnuU",
              username: "NASA",
            },
          },
          original_tweet_data: {},
          event_data: {},
        },
      },
    ]);
  });
});
