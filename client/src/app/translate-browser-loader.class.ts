import { HttpClient } from '@angular/common/http'

import { TranslateLoader } from '@ngx-translate/core'
import { Observable, tap } from 'rxjs'

export class TranslateBrowserLoader implements TranslateLoader {
  http: HttpClient
  prefix: string
  suffix: string

  constructor(http: HttpClient, prefix: string, suffix: string) {
    this.http = http
    this.prefix = prefix
    this.suffix = suffix
  }

  getTranslation(lang: string): Observable<any> {
    return this.http.get<object>(`${this.prefix}${lang}${this.suffix}`).pipe(tap(tr => console.log('re', tr)))
  }
}
