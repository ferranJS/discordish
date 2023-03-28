import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UserStatusAreaComponent } from './user-status-area.component'

@Component({
   selector: 'direct-messages-sidebar',
   standalone: true,
   template: `
      <div class="flex h-12 items-center justify-center p-2 shadow">
         <input
            class="h-7 w-56 rounded-sm bg-zinc-800 p-2 text-sm font-medium shadow-inner"
            placeholder="Busca o inicia una conversación"
         />
      </div>

      <div class="flex flex-col gap-px p-2">
         <button
            class=" flex h-11 flex-wrap content-center items-center gap-4 rounded-md p-5 hover:bg-zinc-700 hover:text-zinc-300 focus:bg-zinc-600 focus:text-zinc-200"
         >
            <i class="fa-solid fa-user h-4 w-4 rounded-full"></i>
            Amigos
         </button>
         <button
            class="flex h-11 flex-wrap content-center items-center gap-4 rounded-md p-5 hover:bg-zinc-700 hover:text-zinc-300 focus:bg-zinc-600 focus:text-zinc-200"
         >
            <i class="fa-solid fa-truck-fast h-4 w-4 rounded-full"></i>
            Nitro
         </button>
         <div class="flex flex-row justify-between p-3 pt-4 pb-1 text-xs font-medium hover:text-zinc-300">
            MENSAJES DIRECTOS
            <button><i class="fa solid fa-plus h-3 w-3"></i></button>
         </div>
         <button
            class="group flex h-11 w-full items-center justify-start gap-3 rounded-md p-2 text-justify hover:bg-zinc-700 hover:text-zinc-300 focus:bg-zinc-600 focus:text-zinc-200"
            *ngFor="let user of users"
         >
            <div class="aspect-square h-8 w-8 rounded-full bg-zinc-500"></div>
            <p class="w-full overflow-hidden text-ellipsis">{{ user.name }}</p>
            <button class="scale-0 group-hover:scale-100"><i class="fa solid fa-xmark h-4 w-4"></i></button>
         </button>
      </div>
      <user-status-area />
   `,
   styles: [':host { @apply overflow-auto w-60 scrollbar-hide relative text-zinc-400 font-medium text-base; background-color:rgb(50 50 50) }'],
   imports: [CommonModule, UserStatusAreaComponent],
})
export class DirectMessagesMainSidebarComponent {
   users = [
      { name: 'PandaGamer23' },
      { name: 'GamerKing22' },
      { name: 'DarkKnight56' },
      { name: 'FluffyBunny99butNotSoFluffyAnymore_xX' },
      { name: 'PixelMaster77' },
      { name: 'ShadowNinja43' },
      { name: 'SuperAmazingRainbowUnicorn88' },
      { name: 'FireDragon99' },
      { name: 'IceQueen67' },
      {name: 'LuckyCharms27'},
      {name: 'NerdyNinja42'},
      {name: 'GalacticGamer88'},
      {name: 'MysticalMermaid36'},
      {name: 'ElectricEagle99'},
      {name: 'SilentAssassin44'},
      {name: 'SavageSamurai21'},
      {name: 'FrozenAndElectricPhoenixEle64'},
      {name: 'FunkyMonkey22'}
   ]
}
