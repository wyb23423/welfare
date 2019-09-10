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
        credit: 0,
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
        http_1.request({ url: '/api/activity/' + query.id })
            .then(function (_a) {
            var data = _a.data;
            data = util_1.parseData(data);
            _this.setData(__assign({}, data, { startTime: util_1.formatTime(new Date(+data.origination)), endTime: util_1.formatTime(new Date(+data.finish)), img: data.originImg, merchant: util_1.parseData(data.merchant) }));
        })
            .catch(console.log);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRldGFpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUdBLDRDQUE0RDtBQUM1RCw0Q0FBOEM7QUFFOUMsSUFBSSxDQUFDO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsT0FBTyxFQUFFLEtBQUs7UUFDZCxFQUFFLEVBQUUsQ0FBQztRQUNMLFFBQVEsRUFBRSxFQUFFO1FBQ1osTUFBTSxFQUFFLENBQUM7UUFDVCxRQUFRLEVBQUUsa0JBQWtCO1FBQzVCLElBQUksRUFBRSx1QkFBdUI7UUFDN0IsSUFBSSxFQUFFLENBQUM7UUFDUCxLQUFLLEVBQUUsRUFBRTtRQUNULFNBQVMsRUFBRSxpQkFBVSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7UUFDakMsT0FBTyxFQUFFLGlCQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQy9ELElBQUksRUFBRSxFQUFFO1FBQ1IsT0FBTyxFQUFFLEVBQUU7UUFDWCxHQUFHLEVBQUUsdUJBQXVCO1FBQzVCLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLFFBQVEsRUFBRTtZQUNOLElBQUksRUFBRSxZQUFZO1lBQ2xCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLElBQUksRUFBRSxFQUFFO1lBQ1IsR0FBRyxFQUFFLHVCQUF1QjtZQUM1QixNQUFNLEVBQUUsc0VBQXNFO1lBQzlFLEVBQUUsRUFBRSxDQUFDO1lBQ0wsU0FBUyxFQUFFLHVCQUF1QjtZQUNsQyxNQUFNLEVBQUUsU0FBUztTQUNwQjtLQUNKO0lBRUQsT0FBTztRQUFQLGlCQWVDO1FBZEcsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDbEMsY0FBTyxDQUFDO1lBQ0osR0FBRyxFQUFFLFdBQVc7WUFDaEIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLO1lBQzlCLElBQUksRUFBRTtnQkFDRixRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN0QixJQUFJLEVBQUUsQ0FBQzthQUNWO1NBQ0osQ0FBQzthQUNHLElBQUksQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQVEsQ0FBQztZQUN0QixXQUFXLEVBQUUsQ0FBQyxHQUFHO1lBQ2pCLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQztTQUMvRCxDQUFDLEVBSFUsQ0FHVixDQUFDO2FBQ0YsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsTUFBTSxZQUFDLEtBQVU7UUFBakIsaUJBYUM7UUFaRyxjQUFPLENBQVUsRUFBRSxHQUFHLEVBQUUsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDO2FBQ2pELElBQUksQ0FBQyxVQUFDLEVBQVE7Z0JBQU4sY0FBSTtZQUNULElBQUksR0FBWSxnQkFBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hDLEtBQUksQ0FBQyxPQUFRLGNBQ04sSUFBSSxJQUNQLFNBQVMsRUFBRSxpQkFBVSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQ2xELE9BQU8sRUFBRSxpQkFBVSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQzNDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUNuQixRQUFRLEVBQUUsZ0JBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQ3BDLENBQUM7UUFDUCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FHSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5YWs55uK5rS75Yqo6K+m5oOFXHJcbiAqL1xyXG5pbXBvcnQgeyBmb3JtYXRUaW1lLCBwYXJzZURhdGEgfSBmcm9tICcuLi8uLi8uLi91dGlscy91dGlsJztcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2h0dHAnO1xyXG5cclxuUGFnZSh7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgZGV0YWlsczogJzEyMycsXHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgaW50ZWdyYWw6IDIxLFxyXG4gICAgICAgIGNyZWRpdDogMCxcclxuICAgICAgICBsb2NhdGlvbjogJ+WMl+S6rOa1t+a3gOiKseWbreWMl+i3r+W7uuiuvuaZuuiwt+Wkp+WOpjXlsYInLFxyXG4gICAgICAgIG5hbWU6ICfmnInniLHnmoTmiJHku6zkuI3lraTni6zigJTigJToh6rpl63nl4flhL/nq6XkuYnor4rns7vliJfmtLvliqgnLFxyXG4gICAgICAgIHNpemU6IDEsXHJcbiAgICAgICAgaW50cm86ICcnLFxyXG4gICAgICAgIHN0YXJ0VGltZTogZm9ybWF0VGltZShuZXcgRGF0ZSgpKSxcclxuICAgICAgICBlbmRUaW1lOiBmb3JtYXRUaW1lKG5ldyBEYXRlKERhdGUubm93KCkgKyAxMDAwICogNjAgKiA2MCAqIDI0KSksXHJcbiAgICAgICAgbG9vazogMjMsXHJcbiAgICAgICAgY29sbGVjdDogNDAsXHJcbiAgICAgICAgaW1nOiAnL3B1YmxpYy9pbWFnZXMvMjMuanBnJyxcclxuICAgICAgICBpc0NvbGxlY3RlZDogZmFsc2UsXHJcbiAgICAgICAgbWVyY2hhbnQ6IHtcclxuICAgICAgICAgICAgbmFtZTogJ+WMl+S6rOWEv+erpeWMu+eWl+WPkeWxleS4reW/gycsXHJcbiAgICAgICAgICAgIGFjdGl2aXR5Q291bnQ6IDEyLFxyXG4gICAgICAgICAgICBmYW5zOiA1MixcclxuICAgICAgICAgICAgaW1nOiAnL3B1YmxpYy9pbWFnZXMvMjMuanBnJyxcclxuICAgICAgICAgICAgZGV0YWlsOiAn5YyX5Lqs5Yy755aX5YS/56ul5Y+R5bGV5Lit5b+D55qE5a2k54us55eH5ZKM5YW25LuW6Zqc56KN5pWi5LqO5pyN5Yqh77yM5piveHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eCcsXHJcbiAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICBvcmlnaW5JbWc6ICcvcHVibGljL2ltYWdlcy8yMy5qcGcnLFxyXG4gICAgICAgICAgICB1c2VySWQ6ICdmc2Rmc2ZkJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3kuovku7ZcclxuICAgIGNvbGxlY3QoKSB7XHJcbiAgICAgICAgY29uc3Qgb2xkID0gdGhpcy5kYXRhLmlzQ29sbGVjdGVkO1xyXG4gICAgICAgIHJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6ICcvYXBpL2xpa2UnLFxyXG4gICAgICAgICAgICBtZXRob2Q6IG9sZCA/ICdERUxFVEUnIDogJ1BVVCcsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHRhcmdldElkOiB0aGlzLmRhdGEuaWQsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgICAgICAgIGlzQ29sbGVjdGVkOiAhb2xkLFxyXG4gICAgICAgICAgICAgICAgY29sbGVjdDogb2xkID8gdGhpcy5kYXRhLmNvbGxlY3QgLSAxIDogdGhpcy5kYXRhLmNvbGxlY3QgKyAxXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xyXG4gICAgfSxcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT0955Sf5ZG95ZGo5pyfXHJcbiAgICBvbkxvYWQocXVlcnk6IGFueSkge1xyXG4gICAgICAgIHJlcXVlc3Q8SUFjdGl2ZT4oeyB1cmw6ICcvYXBpL2FjdGl2aXR5LycgKyBxdWVyeS5pZCB9KVxyXG4gICAgICAgICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGRhdGEgPSA8SUFjdGl2ZT5wYXJzZURhdGEoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0VGltZTogZm9ybWF0VGltZShuZXcgRGF0ZSgrZGF0YS5vcmlnaW5hdGlvbikpLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZFRpbWU6IGZvcm1hdFRpbWUobmV3IERhdGUoK2RhdGEuZmluaXNoKSksXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nOiBkYXRhLm9yaWdpbkltZyxcclxuICAgICAgICAgICAgICAgICAgICBtZXJjaGFudDogcGFyc2VEYXRhKGRhdGEubWVyY2hhbnQpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuICAgIH1cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT3lhbbku5ZcclxuXHJcbn0pO1xyXG4iXX0=