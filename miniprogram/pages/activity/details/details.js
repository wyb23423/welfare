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
var constant_1 = require("../../../constant");
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
            _this.setData(__assign({}, constant_1.parseData(data), { startTime: util_1.formatTime(new Date(data.origination)), endTime: util_1.formatTime(new Date(data.finish)), img: '/public/images/23.jpg' }));
        })
            .catch(console.log);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRldGFpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUdBLDRDQUFpRDtBQUNqRCw4Q0FBOEM7QUFDOUMsNENBQThDO0FBRTlDLElBQUksQ0FBQztJQUNELElBQUksRUFBRTtRQUNGLE9BQU8sRUFBRSxLQUFLO1FBQ2QsRUFBRSxFQUFFLENBQUM7UUFDTCxRQUFRLEVBQUUsRUFBRTtRQUNaLFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsSUFBSSxFQUFFLHVCQUF1QjtRQUM3QixJQUFJLEVBQUUsQ0FBQztRQUNQLFNBQVMsRUFBRSxpQkFBVSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7UUFDakMsT0FBTyxFQUFFLGlCQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQy9ELElBQUksRUFBRSxFQUFFO1FBQ1IsT0FBTyxFQUFFLEVBQUU7UUFDWCxHQUFHLEVBQUUsdUJBQXVCO1FBQzVCLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLElBQUksRUFBRTtZQUNGLElBQUksRUFBRSxZQUFZO1lBQ2xCLGNBQWMsRUFBRSxJQUFJO1lBQ3BCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLElBQUksRUFBRSxFQUFFO1lBQ1IsR0FBRyxFQUFFLHVCQUF1QjtZQUM1QixJQUFJLEVBQUUsc0VBQXNFO1NBQy9FO0tBQ0o7SUFJRCxNQUFNLFlBQUMsS0FBVTtRQUFqQixpQkFpQkM7UUFoQkcsY0FBTyxDQUFVO1lBQ2IsR0FBRyxFQUFFLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxFQUFFO1lBQ2hDLElBQUksRUFBRTtnQkFDRixXQUFXLEVBQUUsQ0FBQztnQkFDZCxRQUFRLEVBQUUsQ0FBQzthQUNkO1NBQ0osQ0FBQzthQUNHLElBQUksQ0FBQyxVQUFDLEVBQVE7Z0JBQU4sY0FBSTtZQUNULEtBQUksQ0FBQyxPQUFRLGNBQ04sb0JBQVMsQ0FBQyxJQUFJLENBQUMsSUFDbEIsU0FBUyxFQUFFLGlCQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQ2pELE9BQU8sRUFBRSxpQkFBVSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUMxQyxHQUFHLEVBQUUsdUJBQXVCLElBQzlCLENBQUM7UUFDUCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FHSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5YWs55uK5rS75Yqo6K+m5oOFXHJcbiAqL1xyXG5pbXBvcnQgeyBmb3JtYXRUaW1lIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdXRpbCc7XHJcbmltcG9ydCB7IHBhcnNlRGF0YSB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50JztcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2h0dHAnO1xyXG5cclxuUGFnZSh7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgZGV0YWlsczogJzEyMycsXHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgaW50ZWdyYWw6IDIxLFxyXG4gICAgICAgIGxvY2F0aW9uOiAn5YyX5Lqs5rW35reA6Iqx5Zut5YyX6Lev5bu66K6+5pm66LC35aSn5Y6mNeWxgicsXHJcbiAgICAgICAgbmFtZTogJ+acieeIseeahOaIkeS7rOS4jeWtpOeLrOKAlOKAlOiHqumXreeXh+WEv+erpeS5ieiviuezu+WIl+a0u+WKqCcsXHJcbiAgICAgICAgc2l6ZTogMSxcclxuICAgICAgICBzdGFydFRpbWU6IGZvcm1hdFRpbWUobmV3IERhdGUoKSksXHJcbiAgICAgICAgZW5kVGltZTogZm9ybWF0VGltZShuZXcgRGF0ZShEYXRlLm5vdygpICsgMTAwMCAqIDYwICogNjAgKiAyNCkpLFxyXG4gICAgICAgIGxvb2s6IDIzLFxyXG4gICAgICAgIGNvbGxlY3Q6IDQwLFxyXG4gICAgICAgIGltZzogJy9wdWJsaWMvaW1hZ2VzLzIzLmpwZycsXHJcbiAgICAgICAgaXNDb2xsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgIHVzZXI6IHtcclxuICAgICAgICAgICAgbmFtZTogJ+WMl+S6rOWEv+erpeWMu+eWl+WPkeWxleS4reW/gycsXHJcbiAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uOiB0cnVlLFxyXG4gICAgICAgICAgICBhY3Rpdml0eUNvdW50OiAxMixcclxuICAgICAgICAgICAgZmFuczogNTIsXHJcbiAgICAgICAgICAgIGltZzogJy9wdWJsaWMvaW1hZ2VzLzIzLmpwZycsXHJcbiAgICAgICAgICAgIGRlc2M6ICfljJfkuqzljLvnlpflhL/nq6Xlj5HlsZXkuK3lv4PnmoTlraTni6znl4flkozlhbbku5bpmpznoo3mlaLkuo7mnI3liqHvvIzmmK94eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4J1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3kuovku7ZcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PeeUn+WRveWRqOacn1xyXG4gICAgb25Mb2FkKHF1ZXJ5OiBhbnkpIHtcclxuICAgICAgICByZXF1ZXN0PElBY3RpdmU+KHtcclxuICAgICAgICAgICAgdXJsOiAnL2FwaS9hY3Rpdml0eS8nICsgcXVlcnkuaWQsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlOiAxLFxyXG4gICAgICAgICAgICAgICAgcGFnZVNpemU6IDJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4ucGFyc2VEYXRhKGRhdGEpLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0VGltZTogZm9ybWF0VGltZShuZXcgRGF0ZShkYXRhLm9yaWdpbmF0aW9uKSksXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kVGltZTogZm9ybWF0VGltZShuZXcgRGF0ZShkYXRhLmZpbmlzaCkpLFxyXG4gICAgICAgICAgICAgICAgICAgIGltZzogJy9wdWJsaWMvaW1hZ2VzLzIzLmpwZydcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xyXG4gICAgfVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PeWFtuS7llxyXG5cclxufSk7XHJcbiJdfQ==