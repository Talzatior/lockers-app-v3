import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import {ReactiveFormsModule } from '@angular/forms';


import { GenderComponent } from './gender/gender.component';
import { TypeOfComponent } from './type-of/type-of.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { DocToSignComponent } from './doc-to-sign/doc-to-sign.component';

@NgModule({
  declarations: [
    GenderComponent,
    TypeOfComponent,
    RegistrationFormComponent,
    DocToSignComponent
  ],
  imports: [
    AppRoutingModule,
    ReactiveFormsModule
  ]
})
export class NewLockerModule { }
