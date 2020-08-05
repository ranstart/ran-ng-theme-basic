export const environment = {
  production: true,
  hmr: false,
  application: {
    name: 'Theme',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44330',
    clientId: 'Theme_ConsoleTestApp',
    dummyClientSecret: '1q2w3e*',
    scope: 'Theme',
    showDebugInformation: true,
    oidc: false,
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:44371',
    },
  },
  localization: {
    defaultResourceName: 'Theme',
  },
};
