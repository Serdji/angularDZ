import { Injectable } from '@angular/core';
import { CookieService } from './cookie.service';

@Injectable()
export class MailService {

  private mailVar: string;

  constructor( private _cookieService: CookieService ) {}

  set mail(val) {
    this._cookieService.setCookie('email', val, {});
  }

  get mail() {
    return this._cookieService.getCookie('email');
  }

  isMail() {
    if (this._cookieService.getCookie('email') !== undefined) {
      return true;
    }
    return false;
  }

}
