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
                    const file = res.tempFiles[0];
                    if (file.size > 1024000) {
                        return wx.showToast({
                            title: '文件大小不能超过1M',
                            icon: 'none'
                        });
                    }
                    this.triggerEvent('input', { value: file.path }, {});
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
