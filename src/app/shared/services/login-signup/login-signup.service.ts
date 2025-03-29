import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login-signup',
  imports: [],
  templateUrl: './login-signup.component.html',
  styleUrl: './login-signup.component.css'
})
export class LoginSignupComponent {

  public login_url = "http://localhost:3000"
  public reg_url = "http://localhost:3000"

  constructor(private http:HttpClient, private apiService:ApiService) {}
  authLogin(user_name:any, password:any):Observable<any>{
    return this.apiService.get(this.login_url+'/user?email='+user_name+'&password=+password');
  }

  userRegister(user_dto:any):Observable<any>{
    return this.apiService.post(this.reg_url+'/user', user_dto)
  }

  adminLogin(user_name:any, password:any):Observable<any>{
    return this.apiService.get(this.login_url+'/user?email='+user_name+'&password='+password+'&role=admin');
  }
}
