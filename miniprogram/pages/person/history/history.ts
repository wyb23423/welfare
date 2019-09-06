import { request } from '../../../utils/http';
import { parseData } from '../../../utils/util';

type HistoryType = '_await' | '_auditing' | '_complete';

Page({
    data: {
        history: [] as IActive[],
        type: ''
    },
    onLoad(query: IAnyObject) {
        this.data.type = query.type;

        const type = <HistoryType>`_${query.type}`;
        this[type] && this[type]();

        const titles: any = {
            await: '待参加',
            auditing: '待审核',
            complete: '已参加',
            evaluate: '待评价',
            initiate: '我的发起',
            collection: '我的收藏'
        };
        wx.setNavigationBarTitle({
            title: titles[query.type]
        });
    },
    delete(e: WxTouchEvent) {
        const index = +e.target.dataset.index;
        const history = this.data.history;

        wx.showModal({
            content: '删除该活动？',
            success: (res) => {
                if (res.confirm) {
                    request({
                        url: '/api/activity',
                        method: 'DELETE',
                        data: { activityId: history[index].id }
                    })
                        .then(() => {
                            wx.showToast({ title: '删除成功' });
                            history.splice(index, 1);
                            this.setData!({ history });
                        })
                        .catch(console.log);
                }
            }
        });
    },
    none() {
        //
    },

    // ==================================
    _await() {
        this._request('/api/activity/participation/list/await');
    },
    _auditing() {
        this._request('/api/activity/participation/list/auditing');
    },
    _complete() {
        this._request('/api/activity/participation/list/complete');
    },
    _evaluate() {
        this._request('/api/activity/participation/list/evaluate');
    },
    _request(url: string) {
        request<IActive[]>({ url })
            .then(({ data }) => this.setData!({ type: this.data.type, history: data.map(parseData) }))
            .catch(console.log);
    }
});
