import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  public hasToken(): boolean {
    return !!this.getToken();
  }

  public setToken(token: string) {
    localStorage.setItem(KEY, token);
  }

  public getToken() {
    return localStorage.getItem(KEY);
  }

  public removeToken() {
    localStorage.removeItem(KEY);
  }
}
