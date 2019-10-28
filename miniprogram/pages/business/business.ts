/**
 * 商家信息
 */
import { request } from '../../utils/http';
import { USER_NAME } from '../../constant/store';

Page({
    data: {
        img: '/public/images/23.jpg',
        details: 'this is details '.repeat(20).trim(),
        name: 'this is name',
        fans: 10,
        activityCount: 10,
        isCollected: false,
        userId: '',
        disabled: false
    },
    onLoad(query?: IAnyObject) {
        query = query || {};
        console.log(query);
        this.setData!({
            ...query,
            disabled: query.userId === wx.getStorageSync(USER_NAME),
            isCollected: !!+query.isCollected
        });
    },
    collect() {
        const collect = this.data.isCollected;
        request({
            url: `/api/follow?targetId=${this.data.userId}`,
            method: collect ? 'DELETE' : 'PUT'
        })
            .then(() => this.setData!({
                isCollected: !collect,
                fans: collect ? this.data.fans - 1 : this.data.fans + 1
            }))
            .catch(console.log);
    }
});
