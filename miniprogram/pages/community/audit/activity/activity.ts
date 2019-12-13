/**
 * 审核商品
 */
// import PageQuery, { ListComponent } from '../../../behavior/page_query';
import { request } from '../../../../utils/http';

Component({
    // behaviors: [PageQuery],
    data:{
        url: '/api/activity/auditList',
        dataConfig: {
            currentPage: 'page',
            pageSize: 'rows'
        },
        list: <IActive[]>[]
    },
    attached() {
        request<IActive[]>({ url: this.data.url })
            .then(({data}) => this.setData({list: data}))
            .catch(console.log);
    },
    methods: {
        doAuit(e: BaseEvent<{ok?: string}, {index: number}>) {
            const isOk = !!e.target.dataset.ok;
            const index = e.currentTarget.dataset.index;
            const list: IActive[] = this.data.list;

            wx.showModal({
                content: isOk ? '审核通过？' : '审核不通过？',
                success: ({confirm}) => {
                    if(!confirm) {
                        return;
                    }

                    request({
                        url: '/api/activity/audit',
                        data: {
                            flag: isOk,
                            activityId: list[index].id
                        }
                    })
                        .then(() => {
                            wx.showToast({title: '操作成功'});
                            list.splice(index, 1);
                            this.setData({list});
                        })
                        .catch(console.log);
                }
            });
        }
    }
});
