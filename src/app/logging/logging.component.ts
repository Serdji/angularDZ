import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { MailBoxService } from '../mail-box.service';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.styl']
})
export class LoggingComponent implements OnInit {

  @Output() emailEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() entranceEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  private mailBoxes: any;

  public entrance: boolean;
  public email: string;
  public error: boolean;

  constructor(private _mailBoxService: MailBoxService) { }

  ngOnInit() {
    this._mailBoxService.mailBoxList.subscribe(mailBoxList => this.mailBoxes = mailBoxList);
  }

  entranceMail(value) {
    this.entrance = false;
    this.error = false;
    for (const mailBox of this.mailBoxes) {
      if (mailBox.title === value) {
        this.entrance = !this.entrance;
        this.entranceEvent.emit(this.entrance);
        this.email = value;
        this.emailEvent.emit(this.email);
      } else {
        this.error = !this.error;
      }
    }
  }

  exitMail() {
    this.entrance = !this.entrance;
    this.entranceEvent.emit(this.entrance);
  }

}
