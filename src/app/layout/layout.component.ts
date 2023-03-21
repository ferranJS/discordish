import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { SideBarComponent } from './side-bar/side-bar.component'

@Component({
   selector: 'layout',
   standalone: true,
   template: `
      <div class="h-screen bg-zinc-700">
         <side-bar />
         <!-- <h1 class="text-3xl font-bold underline">
         Hello world!
      </h1> -->
         <router-outlet></router-outlet>
      </div>
   `,
   imports: [CommonModule, RouterModule, SideBarComponent],
})
export class LayoutComponent {}
