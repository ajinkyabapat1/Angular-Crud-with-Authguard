import { Component, OnInit } from '@angular/core';
//import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
class Registration {
  constructor(
    public firstName: string = '',
    public lastName: string = '',
   // public dob: NgbDateStruct = null,
    public email: string = '',
    public password: string = '',
    public country: string = 'Select country'
  ) {}
}
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
