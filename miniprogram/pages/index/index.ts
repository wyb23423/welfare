/**
 * 首页
 */
import * as listFunc from "../../template/list_item/list_item";
import { HOST, AUTHENTICATION } from "../../constant";

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
        this.setData!({ activity: list.map(this._parseData) });
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
        this.setData!({ goods: list.map(this._parseData) });
      }
    });
  },

  // =============================================
  _parseData(v: ICommodity | IActive) {
    v.authentication = Reflect.get(AUTHENTICATION, v.authentication) || '未认证';
    v.img = '/public/images/23.jpg';

    return v;
  }
});
