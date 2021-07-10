import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  userAcivated = false;
  private acivatedSub: Subscription;
  constructor(private userService: UserService) {}

  ngOnInit() {
    //emmiter way
    // this.userService.acivatedEmitter.subscribe( didAcivate => {
    //  this.userAcivated = didAcivate;
    // });
    // subject way
    this.acivatedSub = this.userService.acivatedSubject.subscribe( didAcivate => {
     this.userAcivated = didAcivate;
    });
  }
  // if you use subject unsubcription is manatory
  ngOnDestroy(){
    this.acivatedSub.unsubscribe();
  }
}
