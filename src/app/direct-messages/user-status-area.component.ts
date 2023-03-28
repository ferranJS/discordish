import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
   selector: 'user-status-area',
   standalone: true,
   imports: [CommonModule],
   template: `
      <button class="flex w-full items-center gap-2 rounded-md p-1 hover:bg-zinc-700 hover:text-zinc-300">
         <div class="aspect-square h-8 w-8 rounded-full bg-zinc-500"></div>
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
export class UserStatusAreaComponent {}
