import { request } from './utils/http';

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
                wx.setStorageSync('cookie', (<any>res.header)['Set-Cookie']);
              } else if ('set-cookie' in res.header) {
                wx.setStorageSync('cookie', (<any>res.header)['set-cookie']);
              }
            }

            wx.setStorageSync('username', (<RespoensData>res.data).data.username);
          }
        })
          .catch(console.log);
      }
    });
  }
});
