import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs/Rx';
//import 'rxjs/add/operator/catch';
//import { catchError } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
//import { error } from 'console';
//import {  throwError } from 'rxjs';


@Injectable()
export class EmployeeServiceService {

  private _url: string = "/assets/data/employees.json";

  constructor(private http: HttpClient) { }

  // getEmployees(){
  //   return [
  //     {"id":1,"name":"Jhon","age":25},
  //     {"id":2,"name":"Jack","age":35},
  //     {"id":3,"name":"Goms","age":45}
  //   ];
  // }

  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
    //return this.http.get<IEmployee[]>(this._url).catch(this.erroHandler);

   }
}

// erroHandler(error: HttpErrorResponse){
//      return Observable.throw(error.message || "Server error ");
// }
