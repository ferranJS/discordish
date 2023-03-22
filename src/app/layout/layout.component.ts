import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { SideBarComponent } from './side-bar/side-bar.component'

@Component({
   selector: 'layout',
   standalone: true,
   template: `
      <div class="h-screen w-screen bg-zinc-700">
         <side-bar />
         <router-outlet></router-outlet>
      </div>
   `,
   imports: [CommonModule, RouterModule, SideBarComponent],
})
export class LayoutComponent {}
