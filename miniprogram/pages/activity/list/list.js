"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("../../../utils/http");
var index_1 = require("../../../constant/index");
Page({
    data: {
        ad: null
    },
    onShow: function () {
        var _this = this;
        http_1.request({
            url: '/api/ad/getAd',
            data: { type: index_1.AD_TYPE.ACTIVITY },
            notShowMsg: true
        })
            .then(function (_a) {
            var data = _a.data;
            return _this.setData({ ad: data });
        })
            .catch(function () { return _this.setData({ ad: null }); });
    },
    onReachBottom: function () {
        var component = this.selectComponent('#list');
        component.getMore && component.getMore();
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSw0Q0FBOEM7QUFDOUMsaURBQWtEO0FBRWxELElBQUksQ0FBQztJQUNELElBQUksRUFBRTtRQUNGLEVBQUUsRUFBRSxJQUFJO0tBQ1g7SUFDRCxNQUFNO1FBQU4saUJBUUM7UUFQRyxjQUFPLENBQU07WUFDVCxHQUFHLEVBQUUsZUFBZTtZQUNwQixJQUFJLEVBQUUsRUFBQyxJQUFJLEVBQUUsZUFBTyxDQUFDLFFBQVEsRUFBQztZQUM5QixVQUFVLEVBQUUsSUFBSTtTQUNuQixDQUFDO2FBQ0csSUFBSSxDQUFDLFVBQUMsRUFBTTtnQkFBTCxjQUFJO1lBQU0sT0FBQSxLQUFJLENBQUMsT0FBUSxDQUFDLEVBQUMsRUFBRSxFQUFFLElBQUksRUFBQyxDQUFDO1FBQXpCLENBQXlCLENBQUM7YUFDM0MsS0FBSyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsT0FBUSxDQUFDLEVBQUMsRUFBRSxFQUFFLElBQUksRUFBQyxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0QsYUFBYTtRQUNULElBQU0sU0FBUyxHQUFrQixJQUFJLENBQUMsZUFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoRSxTQUFTLENBQUMsT0FBTyxJQUFJLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOWFrOebiua0u+WKqFxyXG4gKi9cclxuaW1wb3J0IHsgTGlzdENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2JlaGF2aW9yL3BhZ2VfcXVlcnknO1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvaHR0cCc7XHJcbmltcG9ydCB7IEFEX1RZUEUgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudC9pbmRleCc7XHJcblxyXG5QYWdlKHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBhZDogbnVsbFxyXG4gICAgfSxcclxuICAgIG9uU2hvdygpIHtcclxuICAgICAgICByZXF1ZXN0PElBRD4oe1xyXG4gICAgICAgICAgICB1cmw6ICcvYXBpL2FkL2dldEFkJyxcclxuICAgICAgICAgICAgZGF0YToge3R5cGU6IEFEX1RZUEUuQUNUSVZJVFl9LFxyXG4gICAgICAgICAgICBub3RTaG93TXNnOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4gdGhpcy5zZXREYXRhISh7YWQ6IGRhdGF9KSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHRoaXMuc2V0RGF0YSEoe2FkOiBudWxsfSkpO1xyXG4gICAgfSxcclxuICAgIG9uUmVhY2hCb3R0b20oKSB7XHJcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gPExpc3RDb21wb25lbnQ+dGhpcy5zZWxlY3RDb21wb25lbnQhKCcjbGlzdCcpO1xyXG4gICAgICAgIGNvbXBvbmVudC5nZXRNb3JlICYmIGNvbXBvbmVudC5nZXRNb3JlKCk7XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=