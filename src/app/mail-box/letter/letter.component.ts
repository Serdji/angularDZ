import {Component, OnInit, Input, Output, EventEmitter, OnDestroy} from '@angular/core';
import {Data} from '@angular/router';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css']
})
export class LetterComponent implements OnInit, OnDestroy {

  @Input() id: number;
  @Output() clickDelete: EventEmitter<number> = new EventEmitter<number>();

  public time: string;
  private data: Data;
  private stopwatch: string;

  constructor() {
  }

  ngOnInit() {
    this.Lifetime();
    this.data = new Date();
  }

  zeroFront(time: any): any {
    return time < 10 ? '0' + time : time;
  }

  Lifetime() {
    let timer: any = 0;
    let h: any = 0;
    let m: any = 0;
    let s: any = 0;
    setInterval(() => {
      ++timer;
      h = Math.floor(timer / 3600);
      m = Math.floor((timer - h * 3600) / 60);
      s = timer - h * 3600 - m * 60;
      this.stopwatch = `${this.zeroFront(h)}:${this.zeroFront(m)}:${this.zeroFront(s)}`;
    }, 1000);
  }

  timeout(): string {
    const h = this.data.getHours();
    const m = this.data.getMinutes();
    const s = this.data.getSeconds();
    return this.time = `${this.zeroFront(h)}:${this.zeroFront(m)}:${this.zeroFront(s)}`;
  }

  transferId() {
    this.clickDelete.emit(this.id);
  }

  ngOnDestroy() {
    console.log(`Письмо с id: ${this.id}, прожило: ${this.stopwatch}`);
  }

}
