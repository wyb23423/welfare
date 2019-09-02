/**
 * 公益活动
 */
import * as listFunc from '../../../template/list_item/list_item';
import { HOST, parseData } from '../../../constant';

Page({
    data: {
        activitys: [] as IActive[],
        defaultList: <IActive[]>[],
        hasMore: true
    },
    // ==============================事件
    ...listFunc,
    getMore() {
        this._getPageData()
            .then(({ list, total }) => {
                const activitys = list.concat(this.data.activitys);
                this.setData!({
                    activitys,
                    hasMore: total > activitys.length
                });
            })
            .catch(e => console.log(e.statusCode));
    },
    search(e: IAnyObject) {
        console.log(e.detail.value);
    },

    // =============================生命周期
    onLoad() {
        this._getPageData()
            .then(({ list, total }) => this.setData!({ activitys: list, hasMore: total > list.length }))
            .catch(e => console.log(e.statusCode));
    },
    // =====================================
    _getPageData(): Promise<{ list: IActive[], total: number }> {
        return new Promise((resolve, reject) => {
            wx.request({
                url: HOST + '/api/activity/pagingQuery',
                data: {
                    currentPage: Math.ceil(this.data.activitys.length / 10) + 1,
                    pageSize: 10
                },
                success: (res) => {
                    const { data: { list, total } } = <RespoensData<PageData<IActive>>>res.data;
                    resolve({ list: <IActive[]>list.map(parseData), total });
                },
                fail: reject
            });
        });
    }
});
