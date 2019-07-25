/**
 * 兑换商品
 */
import * as listFunc from "../../template/list_item/list_item";

Page({
    data: {
        goods: [] as IAnyObject[]
    },
    // ==============================事件
    ...listFunc,
    // =============================生命周期
    onLoad() {
        const goods = [];
        for (let i = 1; i < 10; i++) {
            goods.push({
                id: i,
                img: '/public/images/23.jpg',
                title: '少儿基础篮球培训课1节',
                authentication: '社区认证',
                sign: 11,
                size: 24,
                cost: 50 + i * 40,
                isCollected: i > 1
            });
        };

        this.setData!({ goods });
    },
    getMore() {
        for (let i = 1; i < 10; i++) {
            this.data.goods.push({
                id: i,
                img: '/public/images/23.jpg',
                title: '少儿基础篮球培训课1节',
                authentication: '社区认证',
                sign: 11,
                size: 24,
                cost: 50 + i * 40,
                isCollected: i > 1
            });
        };

        this.setData!({ goods: this.data.goods });
    }
})
