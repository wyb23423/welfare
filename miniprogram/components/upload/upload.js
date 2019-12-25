"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function chooseImage() {
    return new Promise(function (resolve, reject) {
        wx.chooseImage({
            count: 1,
            success: function (res) {
                var file = res.tempFiles[0];
                if (file.size > 1024000) {
                    wx.showToast({
                        title: '文件大小不能超过1M',
                        icon: 'none'
                    });
                    return reject('over size');
                }
                resolve(file.path);
            },
            fail: function (res) { return reject(res.errMsg); }
        });
    });
}
exports.chooseImage = chooseImage;
Component({
    externalClasses: ['custom-class'],
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
        choose: function () {
            var _this = this;
            chooseImage()
                .then(function (value) { return _this.triggerEvent('input', { value: value }, {}); })
                .catch(function (msg) { return wx.showToast({
                title: msg,
                icon: 'none'
            }); });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXBsb2FkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsU0FBZ0IsV0FBVztJQUN2QixPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07UUFDL0IsRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUNYLEtBQUssRUFBRSxDQUFDO1lBQ1IsT0FBTyxFQUFFLFVBQUMsR0FBRztnQkFDVCxJQUFNLElBQUksR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5QixJQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxFQUFFO29CQUNyQixFQUFFLENBQUMsU0FBUyxDQUFDO3dCQUNULEtBQUssRUFBRSxZQUFZO3dCQUNuQixJQUFJLEVBQUUsTUFBTTtxQkFDZixDQUFDLENBQUM7b0JBRUgsT0FBTyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7aUJBQzlCO2dCQUVELE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkIsQ0FBQztZQUNELElBQUksRUFBRSxVQUFBLEdBQUcsSUFBSSxPQUFBLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQWxCLENBQWtCO1NBQ2xDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQXBCRCxrQ0FvQkM7QUFFRCxTQUFTLENBQUM7SUFDTixlQUFlLEVBQUUsQ0FBQyxjQUFjLENBQUM7SUFDakMsVUFBVSxFQUFFO1FBQ1IsS0FBSyxFQUFFO1lBQ0gsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsRUFBRTtTQUNaO1FBQ0QsSUFBSSxFQUFFO1lBQ0YsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsTUFBTTtTQUNoQjtRQUNELE1BQU0sRUFBRTtZQUNKLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLE1BQU07U0FDaEI7S0FDSjtJQUNELE9BQU8sRUFBRTtRQUNMLE1BQU07WUFBTixpQkFPQztZQU5HLFdBQVcsRUFBRTtpQkFDUixJQUFJLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxFQUFFLEtBQUssT0FBQSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQXpDLENBQXlDLENBQUM7aUJBQ3hELEtBQUssQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0JBQ3ZCLEtBQUssRUFBRSxHQUFHO2dCQUNWLElBQUksRUFBRSxNQUFNO2FBQ2YsQ0FBQyxFQUhZLENBR1osQ0FBQyxDQUFDO1FBQ1osQ0FBQztLQUNKO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOS4iuS8oOWbvueJh1xyXG4gKi9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaG9vc2VJbWFnZSgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICB3eC5jaG9vc2VJbWFnZSh7XHJcbiAgICAgICAgICAgIGNvdW50OiAxLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gcmVzLnRlbXBGaWxlc1swXTtcclxuICAgICAgICAgICAgICAgIGlmIChmaWxlLnNpemUgPiAxMDI0MDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmlofku7blpKflsI/kuI3og73otoXov4cxTScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KCdvdmVyIHNpemUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGZpbGUucGF0aCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhaWw6IHJlcyA9PiByZWplY3QocmVzLmVyck1zZylcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5Db21wb25lbnQoe1xyXG4gICAgZXh0ZXJuYWxDbGFzc2VzOiBbJ2N1c3RvbS1jbGFzcyddLFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHZhbHVlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0ZXh0OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6ICfkuIrkvKDlm77niYcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWlnaHQ6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ2F1dG8nXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBjaG9vc2UoKSB7XHJcbiAgICAgICAgICAgIGNob29zZUltYWdlKClcclxuICAgICAgICAgICAgICAgIC50aGVuKHZhbHVlID0+IHRoaXMudHJpZ2dlckV2ZW50KCdpbnB1dCcsIHsgdmFsdWUgfSwge30pKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKG1zZyA9PiB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBtc2csXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19