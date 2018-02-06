import { NgModule } from '@angular/core';
import { DraggableComponent } from './draggable.component';
import { DraggableContainer } from './container/draggable-container.directive';

@NgModule({
    imports: [],
    exports: [DraggableComponent, DraggableContainer],
    declarations: [DraggableComponent, DraggableContainer],
    providers: [],
})
export class DraggableModule { }
