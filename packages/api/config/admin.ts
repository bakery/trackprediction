export default ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "dcc1c2a448efb4cca161d2d676b4165c"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
});
