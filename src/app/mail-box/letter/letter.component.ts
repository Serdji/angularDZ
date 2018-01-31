import {Component, Input, OnInit} from '@angular/core';

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


  constructor() { }

  ngOnInit() {
  }

}
