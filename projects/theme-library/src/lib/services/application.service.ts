import { Rest, RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Abpone } from '../models/abpone';


@Injectable()
export class ApplicationConfigrationService {

    apiName = 'Abpone';

    constructor(private rest: RestService) { }

    getApplicationConfigration(): Observable<Abpone.ApplicationConfigration> {
        const request: Rest.Request<null> = {
            method: 'GET',
            url: `/api/abpone/application-configuration`,
        };
        return this.rest.request<null, Abpone.ApplicationConfigration>(request, { apiName: this.apiName });
    }
}
