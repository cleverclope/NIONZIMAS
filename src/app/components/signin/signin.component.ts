import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  username: any;
  password: any;
  loginForm:any;
  Login:any;
  constructor(
    public authservice: AuthService
  ){

  }

  ngOnInit(){
    this.Login = "Login"
    
    this.loginForm = new FormGroup({
      Username: new FormControl('',[Validators.required]),
      Password: new FormControl('',[Validators.required]),
    });

  }

  onLogin(){
    this.username = this.getValue.Username.value
    this.password = this.getValue.Password.value
    
    this.authservice.login(this.username,this.password)
  }

  get getValue(){
    return this.loginForm.controls
  }

}
