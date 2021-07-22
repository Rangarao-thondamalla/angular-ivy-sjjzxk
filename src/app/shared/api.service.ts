import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn : 'root',
})

export class ApiService {
  constructor( private http : HttpClient){}


  postEmployee(data : any){
    return this.http.post<any>('https://5df7ba4a4fdcb20014a483cc.mockapi.io/employees', data)
    .pipe(map((response: any) => {
      return response;
    }))
  }
   getEmployee(){
    return this.http.get<any>('https://5df7ba4a4fdcb20014a483cc.mockapi.io/employees')
    .pipe(map((response: any) => {
      return response;
    }))
  }

   updateEmployee(data: any, id: number){
    return this.http.put<any>('https://5df7ba4a4fdcb20014a483cc.mockapi.io/employees'+id, data)
    .pipe(map((response: any) => {
      return response;
    }))
  }

   deleteEmployee(id: number){
    return this.http.delete<any>('https://5df7ba4a4fdcb20014a483cc.mockapi.io/employees'+ '/' + id)
    .pipe(map((response: any) => {
      return response;
    }))
  }


}