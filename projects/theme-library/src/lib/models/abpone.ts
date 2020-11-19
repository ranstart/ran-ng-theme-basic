// tslint:disable-next-line:no-namespace
export namespace Abpone {

    export interface ApplicationConfigration {
        tenant: ApplicationConfigrationTenant;
    }
    export interface ApplicationConfigrationTenant {
        apps: ApplicationConfigrationTenantApp[];
    }

    export interface ApplicationConfigrationTenantApp {
        appId: string;
        appName: string;
        appRouteName: string;
        appUrl: string;
        icon: string;
        expireDate: string;
        visibleRoles: string;
    }
}
