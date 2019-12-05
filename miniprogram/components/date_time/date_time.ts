/**
 * 日期时间选择器
 */

import { getLayoutData, calcSelIndex, formatTime } from './util';

interface IDateTimeData {
    value: number;
    layout: string;
    range: string[][];
    timeStr: string;
    selected: number[];
}

interface DateTime extends WxComponent {
    data: IDateTimeData;
}

Component<DateTime>({
    properties: {
        value: {
            type: Number,
            value: -1
        },
        layout: {
            type: String,
            value: 'year, month, day, hours, minutes'
        },
    },
    data: {
        range: [],
        selected: [0, 0, 0, 0, 0, 0],
        timeStr: ''
    },
    ready() {
        const value = this.data.value;
        if(value == null || value < 0) {
            const now = Date.now();
            this.triggerEvent('input', {value: now}, {});
        }
    },
    methods: {
        onChange({detail: {value}}: BaseEvent) {
            const {range, layout} = this.data;

            const date = new Date();
            range.forEach((v, i) => {
                const selected = v[value[i]];
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
            const time = date.getTime();
            this.setData({timeStr: formatTime(layout, time)});

            this.triggerEvent('input', { value: time }, {});
        }
    },
    observers: {
        value(time: number) {
            if(time < 0) {
                return;
            }

            const layout = this.data.layout;
            const range = getLayoutData(layout, time);

            this.setData({
                range,
                selected: calcSelIndex(range, time),
                timeStr: formatTime(layout, time)
            });
        }
    }
});
