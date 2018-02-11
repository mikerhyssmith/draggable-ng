import { NgModule } from '@angular/core';
import { DraggableComponent } from './draggable.component';
import { DroppableComponent } from './droppable.component';
import { DraggableContainer } from './container/draggable-container.directive';

@NgModule({
    imports: [],
    exports: [DraggableComponent, DraggableContainer, DroppableComponent],
    declarations: [DraggableComponent, DraggableContainer, DroppableComponent],
    providers: [],
})
export class DraggableModule { }
