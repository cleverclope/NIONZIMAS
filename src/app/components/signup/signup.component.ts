import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { MessageService } from 'src/app/_helpers/messages';
import { EndPointsService } from 'src/app/_services/endpoints.service';
import {formatDate} from '@angular/common'
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
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
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  loading: any;
  apidata:SignUpData | null = null
  isEditable = false;

  constructor(
    private _formBuilder: FormBuilder,
    private message:MessageService,
    private HttpClient:HttpClient,
    private endpoints:EndPointsService
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
}









