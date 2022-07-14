export default ({ env }) => ({
  graphql: {
    enabled: true,
    config: {
      playgroundAlways: true,
      defaultLimit: 10,
      maxLimit: 20,
      apolloServer: {},
    },
  },
});
