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
        this.setData(__assign({}, query, { disabled: query.userId === wx.getStorageSync('username'), isCollected: !!query.isCollected }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVzaW5lc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJidXNpbmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBR0EseUNBQTJDO0FBRTNDLElBQUksQ0FBQztJQUNELElBQUksRUFBRTtRQUNGLEdBQUcsRUFBRSx1QkFBdUI7UUFDNUIsT0FBTyxFQUFFLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUU7UUFDN0MsSUFBSSxFQUFFLGNBQWM7UUFDcEIsSUFBSSxFQUFFLEVBQUU7UUFDUixhQUFhLEVBQUUsRUFBRTtRQUNqQixXQUFXLEVBQUUsS0FBSztRQUNsQixNQUFNLEVBQUUsRUFBRTtRQUNWLFFBQVEsRUFBRSxLQUFLO0tBQ2xCO0lBQ0QsTUFBTSxZQUFDLEtBQWtCO1FBQ3JCLEtBQUssR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDO1FBRXBCLElBQUksQ0FBQyxPQUFRLGNBQ04sS0FBSyxJQUNSLFFBQVEsRUFBRSxLQUFLLENBQUMsTUFBTSxLQUFLLEVBQUUsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEVBQ3hELFdBQVcsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsSUFDbEMsQ0FBQztJQUNQLENBQUM7SUFDRCxPQUFPO1FBQVAsaUJBV0M7UUFWRyxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUN0QyxjQUFPLENBQUM7WUFDSixHQUFHLEVBQUUsMEJBQXdCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBUTtZQUMvQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUs7U0FDckMsQ0FBQzthQUNHLElBQUksQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQVEsQ0FBQztZQUN0QixXQUFXLEVBQUUsQ0FBQyxPQUFPO1lBQ3JCLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQztTQUMxRCxDQUFDLEVBSFUsQ0FHVixDQUFDO2FBQ0YsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOWVhuWutuS/oeaBr1xyXG4gKi9cclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uLy4uL3V0aWxzL2h0dHAnO1xyXG5cclxuUGFnZSh7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgaW1nOiAnL3B1YmxpYy9pbWFnZXMvMjMuanBnJyxcclxuICAgICAgICBkZXRhaWxzOiAndGhpcyBpcyBkZXRhaWxzICcucmVwZWF0KDIwKS50cmltKCksXHJcbiAgICAgICAgbmFtZTogJ3RoaXMgaXMgbmFtZScsXHJcbiAgICAgICAgZmFuczogMTAsXHJcbiAgICAgICAgYWN0aXZpdHlDb3VudDogMTAsXHJcbiAgICAgICAgaXNDb2xsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgIHVzZXJJZDogJycsXHJcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgb25Mb2FkKHF1ZXJ5PzogSUFueU9iamVjdCkge1xyXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkgfHwge307XHJcblxyXG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgICAuLi5xdWVyeSxcclxuICAgICAgICAgICAgZGlzYWJsZWQ6IHF1ZXJ5LnVzZXJJZCA9PT0gd3guZ2V0U3RvcmFnZVN5bmMoJ3VzZXJuYW1lJyksXHJcbiAgICAgICAgICAgIGlzQ29sbGVjdGVkOiAhIXF1ZXJ5LmlzQ29sbGVjdGVkXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgY29sbGVjdCgpIHtcclxuICAgICAgICBjb25zdCBjb2xsZWN0ID0gdGhpcy5kYXRhLmlzQ29sbGVjdGVkO1xyXG4gICAgICAgIHJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6IGAvYXBpL2ZvbGxvdz90YXJnZXRJZD0ke3RoaXMuZGF0YS51c2VySWR9YCxcclxuICAgICAgICAgICAgbWV0aG9kOiBjb2xsZWN0ID8gJ0RFTEVURScgOiAnUFVUJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgICAgICAgaXNDb2xsZWN0ZWQ6ICFjb2xsZWN0LFxyXG4gICAgICAgICAgICAgICAgZmFuczogY29sbGVjdCA/IHRoaXMuZGF0YS5mYW5zIC0gMSA6IHRoaXMuZGF0YS5mYW5zICsgMVxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==