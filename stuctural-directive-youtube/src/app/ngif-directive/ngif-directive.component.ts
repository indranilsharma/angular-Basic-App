import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif-directive',
  template: `
  <!--<h2 *ngIf="displayname; else elseBlock">
     CodeEvalution
  </h2>

  <ng-template #elseBlock>
   <h2>
      Name is hidden
   </h2>
   </ng-template> -->

   <div *ngIf="displayname; then thenBlock; else elseBlock"></div>

   <ng-template #thenBlock>
     <h2>India</h2>
   </ng-template>

   <ng-template #elseBlock>
     <h2>Australiya</h2>
   </ng-template>


  `,
  styles: []
})
export class NgifDirectiveComponent implements OnInit {

  public displayname=true;
  constructor() { }
  
  ngOnInit(): void {
  }

}
