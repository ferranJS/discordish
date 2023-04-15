import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { User } from 'src/app/shared/interfaces'
import { UsersService } from 'src/app/shared/services/users.service'
import { StatusComponent } from 'src/app/shared/status/status.component'
import { ToolTipComponent } from '../tool-tip.component'
import { ToolTipDirective } from '../tool-tip.directive'

@Component({
   selector: 'app-chat',
   changeDetection: ChangeDetectionStrategy.OnPush,
   standalone: true,
   template: `
      <div class="z-10 flex h-12 w-full items-center justify-between bg-zinc-700 p-2 pl-4 shadow">
         <div class="flex items-center justify-start gap-2.5">
            <i class="fa-solid fa-at text-xl text-zinc-400"></i>
            <span class="font-medium">{{ user.name }}</span>
            <div toolTipSide="bottom" toolTipGap="10">
               <status [status]="user.status" />
               <tool-tip [text]="user.status" side="bottom" />
            </div>
            <div #separator *ngIf="user.aliases.length" class="mx-1 h-6 w-px rounded-full bg-zinc-600"></div>
            <div #aliases *ngIf="user.aliases.length" class="flex items-center gap-1.5">
               <!--//TODO implement method *ngIf="'hasDiferentNameInAnyOfTheServersUrIn'" -->
               <p class="rounded-full bg-zinc-850 px-2 text-xs font-medium">ALIAS</p>
               <p class="after:content-[', '] text-sm" *ngFor="let alias of user.aliases; let last = last">
                  {{ alias }}<span *ngIf="!last">,</span>
               </p>
               <!-- *ngFor="let alias of userNames?" & add comma -->
            </div>
         </div>
         <div>buttons</div>
      </div>
   `,
   styles: [':host { @apply relative flex h-full w-full }'],
   imports: [CommonModule, StatusComponent, ToolTipDirective, ToolTipComponent],
})
export class ChatComponent {
   user: User

   route = inject(ActivatedRoute)
   usersService = inject(UsersService)
   router = inject(Router)

   ngOnInit(): void {
      this.route.params.subscribe((params) => {
         let user = this.usersService.getUserById(params['userId'])
         if (!user) {
            //TODO show error message(!?)
            this.router.navigate(['/'])
            return
         }
         this.user = user
      })
   }
}
