import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarButtonComponent } from "./side-bar-button.component";
import { Server } from "src/app/shared/interfaces"
@Component({
    selector: 'side-bar',
    standalone: true,
    template: `
    <div class="
      flex flex-col fixed bg-zinc-800 h-screen
      gap-2 p-3 pb-2 pt-2 m-0 top-0 left-0
    ">
      <side-bar-button
        [iconClass]="'fa-brands fa-discord'"
        [textName]="'Mensajes directos'" 
        [color]="'blue'"
        [selectable]="true"/>
      <hr class="w-8 self-center border-zinc-700 border-[1.5px]">
      <side-bar-button
        *ngFor="let server of servers"
        [color]="'blue'"
        [server]="server"/>
      <side-bar-button
        [iconClass]="'fa-solid fa-plus'"
        [color]="'green'"
        [textName]="'Añadir un servidor'"/>
      <side-bar-button
        [iconClass]="'fa-solid fa-compass'"
        [textName]="'Explorar servidores públicos'"
        [color]="'green'"
        [selectable]="true"/>
    </div>
    `,
    imports: [CommonModule, SideBarButtonComponent]
})
export class SideBarComponent {
  servers: Server[] = [
    {
      name: 'tbu',
      image: '/assets/images/tbu_wench.PNG'
    },
    {
      name: 'El servidor más Wapo!',
      image: ''
    },
    {
      name: 'El servidor de ferrran junio asdfasdf asdf asdf asdfasd fasdf asdf',
      image: ''
    }
  ]
}
