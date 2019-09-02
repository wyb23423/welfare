/**
 * 首页
 */
import * as listFunc from '../../template/list_item/list_item';
import { HOST, parseData } from '../../constant';

Page({
  data: {
    activity: [] as IActive[],
    goods: [] as ICommodity[]
  },
  // ==============================事件
  ...listFunc,
  // =============================生命周期
  onLoad() {
    wx.request({
      url: HOST + '/api/activity/pagingQuery',
      data: {
        currentPage: 1,
        pageSize: 2
      },
      success: (res) => {
        const { data: { list } } = <RespoensData<PageData<IActive>>>res.data;
        this.setData!({ activity: list.map(parseData) });
      }
    });

    wx.request({
      url: HOST + '/api/commodity/pagingQuery',
      data: {
        currentPage: 1,
        pageSize: 2
      },
      success: (res) => {
        const { data: { list } } = <RespoensData<PageData<ICommodity>>>res.data;
        this.setData!({ goods: list.map(parseData) });
      }
    });
  },

  // =============================================
});
