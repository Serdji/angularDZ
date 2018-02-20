import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LettersService } from '../../services/letters.service';


@Component({
  selector: 'app-detailed-letter',
  templateUrl: './detailed-letter.component.html',
  styleUrls: ['./detailed-letter.component.styl']
})
export class DetailedLetterComponent implements OnInit {

  private id: string;

  public letter: object;
  public fromMail: string;

  constructor(
    private route: ActivatedRoute,
    private _lettersService: LettersService
  ) {
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = params.letterId;
      this.fromMail = params.fromMail;
    });
    this._lettersService.getLetter(this.id).subscribe(letter => {
      this.letter = letter;
    });
  }


}
