import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthinticationGuard implements CanActivate {
  /**
   *
   */
  constructor(public _router:Router) {
   
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
      if(localStorage.getItem('token')!=null){
        return true
      }else{
        this._router.navigate(['/login'])
        return false
      }
    return true;
  }

}
