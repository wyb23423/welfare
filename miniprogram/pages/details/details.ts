/**
 * 公益活动详情
 */
import { request } from '../../utils/http';
import { parseData, formatTime } from '../../utils/util';
import { exchange } from '../../template/list_item/list_item';

Page({
    isGoods: 0,
    data: {
        id: 1,
        details: '123',
        integral: 21,
        credit: 0,
        name: '有爱的我们不孤独——自闭症儿童义诊系列活动',
        size: 1,
        location: '',
        startTime: formatTime(new Date()),
        endTime: formatTime(new Date(Date.now() + 1000 * 60 * 60 * 24)),
        look: 23,
        like: 40,
        img: '/public/images/23.jpg',
        isCollected: false,
        merchant: {
            name: '北京儿童医疗发展中心',
            activityCount: 12,
            fans: 52,
            img: '/public/images/23.jpg',
            detail: '北京医疗儿童发展中心的孤独症和其他障碍敢于服务，是xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            originImg: '/public/images/23.jpg',
            userId: 'fsdfsfd'
        }
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
                    merchant: data.merchant ? parseData(data.merchant) : null
                });
            })
            .catch(console.log);
    }
});
