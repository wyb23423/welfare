/**
 * 兑换商品
 */
import { ListComponent } from '../../../components/list/list';

Page({
    onReachBottom() {
        const { getMore } = <ListComponent>this.selectComponent!('#list');
        getMore && getMore();
    }
});
