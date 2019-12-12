/**
 * 我的商品
 */

import { request } from '../../../utils/http';
import PageQuery, {ListComponent} from '../../../behavior/page_query';

Component<ListComponent>({
    behaviors: [PageQuery],
    data: {
        url: '/api/commodity/my'
    },
    pageLifetimes: {
        show(this: ListComponent) {
            this.onShow();
        }
    },
    methods: {
        updateStatus({target: {dataset: {index}}}: BaseEvent<{index: number}>) {
            const data = this.data.list[index];
            if(data.status === 2) {
                return wx.showToast({icon: 'none', title: '商品审核中'});
            }
            data.status = !data.status;

            request({
                url: '/api/commodity',
                data,
                method: 'POST'
            })
                .then(() => this.setData({[`list${index}`]: data}))
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
