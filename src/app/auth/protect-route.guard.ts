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
//   canActivate(route: ActivatedRouteSnapshot) {
//     const usuario=this._http.usuariData();
//     //console.log("erererer",usuario);
//     if(usuario!=null){

//       return true;
//     } 
//       this.router.navigate(['/home']);
//       return false;
//   }
  
// }
