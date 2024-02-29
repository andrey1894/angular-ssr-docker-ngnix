import { TranslateLoader } from '@ngx-translate/core'
import { readdirSync, readFileSync } from 'fs'
import { join } from 'path'
import { Observable, of } from 'rxjs'

export class TranslateServerLoader implements TranslateLoader {
  constructor(
    private assetsPath: string,
    private prefix: string,
    private suffix: string
  ) {}

  getTranslation(lang: string): Observable<any> {
    const filePath = join(this.assetsPath, this.prefix, `${lang}${this.suffix}`)

    console.log('readdirSync', readdirSync('.'))
    console.log('filePath', filePath)

    try {
      const data = readFileSync(filePath, 'utf8')

      return of(JSON.parse(data))
    } catch {
      return of({})
    }
  }
}
