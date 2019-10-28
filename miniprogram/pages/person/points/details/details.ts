/**
 * 积分明细
 */
import { formatTime } from '../../../../utils/util';

interface DetailsItem {
    title: string;
    time: string;
    value: number;
}

Page({
    data: {
        list: <DetailsItem[]>[]
    },
    onLoad() {
        const now = Date.now();
        const list: DetailsItem[] = [
            {
                title: '兑换海贼周边',
                time: formatTime(new Date(now + this._getTestData())),
                value: -100
            },
            {
                title: '不良记录扣除',
                time: formatTime(new Date(now + this._getTestData())),
                value: -100
            }
        ];
        for (let i = 0; i < 3; i++) {
            list.push({
                title: '公益活动参加',
                time: formatTime(new Date(now + this._getTestData())),
                value: [100, 500, 600][i]
            });
        }
        this.setData!({ list });
    },
    _getTestData() {
        return Math.round(Math.random() * 518400000) - 259200000;
    }
});
