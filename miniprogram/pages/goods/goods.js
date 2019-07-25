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
        goods: []
    } }, listFunc, { onLoad: function () {
        var goods = [];
        for (var i = 1; i < 10; i++) {
            goods.push({
                id: i,
                img: '/public/images/23.jpg',
                title: '少儿基础篮球培训课1节',
                authentication: '社区认证',
                sign: 11,
                size: 24,
                cost: 50 + i * 40,
                isCollected: i > 1
            });
        }
        ;
        this.setData({ goods: goods });
    },
    getMore: function () {
        for (var i = 1; i < 10; i++) {
            this.data.goods.push({
                id: i,
                img: '/public/images/23.jpg',
                title: '少儿基础篮球培训课1节',
                authentication: '社区认证',
                sign: 11,
                size: 24,
                cost: 50 + i * 40,
                isCollected: i > 1
            });
        }
        ;
        this.setData({ goods: this.data.goods });
    } }));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnb29kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBR0EsNkRBQStEO0FBRS9ELElBQUksWUFDQSxJQUFJLEVBQUU7UUFDRixLQUFLLEVBQUUsRUFBa0I7S0FDNUIsSUFFRSxRQUFRLElBRVgsTUFBTTtRQUNGLElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNqQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3pCLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQ1AsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsR0FBRyxFQUFFLHVCQUF1QjtnQkFDNUIsS0FBSyxFQUFFLGFBQWE7Z0JBQ3BCLGNBQWMsRUFBRSxNQUFNO2dCQUN0QixJQUFJLEVBQUUsRUFBRTtnQkFDUixJQUFJLEVBQUUsRUFBRTtnQkFDUixJQUFJLEVBQUUsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFO2dCQUNqQixXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUM7YUFDckIsQ0FBQyxDQUFDO1NBQ047UUFBQSxDQUFDO1FBRUYsSUFBSSxDQUFDLE9BQVEsQ0FBQyxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ0QsT0FBTztRQUNILEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNqQixFQUFFLEVBQUUsQ0FBQztnQkFDTCxHQUFHLEVBQUUsdUJBQXVCO2dCQUM1QixLQUFLLEVBQUUsYUFBYTtnQkFDcEIsY0FBYyxFQUFFLE1BQU07Z0JBQ3RCLElBQUksRUFBRSxFQUFFO2dCQUNSLElBQUksRUFBRSxFQUFFO2dCQUNSLElBQUksRUFBRSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2pCLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQzthQUNyQixDQUFDLENBQUM7U0FDTjtRQUFBLENBQUM7UUFFRixJQUFJLENBQUMsT0FBUSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUM5QyxDQUFDLElBQ0gsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDlhZHmjaLllYblk4FcclxuICovXHJcbmltcG9ydCAqIGFzIGxpc3RGdW5jIGZyb20gXCIuLi8uLi90ZW1wbGF0ZS9saXN0X2l0ZW0vbGlzdF9pdGVtXCI7XHJcblxyXG5QYWdlKHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBnb29kczogW10gYXMgSUFueU9iamVjdFtdXHJcbiAgICB9LFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT095LqL5Lu2XHJcbiAgICAuLi5saXN0RnVuYyxcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT0955Sf5ZG95ZGo5pyfXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgY29uc3QgZ29vZHMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgZ29vZHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBpZDogaSxcclxuICAgICAgICAgICAgICAgIGltZzogJy9wdWJsaWMvaW1hZ2VzLzIzLmpwZycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+WwkeWEv+WfuuehgOevrueQg+WfueiureivvjHoioInLFxyXG4gICAgICAgICAgICAgICAgYXV0aGVudGljYXRpb246ICfnpL7ljLrorqTor4EnLFxyXG4gICAgICAgICAgICAgICAgc2lnbjogMTEsXHJcbiAgICAgICAgICAgICAgICBzaXplOiAyNCxcclxuICAgICAgICAgICAgICAgIGNvc3Q6IDUwICsgaSAqIDQwLFxyXG4gICAgICAgICAgICAgICAgaXNDb2xsZWN0ZWQ6IGkgPiAxXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuc2V0RGF0YSEoeyBnb29kcyB9KTtcclxuICAgIH0sXHJcbiAgICBnZXRNb3JlKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuZ29vZHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBpZDogaSxcclxuICAgICAgICAgICAgICAgIGltZzogJy9wdWJsaWMvaW1hZ2VzLzIzLmpwZycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+WwkeWEv+WfuuehgOevrueQg+WfueiureivvjHoioInLFxyXG4gICAgICAgICAgICAgICAgYXV0aGVudGljYXRpb246ICfnpL7ljLrorqTor4EnLFxyXG4gICAgICAgICAgICAgICAgc2lnbjogMTEsXHJcbiAgICAgICAgICAgICAgICBzaXplOiAyNCxcclxuICAgICAgICAgICAgICAgIGNvc3Q6IDUwICsgaSAqIDQwLFxyXG4gICAgICAgICAgICAgICAgaXNDb2xsZWN0ZWQ6IGkgPiAxXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuc2V0RGF0YSEoeyBnb29kczogdGhpcy5kYXRhLmdvb2RzIH0pO1xyXG4gICAgfVxyXG59KVxyXG4iXX0=