import { CommonModule } from "@angular/common"
import { ChangeDetectionStrategy, Component, ViewChild } from "@angular/core"
import { FormsModule, type NgForm } from "@angular/forms"
import { RouterLink } from "@angular/router"
import { ToolTipComponent } from "../shared/tool-tip.component"
import { ToolTipDirective } from "../shared/tool-tip.directive"

@Component({
  selector: "app-login",
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  template: `
    <div class="flex flex-row  rounded-md bg-zinc-700">
      <form
        (ngSubmit)="onSubmit()"
        class="flex flex-col items-center justify-center gap-5 p-9"
        #form="ngForm"
      >
        <div class="flex flex-col items-center justify-center gap-2">
          <div class="text-2xl font-medium">Welcome back!</div>
          <div class="text-zinc-400">We're so excited to see you again!</div>
        </div>
        <div class="flex flex-col gap-2">
          <!-- //todo https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-sibling-state -->
          <div class="text-xs">
            <span
              class="font-bold uppercase text-zinc-300"
              [ngClass]="{
                '!text-red-400': !emailElement.valid && form.submitted
              }"
            >
              Email or Phone Number
            </span>
            <span
              *ngIf="emailElement.valid || !form.submitted"
              class="text-red-400"
              >*</span
            >
            <span
              *ngIf="!emailElement.valid && form.submitted"
              class="italic text-red-400"
              >- Login or password is invalid.</span
            >
          </div>
          <input
            class="flex h-10 w-96 items-center rounded-sm bg-zinc-800 p-2 text-sm font-normal shadow-inner focus:outline-none"
            type="email"
            #emailElement="ngModel"
            name="email"
            autofocus
            [(ngModel)]="email"
            email
            required
          />
        </div>
        <div class="flex flex-col gap-2">
          <div class="text-xs">
            <span
              class="font-bold uppercase text-zinc-300"
              [ngClass]="{
                '!text-red-400': !passwordElement.valid && form.submitted
              }"
            >
              Password
            </span>
            <span
              *ngIf="passwordElement.valid || !form.submitted"
              class="text-red-400"
              >*</span
            >
            <span
              *ngIf="!passwordElement.valid && form.submitted"
              class="italic text-red-400"
              >- Login or password is invalid.</span
            >
          </div>
          <input
            class="flex h-10 w-96 items-center rounded-sm bg-zinc-800 p-2 text-sm font-normal shadow-inner focus:outline-none"
            type="password"
            #passwordElement="ngModel"
            name="password"
            [(ngModel)]="password"
            password
            required
          />
          <a routerLink="/forgot" class="text-sm text-sky-500 hover:underline"
            >Forgot your password?</a
          >
        </div>
        <div class="flex flex-col gap-2">
          <!-- <div class=""> -->
          <div toolTipSide="right">
            <button
              [disabled]="!form.valid"
              class="flex h-11 w-96 items-center justify-center rounded-sm bg-indigo-500 font-medium transition-all disabled:opacity-60 "
              type="submit"
            >
              Log in
            </button>
            <tool-tip text="Please, fill out the fields" side="right" />
          </div>
          <!-- </div> -->
          <div class="text-sm text-zinc-400">
            Need an account?
            <button routerLink="/register" class="text-sky-500 hover:underline">
              Register
            </button>
          </div>
        </div>
      </form>

      <div class="flex flex-col items-center justify-center p-9">
        <div class="mb-7 aspect-square w-44 rounded-md bg-slate-100"></div>
        <div class="mb-3 text-2xl font-medium">Log in with QR Code</div>
        <div class="w-60 text-center text-zinc-300">
          Scan this with the
          <div class="font-medium">Discord mobile app</div>
          to log in instantly.
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        @apply flex animate-from-thin-air flex-row gap-7 rounded-md bg-zinc-700;
      }
    `
  ],
  imports: [
    CommonModule,
    FormsModule,
    ToolTipComponent,
    ToolTipDirective,
    RouterLink
  ]
})
export class LoginComponent {
  @ViewChild("form") form: NgForm
  email: string
  password: string

  onSubmit() {
    console.log("form: ", this.form)
  }
}
