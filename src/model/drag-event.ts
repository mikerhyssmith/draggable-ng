import { DragEventType } from './event-enums';

export class DraggableDragEvent {
    constructor(public type: DragEventType, public event: any) {}
}
