import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewUserInfoService } from '../../services/new-user/new-user-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  constructor(
    private newUserInfoService: NewUserInfoService,
    private fb: FormBuilder,
    private router: Router) {}

  ngOnInit(): void {
  }


  // userGender: string= "";
  // userType: string = "";

  // typeOfUser() {
  //   this.userGender = this.userTypeService.getUserGender();
  //   this.userType = this.userTypeService.getUserType();
  //   console.log(this.userGender + ", " + this.userType);
  // }

  newUserForm: FormGroup = this.fb.group({
    lastName: ['', Validators.compose([Validators.required])],
    firstName: ['', Validators.compose([Validators.required])],
    personalNumber: ['', Validators.compose([])],
    company: ['', Validators.compose([Validators.required])]
  })

  submitForm() {
    const formValue = this.newUserForm.value;
    this.newUserInfoService.setNewUserInfo(formValue['lastName'], formValue['firstName'], formValue['personalNumber'], formValue['company']);

    console.log('Last Name : ' + this.newUserInfoService.newLockerUser.lastName);
    console.log('First name : ' + this.newUserInfoService.newLockerUser.firstName);
    console.log('Personal number : ' + this.newUserInfoService.newLockerUser.personalNumber);
    console.log('Company : ' + this.newUserInfoService.newLockerUser.company);

    this.router.navigate(['/new-locker/docToSign']);
  }


}
