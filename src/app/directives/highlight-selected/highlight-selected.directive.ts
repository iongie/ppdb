import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ppdbHighlightSelected]'
})
export class HighlightSelectedDirective {
  @Input() appHighlightSelected!: number;
  @Input() selectedIndex!: number;
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    this.updateHighlight();
  }

  private updateHighlight() {
    if (this.appHighlightSelected === this.selectedIndex) {
      this.renderer.addClass(this.el.nativeElement, 'bg-thirty-bg');
      this.renderer.addClass(this.el.nativeElement, 'text-black');
      this.renderer.removeClass(this.el.nativeElement, 'bg-primary-bg');
      this.renderer.removeClass(this.el.nativeElement, 'text-white');
    } else {
      this.renderer.addClass(this.el.nativeElement, 'bg-primary-bg');
      this.renderer.addClass(this.el.nativeElement, 'text-white');
      this.renderer.removeClass(this.el.nativeElement, 'bg-thirty-bg');
      this.renderer.removeClass(this.el.nativeElement, 'text-black');
    }
  }
}
