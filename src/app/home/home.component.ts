import { Component, OnInit, Input, Output ,EventEmitter } from '@angular/core';

import { ApiService } from '../shared/api.service';
import { Employee } from './employee/employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private api : ApiService ){}
  employees : any [];

  ngOnInit(){ this.getallEmployees();}
  getallEmployees(){
     this.api.getEmployee()
      .subscribe(res=>{
        this.employees = res;
      })
  }

  deleteEmployees(row){
    this.api.deleteEmployee(row.id)
    .subscribe(res => {
      console.log('Employee Deleted');
      this.getallEmployees();
    })
  }
}