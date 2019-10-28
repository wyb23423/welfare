import { request } from '../../utils/http';

interface EnInfo {
    name: string;
    phone: string;
    userId: string;
}

export interface EnList extends WxComponent {
    data: {
        isShow: boolean;
        list: EnInfo[],
        activityId: number
    };
    show(activityId: number): void;
    close(): void;
    _doAuit(flag: boolean, index: number): void;
}

Component<EnList>({
    data: {
        list: [],
        isShow: false,
        activityId: 0
    },
    methods: {
        close() {
            this.triggerEvent('close', {}, {});
            this.setData({isShow: false});
        },
        show(activityId: number) {
            const data = {isShow: true, activityId, list: <EnInfo[]>[]};

            request<EnInfo[]>({
                url: '/api/activity/auditList',
                data: { activityId }
            })
            .then(({data: list}) => data.list = list)
            .catch(console.log)
            .finally(() => this.setData(data));
        },
        doAuit(e: BaseEvent<{ok?: string}, {index: number}>) {
            const flag = !!e.target.dataset.ok;
            const index = e.currentTarget.dataset.index;

            wx.showModal({
                title: this.data.list[index].name,
                content: (!flag ? '拒绝' : '同意') + '该用户参加该活动?',
                success: ({confirm}) => confirm && this._doAuit(flag, index)
            });
        },
        _doAuit(flag: boolean, index: number) {
            const list = this.data.list;

            request({
                url: '/api/activity/audit',
                data: {
                    flag,
                    activityId: this.data.activityId,
                    userId: list[index].userId
                }
            })
            .then(() => {
                wx.showToast({title: '操作成功' });
                list.splice(index, 1);
                this.setData({list});
            })
            .catch(console.log);
        }
    },
});
