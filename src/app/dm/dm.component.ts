import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DMMainSidebarComponent } from './dm-sidebar.component'
import { DMContentComponent } from './dm-content.component'

@Component({
   selector: 'dm',
   standalone: true,
   template: `
      <dm-sidebar />
      <dm-content />
   `,
   styles: [':host { @apply flex flex-row justify-start w-full h-full }'],
   imports: [CommonModule, DMMainSidebarComponent, DMContentComponent],
})
export class DMComponent {}
