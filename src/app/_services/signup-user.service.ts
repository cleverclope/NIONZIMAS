import { EndPointsService } from 'src/app/_services/endpoints.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import SignUpUser from '../models/signup-user';
// import { IP_ADRESS_PORT } from 'src/app/Networks/network_config';

@Injectable({
  providedIn: 'root'
})
export class SignupUserService {

  // BASE_URL = `${IP_ADRESS_PORT}`

  constructor( private _http: HttpClient,
    private endpoints: EndPointsService) { }

  public saveClient(postData: SignUpUser) {
    
    let endPoint = "CreateUserAccount"
    this._http.post(this.endpoints.AuthEndpoint(), postData).subscribe(data => {
      console.log(data);
    });
  }

}
