import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
   selector: 'not-found',
   standalone: true,
   imports: [CommonModule],
   template: `
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 font-mono text-4xl font-bold">
         404 - Lost in routing bro...
      </div>
   `,
   styles: [],
})
export class NotFoundComponent {}
