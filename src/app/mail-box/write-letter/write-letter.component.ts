import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { emailValidator } from '../../validator/emailValidator';

@Component({
  selector: 'app-write-letter',
  templateUrl: './write-letter.component.html',
  styleUrls: ['./write-letter.component.styl']
})
export class WriteLetterComponent implements OnInit {

  formMessage: FormGroup;

  constructor(
    private fd: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formMessage = this.fd.group({
      email: ['', [Validators.required, emailValidator]],
      title: ['', [Validators.required]],
      body: ['', [Validators.required]]
    });
  }

  sedMessage() {
    console.log(this.formMessage);
  }

}
