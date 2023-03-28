import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

@Component({
   selector: 'direct-messages-content',
   standalone: true,
   imports: [CommonModule, RouterModule],
   template: ` <router-outlet></router-outlet> `,
   styles: [],
})
export class DirectMessagesContentComponent {}
