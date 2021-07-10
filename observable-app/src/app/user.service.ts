import {Injectable, EventEmitter} from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserService {
// acivatedEmitter = new EventEmitter<boolean>();
// another approch
acivatedSubject = new Subject<boolean>();
}
