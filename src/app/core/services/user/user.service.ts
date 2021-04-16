import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { urlConfig } from 'src/app/config/url.config';
import { TokenService } from '../token/token.service';
import { IUser } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new Subject<IUser>();

  constructor(
    private tokenService: TokenService,
    private http: HttpClient,
    private router: Router,
    ) {
    this.tokenService.hasToken() && this.notify();
  }

  public setToken(token: string) {
    this.tokenService.setToken(token);
    this.notify();
  }

  public notify() {
    const httpOptions = this.getHttpOptions();

    return this.http.get<IUser>(`${urlConfig.user}`, httpOptions).subscribe({
      error: (error: HttpErrorResponse) => {
        console.error(error);
      },
      next: (response) => {
        this.userSubject.next(response);
      }
    });;
  }

  public getUser() {
    return this.userSubject.asObservable();
  }

  public getHttpOptions() {
    if(!this.tokenService.hasToken()) {
      return;
    }

    const token = this.tokenService.getToken();

    return {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token || '',
      })
    };
  }

  public logout() {
    this.tokenService.removeToken();
    this.userSubject.next(undefined);
    this.router.navigate(['/login']);
  }

  public isLogged() {
    return this.tokenService.hasToken();
  }
}
