import { ChangeDetectionStrategy, Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterModule } from "@angular/router"

@Component({
  selector: "dm-content",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule],
  template: " <router-outlet></router-outlet> ",
  styles: [":host { @apply w-full}"]
})
export class DMContentComponent {}
