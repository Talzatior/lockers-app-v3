import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { NewLockerModule } from './New-locker/new-locker.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NewLockerModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
