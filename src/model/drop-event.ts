import { DropEventType } from './event-enums';

export class DraggableDropEvent {
    constructor(public type: DropEventType, event: any) {}
}
