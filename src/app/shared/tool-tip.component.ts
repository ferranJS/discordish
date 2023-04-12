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
         <div
            class="absolute h-0 border-8 border-transparent"
            [ngClass]="{
               '-right-3.5 border-l-zinc-900': side == 'left',
               '-left-3.5 border-r-zinc-900': side == 'right',
               '-top-3.5 border-b-zinc-900': side == 'bottom',
               '-bottom-3.5 border-t-zinc-900': side == 'top',
               'left-1/2 -translate-x-1/2': side == 'top' || side == 'bottom',
               'top-1/2 -translate-y-1/2': side == 'left' || side == 'right'
            }"
         ></div>
      </div>
   `,
   // tailwind classes applied to the tool-tip component itself
   styles: [':host { @apply flex justify-center items-center leading-tight }'], // z-10 block ?
})
export class ToolTipComponent {
   @Input() text: string
   @Input() side = 'right'
}
