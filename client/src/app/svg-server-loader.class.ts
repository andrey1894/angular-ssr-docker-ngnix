import { makeStateKey, StateKey, TransferState } from '@angular/core'

import { SvgLoader } from 'angular-svg-icon'
import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { Observable, of } from 'rxjs'

export class SvgServerLoader implements SvgLoader {
  constructor(
    private assetsPath: string,
    private transferState: TransferState
  ) {}

  getSvg(url: string): Observable<string> {
    const filePath = join(this.assetsPath, url)

    console.log('readdirSync', readdirSync('.'))
    console.log('filePath', filePath)

    try {
      const svgData = readFileSync(filePath, 'utf8')
      const key: StateKey<string> = makeStateKey<string>('transfer-svg:' + url)
      this.transferState.set(key, svgData)

      return of(svgData)
    } catch {
      return of('')
    }
  }
}
