import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evet-binding',
  template: `
  <h2>
     from {{name}}
  </h2>
  <button (click) ="onclick($event)">"Hit"</button>
  <h4 class="greeting-html">{{greeting}}</h4>
  `,
  styles: [`
  .greeting-html
  {
  color:red;
  }`
]
})
export class EventBindingComponent implements OnInit {

  constructor() { }

   public name="Event";
   public greeting ="";
   
  ngOnInit(): void {
  }
  
  public onclick(event){
    console.log('Welcome to codeevelution event');
    console.log(event);
    //this.greeting='Welcome to codeevelution event by html output';
    this.greeting=event.type;
  }
  }
