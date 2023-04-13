import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { User } from './interfaces'

@Component({
   selector: 'user-avatar',
   standalone: true,
   imports: [CommonModule],
   template: `
      <div #avatar class="relative aspect-square h-8 w-8 rounded-full bg-zinc-500 ">
         <div
            #statusContainer
            class="absolute -bottom-0.5 -right-0.5 flex aspect-square h-4 w-4 items-center justify-center rounded-full
            bg-zinc-850 group-focus-within:bg-zinc-600 group-hover:bg-zinc-700 group-active:bg-zinc-600"
            [ngSwitch]="user.status"
         >
            <!--//TODO lo ideal sería hacer una máscara css con svg para no tener q comunicar con routerLinkActive y variables!! -->
            <div *ngSwitchCase="'Online'" class="h-2.5 w-2.5 rounded-full bg-green-600"></div>
            <div *ngSwitchCase="'Away'" class="relative h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
            <div *ngSwitchCase="'Do not disturb'" class="flex h-2.5 w-2.5 items-center justify-center rounded-full bg-red-600">
               <div
                  class="h-0.5 w-1.5 rounded-full bg-zinc-850 group-focus-within:bg-zinc-600 group-hover:bg-zinc-700 group-active:bg-zinc-600"
               ></div>
            </div>
            <div *ngSwitchCase="'Invisible'" class="flex h-2.5 w-2.5 items-center justify-center rounded-full bg-zinc-500">
               <div
                  class="h-1 w-1 rounded-full bg-zinc-850 group-focus-within:bg-zinc-600 group-hover:bg-zinc-700 group-active:bg-zinc-600"
               ></div>
            </div>
         </div>
      </div>
   `,
   styles: [],
})
export class UserAvatarComponent {
   @Input() user: User
}
