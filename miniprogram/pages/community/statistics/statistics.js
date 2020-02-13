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
    },
    paint: function (_a) {
        var _this = this;
        var index = _a.currentTarget.dataset.index;
        var _b;
        var key = "activityList[" + index + "].loading";
        this.setData((_b = {}, _b[key] = true, _b));
        http_1.downloadFile({ url: '/api/activity/download?id=' + this.data.activityList[index].id })
            .then(function (_a) {
            var tempFilePath = _a.tempFilePath;
            return http_1.saveFile(tempFilePath, 'xlsx');
        })
            .catch(console.log)
            .finally(function () {
            var _a;
            return _this.setData((_a = {}, _a[key] = false, _a));
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGlzdGljcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN0YXRpc3RpY3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw0Q0FBc0U7QUFFdEUsNENBQWdEO0FBTWhELElBQUksQ0FBQztJQUNELElBQUksRUFBRTtRQUNGLEtBQUssRUFBRTtZQUNILFFBQVEsRUFBRSxDQUFDO1lBQ1gsSUFBSSxFQUFFLENBQUM7U0FDVjtRQUNELFlBQVksRUFBd0IsRUFBRTtRQUN0QyxVQUFVLEVBQUUsRUFBRTtRQUNkLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO1FBQ2pCLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO1FBQ2YsT0FBTyxFQUFFLEtBQUs7S0FDakI7SUFDRCxNQUFNO1FBQU4saUJBSUM7UUFIRyxjQUFPLENBQVcsRUFBRSxHQUFHLEVBQUUsdUNBQXVDLEVBQUMsQ0FBQzthQUM3RCxJQUFJLENBQUMsVUFBQyxFQUFNO2dCQUFMLGNBQUk7WUFBTSxPQUFBLEtBQUksQ0FBQyxPQUFRLENBQUMsRUFBQyxVQUFVLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFBakMsQ0FBaUMsQ0FBQzthQUNuRCxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDRCxPQUFPLFlBQUMsRUFBMEM7WUFBaEMsaUJBQUUsRUFBWSx1QkFBSzs7UUFDakMsSUFBSSxDQUFDLE9BQVEsV0FBRSxHQUFDLEVBQUUsSUFBRyxLQUFLLE1BQUUsQ0FBQztJQUNqQyxDQUFDO0lBQ0QsVUFBVTtRQUFWLGlCQTBCQztRQXpCUyxJQUFBLGNBQXdCLEVBQXZCLFlBQUcsRUFBRSxnQkFBa0IsQ0FBQztRQUMvQixJQUFHLEdBQUcsR0FBRyxLQUFLLEVBQUU7WUFDWixPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBQyxLQUFLLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDO1NBQzlEO1FBRUQsY0FBTyxDQUF1QjtZQUMxQixHQUFHLEVBQUUsb0NBQW9DO1lBQ3pDLElBQUksRUFBRSxFQUFFLEtBQUssT0FBQSxFQUFFLEdBQUcsS0FBQSxFQUFFO1NBQ3ZCLENBQUM7YUFDRCxJQUFJLENBQUMsVUFBQyxFQUFNO2dCQUFMLGNBQUk7WUFDUixJQUFNLE9BQU8sR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQzFCLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQztnQkFDYixDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFyQixDQUFxQixDQUFDLENBQUM7Z0JBQ3BELE9BQU8sZ0JBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QixDQUFDLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1YsS0FBSyxFQUFFO29CQUNILElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtvQkFDbEIsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNO2lCQUN4QjtnQkFDRCxZQUFZLEVBQUUsSUFBSTtnQkFDbEIsT0FBTyxFQUFFLElBQUk7YUFDaEIsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsS0FBSyxZQUFDLEVBQStEO1FBQXJFLGlCQVFDO1lBUmdDLHNDQUFLOztRQUNsQyxJQUFNLEdBQUcsR0FBRyxrQkFBZ0IsS0FBSyxjQUFXLENBQUM7UUFFN0MsSUFBSSxDQUFDLE9BQVEsQ0FBQyxVQUFFLEdBQUMsR0FBRyxJQUFHLElBQUksS0FBRSxDQUFDLENBQUM7UUFDL0IsbUJBQVksQ0FBQyxFQUFDLEdBQUcsRUFBRSw0QkFBNEIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQzthQUMvRSxJQUFJLENBQUMsVUFBQyxFQUFjO2dCQUFiLDhCQUFZO1lBQU0sT0FBQSxlQUFRLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQztRQUE5QixDQUE4QixDQUFDO2FBQ3hELEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO2FBQ2xCLE9BQU8sQ0FBQzs7WUFBTSxPQUFBLEtBQUksQ0FBQyxPQUFRLENBQUMsVUFBRSxHQUFDLEdBQUcsSUFBRyxLQUFLLEtBQUUsQ0FBQztRQUEvQixDQUErQixDQUFDLENBQUM7SUFDeEQsQ0FBQztDQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlcXVlc3QsIGRvd25sb2FkRmlsZSwgc2F2ZUZpbGUgfSBmcm9tICcuLi8uLi8uLi91dGlscy9odHRwJztcclxuaW1wb3J0IHsgRW5JbmZvIH0gZnJvbSAnLi4vLi4vcGVyc29uL2FjdGl2aXR5L3NpZ24vc2lnbic7XHJcbmltcG9ydCB7IHBhcnNlRGF0YSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5cclxuaW50ZXJmYWNlIEFjdGl2aXR5c3RhdGlzdGljcyBleHRlbmRzIElBY3RpdmUge1xyXG4gICAgcGFydGljaXBhdG9yczogRW5JbmZvW107XHJcbn1cclxuXHJcblBhZ2Uoe1xyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGNvdW50OiB7XHJcbiAgICAgICAgICAgIGFjdGl2aXR5OiAwLFxyXG4gICAgICAgICAgICBqb2luOiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhY3Rpdml0eUxpc3Q6IDxBY3Rpdml0eXN0YXRpc3RpY3NbXT5bXSxcclxuICAgICAgICBwZW9wbGVMaXN0OiBbXSxcclxuICAgICAgICBzdGFydDogRGF0ZS5ub3coKSxcclxuICAgICAgICBlbmQ6IERhdGUubm93KCksXHJcbiAgICAgICAgaGFzRGF0YTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgcmVxdWVzdDxFbkluZm9bXT4oeyB1cmw6ICcvYXBpL2FjdGl2aXR5L3BhcnRpY2lwYXRpb24vdm9sdW50ZWVyJ30pXHJcbiAgICAgICAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHRoaXMuc2V0RGF0YSEoe3Blb3BsZUxpc3Q6IGRhdGF9KSlcclxuICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xyXG4gICAgfSxcclxuICAgIG9uSW5wdXQoe3RhcmdldDoge2lkfSwgZGV0YWlsOiB7dmFsdWV9fTogQmFzZUV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhISh7W2lkXTogdmFsdWV9KTtcclxuICAgIH0sXHJcbiAgICBzdGF0aXN0aWNzKCkge1xyXG4gICAgICAgIGNvbnN0IHtlbmQsIHN0YXJ0fSA9IHRoaXMuZGF0YTtcclxuICAgICAgICBpZihlbmQgPCBzdGFydCkge1xyXG4gICAgICAgICAgICByZXR1cm4gd3guc2hvd1RvYXN0KHt0aXRsZTogJ+W8gOWni+aXtumXtOS4jeiDveWkp+S6jue7k+adn+aXtumXtCcsIGljb246ICdub25lJ30pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVxdWVzdDxBY3Rpdml0eXN0YXRpc3RpY3NbXT4oe1xyXG4gICAgICAgICAgICB1cmw6ICcvYXBpL2FjdGl2aXR5L3N0YXRpc3RpY3NUaW1lQnVja2V0JyxcclxuICAgICAgICAgICAgZGF0YTogeyBzdGFydCwgZW5kIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgam9pblNldCA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgZGF0YSA9IGRhdGEubWFwKHYgPT4ge1xyXG4gICAgICAgICAgICAgICAgdi5wYXJ0aWNpcGF0b3JzLmZvckVhY2gocCA9PiBqb2luU2V0LmFkZChwLnVzZXJJZCkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlRGF0YSh2KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgICAgICAgY291bnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBqb2luOiBqb2luU2V0LnNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZpdHk6IGRhdGEubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYWN0aXZpdHlMaXN0OiBkYXRhLFxyXG4gICAgICAgICAgICAgICAgaGFzRGF0YTogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChjb25zb2xlLmVycm9yKTtcclxuICAgIH0sXHJcbiAgICBwYWludCh7Y3VycmVudFRhcmdldDoge2RhdGFzZXQ6IHtpbmRleH19fTogQmFzZUV2ZW50PHtpbmRleDogbnVtYmVyfT4pIHtcclxuICAgICAgICBjb25zdCBrZXkgPSBgYWN0aXZpdHlMaXN0WyR7aW5kZXh9XS5sb2FkaW5nYDtcclxuXHJcbiAgICAgICAgdGhpcy5zZXREYXRhISgoe1trZXldOiB0cnVlfSkpO1xyXG4gICAgICAgIGRvd25sb2FkRmlsZSh7dXJsOiAnL2FwaS9hY3Rpdml0eS9kb3dubG9hZD9pZD0nICsgdGhpcy5kYXRhLmFjdGl2aXR5TGlzdFtpbmRleF0uaWR9KVxyXG4gICAgICAgICAgICAudGhlbigoe3RlbXBGaWxlUGF0aH0pID0+IHNhdmVGaWxlKHRlbXBGaWxlUGF0aCwgJ3hsc3gnKSlcclxuICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKVxyXG4gICAgICAgICAgICAuZmluYWxseSgoKSA9PiB0aGlzLnNldERhdGEhKCh7W2tleV06IGZhbHNlfSkpKTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==