import { ElementRef, Input, Directive, HostListener, HostBinding } from '@angular/core'
import { ToolTipComponent } from './tool-tip.component'

@Directive({
   selector: '[toolTip]',
   standalone: true,
})
export class ToolTipDirective {
   @HostBinding('style.backgroundColor') bgColor = 'red'
   @Input() toolTip: string
   @Input() toolTipSide: string

   constructor(private elementRef: ElementRef<HTMLElement>) {}

   @HostListener('mouseenter') mouseEnter() {
      // console.log('getClientRects', this.elementRef.nativeElement.getClientRects())
      console.log('getBoundingClientRect', this.elementRef.nativeElement.getBoundingClientRect())

      const host = document.querySelector('app-root')!
      host.insertAdjacentHTML(
         'beforeend',
         `
         <div id="tool-tip" class="flex justify-center items-center leading-tight fixed z-40 min-w-[30px] min-h-[20px] top-2 left-2">
            <div
               class="absolute z-40 max-h-16 w-max max-w-[190px] scale-0 rounded-md bg-zinc-900 p-3 text-start transition-all duration-[0.05s] group-hover:scale-100 `+
               this.toolTipSide == 'left' ? 'right-[calc(100%+1.5rem)] top-1/2 -translate-y-1/2' :
               this.toolTipSide == 'right' ? 'left-[calc(100%+1.5rem)] top-1/2 -translate-y-1/2' :
               this.toolTipSide == 'bottom' ? 'top-[calc(100%+1.5rem)] left-1/2 -translate-x-1/2' :
               this.toolTipSide == 'top' ? 'bottom-[calc(100%+1.5rem)] left-1/2 -translate-x-1/2' : ''
               +`"
            >
               <p class="line-clamp-2">
                  `+this.toolTip+`
               </p>
               <div
                  class="absolute h-0 border-8 border-transparent `+
                  this.toolTipSide == 'left' ? '-right-3.5 border-l-zinc-900 left-1/2 -translate-x-1/2' :
                  this.toolTipSide == 'right' ? '-left-3.5 border-r-zinc-900 left-1/2 -translate-x-1/2' :
                  this.toolTipSide == 'bottom' ? '-top-3.5 border-b-zinc-900 top-1/2 -translate-y-1/2' :
                  this.toolTipSide == 'top' ? 'bottom-3.5 border-t-zinc-900 top-1/2 -translate-y-1/2' : ''
                  +`"
               ></div>
            </div>
         </div>
      `,
      )
   }

   @HostListener('mouseleave') mouseLeave() {
      const host = document.getElementById('tool-tip')
      host?.remove()
   }
}
