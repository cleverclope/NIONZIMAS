import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class EndPointsService {
  LOCAL_SERVER = 'http://localhost:1000/erpRealmAPI/1.0/';
  

  private login = 'auth/login';
  private CreateUserAccount='auth/CreateUserAccount';
  
  AuthEndpoint(){
    return this.LOCAL_SERVER + this.login
  }
  AuthAccountCreate(){
    return this.LOCAL_SERVER + this.CreateUserAccount
  }
  
}
