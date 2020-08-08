import { ABP } from '@abp/ng.core';
// tslint:disable-next-line:no-namespace
export namespace Application {
    export type ITenantApplicationResponse = ABP.PagedItemsResponse<ITenantApplication>;

    export interface ITenantApplication {
        // 名字
        applicationName: string;
        // 有效期
        expireDate: string;
        // 图标
        icon: string;
        // 链接
        url: string;
    }
}
