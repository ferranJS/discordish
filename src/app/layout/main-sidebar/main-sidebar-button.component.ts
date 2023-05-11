import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { type Server } from 'src/app/shared/interfaces'
import { ToolTipComponent } from '../../shared/tool-tip.component'

import { RouterModule } from '@angular/router'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'main-sidebar-button',
  standalone: true,
  template: `
    <!-- //todo by names https://tailwindcss.com/docs/hover-focus-and-other-states#differentiating-nested-groups -->
    <button
      id="main-side"
      class="group relative flex h-12 w-12 items-center text-sm font-medium"
      [routerLink]="link || server?.id"
    >
      <div
        class="flex h-full w-full items-center justify-center rounded-3xl bg-zinc-700 bg-cover transition-all duration-200 hover:rounded-2xl active:translate-y-px"
        [ngClass]="{
          'text-green-600 group-hover:bg-green-600 group-hover:text-zinc-200':
            color == 'green',
          'group-hover:bg-indigo-500': color == 'blue'
        }"
        [routerLinkActive]="
          '!rounded-2xl' +
          (color == 'green'
            ? ' !bg-green-600 text-zinc-200'
            : ' !bg-indigo-500')
        "
        [style.background-image]="
          server?.image ? 'url(' + server?.image + ')' : ''
        "
      >
        <i *ngIf="iconClass" class="h-5 w-5" [class]="iconClass"></i>
        <p *ngIf="server && !server.image" class="overflow-hidden p-px text-xs">
          {{ initialsFromName(server.name) }}
        </p>
        <div
          *ngIf="selectable"
          routerLinkActive="!h-10 scale-100"
          class="absolute -left-3 h-5 w-1 scale-0 rounded-r-xl bg-white transition-all duration-200 group-hover:scale-100"
        ></div>
      </div>

      <tool-tip
        [text]="(name || this.server?.name)!"
        [side]="toolTipSide || ''"
      />
    </button>
  `,
  styles: [],
  imports: [CommonModule, ToolTipComponent, RouterModule]
})
export class MainSidebarButtonComponent {
  @Input() iconClass?: string
  @Input() server?: Server
  @Input() selectable?: boolean
  @Input() color?: 'green' | 'blue'
  @Input() link?: string
  @Input() name?: string
  @Input() toolTipSide?: string

  ngOnInit (): void {
    this.selectable = this.selectable ?? !(this.server == null)
  }

  initialsFromName (name: string) {
    let initials = ''
    for (const word of name.split(' ')) initials += word[0]
    return initials
  }
}
