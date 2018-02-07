import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { checkOnAgeValidator } from '../validator/checkOnAgeValidator';
import { UsersService } from '../users.service';
import { MailBoxService } from '../mail-box.service';

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
    private _mailBoxService: MailBoxService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: ['', [Validators.minLength(2), Validators.required]],
      surname: ['', [Validators.minLength(2)]],
      sex: ['', [Validators.required]],
      birthday: ['', [checkOnAgeValidator]],
      email: ['', [Validators.email, Validators.required]]
    });
  }

  sendForm() {
    if (!this.form.invalid) {
      const paramsUser = {
        fullName: `${this.form.get('name').value} ${this.form.get('surname').value}`,
        email: this.form.get('email').value,
        birthdate: this.form.get('birthday').value,
        gender: this.form.get('sex').value
      };
      const paramsMailBox = { title:  this.form.get('email').value};

      this._usersService.setUsersList(paramsUser).subscribe(() => {
        this._mailBoxService.setMailBoxList(paramsMailBox).subscribe();
        this.sendFormOk = true;
        this.userMail = this.form.get('email').value;
      });
    }
  }
}
