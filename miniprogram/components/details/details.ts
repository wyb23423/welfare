/**
 * 公益活动详情
 */
import { request } from '../../utils/http';
import { parseData, formatTime } from '../../utils/util';
import { exchange } from '../../template/list_item/list_item';

Component({
    properties: {
        isActivity: {
            type: Boolean,
            value: true
        },
        id: {
            type: Number,
            value: 1
        }
    },
    data: {
        details: '123',
        integral: 21,
        credit: 0,
        name: '有爱的我们不孤独——自闭症儿童义诊系列活动',
        size: 1,
        location: '',
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
            originImg: '/public/images/23.jpg',
            userId: 'fsdfsfd'
        }
    },
    attached() {
        request<IActive>({ url: `/api/${this.data.isActivity ? 'activity' : 'commodity'}/${this.data.id}` })
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
    },
    methods: {
        exchange,
        collect() {
            const old = this.data.isCollected;
            request({
                url: '/api/like',
                method: old ? 'DELETE' : 'PUT',
                data: {
                    targetId: this.data.id,
                    type: +!this.data.isActivity
                }
            })
                .then(() => this.setData!({
                    isCollected: !old,
                    collect: old ? this.data.collect - 1 : this.data.collect + 1
                }))
                .catch(console.log);
        },
    }
});
