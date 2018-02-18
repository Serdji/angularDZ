import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { checkOnAgeValidator } from '../validator/checkOnAgeValidator';
import { urlAvatarValidator } from '../validator/urlAvatarValidator';
import { emailValidator } from '../validator/emailValidator';
import { UsersService } from '../services/users.service';
import { MailBoxService } from '../services/mail-box.service';
import { CookieService } from '../services/cookie.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.styl']
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;

  public sendFormOk: boolean = false;
  public userMail: string;

  constructor(
    private fb: FormBuilder,
    private _usersService: UsersService,
    private _mailBoxService: MailBoxService,
    private _cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: ['', [Validators.minLength(2), Validators.required]],
      surname: ['', [Validators.minLength(2)]],
      avatar: ['', [urlAvatarValidator]],
      sex: ['', [Validators.required]],
      birthday: ['', [checkOnAgeValidator]],
      email: ['', [emailValidator, Validators.required]]
    });
  }

  sendForm() {
    for (const inner of Object.keys(this.form.controls)) {
      this.form.get(inner).markAsTouched();
    }
    if (!this.form.invalid) {
      const paramsUser = {
        fullName: `${this.form.get('name').value} ${this.form.get('surname').value}`,
        email: this.form.get('email').value,
        birthdate: this.form.get('birthday').value,
        gender: this.form.get('sex').value,
        avatarUrl: this.form.get('avatar').value
      };
      const paramsMailBox = { title:  this.form.get('email').value};

      this._usersService.setUsersList(paramsUser).subscribe(() => {
        this._mailBoxService.setMailBoxList(paramsMailBox).subscribe();
        this.sendFormOk = true;
        this.userMail = this.form.get('email').value;
        setTimeout(() => {
          this._cookieService.setCookie('email', this.userMail, {});
          this.router.navigate(['mailbox'])
        }, 1000);
      });
    }
  }
}
