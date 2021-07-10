import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  template: `
  <div [ngSwitch] ="color">
  <div *ngSwitchCase="'Red'">You picked Red</div>
  <div *ngSwitchCase="'Yellow'">You picked Yellow</div>
  <div *ngSwitchCase="'Orenge'">You picked Orenge</div>
  </div>
  
  `,
  styles: []
})
export class NgSwitchComponent implements OnInit {

  public color="";
  constructor() { }

  ngOnInit(): void {
  }

}
