import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms'

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
      name: [],
      surname: [],
      sex: [],
      birthday: [],
      email: []
    });
  }

  sendForm() {
    console.log(this.form.value);
  }
}
