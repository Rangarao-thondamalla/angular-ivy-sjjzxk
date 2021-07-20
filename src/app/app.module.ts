import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './home/employee/employee.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule, FormsModule , ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, EmployeeComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
