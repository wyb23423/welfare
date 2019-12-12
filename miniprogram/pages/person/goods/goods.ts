/**
 * 我的商品
 */

import { request } from '../../../utils/http';
import PageQuery, {ListComponent} from '../../../behavior/page_query';
import { GOODS_STATUS } from '../../../constant/status';

Component<ListComponent>({
    behaviors: [PageQuery],
    data: {
        url: '/api/commodity/my',
        STATUS: {
            AUDITING: GOODS_STATUS.AUDITING,
            NORMAL: GOODS_STATUS.NORMAL,
            SOLD_OUT: GOODS_STATUS.SOLD_OUT,
            CLOSE: GOODS_STATUS.CLOSE
        }
    },
    pageLifetimes: {
        show(this: ListComponent) {
            this.onShow();
        }
    },
    methods: {
        updateStatus({target: {dataset: {index}}}: BaseEvent<{index: number}>) {
            const data = this.data.list[index];
            if(data.status === GOODS_STATUS.AUDITING) {
                return wx.showToast({icon: 'none', title: '商品审核中'});
            }
            const status = data.status === GOODS_STATUS.NORMAL ? GOODS_STATUS.SOLD_OUT : GOODS_STATUS.NORMAL;

            request({
                url: '/api/commodity',
                data: {...data, status},
                method: 'POST'
            })
                .then(() => this.setData({[`list[${index}].status`]: status}))
                .then(() => wx.showToast({title: '操作成功'}))
                .catch(console.log);
        },
        delete({target: {dataset: {index}}}: BaseEvent<{index: number}>) {
            const list: ICommodity[] = this.data.list;
            const data = list[index];
            wx.showModal({
                content: `删除商品${data.name}?`,
                success: ({confirm}) => {
                    if(!confirm) {
                        return;
                    }

                    request({
                        url: '/api/commodity',
                        data: {id: data.id},
                        method: 'DELETE'
                    })
                        .then(() => this.reflash())
                        .then(() => wx.showToast({title: '删除成功'}))
                        .catch(console.log);
                }
            });
        }
    }
});
