import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
   selector: 'status',
   changeDetection: ChangeDetectionStrategy.OnPush,
   standalone: true,
   imports: [CommonModule],
   template: `
      <!-- //TODO it looks and behaves(hover) ugly -->
      <ng-container [ngSwitch]="status">
         <div *ngSwitchCase="'Online'" class="h-2.5 w-2.5 rounded-full bg-green-600"></div>
         <div *ngSwitchCase="'Away'" class="relative h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
         <div *ngSwitchCase="'Do not disturb'" class="flex h-2.5 w-2.5 items-center justify-center rounded-full bg-red-600">
            <div class="h-0.5 w-1.5 rounded-full bg-zinc-850"></div>
         </div>
         <div *ngSwitchCase="'Invisible'" class="flex h-2.5 w-2.5 items-center justify-center rounded-full bg-zinc-500">
            <div class="h-1 w-1 rounded-full bg-zinc-850"></div>
         </div>
      </ng-container>
   `,
   styles: [],
})
export class StatusComponent {
   @Input() status: string
}
