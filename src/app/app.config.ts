import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http'
import { ApplicationConfig } from '@angular/core'
import { provideClientHydration } from '@angular/platform-browser'
import { provideAnimations } from '@angular/platform-browser/animations'
import { provideRouter } from '@angular/router'

import { BaseApiInterceptor } from './core/interceptors'
import { routes } from './app.routes'

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptorsFromDi(), withFetch()),
    provideRouter(routes),
    provideAnimations(),
    provideClientHydration(),
    { provide: HTTP_INTERCEPTORS, useClass: BaseApiInterceptor, multi: true },
  ],
}
