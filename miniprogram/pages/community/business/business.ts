
/**
 * 组织列表(管理)
 */
import PageQuery, { ListComponent } from '../../../behavior/page_query';
import { BUSINESS_STATUS } from '../../../constant/status';
import { request } from '../../../utils/http';
import { IS_OFFICIAL } from '../../../constant/store';

Component<ListComponent>({
    behaviors: [PageQuery],
    data: {
        url: '/api/merchant/list',
        BANNED: BUSINESS_STATUS.BANNED
    },
    pageLifetimes: {
        show(this: ListComponent) {
            this.onShow();
        }
    },
    methods: {
        liftOrBan({currentTarget: {dataset: {index}}}: BaseEvent<{index: number}>) {
            const list: IMerchant[] = this.data.list;
            const item = list[index];
            const isBan = item.authentication !== BUSINESS_STATUS.BANNED;

            wx.showModal({
                content: (isBan ? '禁止' : '解禁') + '该组织的权限？',
                success: ({confirm}) => {
                    if(!confirm) {
                        return;
                    }

                    let authentication = BUSINESS_STATUS.BANNED;
                    if(!isBan) {
                        const isCommunity = wx.getStorageSync(IS_OFFICIAL);
                        authentication = isCommunity ? BUSINESS_STATUS.COMMUNITY : BUSINESS_STATUS.NORMAL;
                    }
                    request({ url: '/api/merchant', method: 'POST', data: {id: item.id, authentication} })
                        .then(() => {
                            wx.showToast({title: '操作成功'});
                            this.setData({[`list[${index}].authentication`]: authentication});
                        })
                        .catch(console.log);
                }
            });
        }
    }
});
