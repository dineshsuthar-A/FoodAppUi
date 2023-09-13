import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }
  
  loginUser(email:any, password:any) {
    return this.http.post(environment.apiUrl + "user/login", {
      "email": email,
      "password" : password
    })
  }
}
