import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { GenderComponent } from './New-locker/gender/gender.component';
import { RegistrationFormComponent } from './New-locker/registration-form/registration-form.component';
import { TypeOfComponent } from './New-locker/type-of/type-of.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  { path:'', component: MenuComponent },
  { path:'new-locker/gender', component: GenderComponent },
  { path:'new-locker/typeOf', component: TypeOfComponent },
  { path:'new-locker/registrationForm', component: RegistrationFormComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
