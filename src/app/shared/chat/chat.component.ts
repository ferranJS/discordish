import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { User } from '../interfaces'

@Component({
   selector: 'app-chat',
   standalone: true,
   imports: [CommonModule],
   template: `
      <div class="z-10 flex h-12 w-full items-center justify-between bg-zinc-700 p-2 pl-4 shadow">
         <div class="flex items-center justify-start gap-2.5">
            <i class="fa-solid fa-at text-xl text-zinc-400"></i>
            <p class="font-medium">{{ user.name }}</p>
            <ng-container [ngSwitch]="user.status">
               <div *ngSwitchCase="'Online'" class="h-2.5 w-2.5 rounded-full bg-green-600"></div>
               <div *ngSwitchCase="'Away'" class="relative h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
               <div *ngSwitchCase="'Do not disturb'" class="flex h-2.5 w-2.5 items-center justify-center rounded-full bg-red-600">
                  <div class="h-0.5 w-1.5 rounded-full bg-zinc-850"></div>
               </div>
               <div *ngSwitchCase="'Invisible'" class="flex h-2.5 w-2.5 items-center justify-center rounded-full bg-zinc-500">
                  <div class="h-1 w-1 rounded-full bg-zinc-850"></div>
               </div>
            </ng-container>
            <div #separator class="mx-1 h-6 w-px rounded-full bg-zinc-600"></div>
            <div #aliases *ngIf="'hasDiferentNameInAnyOfTheServersUrIn'" class="flex items-center gap-1.5">
               <p class="rounded-full bg-zinc-850 px-2 text-xs font-medium">ALIAS</p>
               <p class="text-sm">Terbumon</p>
               <!-- *ngFor="let alias of userNames?" & add comma -->
            </div>
         </div>
         <div>buttons</div>
      </div>
   `,
   styles: [':host { @apply relative flex h-full w-full }'],
})
export class ChatComponent {
   @Input() user: User = { name: 'Deinytb6', status: 'Do not disturb', id: '222' }
}
