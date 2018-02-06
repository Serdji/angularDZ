import { Component, OnInit } from '@angular/core';

import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.styl']
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: ['', [Validators.minLength(2), Validators.required]],
      surname: ['', [Validators.minLength(2), Validators.required]],
      sex: ['', [Validators.required]],
      birthday: ['', [this.checkOnAgeValidator]],
      email: ['', [Validators.email, Validators.required]]
    });
  }

  checkOnAgeValidator(birthdayData: any): object {
    const userData = birthdayData.value.split('-')[0];
    const dateYear = new Date().getFullYear();
    const age = dateYear - userData;
    if (age === dateYear) {
      return { message: 'Вы не выбрали дату'};
    } else if (age < 18) {
      return { message: 'Вы слишком молоды'};
    } else {
      return null;
    }
  }

  sendForm() {
    console.log(this.form);
  }
}
