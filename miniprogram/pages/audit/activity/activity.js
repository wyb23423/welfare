"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("../../../utils/http");
Component({
    data: {
        url: '/api/activity/auditList',
        dataConfig: {
            currentPage: 'page',
            pageSize: 'rows'
        },
        list: []
    },
    attached: function () {
        var _this = this;
        http_1.request({ url: this.data.url })
            .then(function (_a) {
            var data = _a.data;
            return _this.setData({ list: data });
        })
            .catch(console.log);
    },
    methods: {
        doAuit: function (e) {
            var _this = this;
            var isOk = !!e.target.dataset.ok;
            var index = e.currentTarget.dataset.index;
            var list = this.data.list;
            wx.showModal({
                content: isOk ? '审核通过？' : '审核不通过？',
                success: function (_a) {
                    var confirm = _a.confirm;
                    if (!confirm) {
                        return;
                    }
                    http_1.request({
                        url: '/api/activity/audit',
                        data: {
                            flag: isOk,
                            activityId: list[index].id
                        }
                    })
                        .then(function () {
                        wx.showToast({ title: '操作成功' });
                        list.splice(index, 1);
                        _this.setData({ list: list });
                    })
                        .catch(console.log);
                }
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY3Rpdml0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLDRDQUE4QztBQUU5QyxTQUFTLENBQUM7SUFFTixJQUFJLEVBQUM7UUFDRCxHQUFHLEVBQUUseUJBQXlCO1FBQzlCLFVBQVUsRUFBRTtZQUNSLFdBQVcsRUFBRSxNQUFNO1lBQ25CLFFBQVEsRUFBRSxNQUFNO1NBQ25CO1FBQ0QsSUFBSSxFQUFhLEVBQUU7S0FDdEI7SUFDRCxRQUFRO1FBQVIsaUJBSUM7UUFIRyxjQUFPLENBQVksRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQzthQUNyQyxJQUFJLENBQUMsVUFBQyxFQUFNO2dCQUFMLGNBQUk7WUFBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFBMUIsQ0FBMEIsQ0FBQzthQUM1QyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDRCxPQUFPLEVBQUU7UUFDTCxNQUFNLFlBQUMsQ0FBNEM7WUFBbkQsaUJBMkJDO1lBMUJHLElBQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDbkMsSUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQzVDLElBQU0sSUFBSSxHQUFjLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBRXZDLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0JBQ1QsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRO2dCQUNsQyxPQUFPLEVBQUUsVUFBQyxFQUFTO3dCQUFSLG9CQUFPO29CQUNkLElBQUcsQ0FBQyxPQUFPLEVBQUU7d0JBQ1QsT0FBTztxQkFDVjtvQkFFRCxjQUFPLENBQUM7d0JBQ0osR0FBRyxFQUFFLHFCQUFxQjt3QkFDMUIsSUFBSSxFQUFFOzRCQUNGLElBQUksRUFBRSxJQUFJOzRCQUNWLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTt5QkFDN0I7cUJBQ0osQ0FBQzt5QkFDRyxJQUFJLENBQUM7d0JBQ0YsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDO3dCQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDdEIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxFQUFDLElBQUksTUFBQSxFQUFDLENBQUMsQ0FBQztvQkFDekIsQ0FBQyxDQUFDO3lCQUNELEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzVCLENBQUM7YUFDSixDQUFDLENBQUM7UUFDUCxDQUFDO0tBQ0o7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5a6h5qC45ZWG5ZOBXHJcbiAqL1xyXG4vLyBpbXBvcnQgUGFnZVF1ZXJ5LCB7IExpc3RDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9iZWhhdmlvci9wYWdlX3F1ZXJ5JztcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2h0dHAnO1xyXG5cclxuQ29tcG9uZW50KHtcclxuICAgIC8vIGJlaGF2aW9yczogW1BhZ2VRdWVyeV0sXHJcbiAgICBkYXRhOntcclxuICAgICAgICB1cmw6ICcvYXBpL2FjdGl2aXR5L2F1ZGl0TGlzdCcsXHJcbiAgICAgICAgZGF0YUNvbmZpZzoge1xyXG4gICAgICAgICAgICBjdXJyZW50UGFnZTogJ3BhZ2UnLFxyXG4gICAgICAgICAgICBwYWdlU2l6ZTogJ3Jvd3MnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsaXN0OiA8SUFjdGl2ZVtdPltdXHJcbiAgICB9LFxyXG4gICAgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgcmVxdWVzdDxJQWN0aXZlW10+KHsgdXJsOiB0aGlzLmRhdGEudXJsIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHRoaXMuc2V0RGF0YSh7bGlzdDogZGF0YX0pKVxyXG4gICAgICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBkb0F1aXQoZTogQmFzZUV2ZW50PHtvaz86IHN0cmluZ30sIHtpbmRleDogbnVtYmVyfT4pIHtcclxuICAgICAgICAgICAgY29uc3QgaXNPayA9ICEhZS50YXJnZXQuZGF0YXNldC5vaztcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcclxuICAgICAgICAgICAgY29uc3QgbGlzdDogSUFjdGl2ZVtdID0gdGhpcy5kYXRhLmxpc3Q7XHJcblxyXG4gICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogaXNPayA/ICflrqHmoLjpgJrov4fvvJ8nIDogJ+WuoeaguOS4jemAmui/h++8nycsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAoe2NvbmZpcm19KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIWNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9hcGkvYWN0aXZpdHkvYXVkaXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGFnOiBpc09rLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZpdHlJZDogbGlzdFtpbmRleF0uaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7dGl0bGU6ICfmk43kvZzmiJDlip8nfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe2xpc3R9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19