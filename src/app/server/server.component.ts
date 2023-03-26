import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerSidebarComponent } from "./server-sidebar.component";
import { ServerContentComponent } from "./server-content.component";
import { RouterModule } from '@angular/router';

@Component({
   selector: 'app-server',
   standalone: true,
   template: `
      <server-sidebar />
      <server-content />

   `,
   styles: [],
   imports: [CommonModule, ServerSidebarComponent, ServerContentComponent, RouterModule]
})
export class ServerComponent {

}
