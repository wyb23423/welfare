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
        intro: '',
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
    collect: function () {
        var _this = this;
        http_1.request({
            url: '/api/like',
            method: this.data.isCollected ? 'DELETE' : 'PUT',
            data: {
                targetId: this.data.id,
                type: 0
            }
        })
            .then(function () { return _this.setData({ isCollected: !_this.data.isCollected }); })
            .catch(console.log);
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
            data = util_1.parseData(data);
            _this.setData(__assign({}, data, { startTime: util_1.formatTime(new Date(data.origination)), endTime: util_1.formatTime(new Date(data.finish)), img: data.originImg }));
        })
            .catch(console.log);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRldGFpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUdBLDRDQUE0RDtBQUM1RCw0Q0FBOEM7QUFFOUMsSUFBSSxDQUFDO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsT0FBTyxFQUFFLEtBQUs7UUFDZCxFQUFFLEVBQUUsQ0FBQztRQUNMLFFBQVEsRUFBRSxFQUFFO1FBQ1osUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixJQUFJLEVBQUUsdUJBQXVCO1FBQzdCLElBQUksRUFBRSxDQUFDO1FBQ1AsS0FBSyxFQUFFLEVBQUU7UUFDVCxTQUFTLEVBQUUsaUJBQVUsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ2pDLE9BQU8sRUFBRSxpQkFBVSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUMvRCxJQUFJLEVBQUUsRUFBRTtRQUNSLE9BQU8sRUFBRSxFQUFFO1FBQ1gsR0FBRyxFQUFFLHVCQUF1QjtRQUM1QixXQUFXLEVBQUUsS0FBSztRQUNsQixJQUFJLEVBQUU7WUFDRixJQUFJLEVBQUUsWUFBWTtZQUNsQixjQUFjLEVBQUUsSUFBSTtZQUNwQixhQUFhLEVBQUUsRUFBRTtZQUNqQixJQUFJLEVBQUUsRUFBRTtZQUNSLEdBQUcsRUFBRSx1QkFBdUI7WUFDNUIsSUFBSSxFQUFFLHNFQUFzRTtTQUMvRTtLQUNKO0lBRUQsT0FBTztRQUFQLGlCQVdDO1FBVkcsY0FBTyxDQUFDO1lBQ0osR0FBRyxFQUFFLFdBQVc7WUFDaEIsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUs7WUFDaEQsSUFBSSxFQUFFO2dCQUNGLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3RCLElBQUksRUFBRSxDQUFDO2FBQ1Y7U0FDSixDQUFDO2FBQ0csSUFBSSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsT0FBUSxDQUFDLEVBQUUsV0FBVyxFQUFFLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUF0RCxDQUFzRCxDQUFDO2FBQ2xFLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELE1BQU0sWUFBQyxLQUFVO1FBQWpCLGlCQWtCQztRQWpCRyxjQUFPLENBQVU7WUFDYixHQUFHLEVBQUUsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLEVBQUU7WUFDaEMsSUFBSSxFQUFFO2dCQUNGLFdBQVcsRUFBRSxDQUFDO2dCQUNkLFFBQVEsRUFBRSxDQUFDO2FBQ2Q7U0FDSixDQUFDO2FBQ0csSUFBSSxDQUFDLFVBQUMsRUFBUTtnQkFBTixjQUFJO1lBQ1QsSUFBSSxHQUFZLGdCQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEMsS0FBSSxDQUFDLE9BQVEsY0FDTixJQUFJLElBQ1AsU0FBUyxFQUFFLGlCQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQ2pELE9BQU8sRUFBRSxpQkFBVSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUMxQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsSUFDckIsQ0FBQztRQUNQLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUdKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDlhaznm4rmtLvliqjor6bmg4VcclxuICovXHJcbmltcG9ydCB7IGZvcm1hdFRpbWUsIHBhcnNlRGF0YSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvaHR0cCc7XHJcblxyXG5QYWdlKHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBkZXRhaWxzOiAnMTIzJyxcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBpbnRlZ3JhbDogMjEsXHJcbiAgICAgICAgbG9jYXRpb246ICfljJfkuqzmtbfmt4DoirHlm63ljJfot6/lu7rorr7mmbrosLflpKfljqY15bGCJyxcclxuICAgICAgICBuYW1lOiAn5pyJ54ix55qE5oiR5Lus5LiN5a2k54us4oCU4oCU6Ieq6Zet55eH5YS/56ul5LmJ6K+K57O75YiX5rS75YqoJyxcclxuICAgICAgICBzaXplOiAxLFxyXG4gICAgICAgIGludHJvOiAnJyxcclxuICAgICAgICBzdGFydFRpbWU6IGZvcm1hdFRpbWUobmV3IERhdGUoKSksXHJcbiAgICAgICAgZW5kVGltZTogZm9ybWF0VGltZShuZXcgRGF0ZShEYXRlLm5vdygpICsgMTAwMCAqIDYwICogNjAgKiAyNCkpLFxyXG4gICAgICAgIGxvb2s6IDIzLFxyXG4gICAgICAgIGNvbGxlY3Q6IDQwLFxyXG4gICAgICAgIGltZzogJy9wdWJsaWMvaW1hZ2VzLzIzLmpwZycsXHJcbiAgICAgICAgaXNDb2xsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgIHVzZXI6IHtcclxuICAgICAgICAgICAgbmFtZTogJ+WMl+S6rOWEv+erpeWMu+eWl+WPkeWxleS4reW/gycsXHJcbiAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uOiB0cnVlLFxyXG4gICAgICAgICAgICBhY3Rpdml0eUNvdW50OiAxMixcclxuICAgICAgICAgICAgZmFuczogNTIsXHJcbiAgICAgICAgICAgIGltZzogJy9wdWJsaWMvaW1hZ2VzLzIzLmpwZycsXHJcbiAgICAgICAgICAgIGRlc2M6ICfljJfkuqzljLvnlpflhL/nq6Xlj5HlsZXkuK3lv4PnmoTlraTni6znl4flkozlhbbku5bpmpznoo3mlaLkuo7mnI3liqHvvIzmmK94eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4J1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3kuovku7ZcclxuICAgIGNvbGxlY3QoKSB7XHJcbiAgICAgICAgcmVxdWVzdCh7XHJcbiAgICAgICAgICAgIHVybDogJy9hcGkvbGlrZScsXHJcbiAgICAgICAgICAgIG1ldGhvZDogdGhpcy5kYXRhLmlzQ29sbGVjdGVkID8gJ0RFTEVURScgOiAnUFVUJyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0SWQ6IHRoaXMuZGF0YS5pZCxcclxuICAgICAgICAgICAgICAgIHR5cGU6IDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMuc2V0RGF0YSEoeyBpc0NvbGxlY3RlZDogIXRoaXMuZGF0YS5pc0NvbGxlY3RlZCB9KSlcclxuICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuICAgIH0sXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PeeUn+WRveWRqOacn1xyXG4gICAgb25Mb2FkKHF1ZXJ5OiBhbnkpIHtcclxuICAgICAgICByZXF1ZXN0PElBY3RpdmU+KHtcclxuICAgICAgICAgICAgdXJsOiAnL2FwaS9hY3Rpdml0eS8nICsgcXVlcnkuaWQsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlOiAxLFxyXG4gICAgICAgICAgICAgICAgcGFnZVNpemU6IDJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGF0YSA9IDxJQWN0aXZlPnBhcnNlRGF0YShkYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRUaW1lOiBmb3JtYXRUaW1lKG5ldyBEYXRlKGRhdGEub3JpZ2luYXRpb24pKSxcclxuICAgICAgICAgICAgICAgICAgICBlbmRUaW1lOiBmb3JtYXRUaW1lKG5ldyBEYXRlKGRhdGEuZmluaXNoKSksXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nOiBkYXRhLm9yaWdpbkltZ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XHJcbiAgICB9XHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT095YW25LuWXHJcblxyXG59KTtcclxuIl19