import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { MailBoxService } from '../mail-box.service';
import { SendListService } from '../send-list.service';
import { DeleteListService } from '../delete-list.service';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.styl']
})
export class LoggingComponent implements OnInit {

  @Output() emailEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() entranceEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  public mailBoxes: any;

  public entrance: boolean;
  public email: string;
  public isListUser: boolean;
  public error: boolean;
  public inputValue: any;

  constructor(
    private _mailBoxService: MailBoxService,
    private _sendListService: SendListService,
    private _deleteListService: DeleteListService
    ) { }

  ngOnInit() {
    this._mailBoxService.mailBoxList.subscribe(mailBoxList => this.mailBoxes = mailBoxList);
  }

  entranceMail(value) {
    this.entrance = false;
    this.error = false;
    this.isListUser = false;
    if (this.mailBoxes.length === 0 ) {
      this.isListUser = !this.isListUser;
    }
    for (const mailBox of this.mailBoxes) {
      if (mailBox.title === value) {
        this.entrance = !this.entrance;
        this.entranceEvent.emit(this.entrance);
        this.email = value;
        this.emailEvent.emit(this.email);
      } else {
        this.error = !this.error;
        console.log(this.error);
      }
    }
  }

  exitMail() {
    this.entrance = !this.entrance;
    this.entranceEvent.emit(this.entrance);
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

  onSendMail(e, value) {
    if (e.keyCode === 13) {
      this.entranceMail(value);
    }
  }

}
