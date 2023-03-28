import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MainSidebarButtonComponent } from './main-sidebar-button.component'
import { Server } from 'src/app/shared/interfaces'
@Component({
   selector: 'main-sidebar',
   standalone: true,
   changeDetection: ChangeDetectionStrategy.OnPush,
   template: `
      <!-- <p class="text-xs font-bold text-zinc-400">Discrod</p> -->
      <main-sidebar-button
         [iconClass]="'fa-brands fa-discord h-7 w-7'"
         [textName]="'Mensajes directos'"
         [color]="'blue'"
         [selectable]="true"
      />
      <hr class="w-8 self-center border-[1.5px] border-zinc-700" />
      <main-sidebar-button *ngFor="let server of servers" [color]="'blue'" [server]="server" />
      <main-sidebar-button [iconClass]="'fa-solid fa-plus'" [color]="'green'" [textName]="'Añadir un servidor'" />
      <main-sidebar-button
         [iconClass]="'fa-solid fa-compass'"
         [textName]="'Explorar servidores públicos'"
         [color]="'green'"
         [selectable]="true"
      />
   `,
   // ':host::-webkit-scrollbar { display: none; } '
   //todo should be able to scroll but it hides tooltips (overflow-scroll scrollbar-hide)
   styles: [':host { @apply flex h-full flex-col items-center gap-2 bg-zinc-800 p-3 }'],
   imports: [CommonModule, MainSidebarButtonComponent],
})
export class MainSidebarComponent {
   servers: Server[] = [
      {
         name: 'tbu',
         image: '/assets/images/tbu_wench.png',
      },
      {
         name: 'El servidor de turno',
         image: '',
      },
      {
         name: 'El servidor de ferrran junio asdfasdf asdf asdf asdfasd fasdf asdf',
         image: '',
      },
      {
         name: 'El servidor de ferrran junio asdfasdf asdf asdf asdfasd fasdf asdf',
         image: '',
      },
      {
         name: 'El servidor de ferrran junio asdfasdf asdf asdf asdfasd fasdf asdf',
         image: '',
      },
      {
         name: 'El servidor de ferrran junio asdfasdf asdf asdf asdfasd fasdf asdf',
         image: '',
      },
      {
         name: 'El servidor de ferrran junio asdfasdf asdf asdf asdfasd fasdf asdf',
         image: '',
      },
      {
         name: 'El servidor de ferrran junio asdfasdf asdf asdf asdfasd fasdf asdf',
         image: '',
      },
      {
         name: 'El servidor de ferrran junio asdfasdf asdf asdf asdfasd fasdf asdf',
         image: '',
      },
      {
         name: 'El servidor de ferrran junio asdfasdf asdf asdf asdfasd fasdf asdf',
         image: '',
      },
   ]
}
