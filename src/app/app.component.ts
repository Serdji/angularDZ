import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public email: string;
  public entrance: boolean;

  getEmail(dataEmail) {
    this.email = dataEmail;
  }

  getEntrance(dataEntrance) {
    this.entrance = dataEntrance
  }
}
