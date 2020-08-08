export const environment = {
  production: false,
  hmr: false,
  application: {
    name: 'teambition',
    logoUrl: 'https://g.alicdn.com/teambition/web/teambition/images/tb-logo.62eaedbd.svg',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44306',
    clientId: 'LinyiChurujing_App',
    dummyClientSecret: '1q2w3e*',
    scope: 'LinyiChurujing',
    showDebugInformation: true,
    oidc: false,
    requireHttps: false,
  },
  apis: {
    default: {
      url: 'https://localhost:44306',
    },
  },
  localization: {
    defaultResourceName: 'LinyiChurujing',
  },
};
