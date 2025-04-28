export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1338),
  url: 'http://localhost:1338',
  app: {
    keys: env.array('APP_KEYS'),
  },
  proxy: true,
});
