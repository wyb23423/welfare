/**
 * 公益活动
 */
import { ListComponent } from '../../../behavior/page_query';
import { request } from '../../../utils/http';
import { AD_TYPE } from '../../../constant/index';

Page({
    data: {
        ad: null
    },
    onShow() {
        request<IAD>({
            url: '/api/ad/getAd',
            data: {type: AD_TYPE.ACTIVITY},
            notShowMsg: true
        })
            .then(({data}) => this.setData!({ad: data}))
            .catch(() => this.setData!({ad: null}));
    },
    onReachBottom() {
        const component = <ListComponent>this.selectComponent!('#list');
        component.getMore && component.getMore();
    }
});
