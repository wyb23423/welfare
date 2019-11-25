/**
 * 公益活动
 */
import { ListComponent } from '../../../behavior/page_query';

Page({
    onReachBottom() {
        const component = <ListComponent>this.selectComponent!('#list');
        component.getMore && component.getMore();
    }
});
