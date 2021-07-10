import { Component, OnInit, OnDestroy } from '@angular/core';
import {interval, Subscription, Observable, from} from 'rxjs';
import {map,filter} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

private systemObsSubscription: Subscription
private customObsSubscription: Subscription

constructor() { }

  ngOnInit() {
    //systm define observal(interval) and subscribe same place
    this.systemObsSubscription = interval(3000).subscribe((count) => {
      console.log(count);
   });
    //custom obsrvale
    const customIntervalObservale = Observable.create(observer => {
      let count = 500;
      setInterval(() =>{
        observer.next(count);
        if(count === 503) {
          observer.complete();
        }
        if(count>505) {
          // comming regular console
           observer.error(new Error('count is greter than 5'));
          // coming with red mark
          //  observer.console.error(new Error('count is greter than 5'));
        }
        count++;
      },1000);
    });

  this.customObsSubscription = customIntervalObservale.pipe(filter((data)=>{
    return data > 501;
  })
  ,map((data: number) => {
    return 'Round: '+ (data );
      })).subscribe(data => {
      //  console.log('Round '+(data+1));
       console.log(data);

    },error => {
      console.log(error);
      // console.error();
      alert(error.message);
    },() => {
      console.log('this will excute if COMPLETED');
    });
  }
  // prevent memory leak
  ngOnDestroy(): void{
    this.systemObsSubscription.unsubscribe();
    this.customObsSubscription.unsubscribe();
  }
}
