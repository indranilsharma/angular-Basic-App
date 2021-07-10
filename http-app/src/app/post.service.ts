import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType, HttpResponse } from '@angular/common/http';
import {Post} from './post.model';
import {map , catchError, tap} from 'rxjs/operators';
import { Subject , throwError } from 'rxjs';


@Injectable({providedIn: 'root'})
export class PostService {

error = new Subject<string>();

 constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    // const postData: Post = ({title: title, content:content});

    const postData: Post = ({title, content});
    this.http
    .post<{name: string}>(
      'https://http-angular-app-ecc61-default-rtdb.firebaseio.com/post.json',
       postData,
       {
         observe: 'response'
       }
       )
       .subscribe((responseData) => {
       console.log(responseData);
      }, (error) => {
        this.error.next(error.message);
      });
   }

  fetchPosts() {
      // add multiple query params
    let searchParams = new HttpParams();
    searchParams = searchParams.append('India', 'RAW');
    searchParams = searchParams.append('Pak', 'ISI');
    return this.http
    .get< {[key: string]: Post}>
    ('https://http-angular-app-ecc61-default-rtdb.firebaseio.com/post.json',
    {  // custom headers
      headers: new HttpHeaders({'custom-Headers': 'Sports'}),
      // query params
      // params: new HttpParams().set('India', 'RAW')
      params: searchParams,
      responseType: 'json'
    }
    )
    .pipe(
      map((responseData) => {
      const postsArray: Post[] = [];
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)) {
          postsArray.push({...responseData[key], id: key});
        }
      }
      return postsArray;
     }),
     catchError((errorRes) => {
       return throwError(errorRes);
     })
    );
    // subscribeing done in ngOnInit
    // .subscribe(
    //   (posts) => {
    //    console.log(posts);
    //    });
   }
   deletePost() {
    return this.http
     .delete(
       'https://http-angular-app-ecc61-default-rtdb.firebaseio.com/post.json',
       {
         observe: 'events',
         responseType: 'text'
        }
       ).pipe(
         tap( event => {
           console.log(event);
           if (event.type === HttpEventType.Sent) {
           }
           if (event.type === HttpEventType.Response) {
              console.log(event.body);
           }
         })
       );
   }
}
