import { request } from '../../utils/http';

/*
* 兑换商品
*/
export function exchange(this: any, e: IAnyObject) {
    const id = e.target.dataset.id;
    request({ url: '/api/commodity/participation/deal/' + id })
        .then(() => wx.showToast({ title: '兑换成功' }))
        .catch(console.log);
}

/**
 * (取消)收藏商品
 */
export function collect(e: WxTouchEvent) {
    // tslint:disable-next-line:no-shadowed-variable
    const { id, collect } = e.target.dataset;

    return request({
        url: '/api/like',
        method: collect ? 'DELETE' : 'PUT',
        data: {
            targetId: id,
            type: 1
        }
    })
        // .then(() => wx.showToast({ title: '操作成功' }))
        .then(() => ({ id, collect }));
}

export function none() {
    //
}
