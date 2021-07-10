import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  template:`
  
  <h2>{{country}}</h2>
  <h2>{{country | lowercase}}</h2>
  <h2>{{message | uppercase}}</h2>
  <h2>{{message | titlecase}}</h2>
  <h2>{{message  | slice:3:6}}</h2>

   <!-- json reprentaion --> 
   <h2>{{person | json}}</h2>
  
   <!-- min(integer).min(decimal) max-->
   <h2>{{1.254 | number:'1.2-3'}}</h2>
   <h2>{{1.254 | number:'3.1-2'}}</h2>
   <h2>{{1.254 | number:'3.4-5'}}</h2>
   
   <h2>{{2.25 | percent }}</h2>

   <h2>{{2.25 | currency: 'INR' }}</h2>

   <!-- <h2>{{ date }}</h2> 
    <h2>{{ date | date:'short'}}</h2>
    <h2>{{ date | date: 'mediumDate'}}</h2> 
    -->


  `,
  styles: []
})
export class PipeComponent implements OnInit {

  public country = "DENMARK";
  public message = "this this pipe convertion";
  public person = {
    "firstName":"Jhon",
    "LastName":"Desuza",
    "Age":"25"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
