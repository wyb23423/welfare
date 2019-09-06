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
var util_1 = require("../../../utils/util");
var http_1 = require("../../../utils/http");
Page({
    data: {
        details: '123',
        id: 1,
        integral: 21,
        location: '北京海淀花园北路建设智谷大厦5层',
        name: '有爱的我们不孤独——自闭症儿童义诊系列活动',
        size: 1,
        startTime: util_1.formatTime(new Date()),
        endTime: util_1.formatTime(new Date(Date.now() + 1000 * 60 * 60 * 24)),
        look: 23,
        collect: 40,
        img: '/public/images/23.jpg',
        isCollected: false,
        user: {
            name: '北京儿童医疗发展中心',
            authentication: true,
            activityCount: 12,
            fans: 52,
            img: '/public/images/23.jpg',
            desc: '北京医疗儿童发展中心的孤独症和其他障碍敢于服务，是xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
        }
    },
    onLoad: function (query) {
        var _this = this;
        http_1.request({
            url: '/api/activity/' + query.id,
            data: {
                currentPage: 1,
                pageSize: 2
            }
        })
            .then(function (_a) {
            var data = _a.data;
            _this.setData(__assign({}, util_1.parseData(data), { startTime: util_1.formatTime(new Date(data.origination)), endTime: util_1.formatTime(new Date(data.finish)), img: '/public/images/23.jpg' }));
        })
            .catch(console.log);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRldGFpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUdBLDRDQUE0RDtBQUM1RCw0Q0FBOEM7QUFFOUMsSUFBSSxDQUFDO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsT0FBTyxFQUFFLEtBQUs7UUFDZCxFQUFFLEVBQUUsQ0FBQztRQUNMLFFBQVEsRUFBRSxFQUFFO1FBQ1osUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixJQUFJLEVBQUUsdUJBQXVCO1FBQzdCLElBQUksRUFBRSxDQUFDO1FBQ1AsU0FBUyxFQUFFLGlCQUFVLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNqQyxPQUFPLEVBQUUsaUJBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDL0QsSUFBSSxFQUFFLEVBQUU7UUFDUixPQUFPLEVBQUUsRUFBRTtRQUNYLEdBQUcsRUFBRSx1QkFBdUI7UUFDNUIsV0FBVyxFQUFFLEtBQUs7UUFDbEIsSUFBSSxFQUFFO1lBQ0YsSUFBSSxFQUFFLFlBQVk7WUFDbEIsY0FBYyxFQUFFLElBQUk7WUFDcEIsYUFBYSxFQUFFLEVBQUU7WUFDakIsSUFBSSxFQUFFLEVBQUU7WUFDUixHQUFHLEVBQUUsdUJBQXVCO1lBQzVCLElBQUksRUFBRSxzRUFBc0U7U0FDL0U7S0FDSjtJQUlELE1BQU0sWUFBQyxLQUFVO1FBQWpCLGlCQWlCQztRQWhCRyxjQUFPLENBQVU7WUFDYixHQUFHLEVBQUUsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLEVBQUU7WUFDaEMsSUFBSSxFQUFFO2dCQUNGLFdBQVcsRUFBRSxDQUFDO2dCQUNkLFFBQVEsRUFBRSxDQUFDO2FBQ2Q7U0FDSixDQUFDO2FBQ0csSUFBSSxDQUFDLFVBQUMsRUFBUTtnQkFBTixjQUFJO1lBQ1QsS0FBSSxDQUFDLE9BQVEsY0FDTixnQkFBUyxDQUFDLElBQUksQ0FBQyxJQUNsQixTQUFTLEVBQUUsaUJBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFDakQsT0FBTyxFQUFFLGlCQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQzFDLEdBQUcsRUFBRSx1QkFBdUIsSUFDOUIsQ0FBQztRQUNQLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUdKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDlhaznm4rmtLvliqjor6bmg4VcclxuICovXHJcbmltcG9ydCB7IGZvcm1hdFRpbWUsIHBhcnNlRGF0YSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvaHR0cCc7XHJcblxyXG5QYWdlKHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBkZXRhaWxzOiAnMTIzJyxcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBpbnRlZ3JhbDogMjEsXHJcbiAgICAgICAgbG9jYXRpb246ICfljJfkuqzmtbfmt4DoirHlm63ljJfot6/lu7rorr7mmbrosLflpKfljqY15bGCJyxcclxuICAgICAgICBuYW1lOiAn5pyJ54ix55qE5oiR5Lus5LiN5a2k54us4oCU4oCU6Ieq6Zet55eH5YS/56ul5LmJ6K+K57O75YiX5rS75YqoJyxcclxuICAgICAgICBzaXplOiAxLFxyXG4gICAgICAgIHN0YXJ0VGltZTogZm9ybWF0VGltZShuZXcgRGF0ZSgpKSxcclxuICAgICAgICBlbmRUaW1lOiBmb3JtYXRUaW1lKG5ldyBEYXRlKERhdGUubm93KCkgKyAxMDAwICogNjAgKiA2MCAqIDI0KSksXHJcbiAgICAgICAgbG9vazogMjMsXHJcbiAgICAgICAgY29sbGVjdDogNDAsXHJcbiAgICAgICAgaW1nOiAnL3B1YmxpYy9pbWFnZXMvMjMuanBnJyxcclxuICAgICAgICBpc0NvbGxlY3RlZDogZmFsc2UsXHJcbiAgICAgICAgdXNlcjoge1xyXG4gICAgICAgICAgICBuYW1lOiAn5YyX5Lqs5YS/56ul5Yy755aX5Y+R5bGV5Lit5b+DJyxcclxuICAgICAgICAgICAgYXV0aGVudGljYXRpb246IHRydWUsXHJcbiAgICAgICAgICAgIGFjdGl2aXR5Q291bnQ6IDEyLFxyXG4gICAgICAgICAgICBmYW5zOiA1MixcclxuICAgICAgICAgICAgaW1nOiAnL3B1YmxpYy9pbWFnZXMvMjMuanBnJyxcclxuICAgICAgICAgICAgZGVzYzogJ+WMl+S6rOWMu+eWl+WEv+erpeWPkeWxleS4reW/g+eahOWtpOeLrOeXh+WSjOWFtuS7lumanOeijeaVouS6juacjeWKoe+8jOaYr3h4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHgnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PeS6i+S7tlxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT0955Sf5ZG95ZGo5pyfXHJcbiAgICBvbkxvYWQocXVlcnk6IGFueSkge1xyXG4gICAgICAgIHJlcXVlc3Q8SUFjdGl2ZT4oe1xyXG4gICAgICAgICAgICB1cmw6ICcvYXBpL2FjdGl2aXR5LycgKyBxdWVyeS5pZCxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFBhZ2U6IDEsXHJcbiAgICAgICAgICAgICAgICBwYWdlU2l6ZTogMlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5wYXJzZURhdGEoZGF0YSksXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRUaW1lOiBmb3JtYXRUaW1lKG5ldyBEYXRlKGRhdGEub3JpZ2luYXRpb24pKSxcclxuICAgICAgICAgICAgICAgICAgICBlbmRUaW1lOiBmb3JtYXRUaW1lKG5ldyBEYXRlKGRhdGEuZmluaXNoKSksXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nOiAnL3B1YmxpYy9pbWFnZXMvMjMuanBnJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XHJcbiAgICB9XHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT095YW25LuWXHJcblxyXG59KTtcclxuIl19