import {RegistrationComponent} from './registration/registration.component';
import {LoggingComponent} from './logging/logging.component';
import {MailBoxComponent} from './mail-box/mail-box.component';
import {DetailedLetterComponent} from './mail-box/detailed-letter/detailed-letter.component';
import {WriteLetterComponent} from './mail-box/write-letter/write-letter.component';
import {AuthGuard} from './auth.guard';

export const ROUTERS = [
  { path: '', component: LoggingComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'mailbox',
    component: MailBoxComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'detailed-letter', component: DetailedLetterComponent },
      { path: 'write-letter', component: WriteLetterComponent }
    ],
  }
];
