import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.styl']
})
export class LoggingComponent implements OnInit {

  private users: any;

  public entrance: boolean;
  public email: string;
  public error: boolean;

  constructor(private _usersService: UsersService) { }

  ngOnInit() {
    this._usersService.usersList.subscribe(usersList => this.users = usersList);
  }

  entranceMail(value) {
    this.entrance = false;
    this.error = false;
    for (const user of this.users) {
      if (user.email === value) {
        this.entrance = !this.entrance;
        this.email = value;
      } else {
        this.error = !this.error;
      }
    }
  }

  exitMail() {
    this.entrance = !this.entrance;
  }

}
