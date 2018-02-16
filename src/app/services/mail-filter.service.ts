import { Injectable } from '@angular/core';
import { MailBoxService } from './mail-box.service';

interface ImailBoxes {
  _id: string;
  title: string;
}

@Injectable()
export class MailFilterService {

  private mailBoxes: ImailBoxes[];
  private mails: string[];
  private isMail: string[];

  public mailFilter: string[];


  constructor(private _mailBoxService: MailBoxService) {
    this._mailBoxService.mailBoxList.subscribe((mailBoxes: ImailBoxes[]) => this.mailBoxes = mailBoxes);
  }

  filter(value) {
    this.mails = this.mailBoxes.map(mail => mail.title);
    this.isMail = this.mails.filter(mail => mail === value);
    if ((value.length === 0) || (this.isMail.length > 0)) {
      this.mailFilter = [];
    } else {
      this.mailFilter = this.mails.filter(mail => mail.includes(value));
    }
    return this.mailFilter;
  }
}
