import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // by encapsulation overriden the default nature 
  encapsulation: ViewEncapsulation.None// none 
})
export class ServerElementComponent implements 
OnInit,
DoCheck,
AfterViewChecked,
AfterViewInit,
//AfterContentChecked,
AfterContentInit,
AfterViewChecked,
OnDestroy
 {
 @Input( 'srvElement' ) element: {type: string, name: string, content: string};
 @Input() name: string;
  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges() called');
    console.log(changes);
  }
  ngOnInit() {
    console.log('onNgInit() called');
  }
  ngDoCheck() {
    console.log('docheck()');
  }
  ngAfterContentInit() {
    console.log('after content init');
  }
  ngAfterContentchecked() {
    console.log(' after content checked');
  }

  ngAfterViewInit() {
    console.log("after view init")
  }
  ngAfterViewChecked() {
    console.log("after view checked")
  }
  ngOnDestroy() {
    console.log("destroying child...")
  }

}
