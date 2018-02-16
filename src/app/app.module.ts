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

import { UsersService } from './services/users.service';
import { MailBoxService } from './services/mail-box.service';
import { LettersService } from './services/letters.service';
import { SendListService } from './services/send-list.service';
import { DeleteListService } from './services/delete-list.service';
import { MailService } from './services/mail.service';
import { CookieService } from './services/cookie.service';
import { MailFilterService } from './services/mail-filter.service';
import { AuthGuard } from './auth.guard';

import { ROUTERS } from './ROUTERS';
import { DetailedLetterComponent } from './mail-box/detailed-letter/detailed-letter.component';
import { WriteLetterComponent } from './mail-box/write-letter/write-letter.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';

@NgModule({
  declarations: [
    AppComponent,
    MailBoxComponent,
    LetterComponent,
    LoggingComponent,
    RegistrationComponent,
    DetailedLetterComponent,
    WriteLetterComponent,
    AutocompleteComponent
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
    DeleteListService,
    MailService,
    AuthGuard,
    CookieService,
    MailFilterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
