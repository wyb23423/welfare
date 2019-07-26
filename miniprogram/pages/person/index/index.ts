/**
 * 个人中心
 */
import { IMyApp } from "../../../app";

const app = <IMyApp>getApp();

Page({
    data: {
        menu: [
            {
                name: '我的关注',
                icon: 'heart',
                url: ''
            },
            {
                name: '我的收藏',
                icon: 'shoucang',
                url: ''
            },
            {
                name: '我的发起',
                icon: 'list-2-copy',
                url: ''
            },
            {
                name: '入驻商家',
                icon: 'shangjiarenzheng',
                url: ''
            },
            {
                name: '创建活动',
                icon: 'chuangjianhuodong',
                url: ''
            },
            {
                name: '商品上架',
                icon: 'shangjia',
                url: ''
            },
            {
                name: '我的订单',
                icon: 'dingdan',
                url: ''
            },
        ]
    },
    onLoad() {
        const userInfo: wx.UserInfo = app.globalData.userInfo;
        this.setData!({
            name: userInfo.nickName,
            img: userInfo.avatarUrl
        });
    }
});