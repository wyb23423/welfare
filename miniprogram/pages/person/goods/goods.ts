/**
 * 我的商品
 */

import { request } from '../../../utils/http';
import PageQuery, {ListComponent} from '../../../behavior/page_query';
import { GOODS_STATUS } from '../../../constant/status';

/**
 * 更新商品状态
 */
export function updateStatus(component: ListComponent, index: number) {
    const data = component.data.list[index];
    if(data.status === GOODS_STATUS.AUDITING) {
        return wx.showToast({icon: 'none', title: '商品审核中'});
    }

    const isNormal = data.status === GOODS_STATUS.NORMAL;
    wx.showModal({
        content: (isNormal ? '下' :'上') + '架该商品?',
        success: ({confirm}) => {
            if(!confirm) {
                return;
            }

            const status = isNormal ? GOODS_STATUS.SOLD_OUT : GOODS_STATUS.NORMAL;
            request({
                url: '/api/commodity',
                data: {id: data.id, status},
                method: 'POST'
            })
                .then(() => component.setData({[`list[${index}].status`]: status}))
                .then(() => wx.showToast({title: '操作成功'}))
                .catch(console.log);
        }
    });
}

/**
 * 删除商品
 */
export function deleteGoods(component: ListComponent, index: number) {
    const list: ICommodity[] = component.data.list;
    const data = list[index];
    wx.showModal({
        content: '删除该商品?',
        success: ({confirm}) => {
            if(!confirm) {
                return;
            }

            request({
                url: '/api/commodity',
                data: {id: data.id},
                method: 'DELETE'
            })
                .then(() => component.reflash())
                .then(() => wx.showToast({title: '删除成功'}))
                .catch(console.log);
        }
    });
}


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
            updateStatus(this, index);
        },
        delete({target: {dataset: {index}}}: BaseEvent<{index: number}>) {
            deleteGoods(this, index);
        }
    }
});
