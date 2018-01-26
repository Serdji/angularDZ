import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.css']
})
export class MailBoxComponent implements OnInit {

  public letterArr: number[] = [];
  private counter: number;

  constructor() {
    this.counter = 0;
    this.letterArr.push(this.counter);
    setInterval(() => {
      this.counter++;
      this.letterArr.push(this.counter);
    }, 5000);
  }

  ngOnInit() {
  }

  deleteLetter(eventData) {
    this.letterArr = this.letterArr.filter((value) => value !== eventData);
  }

}
