import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MailService } from './services/mail.service';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _mailService: MailService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise(resolve => {
      return resolve(this._mailService.isMail());
    });
  }
}
