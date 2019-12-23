"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("../../../utils/http");
var store_1 = require("../../../constant/store");
var util_1 = require("../../../utils/util");
Page({
    data: {
        fans: 10,
        activityCount: 10,
        isCollected: false,
        userId: '',
        disabled: false
    },
    onLoad: function (query) {
        var _this = this;
        http_1.request({
            url: '/api/merchant/getByUserId',
            data: { userId: query.userId }
        })
            .then(function (_a) {
            var data = _a.data;
            data = util_1.parseData(data);
            _this.setData(__assign({}, data, { disabled: query.userId === wx.getStorageSync(store_1.USER_NAME) }));
        })
            .catch(console.log);
    },
    collect: function () {
        var _this = this;
        var collect = this.data.isCollected;
        http_1.request({
            url: "/api/follow?targetId=" + this.data.userId,
            method: collect ? 'DELETE' : 'PUT'
        })
            .then(function () { return _this.setData({
            isCollected: !collect,
            fans: collect ? _this.data.fans - 1 : _this.data.fans + 1
        }); })
            .catch(console.log);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVzaW5lc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJidXNpbmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBR0EsNENBQThDO0FBQzlDLGlEQUFvRDtBQUNwRCw0Q0FBZ0Q7QUFFaEQsSUFBSSxDQUFDO0lBQ0QsSUFBSSxFQUFFO1FBSUYsSUFBSSxFQUFFLEVBQUU7UUFDUixhQUFhLEVBQUUsRUFBRTtRQUNqQixXQUFXLEVBQUUsS0FBSztRQUNsQixNQUFNLEVBQUUsRUFBRTtRQUNWLFFBQVEsRUFBRSxLQUFLO0tBQ2xCO0lBQ0QsTUFBTSxZQUFDLEtBQXVCO1FBQTlCLGlCQVVDO1FBVEcsY0FBTyxDQUFZO1lBQ2YsR0FBRyxFQUFFLDJCQUEyQjtZQUNoQyxJQUFJLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBQztTQUMvQixDQUFDO2FBQ0csSUFBSSxDQUFDLFVBQUMsRUFBTTtnQkFBTCxjQUFJO1lBQ1IsSUFBSSxHQUFHLGdCQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkIsS0FBSSxDQUFDLE9BQVEsY0FBSyxJQUFJLElBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxNQUFNLEtBQUssRUFBRSxDQUFDLGNBQWMsQ0FBQyxpQkFBUyxDQUFDLElBQUUsQ0FBQztRQUN0RixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDRCxPQUFPO1FBQVAsaUJBV0M7UUFWRyxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUN0QyxjQUFPLENBQUM7WUFDSixHQUFHLEVBQUUsMEJBQXdCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBUTtZQUMvQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUs7U0FDckMsQ0FBQzthQUNHLElBQUksQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQVEsQ0FBQztZQUN0QixXQUFXLEVBQUUsQ0FBQyxPQUFPO1lBQ3JCLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQztTQUMxRCxDQUFDLEVBSFUsQ0FHVixDQUFDO2FBQ0YsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOWVhuWutuS/oeaBr1xyXG4gKi9cclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2h0dHAnO1xyXG5pbXBvcnQgeyBVU0VSX05BTUUgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudC9zdG9yZSc7XHJcbmltcG9ydCB7IHBhcnNlRGF0YSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5cclxuUGFnZSh7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgLy8gaW1nOiAnL3B1YmxpYy9pbWFnZXMvMjMuanBnJyxcclxuICAgICAgICAvLyBkZXRhaWw6ICd0aGlzIGlzIGRldGFpbHMgJy5yZXBlYXQoMjApLnRyaW0oKSxcclxuICAgICAgICAvLyBuYW1lOiAndGhpcyBpcyBuYW1lJyxcclxuICAgICAgICBmYW5zOiAxMCxcclxuICAgICAgICBhY3Rpdml0eUNvdW50OiAxMCxcclxuICAgICAgICBpc0NvbGxlY3RlZDogZmFsc2UsXHJcbiAgICAgICAgdXNlcklkOiAnJyxcclxuICAgICAgICBkaXNhYmxlZDogZmFsc2VcclxuICAgIH0sXHJcbiAgICBvbkxvYWQocXVlcnk6IHt1c2VySWQ6IHN0cmluZ30pIHtcclxuICAgICAgICByZXF1ZXN0PElNZXJjaGFudD4oe1xyXG4gICAgICAgICAgICB1cmw6ICcvYXBpL21lcmNoYW50L2dldEJ5VXNlcklkJyxcclxuICAgICAgICAgICAgZGF0YToge3VzZXJJZDogcXVlcnkudXNlcklkfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHtcclxuICAgICAgICAgICAgICAgIGRhdGEgPSBwYXJzZURhdGEoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEhKHsuLi5kYXRhLCBkaXNhYmxlZDogcXVlcnkudXNlcklkID09PSB3eC5nZXRTdG9yYWdlU3luYyhVU0VSX05BTUUpfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XHJcbiAgICB9LFxyXG4gICAgY29sbGVjdCgpIHtcclxuICAgICAgICBjb25zdCBjb2xsZWN0ID0gdGhpcy5kYXRhLmlzQ29sbGVjdGVkO1xyXG4gICAgICAgIHJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6IGAvYXBpL2ZvbGxvdz90YXJnZXRJZD0ke3RoaXMuZGF0YS51c2VySWR9YCxcclxuICAgICAgICAgICAgbWV0aG9kOiBjb2xsZWN0ID8gJ0RFTEVURScgOiAnUFVUJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgICAgICAgaXNDb2xsZWN0ZWQ6ICFjb2xsZWN0LFxyXG4gICAgICAgICAgICAgICAgZmFuczogY29sbGVjdCA/IHRoaXMuZGF0YS5mYW5zIC0gMSA6IHRoaXMuZGF0YS5mYW5zICsgMVxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==