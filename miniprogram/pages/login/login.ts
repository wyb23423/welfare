Page({
    onShow() { wx.hideHomeButton(); },
    getUserInfo({detail: {userInfo}}: {detail: wx.GetUserInfoSuccessCallbackResult}) {
        if(!userInfo) {
            return;
        }

        console.log(userInfo);
        this.back('/pages/person/index/index');
    },
    cancel() {
        // wx.openSetting();
        this.back('/pages/index/index');
    },
    back(url: string) {
        wx.switchTab({ url, success() {wx.showTabBar({});} });
    }
});
