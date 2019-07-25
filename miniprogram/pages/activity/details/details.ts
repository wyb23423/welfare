/**
 * 公益活动详情
 */
import { formatTime } from "../../../utils/util";

Page({
    data: {
        address: '北京海淀花园北路建设智谷大厦5层',
        startTime: formatTime(new Date()),
        endTime: formatTime(new Date(Date.now() + 1000 * 60 * 60 * 24)),
        look: 23,
        collect: 40,
        title: '有爱的我们不孤独——自闭症儿童义诊系列活动',
        money: 0,
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

    // =============================生命周期
    onLoad(query: any) {
        console.log(query);
    }
    // ============================其他

})
