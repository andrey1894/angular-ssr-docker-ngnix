import { isPlatformServer } from '@angular/common'
import { HttpClient, provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http'
import { ApplicationConfig, importProvidersFrom, PLATFORM_ID, TransferState } from '@angular/core'
import { provideClientHydration } from '@angular/platform-browser'
import { provideAnimations } from '@angular/platform-browser/animations'
import { provideRouter } from '@angular/router'

import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { provideAngularSvgIcon, SvgLoader } from 'angular-svg-icon'

import { routes } from './app.routes'
import { SvgBrowserLoader } from './svg-browser-loader.class'
import { SvgServerLoader } from './svg-server-loader.class'

const httpLoaderFactory = (http: HttpClient): TranslateHttpLoader =>
  new TranslateHttpLoader(http, './assets/i18n/', '.json')

const svgLoaderFactory = (
  http: HttpClient,
  transferState: TransferState,
  platformId: any
): SvgServerLoader | SvgBrowserLoader => {
  if (isPlatformServer(platformId)) {
    return new SvgServerLoader('../browser/assets', transferState)
  } else {
    return new SvgBrowserLoader(http, transferState)
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: 'en',
        loader: {
          provide: TranslateLoader,
          useFactory: httpLoaderFactory,
          deps: [HttpClient],
        },
        useDefaultLang: true,
      })
    ),
    provideHttpClient(withInterceptorsFromDi(), withFetch()),
    provideRouter(routes),
    provideAnimations(),
    provideAngularSvgIcon({
      loader: {
        provide: SvgLoader,
        useFactory: svgLoaderFactory,
        deps: [HttpClient, TransferState, PLATFORM_ID],
      },
    }),
    provideClientHydration(),
  ],
}
