import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export function AuthInterceptor(
  req: any,
  next: any
): Observable<HttpEvent<unknown>> {
  const cloneReq = req.clone({
    setHeaders: {
      auth: '53453245435345.53453534553535345.35435',
    },
  });
  return next(cloneReq);
}


@Injectable({
  providedIn: 'root'
})
export class AuthService implements HttpInterceptor { 
  //from angular 16+, interceptors are not accepted as service but as functions

  constructor() { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const cloneReq = req.clone({
      setHeaders: {
        auth: '53453245435345.53453534553535345.35435',
      },
    });
    return next.handle(cloneReq);
  }
}
