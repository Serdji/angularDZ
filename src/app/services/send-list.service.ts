import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userList } from '../../user';

@Injectable()
export class SendListService {

  constructor(private _http: HttpClient ) { }

  get send() {
    return this._http.post('http://test-api.javascript.ru/v1/ssumatokhin', userList);
  }

}
