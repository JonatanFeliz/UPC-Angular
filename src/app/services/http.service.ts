// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable, of } from 'rxjs';
// import { User } from '../model/User';
// import {catchError, map} from 'rxjs/operators';
 
// @Injectable({
//   providedIn: 'root'
// })
// export class HttpService {

//   REST_API: string = 'http://localhost:3000/';
//   //para hacer la sincronizacion
//   private userSubject: BehaviorSubject<User>;
//   public user:Observable<User>;
//   public userData():User{
//     return this.userSubject.value;
//   }
//   constructor(private _http: HttpClient) { 
//     return this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')!));
//     this.user=this.userSubject.asObservable();
//   }

//   logout(){
//     localStorage.removeItem('user');
     
//     this.userSubject.next(JSON.parse(null!));
//   }
// }
