import { AsyncPipe, JsonPipe, NgComponentOutlet } from '@angular/common'
import { afterNextRender, ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { RouterLink, RouterOutlet } from '@angular/router'

import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap'
import { SvgIconComponent } from 'angular-svg-icon'
import { BehaviorSubject } from 'rxjs'

import { ENV } from '~env/environment'

import { TestApiService } from './core/api'
import { TestComponent } from './core/components'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe,
    NgComponentOutlet,
    RouterOutlet,
    RouterLink,
    NgbNavModule,
    SvgIconComponent,
    TestComponent,
  ],
})
export class AppComponent implements OnInit {
  title = 'client'
  active = 1

  lazyComponentSsr?: Promise<any>
  lazyComponentClient?: Promise<any>

  testValue = toSignal(this.testApiService.getTestValue())
  testValue$ = new BehaviorSubject<object | null>(null)
  err$ = new BehaviorSubject<any>(null)

  constructor(private testApiService: TestApiService) {
    afterNextRender(() => {
      this.lazyComponentClient = import('./core/components/lazy-block/lazy-block.component').then(c => {
        console.log('afterNextRender')

        return c.LazyBlockComponent
      })
    })
  }

  async ngOnInit(): Promise<void> {
    this.testRequest()

    this.lazyComponentSsr = import('./core/components/lazy-block/lazy-block.component').then(c => {
      console.log('ngOnInit', ENV)

      return c.LazyBlockComponent
    })
  }

  testRequest(): void {
    this.testApiService.getTestValue().subscribe(res => {
      this.testValue$.next(res)
      console.log('res', res)
    })
  }
}
