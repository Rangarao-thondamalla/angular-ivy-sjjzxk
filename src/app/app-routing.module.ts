import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { EmployeeComponent } from './home/employee/employee.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: "", redirectTo:"home", pathMatch: "full" },
  { path: 'employee-register', component: EmployeeComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule,CommonModule]

})
export class AppRoutingModule { }