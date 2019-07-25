/**
 * 
 */
import { IMyApp } from "../../../app";

const app = <IMyApp>getApp();

Page({
    data: {},
    onLoad() {
        const userInfo: wx.UserInfo = app.globalData.userInfo;
        this.setData!({
            name: userInfo.nickName,
            img: userInfo.avatarUrl
        })
    }
})