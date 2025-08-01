import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core'
import { provideRouter } from '@angular/router'
import { provideAuth0 } from '@auth0/auth0-angular'

import { routes } from './app.routes'
import { auth0Config } from './core/config/auth0-config'

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAuth0(auth0Config),
  ],
}
