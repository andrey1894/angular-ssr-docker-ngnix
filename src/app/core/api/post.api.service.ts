import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { Observable } from 'rxjs'

import { IPost } from '../models'

@Injectable({ providedIn: 'root' })
export class PostApiService {
  constructor(private http: HttpClient) {}

  getList(): Observable<IPost[]> {
    return this.http.get<IPost[]>('https://jsonplaceholder.typicode.com/todos')
  }
}
