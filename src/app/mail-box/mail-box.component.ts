import { Component, OnInit } from '@angular/core';
import {TimerObservable} from 'rxjs/observable/TimerObservable';

@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.css']
})
export class MailBoxComponent implements OnInit {

  public letterArr: number[] = [];
  private counter: number = 0;

  constructor() {
    this.letterArr.push(this.counter);
    TimerObservable.create(5000, 5000).subscribe(() => {
      this.counter++;
      this.letterArr.push(this.counter);
    });
  }

  ngOnInit() {
  }

  deleteLetter(eventData) {
    this.letterArr = this.letterArr.filter((value) => value !== eventData);
  }

}
