import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-refarence-variable',
  template: `
  <h2>
     Welcome {{name}}
  </h2>
  
  <input #myInput type="text">
  <button (click) ="logMesageFun(myInput.value)">Log</button>
  
  <!-- by refarence id -->
  <input #myInput type="text">
  <button (click) ="logMesageFun(myInput)">Log</button>

  `,
  styleUrls: []
})
export class TemplateRefarenceVariableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
   public name ="Template refarence variable";

   public logMesageFun(value){
     console.log(value);
   }
}
