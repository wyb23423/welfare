import { request } from '../../../utils/http';
import { IS_OFFICIAL } from '../../../constant/store';

/**
 * 个人中心
 */

interface MenuItem {
    name: string;
    icon?: string;
    url: string;
}

Page({
    data: {
        history: [
            {
                name: '待审核',
                icon: 'daishenhe',
                url: '../history/history?type=auditing'
            },
            {
                name: '待参加',
                icon: 'wendang',
                url: '../history/history?type=await'
            },
            {
                name: '待评价',
                icon: 'daipingjia',
                url: '../history/history?type=evaluate'
            },
            {
                name: '已参加',
                icon: 'yiwancheng',
                url: '../history/history?type=complete'
            }
        ],
        bussiness: [
            {
                name: '申请入驻',
                icon: 'shangjiarenzheng',
                url: '/pages/person/settled_in/settled_in'
            }
        ],
        admin: [
            {
                name: '广告设置',
                icon: 'guanggao',
                url: '/pages/ad_setting/ad'
            },
            {
                name: '审核申请',
                icon: 'shangjiarenzheng1',
                url: '/pages/audit/audit',
                flag: false
            }
        ],
        isAdmin: false
    },
    onShow() {
        wx.getStorage({
            key: IS_OFFICIAL,
            success: ({data}) => {
                this.setData!({ isAdmin: data});
                data && this.commodity();
            }
        });

        wx.getStorage({
            key: IS_OFFICIAL,
            success: ({data}) => {
                this.data.bussiness.length = 1;
                data && this.merchant();
            }
        });
    },
    commodity() {
        const promises = [
            request<PageData>({url: '/admin/auditMerchantList', data: {page: 1, rows: 1}, notShowMsg: true })
                .then(({data: {total}}) => !!total).catch(() => false),
            request<PageData>({url: '/api/commodity/auditList', data: {page: 1, rows: 1}, notShowMsg: true})
                .then(({data: {total}}) => !!total).catch(() => false),
            request<IActive[]>({url: '/api/activity/auditList', notShowMsg: true})
                .then(({data}) => !!data.length).catch(() => false)
        ];
        Promise.all(promises).then((flags) => this.setData!({'admin[1].flag': flags.includes(true)}));
    },
    merchant() {
        const bussiness: Array<MenuItem | string> = this.data.bussiness;
        (<MenuItem>bussiness[0]).name = '修改信息';
        bussiness.push(
            '活动',
            {
                name: '创建活动',
                icon: 'chuangjianhuodong',
                url: '/pages/activity/edit/edit',
            },
            {
                name: '我的活动',
                icon: 'list-2-copy',
                url: '../activity/activity'
            },
            '商品',
            {
                name: '创建商品',
                icon: 'shangjia',
                url: '/pages/goods/edit/edit',
            },
            {
                name: '我的商品',
                icon: 'shangpin',
                url: '../goods/goods'
            },
            {
                name: '我的订单',
                icon: 'dingdan',
                url: '../order/order'
            }
        );
        this.setData!({ bussiness });
    }
});
