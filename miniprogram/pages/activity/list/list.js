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
var listFunc = require("../../../template/list_item/list_item");
Page(__assign({ data: {
        activitys: []
    } }, listFunc, { getMore: function () {
        for (var i = 1; i < 10; i++) {
            this.data.activitys.push({
                id: i,
                img: '/public/images/23.jpg',
                title: '有爱的我们不孤独——自闭症儿童义诊系列活动__' + i,
                authentication: '社区认证',
                sign: 11,
                size: 24
            });
        }
        ;
        this.setData({ activitys: this.data.activitys });
    },
    search: function (e) {
        console.log(e.detail.value);
    },
    onLoad: function () {
        var activitys = [];
        for (var i = 1; i < 10; i++) {
            activitys.push({
                id: i,
                img: '/public/images/23.jpg',
                title: '有爱的我们不孤独——自闭症儿童义诊系列活动__' + i,
                authentication: '社区认证',
                sign: 11,
                size: 24
            });
        }
        ;
        this.setData({ activitys: activitys });
    } }));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUdBLGdFQUFrRTtBQUVsRSxJQUFJLFlBQ0EsSUFBSSxFQUFFO1FBQ0YsU0FBUyxFQUFFLEVBQWtCO0tBQ2hDLElBRUUsUUFBUSxJQUNYLE9BQU87UUFDSCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztnQkFDckIsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsR0FBRyxFQUFFLHVCQUF1QjtnQkFDNUIsS0FBSyxFQUFFLHlCQUF5QixHQUFHLENBQUM7Z0JBQ3BDLGNBQWMsRUFBRSxNQUFNO2dCQUN0QixJQUFJLEVBQUUsRUFBRTtnQkFDUixJQUFJLEVBQUUsRUFBRTthQUNYLENBQUMsQ0FBQztTQUNOO1FBQUEsQ0FBQztRQUVGLElBQUksQ0FBQyxPQUFRLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFDRCxNQUFNLFlBQUMsQ0FBYTtRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUdELE1BQU07UUFDRixJQUFNLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDckIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QixTQUFTLENBQUMsSUFBSSxDQUFDO2dCQUNYLEVBQUUsRUFBRSxDQUFDO2dCQUNMLEdBQUcsRUFBRSx1QkFBdUI7Z0JBQzVCLEtBQUssRUFBRSx5QkFBeUIsR0FBRyxDQUFDO2dCQUNwQyxjQUFjLEVBQUUsTUFBTTtnQkFDdEIsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLEVBQUU7YUFDWCxDQUFDLENBQUM7U0FDTjtRQUFBLENBQUM7UUFFRixJQUFJLENBQUMsT0FBUSxDQUFDLEVBQUUsU0FBUyxXQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQ2pDLENBQUMsSUFDSCxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOWFrOebiua0u+WKqFxyXG4gKi9cclxuaW1wb3J0ICogYXMgbGlzdEZ1bmMgZnJvbSBcIi4uLy4uLy4uL3RlbXBsYXRlL2xpc3RfaXRlbS9saXN0X2l0ZW1cIjtcclxuXHJcblBhZ2Uoe1xyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGFjdGl2aXR5czogW10gYXMgSUFueU9iamVjdFtdXHJcbiAgICB9LFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT095LqL5Lu2XHJcbiAgICAuLi5saXN0RnVuYyxcclxuICAgIGdldE1vcmUoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5hY3Rpdml0eXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBpZDogaSxcclxuICAgICAgICAgICAgICAgIGltZzogJy9wdWJsaWMvaW1hZ2VzLzIzLmpwZycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+acieeIseeahOaIkeS7rOS4jeWtpOeLrOKAlOKAlOiHqumXreeXh+WEv+erpeS5ieiviuezu+WIl+a0u+WKqF9fJyArIGksXHJcbiAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGlvbjogJ+ekvuWMuuiupOivgScsXHJcbiAgICAgICAgICAgICAgICBzaWduOiAxMSxcclxuICAgICAgICAgICAgICAgIHNpemU6IDI0XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuc2V0RGF0YSEoeyBhY3Rpdml0eXM6IHRoaXMuZGF0YS5hY3Rpdml0eXMgfSk7XHJcbiAgICB9LFxyXG4gICAgc2VhcmNoKGU6IElBbnlPYmplY3QpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLmRldGFpbC52YWx1ZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT0955Sf5ZG95ZGo5pyfXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgY29uc3QgYWN0aXZpdHlzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGFjdGl2aXR5cy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGlkOiBpLFxyXG4gICAgICAgICAgICAgICAgaW1nOiAnL3B1YmxpYy9pbWFnZXMvMjMuanBnJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn5pyJ54ix55qE5oiR5Lus5LiN5a2k54us4oCU4oCU6Ieq6Zet55eH5YS/56ul5LmJ6K+K57O75YiX5rS75YqoX18nICsgaSxcclxuICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uOiAn56S+5Yy66K6k6K+BJyxcclxuICAgICAgICAgICAgICAgIHNpZ246IDExLFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogMjRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXREYXRhISh7IGFjdGl2aXR5cyB9KTtcclxuICAgIH1cclxufSlcclxuIl19