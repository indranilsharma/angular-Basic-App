import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template: `
  <h2 class="text-success">
  from {{name}}
  </h2>
  `,
  styles: [
    `.text-success{
    color:green;
  }
  .text-denger{
    color:red;
  }
  .text-special{
    font-style:bold;
  }`
   ]
})
export class ClassBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  public name = "Class";

  displayUser(){
    return "Welcome" + this.name;
  }
}
