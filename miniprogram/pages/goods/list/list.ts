/**
 * 兑换商品
 */
import * as listFunc from '../../../template/list_item/list_item';
import { HOST, parseData } from '../../../constant';

Page({
    data: {
        goods: [] as ICommodity[],
        hasMore: true
    },
    // ==============================事件
    ...listFunc,
    getMore() {
        this._getPageData()
            .then(({ list, total }) => {
                const goods = list.concat(this.data.goods);
                this.setData!({
                    goods,
                    hasMore: total > goods.length
                });
            })
            .catch(e => console.log(e.statusCode));
    },

    // =============================生命周期
    onLoad() {
        this._getPageData()
            .then(({ list, total }) => this.setData!({ goods: list, hasMore: total > list.length }))
            .catch(e => console.log(e.statusCode));
    },

    // ====================================
    _getPageData(): Promise<{ list: ICommodity[], total: number }> {
        return new Promise((resolve, reject) => {
            wx.request({
                url: HOST + '/api/commodity/pagingQuery',
                data: {
                    currentPage: Math.ceil(this.data.goods.length / 10) + 1,
                    pageSize: 10
                },
                success: (res) => {
                    const { data: { list, total } } = <RespoensData<PageData<ICommodity>>>res.data;
                    resolve({ list: <ICommodity[]>list.map(parseData), total });
                },
                fail: reject
            });
        });
    }
});
