import { ChangeDetectionStrategy, Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

@Component({
   selector: 'main-container',
   standalone: true,
   imports: [CommonModule, RouterModule],
   template: ` <router-outlet></router-outlet> `,
   styles: [':host { @apply w-full h-full }'],
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainContainerComponent {}
