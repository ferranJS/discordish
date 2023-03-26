import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Server } from 'src/app/shared/interfaces'
import { ToolTipComponent } from './tool-tip.component'
import { ChangeDetectionStrategy } from '@angular/core'

@Component({
   changeDetection: ChangeDetectionStrategy.OnPush,
   selector: 'main-sidebar-button',
   standalone: true,
   template: `
      <button class="group relative flex h-12 w-12 items-center text-sm font-medium">
         <div
            class="flex h-full w-full items-center justify-center rounded-3xl bg-zinc-700 bg-cover transition-all duration-200 hover:rounded-2xl active:translate-y-px"
            [ngClass]="{
               'text-green-600 group-hover:bg-green-600 group-hover:text-zinc-200': color == 'green',
               'group-hover:bg-indigo-500': color == 'blue',
               'group-focus:bg-green-600 group-focus:text-zinc-200': selectable && color == 'green',
               'group-focus:bg-indigo-500': selectable && color == 'blue',
               'group-focus:rounded-2xl': selectable
            }"
            [style.background-image]="server?.image ? 'url(' + server?.image + ')' : ''"
         >
            <i *ngIf="iconClass" class="h-5 w-5" [class]="iconClass"></i>
            <p *ngIf="server && !server.image" class="overflow-hidden p-px text-xs">
               {{ initialsFromName(server.name) }}
            </p>
         </div>

         <div
            *ngIf="selectable"
            class="absolute -left-3 h-5 w-1 scale-0 rounded-r-xl bg-white transition-all duration-200 group-hover:scale-100 group-focus:h-10 group-focus:scale-100"
         ></div>
         <tool-tip [text]="(textName || this.server?.name)!" />
      </button>
   `,
   imports: [CommonModule, ToolTipComponent],
})
export class MainSidebarButtonComponent {
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
