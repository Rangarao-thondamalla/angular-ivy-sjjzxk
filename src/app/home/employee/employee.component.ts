import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { FormGroup, FormControl, Validators ,ValidationErrors} from '@angular/forms';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  regForm = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    pwd: new FormControl('',Validators.required),
    comment : new FormControl('',Validators.required),
    gender : new FormControl('', Validators.required),
    imgfile : new FormControl('', Validators.required),
    remberme : new FormControl('', Validators.required)
  });

  get email(){ return this.regForm.get('email')};
  get name(){ return this.regForm.get('name')};
  get pwd() { return this.regForm.get('pwd')};
  get comment() { return this.regForm.get('comment')};
  get imgfile() { return this.regForm.get('imgfile')};



  onSubmit() {
  // TODO: Use EventEmitter with form value
  console.warn(this.regForm.value); 
  }
}