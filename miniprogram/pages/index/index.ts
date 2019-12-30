/**
 * 首页
 */
import { request } from '../../utils/http';
import { parseData } from '../../utils/util';

Page({
    data: {
        activity: [] as IActive[],
        goods: [] as ICommodity[],
        ads: <IAD[]>[]
    },
    onShow() {
        // 活动
        request<PageData<IActive>>({
            url: '/api/activity/pagingQuery',
            data: {
                currentPage: 1,
                pageSize: 10
            }
        })
            .then(({ data: { list } }) => this.setData!({ activity: list.map(parseData) }))
            .catch(console.log);

        // 商品
        request<PageData<ICommodity>>({
            url: '/api/commodity/pagingQuery',
            data: {
                currentPage: 1,
                pageSize: 10
            }
        })
            .then(({ data: { list } }) => this.setData!({ goods: list.map(parseData) }))
            .catch(console.log);

        // 广告
        request<IAD[]>({url: '/api/ad/getCarouse', notShowMsg: true})
            .then(({data}) => this.setData!({ads: data}))
            .catch(console.log);
    },
});
