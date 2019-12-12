import { request } from '../../../utils/http';
import { parseData } from '../../../utils/util';

type HistoryType = '_await' | '_auditing' | '_complete' | '_evaluate' | '_collection';

Page({
    activity: <IActive[] | null>null,
    goods: <ICommodity[] | null>null,
    data: {
        history: [] as Array<IActive | ICommodity>,
        type: '',
        tabType: 0
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
            collection: '我的收藏'
        };
        wx.setNavigationBarTitle({
            title: titles[query.type]
        });
    },
    delete(e: WxTouchEvent) {
        const index = +e.target.dataset.index;
        const {history, type} = this.data;

        const isCollection = type === 'collection';

        wx.showModal({
            content: isCollection ? '取消收藏？' : '删除该活动记录？',
            success: (res) => {
                if (res.confirm) {
                    if (isCollection) {
                        return this._cancelCollect(index);
                    }

                    request({
                        url: '/api/activity/participation',
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
    switch(e: WxTouchEvent) {
        const type = +e.target.dataset.type;
        this.data.tabType = type;
        const another = type ? this.goods : this.activity;

        if (another) {
            this.data.history = another;
            return this.setData!(this.data);
        }

        this._collection();
    },
    // ==================================
    _cancelCollect(index: number) {
        const history = this.data.history;

        request({
            url: '/api/like',
            method: 'DELETE',
            data: {
                targetId: history[index].id,
                type: this.data.tabType
            }
        })
            .then(() => {
                wx.showToast({ title: '取消搜藏成功' });
                history.splice(index, 1);
                this.setData!({ history });
            })
            .catch(console.log);
    },
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
    _collection() {
        const tabType = this.data.tabType;
        request<ICommodity[] | IActive[]>({
            url: '/api/like',
            data: { type: tabType }
        })
            .then(({ data }) => {
                const list = (<any[]>data).map(parseData);
                this[tabType ? 'goods' : 'activity'] = list;
                this.setData!({
                    history: list,
                    type: this.data.type,
                    tabType
                });
            })
            .catch(console.log);
    },
    _request(url: string) {
        request<IActive[]>({ url })
            .then(({ data }) => this.setData!({ type: this.data.type, history: data.map(parseData) }))
            .catch(console.log);
    }
});
