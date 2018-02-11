import { Component, OnInit, AfterViewInit, OnDestroy, ContentChildren, Input, Output, EventEmitter } from '@angular/core';
import { Droppable } from '@shopify/draggable';
import { DroppableEvent } from './model/droppable-event';
import { DraggableContainer } from './container/draggable-container.directive';
import { DraggableOptions, DraggableMirrorEvent, DraggableDragEvent,
    MirrorEventType, DragEventType, DraggableDropEvent, DropEventType } from './model';

@Component({
    selector: 'droppable',
    template: '<ng-content></ng-content>'
})

export class DroppableComponent implements AfterViewInit, OnDestroy {
    @ContentChildren(DraggableContainer) containers: Array<DraggableContainer>
    @Input() options: DraggableOptions;
    @Output() onDragEvent: EventEmitter<DraggableDragEvent>
    @Output() onDropEvent: EventEmitter<DraggableDropEvent>
    @Output() onMirrorEvent: EventEmitter<DraggableMirrorEvent>
    private droppable: Droppable;

    constructor() {
        this.onDragEvent = new EventEmitter();
        this.onMirrorEvent = new EventEmitter();
        this.onDropEvent = new EventEmitter();
    }

    ngAfterViewInit() {
      const containerElements = this.containers.map(container => container.element);
      this.droppable = new Droppable(containerElements, this.options);

      Object.keys(DragEventType).forEach(eventType => {
        const event = DragEventType[eventType];
        this.droppable.on(event, (draggableEvent) => {
            this.onDragEvent.emit(new DraggableDragEvent(event, draggableEvent));
        });
      });

      Object.keys(MirrorEventType).forEach(eventType => {
        const event = MirrorEventType[eventType];
        this.droppable.on(event, (mirrorEvent) => {
            this.onMirrorEvent.emit(new DraggableMirrorEvent(event, mirrorEvent));
        });
      });

      Object.keys(DropEventType).forEach(eventType => {
        const event = DropEventType[eventType];
        this.droppable.on(event, (dropEvent) => {
            this.onDropEvent.emit(new DraggableDropEvent(event, dropEvent));
        });
      });
    }

    ngOnDestroy() {
        this.droppable.destroy();
    }
}
