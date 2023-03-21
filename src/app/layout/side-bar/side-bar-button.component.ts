import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Server } from 'src/app/shared/interfaces';

@Component({
   selector: 'side-bar-button',
   standalone: true,
   imports: [CommonModule],
   template: `
   <button class="
      w-12 h-12 rounded-3xl text-center
      bg-zinc-700 
      hover:rounded-2xl
      transition-all duration-200
      flex items-center justify-center
      bg-cover relative group
      font-medium text-sm
      "
      [ngClass]="{
         'text-green-600 hover:bg-green-600 hover:text-zinc-200': color == 'green',
         'focus:bg-green-600 focus:text-zinc-200': selectable && color == 'green',
         'text-zinc-200 hover:bg-indigo-500 focus:bg-indigo-500': color == 'blue',
         'focus:bg-indigo-500': selectable && color == 'blue',
         'focus:rounded-2xl': selectable
      }"
      [style]="server?.image ? 'background-image:url('+server?.image+')' : ''"
   >
      <i *ngIf="iconClass && iconClass == 'fa-brands fa-discord'"
         [class]="iconClass" class="w-7 h-7"></i>
      <i *ngIf="iconClass && iconClass != 'fa-brands fa-discord'"
         [class]="iconClass" class="w-5 h-5"></i>
      <ng-container *ngIf="server && !server.image">
         <p class="overflow-hidden text-xs p-px">{{ initialsFromName(server.name) }}</p>
      </ng-container>

      <div *ngIf="selectable" class="
         absolute -left-3 bg-white h-5 w-1 rounded-r-xl
         scale-0 group-hover:scale-100
         group-focus:h-10 group-focus:scale-100
         transition-all duration-200
      "></div>
      <div *ngIf="textName" class="
         absolute left-[4.5rem] w-max max-w-[190px] max-h-16 p-3
         rounded-md bg-zinc-900 text-start 
         scale-0 group-hover:scale-100
         text-zinc-200 
      "> <!--//!THIS https://css-tricks.com/line-clampin/ -->
         <p style="display: -webkit-box; -webkit-line-clamp: var(--line-clamp, 2);
            -webkit-box-orient: vertical; overflow: hidden">
            {{ textName }}
         </p>
         <div class="
            absolute -left-3.5 top-1/2 -translate-y-1/2
            border-8 border-transparent border-r-zinc-900 h-0 w-0 
         "></div>
      </div>
   </button>
   `
   })
   export class SideBarButtonComponent {
   @Input() iconClass?: string;
   @Input() server?: Server;
   @Input() textName?: string;
   @Input() selectable?: boolean
   @Input() color?: "green" | "blue";

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
