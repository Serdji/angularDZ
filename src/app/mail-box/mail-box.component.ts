import {Component, Input, OnInit} from '@angular/core';
import { UsersService } from '../users.service';

interface Iuser {
  _id?: string;
  email?: string;
  avatarUrl?: string;
  fullName?: string;
}

@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.styl']
})
export class MailBoxComponent implements OnInit {

  @Input() email: string;

  private users: any;

  public user: Iuser;

  constructor(private _usersService: UsersService) { }

  ngOnInit() {
    this._usersService.usersList.subscribe((usersList: Iuser[]) => {
      this.users = usersList;
      for (const user of this.users) {
        if (user.email === this.email) {
          this.user = user;
        }
      }
    });
  }

}
