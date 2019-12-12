/**
 * 我发起的活动
 */

import PageQuery, {ListComponent} from '../../../behavior/page_query';
import { ACTIVITY_STATUS } from '../../../constant/status';
import { request } from '../../../utils/http';

Component<ListComponent>({
    behaviors: [PageQuery],
    data: {
        url: '/api/activity/my',
        STATUS: {
            PREPARE: ACTIVITY_STATUS.PREPARE,
            PROGRESS: ACTIVITY_STATUS.PROGRESS,
            COMPLETE: ACTIVITY_STATUS.COMPLETE,
            AUDITING: ACTIVITY_STATUS.AUDITING,
            CLOSE: ACTIVITY_STATUS.CLOSE
        }
    },
    pageLifetimes: {
        show(this: ListComponent) {
            this.onShow();
        }
    },
    methods: {
        delete({target: {dataset: {index}}}: BaseEvent<{index: number}>) {
            wx.showModal({
                content: '删除该活动？',
                success: ({confirm}) => {
                    if (confirm) {
                        request({
                            url: '/api/activity',
                            method: 'DELETE',
                            data: { activityId: this.data.list[index].id }
                        })
                            .then(() => wx.showToast({ title: '删除成功' }))
                            .then(() => this.reflash())
                            .catch(console.log);
                    }
                }
            });
        },
        ok({target: {dataset: {index}}}: BaseEvent<{index: number}>) {
            wx.showModal({
                content: '该活动已完成?',
                success: ({confirm}) => {
                    if (confirm) {
                        request({ url: '/api/activity/achieve/' + this.data.list[index].id })
                            .then(() => {
                                wx.showToast({title: '操作成功'});
                                this.setData!({[`list[${index}].status`]: ACTIVITY_STATUS.COMPLETE});
                            })
                            .catch(console.log);
                    }
                }
            });
        }
    }
});
