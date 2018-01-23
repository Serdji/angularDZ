import { Component } from '@angular/core';
import { usersArr } from './usersArr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public users: any[] = usersArr;
}
