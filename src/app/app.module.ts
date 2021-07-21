import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './home/employee/employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RouterModule } from '@angular/router'; // CLI imports router
@NgModule({
  imports:      [ BrowserModule, FormsModule , ReactiveFormsModule , AppRoutingModule, RouterModule, CommonModule],
  declarations: [ AppComponent, HelloComponent, HomeComponent, EmployeeComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
