import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class MailBoxService {

  constructor(private _http: HttpClient) { }

  get mailBoxList() {
    return this._http.get('https://test-api.javascript.ru/v1/ssumatokhin/mailBoxes');
  }

  setMailBoxList(params) {
    return this._http.post('https://test-api.javascript.ru/v1/ssumatokhin/mailBoxes', params);
  }

  getMailTitle(id) {
    return this._http.get(`https://test-api.javascript.ru/v1/ssumatokhin/mailBoxes/${id}`).catch((error: any) => Observable.throw({ title: 'Ананимный адрес' }));
  }

}
