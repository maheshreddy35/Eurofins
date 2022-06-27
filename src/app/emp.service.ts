import { getLocaleDirection } from '@angular/common';
import { Injectable } from '@angular/core';
import { Employee } from './employee.Model';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  emp:Employee;
  emplist:Employee[]=[{id:1,name:'mahesh',age:23,salary:20000},
  {id:2,name:'siva',age:27,salary:5000},
  {id:3,name:'mahesh',age:23,salary:20000},
  {id:5,name:'mahesh',age:33,salary:200000}]
  constructor() { }
  getemplist():any{
    return this.emplist;
  }
  addemployee(newemp:Employee):void{
    this.emplist.push(newemp);
  }
  deleteemployee():any{
    this.emplist.pop();
  }
 
}
