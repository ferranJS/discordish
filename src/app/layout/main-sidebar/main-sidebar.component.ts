import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MainSidebarButtonComponent } from './main-sidebar-button.component'
import { Server } from 'src/app/shared/interfaces'
import { RouterModule } from '@angular/router'
import { ToolTipDirective } from 'src/app/shared/tool-tip.directive'

@Component({
   selector: 'main-sidebar',
   standalone: true,
   changeDetection: ChangeDetectionStrategy.OnPush,
   template: `
      <!-- <p class="text-xs font-bold text-zinc-400">Discrod</p> -->
      <main-sidebar-button
         iconClass="fa-brands fa-discord h-7 w-7"
         color="blue"
         [selectable]="true"
         link="@me"
         toolTipSide="right"
         [name]="'Mensajes directos'"
      />
      <hr class="w-8 self-center border-[1.5px] border-zinc-700" />
      <main-sidebar-button *ngFor="let server of servers" color="blue" [server]="server" toolTipSide="right" [name]="server.name" />
      <main-sidebar-button iconClass="fa-solid fa-plus" color="green" toolTipSide="right" [name]="'Añadir un servidor'" />
      <main-sidebar-button
         iconClass="fa-solid fa-compass"
         color="green"
         click=""
         [selectable]="true"
         toolTipSide="right"
         [name]="'Explorar servidores públicos'"
      />
   `,
   // ':host::-webkit-scrollbar { display: none; } '
   styles: [':host { @apply flex h-full flex-shrink-0 flex-col items-center gap-2 overflow-scroll bg-zinc-800 p-3 scrollbar-hide }'],
   imports: [CommonModule, MainSidebarButtonComponent, RouterModule, ToolTipDirective],
})
export class MainSidebarComponent {
   servers: Server[] = [
      {
         id: '33526',
         name: 'tbu',
         image: '/assets/images/tbu_wench.png',
      },
      {
         id: '67922',
         name: 'El servidor de turno',
      },
      {
         name: 'My Gaming Server',
         id: '68293',
      },
      {
         name: 'The Programming Club',
         id: '41788',
      },
      {
         name: "Artists' Corner",
         id: '91653',
      },
      {
         name: 'The Book Club',
         id: '24534',
      },
      {
         id: '82748',
         name: 'The Gaming Server',
      },
      {
         id: '45902',
         name: 'The Art Of Super Magic Club',
      },
      {
         id: '17394',
         name: "The Writers' Group",
      },
      {
         id: '63829',
         name: 'The Music Lounge',
      },
   ]
}
