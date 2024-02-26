import { HttpClient } from '@angular/common/http'
import { makeStateKey, StateKey, TransferState } from '@angular/core'

import { SvgHttpLoader, SvgLoader } from 'angular-svg-icon'
import { Observable, Observer } from 'rxjs'

export class SvgBrowserLoader implements SvgLoader {
  constructor(
    private http: HttpClient,
    private transferState: TransferState
  ) {}
  getSvg(url: string): Observable<string> {
    const key: StateKey<number> = makeStateKey<number>('transfer-svg:' + url)
    const data = this.transferState.get(key, null)
    // First we are looking for the translations in transfer-state, if none found, http load as fallback
    if (data) {
      return Observable.create((observer: Observer<any>) => {
        observer.next(data)
        observer.complete()
      })
    } else {
      return new SvgHttpLoader(this.http).getSvg(url)
    }
  }
}
