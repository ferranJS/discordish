import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Server } from 'src/app/shared/interfaces'
import { ToolTipComponent } from './tool-tip.component'

@Component({
   selector: 'side-bar-button',
   standalone: true,
   template: `
      <button
         class="group relative flex h-12 w-12 items-center justify-center rounded-3xl bg-zinc-700 bg-cover text-center text-sm font-medium transition-all duration-200 hover:rounded-2xl"
         [ngClass]="{
            'text-green-600 hover:bg-green-600 hover:text-zinc-200': color == 'green',
            'focus:bg-green-600 focus:text-zinc-200': selectable && color == 'green',
            'text-zinc-200 hover:bg-indigo-500 focus:bg-indigo-500': color == 'blue',
            'focus:bg-indigo-500': selectable && color == 'blue',
            'focus:rounded-2xl': selectable
         }"
         [style.background-image]="server?.image ? 'url(' + server?.image + ')' : ''"
      >
         <i *ngIf="iconClass"  class="h-5 w-5"[class]="iconClass"></i>
         <p *ngIf="server && !server.image" class="overflow-hidden p-px text-xs">
            {{ initialsFromName(server.name) }}
         </p>

         <div
            *ngIf="selectable"
            class="absolute -left-3 h-5 w-1 scale-0 rounded-r-xl bg-white transition-all duration-200 group-hover:scale-100 group-focus:scale-100 group-focus:h-10"
         ></div>
         <tool-tip [text]="(textName || this.server?.name)!" />
      </button>
   `,
   imports: [CommonModule, ToolTipComponent],
})
export class SideBarButtonComponent {
   @Input() iconClass?: string
   @Input() server?: Server
   @Input() textName?: string
   @Input() selectable?: boolean
   @Input() color?: 'green' | 'blue'

   ngOnInit(): void {
      this.selectable = this.selectable ?? !!this.server
   }

   initialsFromName(name: string) {
      let initials = ''
      for (let word of name.split(' ')) initials += word[0]
      return initials
   }
}
