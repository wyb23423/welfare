
/**
 * 我的兑换记录
 */
import { request } from '../../../utils/http';
import { parseData } from '../../../utils/util';

Page({
    data: {exchanges: <ICommodity[]>[]},
    onLoad() {
        request<ICommodity[]>({ url: '/api/commodity/participation/completeList' })
            .then(({ data: list }) => this.setData!({ exchanges: list.map(parseData) }))
            .catch(console.log);
    },
});
