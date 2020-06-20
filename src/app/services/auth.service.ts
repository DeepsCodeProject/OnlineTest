import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { UserDetailsService } from "./user-details.service";
import { Router } from "@angular/router";

@Injectable()

export class AuthService{
    constructor(private http: HttpClient,private userDetailsService:UserDetailsService,private router:Router){


    }
    login():any{
        debugger
        let loginUser = JSON.parse(localStorage.getItem('currentUser'))
        console.log(loginUser)
        this.userDetailsService.getJSON().subscribe(result => {
            console.log(result);
            //result.filter(item=> item.)
            result.forEach(user => {
                if(user.username == loginUser['username'] && user.password == loginUser['password']){
                   // return true;
                 //  this.userDetailsService.getUserList().subscribe(result=>{
                 //   localStorage.setItem('userDetails',JSON.stringify((result['results'])));
                //})
                    this.router.navigateByUrl('/home');
                }
            });
        });
        
    }
    
}