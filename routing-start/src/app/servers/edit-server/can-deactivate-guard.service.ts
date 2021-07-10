import { Observable } from 'rxjs/Observable';
import { CanDeactivate, ActivatedRouteSnapshot,
   RouterStateSnapshot } from '@angular/router';

export interface CanComponenetDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
export class CanDeactivateGuard implements CanDeactivate<CanComponenetDeactivate> {
  canDeactivate(comoponent: CanComponenetDeactivate,
     currentRoute: ActivatedRouteSnapshot,
     currentState: RouterStateSnapshot,
     nextState?: RouterStateSnapshot): Observable<boolean>
     | Promise<boolean> | boolean {
       return comoponent.canDeactivate();
     }
}
