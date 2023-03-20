import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Server } from 'src/app/shared/interfaces';

@Component({
  selector: 'side-bar-button',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="
    w-12 h-12 rounded-3xl text-center
    text-green-600 bg-zinc-700 
    hover:rounded-2xl hover:text-white hover:bg-green-600
    transition-all duration-200
    flex items-center justify-center
    bg-cover
    "
    [ngClass]="{'text-sm text-gray-300 font-medium': !icon}"
    [style]="server?.image ? 'background-image:url('+server?.image+')' : ''"
  >
    <ng-container *ngIf="icon; else elseTemplate">
      <i [class]="'w-5 h-5 fa-solid fa-'+icon"></i>
    </ng-container>
    <ng-template #elseTemplate>
      <ng-container *ngIf="!server?.image">
        {{ initialsFromName(server?.name) }}
      </ng-container>
    </ng-template>
  </div>
  `
})
export class SideBarButtonComponent {
  @Input() icon?: string;
  @Input() server?: Server;
  initialsFromName(name: string | undefined) {
    console.log("name: ", name);
    if (!name) return ''
    let initials = ''
    for(let word of name.split(' '))
      initials += word[0]
    return initials
  }
}
