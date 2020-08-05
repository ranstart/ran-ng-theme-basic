// export const environment = {
//   production: false,
//   hmr: false,
//   application: {
//     name: 'teambition',
//     logoUrl: 'https://g.alicdn.com/teambition/web/teambition/images/tb-logo.62eaedbd.svg',
//   },
//   oAuthConfig: {
//     issuer: 'https://localhost:44330',
//     clientId: 'Theme_ConsoleTestApp',
//     dummyClientSecret: '1q2w3e*',
//     scope: 'Theme',
//     showDebugInformation: true,
//     oidc: false,
//     requireHttps: true,
//   },
//   apis: {
//     default: {
//       url: 'https://localhost:44371',
//       AbpIdentity: 'https://localhost:44330'
//     },
//   },
//   localization: {
//     defaultResourceName: 'Theme',
//   },
// };

export const environment = {
  production: false,
  hmr: false,
  application: {
    name: '沂南流动党员建设管理平台',
    logoUrl: 'http://bangfu.ran.xyz//TenantCustomization/GetTenantLogo?skin=light&tenantId=1&id=38de16e3-1f81-185f-f5e4-39ef161caec5'
  },
  oAuthConfig: {
    issuer: 'https://localhost:44355',
    clientId: 'Zuzhibu_App',
    dummyClientSecret: '1q2w3e*',
    scope: 'Zuzhibu',
    showDebugInformation: true,
    oidc: false,
    requireHttps: false
  },
  apis: {
    default: {
      url: 'https://localhost:44355'
    }
  },
  localization: {
    defaultResourceName: 'Zuzhibu'
  }
};


