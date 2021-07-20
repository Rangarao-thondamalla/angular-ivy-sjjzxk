import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  regForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    pwd: new FormControl(''),
    comment : new FormControl(''),
    gender : new FormControl(''),
    imgfile : new FormControl(''),
    remberme : new FormControl('')
  });

  onSubmit() {
  // TODO: Use EventEmitter with form value
  console.warn(this.regForm.value);
  }
}