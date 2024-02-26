import { ChangeDetectionStrategy, Component } from '@angular/core'

import { SvgIconComponent } from 'angular-svg-icon'

@Component({
  selector: 'app-lazy-block',
  templateUrl: './lazy-block.component.html',
  styleUrl: './lazy-block.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [SvgIconComponent],
})
export class LazyBlockComponent {}
