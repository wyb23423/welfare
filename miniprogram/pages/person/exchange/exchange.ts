
/**
 * 我的兑换记录
 */
import { request } from '../../../utils/http';
import { collect as collectFunc } from '../../../template/list_item/list_item';
import { parseData } from '../../../utils/util';

Page({
    data: {
        exchanges: <ICommodity[]>[]
    },
    collect(e: WxTouchEvent) {
        collectFunc(e)
            .then(({ id, collect }) => {
                const index = this.data.exchanges.findIndex(v => v.id === id);
                if (index > -1) {
                    this.setData!({ [`exchanges[${index}].isCollected`]: !collect });
                }
            })
            .catch(console.log);
    },
    onLoad() {
        request<ICommodity[]>({ url: '/api/commodity/participation/completeList' })
            .then(({ data: list }) => this.setData!({ exchanges: list.map(parseData) }))
            .catch(console.log);
    },
});
