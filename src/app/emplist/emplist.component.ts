import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Employee } from '../employee.Model';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {
empdetails:Employee[];
  constructor(private empservice:EmpService) { }

  ngOnInit(): void {
    this.empdetails=this.empservice.getemplist();
  }

}
