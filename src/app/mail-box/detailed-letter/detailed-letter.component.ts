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

  constructor(
    private route: ActivatedRoute,
    private _lettersService: LettersService
  ) {
  }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this._lettersService.getLetter(this.id).subscribe(letter => {
      this.letter = letter;
    });
  }


}
