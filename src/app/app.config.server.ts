import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
// import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { AuthConfigService, AuthService } from '@auth0/auth0-angular';
import { BehaviorSubject } from 'rxjs';

const serverConfig: ApplicationConfig = {
  providers: [
    // provideServerRendering()
    {
      provide: AuthService,
      useValue: { isAuthenticated$: new BehaviorSubject(false) },
    },
    {
      provide: AuthConfigService,
      useValue: {}
    },
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
