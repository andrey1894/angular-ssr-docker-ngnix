import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { catchError, Observable, of } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class TestApiService {
  constructor(private http: HttpClient) {}

  getTestValue(): Observable<object> {
    // return of({})
    return this.http.get<object>('/api').pipe(catchError(() => of({})))
  }
}
