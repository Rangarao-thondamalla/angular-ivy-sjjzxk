import { Component, OnInit , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

@Output() valueChange = new EventEmitter();
Counter = 0;

valueChanged(){
  this.Counter = this.Counter + 1;
  this.valueChange.emit(this.Counter);
}
}