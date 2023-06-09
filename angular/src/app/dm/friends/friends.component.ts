import { CommonModule } from "@angular/common"
import { ChangeDetectionStrategy, Component } from "@angular/core"

@Component({
  selector: "app-friends",
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
  template: " <p>friends works!</p> ",
  styles: []
})
export class FriendsComponent {}
