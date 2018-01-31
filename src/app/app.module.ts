import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LogginComponent } from './loggin/loggin.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { LetterComponent } from './letter/letter.component';


@NgModule({
  declarations: [
    AppComponent,
    LogginComponent,
    MailBoxComponent,
    LetterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
