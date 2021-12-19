import { Injectable, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { EndPointsService } from "./endpoints.service";
import { MessageService } from "../_helpers/messages";
// import { MessageService } from "../../_helpers/messages";
// import { JwtHelperService } from "@auth0/angular-jwt";
let params = new HttpParams();

interface HttpApiResponse {
  code:number;
  message:string;
  data?:string;
  token?:string;
}

@Injectable({
  providedIn: "root",
})
export class AuthService implements OnInit {
  public loggedIn = new BehaviorSubject<boolean>(false);
  public logon: any;
  
  ngOnInit() {
    this.logon = "Logon"
  }

  constructor(
    private router: Router,
    private HttpClient: HttpClient,
    private endpoints: EndPointsService,
    private message: MessageService
  ) {}

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  loginStatusMsg = "";
  login(username: string, password: string) {
    this.logon = "Processing.."
      let data = {
        Username: username,
        Password: password,
      };
      this.HttpClient.post<HttpApiResponse>(this.endpoints.AuthEndpoint(),data)
      .subscribe((response) =>{
          console.log("Response",response)
          if(response.code==200)
          {
            this.router.navigate(['/dashboard'])
          }else{
              this.message.errorMsg("Login failed","Incorect Username/Password")
          }
          this.logon = "Login"
         }
      )
  }

}
