import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {

  constructor(private _http: HttpClient) { }

  get usersList() {
    return this._http.get('https://test-api.javascript.ru/v1/ssumatokhin/users');
  }

  setUsersList(params) {
    return this._http.post('https://test-api.javascript.ru/v1/ssumatokhin/users', params);
  }

}
