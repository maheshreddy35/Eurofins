import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { EmplistComponent } from '../emplist/emplist.component';
import { Employee } from '../employee.Model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  emp:Employee={id:1,name:'mahesh',age:20,salary:20000};
  constructor(private empservice:EmpService) { }
  register():void{
      this.empservice.addemployee(this.emp);
  }

  ngOnInit(): void {
  }

}
