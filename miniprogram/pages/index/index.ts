/**
 * 首页
 */

import * as listFunc from "../../template/list_item/list_item";

Page({
  data: {
    activity: [] as IAnyObject[],
    goods: [] as IAnyObject[]
  },
  // ==============================事件
  ...listFunc,
  // =============================生命周期
  onLoad() {
    const activity = [];
    const goods = [];
    for (let i = 1; i < 3; i++) {
      activity.push({
        id: i,
        img: '/public/images/23.jpg',
        title: '有爱的我们不孤独——自闭症儿童义诊系列活动__' + i,
        authentication: '社区认证',
        sign: 11,
        size: 24
      });

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

    this.setData!({ activity, goods });
  }
})
