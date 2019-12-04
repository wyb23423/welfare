import { AUTHENTICATION } from '../constant/index';

export function formatTime(date: Date): string {
  const {year, month, day, hour, minute} = resolveTime(date);
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute].map(formatNumber).join(':');
}

/**
 * 将时间分解为 年月日，时分秒
 */
export function resolveTime(time: number | Date) {
    const date = time instanceof Date ? time : new Date(time);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();

    return {year, month, day, hour, minute};
}

/**
 * 获取当前页面路由参数
 */
export function getOptions(path: string) {
  const page = getCurrentPages<IAnyObject, any>().pop();
  if (!(page && page.route === path)) {
    return wx.showModal({
      title: '非法访问',
      content: '路由参数错误，即将返回主页',
      showCancel: false,
      complete() {
        wx.reLaunch({ url: '/pages/index/index' });
      }
    });
  }

  return page.options || {};
}

/**
 * 将从服务器获取的数据处理成需要的数据格式
 * @param v 源数据
 * @param i 源数据在数据列表中的索引
 */
export function parseData<T extends IActive | ICommodity | IMerchant>(v: T, i: number = 0): T {
  v.authentication = Reflect.get(AUTHENTICATION, v.authentication) || '未认证';

  v.originImg = v.img; // 保存原始图片
  v.img = v.img + '?thumb=true'; // 获取压缩图片路径
  v.sign = v.attended || v.sign || 0; // 设置已兑换/参加默认值
  v.size = v.size || 0; // 设置可兑换/参加默认值
  v.index = i; // 设置索引
  v.isCollected = !!v.liked; // 转化是否收藏/关注字段名(该字段是前端完成后服务端才在返回数据中添加的)

  return v;
}

function formatNumber(n: number) {
  const str = n.toString();
  return str[1] ? str : '0' + str;
}
