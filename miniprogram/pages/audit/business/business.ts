/**
 * 审核商家
 */
import PageQuery, { ListComponent } from '../../../behavior/page_query';
import { request } from '../../../utils/http';

Component<ListComponent>({
    behaviors: [PageQuery],
    data:{
        url: '/admin/auditMerchantList',
        dataConfig: {
            currentPage: 'page',
            pageSize: 'rows'
        }
    },
    ready(this: ListComponent) {
        this.onShow();
    },
    methods: {
        authentication({mark: {user}}: BaseEvent<IAnyObject, IAnyObject, {user: string;}>) {
            wx.showActionSheet({
                itemList: ['拒绝', '通过'],
                success: ({tapIndex}) => {
                  request({
                      method: 'POST',
                      url: '/admin/auditMerchant',
                      data: {
                        isOk: !!tapIndex,
                        userId: user
                      }
                  })
                    .then(() => wx.showToast({title: '操作成功'}))
                    .then(() => this.onShow())
                    .catch(console.log);
                }
            });
        }
    }
});
