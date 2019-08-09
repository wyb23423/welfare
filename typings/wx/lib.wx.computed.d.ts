declare module 'miniprogram-computed' {
    const computedBehavior: string;

    export = computedBehavior;
}

declare interface BaseComponent<T, K = IAnyObject> {
    computed?: { [key: string]: (data: K) => number | string | object | boolean },
    watch?: { [key: string]: (this: T, ...datas: any[]) => void }
}