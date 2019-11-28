/**
 * 审核商品
 */
import PageQuery, { ListComponent } from '../../../behavior/page_query';
import { request } from '../../../utils/http';

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
        this.onShow();
    },
    methods: {
        authentication({mark: {id}}: BaseEvent<IAnyObject, IAnyObject, {id: string;}>) {
            wx.showActionSheet({
                itemList: ['拒绝', '通过'],
                success: ({tapIndex}) => {
                  request({
                        method: 'POST',
                        url: '/api/commodity/audit',
                        data: {
                            isOk: !!tapIndex,
                            commodityId: id
                        },
                        header: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                  })
                    .then(() => wx.showToast({title: '操作成功'}))
                    .then(() => this.reflash())
                    .catch(console.log);
                }
            });
        }
    }
});
