import { ChangeDetectionStrategy, Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { ServerMainSidebarComponent } from "./server-sidebar.component"
import { ServerContentComponent } from "./server-content.component"
import { RouterModule } from "@angular/router"

@Component({
  selector: "app-server",
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  template: `
    <server-sidebar />
    <server-content />
  `,
  styles: [],
  imports: [
    CommonModule,
    ServerMainSidebarComponent,
    ServerContentComponent,
    RouterModule
  ]
})
export class ServerComponent {}
