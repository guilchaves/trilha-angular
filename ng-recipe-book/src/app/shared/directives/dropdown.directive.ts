import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core'

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open')
  isOpen: boolean = false

  @HostListener('document:click', ['$event'])
  onToggle(event: Event) {
    const ref = this.elementRef.nativeElement.contains(event.target)
    this.isOpen = ref ? !this.isOpen : false
  }

  constructor(private elementRef: ElementRef) {}
}
