import {Component, Input, OnInit} from '@angular/core';
import { UsersService } from '../users.service';
import { LettersService } from '../letters.service';

interface Iuser {
  _id: string;
  email: string;
  fullName: string;
  avatarUrl?: string;
}

interface Iletter {
  _id: string;
  mailbox: string;
  subject: string;
  body: string;
  to: string;
}

@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.styl']
})
export class MailBoxComponent implements OnInit {

  @Input() email: string;

  private users: any;
  private letters: any;

  public user: Iuser;
  public letterArr: Iletter[] = [];

  constructor(private _usersService: UsersService, private _lettersService: LettersService) { }

  ngOnInit() {
    this._usersService.usersList.subscribe((usersList: Iuser[]) => {
      this.users = usersList;
      for (const user of this.users) {
        if (user.email === this.email) {
          this.user = user;
        }
      }
    });
    this._lettersService.lettersList.subscribe((lettersList: Iletter[]) => {
      this.letters = lettersList;
      for (const letters of this.letters) {
        if (letters.to === this.email){
          this.letterArr.push(letters);
        }
      }
    });
  }

}
