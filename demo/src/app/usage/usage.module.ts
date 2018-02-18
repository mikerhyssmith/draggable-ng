import { NgModule } from '@angular/core';
import { DraggableModule } from 'draggable-ng/dist/draggable.module';
import { UsageComponent } from './usage.component';
@NgModule({
    imports: [DraggableModule],
    exports: [UsageComponent],
    declarations: [UsageComponent],
    providers: [],
})
export class UsageModule { }
