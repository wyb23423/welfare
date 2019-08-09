/**
 * 上传图片
 */

Component({
    properties: {
        value: {
            type: String,
            value: ''
        }
    },
    methods: {
        choose() {
            wx.chooseImage({
                count: 1,
                success: (res) => {
                    this.triggerEvent('input', { value: res.tempFilePaths[0] }, {});
                },
                fail: (res) => {
                    wx.showToast({
                        title: res.errMsg,
                        icon: 'none'
                    });
                }
            });
        }
    }
});
