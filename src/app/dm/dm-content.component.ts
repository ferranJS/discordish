import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

@Component({
   selector: 'dm-content',
   standalone: true,
   imports: [CommonModule, RouterModule],
   template: ` <router-outlet></router-outlet> `,
   styles: [':host { @apply w-full}'],
})
export class DMContentComponent {}
