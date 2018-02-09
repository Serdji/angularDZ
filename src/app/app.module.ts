import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { LetterComponent } from './mail-box/letter/letter.component';
import { LoggingComponent } from './logging/logging.component';
import { RegistrationComponent } from './registration/registration.component';

import { UsersService } from './users.service';
import { MailBoxService } from './mail-box.service';
import { LettersService } from './letters.service';
import { SendListService } from './send-list.service';
import { DeleteListService } from './delete-list.service';

import { ROUTERS } from './ROUTERS';

@NgModule({
  declarations: [
    AppComponent,
    MailBoxComponent,
    LetterComponent,
    LoggingComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTERS)
  ],
  providers: [
    UsersService,
    MailBoxService,
    LettersService,
    SendListService,
    DeleteListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
