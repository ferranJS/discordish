import { ChangeDetectionStrategy, Component } from "@angular/core"
import { RouterModule } from "@angular/router"
import { environment } from "src/environments/environment"

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterModule],
  template: `<router-outlet></router-outlet>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = "discordish"
  pepe = "pepesito j ji"
  ngOnInit() {
    console.log("environment.production: ", environment.production)
  }
}
