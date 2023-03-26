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
   styles: [],
   imports: [CommonModule, DirectMessagesMainSidebarComponent, DirectMessagesContentComponent],
})
export class DirectMessagesComponent {}
