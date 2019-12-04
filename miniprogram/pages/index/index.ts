/**
 * 首页
 */
import * as listFunc from '../../template/list_item/list_item';
import { request } from '../../utils/http';
import { parseData } from '../../utils/util';

Page({
    data: {
        activity: [] as IActive[],
        goods: [] as ICommodity[],
        ad: []
    },
    // ==============================事件
    collect(e: WxTouchEvent) {
        listFunc.collect(e)
        .then(({ id, collect }) => {
            const index = this.data.goods.findIndex(v => v.id === id);
            if (index > -1) {
                this.setData!({ [`goods[${index}].isCollected`]: !collect });
            }
        })
        .catch(console.log);
    },
    // =============================生命周期
    onShow() {
        request<PageData<IActive>>({
            url: '/api/activity/pagingQuery',
            data: {
                currentPage: 1,
                pageSize: 10
            }
        })
        .then(({ data: { list } }) => this.setData!({ activity: list.map(parseData) }))
        .catch(console.log);

        request<PageData<ICommodity>>({
            url: '/api/commodity/pagingQuery',
            data: {
                currentPage: 1,
                pageSize: 10
            }
        })
        .then(({ data: { list } }) => this.setData!({ goods: list.map(parseData) }))
        .catch(console.log);
    },

  // =============================================
});
