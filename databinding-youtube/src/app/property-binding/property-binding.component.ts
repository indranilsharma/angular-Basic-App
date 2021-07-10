import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `
   
  <h2>
      from {{name}}
  </h2>

  <h3>{{2+8}}</h3>
  <h3>{{"upgrade" + name}}</h3>
  <h3>{{name.length}}</h3>
  <h2>{{name.toUpperCase()}}
  <h3>{{displayUser()}}
  <h2>{{siteUrl}}</h2>
  
  <input [id]="myId" type="text" value="propertyBindig">
  <input disabled={{isDisabled}} id="{{myId}}" type="text" value="interpolation">
  `,
  styles: []
})
export class PropertyBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public name=" Property ";
  public myId= "class";
  public siteUrl = window.location.href;
  public isDisabled = true;
  displayUser(){
    return "Welcome" + this.name;
  }
}
