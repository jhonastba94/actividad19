//b. importar lo de abajo:
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//clse 20
//a. creamos la implementacion del interceptor en :
//export class UserinterceptorsService {
//
// constructor() { }
//}

export class UserinterceptorsService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //throw new Error('Method not implemented.');
    console.log("Este es el Interceptor")
    req= req.clone({
      //Authorization => header
      setHeaders:{'Authorization':'Toquen de Autorizacion'}
    });
    return next.handle(req);
  }
}
