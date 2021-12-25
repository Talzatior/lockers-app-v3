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

  newUserForm: FormGroup = this.fb.group({
    lastName: ['', Validators.compose([Validators.required])],
    firstName: ['', Validators.compose([Validators.required])],
    personalNumber: ['', Validators.compose([])],
    company: ['', Validators.compose([Validators.required])]
  });

  lockerNumberForm: FormGroup = this.fb.group({
    lockerNumber: ['1', Validators.required]
  });

  userGender: string = this.newUserInfoService.getUserGender();
  userType: string = this.newUserInfoService.getUserType();
  numberOfLocker = "";

  submitForm() {
    const newUserFormValue = this.newUserForm.value;
    this.newUserInfoService.setNewUserInfo(newUserFormValue['lastName'], newUserFormValue['firstName'], newUserFormValue['personalNumber'], newUserFormValue['company']);

    console.log('Last Name : ' + this.newUserInfoService.newLockerUser.lastName); // TODEL
    console.log('First name : ' + this.newUserInfoService.newLockerUser.firstName); // TODEL
    console.log('Personal number : ' + this.newUserInfoService.newLockerUser.personalNumber); // TODEL
    console.log('Company : ' + this.newUserInfoService.newLockerUser.company); // TODEL

    let lockerNumberFormValue = this.lockerNumberForm.value;
    console.log('Nombre de casier(s) à donner : ' + lockerNumberFormValue['lockerNumber']) // TODEL

    this.router.navigate(['/new-locker/docToSign']);
  }


}
