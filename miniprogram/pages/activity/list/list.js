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
            data: { type: index_1.AD_TYPE.ACTIVITY },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSw0Q0FBOEM7QUFDOUMsaURBQWtEO0FBRWxELElBQUksQ0FBQztJQUNELElBQUksRUFBRTtRQUNGLEVBQUUsRUFBRSxFQUFFO0tBQ1Q7SUFDRCxNQUFNO1FBQU4saUJBUUM7UUFQRyxjQUFPLENBQU07WUFDVCxHQUFHLEVBQUUsZUFBZTtZQUNwQixJQUFJLEVBQUUsRUFBQyxJQUFJLEVBQUUsZUFBTyxDQUFDLFFBQVEsRUFBQztZQUM5QixVQUFVLEVBQUUsSUFBSTtTQUNuQixDQUFDO2FBQ0csSUFBSSxDQUFDLFVBQUMsRUFBTTtnQkFBTCxjQUFJO1lBQU0sT0FBQSxLQUFJLENBQUMsT0FBUSxDQUFDLEVBQUMsRUFBRSxFQUFFLElBQUksRUFBQyxDQUFDO1FBQXpCLENBQXlCLENBQUM7YUFDM0MsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0QsYUFBYTtRQUNULElBQU0sU0FBUyxHQUFrQixJQUFJLENBQUMsZUFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoRSxTQUFTLENBQUMsT0FBTyxJQUFJLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOWFrOebiua0u+WKqFxyXG4gKi9cclxuaW1wb3J0IHsgTGlzdENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2JlaGF2aW9yL3BhZ2VfcXVlcnknO1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvaHR0cCc7XHJcbmltcG9ydCB7IEFEX1RZUEUgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudC9pbmRleCc7XHJcblxyXG5QYWdlKHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBhZDogJydcclxuICAgIH0sXHJcbiAgICBvblNob3coKSB7XHJcbiAgICAgICAgcmVxdWVzdDxJQUQ+KHtcclxuICAgICAgICAgICAgdXJsOiAnL2FwaS9hZC9nZXRBZCcsXHJcbiAgICAgICAgICAgIGRhdGE6IHt0eXBlOiBBRF9UWVBFLkFDVElWSVRZfSxcclxuICAgICAgICAgICAgbm90U2hvd01zZzogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHRoaXMuc2V0RGF0YSEoe2FkOiBkYXRhfSkpXHJcbiAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XHJcbiAgICB9LFxyXG4gICAgb25SZWFjaEJvdHRvbSgpIHtcclxuICAgICAgICBjb25zdCBjb21wb25lbnQgPSA8TGlzdENvbXBvbmVudD50aGlzLnNlbGVjdENvbXBvbmVudCEoJyNsaXN0Jyk7XHJcbiAgICAgICAgY29tcG9uZW50LmdldE1vcmUgJiYgY29tcG9uZW50LmdldE1vcmUoKTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==