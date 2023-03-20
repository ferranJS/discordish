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
      <side-bar-button *ngFor="let server of servers" [server]="server"/>
      <side-bar-button [icon]="'plus'"/>
      <side-bar-button [icon]="'compass'"/>
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
    }
  ]
}
