import { request } from './utils/http';
import { COOKIE, USER_NAME, USER_AUTHENTICATION } from './constant/store';

// app.ts
App({
  onLaunch() {
    // 登录
    wx.login({
      success: ({ code }) => {
        request({
          url: '/api/login',
          method: 'POST',
          data: { code },
          success(res) {
            if (res.header) {
              if ('Set-Cookie' in res.header) {
                wx.setStorageSync(COOKIE, (<any>res.header)['Set-Cookie']);
              } else if ('set-cookie' in res.header) {
                wx.setStorageSync(COOKIE, (<any>res.header)['set-cookie']);
              }
            }

            const data = (<RespoensData>res.data).data;
            const { authentication } = <IUser>data.user;

            wx.setStorageSync(USER_NAME, data.username);
            wx.setStorageSync(USER_AUTHENTICATION, authentication);

            // if (!realName) {
            //   wx.showModal({
            //     title: '完善个人信息',
            //     content: '小程序需要您的部分个人信息, 请完善个人信息',
            //     showCancel: false,
            //     complete() {
            //       wx.redirectTo({ url: '/pages/person/info/info?notGetInfo=1' });
            //     }
            //   });
            // }
          }
        })
          .catch(console.log);
      }
    });
  }
});
