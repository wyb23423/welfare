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
var listFunc = require("../../template/list_item/list_item");
Page(__assign({ data: {
        activitys: []
    } }, listFunc, { onLoad: function () {
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
    },
    getMore: function () {
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
    } }));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY3Rpdml0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBR0EsNkRBQStEO0FBRS9ELElBQUksWUFDQSxJQUFJLEVBQUU7UUFDRixTQUFTLEVBQUUsRUFBa0I7S0FDaEMsSUFFRSxRQUFRLElBRVgsTUFBTTtRQUNGLElBQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNyQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3pCLFNBQVMsQ0FBQyxJQUFJLENBQUM7Z0JBQ1gsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsR0FBRyxFQUFFLHVCQUF1QjtnQkFDNUIsS0FBSyxFQUFFLHlCQUF5QixHQUFHLENBQUM7Z0JBQ3BDLGNBQWMsRUFBRSxNQUFNO2dCQUN0QixJQUFJLEVBQUUsRUFBRTtnQkFDUixJQUFJLEVBQUUsRUFBRTthQUNYLENBQUMsQ0FBQztTQUNOO1FBQUEsQ0FBQztRQUVGLElBQUksQ0FBQyxPQUFRLENBQUMsRUFBRSxTQUFTLFdBQUEsRUFBRSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNELE9BQU87UUFDSCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztnQkFDckIsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsR0FBRyxFQUFFLHVCQUF1QjtnQkFDNUIsS0FBSyxFQUFFLHlCQUF5QixHQUFHLENBQUM7Z0JBQ3BDLGNBQWMsRUFBRSxNQUFNO2dCQUN0QixJQUFJLEVBQUUsRUFBRTtnQkFDUixJQUFJLEVBQUUsRUFBRTthQUNYLENBQUMsQ0FBQztTQUNOO1FBQUEsQ0FBQztRQUVGLElBQUksQ0FBQyxPQUFRLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ3RELENBQUMsSUFDSCxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOWFrOebiua0u+WKqFxyXG4gKi9cclxuaW1wb3J0ICogYXMgbGlzdEZ1bmMgZnJvbSBcIi4uLy4uL3RlbXBsYXRlL2xpc3RfaXRlbS9saXN0X2l0ZW1cIjtcclxuXHJcblBhZ2Uoe1xyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGFjdGl2aXR5czogW10gYXMgSUFueU9iamVjdFtdXHJcbiAgICB9LFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT095LqL5Lu2XHJcbiAgICAuLi5saXN0RnVuYyxcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT0955Sf5ZG95ZGo5pyfXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgY29uc3QgYWN0aXZpdHlzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGFjdGl2aXR5cy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGlkOiBpLFxyXG4gICAgICAgICAgICAgICAgaW1nOiAnL3B1YmxpYy9pbWFnZXMvMjMuanBnJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn5pyJ54ix55qE5oiR5Lus5LiN5a2k54us4oCU4oCU6Ieq6Zet55eH5YS/56ul5LmJ6K+K57O75YiX5rS75YqoX18nICsgaSxcclxuICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uOiAn56S+5Yy66K6k6K+BJyxcclxuICAgICAgICAgICAgICAgIHNpZ246IDExLFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogMjRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXREYXRhISh7IGFjdGl2aXR5cyB9KTtcclxuICAgIH0sXHJcbiAgICBnZXRNb3JlKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuYWN0aXZpdHlzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgaWQ6IGksXHJcbiAgICAgICAgICAgICAgICBpbWc6ICcvcHVibGljL2ltYWdlcy8yMy5qcGcnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmnInniLHnmoTmiJHku6zkuI3lraTni6zigJTigJToh6rpl63nl4flhL/nq6XkuYnor4rns7vliJfmtLvliqhfXycgKyBpLFxyXG4gICAgICAgICAgICAgICAgYXV0aGVudGljYXRpb246ICfnpL7ljLrorqTor4EnLFxyXG4gICAgICAgICAgICAgICAgc2lnbjogMTEsXHJcbiAgICAgICAgICAgICAgICBzaXplOiAyNFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnNldERhdGEhKHsgYWN0aXZpdHlzOiB0aGlzLmRhdGEuYWN0aXZpdHlzIH0pO1xyXG4gICAgfVxyXG59KVxyXG4iXX0=