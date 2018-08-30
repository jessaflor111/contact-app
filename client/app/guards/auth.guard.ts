import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}
  canActivate(
    // router: Router,
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (localStorage['currentUsr']) {
        console.log('this is local storage' + localStorage);
        // console.log('currentUsr');
        return true;
      } else {
        this.router.navigate(['/userlogin'], {queryParams: { returnUrl: state.url}});
        return false;
      }
  }
}
