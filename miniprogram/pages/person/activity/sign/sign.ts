import { SIGN_STATUS } from '../../../../constant/status';
import { request } from '../../../../utils/http';

interface EnInfo {
    name: string;
    phone: string;
    userId: string;
    status: SIGN_STATUS;
}

Page({
    id: 0,
    data: {
        auditing: <EnInfo[]>[], // 待审核
        handled: <EnInfo[]>[], // 已处理
        STATUS: {
            AUDITING: SIGN_STATUS.AUDITING,
            AWAIT: SIGN_STATUS.AWAIT,
            REFUSE: SIGN_STATUS.REFUSE
        }
    },
    onLoad(query: {id: string}) {
        const activityId = this.id = +query.id;
        request<EnInfo[]>({
            url: '/api/activity/participation/auditList',
            data: { activityId }
        })
            .then(({data: list}) => {
                const auditing: EnInfo[] = [];
                const handled: EnInfo[] = [];

                list.forEach(v => {
                    if(v.status === SIGN_STATUS.AUDITING) {
                        auditing.push(v);
                    } else {
                        handled.push(v);
                    }
                });

                this.setData!({handled, auditing});
            })
            .catch(console.log);
    },
    doAuit(e: BaseEvent<{ok?: string}, {index: number}>) {
        const isOk = !!e.target.dataset.ok;
        const index = e.currentTarget.dataset.index;

        wx.showModal({
            title: this.data.auditing[index].name,
            content: (!isOk ? '拒绝' : '同意') + '该用户参加该活动?',
            success: ({confirm}) => confirm && this._doAuit(isOk, index)
        });
    },
    _doAuit(isOk: boolean, index: number) {
        const {auditing, handled} = this.data;

        request({
            url: '/api/activity/participation/audit',
            data: {
                flag: isOk,
                activityId: this.id,
                userId: auditing[index].userId
            }
        })
        .then(() => {
            wx.showToast({title: '操作成功' });
            const item = auditing.splice(index, 1)[0];
            item.status = isOk ? SIGN_STATUS.AWAIT : SIGN_STATUS.REFUSE;
            this.setData!({auditing, [`handled[${handled.length}]`]: item});
        })
        .catch(console.log);
    }
});
