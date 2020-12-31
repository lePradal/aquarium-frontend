import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { urlConfig } from 'src/app/config/url.config';
import { ISignInRequest } from '../models/requests/sign-in-request';
import { ISignUpRequest } from '../models/requests/sign-up-request';
import { ISignInResponse } from '../models/responses/sign-in-response';
import { ISignUpResponse } from '../models/responses/sign-up-response';
import { IValidUserResponse } from '../models/responses/valid-user-response';

@Injectable({
  providedIn: 'root'
})
export class SignService {

  constructor(private http: HttpClient, private router: Router) {}

  public login(request: ISignInRequest) {
    return this.http.post<ISignInResponse>(urlConfig.auth, request);
  }

  public createAccount(request: ISignUpRequest) {
    return this.http.post<ISignUpResponse>(urlConfig.signup, request);
  }

  public isLoggedUser() {
    const token = sessionStorage.getItem('token');
    const type = sessionStorage.getItem('type');

    if(!token || !type) {
      return false;
    }

    return true;
  }

  public async canAccess() {

    const httpOptions = this.getHttpOptions();

    if (httpOptions == null || httpOptions == undefined) {
      return false;
    }

    const result = await this.http.post<IValidUserResponse>(urlConfig.valid, {}, httpOptions).toPromise();

    if (result.valid) {
      return true;
    }

    return false;
  }

  public logout() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('type');

    this.router.navigate(['login']);
  }

  public getHttpOptions() {
    const token = sessionStorage.getItem('token');
    const type = sessionStorage.getItem('type');

    if(!token || !type) {
      return;
    }

    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: type + ' ' + token || '',
      })
    };

    return httpOptions;
  }
}
