"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("../../../utils/http");
var index_1 = require("../../../constant/index");
Page({
    data: {
        ad: ''
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
            return _this.setData({ ad: data.img });
        })
            .catch(console.log);
    },
    onReachBottom: function () {
        var component = this.selectComponent('#list');
        component.getMore && component.getMore();
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSw0Q0FBOEM7QUFDOUMsaURBQWtEO0FBRWxELElBQUksQ0FBQztJQUNELElBQUksRUFBRTtRQUNGLEVBQUUsRUFBRSxFQUFFO0tBQ1Q7SUFDRCxNQUFNO1FBQU4saUJBUUM7UUFQRyxjQUFPLENBQU07WUFDVCxHQUFHLEVBQUUsZUFBZTtZQUNwQixJQUFJLEVBQUUsRUFBQyxJQUFJLEVBQUUsZUFBTyxDQUFDLEtBQUssRUFBQztZQUMzQixVQUFVLEVBQUUsSUFBSTtTQUNuQixDQUFDO2FBQ0csSUFBSSxDQUFDLFVBQUMsRUFBTTtnQkFBTCxjQUFJO1lBQU0sT0FBQSxLQUFJLENBQUMsT0FBUSxDQUFDLEVBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUMsQ0FBQztRQUE3QixDQUE2QixDQUFDO2FBQy9DLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNELGFBQWE7UUFDVCxJQUFNLFNBQVMsR0FBa0IsSUFBSSxDQUFDLGVBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEUsU0FBUyxDQUFDLE9BQU8sSUFBSSxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDN0MsQ0FBQztDQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDlhZHmjaLllYblk4FcclxuICovXHJcbmltcG9ydCB7IExpc3RDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9iZWhhdmlvci9wYWdlX3F1ZXJ5JztcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2h0dHAnO1xyXG5pbXBvcnQgeyBBRF9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnQvaW5kZXgnO1xyXG5cclxuUGFnZSh7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgYWQ6ICcnXHJcbiAgICB9LFxyXG4gICAgb25TaG93KCkge1xyXG4gICAgICAgIHJlcXVlc3Q8SUFEPih7XHJcbiAgICAgICAgICAgIHVybDogJy9hcGkvYWQvZ2V0QWQnLFxyXG4gICAgICAgICAgICBkYXRhOiB7dHlwZTogQURfVFlQRS5HT09EU30sXHJcbiAgICAgICAgICAgIG5vdFNob3dNc2c6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoe2RhdGF9KSA9PiB0aGlzLnNldERhdGEhKHthZDogZGF0YS5pbWd9KSlcclxuICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuICAgIH0sXHJcbiAgICBvblJlYWNoQm90dG9tKCkge1xyXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IDxMaXN0Q29tcG9uZW50PnRoaXMuc2VsZWN0Q29tcG9uZW50ISgnI2xpc3QnKTtcclxuICAgICAgICBjb21wb25lbnQuZ2V0TW9yZSAmJiBjb21wb25lbnQuZ2V0TW9yZSgpO1xyXG4gICAgfVxyXG59KTtcclxuIl19