import { Component, OnInit } from '@angular/core';
import { NewUserInfoService } from '../../services/new-user/new-user-info.service'

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.css']
})
export class GenderComponent implements OnInit {

  constructor(private newUserInfoService: NewUserInfoService) { }

  ngOnInit(): void {
  }

  genderSelector(value: string) {
    console.log(value); //TODEL
    this.newUserInfoService.setUserGender(value)
  }

}
