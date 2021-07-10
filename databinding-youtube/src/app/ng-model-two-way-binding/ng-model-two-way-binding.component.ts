import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-model-two-way-binding',
  template: `
      <input [(ngModel)]="name" type="text">
      {{name}}
  `,
  styles: []
})
export class NgModelTwoWayBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public name="";
}
