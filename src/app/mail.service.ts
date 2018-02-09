export class MailService {

  private mailVar: string;

  constructor() { }

  set mail (val) {
    this.mailVar = val;
  }

  get mail () {
    return this.mailVar;
  }

}
