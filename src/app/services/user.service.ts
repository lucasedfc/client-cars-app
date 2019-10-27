import { environment } from './../../environments/environment';
import { User } from './../models/user';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
    public url: string;
    public identity;
    public token;
    constructor(
        // tslint:disable-next-line:variable-name
        public _http: HttpClient
    ) {
        this.url = environment.url;
    }

    test() {
        return 'Hello world';
    }

    register(user): Observable<any> {
        const json = JSON.stringify(user);
        const params = 'json=' + json;
        const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.url + 'register', params, {headers});
    }

    signin(user, gettoken = null): Observable<any> {
        if (gettoken != null) {
            user.gettoken = 'true';
        }
        const json = JSON.stringify(user);
        const params = 'json=' + json;
        const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.url + 'login', params, { headers });
    }

    getIdentity() {
     const identity = JSON.parse(localStorage.getItem('identity'));
     if (identity !== 'undefined') {
            this.identity = identity;
        } else {
            this.identity = null;
        }
     return this.identity;
    }

    getToken() {
        const token = localStorage.getItem('token');
        if (token !== 'undefined') {
            this.token = token;
        } else {
            this.token = null;
        }
        return this.token;
       }
}
