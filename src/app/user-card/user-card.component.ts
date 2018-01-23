import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() public user: string;

  public backColor: string;

  constructor() {}

  ngOnInit() {
  }

  randomBackground(e) {
    e.preventDefault();
    const r = Math.floor(Math.random() * (256));
    const g = Math.floor(Math.random() * (256));
    const b = Math.floor(Math.random() * (256));
    const c = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    this.backColor = c;
  }

}
