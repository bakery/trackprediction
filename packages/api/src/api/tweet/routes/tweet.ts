/**
 * tweet router.
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::tweet.tweet", {
  only: ["create", "find"],
  config: {
    create: {
      middlewares: [
        (ctx, next) => {
          const { request } = ctx;
          if (request.header.authorization !== process.env.API_AUTH) {
            return ctx.throw(401, "Unauthorized");
          }
          return next();
        },
      ],
    },
  },
});
