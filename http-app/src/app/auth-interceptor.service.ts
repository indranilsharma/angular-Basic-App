import {
   HttpInterceptor,
   HttpRequest,
   HttpHandler
  } from '@angular/common/http';

export class AuthInterceptorService implements HttpInterceptor {
 intercept(req: HttpRequest<any>, next: HttpHandler) {
  //  console.log('Request on the way');
  //  console.log(req.url);
   const modifiedRequest = req.clone( {
     headers: req.headers.append('auth', 'xyz')
    });
   return next.handle(modifiedRequest);
 }
}
