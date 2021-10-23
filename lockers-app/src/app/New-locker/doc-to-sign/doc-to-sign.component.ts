import { Component, OnInit } from '@angular/core';
import { NewUserInfoService } from '../../services/new-user/new-user-info.service';

@Component({
  selector: 'app-doc-to-sign',
  templateUrl: './doc-to-sign.component.html',
  styleUrls: ['./doc-to-sign.component.css']
})
export class DocToSignComponent implements OnInit {

  constructor(private newUserInfoService: NewUserInfoService) { }

  ngOnInit(): void {
  }

  lastName: string = this.newUserInfoService.getNewUserLastName();
  firstName: string = this.newUserInfoService.getNewUserFirstName();
  personalNumber: string = this.newUserInfoService.getNewUserPersonalNumber();
  company: string = this.newUserInfoService.getNewUserCompany();
  
  

}
