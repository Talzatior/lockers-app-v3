import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    FormControl,
    FormGroup
  ],
  exports: [
    CommonModule,
    RouterModule,
  ]
})
export class SharedModulesModule { }
