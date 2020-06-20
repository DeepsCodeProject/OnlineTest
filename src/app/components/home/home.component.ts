import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../../services/user-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userDetailsService:UserDetailsService,private router:Router) { }
  userDetails:any;
  ngOnInit() {
    //this.userDetails = JSON.parse(localStorage.getItem('UserDetails'));

    this.userDetailsService.getUserList().subscribe(result=>{
        this.userDetails = result['results'];
        
    })
 }

  createUser(){
      this.router.navigateByUrl('home/create-user')
  }
}
