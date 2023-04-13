import { AfterViewInit, Component, ViewChild } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, NgForm } from '@angular/forms'
import { ToolTipComponent } from '../shared/tool-tip.component'
import { ToolTipDirective } from '../shared/tool-tip.directive'

@Component({
   selector: 'app-login',
   standalone: true,
   template: `
      <div class="flex flex-row  rounded-md bg-zinc-700">
         <form (ngSubmit)="onSubmit()" class="flex flex-col items-center justify-center gap-5 p-9" #form="ngForm">
            <div class="flex flex-col items-center justify-center gap-2">
               <label class="text-2xl font-medium">Welcome back!</label>
               <label class="text-zinc-400">We're so excited to see you again!</label>
            </div>
            <div class="flex flex-col gap-2">
               <label class="text-xs">
                  <label
                     class="font-bold uppercase text-zinc-300"
                     [ngClass]="{
                        '!text-red-400': !emailElement.valid && form.submitted
                     }"
                  >
                     Email or Phone Number
                  </label>
                  <label *ngIf="emailElement.valid || !form.submitted" class="text-red-400">* </label>
                  <label *ngIf="!emailElement.valid && form.submitted" class="italic text-red-400"> - Login or password is invalid. </label>
               </label>
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
               <label class="text-xs">
                  <label
                     class="font-bold uppercase text-zinc-300"
                     [ngClass]="{
                        '!text-red-400': !passwordElement.valid && form.submitted
                     }"
                  >
                     Password
                  </label>
                  <label *ngIf="passwordElement.valid || !form.submitted" class="text-red-400">* </label>
                  <label *ngIf="!passwordElement.valid && form.submitted" class="italic text-red-400">
                     - Login or password is invalid.
                  </label>
               </label>
               <input
                  class="flex h-10 w-96 items-center rounded-sm bg-zinc-800 p-2 text-sm font-normal shadow-inner focus:outline-none"
                  type="password"
                  #passwordElement="ngModel"
                  name="password"
                  [(ngModel)]="password"
                  required
               />
               <a href="forgot" class="text-sm text-sky-500 hover:underline">Forgot your password?</a>
            </div>
            <div class="flex flex-col gap-2">
               <button class="group relative" [disabled]="!form.valid" type="submit" toolTipSide="right">
                  <div
                     class="flex h-11 w-96 items-center justify-center rounded-sm bg-indigo-500 font-medium transition-all group-disabled:opacity-60"
                  >
                     Log in
                  </div>
                  <tool-tip text="Please, fill out the fields" side="right" />
               </button>
               <label class="text-sm text-zinc-400">
                  Need an account?
                  <a href="forgot" class="text-sky-500 hover:underline">Register</a>
               </label>
            </div>
         </form>

         <div class="flex flex-col items-center justify-center p-9">
            <div class="mb-7 aspect-square w-44 rounded-md bg-slate-100"></div>
            <label class="mb-3 text-2xl font-medium">Log in with QR Code</label>
            <label class="w-60 text-center text-zinc-300">
               Scan this with the
               <label class="font-medium">Discord mobile app</label>
               to log in instantly.
            </label>
         </div>
      </div>
   `,
   styles: [
      `
         :host {
            @apply flex animate-from-thin-air flex-row gap-7 rounded-md bg-zinc-700;
         }
      `,
   ],
   imports: [CommonModule, FormsModule, ToolTipComponent, ToolTipDirective],
})
export class LoginComponent {
   @ViewChild('form') form: NgForm
   email: string
   password: string

   onSubmit() {
      console.log('form: ', this.form)
   }
}
