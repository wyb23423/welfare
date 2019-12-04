import { request } from '../../../utils/http';

interface IGoodsWithOrder {
    id: number;
    img: string;
    name: string;
    sign: number;
    size: number;
    orders: IOrder[];
}

interface IOrder {
    commodityId: number;
    created: number;
    id: number;
    status: number;
    userId: string;
}

Page({
    data: {
        list: <IGoodsWithOrder[]>[],
        isShow: false,
        index: 0
    },
    close() {
        this.setData!({isShow: false});
    },
    onShow() {
        request<PageData>({url: '/api/commodity/participation/merchant/list'})
            .then(({data: {list}}) => this.setData!({list: list.map(v => {
                v.sign = v.orders.length;
                v.img += '?thumb=true';

                return v;
            })}))
            .catch(console.log);
    },
    openConfirm({target: {dataset: {index}}}: BaseEvent<{index: number}>) {
        this.setData!({ isShow: true, index});
    },
    doConfirm(e: BaseEvent<{ok?: string}, {index: number}>) {
        const flag = !!e.target.dataset.ok;
        const index = e.currentTarget.dataset.index;

        const orders = this.data.list[this.data.index].orders;

        wx.showModal({
            title: orders[index].userId,
            content: (!flag ? '拒绝' : '确认') + '订单?',
            success: ({confirm}) => confirm && this._confirm(flag, orders, index)
        });
    },
    _confirm(flag: boolean, orders: IOrder[], index: number) {
        request({
            url: '/api/commodity/participation/confirm',
            method: 'POST',
            data: {
                commodityId: orders[index].id,
                confirm: flag
            }
        })
        .then(this.callback.bind(this, orders, index))
        .catch(console.log);
    },
    callback(orders: IOrder[], index: number) {
        wx.showToast({title: '操作成功' });
        orders.splice(index, 1);

        if(!orders.length) {
            this.data.isShow = false;
            this.data.list.splice(this.data.index, 1);
        }
        this.setData!(this.data);
    }
});
