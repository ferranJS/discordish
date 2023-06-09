import { ChangeDetectionStrategy, Component, Input } from "@angular/core"
import { CommonModule } from "@angular/common"
import { type User } from "./interfaces"
import { StatusComponent } from "./status/status.component"
import { ToolTipComponent } from "./tool-tip.component"
import { ToolTipDirective } from "./tool-tip.directive"

@Component({
  selector: "user-avatar",
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  template: `
    <div
      #avatar
      class="relative aspect-square h-8 w-8 rounded-full bg-zinc-500 "
    >
      <div
        toolTipSide="top"
        toolTipGap="10"
        class="absolute -bottom-0.5 -right-0.5"
      >
        <status
          [status]="user.status"
          class="flex aspect-square h-4 w-4 items-center justify-center rounded-full
               bg-zinc-850 group-focus-within:bg-zinc-600 group-hover:bg-zinc-700 group-active:bg-zinc-600"
        />
        <tool-tip [text]="user.status" side="top" />
      </div>
    </div>
  `,
  styles: [],
  imports: [CommonModule, StatusComponent, ToolTipComponent, ToolTipDirective]
})
export class UserAvatarComponent {
  @Input() user: User
}
