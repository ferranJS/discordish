import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MainSidebarButtonComponent } from './main-sidebar-button.component'
import { Server } from 'src/app/shared/interfaces'
import { RouterModule } from '@angular/router'
@Component({
   selector: 'main-sidebar',
   standalone: true,
   changeDetection: ChangeDetectionStrategy.OnPush,
   template: `
      <!-- <p class="text-xs font-bold text-zinc-400">Discrod</p> -->
      <main-sidebar-button
         iconClass="fa-brands fa-discord h-7 w-7"
         textName="Mensajes directos"
         color="blue"
         [selectable]="true"
         link="@me"
      />
      <hr class="w-8 self-center border-[1.5px] border-zinc-700" />
      <main-sidebar-button *ngFor="let server of servers" color="blue" [server]="server" />
      <main-sidebar-button iconClass="fa-solid fa-plus" color="green" textName="Añadir un servidor" />
      <main-sidebar-button
         iconClass="fa-solid fa-compass"
         textName="Explorar servidores públicos"
         color="green"
         click=""
         [selectable]="true"
         link="explorar-servidores"
      />
   `,
   // ':host::-webkit-scrollbar { display: none; } '
   //todo should be able to scroll but it hides tooltips (overflow-scroll scrollbar-hide)
   styles: [':host { @apply flex h-full flex-col flex-shrink-0 items-center gap-2 bg-zinc-800 p-3 }'],
   imports: [CommonModule, MainSidebarButtonComponent, RouterModule],
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
