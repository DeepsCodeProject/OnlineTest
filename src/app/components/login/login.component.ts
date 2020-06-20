import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../services/auth.service';
import { UserDetailsService } from '../../services/user-details.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username:string;
  public password:string;
  constructor(private http:HttpClient,private authService:AuthService) { }

  ngOnInit() {
  }
  
  login(){
    let currentUser = {'username':this.username,'password':this.password}
    localStorage.setItem('currentUser',JSON.stringify(currentUser));
    this.authService.login();
  }
}
