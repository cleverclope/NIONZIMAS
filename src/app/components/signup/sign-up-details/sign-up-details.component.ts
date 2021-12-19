import { Component, Input, OnInit } from '@angular/core';
import { SignUpData } from '../signup.component';

@Component({
  selector: 'app-sign-up-details',
  templateUrl: './sign-up-details.component.html',
  styleUrls: ['./sign-up-details.component.scss']
})
export class SignUpDetailsComponent implements OnInit {

  //Define Input Properties
  @Input() JsonResult:SignUpData | null = null;
  
  constructor() { }

  ngOnInit(): void {
  }

}
