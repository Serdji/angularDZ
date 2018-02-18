import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { emailValidator } from '../../validator/emailValidator';
import { LettersService } from '../../services/letters.service';
import { MailFilterService } from '../../services/mail-filter.service';

interface ParamsLetters {
  mailbox: string;
  subject: string;
  body: string;
  to: string;
}

@Component({
  selector: 'app-write-letter',
  templateUrl: './write-letter.component.html',
  styleUrls: ['./write-letter.component.styl']
})
export class WriteLetterComponent implements OnInit {

  formMessage: FormGroup;

  public mailFilter: string[];

  private mailBoxId: string;
  private params: ParamsLetters;

  constructor(
    private fd: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private _lettersService: LettersService,
    private _mailFilterService: MailFilterService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => this.mailBoxId = params.mailBoxId);
    this.initForm();
  }

  initForm() {
    this.formMessage = this.fd.group({
      email: ['', [Validators.required, emailValidator]],
      title: ['', [Validators.required]],
      body: ['', [Validators.required]]
    });
    this.formMessage.get('email').valueChanges.subscribe(value => this.mailFilter = this._mailFilterService.filter(value));
  }

  sedMessage() {

    this.params = {
      mailbox: this.mailBoxId,
      subject: this.formMessage.get('title').value,
      body: this.formMessage.get('body').value,
      to: this.formMessage.get('email').value
    };
    this._lettersService.sendLetter(this.params).subscribe(_ => this.router.navigate(['mailbox']));
  }

  mailValue(value) {
    this.formMessage.controls.email.setValue(value);
  }
}
