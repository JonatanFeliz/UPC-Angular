// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';
// import { HttpService } from '../services/http.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProtectRouteGuard implements CanActivate {
//   constructor(private router:Router, private _http: HttpService){

//   }
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//       if (!this.auth.isLogin()) {
//         return this.router.navigate(['/login']).then(() => false);
//       }
//     return true;
//   }
  
// }
