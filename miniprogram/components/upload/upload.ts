/**
 * 上传图片
 */

export function chooseImage<T extends string | string[] = string>(count: number = 1): Promise<T> {
    return new Promise((resolve, reject) => {
        wx.chooseImage({
            count,
            success: (res) => {
                const files = [];
                for(const file of res.tempFiles) {
                    if (file.size > 1024000) {
                        wx.showToast({
                            title: '文件大小不能超过1M',
                            icon: 'none'
                        });

                        return reject('over size');
                    }

                    files.push(file.path);
                }

                resolve(<T>(count === 1 ? files[0] : files));
            },
            fail: res => reject(res.errMsg)
        });
    });
}

Component({
    externalClasses: ['custom-class'],
    properties: {
        value: {
            type: null,
            value: ''
        },
        text: {
            type: String,
            value: '上传图片'
        },
        height: {
            type: String,
            value: 'auto'
        },
        count: {
            type: Number,
            value: 1
        }
    },
    attached() {
        let {count, value} = this.data;
        const isString = typeof value === 'string';
        const isArray = Array.isArray(value);

        let flag = false;
        if(count < 1) {
            count = 1;
            value = isString ? value : '';
            flag = true;
        } else if(count > 1 && !isArray) {
            value = [];
            flag = true;
        } else if(!isString) {
            value = isArray ? value[0] || '' : '';
            flag = true;
        }

        if(flag) {
            this.setData({count});
            this.triggerEvent('input', { value }, {});
        }
    },
    methods: {
        choose() {
            chooseImage<string | string[]>(this.data.count)
                .then(value => this.triggerEvent('input', { value }, {}))
                .catch(console.error);
        }
    }
});
