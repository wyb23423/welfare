import { AUTHENTICATION } from '../constant/index';
import { uploadFile, request } from './http';
import { ListComponent } from '../behavior/page_query';
import { GOODS_STATUS } from '../constant/status';

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
  (<any>v).authStr = Reflect.get(AUTHENTICATION, v.authentication) || '未认证';

  v.originImg = v.img; // 保存原始图片
  v.img = v.img + '?thumb=true'; // 获取压缩图片路径
  v.sign = v.attended || v.sign || 0; // 设置已兑换/参加默认值
  v.size = v.size || 0; // 设置可兑换/参加默认值
  v.index = i; // 设置索引
  v.isCollected = !!v.liked; // 转化是否收藏/关注字段名(该字段是前端完成后服务端才在返回数据中添加的)

  return v;
}

export function upload(newSrc: string, oldSrc: string): Promise<string> {
    if(!newSrc) {
        console.warn('文件路径不能为空');
        return Promise.resolve(<any>null);
    }

    if(oldSrc === newSrc) {
        return Promise.resolve(<any>null);
    }

    return uploadFile<string>({
        url: '/api/file',
        name: 'file',
        filePath: newSrc
    }).then(res => res.data);
}



/**
 * 更新商品状态
 */
export function updateStatus(component: ListComponent, index: number) {
    const data = component.data.list[index];
    if(data.status === GOODS_STATUS.AUDITING) {
        return wx.showToast({icon: 'none', title: '商品审核中'});
    }

    const isNormal = data.status === GOODS_STATUS.NORMAL;
    wx.showModal({
        content: (isNormal ? '下' :'上') + '架该商品?',
        success: ({confirm}) => {
            if(!confirm) {
                return;
            }

            const status = isNormal ? GOODS_STATUS.SOLD_OUT : GOODS_STATUS.NORMAL;
            request({
                url: '/api/commodity',
                data: {id: data.id, status},
                method: 'POST'
            })
                .then(() => component.setData({[`list[${index}].status`]: status}))
                .then(() => wx.showToast({title: '操作成功'}))
                .catch(console.log);
        }
    });
}

/**
 * 删除商品
 */
export function deleteGoods(component: ListComponent, index: number) {
    const list: ICommodity[] = component.data.list;
    const data = list[index];
    wx.showModal({
        content: '删除该商品?',
        success: ({confirm}) => {
            if(!confirm) {
                return;
            }

            request({
                url: '/api/commodity',
                data: {id: data.id},
                method: 'DELETE'
            })
                .then(() => component.reflash())
                .then(() => wx.showToast({title: '删除成功'}))
                .catch(console.log);
        }
    });
}

function formatNumber(n: number) {
  const str = n.toString();
  return str[1] ? str : '0' + str;
}
