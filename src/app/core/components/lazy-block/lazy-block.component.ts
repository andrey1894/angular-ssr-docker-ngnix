import { Component } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-lazy-block',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './lazy-block.component.html',
  styleUrl: './lazy-block.component.scss',
})
export class LazyBlockComponent {}
