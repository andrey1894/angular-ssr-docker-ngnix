import { HttpClient } from '@angular/common/http'
import { makeStateKey, StateKey, TransferState } from '@angular/core'

import { SvgHttpLoader, SvgLoader } from 'angular-svg-icon'
import { Observable, of } from 'rxjs'

export class SvgBrowserLoader implements SvgLoader {
  constructor(
    private http: HttpClient,
    private transferState: TransferState
  ) {}

  getSvg(url: string): Observable<string> {
    const key: StateKey<string> = makeStateKey<string>('transfer-svg:' + url)
    const data = this.transferState.get(key, null)
    // First we are looking for the translations in transfer-state, if none found, http load as fallback
    return data ? of(data) : new SvgHttpLoader(this.http).getSvg(url)
  }
}
