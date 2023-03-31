import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
   selector: 'app-login',
   standalone: true,
   imports: [CommonModule],
   template: `
      <div class="flex flex-row gap-7 rounded-md bg-zinc-700">
         <form class="flex flex-col items-center justify-center gap-5 p-8">
            <div class="flex flex-col items-center justify-center gap-2">
               <label class="text-2xl font-medium">Welcome back!</label>
               <label class="text-zinc-400">We're so excited to see you again!</label>
            </div>
            <div class="flex flex-col gap-2">
               <label class="text-xs font-bold uppercase text-zinc-300">Email or Phone Number <span class="text-red-600">*</span></label>
               <input
                  class="flex h-10 w-96 items-center rounded-sm bg-zinc-800 p-2 text-sm font-normal shadow-inner focus:outline-none"
                  type="email"
                  #email
                  autofocus
               />
            </div>
            <div class="flex flex-col gap-2">
               <label class="text-xs font-bold uppercase text-zinc-300">Password <span class="text-red-600">*</span></label>
               <input
                  class="flex h-10 w-96 items-center rounded-sm bg-zinc-800 p-2 text-sm font-normal shadow-inner focus:outline-none"
                  type="password"
                  #password
               />
               <a href="forgot" class="text-sm text-sky-500 hover:underline">Forgot your password?</a>
            </div>
            <div class="flex flex-col gap-2">
               <button class="h-10 w-96 rounded-sm  bg-indigo-500 font-medium">Log in</button>
               <label class="text-sm text-zinc-400">
                  Need an account?
                  <a href="forgot" class="text-sky-500 hover:underline">Register</a>
               </label>
            </div>
         </form>
         <div class="flex flex-col items-center justify-center p-8">
            <div class="mb-8 aspect-square w-44 rounded-md bg-slate-100"></div>
            <label class="mb-3 text-2xl font-medium">Log in with QR Code</label>
            <label class="w-60 text-center text-zinc-300">
               Scan this with the
               <label class="font-medium">Discord mobile app</label>
               to log in instantly.
            </label>
         </div>
      </div>
   `,
   styles: [':host { @apply flex justify-center items-center h-full bg-cover; background-image: url("/assets/images/login-bg.png") }'],
})
export class LoginComponent {}
