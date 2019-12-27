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
            data: { type: index_1.AD_TYPE.GOODS },
            notShowMsg: true
        })
            .then(function (_a) {
            var data = _a.data;
            return _this.setData({ ad: data });
        })
            .catch(console.log);
    },
    onReachBottom: function () {
        var component = this.selectComponent('#list');
        component.getMore && component.getMore();
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSw0Q0FBOEM7QUFDOUMsaURBQWtEO0FBRWxELElBQUksQ0FBQztJQUNELElBQUksRUFBRTtRQUNGLEVBQUUsRUFBRSxJQUFJO0tBQ1g7SUFDRCxNQUFNO1FBQU4saUJBUUM7UUFQRyxjQUFPLENBQU07WUFDVCxHQUFHLEVBQUUsZUFBZTtZQUNwQixJQUFJLEVBQUUsRUFBQyxJQUFJLEVBQUUsZUFBTyxDQUFDLEtBQUssRUFBQztZQUMzQixVQUFVLEVBQUUsSUFBSTtTQUNuQixDQUFDO2FBQ0csSUFBSSxDQUFDLFVBQUMsRUFBTTtnQkFBTCxjQUFJO1lBQU0sT0FBQSxLQUFJLENBQUMsT0FBUSxDQUFDLEVBQUMsRUFBRSxFQUFFLElBQUksRUFBQyxDQUFDO1FBQXpCLENBQXlCLENBQUM7YUFDM0MsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0QsYUFBYTtRQUNULElBQU0sU0FBUyxHQUFrQixJQUFJLENBQUMsZUFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoRSxTQUFTLENBQUMsT0FBTyxJQUFJLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOWFkeaNouWVhuWTgVxyXG4gKi9cclxuaW1wb3J0IHsgTGlzdENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2JlaGF2aW9yL3BhZ2VfcXVlcnknO1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvaHR0cCc7XHJcbmltcG9ydCB7IEFEX1RZUEUgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudC9pbmRleCc7XHJcblxyXG5QYWdlKHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBhZDogbnVsbFxyXG4gICAgfSxcclxuICAgIG9uU2hvdygpIHtcclxuICAgICAgICByZXF1ZXN0PElBRD4oe1xyXG4gICAgICAgICAgICB1cmw6ICcvYXBpL2FkL2dldEFkJyxcclxuICAgICAgICAgICAgZGF0YToge3R5cGU6IEFEX1RZUEUuR09PRFN9LFxyXG4gICAgICAgICAgICBub3RTaG93TXNnOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4gdGhpcy5zZXREYXRhISh7YWQ6IGRhdGF9KSlcclxuICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuICAgIH0sXHJcbiAgICBvblJlYWNoQm90dG9tKCkge1xyXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IDxMaXN0Q29tcG9uZW50PnRoaXMuc2VsZWN0Q29tcG9uZW50ISgnI2xpc3QnKTtcclxuICAgICAgICBjb21wb25lbnQuZ2V0TW9yZSAmJiBjb21wb25lbnQuZ2V0TW9yZSgpO1xyXG4gICAgfVxyXG59KTtcclxuIl19