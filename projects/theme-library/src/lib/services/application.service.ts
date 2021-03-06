import { Rest, RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Application } from '../models/application';


@Injectable()
export class ApplicationService {

    apiName = 'RanHome';

    constructor(private rest: RestService) { }

    getTenantApplications(): Observable<Application.ITenantApplicationResponse> {
        const request: Rest.Request<null> = {
            method: 'GET',
            url: `/api/Home/TenantApplication`,
        };
        return this.rest.request<null, Application.ITenantApplicationResponse>(request, { apiName: this.apiName });
    }
}
