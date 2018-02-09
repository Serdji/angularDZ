import { AppComponent } from './app.component';
import {RegistrationComponent} from './registration/registration.component';
import {LoggingComponent} from './logging/logging.component';

export const ROUTERS = [
  { path: '', component: LoggingComponent },
  { path: 'registration', component: RegistrationComponent }
];
