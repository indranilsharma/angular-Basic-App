import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  template: `
   <h2>
     from  {{name}}
   </h2>

   <h2 [style.color]="'Red'" >India will win</h2>
   <h2 [style.color]="isDisabled ?'black':'green'">India will win</h2>

    <h3 [ngStyle]="MyObject">style binding with ngstyle</h3>
  `,
  styles: []
})
export class StyleBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  public name ="style-binding ";
  public isDisabled = true;

  public MyObject = {
    color:"blue",
    fontStyle:"bold",
  }

}
