import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http'; //Peticiones Http
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class RequestService {
    public urlUser: string; 
    constructor(
        private _http: Http
    ) {
        this.urlUser = 'https://jsonplaceholder.typicode.com/posts';
    }
    getTest() {
        return 'Hola mundo';
    }

    getUser() {
        return this._http.get(this.urlUser)
            .map(res => res.json());
    }
}