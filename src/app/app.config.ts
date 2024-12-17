import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService } from "@ngx-translate/core";
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

const httpLoaderFactory: (http: HttpClient) => TranslateHttpLoader = (http: HttpClient) =>
  new TranslateHttpLoader(http, './assets/i18n/', '.json');

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    importProvidersFrom([
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: httpLoaderFactory,
          deps: [HttpClient],
        },
      }),
    ]),
    {
      provide: 'APP_INITIALIZER',
      useFactory: (translate: TranslateService) => () => {
        const savedLang = localStorage.getItem('language') || translate.getBrowserLang();
        const defaultLang = savedLang?.match(/en|de/) ? savedLang : 'de';
        translate.setDefaultLang('de'); // Fallback
        translate.use(defaultLang);
      },
      deps: [TranslateService],
      multi: true,
    },
  ],
};
