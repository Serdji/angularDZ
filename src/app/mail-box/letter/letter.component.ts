import {Component, OnInit, Input, Output, EventEmitter, OnDestroy} from '@angular/core';
import {Data} from '@angular/router';
import {TimerObservable} from 'rxjs/observable/TimerObservable';

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
    this.Lifetime();
  }

  ngOnInit() {
    this.data = new Date();
  }

  Lifetime() {

    let timer: any = 0;
    let hour: any = 0;
    let minute: any = 0;
    let second: any = 0;
    TimerObservable.create(0, 1000).subscribe(() => {
      ++timer;
      hour   = Math.floor(timer / 3600);
      minute = Math.floor((timer - hour * 3600) / 60);
      second = timer - hour * 3600 - minute * 60;
      hour = hour < 10 ? '0' + hour : hour;
      minute = minute < 10 ? '0' + minute : minute;
      second =  second < 10 ? '0' + second : second;
      this.stopwatch = hour + ':' + minute + ':' + second;
    });
  }

  zeroFront(time: any): any {
    return time < 10 ? '0' + time : time;
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
