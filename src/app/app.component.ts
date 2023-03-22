import { ChangeDetectionStrategy, Component } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
   selector: 'app-root',
   standalone: true,
   imports: [RouterModule],
   template: `<router-outlet></router-outlet>`,
   styles: [],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
   title = 'discordish'
}
