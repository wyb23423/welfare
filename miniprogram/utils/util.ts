import { AUTHENTICATION, COMPRESS_SIZE } from '../constant';

export function formatTime(date: Date): string {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute].map(formatNumber).join(':');
}

export function parseData(v: IAnyObject, i: number = 0) {
  v.authentication = Reflect.get(AUTHENTICATION, v.authentication) || '未认证';

  v.originImg = v.img;
  v.img = getCompressImg(v.img);
  (<any>v).sign = (<any>v).sign || 0;
  v.size = v.size || 0;
  v.index = i;

  return v;
}

function formatNumber(n: number) {
  const str = n.toString();
  return str[1] ? str : '0' + str;
}

function getCompressImg(src: string) {
  const i = src.lastIndexOf('.');
  if (i < 0) {
    return '/public/images/23.jpg';
  }

  return `${src.substring(0, i)}_${COMPRESS_SIZE}x${COMPRESS_SIZE}${src.substring(i)}`;
}
