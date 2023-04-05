export default ({ env }) => ({
  host: env("HOST", "202.181.146.26"),
  port: env.int("PORT", 1338),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
