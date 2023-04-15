import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { RouterModule } from '@angular/router'
import { UsersService } from '../shared/services/users.service'
import { UserAvatarComponent } from '../shared/user-avatar.component'
import { UserStatusAreaComponent } from './user-status-area.component'
@Component({
   selector: 'dm-sidebar',
   standalone: true,
   changeDetection: ChangeDetectionStrategy.OnPush,
   template: `
      <div class="fixed z-10 flex h-12 w-60 items-center justify-center bg-zinc-850 p-2 shadow">
         <button class="flex h-7 w-56 items-center rounded-sm bg-zinc-800 p-2 text-sm font-normal shadow-inner">
            Busca o inicia una conversación
         </button>
      </div>

      <div class="mt-12 flex flex-col gap-px p-2">
         <button
            routerLinkActive="bg-text-200 bg-zinc-600 text-zinc-200"
            [routerLinkActiveOptions]="{ exact: true }"
            class="flex h-11 content-center items-center gap-4 rounded-md p-5 hover:bg-zinc-700 hover:text-zinc-300 active:bg-zinc-600 active:text-zinc-200"
            routerLink="/channels/@me"
         >
            <i class="fa-solid fa-user h-4 w-4 rounded-full"></i>
            Amigos
         </button>
         <button
            routerLinkActive="bg-text-200 bg-zinc-600 text-zinc-200"
            class="flex h-11 content-center items-center gap-4 rounded-md p-5 hover:bg-zinc-700 hover:text-zinc-300 active:bg-zinc-600 active:text-zinc-200"
            routerLink="/channels/@me/shop"
            #shopLinkActive="routerLinkActive"
         >
            <!--//TODO transform this routerLink into /shop & control routerLinkActive with shopLinkActive through a store(?) -->
            <i class="fa-solid fa-truck-fast h-4 w-4 rounded-full"></i>
            Nitro
         </button>
         <label class="flex flex-row justify-between p-3 pt-4 pb-1 text-xs font-medium hover:text-zinc-300">
            MENSAJES DIRECTOS
            <button class="text-zinc-400 hover:text-zinc-200"><i class="fa solid fa-plus h-3 w-3"></i></button>
         </label>
         <button
            routerLinkActive="bg-text-200 bg-zinc-600 text-zinc-200"
            class="group flex h-11 w-full items-center justify-start gap-3 rounded-md p-2 text-justify hover:bg-zinc-700 hover:text-zinc-300 active:bg-zinc-600 active:text-zinc-200"
            *ngFor="let user of usersService.users"
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
export class DMMainSidebarComponent {
   usersService = inject(UsersService)
}
