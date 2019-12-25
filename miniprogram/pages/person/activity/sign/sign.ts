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
        join: <EnInfo[]>[], // 参加者列表
        refuse: <EnInfo[]>[], // 已拒绝
        STATUS: {
            AUDITING: SIGN_STATUS.AUDITING,
            AWAIT: SIGN_STATUS.AWAIT,
            JOINING: SIGN_STATUS.JOINING,
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
                const refuse: EnInfo[] = [];
                const join: EnInfo[] = [];

                list.forEach(v => {
                    switch(v.status) {
                        case SIGN_STATUS.AUDITING:
                            auditing.push(v);
                            break;
                        case SIGN_STATUS.REFUSE:
                            refuse.push(v);
                            break;
                        case SIGN_STATUS.AWAIT:
                        case SIGN_STATUS.JOINING:
                            join.push(v);
                            break;
                        default: break;
                    }
                });

                this.setData!({refuse, auditing, join});
            })
            .catch(console.log);
    },
    // 签到
    doSign({currentTarget: {dataset: {index}}}: BaseEvent<{index: number}>) {
        const item = this.data.join[index];
        if(!item) {
            return;
        }

        wx.showModal({
            title: item.name,
            content: '活动签到确认',
            success: ({confirm}) => {
                if(!confirm) {
                    return;
                }

                request({
                    url: '/api/activity/participation/signIn',
                    data: {
                        activityId: this.id,
                        user: item.userId
                    }
                })
                .then(() =>  this.setData!({
                    [`join[${index}].status`]: SIGN_STATUS.JOINING
                }))
                .catch(console.log);
            }
        });
    },
    // 报名审核
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
        const {auditing, refuse, join} = this.data;

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
            (isOk  ? join : refuse).push(item);
            this.setData!({auditing, join, refuse});
        })
        .catch(console.log);
    }
});
