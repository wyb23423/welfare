/**
 * 公益活动详情
 */
import { request } from '../../utils/http';
import { parseData, formatTime } from '../../utils/util';
import { exchange } from '../../components/list/item/item';

Page({
    isGoods: 0,
    data: {
        id: 1,
        like: 40,
        isCollected: false,
    },
    onLoad(query?: Record<'isGoods' | 'id', string>) {
        if(!query) {
            console.error('路由参数错误');
            return wx.navigateBack({delta: 1});
        }

        const isGoods = this.isGoods = +query.isGoods;
        this._init(isGoods, query.id);
        wx.setNavigationBarTitle({
            title: isGoods ? '商品详情' : '活动详情'
        });
    },
    exchange,
    collect() {
        const old = this.data.isCollected;
        request({
            url: '/api/like',
            method: old ? 'DELETE' : 'PUT',
            data: {
                targetId: this.data.id,
                type: this.isGoods
            }
        })
            .then(() => this.setData!({
                isCollected: !old,
                like: old ? this.data.like - 1 : this.data.like + 1
            }))
            .catch(console.log);
    },
    _init(isGoods: number, id: string) {
        request<IActive | ICommodity>({ url: `/api/${isGoods ? 'commodity' : 'activity'}/${id}` })
            .then(({ data }) => {
                data = parseData(data);
                this.setData!({
                    ...data,
                    startTime: formatTime(new Date(+data.origination)),
                    endTime: formatTime(new Date(+data.finish)),
                    img: data.originImg,
                    merchant: data.merchant ? parseData(data.merchant) : null,
                    isActivity: !isGoods
                });
            })
            .catch(console.log);
    }
});
