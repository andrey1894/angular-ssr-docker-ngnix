import { ApplicationConfig, importProvidersFrom, mergeApplicationConfig, TransferState } from '@angular/core'
import { provideServerRendering } from '@angular/platform-server'

import { AuthGuard, AuthService } from '@auth0/auth0-angular'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { provideAngularSvgIcon, SvgLoader } from 'angular-svg-icon'

import { appConfig } from './app.config'
import { SvgServerLoader } from './svg-server-loader.class'
import { TranslateServerLoader } from './translate-server-loader.class'

const svgLoaderFactory = (transferState: TransferState): SvgServerLoader => {
  return new SvgServerLoader('src', transferState)
}

const translateLoaderFactory = (): TranslateServerLoader => {
  return new TranslateServerLoader('src', './assets/i18n/', '.json')
}

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideAngularSvgIcon({
      loader: {
        provide: SvgLoader,
        useFactory: svgLoaderFactory,
        deps: [TransferState],
      },
    }),
    { provide: AuthService, useValue: null },
    { provide: AuthGuard, useValue: null },
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: 'en',
        loader: {
          provide: TranslateLoader,
          useFactory: translateLoaderFactory,
          deps: [],
        },
        useDefaultLang: true,
      })
    ),
  ],
}

export const config = mergeApplicationConfig(appConfig, serverConfig)
