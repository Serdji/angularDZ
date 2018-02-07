import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { checkOnAgeValidator } from '../validator/checkOnAgeValidator';

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
      surname: ['', [Validators.minLength(2)]],
      sex: ['', [Validators.required]],
      birthday: ['', [checkOnAgeValidator]],
      email: ['', [Validators.email, Validators.required]]
    });
  }

  sendForm() {
    console.log(this.form);
  }
}
