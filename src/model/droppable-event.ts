import { DropEventType, DragEventType } from "./event-enums";

export class DroppableEvent {
    constructor(public type: DragEventType | DropEventType, event: any) {}
}