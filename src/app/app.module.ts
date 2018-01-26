import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { MailBoxComponent } from './mail-box/mail-box.component';


@NgModule({
  declarations: [
    AppComponent,
    MailBoxComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
