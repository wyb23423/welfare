/**
 * 商家信息
 */
import { request } from '../../utils/http';
import { USER_NAME } from '../../constant/store';
import { parseData } from '../../utils/util';

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
    onLoad(query: {userId: string}) {
        request<IMerchant>({
            url: '/api/merchant/getByUserId',
            data: {userId: query.userId}
        })
            .then(({data}) => {
                data = parseData(data);
                this.setData!({...data, disabled: query.userId === wx.getStorageSync(USER_NAME)});
            })
            .catch(console.log);
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
