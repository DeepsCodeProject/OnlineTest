import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()

export class UserDetailsService{
    constructor(private http: HttpClient){


    }
    getJSON(): Observable<any> {
        return this.http.get("./assets/json/user-details.json");
    }

    getUserList(): Observable<any> {
        return this.http.get("https://randomuser.me/api/0.8/?results=20")
    }
    
}