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
        this.setData(__assign({}, query, { disabled: query.userId === wx.getStorageSync('username') }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVzaW5lc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJidXNpbmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBR0EseUNBQTJDO0FBRTNDLElBQUksQ0FBQztJQUNELElBQUksRUFBRTtRQUNGLEdBQUcsRUFBRSx1QkFBdUI7UUFDNUIsT0FBTyxFQUFFLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUU7UUFDN0MsSUFBSSxFQUFFLGNBQWM7UUFDcEIsSUFBSSxFQUFFLEVBQUU7UUFDUixhQUFhLEVBQUUsRUFBRTtRQUNqQixXQUFXLEVBQUUsS0FBSztRQUNsQixNQUFNLEVBQUUsRUFBRTtRQUNWLFFBQVEsRUFBRSxLQUFLO0tBQ2xCO0lBQ0QsTUFBTSxZQUFDLEtBQUs7UUFDUixLQUFLLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUVwQixJQUFJLENBQUMsT0FBUSxjQUNOLEtBQUssSUFDUixRQUFRLEVBQUUsS0FBSyxDQUFDLE1BQU0sS0FBSyxFQUFFLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxJQUMxRCxDQUFDO0lBQ1AsQ0FBQztJQUNELE9BQU87UUFBUCxpQkFXQztRQVZHLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3RDLGNBQU8sQ0FBQztZQUNKLEdBQUcsRUFBRSwwQkFBd0IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFRO1lBQy9DLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSztTQUNyQyxDQUFDO2FBQ0csSUFBSSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsT0FBUSxDQUFDO1lBQ3RCLFdBQVcsRUFBRSxDQUFDLE9BQU87WUFDckIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDO1NBQzFELENBQUMsRUFIVSxDQUdWLENBQUM7YUFDRixLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5ZWG5a625L+h5oGvXHJcbiAqL1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vdXRpbHMvaHR0cCc7XHJcblxyXG5QYWdlKHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBpbWc6ICcvcHVibGljL2ltYWdlcy8yMy5qcGcnLFxyXG4gICAgICAgIGRldGFpbHM6ICd0aGlzIGlzIGRldGFpbHMgJy5yZXBlYXQoMjApLnRyaW0oKSxcclxuICAgICAgICBuYW1lOiAndGhpcyBpcyBuYW1lJyxcclxuICAgICAgICBmYW5zOiAxMCxcclxuICAgICAgICBhY3Rpdml0eUNvdW50OiAxMCxcclxuICAgICAgICBpc0NvbGxlY3RlZDogZmFsc2UsXHJcbiAgICAgICAgdXNlcklkOiAnJyxcclxuICAgICAgICBkaXNhYmxlZDogZmFsc2VcclxuICAgIH0sXHJcbiAgICBvbkxvYWQocXVlcnkpIHtcclxuICAgICAgICBxdWVyeSA9IHF1ZXJ5IHx8IHt9O1xyXG5cclxuICAgICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgICAgLi4ucXVlcnksXHJcbiAgICAgICAgICAgIGRpc2FibGVkOiBxdWVyeS51c2VySWQgPT09IHd4LmdldFN0b3JhZ2VTeW5jKCd1c2VybmFtZScpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgY29sbGVjdCgpIHtcclxuICAgICAgICBjb25zdCBjb2xsZWN0ID0gdGhpcy5kYXRhLmlzQ29sbGVjdGVkO1xyXG4gICAgICAgIHJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6IGAvYXBpL2ZvbGxvdz90YXJnZXRJZD0ke3RoaXMuZGF0YS51c2VySWR9YCxcclxuICAgICAgICAgICAgbWV0aG9kOiBjb2xsZWN0ID8gJ0RFTEVURScgOiAnUFVUJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgICAgICAgaXNDb2xsZWN0ZWQ6ICFjb2xsZWN0LFxyXG4gICAgICAgICAgICAgICAgZmFuczogY29sbGVjdCA/IHRoaXMuZGF0YS5mYW5zIC0gMSA6IHRoaXMuZGF0YS5mYW5zICsgMVxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==