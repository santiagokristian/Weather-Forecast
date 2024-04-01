import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAuth0 } from '@auth0/auth0-angular';
import { environment } from '../environments/environment';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { appReducer } from './store/app.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAuth0({
      domain: environment.auth0Settings.domain,
      clientId: environment.auth0Settings.clientId,
      authorizationParams: {
        audience: environment.auth0Settings.audience,
        redirect_uri: environment.auth0Settings.redirectUri
      }
    }),
    provideHttpClient(),
    provideStore(appReducer)
  ]
};
