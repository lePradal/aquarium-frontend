import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { urlConfig } from 'src/app/config/url.config';
import { ISignInRequest } from '../../models/requests/sign-in-request';
import { ISignUpRequest } from '../../models/requests/sign-up-request';
import { ISignInResponse } from '../../models/responses/sign-in-response';
import { ISignUpResponse } from '../../models/responses/sign-up-response';
import { IValidUserResponse } from '../../models/responses/valid-user-response';
import { TokenService } from '../token/token.service';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private tokenService: TokenService,
  ) {}

  public login(request: ISignInRequest) {
    return this.http.post<ISignInResponse>(urlConfig.auth, request).pipe(tap((res) => {
        this.userService.setToken(res.token);
    }));
  }

  public validateToken() {
    const httpOptions = this.getHttpOptions();

    return this.http.post<IValidUserResponse>(`${urlConfig.user}/valid`, {}, httpOptions).subscribe({
      error: (error: HttpErrorResponse) => {
        console.error(error);
      },
      next: (response) => {
        const isValidToken = response.valid;
        if (!isValidToken) {
          this.userService.logout();
        }
      }
    });
  }

  public createAccount(request: ISignUpRequest) {
    return this.http.post<ISignUpResponse>(`${urlConfig.user}/signup`, request);
  }

  public isLoggedUser(): boolean {
    return this.tokenService.hasToken();
  }

  public getHttpOptions() {
    if(!this.tokenService.hasToken()) {
      return { headers: new HttpHeaders({}) };
    }

    const token = this.tokenService.getToken();

    return {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token || '',
      })
    };
  }
}
