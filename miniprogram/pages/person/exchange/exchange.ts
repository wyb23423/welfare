
/**
 * 我的兑换记录
 */
// import { request } from '../../../utils/http';
import { collect } from '../../../template/list_item/list_item';

Page({
    data: {
        exchanges: <ICommodity[]>[]
    },
    collect,
    onLoad() {
        // request({

        // })
    },
});
