import { environment } from './../../environments/environment';
import { User } from './../models/user';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
 
@Injectable()
export class UserService {
    public url: string;

    constructor(
        public _http: HttpClient
    ){
        this.url = environment.url
    }

    test() {
        return 'Hello world';
    }

    register(user): Observable<any> {
        const json = JSON.stringify(user);
        const params = 'json='+ json;
        const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        console.log(params);
        return this._http.post(this.url + 'register', params, {headers: headers});
    }
}