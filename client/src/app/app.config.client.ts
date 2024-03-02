import { HttpClient } from '@angular/common/http'
import { ApplicationConfig, importProvidersFrom, mergeApplicationConfig, TransferState } from '@angular/core'

import { AuthModule } from '@auth0/auth0-angular'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { provideAngularSvgIcon, SvgLoader } from 'angular-svg-icon'

import { ENV } from '~env/environment'

import { appConfig } from './app.config'
import { SvgBrowserLoader } from './svg-browser-loader.class'
import { TranslateBrowserLoader } from './translate-browser-loader.class'

const svgLoaderFactory = (http: HttpClient, transferState: TransferState): SvgBrowserLoader => {
  return new SvgBrowserLoader(http, transferState)
}

const translateLoaderFactory = (http: HttpClient): TranslateBrowserLoader => {
  return new TranslateBrowserLoader(http, './assets/i18n/', '.json')
}

const clientConfig: ApplicationConfig = {
  providers: [
    provideAngularSvgIcon({
      loader: {
        provide: SvgLoader,
        useFactory: svgLoaderFactory,
        deps: [HttpClient, TransferState],
      },
    }),
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: 'en',
        loader: {
          provide: TranslateLoader,
          useFactory: translateLoaderFactory,
          deps: [HttpClient],
        },
        useDefaultLang: true,
      }),
      AuthModule.forRoot({
        ...ENV.auth,
        // responseType: 'id_token',
        httpInterceptor: {
          ...ENV.httpInterceptor,
        },
      })
    ),
  ],
}

export const config = mergeApplicationConfig(appConfig, clientConfig)
