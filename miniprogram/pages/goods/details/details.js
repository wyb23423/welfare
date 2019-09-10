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
var list_item_1 = require("../../../template/list_item/list_item");
Page({
    data: {
        details: '123',
        id: 1,
        integral: 21,
        credit: 0,
        name: '有爱的我们不孤独——自闭症儿童义诊系列活动',
        size: 1,
        startTime: util_1.formatTime(new Date()),
        endTime: util_1.formatTime(new Date(Date.now() + 1000 * 60 * 60 * 24)),
        look: 23,
        collect: 40,
        img: '/public/images/23.jpg',
        isCollected: false,
        merchant: {
            name: '北京儿童医疗发展中心',
            activityCount: 12,
            fans: 52,
            img: '/public/images/23.jpg',
            detail: '北京医疗儿童发展中心的孤独症和其他障碍敢于服务，是xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            id: 1,
            originImg: '/public/images/23.jpg',
            userId: 'fsdfsfd'
        }
    },
    exchange: list_item_1.exchange,
    collect: function () {
        var _this = this;
        var old = this.data.isCollected;
        http_1.request({
            url: '/api/like',
            method: old ? 'DELETE' : 'PUT',
            data: {
                targetId: this.data.id,
                type: 0
            }
        })
            .then(function () { return _this.setData({
            isCollected: !old,
            collect: old ? _this.data.collect - 1 : _this.data.collect + 1
        }); })
            .catch(console.log);
    },
    onLoad: function (query) {
        var _this = this;
        http_1.request({ url: '/api/commodity/' + query.id })
            .then(function (_a) {
            var data = _a.data;
            data = util_1.parseData(data);
            _this.setData(__assign({}, data, { startTime: util_1.formatTime(new Date(+data.origination)), endTime: util_1.formatTime(new Date(+data.finish)), img: data.originImg, merchant: util_1.parseData(data.merchant) }));
        })
            .catch(console.log);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRldGFpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUdBLDRDQUE0RDtBQUM1RCw0Q0FBOEM7QUFDOUMsbUVBQWlFO0FBRWpFLElBQUksQ0FBQztJQUNELElBQUksRUFBRTtRQUNGLE9BQU8sRUFBRSxLQUFLO1FBQ2QsRUFBRSxFQUFFLENBQUM7UUFDTCxRQUFRLEVBQUUsRUFBRTtRQUNaLE1BQU0sRUFBRSxDQUFDO1FBQ1QsSUFBSSxFQUFFLHVCQUF1QjtRQUM3QixJQUFJLEVBQUUsQ0FBQztRQUNQLFNBQVMsRUFBRSxpQkFBVSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7UUFDakMsT0FBTyxFQUFFLGlCQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQy9ELElBQUksRUFBRSxFQUFFO1FBQ1IsT0FBTyxFQUFFLEVBQUU7UUFDWCxHQUFHLEVBQUUsdUJBQXVCO1FBQzVCLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLFFBQVEsRUFBRTtZQUNOLElBQUksRUFBRSxZQUFZO1lBQ2xCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLElBQUksRUFBRSxFQUFFO1lBQ1IsR0FBRyxFQUFFLHVCQUF1QjtZQUM1QixNQUFNLEVBQUUsc0VBQXNFO1lBQzlFLEVBQUUsRUFBRSxDQUFDO1lBQ0wsU0FBUyxFQUFFLHVCQUF1QjtZQUNsQyxNQUFNLEVBQUUsU0FBUztTQUNwQjtLQUNKO0lBRUQsUUFBUSxzQkFBQTtJQUNSLE9BQU87UUFBUCxpQkFlQztRQWRHLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ2xDLGNBQU8sQ0FBQztZQUNKLEdBQUcsRUFBRSxXQUFXO1lBQ2hCLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSztZQUM5QixJQUFJLEVBQUU7Z0JBQ0YsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDdEIsSUFBSSxFQUFFLENBQUM7YUFDVjtTQUNKLENBQUM7YUFDRyxJQUFJLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFRLENBQUM7WUFDdEIsV0FBVyxFQUFFLENBQUMsR0FBRztZQUNqQixPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUM7U0FDL0QsQ0FBQyxFQUhVLENBR1YsQ0FBQzthQUNGLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELE1BQU0sWUFBQyxLQUFVO1FBQWpCLGlCQWFDO1FBWkcsY0FBTyxDQUFVLEVBQUUsR0FBRyxFQUFFLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQzthQUNsRCxJQUFJLENBQUMsVUFBQyxFQUFRO2dCQUFOLGNBQUk7WUFDVCxJQUFJLEdBQVksZ0JBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQyxLQUFJLENBQUMsT0FBUSxjQUNOLElBQUksSUFDUCxTQUFTLEVBQUUsaUJBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUNsRCxPQUFPLEVBQUUsaUJBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUMzQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFDbkIsUUFBUSxFQUFFLGdCQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUNwQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBR0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOWFrOebiua0u+WKqOivpuaDhVxyXG4gKi9cclxuaW1wb3J0IHsgZm9ybWF0VGltZSwgcGFyc2VEYXRhIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdXRpbCc7XHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi91dGlscy9odHRwJztcclxuaW1wb3J0IHsgZXhjaGFuZ2UgfSBmcm9tICcuLi8uLi8uLi90ZW1wbGF0ZS9saXN0X2l0ZW0vbGlzdF9pdGVtJztcclxuXHJcblBhZ2Uoe1xyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGRldGFpbHM6ICcxMjMnLFxyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIGludGVncmFsOiAyMSxcclxuICAgICAgICBjcmVkaXQ6IDAsXHJcbiAgICAgICAgbmFtZTogJ+acieeIseeahOaIkeS7rOS4jeWtpOeLrOKAlOKAlOiHqumXreeXh+WEv+erpeS5ieiviuezu+WIl+a0u+WKqCcsXHJcbiAgICAgICAgc2l6ZTogMSxcclxuICAgICAgICBzdGFydFRpbWU6IGZvcm1hdFRpbWUobmV3IERhdGUoKSksXHJcbiAgICAgICAgZW5kVGltZTogZm9ybWF0VGltZShuZXcgRGF0ZShEYXRlLm5vdygpICsgMTAwMCAqIDYwICogNjAgKiAyNCkpLFxyXG4gICAgICAgIGxvb2s6IDIzLFxyXG4gICAgICAgIGNvbGxlY3Q6IDQwLFxyXG4gICAgICAgIGltZzogJy9wdWJsaWMvaW1hZ2VzLzIzLmpwZycsXHJcbiAgICAgICAgaXNDb2xsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgIG1lcmNoYW50OiB7XHJcbiAgICAgICAgICAgIG5hbWU6ICfljJfkuqzlhL/nq6XljLvnlpflj5HlsZXkuK3lv4MnLFxyXG4gICAgICAgICAgICBhY3Rpdml0eUNvdW50OiAxMixcclxuICAgICAgICAgICAgZmFuczogNTIsXHJcbiAgICAgICAgICAgIGltZzogJy9wdWJsaWMvaW1hZ2VzLzIzLmpwZycsXHJcbiAgICAgICAgICAgIGRldGFpbDogJ+WMl+S6rOWMu+eWl+WEv+erpeWPkeWxleS4reW/g+eahOWtpOeLrOeXh+WSjOWFtuS7lumanOeijeaVouS6juacjeWKoe+8jOaYr3h4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHgnLFxyXG4gICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgb3JpZ2luSW1nOiAnL3B1YmxpYy9pbWFnZXMvMjMuanBnJyxcclxuICAgICAgICAgICAgdXNlcklkOiAnZnNkZnNmZCdcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT095LqL5Lu2XHJcbiAgICBleGNoYW5nZSxcclxuICAgIGNvbGxlY3QoKSB7XHJcbiAgICAgICAgY29uc3Qgb2xkID0gdGhpcy5kYXRhLmlzQ29sbGVjdGVkO1xyXG4gICAgICAgIHJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6ICcvYXBpL2xpa2UnLFxyXG4gICAgICAgICAgICBtZXRob2Q6IG9sZCA/ICdERUxFVEUnIDogJ1BVVCcsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHRhcmdldElkOiB0aGlzLmRhdGEuaWQsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgICAgICAgIGlzQ29sbGVjdGVkOiAhb2xkLFxyXG4gICAgICAgICAgICAgICAgY29sbGVjdDogb2xkID8gdGhpcy5kYXRhLmNvbGxlY3QgLSAxIDogdGhpcy5kYXRhLmNvbGxlY3QgKyAxXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xyXG4gICAgfSxcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT0955Sf5ZG95ZGo5pyfXHJcbiAgICBvbkxvYWQocXVlcnk6IGFueSkge1xyXG4gICAgICAgIHJlcXVlc3Q8SUFjdGl2ZT4oeyB1cmw6ICcvYXBpL2NvbW1vZGl0eS8nICsgcXVlcnkuaWQgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkYXRhID0gPElBY3RpdmU+cGFyc2VEYXRhKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICBzdGFydFRpbWU6IGZvcm1hdFRpbWUobmV3IERhdGUoK2RhdGEub3JpZ2luYXRpb24pKSxcclxuICAgICAgICAgICAgICAgICAgICBlbmRUaW1lOiBmb3JtYXRUaW1lKG5ldyBEYXRlKCtkYXRhLmZpbmlzaCkpLFxyXG4gICAgICAgICAgICAgICAgICAgIGltZzogZGF0YS5vcmlnaW5JbWcsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVyY2hhbnQ6IHBhcnNlRGF0YShkYXRhLm1lcmNoYW50KVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XHJcbiAgICB9XHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT095YW25LuWXHJcblxyXG59KTtcclxuIl19