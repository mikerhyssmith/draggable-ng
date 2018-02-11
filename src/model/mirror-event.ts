import { MirrorEventType } from "./event-enums";

export class DraggableMirrorEvent {
    constructor(public type: MirrorEventType, public event: any) {}
}