import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { User } from './interfaces'
import { StatusComponent } from './status/status.component'

@Component({
   selector: 'user-avatar',
   standalone: true,
   template: `
      <div #avatar class="relative aspect-square h-8 w-8 rounded-full bg-zinc-500 ">
         <status
            [status]="user.status"
            class="absolute -bottom-0.5 -right-0.5 flex aspect-square h-4 w-4 items-center justify-center rounded-full
            bg-zinc-850 group-focus-within:bg-zinc-600 group-hover:bg-zinc-700 group-active:bg-zinc-600"
         />
      </div>
   `,
   styles: [],
   imports: [CommonModule, StatusComponent],
})
export class UserAvatarComponent {
   @Input() user: User
}
