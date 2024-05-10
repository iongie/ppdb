import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ppdbSidebarDropdown]'
})
export class SidebarDropdownDirective {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('click') onClick() {
    // Mendapatkan semua elemen accordion
    const sidebarDropdownElements = document.querySelectorAll('[id^=sidebar-dropdown-body]');

    // Menyembunyikan semua elemen accordion
    sidebarDropdownElements.forEach(element => {
      this.renderer.addClass(element, 'hidden');
    });
    const sidebarDropdownBody = this.el.nativeElement.nextElementSibling;

    // Toggle class 'hidden' pada elemen yang terkait
    if (sidebarDropdownBody) {
      const isHidden = sidebarDropdownBody.classList.contains('hidden');
      if (isHidden) {
        this.renderer.removeClass(sidebarDropdownBody, 'hidden');
      } else {
        this.renderer.addClass(sidebarDropdownBody, 'hidden');
      }
    }

    const sideBarButton = document.querySelectorAll('[id^=sidebar-dropdown-button] button');

    // Menyembunyikan semua tombol
    sideBarButton.forEach(button => {
      // Membersihkan semua kelas sebelum menambahkan yang baru
      this.renderer.removeClass(button, 'bg-primary-main');
      this.renderer.removeClass(button, 'text-primary-1');

      if (button !== this.el.nativeElement) {
        this.renderer.addClass(button, 'text-gray-500');
      }
    });

    const button = this.el.nativeElement.querySelector('button');
    if (button) {
      this.renderer.removeClass(button, 'text-gray-500');
      this.renderer.addClass(button, 'bg-primary-main');
      this.renderer.addClass(button, 'text-primary-1');
    }
  }
}
