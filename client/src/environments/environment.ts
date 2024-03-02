import { AuthConfig, HttpInterceptorConfig } from '@auth0/auth0-angular'

import config from '../../auth.config.json'

const { domain, clientId, audience, apiUrl } = config as {
  domain: string
  clientId: string
  audience: string
  apiUrl: string
}

const httpInterceptor: HttpInterceptorConfig = {
  allowedList: [
    `${apiUrl}/user-info`,
    {
      uri: `${apiUrl}/*`,
      allowAnonymous: true,
    },
  ],
}

const auth: AuthConfig = {
  domain,
  clientId,
  cacheLocation: 'localstorage',
  authorizationParams: {
    audience,
    redirectUri: 'http://localhost:4200',
    redirect_uri: 'http://localhost:4200',
  },
}

export const ENV = {
  production: false,
  allowNgrxDebug: false,
  apiUrl,
  auth,
  httpInterceptor,
}
