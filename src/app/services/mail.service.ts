export class MailService {

  private mailVar: string;

  constructor() { }

  set mail(val) {
    this.mailVar = val;
  }

  get mail() {
    return this.mailVar;
  }

  isMail() {
    if (this.mailVar !== undefined) {
      return true;
    }
  }

}
