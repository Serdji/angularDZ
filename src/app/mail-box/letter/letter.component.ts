import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
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
  @Output() eventOpenLetter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private _lettersService: LettersService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  openLetter(id) {
    this.router.navigate(['mailbox/detailed-letter', id]);
    this.eventOpenLetter.emit(true);
  }

  deleteLetter(id) {
    this._lettersService.deleteLetters(id).subscribe(_ => {
      this.eventDeleteLetter.emit();
    });
  }

}
