import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UserStatusAreaComponent } from './user-status-area.component'
import { RouterModule } from '@angular/router'

@Component({
   selector: 'direct-messages-sidebar',
   standalone: true,
   template: `
      <div class="fixed flex h-12 w-60 items-center justify-center p-2 shadow" style="background-color:rgb(50 50 50)">
         <button class="flex h-7 w-56 items-center rounded-sm bg-zinc-800 p-2 text-sm font-normal shadow-inner">
            Busca o inicia una conversación
         </button>
      </div>

      <div class="mt-12 flex flex-col gap-px p-2">
         <button
            class=" flex h-11 flex-wrap content-center items-center gap-4 rounded-md p-5 focus-within:bg-zinc-600 focus-within:text-zinc-200 hover:bg-zinc-700 hover:text-zinc-300"
            routerLink="/channels/@me"
         >
            <i class="fa-solid fa-user h-4 w-4 rounded-full"></i>
            Amigos
         </button>
         <button
            class="flex h-11 flex-wrap content-center items-center gap-4 rounded-md p-5 focus-within:bg-zinc-600 focus-within:text-zinc-200 hover:bg-zinc-700 hover:text-zinc-300"
            routerLink="/shop"
         >
            <i class="fa-solid fa-truck-fast h-4 w-4 rounded-full"></i>
            Nitro
         </button>
         <div class="flex flex-row justify-between p-3 pt-4 pb-1 text-xs font-medium hover:text-zinc-300">
            MENSAJES DIRECTOS
            <button class="text-zinc-400 hover:text-zinc-200"><i class="fa solid fa-plus h-3 w-3"></i></button>
         </div>
         <button
            class="group flex h-11 w-full items-center justify-start gap-3 rounded-md p-2 text-justify focus-within:bg-zinc-600 focus-within:text-zinc-200 hover:bg-zinc-700 hover:text-zinc-300"
            *ngFor="let user of users"
            [routerLink]="'/channels/@me/' + user.id"
         >
            <div class="aspect-square h-8 w-8 rounded-full bg-zinc-500"></div>
            <p class="w-full overflow-hidden text-ellipsis">{{ user.name }}</p>
            <button class="scale-0 text-zinc-400 hover:text-zinc-200 group-hover:scale-100">
               <i class="fa solid fa-xmark h-4 w-4"></i>
            </button>
         </button>
      </div>

      <user-status-area />
   `,
   styles: [
      ':host { @apply overflow-auto w-60 scrollbar-hide relative text-zinc-400 font-medium text-base; background-color:rgb(50 50 50) }',
   ],
   imports: [CommonModule, UserStatusAreaComponent, RouterModule],
})
export class DirectMessagesMainSidebarComponent {
   users = [
      { id: 'gpmj7d58u2c', name: 'PandaGamer23' },
      { id: 't13ic8c5g93', name: 'GamerKing22' },
      { id: '5p0r5cq5j0w', name: 'DarkKnight56' },
      { id: '9caiv8f5r5r', name: 'FluffyBunny99butNotSoFluffyAnymore_xX' },
      { id: '8hnhyt10cfm', name: 'PixelMaster77' },
      { id: 'n5qxgexczqm', name: 'ShadowNinja43' },
      { id: 'bvdph0w7okh', name: 'SuperAmazingRainbowUnicorn88' },
      { id: 'a37h6cv3kr6', name: 'FireDragon99' },
      { id: 'ysmvf35wxay', name: 'IceQueen67' },
      { id: '17g0m1u0dqi', name: 'LuckyCharms27' },
      { id: 'lf80c3n3l27', name: 'NerdyNinja42' },
      { id: 'tv5r5r5qb5p', name: 'GalacticGamer88' },
      { id: '9q3q8dj5z1i', name: 'MysticalMermaid36' },
      { id: 'e7rxk74vw9z', name: 'ElectricEagle99' },
      { id: 't2w8t8y5cyn', name: 'SilentAssassin44' },
      { id: '6l00n6e7fo6', name: 'SavageSamurai21' },
      { id: 'e77w8c7cz3d', name: 'FrozenAndElectricPhoenixEle64' },
      { id: 's1s7s1a1m8x', name: 'FunkyMonkey22' },
   ]
}
