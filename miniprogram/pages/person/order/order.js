"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("../../../utils/http");
Page({
    data: {
        list: [],
        isShow: false,
        index: 0
    },
    close: function () {
        this.setData({ isShow: false });
    },
    onShow: function () {
        var _this = this;
        http_1.request({ url: '/api/commodity/participation/merchant/list' })
            .then(function (_a) {
            var list = _a.data.list;
            return _this.setData({ list: list.map(function (v) {
                    v.sign = v.orders.length;
                    v.img += '?thumb=true';
                    return v;
                }) });
        })
            .catch(console.log);
    },
    openConfirm: function (_a) {
        var index = _a.target.dataset.index;
        this.setData({ isShow: true, index: index });
    },
    doConfirm: function (e) {
        var _this = this;
        var flag = !!e.target.dataset.ok;
        var index = e.currentTarget.dataset.index;
        var orders = this.data.list[this.data.index].orders;
        wx.showModal({
            title: orders[index].userId,
            content: (!flag ? '拒绝' : '确认') + '订单?',
            success: function (_a) {
                var confirm = _a.confirm;
                return confirm && _this._confirm(flag, orders, index);
            }
        });
    },
    _confirm: function (flag, orders, index) {
        http_1.request({
            url: '/api/commodity/participation/confirm',
            method: 'POST',
            data: {
                commodityId: orders[index].id,
                confirm: flag
            }
        })
            .then(this.callback.bind(this, orders, index))
            .catch(console.log);
    },
    callback: function (orders, index) {
        wx.showToast({ title: '操作成功' });
        orders.splice(index, 1);
        if (!orders.length) {
            this.data.isShow = false;
            this.data.list.splice(this.data.index, 1);
        }
        this.setData(this.data);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvcmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRDQUE4QztBQW1COUMsSUFBSSxDQUFDO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFxQixFQUFFO1FBQzNCLE1BQU0sRUFBRSxLQUFLO1FBQ2IsS0FBSyxFQUFFLENBQUM7S0FDWDtJQUNELEtBQUs7UUFDRCxJQUFJLENBQUMsT0FBUSxDQUFDLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNELE1BQU07UUFBTixpQkFTQztRQVJHLGNBQU8sQ0FBVyxFQUFDLEdBQUcsRUFBRSw0Q0FBNEMsRUFBQyxDQUFDO2FBQ2pFLElBQUksQ0FBQyxVQUFDLEVBQWM7Z0JBQU4sbUJBQUk7WUFBTyxPQUFBLEtBQUksQ0FBQyxPQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUM7b0JBQ3JELENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7b0JBQ3pCLENBQUMsQ0FBQyxHQUFHLElBQUksYUFBYSxDQUFDO29CQUV2QixPQUFPLENBQUMsQ0FBQztnQkFDYixDQUFDLENBQUMsRUFBQyxDQUFDO1FBTHNCLENBS3RCLENBQUM7YUFDSixLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDRCxXQUFXLFlBQUMsRUFBd0Q7WUFBcEMsK0JBQUs7UUFDakMsSUFBSSxDQUFDLE9BQVEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxPQUFBLEVBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFDRCxTQUFTLFlBQUMsQ0FBNEM7UUFBdEQsaUJBV0M7UUFWRyxJQUFNLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1FBQ25DLElBQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUU1QyxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUV0RCxFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ1QsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNO1lBQzNCLE9BQU8sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUs7WUFDdEMsT0FBTyxFQUFFLFVBQUMsRUFBUztvQkFBUixvQkFBTztnQkFBTSxPQUFBLE9BQU8sSUFBSSxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDO1lBQTdDLENBQTZDO1NBQ3hFLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxRQUFRLFlBQUMsSUFBYSxFQUFFLE1BQWdCLEVBQUUsS0FBYTtRQUNuRCxjQUFPLENBQUM7WUFDSixHQUFHLEVBQUUsc0NBQXNDO1lBQzNDLE1BQU0sRUFBRSxNQUFNO1lBQ2QsSUFBSSxFQUFFO2dCQUNGLFdBQVcsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDN0IsT0FBTyxFQUFFLElBQUk7YUFDaEI7U0FDSixDQUFDO2FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDN0MsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsUUFBUSxZQUFDLE1BQWdCLEVBQUUsS0FBYTtRQUNwQyxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDL0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFeEIsSUFBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsSUFBSSxDQUFDLE9BQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztDQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi91dGlscy9odHRwJztcclxuXHJcbmludGVyZmFjZSBJR29vZHNXaXRoT3JkZXIge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIGltZzogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgc2lnbjogbnVtYmVyO1xyXG4gICAgc2l6ZTogbnVtYmVyO1xyXG4gICAgb3JkZXJzOiBJT3JkZXJbXTtcclxufVxyXG5cclxuaW50ZXJmYWNlIElPcmRlciB7XHJcbiAgICBjb21tb2RpdHlJZDogbnVtYmVyO1xyXG4gICAgY3JlYXRlZDogbnVtYmVyO1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIHN0YXR1czogbnVtYmVyO1xyXG4gICAgdXNlcklkOiBzdHJpbmc7XHJcbn1cclxuXHJcblBhZ2Uoe1xyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGxpc3Q6IDxJR29vZHNXaXRoT3JkZXJbXT5bXSxcclxuICAgICAgICBpc1Nob3c6IGZhbHNlLFxyXG4gICAgICAgIGluZGV4OiAwXHJcbiAgICB9LFxyXG4gICAgY2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhISh7aXNTaG93OiBmYWxzZX0pO1xyXG4gICAgfSxcclxuICAgIG9uU2hvdygpIHtcclxuICAgICAgICByZXF1ZXN0PFBhZ2VEYXRhPih7dXJsOiAnL2FwaS9jb21tb2RpdHkvcGFydGljaXBhdGlvbi9tZXJjaGFudC9saXN0J30pXHJcbiAgICAgICAgICAgIC50aGVuKCh7ZGF0YToge2xpc3R9fSkgPT4gdGhpcy5zZXREYXRhISh7bGlzdDogbGlzdC5tYXAodiA9PiB7XHJcbiAgICAgICAgICAgICAgICB2LnNpZ24gPSB2Lm9yZGVycy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICB2LmltZyArPSAnP3RodW1iPXRydWUnO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB2O1xyXG4gICAgICAgICAgICB9KX0pKVxyXG4gICAgICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xyXG4gICAgfSxcclxuICAgIG9wZW5Db25maXJtKHt0YXJnZXQ6IHtkYXRhc2V0OiB7aW5kZXh9fX06IEJhc2VFdmVudDx7aW5kZXg6IG51bWJlcn0+KSB7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhISh7IGlzU2hvdzogdHJ1ZSwgaW5kZXh9KTtcclxuICAgIH0sXHJcbiAgICBkb0NvbmZpcm0oZTogQmFzZUV2ZW50PHtvaz86IHN0cmluZ30sIHtpbmRleDogbnVtYmVyfT4pIHtcclxuICAgICAgICBjb25zdCBmbGFnID0gISFlLnRhcmdldC5kYXRhc2V0Lm9rO1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XHJcblxyXG4gICAgICAgIGNvbnN0IG9yZGVycyA9IHRoaXMuZGF0YS5saXN0W3RoaXMuZGF0YS5pbmRleF0ub3JkZXJzO1xyXG5cclxuICAgICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICB0aXRsZTogb3JkZXJzW2luZGV4XS51c2VySWQsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICghZmxhZyA/ICfmi5Lnu50nIDogJ+ehruiupCcpICsgJ+iuouWNlT8nLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiAoe2NvbmZpcm19KSA9PiBjb25maXJtICYmIHRoaXMuX2NvbmZpcm0oZmxhZywgb3JkZXJzLCBpbmRleClcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBfY29uZmlybShmbGFnOiBib29sZWFuLCBvcmRlcnM6IElPcmRlcltdLCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgcmVxdWVzdCh7XHJcbiAgICAgICAgICAgIHVybDogJy9hcGkvY29tbW9kaXR5L3BhcnRpY2lwYXRpb24vY29uZmlybScsXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBjb21tb2RpdHlJZDogb3JkZXJzW2luZGV4XS5pZCxcclxuICAgICAgICAgICAgICAgIGNvbmZpcm06IGZsYWdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4odGhpcy5jYWxsYmFjay5iaW5kKHRoaXMsIG9yZGVycywgaW5kZXgpKVxyXG4gICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XHJcbiAgICB9LFxyXG4gICAgY2FsbGJhY2sob3JkZXJzOiBJT3JkZXJbXSwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHd4LnNob3dUb2FzdCh7dGl0bGU6ICfmk43kvZzmiJDlip8nIH0pO1xyXG4gICAgICAgIG9yZGVycy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cclxuICAgICAgICBpZighb3JkZXJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuaXNTaG93ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5saXN0LnNwbGljZSh0aGlzLmRhdGEuaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldERhdGEhKHRoaXMuZGF0YSk7XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=