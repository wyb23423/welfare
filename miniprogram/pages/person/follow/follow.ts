import { request } from '../../../utils/http';
import { parseData } from '../../../utils/util';

Page({
    data: {
        list: <IMerchant[]>[]
    },
    onLoad() {
        request<IMerchant[]>({ url: '/api/follow' })
            .then(({ data }) => this.setData!({ list: data.map(parseData) }))
            .catch(console.log);
    },
    delete(e: WxTouchEvent) {
        const index = e.target.dataset.index;
        const merchant = this.data.list[index];

        wx.showModal({
            content: `取消关注${merchant.name}？`,
            success: (res) => {
                if (res.confirm) {
                    request({
                        url: `/api/follow?targetId=${merchant.userId}`,
                        method: 'DELETE'
                    })
                        .then(() => {
                            wx.showToast({ title: '取消关注成功' });
                            this.data.list.splice(index, 1);
                            this.setData!(this.data);
                        })
                        .catch(console.log);
                }
            }
        });
    }
});
