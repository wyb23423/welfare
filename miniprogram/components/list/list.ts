/**
 * 活动/商品列表
 */

import * as listFunc from '../../template/list_item/list_item';
import PageQuery, { ListComponent } from '../../behavior/page_query';

Component<ListComponent>({
    behaviors: [PageQuery],
    properties: {
        isGoods: {
            type: Number,
            value: 0
        }
    },
    pageLifetimes: {
        show(this: ListComponent) {
            this.setData({url: `/api/${this.data.isGoods ? 'commodity' : 'activity' }/pagingQuery`});
            this.onShow();
        }
    },
    methods: {
        ...listFunc,
        search(e: IAnyObject) {
            console.log(e.detail.value);
        }
    }
});
