import { Component, OnInit } from '@angular/core';
import { NewUserInfoService } from '../../services/new-user/new-user-info.service';

@Component({
  selector: 'app-type-of',
  templateUrl: './type-of.component.html',
  styleUrls: ['./type-of.component.css']
})
export class TypeOfComponent implements OnInit {

  constructor(private newUserInfoService: NewUserInfoService) { }

  ngOnInit(): void {
  }

  typeOfSelector(value: string) {
    console.log(value); //TODEL
    this.newUserInfoService.setUserType(value)
  }

}
