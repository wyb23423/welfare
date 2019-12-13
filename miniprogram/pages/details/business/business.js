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
        img: '/public/images/23.jpg',
        detail: 'this is details '.repeat(20).trim(),
        name: 'this is name',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVzaW5lc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJidXNpbmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBR0EsNENBQThDO0FBQzlDLGlEQUFvRDtBQUNwRCw0Q0FBZ0Q7QUFFaEQsSUFBSSxDQUFDO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsR0FBRyxFQUFFLHVCQUF1QjtRQUM1QixNQUFNLEVBQUUsa0JBQWtCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRTtRQUM1QyxJQUFJLEVBQUUsY0FBYztRQUNwQixJQUFJLEVBQUUsRUFBRTtRQUNSLGFBQWEsRUFBRSxFQUFFO1FBQ2pCLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLE1BQU0sRUFBRSxFQUFFO1FBQ1YsUUFBUSxFQUFFLEtBQUs7S0FDbEI7SUFDRCxNQUFNLFlBQUMsS0FBdUI7UUFBOUIsaUJBVUM7UUFURyxjQUFPLENBQVk7WUFDZixHQUFHLEVBQUUsMkJBQTJCO1lBQ2hDLElBQUksRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxFQUFDO1NBQy9CLENBQUM7YUFDRyxJQUFJLENBQUMsVUFBQyxFQUFNO2dCQUFMLGNBQUk7WUFDUixJQUFJLEdBQUcsZ0JBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QixLQUFJLENBQUMsT0FBUSxjQUFLLElBQUksSUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLE1BQU0sS0FBSyxFQUFFLENBQUMsY0FBYyxDQUFDLGlCQUFTLENBQUMsSUFBRSxDQUFDO1FBQ3RGLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNELE9BQU87UUFBUCxpQkFXQztRQVZHLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3RDLGNBQU8sQ0FBQztZQUNKLEdBQUcsRUFBRSwwQkFBd0IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFRO1lBQy9DLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSztTQUNyQyxDQUFDO2FBQ0csSUFBSSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsT0FBUSxDQUFDO1lBQ3RCLFdBQVcsRUFBRSxDQUFDLE9BQU87WUFDckIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDO1NBQzFELENBQUMsRUFIVSxDQUdWLENBQUM7YUFDRixLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5ZWG5a625L+h5oGvXHJcbiAqL1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvaHR0cCc7XHJcbmltcG9ydCB7IFVTRVJfTkFNRSB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50L3N0b3JlJztcclxuaW1wb3J0IHsgcGFyc2VEYXRhIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdXRpbCc7XHJcblxyXG5QYWdlKHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBpbWc6ICcvcHVibGljL2ltYWdlcy8yMy5qcGcnLFxyXG4gICAgICAgIGRldGFpbDogJ3RoaXMgaXMgZGV0YWlscyAnLnJlcGVhdCgyMCkudHJpbSgpLFxyXG4gICAgICAgIG5hbWU6ICd0aGlzIGlzIG5hbWUnLFxyXG4gICAgICAgIGZhbnM6IDEwLFxyXG4gICAgICAgIGFjdGl2aXR5Q291bnQ6IDEwLFxyXG4gICAgICAgIGlzQ29sbGVjdGVkOiBmYWxzZSxcclxuICAgICAgICB1c2VySWQ6ICcnLFxyXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIG9uTG9hZChxdWVyeToge3VzZXJJZDogc3RyaW5nfSkge1xyXG4gICAgICAgIHJlcXVlc3Q8SU1lcmNoYW50Pih7XHJcbiAgICAgICAgICAgIHVybDogJy9hcGkvbWVyY2hhbnQvZ2V0QnlVc2VySWQnLFxyXG4gICAgICAgICAgICBkYXRhOiB7dXNlcklkOiBxdWVyeS51c2VySWR9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGF0YSA9IHBhcnNlRGF0YShkYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSEoey4uLmRhdGEsIGRpc2FibGVkOiBxdWVyeS51c2VySWQgPT09IHd4LmdldFN0b3JhZ2VTeW5jKFVTRVJfTkFNRSl9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuICAgIH0sXHJcbiAgICBjb2xsZWN0KCkge1xyXG4gICAgICAgIGNvbnN0IGNvbGxlY3QgPSB0aGlzLmRhdGEuaXNDb2xsZWN0ZWQ7XHJcbiAgICAgICAgcmVxdWVzdCh7XHJcbiAgICAgICAgICAgIHVybDogYC9hcGkvZm9sbG93P3RhcmdldElkPSR7dGhpcy5kYXRhLnVzZXJJZH1gLFxyXG4gICAgICAgICAgICBtZXRob2Q6IGNvbGxlY3QgPyAnREVMRVRFJyA6ICdQVVQnXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICAgICAgICBpc0NvbGxlY3RlZDogIWNvbGxlY3QsXHJcbiAgICAgICAgICAgICAgICBmYW5zOiBjb2xsZWN0ID8gdGhpcy5kYXRhLmZhbnMgLSAxIDogdGhpcy5kYXRhLmZhbnMgKyAxXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xyXG4gICAgfVxyXG59KTtcclxuIl19