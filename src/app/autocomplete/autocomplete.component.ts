import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.styl']
})
export class AutocompleteComponent implements OnInit {

  @Input() mailFilter: string[];
  @Input() mailInput: any;
  @Input() formMail: any;

  @Output() eventMailValue: EventEmitter<string> = new EventEmitter<string>();

  public styleDrop: any;
  public styleMail: any;

  constructor() { }

  ngOnInit() {
    const computedStyle = getComputedStyle(this.mailInput);
    const mt = parseInt(computedStyle.marginTop, 10);
    const pl = parseInt(computedStyle.paddingLeft, 10);
    const h = parseInt(computedStyle.height, 10);
    const bb = parseInt(computedStyle.borderBottom, 10);

    this.styleDrop = {
      'top': `${mt + h - bb}px`,
      'border': `${bb}px solid gray`,
      'border-top': 'none'
    };

    this.styleMail = {'padding-left': `${pl}px`};
  }

  substitution(event) {
    this.eventMailValue.emit(event.target.innerText);
  }
}
