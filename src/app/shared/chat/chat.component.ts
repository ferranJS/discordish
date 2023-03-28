import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
   selector: 'app-chat',
   standalone: true,
   imports: [CommonModule],
   template: ` <p>chat works!</p> `,
   styles: [],
})
export class ChatComponent {}
