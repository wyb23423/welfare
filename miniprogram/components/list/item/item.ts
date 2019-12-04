import { resolveTime } from '../../../utils/util';
import { request } from '../../../utils/http';

interface ListItem extends WxComponent {
    data: {
        info: IActive | ICommodity,
        hasBtn: boolean;
        isGoods: boolean;
        time: string;
        btn: string
    };
}

function parseTime(start: number, end: number) {
    const {year: sy, month: sm, day: sd} = resolveTime(start);
    const {year: ey, month: em, day: ed} = resolveTime(end);

    if(sy === ey) {
        if(sm === em && sd === ed) {
            return `${sm}/${sd}`;
        }

        return `${sm}/${sd} - ${em}/${ed}`;
    } else {
        return `${sy}/${sm}/${sd} - ${ey}/${em}/${sd}`;
    }
}

Component<ListItem>({
    options: {
        multipleSlots: true
    },
    properties: {
        info: {
            type: Object,
            value: {}
        },
        isGoods: {
            type: Number,
            value: 0
        },
        // 是否自带按钮
        hasBtn: {
            type: Boolean,
            value: false
        }
    },
    data: {
        time: '',
        btn: ''
    },
    attached(this: ListItem) {
        const {info: {size, sign, origination, finish}, hasBtn, isGoods} = this.data;

        const obj = {time: parseTime(+origination, +finish), btn: ''};
        if(hasBtn) {
            const text = parseBtnText(sign, size);
            const word = isGoods ? '兑换' : '报名';
            obj.btn = text ? word + text : '立即' + word;
        }
        this.setData(obj);
    },
    methods: {
        clickBtn() {
            const {info: {size, sign, origination, id}, isGoods} = this.data;
            if(size - sign <= 0 || Date.now() > origination) {
                return;
            }

            if(isGoods) {
                exchange(createEvent({id}));
            } else {
                wx.navigateTo({url: `/pages/sign/sign?id=${id}`});
            }
        }
    }
});

/**
 * 根据可报名/兑换剩余人数显示不同的按钮
 * @param sign 已报名/兑换人数
 * @param size 总数
 */
export function parseBtnText(sign: number, size: number) {
    const reset = size - sign;
    if(reset <= 0) {
        return '已满';
    } else if(reset <= Math.max(2, Math.round(size / 10))) {
        return '仅剩' + reset + '名';
    }

    return '';
}

/*
* 兑换商品
*/
export function exchange(this: any, e: BaseEvent<{id: number}>) {
    const id = e.target.dataset.id;
    request({ url: '/api/commodity/participation/deal/' + id })
        .then(() => wx.showToast({ title: '兑换成功' }))
        .catch(console.log);
}

export function createEvent<T extends object>(dataset: T): BaseEvent<T> {
    return {
        type: 'simulation',
        detail: {},
        target: {id: 'id', dataset},
        currentTarget: {id: 'id', dataset},
        timeStamp: Date.now(),
        mark: {}
    };
}
