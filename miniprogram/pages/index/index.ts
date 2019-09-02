/**
 * 首页
 */
import * as listFunc from '../../template/list_item/list_item';
import { parseData } from '../../constant';
import { request } from '../../utils/http';

Page({
  data: {
    activity: [] as IActive[],
    goods: [] as ICommodity[]
  },
  // ==============================事件
  ...listFunc,
  // =============================生命周期
  onLoad() {
    request<PageData<IActive>>({
      url: '/api/activity/pagingQuery',
      data: {
        currentPage: 1,
        pageSize: 2
      }
    })
      .then(({ data: { list } }) => this.setData!({ activity: list.map(parseData) }))
      .catch(console.log);

    request<PageData<ICommodity>>({
      url: '/api/commodity/pagingQuery',
      data: {
        currentPage: 1,
        pageSize: 2
      }
    })
      .then(({ data: { list } }) => this.setData!({ goods: list.map(parseData) }))
      .catch(console.log);
  },

  // =============================================
});
