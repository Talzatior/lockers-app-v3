import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { GenderComponent } from './gender/gender.component';
import { TypeOfComponent } from './type-of/type-of.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';



@NgModule({
  declarations: [
    GenderComponent,
    TypeOfComponent,
    RegistrationFormComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class NewLockerModule { }
