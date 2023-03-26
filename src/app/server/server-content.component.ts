import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
   selector: 'server-content',
   standalone: true,
   imports: [CommonModule],
   template: ` <p>server-content works!</p> `,
   styles: [],
})
export class ServerContentComponent {}
