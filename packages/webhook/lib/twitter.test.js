const { getTweetById, tweetByIdParams } = require("./twitter");
const tweetWithLinksAndMediaAndMentions = require("../../../fixtures/tweets/with-link-media-and-mention.json");

// {"errors":[{"resource_type":"tweet","field":"non_public_metrics.impression_count","parameter":"id","resource_id":"1525252600530100226","title":"Field Authorization Error","section":"data","detail":"Sorry, you are not authorized to access 'non_public_metrics.impression_count' on the Tweet with id : [1525252600530100226].","value":"1525252600530100226","type":"https://api.twitter.com/2/problems/not-authorized-for-field"},{"resource_type":"tweet","field":"non_public_metrics.url_link_clicks","parameter":"id","resource_id":"1525252600530100226","title":"Field Authorization Error","section":"data","detail":"Sorry, you are not authorized to access 'non_public_metrics.url_link_clicks' on the Tweet with id : [1525252600530100226].","value":"1525252600530100226","type":"https://api.twitter.com/2/problems/not-authorized-for-field"},{"resource_type":"tweet","field":"non_public_metrics.user_profile_clicks","parameter":"id","resource_id":"1525252600530100226","title":"Field Authorization Error","section":"data","detail":"Sorry, you are not authorized to access 'non_public_metrics.user_profile_clicks' on the Tweet with id : [1525252600530100226].","value":"1525252600530100226","type":"https://api.twitter.com/2/problems/not-authorized-for-field"},{"resource_type":"tweet","field":"organic_metrics.impression_count","parameter":"id","resource_id":"1525252600530100226","title":"Field Authorization Error","section":"data","detail":"Sorry, you are not authorized to access 'organic_metrics.impression_count' on the Tweet with id : [1525252600530100226].","value":"1525252600530100226","type":"https://api.twitter.com/2/problems/not-authorized-for-field"},{"resource_type":"tweet","field":"organic_metrics.like_count","parameter":"id","resource_id":"1525252600530100226","title":"Field Authorization Error","section":"data","detail":"Sorry, you are not authorized to access 'organic_metrics.like_count' on the Tweet with id : [1525252600530100226].","value":"1525252600530100226","type":"https://api.twitter.com/2/problems/not-authorized-for-field"},{"resource_type":"tweet","field":"organic_metrics.reply_count","parameter":"id","resource_id":"1525252600530100226","title":"Field Authorization Error","section":"data","detail":"Sorry, you are not authorized to access 'organic_metrics.reply_count' on the Tweet with id : [1525252600530100226].","value":"1525252600530100226","type":"https://api.twitter.com/2/problems/not-authorized-for-field"},{"resource_type":"tweet","field":"organic_metrics.retweet_count","parameter":"id","resource_id":"1525252600530100226","title":"Field Authorization Error","section":"data","detail":"Sorry, you are not authorized to access 'organic_metrics.retweet_count' on the Tweet with id : [1525252600530100226].","value":"1525252600530100226","type":"https://api.twitter.com/2/problems/not-authorized-for-field"},{"resource_type":"tweet","field":"organic_metrics.url_link_clicks","parameter":"id","resource_id":"1525252600530100226","title":"Field Authorization Error","section":"data","detail":"Sorry, you are not authorized to access 'organic_metrics.url_link_clicks' on the Tweet with id : [1525252600530100226].","value":"1525252600530100226","type":"https://api.twitter.com/2/problems/not-authorized-for-field"},{"resource_type":"tweet","field":"organic_metrics.user_profile_clicks","parameter":"id","resource_id":"1525252600530100226","title":"Field Authorization Error","section":"data","detail":"Sorry, you are not authorized to access 'organic_metrics.user_profile_clicks' on the Tweet with id : [1525252600530100226].","value":"1525252600530100226","type":"https://api.twitter.com/2/problems/not-authorized-for-field"},{"resource_type":"tweet","field":"promoted_metrics.impression_count","parameter":"id","resource_id":"1525252600530100226","title":"Field Authorization Error","section":"data","detail":"Sorry, you are not authorized to access 'promoted_metrics.impression_count' on the Tweet with id : [1525252600530100226].","value":"1525252600530100226","type":"https://api.twitter.com/2/problems/not-authorized-for-field"},{"resource_type":"tweet","field":"promoted_metrics.like_count","parameter":"id","resource_id":"1525252600530100226","title":"Field Authorization Error","section":"data","detail":"Sorry, you are not authorized to access 'promoted_metrics.like_count' on the Tweet with id : [1525252600530100226].","value":"1525252600530100226","type":"https://api.twitter.com/2/problems/not-authorized-for-field"},{"resource_type":"tweet","field":"promoted_metrics.reply_count","parameter":"id","resource_id":"1525252600530100226","title":"Field Authorization Error","section":"data","detail":"Sorry, you are not authorized to access 'promoted_metrics.reply_count' on the Tweet with id : [1525252600530100226].","value":"1525252600530100226","type":"https://api.twitter.com/2/problems/not-authorized-for-field"},{"resource_type":"tweet","field":"promoted_metrics.retweet_count","parameter":"id","resource_id":"1525252600530100226","title":"Field Authorization Error","section":"data","detail":"Sorry, you are not authorized to access 'promoted_metrics.retweet_count' on the Tweet with id : [1525252600530100226].","value":"1525252600530100226","type":"https://api.twitter.com/2/problems/not-authorized-for-field"},{"resource_type":"tweet","field":"promoted_metrics.url_link_clicks","parameter":"id","resource_id":"1525252600530100226","title":"Field Authorization Error","section":"data","detail":"Sorry, you are not authorized to access 'promoted_metrics.url_link_clicks' on the Tweet with id : [1525252600530100226].","value":"1525252600530100226","type":"https://api.twitter.com/2/problems/not-authorized-for-field"},{"resource_type":"tweet","field":"promoted_metrics.user_profile_clicks","parameter":"id","resource_id":"1525252600530100226","title":"Field Authorization Error","section":"data","detail":"Sorry, you are not authorized to access 'promoted_metrics.user_profile_clicks' on the Tweet with id : [1525252600530100226].","value":"1525252600530100226","type":"https://api.twitter.com/2/problems/not-authorized-for-field"}]}

describe("getTweetById", () => {
  it("grabs tweet + author data", async () => {
    const twitterClient = {
      singleTweet: jest.fn(async () => {
        return Promise.resolve(tweetWithLinksAndMediaAndMentions);
      }),
    };

    expect(
      await getTweetById({
        tweetId: "1525252600530100226",
        client: twitterClient,
      })
    ).toEqual({
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
      data: tweetWithLinksAndMediaAndMentions,
    });
    expect(twitterClient.singleTweet).toHaveBeenCalledTimes(1);
    expect(twitterClient.singleTweet).toBeCalledWith(
      "1525252600530100226",
      tweetByIdParams
    );
  });

  it("throws if API call fails", async () => {
    const twitterClient = {
      singleTweet: jest.fn(async () => {
        return Promise.resolve({
          errors: [{ error_type: "something went wrong" }],
        });
      }),
    };

    await expect(
      getTweetById({
        tweetId: "1525252600530100226",
        client: twitterClient,
      })
    ).rejects.toThrow("API call failed");
  });

  it("throws if API call throws", async () => {
    const twitterClient = {
      singleTweet: jest.fn(async () => {
        return Promise.reject({
          errors: [{ error_type: "something went wrong" }],
        });
      }),
    };

    await expect(
      getTweetById({
        tweetId: "1525252600530100226",
        client: twitterClient,
      })
    ).rejects.toThrow("API call failed");
  });
});
