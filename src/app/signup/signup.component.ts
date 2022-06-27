import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private empservice:EmpService) { }

  ngOnInit(): void {
  }
  deleteemp():any{
    return this.empservice.deleteemployee();
  }

}
