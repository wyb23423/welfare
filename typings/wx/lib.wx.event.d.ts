type Target = {
    id: string;
    dataset: IAnyObject;
    [x: string]: any;
}

type WxTouch = {
    identifier: number;
    pageX: number;
    pageY: number;
    clientX: number;
    clientY: number;
}

declare interface BaseEvent {
    type: string;
    detail: IAnyObject;
    target: Target;
    currentTarget: Target;
    timeStamp: number;
    mark: IAnyObject;
}

declare interface WxTouchEvent extends BaseEvent {
    touches: WxTouch[]
}

declare interface CanvasTouch extends BaseEvent {
    identifier: number;
    currentTarget: never;
    x: number;
    y: number;
}