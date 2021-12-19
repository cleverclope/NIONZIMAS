import { SignupUserService } from './../../_services/signup-user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { MessageService } from 'src/app/_helpers/messages';
import { EndPointsService } from 'src/app/_services/endpoints.service';
import {formatDate} from '@angular/common'
import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import SignUpUser from 'src/app/models/signup-user';
interface HttpApiResponse {
  code:number;
  message:string;
  JsonResult:SignUpData;
}

export interface SignUpData{
  Email:string;
  Gender:string;
  Names:string;
  DateOfBirth:string;
  CreateDate:string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  @Input() firstFormGroup!: FormGroup;
  // firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  loading: any;
  apidata:SignUpData | null = null
  isEditable = false;

  constructor(
    private _formBuilder: FormBuilder,
    private message:MessageService,
    private HttpClient:HttpClient,
    private endpoints:EndPointsService,
    private _signupUserService: SignupUserService,
    ) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      entityid: ['', Validators.required],
      EntityName: ['', Validators.required],
      EntityContact: ['', Validators.required],
      PhysicalAddress: ['', Validators.required],
      EmailAddress: ['', Validators.required],
    });

    this.secondFormGroup = this._formBuilder.group({
      Password: ['', Validators.required],
      Contact: ['', Validators.required],
      name: ['', Validators.required],
      gender: ['', Validators.required],
      mail: ['', Validators.required],
      dob: ['', Validators.required],
    });
  }

  submitStepOne(){
    const companyID = this.firstFormGroup.get('entityid')!.value;
    const companyName = this.firstFormGroup.get('EntityName')!.value;
    const companyContact = this.firstFormGroup.get('EntityContact')!.value;
    const companyAdress = this.firstFormGroup.get('PhysicalAddress')!.value;
    const addressEmail = this.firstFormGroup.get('EmailAddress')!.value;

    const myName = this.secondFormGroup.get('name')!.value;
    const myContacts = this.secondFormGroup.get('Contact')!.value;
    const gender = this.secondFormGroup.get('gender')!.value;
    const dob = this.secondFormGroup.get('dob')!.value;
    const personalEmail = this.secondFormGroup.get('mail')!.value;
    const password = this.secondFormGroup.get('Password')!.value;

    console.log(companyID, companyName, companyContact, companyAdress, addressEmail, myName, myContacts, gender, dob, personalEmail, password)

    const signUpDetails = new SignUpUser('',companyID, companyName, companyContact, companyAdress, addressEmail, myName, myContacts,
    gender, dob, personalEmail, password)

    this._signupUserService.saveClient(signUpDetails)


  }
}









