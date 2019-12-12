/**
 * 上传图片
 */

export function chooseImage(): Promise<string> {
    return new Promise((resolve, reject) => {
        wx.chooseImage({
            count: 1,
            success: (res) => {
                const file = res.tempFiles[0];
                if (file.size > 1024000) {
                    wx.showToast({
                        title: '文件大小不能超过1M',
                        icon: 'none'
                    });

                    return reject('over size');
                }

                resolve(file.path);
            },
            fail: res => reject(res.errMsg)
        });
    });
}

Component({
    properties: {
        value: {
            type: String,
            value: ''
        },
        text: {
            type: String,
            value: '上传图片'
        },
        height: {
            type: String,
            value: 'auto'
        }
    },
    methods: {
        choose() {
            chooseImage()
                .then(value => this.triggerEvent('input', { value }, {}))
                .catch(msg => wx.showToast({
                    title: msg,
                    icon: 'none'
                }));
        }
    }
});
