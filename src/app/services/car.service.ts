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

    public getCars(): Observable<any> {
        const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.get(this.url + 'cars', { headers });
    }

    public getCar(id): Observable<any> {
        const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.get(this.url + `cars/${id}`, { headers });
    }

    public update(token, car, id): Observable<any> {
        const json = JSON.stringify(car);
        const params = 'json=' + json;
        const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        .set('Authorization', token);
        return this._http.put(this.url + `cars/${id}`, params, { headers });
    }

    public delete(token, id): Observable<any> {
        const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        .set('Authorization', token);
        return this._http.delete(this.url + `cars/${id}`, { headers });
    }
}
