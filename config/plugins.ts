export default ({ env }) => ({
    'users-permissions': {
      config: {
        providers: [
          {
            uid: 'okta',
            displayName: 'Okta',
            icon: 'https://okta.com/favicon.ico',
            createStrategy: require('@strapi/plugin-users-permissions/server/providers/openid-connect'),
            strategy: 'openid-connect',
            params: {
              issuer: env('OKTA_ISSUER'),
              clientId: env('OKTA_CLIENT_ID'),
              clientSecret: env('OKTA_CLIENT_SECRET'),
              scope: ['openid', 'profile', 'email'],
              state: true,
            },
          },
        ],
      },
    },
  });
  