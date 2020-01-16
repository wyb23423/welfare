"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("../../../utils/http");
var util_1 = require("../../../utils/util");
Page({
    data: {
        count: {
            activity: 0,
            join: 0
        },
        activityList: [],
        peopleList: [],
        start: Date.now(),
        end: Date.now(),
        hasData: false
    },
    onLoad: function () {
        var _this = this;
        http_1.request({ url: '/api/activity/participation/volunteer' })
            .then(function (_a) {
            var data = _a.data;
            return _this.setData({ peopleList: data });
        })
            .catch(console.error);
    },
    onInput: function (_a) {
        var id = _a.target.id, value = _a.detail.value;
        var _b;
        this.setData((_b = {}, _b[id] = value, _b));
    },
    statistics: function () {
        var _this = this;
        var _a = this.data, end = _a.end, start = _a.start;
        if (end < start) {
            return wx.showToast({ title: '开始时间不能大于结束时间', icon: 'none' });
        }
        http_1.request({
            url: '/api/activity/statisticsTimeBucket',
            data: { start: start, end: end }
        })
            .then(function (_a) {
            var data = _a.data;
            var joinSet = new Set();
            data = data.map(function (v) {
                v.participators.forEach(function (p) { return joinSet.add(p.userId); });
                return util_1.parseData(v);
            });
            _this.setData({
                count: {
                    join: joinSet.size,
                    activity: data.length
                },
                activityList: data,
                hasData: true
            });
        })
            .catch(console.error);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGlzdGljcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN0YXRpc3RpY3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw0Q0FBOEM7QUFFOUMsNENBQWdEO0FBTWhELElBQUksQ0FBQztJQUNELElBQUksRUFBRTtRQUNGLEtBQUssRUFBRTtZQUNILFFBQVEsRUFBRSxDQUFDO1lBQ1gsSUFBSSxFQUFFLENBQUM7U0FDVjtRQUNELFlBQVksRUFBd0IsRUFBRTtRQUN0QyxVQUFVLEVBQUUsRUFBRTtRQUNkLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO1FBQ2pCLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO1FBQ2YsT0FBTyxFQUFFLEtBQUs7S0FDakI7SUFDRCxNQUFNO1FBQU4saUJBSUM7UUFIRyxjQUFPLENBQVcsRUFBRSxHQUFHLEVBQUUsdUNBQXVDLEVBQUMsQ0FBQzthQUM3RCxJQUFJLENBQUMsVUFBQyxFQUFNO2dCQUFMLGNBQUk7WUFBTSxPQUFBLEtBQUksQ0FBQyxPQUFRLENBQUMsRUFBQyxVQUFVLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFBakMsQ0FBaUMsQ0FBQzthQUNuRCxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDRCxPQUFPLFlBQUMsRUFBMEM7WUFBaEMsaUJBQUUsRUFBWSx1QkFBSzs7UUFDakMsSUFBSSxDQUFDLE9BQVEsV0FBRSxHQUFDLEVBQUUsSUFBRyxLQUFLLE1BQUUsQ0FBQztJQUNqQyxDQUFDO0lBQ0QsVUFBVTtRQUFWLGlCQTBCQztRQXpCUyxJQUFBLGNBQXdCLEVBQXZCLFlBQUcsRUFBRSxnQkFBa0IsQ0FBQztRQUMvQixJQUFHLEdBQUcsR0FBRyxLQUFLLEVBQUU7WUFDWixPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBQyxLQUFLLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDO1NBQzlEO1FBRUQsY0FBTyxDQUF1QjtZQUMxQixHQUFHLEVBQUUsb0NBQW9DO1lBQ3pDLElBQUksRUFBRSxFQUFFLEtBQUssT0FBQSxFQUFFLEdBQUcsS0FBQSxFQUFFO1NBQ3ZCLENBQUM7YUFDRCxJQUFJLENBQUMsVUFBQyxFQUFNO2dCQUFMLGNBQUk7WUFDUixJQUFNLE9BQU8sR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQzFCLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQztnQkFDYixDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFyQixDQUFxQixDQUFDLENBQUM7Z0JBQ3BELE9BQU8sZ0JBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QixDQUFDLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1YsS0FBSyxFQUFFO29CQUNILElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtvQkFDbEIsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNO2lCQUN4QjtnQkFDRCxZQUFZLEVBQUUsSUFBSTtnQkFDbEIsT0FBTyxFQUFFLElBQUk7YUFDaEIsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2h0dHAnO1xyXG5pbXBvcnQgeyBFbkluZm8gfSBmcm9tICcuLi8uLi9wZXJzb24vYWN0aXZpdHkvc2lnbi9zaWduJztcclxuaW1wb3J0IHsgcGFyc2VEYXRhIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdXRpbCc7XHJcblxyXG5pbnRlcmZhY2UgQWN0aXZpdHlzdGF0aXN0aWNzIGV4dGVuZHMgSUFjdGl2ZSB7XHJcbiAgICBwYXJ0aWNpcGF0b3JzOiBFbkluZm9bXTtcclxufVxyXG5cclxuUGFnZSh7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgY291bnQ6IHtcclxuICAgICAgICAgICAgYWN0aXZpdHk6IDAsXHJcbiAgICAgICAgICAgIGpvaW46IDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFjdGl2aXR5TGlzdDogPEFjdGl2aXR5c3RhdGlzdGljc1tdPltdLFxyXG4gICAgICAgIHBlb3BsZUxpc3Q6IFtdLFxyXG4gICAgICAgIHN0YXJ0OiBEYXRlLm5vdygpLFxyXG4gICAgICAgIGVuZDogRGF0ZS5ub3coKSxcclxuICAgICAgICBoYXNEYXRhOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICByZXF1ZXN0PEVuSW5mb1tdPih7IHVybDogJy9hcGkvYWN0aXZpdHkvcGFydGljaXBhdGlvbi92b2x1bnRlZXInfSlcclxuICAgICAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4gdGhpcy5zZXREYXRhISh7cGVvcGxlTGlzdDogZGF0YX0pKVxyXG4gICAgICAgICAgICAuY2F0Y2goY29uc29sZS5lcnJvcik7XHJcbiAgICB9LFxyXG4gICAgb25JbnB1dCh7dGFyZ2V0OiB7aWR9LCBkZXRhaWw6IHt2YWx1ZX19OiBCYXNlRXZlbnQpIHtcclxuICAgICAgICB0aGlzLnNldERhdGEhKHtbaWRdOiB2YWx1ZX0pO1xyXG4gICAgfSxcclxuICAgIHN0YXRpc3RpY3MoKSB7XHJcbiAgICAgICAgY29uc3Qge2VuZCwgc3RhcnR9ID0gdGhpcy5kYXRhO1xyXG4gICAgICAgIGlmKGVuZCA8IHN0YXJ0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3eC5zaG93VG9hc3Qoe3RpdGxlOiAn5byA5aeL5pe26Ze05LiN6IO95aSn5LqO57uT5p2f5pe26Ze0JywgaWNvbjogJ25vbmUnfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXF1ZXN0PEFjdGl2aXR5c3RhdGlzdGljc1tdPih7XHJcbiAgICAgICAgICAgIHVybDogJy9hcGkvYWN0aXZpdHkvc3RhdGlzdGljc1RpbWVCdWNrZXQnLFxyXG4gICAgICAgICAgICBkYXRhOiB7IHN0YXJ0LCBlbmQgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBqb2luU2V0ID0gbmV3IFNldCgpO1xyXG4gICAgICAgICAgICBkYXRhID0gZGF0YS5tYXAodiA9PiB7XHJcbiAgICAgICAgICAgICAgICB2LnBhcnRpY2lwYXRvcnMuZm9yRWFjaChwID0+IGpvaW5TZXQuYWRkKHAudXNlcklkKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VEYXRhKHYpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICAgICAgICBjb3VudDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGpvaW46IGpvaW5TZXQuc2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpdml0eTogZGF0YS5sZW5ndGhcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBhY3Rpdml0eUxpc3Q6IGRhdGEsXHJcbiAgICAgICAgICAgICAgICBoYXNEYXRhOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xyXG4gICAgfVxyXG59KTtcclxuIl19