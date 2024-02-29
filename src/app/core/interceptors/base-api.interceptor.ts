import { isPlatformBrowser } from '@angular/common'
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Inject, Injectable, PLATFORM_ID } from '@angular/core'

import { Observable } from 'rxjs'

@Injectable()
export class BaseApiInterceptor implements HttpInterceptor {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (/^\.?\/?assets/.test(req.url)) {
      return next.handle(req)
    }

    if (/^http/.test(req.url)) {
      return next.handle(req)
    }

    console.log('req.url', req.url)

    const authReq = req.clone({
      url: isPlatformBrowser(this.platformId) ? `${'http://localhost'}${req.url}` : `${'http://api:5000'}${req.url}`,
    })

    return next.handle(authReq)
  }
}
