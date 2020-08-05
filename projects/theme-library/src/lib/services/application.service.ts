import { Rest, RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Application } from '../models/application';


@Injectable()
export class ApplicationService {
    constructor(private rest: RestService) { }

    getTenantApplications(): Observable<Application.ITenantApplicationResponse> {
        const request: Rest.Request<null> = {
            method: 'GET',
            url: `/api/Home/TenantApplication`,
        };
        return this.rest.request<null, Application.ITenantApplicationResponse>(request);
    }

    getTenantApplicationsById(id: string, tenantId: string): Observable<Application.ITenantApplicationResponse> {
        const request: Rest.Request<null> = {
            method: 'GET',
            url: `/api/Home/TenantApplication/${id}`,
            params: { tenantId }
        };
        return this.rest.request<null, Application.ITenantApplicationResponse>(request);
    }

}
