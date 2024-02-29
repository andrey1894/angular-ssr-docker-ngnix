import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { ENV } from '~env/environment'

export const DEFAULT_SLUG_BLOG = 'defaultblog'

export const NGRX_DEBUG_MODULES = ENV.allowNgrxDebug
  ? [
      StoreDevtoolsModule.instrument({
        maxAge: 25,
        connectInZone: true,
      }),
    ]
  : []
