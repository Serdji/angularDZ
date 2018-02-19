import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { LettersService } from '../../services/letters.service';
import { MailBoxService } from '../../services/mail-box.service';

interface Iletter {
  _id: string;
  mailbox: string;
  subject: string;
  body: string;
  to: string;
}



@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.styl']
})
export class LetterComponent implements OnInit {

  @Input() letter: Iletter;
  @Output() eventDeleteLetter = new EventEmitter();
  @Output() eventOpenLetter: EventEmitter<boolean> = new EventEmitter<boolean>();

  public mailBox: object;

  constructor(
    private _lettersService: LettersService,
    private _mailBoxService: MailBoxService,
    private router: Router
  ){ }

  ngOnInit() {
    this._mailBoxService.getMailTitle(this.letter.mailbox).subscribe(
      title => this.mailBox = title,
      error => console.log(error.message)
    );
  }

  openLetter() {
    this.router.navigate(['mailbox/detailed-letter', this.letter._id]);
    this.eventOpenLetter.emit(true);
  }

  deleteLetter() {
    this._lettersService.deleteLetters(this.letter._id).subscribe(_ => {
      this.eventDeleteLetter.emit();
    });
  }

}
