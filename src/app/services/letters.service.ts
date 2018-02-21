import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LettersService {

  constructor(private _http: HttpClient) { }

  get lettersList() {
    return this._http.get('https://test-api.javascript.ru/v1/ssumatokhin/letters');
  }

  sendLetter(params) {
    return this._http.post('https://test-api.javascript.ru/v1/ssumatokhin/letters', params);
  }

  deleteLetters(id) {
    return this._http.delete(`https://test-api.javascript.ru/v1/ssumatokhin/letters/${id}`, { responseType: 'text' });
  }

  getLetter(id) {
    return this._http.get(`https://test-api.javascript.ru/v1/ssumatokhin/letters/${id}`);
  }
}
