import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  empname=""
  
  constructor(private emps:EmpService) { }

login():void{
//this.greet="mahesh"
//console.log(this.greet)

}
  ngOnInit(): void {

  }

}
