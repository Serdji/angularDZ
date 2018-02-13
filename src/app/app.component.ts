import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { MailService } from './services/mail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private _mailService: MailService,
    private router: Router,
    private location: Location
    ) {
    if (!this._mailService.isMail() && (this.location.path() !== '')) {
      this.router.navigate(['']);
    } else if (this._mailService.isMail()) {
      this.router.navigate(['mailbox']);
    }
  }
}
