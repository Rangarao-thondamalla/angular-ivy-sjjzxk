import { Component, OnInit, Input, Output ,EventEmitter } from '@angular/core';

import { ApiService } from '../shared/api.service';
import { Employee } from './employee/employee';
import { Router } from '@angular/router';

@Component({ 
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private api : ApiService, private router: Router ){}
  employees : any [];

  firstName :any ;

  p:any;
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

  Search(){
    if(this.firstName == ""){
      this.ngOnInit();
    } else{
      this.employees = this.employees.filter( res=> {
        return res.name.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
      })
    }
  }

  key : string = 'id';
  reverse : boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }


}