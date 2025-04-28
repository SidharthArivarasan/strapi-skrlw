export default ({ env }) => ({
    'users-permissions': {
      config: {
        providers: [
          {
            uid: 'google',
            displayName: 'Google',
            icon: 'https://cdn-icons-png.flaticon.com/512/2702/2702602.png',
            createStrategy: require('@strapi/plugin-users-permissions/server/providers/google').default,
            strategy: 'google',
            params: {
              clientId: env('GOOGLE_CLIENT_ID'),
              clientSecret: env('GOOGLE_CLIENT_SECRET'),
              scope: ['openid', 'profile', 'email'],
              prompt: 'consent',
            },
          },
        ],
      },
    },
  });
  