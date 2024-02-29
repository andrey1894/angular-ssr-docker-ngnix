import { ChangeDetectionStrategy, Component } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'

import { TranslateModule } from '@ngx-translate/core'
import { SvgIconComponent } from 'angular-svg-icon'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TranslateModule, SvgIconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestComponent {}
