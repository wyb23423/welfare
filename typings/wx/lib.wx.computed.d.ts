declare module 'miniprogram-computed' {
    const computedBehavior: string;

    export = computedBehavior;
}

declare interface BaseComponent<T> {
    computed?: { [key: string]: (data: IAnyObject) => number | string | object | boolean },
    watch?: { [key: string]: (this: T, ...datas: any[]) => void }
}