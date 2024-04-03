import { AuthService } from '@auth0/auth0-angular';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private authService: AuthService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    return this.authService.isAuthenticated$.pipe(map(isAuthenticated => {
      if (isAuthenticated) {
        return true;
      } else {
        this.router.navigate(['']);
        return false;
      }
    }))
  }
}
