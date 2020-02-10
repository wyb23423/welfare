import { request } from '../../../utils/http';
import { EnInfo } from '../../person/activity/sign/sign';
import { parseData } from '../../../utils/util';

interface Activitystatistics extends IActive {
    participators: EnInfo[];
}

Page({
    data: {
        count: {
            activity: 0,
            join: 0
        },
        activityList: <Activitystatistics[]>[],
        peopleList: [],
        start: Date.now(),
        end: Date.now(),
        hasData: false
    },
    onLoad() {
        request<EnInfo[]>({ url: '/api/activity/participation/volunteer'})
            .then(({data}) => this.setData!({peopleList: data}))
            .catch(console.error);
    },
    onInput({target: {id}, detail: {value}}: BaseEvent) {
        this.setData!({[id]: value});
    },
    statistics() {
        const {end, start} = this.data;
        if(end < start) {
            return wx.showToast({title: '开始时间不能大于结束时间', icon: 'none'});
        }

        request<Activitystatistics[]>({
            url: '/api/activity/statisticsTimeBucket',
            data: { start, end }
        })
        .then(({data}) => {
            const joinSet = new Set();
            data = data.map(v => {
                v.participators.forEach(p => joinSet.add(p.userId));
                return parseData(v);
            });
            this.setData!({
                count: {
                    join: joinSet.size,
                    activity: data.length
                },
                activityList: data,
                hasData: true
            });
        })
        .catch(console.error);
    },
    paint() {
        console.log('paint');
    }
});
