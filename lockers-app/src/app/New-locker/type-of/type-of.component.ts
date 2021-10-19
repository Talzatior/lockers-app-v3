import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-of',
  templateUrl: './type-of.component.html',
  styleUrls: ['./type-of.component.css']
})
export class TypeOfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  typeOfSelector(value: string) {
    console.log(value); //TODEL
  }

}
