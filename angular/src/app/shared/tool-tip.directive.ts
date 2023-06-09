import {
  ElementRef,
  Input,
  Directive,
  HostListener,
  inject
} from "@angular/core"

// ? In order for toolTipSide directive to work, tool-tip component must be added into the parent element with its data

@Directive({
  selector: "[toolTipSide]",
  standalone: true
})
export class ToolTipDirective {
  @Input() toolTipSide: string
  @Input() toolTipGap = "24"
  get _toolTipGap() {
    console.log("this.toolTipGap: ", this.toolTipGap)
    return parseInt(this.toolTipGap)
  }

  elementRef: ElementRef<HTMLElement> = inject(ElementRef<HTMLElement>)

  @HostListener("mouseenter") mouseEnter() {
    // const tooltip = <HTMLDivElement>document.querySelector('.directive-tool-tip')

    const tooltip = document.createElement("div")
    tooltip.className = "directive-tool-tip"
    document.body.appendChild(tooltip)

    tooltip.innerHTML =
      this.elementRef.nativeElement.querySelector("tool-tip")?.innerHTML ?? ""

    const rect = this.elementRef.nativeElement.getBoundingClientRect()
    const POSIBLE_SIDES: any = {
      right: () => {
        tooltip.style.left =
          (rect.left + rect.width + this._toolTipGap).toString() + "px"
        tooltip.style.top = (rect.top + rect.height / 2).toString() + "px"
      },
      left: () => {
        tooltip.style.left = (rect.left - this._toolTipGap).toString() + "px"
        tooltip.style.top = (rect.top + rect.height / 2).toString() + "px"
      },
      top: () => {
        tooltip.style.left = (rect.left + rect.width / 2).toString() + "px"
        tooltip.style.top = (rect.top - this._toolTipGap).toString() + "px"
      },
      bottom: () => {
        tooltip.style.left = (rect.left + rect.width / 2).toString() + "px"
        tooltip.style.top =
          (rect.top + rect.height + this._toolTipGap).toString() + "px"
      }
    }
    POSIBLE_SIDES[this.toolTipSide]()
    tooltip.className += " !scale-100 !visible"
  }

  @HostListener("mouseleave") mouseLeave() {
    const tooltip = document.querySelector(
      ".directive-tool-tip"
    ) as HTMLDivElement
    // tooltip.className = ' directive-tool-tip'
    tooltip?.remove()
  }
}
