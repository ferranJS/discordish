import { ChangeDetectionStrategy, Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { SideBarComponent } from './side-bar/side-bar.component'
import { MainContainerComponent } from './main-container/main-container.component'

@Component({
   selector: 'layout',
   changeDetection: ChangeDetectionStrategy.OnPush,
   standalone: true,
   template: `
      <side-bar />
      <main-container />
   `,
   styles: [':host { @apply h-screen w-screen flex-row scrollbar-hide flex overflow-hidden}'],
   imports: [CommonModule, RouterModule, SideBarComponent, MainContainerComponent],
})
export class LayoutComponent {}
