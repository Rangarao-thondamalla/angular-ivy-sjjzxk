import { Component, OnInit, Input, Output ,EventEmitter } from '@angular/core';

import { ApiService } from '../shared/api.service';
import { Employee } from './employee/employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

employeeObj : object;

  constructor(private api : ApiService ){}

  getallEmployees(){
      this.api.getEmployee()
      .subscribe(res=>{
        this.employeeObj = res;
        console.log(res);
      })
  }

}