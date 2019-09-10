/**
 * 公益活动详情
 */
import { formatTime, parseData } from '../../../utils/util';
import { request } from '../../../utils/http';
import { exchange } from '../../../template/list_item/list_item';

Page({
    data: {
        details: '123',
        id: 1,
        integral: 21,
        credit: 0,
        name: '有爱的我们不孤独——自闭症儿童义诊系列活动',
        size: 1,
        startTime: formatTime(new Date()),
        endTime: formatTime(new Date(Date.now() + 1000 * 60 * 60 * 24)),
        look: 23,
        collect: 40,
        img: '/public/images/23.jpg',
        isCollected: false,
        merchant: {
            name: '北京儿童医疗发展中心',
            activityCount: 12,
            fans: 52,
            img: '/public/images/23.jpg',
            detail: '北京医疗儿童发展中心的孤独症和其他障碍敢于服务，是xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            id: 1,
            originImg: '/public/images/23.jpg',
            userId: 'fsdfsfd'
        }
    },
    // ==============================事件
    exchange,
    collect() {
        const old = this.data.isCollected;
        request({
            url: '/api/like',
            method: old ? 'DELETE' : 'PUT',
            data: {
                targetId: this.data.id,
                type: 0
            }
        })
            .then(() => this.setData!({
                isCollected: !old,
                collect: old ? this.data.collect - 1 : this.data.collect + 1
            }))
            .catch(console.log);
    },
    // =============================生命周期
    onLoad(query: any) {
        request<IActive>({ url: '/api/commodity/' + query.id })
            .then(({ data }) => {
                data = <IActive>parseData(data);
                this.setData!({
                    ...data,
                    startTime: formatTime(new Date(+data.origination)),
                    endTime: formatTime(new Date(+data.finish)),
                    img: data.originImg,
                    merchant: parseData(data.merchant)
                });
            })
            .catch(console.log);
    }
    // ============================其他

});
