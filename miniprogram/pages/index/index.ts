/**
 * 首页
 */
import { request } from '../../utils/http';
import { parseData } from '../../utils/util';

Page({
    data: {
        activity: [] as IActive[],
        goods: [] as ICommodity[],
        ad: []
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
