export default ({ env }) => {
  if (env("NODE_ENV") === "test") {
    return {
      connection: {
        client: "sqlite",
        connection: {
          filename: ".tmp/data.db",
        },
        useNullAsDefault: true,
      },
    };
  }
  return {
    connection: {
      client: "postgres",
      connection: {
        host: env("DATABASE_HOST", "127.0.0.1"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "prediction-tracker"),
        user: env("DATABASE_USERNAME", "pythia"),
        password: env("DATABASE_PASSWORD", "delphi"),
        ssl: !env.bool("DATABASE_SSL", false)
          ? false
          : { rejectUnauthorized: false },
      },
    },
  };
};
