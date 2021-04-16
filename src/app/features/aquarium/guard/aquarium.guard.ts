import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AquariumGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      const allowed = this.authService.isLoggedUser();

      if (allowed) {
        this.authService.validateToken();
      }

      if (!allowed) {
        this.router.navigate(['login']);
      }
      
      return allowed;
  }
  
}
