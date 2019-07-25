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
        goods: []
    } }, listFunc, { getMore: function () {
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
    },
    onLoad: function () {
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
    } }));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUdBLGdFQUFrRTtBQUVsRSxJQUFJLFlBQ0EsSUFBSSxFQUFFO1FBQ0YsS0FBSyxFQUFFLEVBQWtCO0tBQzVCLElBRUUsUUFBUSxJQUNYLE9BQU87UUFDSCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDakIsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsR0FBRyxFQUFFLHVCQUF1QjtnQkFDNUIsS0FBSyxFQUFFLGFBQWE7Z0JBQ3BCLGNBQWMsRUFBRSxNQUFNO2dCQUN0QixJQUFJLEVBQUUsRUFBRTtnQkFDUixJQUFJLEVBQUUsRUFBRTtnQkFDUixJQUFJLEVBQUUsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFO2dCQUNqQixXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUM7YUFDckIsQ0FBQyxDQUFDO1NBQ047UUFBQSxDQUFDO1FBRUYsSUFBSSxDQUFDLE9BQVEsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUdELE1BQU07UUFDRixJQUFNLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDakIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QixLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNQLEVBQUUsRUFBRSxDQUFDO2dCQUNMLEdBQUcsRUFBRSx1QkFBdUI7Z0JBQzVCLEtBQUssRUFBRSxhQUFhO2dCQUNwQixjQUFjLEVBQUUsTUFBTTtnQkFDdEIsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRTtnQkFDakIsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDO2FBQ3JCLENBQUMsQ0FBQztTQUNOO1FBQUEsQ0FBQztRQUVGLElBQUksQ0FBQyxPQUFRLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUM7SUFDN0IsQ0FBQyxJQUNILENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5YWR5o2i5ZWG5ZOBXHJcbiAqL1xyXG5pbXBvcnQgKiBhcyBsaXN0RnVuYyBmcm9tIFwiLi4vLi4vLi4vdGVtcGxhdGUvbGlzdF9pdGVtL2xpc3RfaXRlbVwiO1xyXG5cclxuUGFnZSh7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgZ29vZHM6IFtdIGFzIElBbnlPYmplY3RbXVxyXG4gICAgfSxcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PeS6i+S7tlxyXG4gICAgLi4ubGlzdEZ1bmMsXHJcbiAgICBnZXRNb3JlKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuZ29vZHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBpZDogaSxcclxuICAgICAgICAgICAgICAgIGltZzogJy9wdWJsaWMvaW1hZ2VzLzIzLmpwZycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+WwkeWEv+WfuuehgOevrueQg+WfueiureivvjHoioInLFxyXG4gICAgICAgICAgICAgICAgYXV0aGVudGljYXRpb246ICfnpL7ljLrorqTor4EnLFxyXG4gICAgICAgICAgICAgICAgc2lnbjogMTEsXHJcbiAgICAgICAgICAgICAgICBzaXplOiAyNCxcclxuICAgICAgICAgICAgICAgIGNvc3Q6IDUwICsgaSAqIDQwLFxyXG4gICAgICAgICAgICAgICAgaXNDb2xsZWN0ZWQ6IGkgPiAxXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuc2V0RGF0YSEoeyBnb29kczogdGhpcy5kYXRhLmdvb2RzIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PeeUn+WRveWRqOacn1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNvbnN0IGdvb2RzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGdvb2RzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgaWQ6IGksXHJcbiAgICAgICAgICAgICAgICBpbWc6ICcvcHVibGljL2ltYWdlcy8yMy5qcGcnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICflsJHlhL/ln7rnoYDnr67nkIPln7norq3or74x6IqCJyxcclxuICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uOiAn56S+5Yy66K6k6K+BJyxcclxuICAgICAgICAgICAgICAgIHNpZ246IDExLFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogMjQsXHJcbiAgICAgICAgICAgICAgICBjb3N0OiA1MCArIGkgKiA0MCxcclxuICAgICAgICAgICAgICAgIGlzQ29sbGVjdGVkOiBpID4gMVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnNldERhdGEhKHsgZ29vZHMgfSk7XHJcbiAgICB9XHJcbn0pXHJcbiJdfQ==