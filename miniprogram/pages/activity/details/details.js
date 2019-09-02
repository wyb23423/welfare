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
Page({
    data: {
        details: "123",
        id: 1,
        integral: 21,
        location: "北京海淀花园北路建设智谷大厦5层",
        name: "有爱的我们不孤独——自闭症儿童义诊系列活动",
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
        wx.request({
            url: constant_1.HOST + '/api/activity/' + query.id,
            data: {
                currentPage: 1,
                pageSize: 2
            },
            success: function (res) {
                var data = res.data.data;
                _this.setData(__assign({}, constant_1.parseData(data), { startTime: util_1.formatTime(new Date(data.origination)), endTime: util_1.formatTime(new Date(data.finish)), img: '/public/images/23.jpg' }));
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRldGFpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUdBLDRDQUFpRDtBQUNqRCw4Q0FBb0Q7QUFFcEQsSUFBSSxDQUFDO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsT0FBTyxFQUFFLEtBQUs7UUFDZCxFQUFFLEVBQUUsQ0FBQztRQUNMLFFBQVEsRUFBRSxFQUFFO1FBQ1osUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixJQUFJLEVBQUUsdUJBQXVCO1FBQzdCLElBQUksRUFBRSxDQUFDO1FBQ1AsU0FBUyxFQUFFLGlCQUFVLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNqQyxPQUFPLEVBQUUsaUJBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDL0QsSUFBSSxFQUFFLEVBQUU7UUFDUixPQUFPLEVBQUUsRUFBRTtRQUNYLEdBQUcsRUFBRSx1QkFBdUI7UUFDNUIsV0FBVyxFQUFFLEtBQUs7UUFDbEIsSUFBSSxFQUFFO1lBQ0YsSUFBSSxFQUFFLFlBQVk7WUFDbEIsY0FBYyxFQUFFLElBQUk7WUFDcEIsYUFBYSxFQUFFLEVBQUU7WUFDakIsSUFBSSxFQUFFLEVBQUU7WUFDUixHQUFHLEVBQUUsdUJBQXVCO1lBQzVCLElBQUksRUFBRSxzRUFBc0U7U0FDL0U7S0FDSjtJQUlELE1BQU0sWUFBQyxLQUFVO1FBQWpCLGlCQWtCQztRQWpCRyxFQUFFLENBQUMsT0FBTyxDQUFDO1lBQ1AsR0FBRyxFQUFFLGVBQUksR0FBRyxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsRUFBRTtZQUN2QyxJQUFJLEVBQUU7Z0JBQ0YsV0FBVyxFQUFFLENBQUM7Z0JBQ2QsUUFBUSxFQUFFLENBQUM7YUFDZDtZQUNELE9BQU8sRUFBRSxVQUFDLEdBQUc7Z0JBQ0QsSUFBQSxvQkFBSSxDQUFxQztnQkFFakQsS0FBSSxDQUFDLE9BQVEsY0FDTixvQkFBUyxDQUFDLElBQUksQ0FBQyxJQUNsQixTQUFTLEVBQUUsaUJBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFDakQsT0FBTyxFQUFFLGlCQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQzFDLEdBQUcsRUFBRSx1QkFBdUIsSUFDOUIsQ0FBQztZQUNQLENBQUM7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0NBR0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOWFrOebiua0u+WKqOivpuaDhVxyXG4gKi9cclxuaW1wb3J0IHsgZm9ybWF0VGltZSB9IGZyb20gXCIuLi8uLi8uLi91dGlscy91dGlsXCI7XHJcbmltcG9ydCB7IEhPU1QsIHBhcnNlRGF0YSB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudFwiO1xyXG5cclxuUGFnZSh7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgZGV0YWlsczogXCIxMjNcIixcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBpbnRlZ3JhbDogMjEsXHJcbiAgICAgICAgbG9jYXRpb246IFwi5YyX5Lqs5rW35reA6Iqx5Zut5YyX6Lev5bu66K6+5pm66LC35aSn5Y6mNeWxglwiLFxyXG4gICAgICAgIG5hbWU6IFwi5pyJ54ix55qE5oiR5Lus5LiN5a2k54us4oCU4oCU6Ieq6Zet55eH5YS/56ul5LmJ6K+K57O75YiX5rS75YqoXCIsXHJcbiAgICAgICAgc2l6ZTogMSxcclxuICAgICAgICBzdGFydFRpbWU6IGZvcm1hdFRpbWUobmV3IERhdGUoKSksXHJcbiAgICAgICAgZW5kVGltZTogZm9ybWF0VGltZShuZXcgRGF0ZShEYXRlLm5vdygpICsgMTAwMCAqIDYwICogNjAgKiAyNCkpLFxyXG4gICAgICAgIGxvb2s6IDIzLFxyXG4gICAgICAgIGNvbGxlY3Q6IDQwLFxyXG4gICAgICAgIGltZzogJy9wdWJsaWMvaW1hZ2VzLzIzLmpwZycsXHJcbiAgICAgICAgaXNDb2xsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgIHVzZXI6IHtcclxuICAgICAgICAgICAgbmFtZTogJ+WMl+S6rOWEv+erpeWMu+eWl+WPkeWxleS4reW/gycsXHJcbiAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uOiB0cnVlLFxyXG4gICAgICAgICAgICBhY3Rpdml0eUNvdW50OiAxMixcclxuICAgICAgICAgICAgZmFuczogNTIsXHJcbiAgICAgICAgICAgIGltZzogJy9wdWJsaWMvaW1hZ2VzLzIzLmpwZycsXHJcbiAgICAgICAgICAgIGRlc2M6ICfljJfkuqzljLvnlpflhL/nq6Xlj5HlsZXkuK3lv4PnmoTlraTni6znl4flkozlhbbku5bpmpznoo3mlaLkuo7mnI3liqHvvIzmmK94eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4J1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3kuovku7ZcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PeeUn+WRveWRqOacn1xyXG4gICAgb25Mb2FkKHF1ZXJ5OiBhbnkpIHtcclxuICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsOiBIT1NUICsgJy9hcGkvYWN0aXZpdHkvJyArIHF1ZXJ5LmlkLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UGFnZTogMSxcclxuICAgICAgICAgICAgICAgIHBhZ2VTaXplOiAyXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gPFJlc3BvZW5zRGF0YTxJQWN0aXZlPj5yZXMuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5wYXJzZURhdGEoZGF0YSksXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRUaW1lOiBmb3JtYXRUaW1lKG5ldyBEYXRlKGRhdGEub3JpZ2luYXRpb24pKSxcclxuICAgICAgICAgICAgICAgICAgICBlbmRUaW1lOiBmb3JtYXRUaW1lKG5ldyBEYXRlKGRhdGEuZmluaXNoKSksXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nOiAnL3B1YmxpYy9pbWFnZXMvMjMuanBnJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT3lhbbku5ZcclxuXHJcbn0pO1xyXG4iXX0=