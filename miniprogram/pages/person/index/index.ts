import { USER_AUTHENTICATION } from '../../../constant/store';
import { Authentication } from '../../../constant/index';

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
        menu: [
            {
                name: '我的关注',
                icon: 'heart',
                url: '../follow/follow'
            },
            {
                name: '我的收藏',
                icon: 'shoucang',
                url: '../history/history?type=collection'
            },
            {
                name: '我的发起',
                icon: 'list-2-copy',
                url: '../history/history?type=initiate'
            },
            {
                name: '入驻商家',
                icon: 'shangjiarenzheng',
                url: '/pages/person/settled_in/settled_in'
            }
        ]
    },
    onShow() {
        this.data.menu.length = 4;
        wx.getStorage({
            key: USER_AUTHENTICATION,
            success: ({ data }) => {
                console.log(data, 2222222222222);
                if(data === Authentication.commodity) {
                    this.commodity();
                } else if (data === Authentication.official) {
                    this.merchant();
                }
            }
        });
    },
    commodity() {
        const menu: MenuItem[]  = this.data.menu;
        menu.push(
            {
                name: '创建活动',
                icon: 'chuangjianhuodong',
                url: '/pages/activity/create/create',
            },
            {
                name: '审核商家',
                url: '/pages/audit/business/business'
            },
            {
                name: '审核商品',
                url: '/pages/audit/goods/goods'
            }
        );
        this.setData!({ menu });
    },
    merchant() {
        const menu: MenuItem[]  = this.data.menu;
        menu[3].name = '修改商家信息';
        menu.push(
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
        this.setData!({ menu });
    }
});
