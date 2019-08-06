/**
 * 个人信息页顶部头像及名称
 */
import { IMyApp } from "../../app";

const app = <IMyApp>getApp();

Component({
    properties: {
        isindex: {
            type: Boolean,
            value: false
        }
    },
    data: {
        img: '',
        name: ''
    },
    attached() {
        const userInfo: wx.UserInfo = app.globalData.userInfo;
        this.setData!({
            name: userInfo.nickName,
            img: userInfo.avatarUrl
        });
    }
})
