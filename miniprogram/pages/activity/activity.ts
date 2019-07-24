/**
 * 公益活动
 */
import * as listFunc from "../../template/list_item/list_item";

Page({
    data: {
        activitys: [] as IAnyObject[]
    },
    // ==============================事件
    ...listFunc,
    // =============================生命周期
    onLoad() {
        const activitys = [];
        for (let i = 1; i < 10; i++) {
            activitys.push({
                id: i,
                img: '/public/images/23.jpg',
                title: '有爱的我们不孤独——自闭症儿童义诊系列活动__' + i,
                authentication: '社区认证',
                sign: 11,
                size: 24
            });
        };

        this.setData!({ activitys });
    },
    getMore() {
        for (let i = 1; i < 10; i++) {
            this.data.activitys.push({
                id: i,
                img: '/public/images/23.jpg',
                title: '有爱的我们不孤独——自闭症儿童义诊系列活动__' + i,
                authentication: '社区认证',
                sign: 11,
                size: 24
            });
        };

        this.setData!({ activitys: this.data.activitys });
    }
})
