import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
    enterName =" Ranga";
    parentData= " ";
    enterdate = "";
    password = "";
    dateObject = {};
    selectedValue = "";
    accountNumber = 1234567;
    transferData(){
        this.parentData = this.enterName;
        this.dateObject = this.enterdate;
  }

   items = [];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
}
