import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-list',
  template: `
  <h2>Employee list</h2>
  <h3>{{erroMsg}}</h3>
  <ul *ngFor="let employee of employees">
    <li>{{employee.name}}</li>
  </ul>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {

  constructor(private _employeeService: EmployeeServiceService) { }
  
   public employees = [ ];
   public erroMsg;
  
   ngOnInit() {
    //this.employees =this._employeeService.getEmployees();

    //this._employeeService.getEmployees().subscribe(data => this.employees = data);

    this._employeeService.getEmployees().subscribe(data => this.employees = data,
                                                       error =>this.erroMsg = error);
  }

}
