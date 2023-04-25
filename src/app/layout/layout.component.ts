import { ChangeDetectionStrategy, Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { MainContainerComponent } from './main-container.component'
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component'

@Component({
  selector: 'layout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  template: `
    <main-sidebar />
    <main-container />
  `,
  styles: [
    ':host { @apply h-screen w-screen flex-row scrollbar-hide flex overflow-hidden}'
  ],
  imports: [
    CommonModule,
    RouterModule,
    MainSidebarComponent,
    MainContainerComponent
  ]
})
export class LayoutComponent {}
