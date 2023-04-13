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
         class="absolute z-40 flex w-max max-w-[190px] items-center justify-center rounded-md bg-zinc-900 px-3 py-2 text-start leading-normal"
         [ngClass]="{
            '-translate-x-1/2': side == 'left',
            'translate-x-1/2': side == 'right',
            '-translate-y-1/2': side == 'top',
            'translate-y-1/2': side == 'bottom'
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
   styles: [':host {@apply hidden }'], // z-10 block ?
})
export class ToolTipComponent {
   @Input() text: string
   @Input() side = 'right'
}
