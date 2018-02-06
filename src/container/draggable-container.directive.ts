import { Directive, ElementRef } from '@angular/core';

@Directive({ selector: '[draggable-container]' })
export class DraggableContainer {

    constructor(private  el: ElementRef) { }

    public get element() {
        return this.el.nativeElement;
    }
}