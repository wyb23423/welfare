Page({
    onShow() {
        //
    },
    getUserInfo({detail: {userInfo}}: {detail: wx.GetUserInfoSuccessCallbackResult}) {
        if(!userInfo) {
            return;
        }

        console.log(userInfo);
        wx.switchTab({url: '/pages/person/index/index'});
    },
    cancel() {
        wx.switchTab({url: '/pages/index/index'});
    }
});
