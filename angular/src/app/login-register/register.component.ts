import { CommonModule } from "@angular/common"
import { ChangeDetectionStrategy, Component } from "@angular/core"
import { RouterLink } from "@angular/router"

@Component({
  selector: "app-register",
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <form class="flex flex-col items-center justify-center gap-5 p-8">
      <div class="flex flex-col items-center justify-center gap-2">
        <label class="text-2xl font-medium">Create an account</label>
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-xs font-bold uppercase text-zinc-300">Email</label>
        <input
          class="flex h-10 w-96 items-center rounded-sm bg-zinc-800 p-2 text-sm font-normal shadow-inner focus:outline-none"
          type="email"
          #email
          autofocus
        />
      </div>
      . . .
      <div class="flex flex-col gap-2">
        <button class="h-10 w-96 rounded-sm  bg-indigo-500 font-medium">
          Continue
        </button>
        <label class=" text-zinc-400">
          <a routerLink="/login" class="text-sm text-sky-500 hover:underline"
            >Already have an account?</a
          >
        </label>
      </div>
    </form>
  `,
  styles: [
    ":host { @apply flex flex-row gap-7 rounded-md bg-zinc-700 animate-from-thin-air }"
  ]
})
export class RegisterComponent {}
