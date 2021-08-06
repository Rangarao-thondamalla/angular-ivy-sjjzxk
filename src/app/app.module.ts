import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'; // CLI imports router
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './home/employee/employee.component';
import { AppRoutingModule } from './app-routing.module';
import { ApiService } from './shared/api.service';



@NgModule({
  imports:      [ BrowserModule, FormsModule , ReactiveFormsModule , AppRoutingModule, RouterModule, CommonModule, HttpClientModule , NgxPaginationModule],
  declarations: [ AppComponent, HomeComponent, EmployeeComponent],
  bootstrap:    [ AppComponent ],
  providers: [ ApiService ],
})
export class AppModule { }
