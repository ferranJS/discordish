import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

//TODO https://accesto.com/blog/how-to-create-angular-tooltip-directive/
//todo   crear directive con parametros nombre y posición. con @HostListener
//todo   (y @HostBinding?creo q no hace falta) q se cree el tooltip
@Component({
   selector: 'tool-tip',
   standalone: true,
   imports: [CommonModule],
   changeDetection: ChangeDetectionStrategy.OnPush,
   template: `
      <div
         class="absolute z-40 max-h-16 w-max max-w-[190px] scale-0 rounded-md bg-zinc-900 p-3 text-start transition-all duration-[0.05s] group-hover:scale-100"
         [ngClass]="{
            'right-[calc(100%+1.5rem)]': side == 'left',
            'left-[calc(100%+1.5rem)]': side == 'right',
            'top-[calc(100%+1.5rem)]': side == 'bottom',
            'bottom-[calc(100%+1.5rem)]': side == 'top',
            'left-1/2 -translate-x-1/2': side == 'top' || side == 'bottom',
            'top-1/2 -translate-y-1/2': side == 'left' || side == 'right'
         }"
      >
         <p class="line-clamp-2">
            {{ text }}
         </p>
         <ng-container [ngSwitch]="side">
            <div
               *ngSwitchCase="'right'"
               class="absolute -left-3.5 top-1/2 h-0 -translate-y-1/2 border-8 border-transparent border-r-zinc-900"
            ></div>
            <div
               *ngSwitchCase="'left'"
               class="absolute -right-3.5 top-1/2 h-0 -translate-y-1/2 border-8 border-transparent border-l-zinc-900"
            ></div>
            <div
               *ngSwitchCase="'top'"
               class="absolute -bottom-3.5 left-1/2 h-0 -translate-x-1/2 border-8 border-transparent border-t-zinc-900"
            ></div>
            <div
               *ngSwitchCase="'bottom'"
               class="absolute -top-3.5 left-1/2 h-0 -translate-x-1/2 border-8 border-transparent border-b-zinc-900"
            ></div>
         </ng-container>
      </div>
   `,
   // tailwind classes applied to the tool-tip component itself
   styles: [':host { @apply flex justify-center items-center leading-tight }'], // z-10 block ?
})
export class ToolTipComponent {
   @Input() text: string
   @Input() side = 'right'
}
