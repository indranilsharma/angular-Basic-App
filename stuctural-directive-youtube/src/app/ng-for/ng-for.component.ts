import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  template: `
    <div *ngFor="let color of colors; index as i ">
       <h2>{{i}} {{color}}</h2>
    </div>
  `,
  styles: []
})
export class NgForComponent implements OnInit {

  public colors =["red","blue","green"];

  constructor() { }

  ngOnInit(): void {
  }

}
