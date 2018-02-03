export class DraggableOptions {
    constructor(private draggable?: string,
                private handle?: string, 
                private delay?: number, 
                private plugins?: Array<any>,
                private sensors?: Array<any>,
                private appendTo?: string | HTMLElement | Function,
                private classes?: any) {}
}