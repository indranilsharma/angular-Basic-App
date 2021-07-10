import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-component-interaction',
  template:`
  <h2>
     {{"welcome" + parentData}}
  </h2>
  <button (click)="fireEvent()">Child to parent</button>
  `,
  styles: []
})
export class ComponentInteractionComponent implements OnInit {

  constructor() { }

  // parent to child
  @Input() public parentData;

  //child to parent
  @Output() public childEvent = new EventEmitter();

  ngOnInit(): void {
  }
  fireEvent(){
    this.childEvent.emit('child send the data to parent');
  }

}
