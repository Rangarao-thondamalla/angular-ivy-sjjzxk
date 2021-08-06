import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { EmployeeComponent } from './home/employee/employee.component';
import { HomeComponent } from './home/home.component';
import { AdminGaurdGuard } from './admin-gaurd.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: "", redirectTo:"home", pathMatch: "full"},
  { path: 'home', component: HomeComponent},
  { path: 'employee-register', component: EmployeeComponent },
  { path: 'login', component: LoginComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule,CommonModule]

})
export class AppRoutingModule { }