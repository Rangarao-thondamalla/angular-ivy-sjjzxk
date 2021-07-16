import { Component, OnInit, Input, Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  @Input() parentData: string;
  @Input() dateObject: object;
  @Input() accountNumber : number;
  @Input() selectedValue: string;
  @Input() password: string;


  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string){
    this.newItemEvent.emit(value);
  }

    count = 0;
     displayCounter(count){
             return count;
    }
}