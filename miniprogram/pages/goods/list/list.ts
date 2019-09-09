/**
 * 兑换商品
 */
import * as listFunc from '../../../template/list_item/list_item';
import { request } from '../../../utils/http';
import { parseData } from '../../../utils/util';

Page({
    data: {
        goods: [] as ICommodity[],
        hasMore: true
    },
    // ==============================事件
    ...listFunc,
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
    getMore() {
        this._getPageData()
            .then(({ list, total }) => {
                const goods = list.concat(this.data.goods);
                this.setData!({
                    goods,
                    hasMore: total > goods.length
                });
            })
            .catch(e => console.log(e.errMsg));
    },

    // =============================生命周期
    onLoad() {
        this._getPageData()
            .then(({ list, total }) => this.setData!({ goods: list, hasMore: total > list.length }))
            .catch(e => console.log(e.errMsg));
    },

    // ====================================
    _getPageData(): Promise<{ list: ICommodity[], total: number }> {
        return Promise.resolve()
            .then(() => (
                request<PageData<ICommodity>>({
                    url: '/api/commodity/pagingQuery',
                    data: {
                        currentPage: Math.ceil(this.data.goods.length / 10) + 1,
                        pageSize: 10
                    }
                })
            ))
            .then(({ data: { list, total } }) => (
                { list: <ICommodity[]>list.map(parseData), total }
            ));
    }
});
