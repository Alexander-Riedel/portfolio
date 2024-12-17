import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 1000,
  offset: 50,
  easing: 'ease-in-out',
  mirror: true,
  once: false,
});