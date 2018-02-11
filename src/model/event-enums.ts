export enum DragEventType {
    START = 'drag:start',
    MOVE = 'drag:move',
    OVER = 'drag:over',
    OVER_CONTAINER = 'drag:over:container',
    OUT = 'drag:out',
    OUT_CONTAINER = 'drag:out:container',
    STOP = 'drag:stop',
    PRESSURE = 'drag:pressure'
}

export enum MirrorEventType {
    CREATED = 'mirror:created',
    ATTACHED = 'mirror:attached',
    MOVE = 'mirror:move',
    DESTROY = 'mirror:destroy'
}