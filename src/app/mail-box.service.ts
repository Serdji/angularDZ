import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MailBoxService {

  constructor(private _http: HttpClient) { }

  get mailBoxList() {
    return this._http.get('http://test-api.javascript.ru/v1/ssumatokhin/mailBoxes');
  }

}
