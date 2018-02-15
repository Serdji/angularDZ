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
  public mailFilter: string[];


  constructor(private _mailBoxService: MailBoxService) {
    this._mailBoxService.mailBoxList.subscribe((mailBoxes: ImailBoxes[]) => this.mailBoxes = mailBoxes);
  }

  filter(value) {
    this.mails = this.mailBoxes.map(mail => mail.title);
    this.mailFilter = this.mails.filter( mail => mail.includes(value));
    return this.mailFilter;
  }
}
