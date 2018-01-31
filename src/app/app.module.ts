import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { LetterComponent } from './mail-box/letter/letter.component';

import { UsersService } from './users.service';
import { MailBoxService } from './mail-box.service';
import { LettersService } from './letters.service';
import { LoggingComponent } from './logging/logging.component';


@NgModule({
  declarations: [
    AppComponent,
    MailBoxComponent,
    LetterComponent,
    LoggingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    UsersService,
    MailBoxService,
    LettersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
