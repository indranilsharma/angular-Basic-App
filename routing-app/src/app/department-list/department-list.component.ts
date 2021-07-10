import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>
      department-list
    </h3>
    <ul>
      <li (click)="onSelect(department)" *ngFor="let department of departments">
       {{department.id}} {{department.name}}
       </li> 
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  departments = [
  {"id":1,"name":"Angular"},
  {"id":2,"name":"Node"},
  {"id":3,"name":"MongoDB"},
  {"id":4,"name":"CSS"}
]

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSelect(department) {
     this.router.navigate(['/departments',department.id])
  }
}
