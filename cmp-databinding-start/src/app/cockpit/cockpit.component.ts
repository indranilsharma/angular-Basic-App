import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
@Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
@Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  //we comment out below line because we using local reference
  //newServerName = '';
  //we commented because use @viewchild 
  
  // newServerContent = '';
   @ViewChild('serverContentInput', {static: false}) serverContentInput: ElementRef;

  constructor() {}

  ngOnInit() {}

  onAddServer(nameInput: HTMLInputElement) {
    console.log(this.serverContentInput);
    //console.log(nameInput);
     this.blueprintCreated.emit({
      serverName: nameInput.value,
      //serverContent: this.newServerContent
      serverContent: this.serverContentInput.nativeElement.value
     });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      //serverContent: this.newServerContent
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
