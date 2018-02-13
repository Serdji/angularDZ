import {Component, OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';

import { UsersService } from '../services/users.service';
import { LettersService } from '../services/letters.service';
import { MailService } from '../services/mail.service';
import { CookieService } from '../services/cookie.service';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

interface Iuser {
  _id: string;
  email: string;
  fullName: string;
  avatarUrl?: string;
}

interface Iletter {
  _id: string;
  mailbox: string;
  subject: string;
  body: string;
  to: string;
}

@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.styl']
})
export class MailBoxComponent implements OnInit {

  public email: string;
  public user: Iuser;
  public letterArr: Iletter[] = [];
  public isListLetter: boolean;
  public massage: boolean;

  constructor(
    private _usersService: UsersService,
    private _lettersService: LettersService,
    private _mailService: MailService,
    private _cookieService: CookieService,
    private router: Router,
    private location: Location
  ) {
    this.router.events.filter((event) => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
         if(event.url === '/mailbox') {
           this.massage = false;
         } else {
           this.massage = true;
         }
      });
  }

  ngOnInit() {
    this._initlettersList();
  }

  _initlettersList() {
    this._usersService.usersList.subscribe((usersList: Iuser[]) => {
      this.email = this._mailService.mail;
      for (const user of usersList) {
        if (user.email === this.email) {
          this.user = user;
        }
      }
    });
    this._lettersService.lettersList.subscribe((lettersList: Iletter[]) => {
      this.letterArr = lettersList.filter((letters) => letters.to === this.email);
      this.isListLetter = this.letterArr.length !== 0;
    });
  }

  closeMail(){
    this.router.navigate(['/']);
    this._cookieService.deleteCookie('email');
  }

  openLetter(event) {
    this.massage = event;
  }

}
