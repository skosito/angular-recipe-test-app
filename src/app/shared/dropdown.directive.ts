import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';
import { callLifecycleHooksChildrenFirst } from '@angular/core/src/view/provider';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;

    @HostListener('click') click() {
        this.isOpen = !this.isOpen;
    }
}
