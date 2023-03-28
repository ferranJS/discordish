import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DirectMessagesMainSidebarComponent } from './direct-messages-sidebar.component'
import { DirectMessagesContentComponent } from './direct-messages-content.component'

@Component({
   selector: 'direct-messages',
   standalone: true,
   template: `
      <direct-messages-sidebar />
      <direct-messages-content />
   `,
   styles: [':host { @apply flex flex-row justify-start w-full h-full }'],
   imports: [CommonModule, DirectMessagesMainSidebarComponent, DirectMessagesContentComponent],
})
export class DirectMessagesComponent {}
