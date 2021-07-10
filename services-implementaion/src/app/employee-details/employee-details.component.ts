import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-details',
  template:  `
  <h2>Employee Details</h2>
  <h3>{{erroMsg}}</h3>
  <ul *ngFor="let employee of employees">
    <li>{{employee.id}} {{employee.name}} {{employee.age}}</li>
  </ul>`,
  styles: []
})
export class EmployeeDetailsComponent implements OnInit {

  public employees = [ ];
  public erroMsg;

  constructor(private _employeeService: EmployeeServiceService) { }
 
  ngOnInit() {
    //this.employees =this._employeeService.getEmployees();

    //this._employeeService.getEmployees().subscribe(data => this.employees = data);

    this._employeeService.getEmployees().subscribe(data => this.employees = data,
                                                       error =>this.erroMsg = error);
  }

}
