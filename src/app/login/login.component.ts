import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from '../Services/login-service.service';
import { error } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router, private loginService:LoginServiceService) { }

  result:any;

  ngOnInit(): void {
    
  }

  login(loginForm: NgForm) {
    this.loginService.loginUser(loginForm?.value?.email, loginForm?.value?.password).subscribe((res:any) => {
      localStorage.setItem("user", JSON.stringify(res?.data));
      if (res?.data?.role === "Staff") {
        this.route.navigate(['/staff']);
      } else {
        this.route.navigate(['/manager']);
      }
    }, error => {
      alert("Login Failer, Retry");
      console.log(error);
    });
  }






}
