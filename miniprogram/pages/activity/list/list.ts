/**
 * 公益活动
 */

import { ListComponent } from '../../../components/list/list';

Page({
    onReachBottom() {
        const component = <ListComponent>this.selectComponent!('#list');
        component.getMore && component.getMore();
    }
});
