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
        this.setData(__assign({}, query, { disabled: query.userId === wx.getStorageSync('username'), isCollected: !!+query.isCollected }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVzaW5lc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJidXNpbmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBR0EseUNBQTJDO0FBRTNDLElBQUksQ0FBQztJQUNELElBQUksRUFBRTtRQUNGLEdBQUcsRUFBRSx1QkFBdUI7UUFDNUIsT0FBTyxFQUFFLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUU7UUFDN0MsSUFBSSxFQUFFLGNBQWM7UUFDcEIsSUFBSSxFQUFFLEVBQUU7UUFDUixhQUFhLEVBQUUsRUFBRTtRQUNqQixXQUFXLEVBQUUsS0FBSztRQUNsQixNQUFNLEVBQUUsRUFBRTtRQUNWLFFBQVEsRUFBRSxLQUFLO0tBQ2xCO0lBQ0QsTUFBTSxZQUFDLEtBQWtCO1FBQ3JCLEtBQUssR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQVEsY0FDTixLQUFLLElBQ1IsUUFBUSxFQUFFLEtBQUssQ0FBQyxNQUFNLEtBQUssRUFBRSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsRUFDeEQsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLElBQ25DLENBQUM7SUFDUCxDQUFDO0lBQ0QsT0FBTztRQUFQLGlCQVdDO1FBVkcsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDdEMsY0FBTyxDQUFDO1lBQ0osR0FBRyxFQUFFLDBCQUF3QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQVE7WUFDL0MsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLO1NBQ3JDLENBQUM7YUFDRyxJQUFJLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFRLENBQUM7WUFDdEIsV0FBVyxFQUFFLENBQUMsT0FBTztZQUNyQixJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUM7U0FDMUQsQ0FBQyxFQUhVLENBR1YsQ0FBQzthQUNGLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDllYblrrbkv6Hmga9cclxuICovXHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi91dGlscy9odHRwJztcclxuXHJcblBhZ2Uoe1xyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGltZzogJy9wdWJsaWMvaW1hZ2VzLzIzLmpwZycsXHJcbiAgICAgICAgZGV0YWlsczogJ3RoaXMgaXMgZGV0YWlscyAnLnJlcGVhdCgyMCkudHJpbSgpLFxyXG4gICAgICAgIG5hbWU6ICd0aGlzIGlzIG5hbWUnLFxyXG4gICAgICAgIGZhbnM6IDEwLFxyXG4gICAgICAgIGFjdGl2aXR5Q291bnQ6IDEwLFxyXG4gICAgICAgIGlzQ29sbGVjdGVkOiBmYWxzZSxcclxuICAgICAgICB1c2VySWQ6ICcnLFxyXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIG9uTG9hZChxdWVyeT86IElBbnlPYmplY3QpIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5IHx8IHt9O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHF1ZXJ5KTtcclxuICAgICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgICAgLi4ucXVlcnksXHJcbiAgICAgICAgICAgIGRpc2FibGVkOiBxdWVyeS51c2VySWQgPT09IHd4LmdldFN0b3JhZ2VTeW5jKCd1c2VybmFtZScpLFxyXG4gICAgICAgICAgICBpc0NvbGxlY3RlZDogISErcXVlcnkuaXNDb2xsZWN0ZWRcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBjb2xsZWN0KCkge1xyXG4gICAgICAgIGNvbnN0IGNvbGxlY3QgPSB0aGlzLmRhdGEuaXNDb2xsZWN0ZWQ7XHJcbiAgICAgICAgcmVxdWVzdCh7XHJcbiAgICAgICAgICAgIHVybDogYC9hcGkvZm9sbG93P3RhcmdldElkPSR7dGhpcy5kYXRhLnVzZXJJZH1gLFxyXG4gICAgICAgICAgICBtZXRob2Q6IGNvbGxlY3QgPyAnREVMRVRFJyA6ICdQVVQnXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICAgICAgICBpc0NvbGxlY3RlZDogIWNvbGxlY3QsXHJcbiAgICAgICAgICAgICAgICBmYW5zOiBjb2xsZWN0ID8gdGhpcy5kYXRhLmZhbnMgLSAxIDogdGhpcy5kYXRhLmZhbnMgKyAxXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xyXG4gICAgfVxyXG59KTtcclxuIl19