import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() public user: any;

  public backColor: string;

  public background: string;
  public photo: string;
  public name: string;
  public surname: string;
  public nickname: string;
  public position: string;
  public comment: string;

  constructor() {}

  ngOnInit() {
    this.background = this.user.background;
    this.photo = this.user.photo;
    this.name = this.user.name;
    this.surname = this.user.surname;
    this.nickname = this.user.nickname;
    this.position = this.user.position;
    this.comment = this.user.comment;
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
