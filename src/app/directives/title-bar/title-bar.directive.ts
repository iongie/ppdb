import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ppdbTitleBar]'
})
export class TitleBarDirective implements OnInit {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.renderer.addClass(this.el.nativeElement, 'fixed');
  }
  
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e: Event) {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 40) {
      this.renderer.addClass(this.el.nativeElement, 'hidden');
      this.renderer.removeClass(this.el.nativeElement, 'none');
    } else {
      this.renderer.addClass(this.el.nativeElement, 'none');
      this.renderer.removeClass(this.el.nativeElement, 'hidden');
    }
  }
}
