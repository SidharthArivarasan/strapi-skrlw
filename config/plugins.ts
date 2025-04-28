export default ({ env }) => ({
    'users-permissions': {
      config: {
        providers: [
          {
            uid: 'google',
            displayName: 'Google',
            icon: 'https://cdn-icons-png.flaticon.com/512/2702/2702602.png',
            authEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
            tokenEndpoint: 'https://oauth2.googleapis.com/token',
            userEndpoint: 'https://openidconnect.googleapis.com/v1/userinfo',
            scope: ['openid', 'profile', 'email'],
            params: {
              clientId: env('GOOGLE_CLIENT_ID'),
              clientSecret: env('GOOGLE_CLIENT_SECRET'),
              prompt: 'consent',
            },
          },
        ],
      },
    },
  });
  