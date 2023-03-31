import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { User, UserStatus } from '../shared/interfaces'

@Component({
   selector: 'user-status-area',
   standalone: true,
   imports: [CommonModule],
   template: `
      <button class="group flex w-full items-center gap-2 rounded-md p-1 hover:bg-zinc-700 hover:text-zinc-300">
         <div #avatar class="relative aspect-square h-8 w-8 rounded-full bg-zinc-500 ">
            <div
               #statusContainer
               class="absolute -bottom-0.5 -right-0.5 flex aspect-square h-4 w-4 items-center justify-center rounded-full
               bg-zinc-800 group-hover:bg-zinc-700"
               [ngSwitch]="user.status"
            >
               <div *ngSwitchCase="'Online'" class="h-2.5 w-2.5 rounded-full bg-green-600"></div>
               <div *ngSwitchCase="'Away'" class="relative h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
               <div *ngSwitchCase="'Do not disturb'" class="flex h-2.5 w-2.5 items-center justify-center rounded-full bg-red-600">
                  <div class="h-0.5 w-1.5 rounded-full bg-zinc-850 group-hover:bg-zinc-700"></div>
               </div>
               <div *ngSwitchCase="'Invisible'" class="flex h-2.5 w-2.5 items-center justify-center rounded-full bg-zinc-500">
                  <div class="h-1 w-1 rounded-full bg-zinc-850 group-hover:bg-zinc-700"></div>
               </div>
            </div>
         </div>
         <div class="flex flex-col items-start justify-center">
            <p>UserYes!</p>
            <p class="text-xs">#354363</p>
         </div>
      </button>
      <div class="mr-1 flex flex-row justify-center">
         <button class="h-8 w-8 rounded-md hover:bg-zinc-700 hover:text-zinc-300">
            <i class="fa-solid fa-microphone h-4 w-4 rounded-full"></i>
         </button>
         <button class="h-8 w-8 rounded-md hover:bg-zinc-700">
            <i class="fa-solid fa-headphones h-4 w-4 rounded-full"></i>
         </button>
         <button class="h-8 w-8 rounded-md hover:bg-zinc-700">
            <i class="fa-solid fa-gear h-4 w-4 rounded-full"></i>
         </button>
      </div>
   `,
   styles: [':host {@apply flex justify-between fixed gap-2 w-60 h-14 items-center p-1 shadow bottom-0 bg-zinc-800}'],
})
export class UserStatusAreaComponent {
   user: User = { name: 'asdfas', status: 'Invisible', id: '2fa34as233a' }
}
