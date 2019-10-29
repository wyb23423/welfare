import { request } from '../../../utils/http';
import { parseData } from '../../../utils/util';
import { EnList } from '../../../components/enlist/enlist';
import { ActiveStatus } from '../../../constant';

type HistoryType = '_await' | '_auditing' | '_complete';

Page({
    data: {
        history: [] as Array<IActive | ICommodity>,
        type: '',
        tabType: 0,
        another: <Array<IActive | ICommodity>>[]
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
            content: this.data.type === 'collection' ? '取消收藏？' : '删除该活动？',
            success: (res) => {
                if (res.confirm) {
                    if (this.data.type === 'collection') {
                        return this._cancelCollect(index);
                    }

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
    openEnList(e: WxTouchEvent) {
        const index = +e.target.dataset.index;
        const enList = <EnList>this.selectComponent!('#en-list');

        enList.show(this.data.history[index].id);
    },
    ok(e: WxTouchEvent) {
        const index = +e.target.dataset.index;
        const history = <IActive[]>this.data.history;

        request({ url: '/api/activity/achieve/' + history[index].id })
            .then(() => {
                wx.showToast({title: '操作成功'});
                history[index].status = ActiveStatus.complete;
                this.setData!({history});
            })
            .catch(console.log);
    },
    none() {
        //
    },
    switch(e: WxTouchEvent) {
        this.data.tabType = +e.target.dataset.type;
        const another = this.data.another;
        this.data.another = this.data.history;

        if (another.length) {
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
    _initiate() {
        this._request('/api/activity/my');
    },
    _collection() {
        const tabType = this.data.tabType;
        request<ICommodity[] | IActive[]>({
            url: '/api/like',
            data: { type: tabType }
        })
            .then(({ data }) => this.setData!({
                history: (<any[]>data).map(parseData),
                type: this.data.type,
                tabType
            }))
            .catch(console.log);
    },
    _request(url: string) {
        request<IActive[]>({ url })
            .then(({ data }) => this.setData!({ type: this.data.type, history: data.map(parseData) }))
            .catch(console.log);
    }
});
