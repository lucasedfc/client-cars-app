import { Car } from './../models/car';
import { environment } from './../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CarService {
    public url: string;
    public identity;
    public token;
    constructor(
        // tslint:disable-next-line:variable-name
        public _http: HttpClient
    ) {
        this.url = environment.url;
    }

    public create(token, car: Car): Observable<any> {
        const json = JSON.stringify(car);
        const params = 'json=' + json;
        const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        .set('Authorization', token);
        return this._http.post(this.url + 'cars', params, { headers });
    }
}
