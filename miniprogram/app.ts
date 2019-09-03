// app.ts
export interface IMyApp {
  globalData: {
    userInfo: wx.UserInfo,
    userId: number
  };
  userInfoReadyCallback?(res: wx.UserInfo): void;
}

App<IMyApp>({
  onLaunch() {
    // 登录
    wx.login({
      success(res) {
        console.log(res);
        // 发送 _res.code 到后台换取 openId, sessionKey, unionId
      }
    });

    // 获取用户信息
    wx.getSetting({
      success: ({ authSetting }) => {
        if (authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo;
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res.userInfo);
              }
            }
          });
        }
      }
    });
  },
  globalData: {
    userInfo: {
      nickName: '张三李四王二麻',
      avatarUrl: '/public/images/23.jpg',
      city: '成都',
      country: '中国',
      gender: 2,
      language: 'en',
      province: '四川'
    },
    userId: 1
  }
});
