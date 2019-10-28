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
var http_1 = require("../../utils/http");
var store_1 = require("../../constant/store");
Page({
    data: {
        img: '/public/images/23.jpg',
        details: 'this is details '.repeat(20).trim(),
        name: 'this is name',
        fans: 10,
        activityCount: 10,
        isCollected: false,
        userId: '',
        disabled: false
    },
    onLoad: function (query) {
        query = query || {};
        console.log(query);
        this.setData(__assign({}, query, { disabled: query.userId === wx.getStorageSync(store_1.USER_NAME), isCollected: !!+query.isCollected }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVzaW5lc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJidXNpbmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBR0EseUNBQTJDO0FBQzNDLDhDQUFpRDtBQUVqRCxJQUFJLENBQUM7SUFDRCxJQUFJLEVBQUU7UUFDRixHQUFHLEVBQUUsdUJBQXVCO1FBQzVCLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFO1FBQzdDLElBQUksRUFBRSxjQUFjO1FBQ3BCLElBQUksRUFBRSxFQUFFO1FBQ1IsYUFBYSxFQUFFLEVBQUU7UUFDakIsV0FBVyxFQUFFLEtBQUs7UUFDbEIsTUFBTSxFQUFFLEVBQUU7UUFDVixRQUFRLEVBQUUsS0FBSztLQUNsQjtJQUNELE1BQU0sWUFBQyxLQUFrQjtRQUNyQixLQUFLLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFRLGNBQ04sS0FBSyxJQUNSLFFBQVEsRUFBRSxLQUFLLENBQUMsTUFBTSxLQUFLLEVBQUUsQ0FBQyxjQUFjLENBQUMsaUJBQVMsQ0FBQyxFQUN2RCxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsSUFDbkMsQ0FBQztJQUNQLENBQUM7SUFDRCxPQUFPO1FBQVAsaUJBV0M7UUFWRyxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUN0QyxjQUFPLENBQUM7WUFDSixHQUFHLEVBQUUsMEJBQXdCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBUTtZQUMvQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUs7U0FDckMsQ0FBQzthQUNHLElBQUksQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQVEsQ0FBQztZQUN0QixXQUFXLEVBQUUsQ0FBQyxPQUFPO1lBQ3JCLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQztTQUMxRCxDQUFDLEVBSFUsQ0FHVixDQUFDO2FBQ0YsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOWVhuWutuS/oeaBr1xyXG4gKi9cclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uLy4uL3V0aWxzL2h0dHAnO1xyXG5pbXBvcnQgeyBVU0VSX05BTUUgfSBmcm9tICcuLi8uLi9jb25zdGFudC9zdG9yZSc7XHJcblxyXG5QYWdlKHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBpbWc6ICcvcHVibGljL2ltYWdlcy8yMy5qcGcnLFxyXG4gICAgICAgIGRldGFpbHM6ICd0aGlzIGlzIGRldGFpbHMgJy5yZXBlYXQoMjApLnRyaW0oKSxcclxuICAgICAgICBuYW1lOiAndGhpcyBpcyBuYW1lJyxcclxuICAgICAgICBmYW5zOiAxMCxcclxuICAgICAgICBhY3Rpdml0eUNvdW50OiAxMCxcclxuICAgICAgICBpc0NvbGxlY3RlZDogZmFsc2UsXHJcbiAgICAgICAgdXNlcklkOiAnJyxcclxuICAgICAgICBkaXNhYmxlZDogZmFsc2VcclxuICAgIH0sXHJcbiAgICBvbkxvYWQocXVlcnk/OiBJQW55T2JqZWN0KSB7XHJcbiAgICAgICAgcXVlcnkgPSBxdWVyeSB8fCB7fTtcclxuICAgICAgICBjb25zb2xlLmxvZyhxdWVyeSk7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICAgIC4uLnF1ZXJ5LFxyXG4gICAgICAgICAgICBkaXNhYmxlZDogcXVlcnkudXNlcklkID09PSB3eC5nZXRTdG9yYWdlU3luYyhVU0VSX05BTUUpLFxyXG4gICAgICAgICAgICBpc0NvbGxlY3RlZDogISErcXVlcnkuaXNDb2xsZWN0ZWRcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBjb2xsZWN0KCkge1xyXG4gICAgICAgIGNvbnN0IGNvbGxlY3QgPSB0aGlzLmRhdGEuaXNDb2xsZWN0ZWQ7XHJcbiAgICAgICAgcmVxdWVzdCh7XHJcbiAgICAgICAgICAgIHVybDogYC9hcGkvZm9sbG93P3RhcmdldElkPSR7dGhpcy5kYXRhLnVzZXJJZH1gLFxyXG4gICAgICAgICAgICBtZXRob2Q6IGNvbGxlY3QgPyAnREVMRVRFJyA6ICdQVVQnXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICAgICAgICBpc0NvbGxlY3RlZDogIWNvbGxlY3QsXHJcbiAgICAgICAgICAgICAgICBmYW5zOiBjb2xsZWN0ID8gdGhpcy5kYXRhLmZhbnMgLSAxIDogdGhpcy5kYXRhLmZhbnMgKyAxXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xyXG4gICAgfVxyXG59KTtcclxuIl19