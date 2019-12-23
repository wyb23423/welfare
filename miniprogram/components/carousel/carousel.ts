/**
 * 轮播
 */

interface Carousel extends WxComponent {
    data: {
        label: Array<1>; // 创建标记的数组
        index: number; // 当前显示组件索引

        items: WxComponent[]; // 滚动组件
        timer: number; // 定时器id
        sx: number; // touchStart 的x坐标
        ex: number; // touchEnd 时的x坐标
        isMoving: boolean;

        interval: number; // 定时器调用间隔
        initial: number; // 初始显示的组件索引
    };
    setActiveItem(nameOrIndex: string | number): Carousel;
    prev(): Carousel;
    next(): Carousel;

    _getIndex(nameOrIndex: string | number): number | void;
    _loop(): Carousel;
    _clearTimer(): Carousel;
}

Component<Carousel>({
    properties: {
        height: {
            type: String,
            value: '60vw'
        },
        initial: {
            type: Number,
            value: 0
        },
        interval: {
            type: Number,
            value: 3000
        }
    },
    data: {
        items: [],
        index: -1,
        label: [],
        sx: 0,
        ex: 0,
        isMoving: false,
        timer: 0
    },
    relations: {
        './item/item': {
            type: 'child',
            linked(this: Carousel, target: WxComponent) {
                this._clearTimer();

                const {items, initial, index, label} = this.data;
                items.push(target);
                label.push(1);

                this.data.timer = setTimeout(() => {
                    const active = index < 0 ? (initial > items.length - 1 ? 0 : Math.max(0, initial)) : index;
                    this.setActiveItem(active)._loop().setData({label});
                });
            }
        }
    },
    detached(this: Carousel) {
        this._clearTimer();
    },
    methods: {
        touchStart({touches: [{pageX}]}: WxTouchEvent) {
            this.data.sx = pageX;
        },
        touchMove({touches: [{pageX}]}: WxTouchEvent) {
            this.data.ex = pageX;
        },
        touchEnd() {
            const {sx, ex, items: {length}, isMoving} = this.data;

            // 项目数不大于2, 手动滚动没什么太大必要，不处理
            if(length <= 2 || isMoving) {
                return;
            }

            if(sx < ex - 50) {
                this.prev();
            } else if(sx > ex + 50) {
                this.next();
            }
        },
        setActiveItem(nameOrIndex: string | number) {
            const {items, index: preIndex} = this.data;

            // 小于两项不需要滚动
            if(items.length <= 1) {
                preIndex !== 0 && this.setData({index: 0});
                return this;
            }

            const index = this._getIndex(nameOrIndex);
            if(index == null) {
                return console.warn(
                    `未找到${
                        typeof nameOrIndex === 'number' ? '索引' : 'name'
                    }为${nameOrIndex}的轮播组件`
                );
            }

            this.setData({index});
            const offset = Math.floor(items.length / 2);
            let arr = [...items.slice(index), ...items.slice(0, index)];
            arr = [...arr.slice(-offset), ...arr.slice(0, arr.length - offset)];

            // 设置滚动动画结束回调
            // 500: 滚动动画的时间
            setTimeout(() => {
                this.data.isMoving = false;
                arr.length <= 2 && arr[0].setData({translate: '100%'});
            }, 500);

            arr.forEach((v, i) => v.setData({translate: `${(i - offset) * 100}%`}) );
            this.data.isMoving = true; // 滚动动画中手动滚动无效

            return this;
        },
        prev() {
            const {items, index} = this.data;
            this._clearTimer().setActiveItem(index <= 0 ? items.length - 1 : index - 1)._loop();

            return this;
        },
        next() {
            const {items, index} = this.data;
            this._clearTimer().setActiveItem(index >= items.length - 1 ? 0 : index + 1)._loop();

            return this;
        },
        _getIndex(nameOrIndex: string | number) {
            const items = this.data.items;
            if(typeof nameOrIndex === 'number') {
                if(nameOrIndex >= 0 && nameOrIndex <= items.length - 1) {
                    return nameOrIndex;
                }
            } else {
                const index = items.findIndex(v => v.data.name === nameOrIndex);
                if(index > -1) {
                    return index;
                }
            }

            return void 0;
        },
        _loop() {
            const interval = this.data.interval;
            interval > 100 && (this.data.timer = setTimeout(this.next.bind(this), this.data.interval + 500));

            return this;
        },
        _clearTimer() {
            const {timer} = this.data;
            if(timer) {
                clearTimeout(timer);
                this.data.timer = 0;
            }

            return this;
        }
    }
});
