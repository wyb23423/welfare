import { request } from '../../../utils/http';
import { IMyApp } from '../../../app';
import { parseData } from '../../../constant';

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
            toEvaluate: '待评价',
            initiate: '我的发起',
            collection: '我的收藏'
        };
        wx.setNavigationBarTitle({
            title: titles[query.type]
        });
    },
    delete(e: WxTouchEvent) {
        const id = +e.target.dataset.id;
        wx.showModal({
            content: '删除该活动？',
            success(res) {
                if (res.confirm) {
                    console.log(id);
                }
            }
        });
    },
    none() {
        //
    },

    // ==================================
    _await() {
        this._request('/api/participation/await');
    },
    _auditing() {
        this._request('/api/participation/auditing');
    },
    _complete() {
        this._request('/api/participation/complete');
    },
    _request(url: string) {
        request<IActive[]>({
            url,
            data: { userId: (<IMyApp>getApp()).globalData.userId }
        })
            .then(({ data }) => this.setData!({ type: this.data.type, history: data.map(parseData) }))
            .catch(console.log);
    }
});
