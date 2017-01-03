import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class Service {
    constructor(private http:Http) {}

    getUsers() {
        return this.http.get('https://api.stackexchange.com/2.2/users?order=desc&sort=reputation&site=stackoverflow')
            .map((res:Response) => res.json().items);
    }
}