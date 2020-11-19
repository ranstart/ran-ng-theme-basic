export const environment = {
  production: false,
  hmr: false,
  application: {
    name: 'Abpone',
    logoUrl: 'https://g.alicdn.com/teambition/web/teambition/images/tb-logo.62eaedbd.svg',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44335',
    clientId: 'Abpone_ConsoleTestApp',
    dummyClientSecret: '1q2w3e*',
    scope: 'Abpone',
    showDebugInformation: true,
    oidc: false,
    requireHttps: false,
  },
  apis: {
    default: {
      url: 'https://localhost:44335',
    },
  },
  localization: {
    defaultResourceName: 'Abpone',
  },
};
