import {RegistrationComponent} from './registration/registration.component';
import {LoggingComponent} from './logging/logging.component';
import {MailBoxComponent} from './mail-box/mail-box.component';
import {AuthGuard} from './auth.guard';

export const ROUTERS = [
  { path: '', component: LoggingComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'mailbox',
    component: MailBoxComponent,
    canActivate: [AuthGuard]
  }
];
