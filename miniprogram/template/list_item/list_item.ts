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
export function collect(e: IAnyObject) {
    // tslint:disable-next-line:no-shadowed-variable
    const { id, collect } = e.target.dataset;
    console.log(id, collect);
}

export function none() {
    //
}
