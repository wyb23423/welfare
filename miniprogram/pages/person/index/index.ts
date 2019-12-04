import { USER_AUTHENTICATION } from '../../../constant/store';
import { Authentication } from '../../../constant/index';
import { request } from '../../../utils/http';

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
                name: '审核商家',
                icon: 'shangjiarenzheng1',
                url: '/pages/audit/business/business',
                flag: false
            },
            {
                name: '审核商品',
                icon: 'shangpinrenzheng',
                url: '/pages/audit/goods/goods',
                flag: false
            }
        ],
        isAdmin: false
    },
    onShow() {
        wx.getStorage({
            key: USER_AUTHENTICATION,
            success: ({data}) => {
                const isAdmin = data === Authentication.commodity;
                this.setData!({ isAdmin});
                isAdmin && this.commodity();

                this.data.bussiness.length = 1;
                data === Authentication.official && this.merchant();
            }
        });
    },
    commodity() {
        const promises = [
            request<PageData>({url: '/admin/auditMerchantList', data: {page: 1, rows: 1}, notShowMsg: true })
                .then(({data: {total}}) => !!total).catch(() => false),
            request<PageData>({url: '/api/commodity/auditList',data: {page: 1, rows: 1},notShowMsg: true})
                .then(({data: {total}}) => !!total).catch(() => false)
        ];

        Promise.all(promises).then(([f1, f2]) => {
            this.setData!({
                'admin[1].flag': f1,
                'admin[2].flag': f2
            });
        });
    },
    merchant() {
        const bussiness: Array<MenuItem | string> = this.data.bussiness;
        (<MenuItem>bussiness[0]).name = '修改信息';
        bussiness.push(
            '活动',
            {
                name: '创建活动',
                icon: 'chuangjianhuodong',
                url: '/pages/activity/create/create',
            },
            {
                name: '我的发起',
                icon: 'list-2-copy',
                url: '../history/history?type=initiate'
            },
            '商品',
            {
                name: '商品上架',
                icon: 'shangjia',
                url: '/pages/goods/create/create',
            },
            {
                name: '我的订单',
                icon: 'dingdan',
                url: '/pages/person/order/order'
            }
        );
        this.setData!({ bussiness });
    }
});
