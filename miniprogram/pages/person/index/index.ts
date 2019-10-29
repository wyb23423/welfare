import { IS_BUSINESS } from '../../../constant/store';

/**
 * 个人中心
 */

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
            },
            {
                name: '创建活动',
                icon: 'chuangjianhuodong',
                url: '/pages/activity/create/create',
            }
        ]
    },
    onShow() {
        wx.getStorage({
            key: IS_BUSINESS,
            success: ({ data }) => {
                const menu = this.data.menu;
                if (data) {
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
            }
        });
    },
});
