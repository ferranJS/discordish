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
      <p class="line-clamp-2">
         {{ text }}
      </p>
      <div id="left-arrow" class="absolute -left-3.5 top-1/2 h-0 -translate-y-1/2 border-8 border-transparent border-r-zinc-900"></div>
   `,
   // tailwind classes applied to the tool-tip component itself
   styles: [
      ':host { @apply absolute left-[4.5rem] max-h-16 w-max max-w-[190px] scale-0 rounded-md bg-zinc-900 p-3 text-start group-hover:scale-100 transition-all duration-[0.05s] z-40 }',
   ], // z-10 block ?
})
export class ToolTipComponent {
   @Input() text: string
}
