import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DeleteListService {

  constructor(private _http: HttpClient) { }

  get deleteList() {
    return this._http.delete('https://test-api.javascript.ru/v1/ssumatokhin', { responseType: 'text' });
  }
}
