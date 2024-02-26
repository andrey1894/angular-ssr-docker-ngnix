import { TransferState } from '@angular/core'

import { SvgLoader } from 'angular-svg-icon'
import { Observable, of } from 'rxjs'

export class SvgServerLoader implements SvgLoader {
  constructor(
    private iconPath: string,
    private transferState: TransferState
  ) {}

  getSvg(url: string): Observable<string> {
    console.log('AAA', url)
    return of('')
    // const join = require('path').join
    // const parseUrl = require('url').parse
    // const baseName = require('path').basename

    // const parsedUrl: URL = parseUrl(url)
    // const fileNameWithHash = baseName(parsedUrl.pathname)
    // // Remove content hashing
    // const fileName = fileNameWithHash.replace(/^(.*)(\.[0-9a-f]{16,})(\.svg)$/i, '$1$3')
    // const filePath = join(this.iconPath, fileName)
    // return Observable.create(async (observer: Observer<any>) => {
    //   const svgData = await fs.readFile(filePath, 'utf8')

    //   // Here we save the translations in the transfer-state
    //   const key: StateKey<string> = makeStateKey<string>('transfer-svg:' + url)
    //   this.transferState.set(key, svgData)

    //   observer.next(svgData)
    //   observer.complete()
    // })
  }
}
