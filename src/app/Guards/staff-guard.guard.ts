import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffGuardGuard implements CanActivate {
   constructor(private route: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let user = localStorage.getItem("user");
    if(user){
      const userObject = JSON.parse(user); 
      if (userObject && userObject.role === "Staff")  {
        return true;
      }
    }
    this.route.navigate(['/login']);
    return true;
  }
}
