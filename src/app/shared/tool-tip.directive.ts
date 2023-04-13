import { ElementRef, Input, Directive, HostListener, HostBinding } from '@angular/core'
import { ToolTipComponent } from './tool-tip.component'

@Directive({
      selector: '[toolTipSide]',
   standalone: true,
})
export class ToolTipDirective {
   @Input() toolTipSide: string
   gap = 24
   constructor(private elementRef: ElementRef<HTMLElement>) {}

   @HostListener('mouseenter') mouseEnter() {
      // const tooltip = <HTMLDivElement>document.querySelector('.directive-tool-tip')

      const tooltip = document.createElement('div')
      tooltip.className = 'directive-tool-tip'
      document.body.appendChild(tooltip)

      tooltip.innerHTML = this.elementRef.nativeElement.querySelector('tool-tip')?.innerHTML || ''

      const rect = this.elementRef.nativeElement.getBoundingClientRect()
      const POSIBLE_SIDES: any = {
         right: () => {
            tooltip.style.left = rect.left + rect.width + this.gap + 'px'
            tooltip.style.top = rect.top + rect.height/2 + 'px'
         },
         left: () => {
            tooltip.style.left = rect.left - this.gap + 'px'
            tooltip.style.top = rect.top + rect.height/2 + 'px'
         },
         top: () => {
            tooltip.style.left = rect.left + rect.width/2 + 'px'
            tooltip.style.top = rect.top - this.gap + 'px'
         },
         bottom: () => {
            tooltip.style.left = rect.left + rect.width/2 + 'px'
            tooltip.style.top = rect.top + rect.height + this.gap + 'px'
         },
      }
      POSIBLE_SIDES[this.toolTipSide]()
      tooltip.style.visibility = 'visible'
      tooltip.style.scale = '1'
   }

   @HostListener('mouseleave') mouseLeave() {
      const tooltip = <HTMLDivElement>document.querySelector('.directive-tool-tip')
      // tooltip.style.visibility = 'hidden'
      // tooltip.style.scale = '0'
      tooltip?.remove()
   }
}
