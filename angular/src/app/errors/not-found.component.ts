import { ChangeDetectionStrategy, Component } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "not-found",
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="absolute left-1/2 top-1/2 -translate-x-1/2  -translate-y-1/2 font-mono text-4xl font-bold"
    >
      404 - Lost in routing bro...
    </div>
  `,
  styles: []
})
export class NotFoundComponent {}
