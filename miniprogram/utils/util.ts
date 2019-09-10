import { AUTHENTICATION, COMPRESS_SIZE } from '../constant';

export function formatTime(date: Date): string {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute].map(formatNumber).join(':');
}

/**
 * 将从服务器获取的数据处理成需要的数据格式
 * @param v 源数据
 * @param i 源数据在数据列表中的索引
 */
export function parseData(v: IActive | ICommodity | IMerchant, i: number = 0) {
  v.authentication = Reflect.get(AUTHENTICATION, v.authentication) || '未认证';

  v.originImg = v.img; // 保存原始图片
  v.img = getCompressImg(v.img); // 获取压缩图片路径
  v.sign = v.sign || 0; // 设置已兑换/参加默认值
  v.size = v.size || 0; // 设置可兑换/参加默认值
  v.index = i; // 设置索引
  v.isCollected = !!v.liked; // 转化是否收藏/关注字段名(该字段是前端完成后服务端才在返回数据中添加的)

  return v;
}

function formatNumber(n: number) {
  const str = n.toString();
  return str[1] ? str : '0' + str;
}

function getCompressImg(src: string) {
  const i = (src || '').lastIndexOf('.');
  if (i < 0) {
    return '/public/images/23.jpg';
  }

  return `${src.substring(0, i)}_${COMPRESS_SIZE}x${COMPRESS_SIZE}${src.substring(i)}`;
}
