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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXBsb2FkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsU0FBZ0IsV0FBVztJQUN2QixPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07UUFDL0IsRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUNYLEtBQUssRUFBRSxDQUFDO1lBQ1IsT0FBTyxFQUFFLFVBQUMsR0FBRztnQkFDVCxJQUFNLElBQUksR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5QixJQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxFQUFFO29CQUNyQixFQUFFLENBQUMsU0FBUyxDQUFDO3dCQUNULEtBQUssRUFBRSxZQUFZO3dCQUNuQixJQUFJLEVBQUUsTUFBTTtxQkFDZixDQUFDLENBQUM7b0JBRUgsT0FBTyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7aUJBQzlCO2dCQUVELE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkIsQ0FBQztZQUNELElBQUksRUFBRSxVQUFBLEdBQUcsSUFBSSxPQUFBLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQWxCLENBQWtCO1NBQ2xDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQXBCRCxrQ0FvQkM7QUFFRCxTQUFTLENBQUM7SUFDTixVQUFVLEVBQUU7UUFDUixLQUFLLEVBQUU7WUFDSCxJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxFQUFFO1NBQ1o7UUFDRCxJQUFJLEVBQUU7WUFDRixJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxNQUFNO1NBQ2hCO1FBQ0QsTUFBTSxFQUFFO1lBQ0osSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsTUFBTTtTQUNoQjtLQUNKO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsTUFBTTtZQUFOLGlCQU9DO1lBTkcsV0FBVyxFQUFFO2lCQUNSLElBQUksQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEVBQUUsS0FBSyxPQUFBLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBekMsQ0FBeUMsQ0FBQztpQkFDeEQsS0FBSyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDdkIsS0FBSyxFQUFFLEdBQUc7Z0JBQ1YsSUFBSSxFQUFFLE1BQU07YUFDZixDQUFDLEVBSFksQ0FHWixDQUFDLENBQUM7UUFDWixDQUFDO0tBQ0o7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5LiK5Lyg5Zu+54mHXHJcbiAqL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNob29zZUltYWdlKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHd4LmNob29zZUltYWdlKHtcclxuICAgICAgICAgICAgY291bnQ6IDEsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGUgPSByZXMudGVtcEZpbGVzWzBdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpbGUuc2l6ZSA+IDEwMjQwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aWh+S7tuWkp+Wwj+S4jeiDvei2hei/hzFNJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoJ292ZXIgc2l6ZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJlc29sdmUoZmlsZS5wYXRoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFpbDogcmVzID0+IHJlamVjdChyZXMuZXJyTXNnKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbkNvbXBvbmVudCh7XHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgdmFsdWU6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRleHQ6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ+S4iuS8oOWbvueJhydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhlaWdodDoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnYXV0bydcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGNob29zZSgpIHtcclxuICAgICAgICAgICAgY2hvb3NlSW1hZ2UoKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4odmFsdWUgPT4gdGhpcy50cmlnZ2VyRXZlbnQoJ2lucHV0JywgeyB2YWx1ZSB9LCB7fSkpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2gobXNnID0+IHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IG1zZyxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=