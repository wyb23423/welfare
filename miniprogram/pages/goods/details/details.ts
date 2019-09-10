/**
 * 公益活动详情
 */
Page({
    data: {
        id: 1
    },
    onLoad(query: any) {
        query && this.setData!({ id: query.id });
    }
});
