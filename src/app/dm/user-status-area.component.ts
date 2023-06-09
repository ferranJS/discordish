import { CommonModule } from "@angular/common"
import { ChangeDetectionStrategy, Component } from "@angular/core"
import { type User } from "../shared/interfaces"
import { StatusComponent } from "../shared/status/status.component"

@Component({
  selector: "user-status-area",
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  template: `
    <button
      class="group flex w-full items-center gap-2 rounded-md p-1 hover:bg-zinc-700 hover:text-zinc-300"
    >
      <div
        #avatar
        class="relative aspect-square h-8 w-8 rounded-full bg-zinc-500 "
      >
        <status
          [status]="user.status"
          class="absolute -bottom-0.5 -right-0.5 flex aspect-square h-4 w-4 items-center justify-center rounded-full
               bg-zinc-800 group-hover:bg-zinc-700"
        />
      </div>
      <div class="flex flex-col items-start justify-center">
        <p>UserYes!</p>
        <p class="text-xs">#354363</p>
      </div>
    </button>
    <div class="mr-1 flex flex-row justify-center">
      <button class="h-8 w-8 rounded-md hover:bg-zinc-700 hover:text-zinc-300">
        <i class="fa-solid fa-microphone h-4 w-4 rounded-full"></i>
      </button>
      <button class="h-8 w-8 rounded-md hover:bg-zinc-700">
        <i class="fa-solid fa-headphones h-4 w-4 rounded-full"></i>
      </button>
      <button class="h-8 w-8 rounded-md hover:bg-zinc-700">
        <i class="fa-solid fa-gear h-4 w-4 rounded-full"></i>
      </button>
    </div>
  `,
  styles: [
    ":host {@apply flex justify-between fixed gap-2 w-60 h-14 items-center p-1 shadow bottom-0 bg-zinc-800}"
  ],
  imports: [CommonModule, StatusComponent]
})
export class UserStatusAreaComponent {
  user: User = {
    name: "asdfas",
    status: "Online",
    id: "2fa34as233a"
  }
}
