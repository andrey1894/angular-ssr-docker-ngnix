import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, SvgIconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class TestComponent {}
