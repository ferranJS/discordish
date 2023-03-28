import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UserStatusAreaComponent } from './user-status-area.component'
import { RouterModule } from '@angular/router'
import { UserAvatarComponent } from '../shared/user-avatar/user-avatar.component'
import { User } from '../shared/interfaces';

@Component({
   selector: 'direct-messages-sidebar',
   standalone: true,
   template: `
      <div class="fixed z-10 flex h-12 w-60 items-center justify-center bg-zinc-850 p-2 shadow">
         <button class="flex h-7 w-56 items-center rounded-sm bg-zinc-800 p-2 text-sm font-normal shadow-inner">
            Busca o inicia una conversación
         </button>
      </div>

      <div class="mt-12 flex flex-col gap-px p-2">
         <button
            class="focus-within:bg-text-200 flex h-11 content-center items-center gap-4 rounded-md p-5 focus-within:bg-zinc-600 focus-within:text-zinc-200 hover:bg-zinc-700 hover:text-zinc-300 active:bg-zinc-600 active:text-zinc-200"
            routerLink="/channels/@me"
         >
            <i class="fa-solid fa-user h-4 w-4 rounded-full"></i>
            Amigos
         </button>
         <button
            class="focus-within:bg-text-200 flex h-11 content-center items-center gap-4 rounded-md p-5 focus-within:bg-zinc-600 focus-within:text-zinc-200 hover:bg-zinc-700 hover:text-zinc-300 active:bg-zinc-600 active:text-zinc-200"
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
            class="focus-within:bg-text-200 group flex h-11 w-full items-center justify-start gap-3 rounded-md p-2 text-justify focus-within:bg-zinc-600 focus-within:text-zinc-200 hover:bg-zinc-700 hover:text-zinc-300 active:bg-zinc-600 active:text-zinc-200"
            *ngFor="let user of users"
            [routerLink]="'/channels/@me/' + user.id"
         >
            <user-avatar [user]="user" />
            <p class="w-full overflow-hidden text-ellipsis">{{ user.name }}</p>
            <button class="scale-0 text-zinc-400 hover:text-zinc-200 group-hover:scale-100 group-active:text-zinc-200">
               <i class="fa solid fa-xmark h-4 w-4"></i>
            </button>
         </button>
      </div>

      <user-status-area />
   `,
   styles: [':host { @apply overflow-auto flex-shrink-0 w-60 scrollbar-hide relative text-zinc-400 font-medium text-base bg-zinc-850 }'],
   imports: [CommonModule, UserStatusAreaComponent, RouterModule, UserAvatarComponent],
})
export class DirectMessagesMainSidebarComponent {
   users: User[] = [
      { id: 't13ic8c5g93', name: 'GamerKing22', status: 'Away' },
      { id: '5p0r5cq5j0w', name: 'DarkKnight56', status: 'Do not disturb' },
      { id: '9caiv8f5r5r', name: 'FluffyBunny99butNotSoFluffyAnymore_xX', status: 'Invisible' },
      { id: '8hnhyt10cfm', name: 'PixelMaster77', status: 'Online' },
      { id: 'n5qxgexczqm', name: 'ShadowNinja43', status: 'Invisible' },
      { id: 'bvdph0w7okh', name: 'SuperAmazingRainbowUnicorn88', status: 'Do not disturb' },
      { id: 'a37h6cv3kr6', name: 'FireDragon99', status: 'Invisible' },
      { id: 'ysmvf35wxay', name: 'IceQueen67', status: 'Online' },
      { id: '17g0m1u0dqi', name: 'LuckyCharms27', status: 'Away' },
      { id: 'lf80c3nns6j', name: 'NerdyNinja42', status: 'Away' },
      { id: '56o2k2o6ap8', name: 'GalacticGamer88', status: 'Invisible' },
      { id: 'dpl35n7sdvf', name: 'MysticalMermaid36', status: 'Invisible' },
      { id: '38i1zrqogaz', name: 'ElectricEagle99', status: 'Away' },
      { id: '8tvwzupc78i', name: 'SilentAssassin44', status: 'Invisible' },
      { id: '24q4rlmkm0q', name: 'SavageSamurai21', status: 'Invisible' },
      { id: 'uvz6aqz8whe', name: 'FrozenAndElectricPhoenixEle64', status: 'Online' },
      { id: '5j5c5t8za13', name: 'FunkyMonkey22', status: 'Invisible' },
   ]
}
