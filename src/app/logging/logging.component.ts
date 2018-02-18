import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

import { MailBoxService } from '../services/mail-box.service';
import { SendListService } from '../services/send-list.service';
import { DeleteListService } from '../services/delete-list.service';
import { MailService } from '../services/mail.service';
import { CookieService } from '../services/cookie.service';
import { emailValidator } from '../validator/emailValidator';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.styl']
})
export class LoggingComponent implements OnInit {

  @Output() emailEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() entranceEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  formLogging: FormGroup;

  public mailBoxes: any;
  public entrance: boolean = false;
  public isListUser: boolean = false;
  public error: boolean = false;
  public mailBoxArr: string[] = [];
  public email: string;
  public inputValue: any;
  public entranceInput: string;


  constructor(
    private _mailBoxService: MailBoxService,
    private _sendListService: SendListService,
    private _deleteListService: DeleteListService,
    private _mailService: MailService,
    private _cookieService: CookieService,
    private router: Router,
    private fb: FormBuilder
    ) { }

  ngOnInit() {
    this._mailBoxService.mailBoxList.subscribe(mailBoxList => this.mailBoxes = mailBoxList);
    this.formLogging = this.fb.group({
      email: ['', [emailValidator]]
    });
    this.formLogging.get('email').valueChanges.subscribe(value => this.entranceInput = value);
  }

  entranceMail() {
    this._mailBoxService.mailBoxList.subscribe(mailBoxList => this.mailBoxes = mailBoxList);
    if (this.mailBoxes.length === 0 ) {
      this.isListUser = !this.isListUser;
    } else {
      for (const mailBox of this.mailBoxes) {
        this.mailBoxArr.push(mailBox.title);
      }
      this.entrance = this.mailBoxArr.includes(this.entranceInput);
      this.error = !this.mailBoxArr.includes(this.entranceInput);
      this.email = this.entranceInput;
      this._mailService.mail = this.email;
      if (this.entrance)  {
        this.router.navigate(['mailbox']);
      }
    }
  }

  sendList() {
    this._sendListService.send.subscribe(() => {
      this._mailBoxService.mailBoxList.subscribe(mailBoxList => this.mailBoxes = mailBoxList);
      this.isListUser = !this.isListUser;
      this.error = !this.error;
    });
  }

  deleteList() {
    this._deleteListService.deleteList.subscribe(() => {
      this._mailBoxService.mailBoxList.subscribe(mailBoxList => this.mailBoxes = mailBoxList);
      this.error = !this.error;
    });
    this.inputValue = ' ';
  }

  onSendMail(e) {
    if (e.keyCode === 13) {
      this.entranceMail();
    }
  }

}
