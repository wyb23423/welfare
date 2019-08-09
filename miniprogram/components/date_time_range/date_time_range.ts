/**
 * 日期时间范围选择器
 */
import { getLayoutData, calcSelIndex, formatTime } from './util';

interface IRangeData {
    value: number[];
    visible: boolean;
    layout: string;
    layoutData: string[][];
    px2rpxRatio: number;
    timer: number | null;
    selectedIndex: number[];
    scrollTop: number[],
    setTop: boolean;
    progress: number;
}

interface IRange extends WxComponent {
    data: IRangeData;
    switchPicker(): void;
    ok(): void;
}

Component<IRange, IRangeData>({
    properties: {
        value: {
            type: Array,
            value: []
        },
        layout: {
            type: String,
            value: 'year, month, day, hours, minutes'
        },
        // 选中的索引
        selectedIndex: {
            type: Array,
            value: [0, 0, 0, 0, 0, 0]
        }
    },
    data: {
        visible: false,
        progress: 0,
        scrollTop: [], // 滚动高度
        px2rpxRatio: 2, // 1px/1rpx
        timer: null,
        setTop: false, // 是否是由于设置滚动值引发的滚动
        date: [],
        layoutData: []
    },
    attached() {
        this.setData({ progress: 0 });
        wx.getSystemInfo({ success: res => this.data.px2rpxRatio = 750 / res.windowWidth });
    },
    methods: {
        switchPicker() {
            this.setData({
                visible: !this.data.visible,
                progress: 0
            });
        },
        none() {
            //
        },
        go() {
            if (!this.data.progress) {
                this.ok();
            } else {
                this.setData({ progress: 0 });
            }
        },
        ok() {
            const date = new Date();
            this.data.layoutData.forEach((v, i) => {
                const selected = v[this.data.selectedIndex[i]];
                const [, num, unit] = <string[]>selected.match(/(\d+)([^\d]){1}/);

                switch (unit) {
                    case '年': date.setFullYear(+num); break;
                    case '月': date.setMonth(+num - 1); break;
                    case '日': date.setDate(+num); break;
                    case '时': date.setHours(+num); break;
                    case '分': date.setMinutes(+num); break;
                    case '秒': date.setSeconds(+num); break;
                    default:
                }
            });

            let value = this.data.value;
            value[this.data.progress] = date.getTime();
            this.data.value = value = value.filter(v => !!v).sort((a, b) => a - b);

            if (this.data.progress) {
                this.switchPicker();
            } else {
                this.setData({ progress: 1 });
            }

            this.triggerEvent('input', value, {});
        },
        scroll(e: BaseEvent): false | void {
            if (this.data.setTop) {
                return this.data.setTop = false;;
            }

            const itemIndex = e.target.dataset.index;
            const index = Math.round(e.detail.scrollTop / 64 * this.data.px2rpxRatio);
            this.setData({
                [`selectedIndex[${itemIndex}]`]: index
            });
        },
        setScrollIndex(e: BaseEvent) {
            const itemIndex = e.target.dataset.index;
            if (itemIndex != null) {
                const index = e.currentTarget.dataset.index;
                this.setData({
                    [`selectedIndex[${index}]`]: itemIndex
                });
            }
        }
    },
    observers: {
        'selectedIndex.**': function (val: number[]) {
            if (this.data.timer) {
                clearTimeout(this.data.timer);
                this.data.timer = null;
            }

            this.data.timer = setTimeout(() => {
                this.data.setTop = true;
                this.setData({ scrollTop: val.map(v => v * 64) });
            }, 100);
        },
        'value.**, progress, layout': function (value: number[], progress: number, layout: string) {
            value = value.filter(v => !!v);
            while (value.length < 2) {
                value.push(Date.now());
            }
            this.data.value = value = value.sort((a, b) => a - b);

            const date = value.map(v => formatTime(layout, v));
            const layoutData = getLayoutData(layout, value[progress]);

            this.setData({
                date, layoutData,
                selectedIndex: calcSelIndex(layoutData, this.data.value[this.data.progress])
            });
        }
    }
});
