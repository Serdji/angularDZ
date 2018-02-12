import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { LettersService } from '../../services/letters.service';

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

  constructor(private _lettersService: LettersService) { }

  ngOnInit() {
  }

  openLetter(id) {
    console.log(id);
  }

  deleteLetter(id) {
    this._lettersService.deleteLetters(id).subscribe(_ => {
      this.eventDeleteLetter.emit();
    });
  }

}
