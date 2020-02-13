/**
 * 审核商家
 */
import PageQuery, { ListComponent } from '../../../../behavior/page_query';
import { request } from '../../../../utils/http';

Component<ListComponent>({
    behaviors: [PageQuery],
    data:{
        url: '/admin/auditMerchantList',
        dataConfig: {
            currentPage: 'page',
            pageSize: 'rows'
        },
        info: null,
    },
    ready(this: ListComponent) {
        this.showHandler();
    },
    methods: {
        close() {
            this.setData({info: null});
        },
        showModal({mark: {index}}: BaseEvent<IAnyObject, IAnyObject, {index: number;}>) {
            const item = this.data.list[index];

            const [idCard1, idCard2] = item.idCard;
            this.setData({info: {...item, idCard1, idCard2}});
        },
        doAuit(e: BaseEvent<{ok?: string}>) {
            const isOk = !!e.target.dataset.ok;
            wx.showModal({
                content: isOk ? '审核通过？' : '审核不通过？',
                success: ({confirm}) => {
                    if(!confirm) {
                        return;
                    }

                    request({
                        url: '/admin/auditMerchant',
                        data: { isOk, userId: this.data.info.userId }
                    })
                        .then(() => {
                            wx.showToast({title: '操作成功'});
                            this.setData({info: null});
                            this.reflash();
                        })
                        .catch(console.log);
                }
            });
        }
    }
});
