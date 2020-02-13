/**
 * 审核商品
 */
import PageQuery, { ListComponent } from '../../../../behavior/page_query';
import { request } from '../../../../utils/http';

Component<ListComponent>({
    behaviors: [PageQuery],
    data:{
        url: '/api/commodity/auditList',
        dataConfig: {
            currentPage: 'page',
            pageSize: 'rows'
        }
    },
    ready(this: ListComponent) {
        this.showHandler();
    },
    methods: {
        doAuit(e: BaseEvent<{ok?: string}, {index: number}>) {
            const isOk = !!e.target.dataset.ok;
            const index = e.currentTarget.dataset.index;
            const list: ICommodity[] = this.data.list;

            wx.showModal({
                content: isOk ? '审核通过？' : '审核不通过？',
                success: ({confirm}) => {
                    if(!confirm) {
                        return;
                    }

                    request({
                        url: '/api/commodity/audit',
                        data: { isOk, commodityId: list[index].id }
                    })
                        .then(() => wx.showToast({title: '操作成功'}))
                        .then(() => this.reflash())
                        .catch(console.log);
                }
            });
        }
    }
});
