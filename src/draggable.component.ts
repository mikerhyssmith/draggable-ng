import { Component, Input, AfterViewInit, OnDestroy, ContentChildren, EventEmitter, Output } from '@angular/core';
import { Draggable } from '@shopify/draggable';
import { DraggableOptions } from "./model/draggable-options";
import { DraggableContainer } from './container/draggable-container.directive';

@Component({
    selector: 'draggable',
    template: '<ng-content></ng-content>'
})

export class DraggableComponent implements AfterViewInit, OnDestroy {
    
    @ContentChildren(DraggableContainer) containers: Array<DraggableContainer>
    @Input() options: DraggableOptions;
    @Output() dragEvents: EventEmitter<DraggableDragEvent>
    @Output() mirrorEvents: EventEmitter<DraggableMirrorEvent>
    private draggable: Draggable;

    constructor() {}

    ngAfterViewInit() {
      const containerElements = this.containers.map(container => container.element);
      this.draggable = new Draggable(containerElements, this.options);
    }

    ngOnDestroy() {
        this.draggable.destroy();
    }
}