import { Component, Input, AfterViewInit, OnDestroy, ContentChildren, EventEmitter, Output } from '@angular/core';
import { Draggable } from '@shopify/draggable';
import { DraggableOptions } from "./model/draggable-options";
import { DraggableContainer } from './container/draggable-container.directive';
import { DragEventType, MirrorEventType, DraggableDragEvent, DraggableMirrorEvent } from "./model"

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

    constructor() {
        this.dragEvents = new EventEmitter();
        this.mirrorEvents = new EventEmitter();
    }

    ngAfterViewInit() {
      const containerElements = this.containers.map(container => container.element);
      this.draggable = new Draggable(containerElements, this.options);

      Object.keys(DragEventType).forEach(eventType => {
        const event = DragEventType[eventType];
        this.draggable.on(event, function(draggableEvent){
            this.dragEvents.next(new DraggableDragEvent(event, draggableEvent));
        });
      });

      Object.keys(MirrorEventType).forEach(eventType => {
        const event = MirrorEventType[eventType];
        this.draggable.on(event, function(mirrorEvent){
            this.mirrorEvents.next(new DraggableMirrorEvent(event, mirrorEvent));
        });
      });
    }

    ngOnDestroy() {
        this.draggable.destroy();
    }
}