import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { SignService } from '../services/sign.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private signService: SignService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      const allowed = this.signService.isLoggedUser();

      if (! allowed) {
        this.router.navigate(['login']);
      }
      
      return allowed;
  }
  
}
