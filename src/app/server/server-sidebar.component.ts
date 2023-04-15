import { ChangeDetectionStrategy, Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
   selector: 'server-sidebar',
   changeDetection: ChangeDetectionStrategy.OnPush,
   standalone: true,
   imports: [CommonModule],
   template: ` <p>No thank you!</p> `,
   styles: [],
})
export class ServerMainSidebarComponent {}
