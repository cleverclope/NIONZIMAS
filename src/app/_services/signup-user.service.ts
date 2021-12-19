import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import SignUpUser from '../models/signup-user';
import { IP_ADRESS_PORT } from 'src/app/Networks/network_config';

@Injectable({
  providedIn: 'root'
})
export class SignupUserService {
  BASE_URL = `${IP_ADRESS_PORT}/staff-members`

  constructor( private _http: HttpClient) { }

  public saveClient(postData: SignUpUser) {
    let endPoint = "/staff-members"
    // this._http.post(this.BASE_URL + endpoint, postData).subscribe(data => {
    this._http.post(this.BASE_URL, postData).subscribe(data => {
      console.log(data);
    });
  }

}
