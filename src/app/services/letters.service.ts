import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LettersService {

  constructor(private _http: HttpClient) { }

  get lettersList() {
    return this._http.get('http://test-api.javascript.ru/v1/ssumatokhin/letters');
  }
}
