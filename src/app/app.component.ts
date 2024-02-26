import { Component, OnInit, afterNextRender } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SvgIconComponent } from 'angular-svg-icon';

import { TestComponent } from './core/components';
import { AsyncPipe, NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, NgComponentOutlet, RouterOutlet, RouterLink, NgbNavModule, SvgIconComponent, TestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'client';
  active = 1;

  lazyComponentSsr?: Promise<any>
  lazyComponentClient?: Promise<any>

  constructor(
  ) {
    afterNextRender(() => {
      this.lazyComponentClient = import('./core/components/lazy-block/lazy-block.component').then(c => {
        console.log('afterNextRender')

        return c.LazyBlockComponent
      })
    })
  }

  async ngOnInit(): Promise<void> {
    this.lazyComponentSsr = import('./core/components/lazy-block/lazy-block.component').then(c => {
      console.log('ngOnInit')

      return c.LazyBlockComponent
    })
  }
}
