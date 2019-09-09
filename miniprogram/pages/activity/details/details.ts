/**
 * 公益活动详情
 */
import { formatTime, parseData } from '../../../utils/util';
import { request } from '../../../utils/http';

Page({
    data: {
        details: '123',
        id: 1,
        integral: 21,
        location: '北京海淀花园北路建设智谷大厦5层',
        name: '有爱的我们不孤独——自闭症儿童义诊系列活动',
        size: 1,
        intro: '',
        startTime: formatTime(new Date()),
        endTime: formatTime(new Date(Date.now() + 1000 * 60 * 60 * 24)),
        look: 23,
        collect: 40,
        img: '/public/images/23.jpg',
        isCollected: false,
        user: {
            name: '北京儿童医疗发展中心',
            authentication: true,
            activityCount: 12,
            fans: 52,
            img: '/public/images/23.jpg',
            desc: '北京医疗儿童发展中心的孤独症和其他障碍敢于服务，是xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
        }
    },
    // ==============================事件
    collect() {
        request({
            url: '/api/like',
            method: this.data.isCollected ? 'DELETE' : 'PUT',
            data: {
                targetId: this.data.id,
                type: 0
            }
        })
            .then(() => this.setData!({ isCollected: !this.data.isCollected }))
            .catch(console.log);
    },
    // =============================生命周期
    onLoad(query: any) {
        request<IActive>({
            url: '/api/activity/' + query.id,
            data: {
                currentPage: 1,
                pageSize: 2
            }
        })
            .then(({ data }) => {
                data = <IActive>parseData(data);
                this.setData!({
                    ...data,
                    startTime: formatTime(new Date(data.origination)),
                    endTime: formatTime(new Date(data.finish)),
                    img: data.originImg
                });
            })
            .catch(console.log);
    }
    // ============================其他

});
