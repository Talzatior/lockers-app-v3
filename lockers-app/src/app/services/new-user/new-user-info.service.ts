import { Injectable } from '@angular/core';
import { LockerUser } from 'src/app/models/LockerUser.model';

@Injectable({
  providedIn: 'root'
})
export class NewUserInfoService {


  newLockerUser = new LockerUser('', '', '', '');

  userGender: string = "";
  userType: string = "";

  constructor() { }

  /* TYPE OF USER METHODS */

  setUserGender(value: string) {
    this.userGender = value;
  }

  setUserType(value: string) {
    this.userType = value;
  }

  getUserGender() {
    return this.userGender;
  }

  getUserType() {
    return this.userType;
  }

  /* USER INFOR?ATION METHODS */

  setNewUserInfo(lastName: string, firstName: string, personalNumber: string, company: string) {
    this.newLockerUser = new LockerUser(lastName, firstName, personalNumber, company);
  }

  getNewUserLastName() {
    return this.newLockerUser.lastName;
  }
  getNewUserFirstName() {
    return this.newLockerUser.firstName;
  }
  getNewUserPersonalNumber() {
    return this.newLockerUser.personalNumber;
  }
  getNewUserCompany() {
    return this.newLockerUser.company;
  }

  getNewUserInfo() : LockerUser {
    return this.newLockerUser;
  }

  // setUserName(value: string) {
  //   this.userName = value;
  // }

  // setUserFirstName(value: string) {
  //   this.userName = value;
  // }

  // setUserPersonalNumber(value: string) {
  //   this.userName = value;
  // }

  // setUserCompany(value: string) {
  //   this.userName = value;
  // }


}
