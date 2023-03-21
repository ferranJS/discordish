import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Server } from 'src/app/shared/interfaces'

@Component({
   selector: 'side-bar-button',
   standalone: true,
   imports: [CommonModule],
   template: `
      <button
         class="
      group relative flex h-12 w-12 
      items-center justify-center rounded-3xl
      bg-zinc-700 bg-cover text-center text-sm font-medium
      transition-all duration-200 hover:rounded-2xl 
      "
         [ngClass]="{
            'text-green-600 hover:bg-green-600 hover:text-zinc-200':
               color == 'green',
            'focus:bg-green-600 focus:text-zinc-200':
               selectable && color == 'green',
            'text-zinc-200 hover:bg-indigo-500 focus:bg-indigo-500':
               color == 'blue',
            'focus:bg-indigo-500': selectable && color == 'blue',
            'focus:rounded-2xl': selectable
         }"
         [style]="
            server?.image ? 'background-image:url(' + server?.image + ')' : ''
         "
      >
         <i
            *ngIf="iconClass && iconClass != 'fa-brands fa-discord'"
            [class]="iconClass"
            class="h-5 w-5"
         ></i>
         <i
            *ngIf="iconClass && iconClass == 'fa-brands fa-discord'"
            [class]="iconClass"
            class="h-7 w-7"
         ></i>
         <p
            *ngIf="server && !server.image"
            class="overflow-hidden p-px text-xs"
         >
            {{ initialsFromName(server.name) }}
         </p>

         <div
            *ngIf="selectable"
            class="
         absolute -left-3 h-5 w-1 scale-0 rounded-r-xl
         bg-white transition-all duration-200 group-hover:scale-100
         group-focus:h-10 group-focus:scale-100
      "
         ></div>
         <div
            *ngIf="textName"
            class="
         absolute left-[4.5rem] max-h-16 w-max max-w-[190px] scale-0
         rounded-md bg-zinc-900 p-3 
         text-start text-zinc-200
         group-hover:scale-100 
      "
         >
            <!--//? https://css-tricks.com/line-clampin/ -->
            <p
               style="display: -webkit-box; -webkit-line-clamp: var(--line-clamp, 2);
            -webkit-box-orient: vertical; overflow: hidden"
            >
               {{ textName }}
            </p>
            <div
               class="
            absolute -left-3.5 top-1/2 h-0
            w-0 -translate-y-1/2 border-8 border-transparent border-r-zinc-900 
         "
            ></div>
         </div>
      </button>
   `,
})
export class SideBarButtonComponent {
   @Input() iconClass?: string
   @Input() server?: Server
   @Input() textName?: string
   @Input() selectable?: boolean
   @Input() color?: 'green' | 'blue'

   ngOnInit(): void {
      this.selectable = this.selectable ?? !!this.server
      this.textName = this.textName ?? this.server?.name
   }

   initialsFromName(name: string) {
      let initials = ''
      for (let word of name.split(' ')) initials += word[0]
      return initials
   }
}