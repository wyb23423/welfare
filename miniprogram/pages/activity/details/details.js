"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../../../utils/util");
Page({
    data: {
        address: '北京海淀花园北路建设智谷大厦5层',
        startTime: util_1.formatTime(new Date()),
        endTime: util_1.formatTime(new Date(Date.now() + 1000 * 60 * 60 * 24)),
        look: 23,
        collect: 40,
        title: '有爱的我们不孤独——自闭症儿童义诊系列活动',
        money: 0,
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
        console.log(query);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRldGFpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSw0Q0FBaUQ7QUFFakQsSUFBSSxDQUFDO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsT0FBTyxFQUFFLGtCQUFrQjtRQUMzQixTQUFTLEVBQUUsaUJBQVUsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ2pDLE9BQU8sRUFBRSxpQkFBVSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUMvRCxJQUFJLEVBQUUsRUFBRTtRQUNSLE9BQU8sRUFBRSxFQUFFO1FBQ1gsS0FBSyxFQUFFLHVCQUF1QjtRQUM5QixLQUFLLEVBQUUsQ0FBQztRQUNSLEdBQUcsRUFBRSx1QkFBdUI7UUFDNUIsV0FBVyxFQUFFLEtBQUs7UUFDbEIsSUFBSSxFQUFFO1lBQ0YsSUFBSSxFQUFFLFlBQVk7WUFDbEIsY0FBYyxFQUFFLElBQUk7WUFDcEIsYUFBYSxFQUFFLEVBQUU7WUFDakIsSUFBSSxFQUFFLEVBQUU7WUFDUixHQUFHLEVBQUUsdUJBQXVCO1lBQzVCLElBQUksRUFBRSxzRUFBc0U7U0FDL0U7S0FDSjtJQUlELE1BQU0sWUFBQyxLQUFVO1FBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QixDQUFDO0NBR0osQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOWFrOebiua0u+WKqOivpuaDhVxyXG4gKi9cclxuaW1wb3J0IHsgZm9ybWF0VGltZSB9IGZyb20gXCIuLi8uLi8uLi91dGlscy91dGlsXCI7XHJcblxyXG5QYWdlKHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBhZGRyZXNzOiAn5YyX5Lqs5rW35reA6Iqx5Zut5YyX6Lev5bu66K6+5pm66LC35aSn5Y6mNeWxgicsXHJcbiAgICAgICAgc3RhcnRUaW1lOiBmb3JtYXRUaW1lKG5ldyBEYXRlKCkpLFxyXG4gICAgICAgIGVuZFRpbWU6IGZvcm1hdFRpbWUobmV3IERhdGUoRGF0ZS5ub3coKSArIDEwMDAgKiA2MCAqIDYwICogMjQpKSxcclxuICAgICAgICBsb29rOiAyMyxcclxuICAgICAgICBjb2xsZWN0OiA0MCxcclxuICAgICAgICB0aXRsZTogJ+acieeIseeahOaIkeS7rOS4jeWtpOeLrOKAlOKAlOiHqumXreeXh+WEv+erpeS5ieiviuezu+WIl+a0u+WKqCcsXHJcbiAgICAgICAgbW9uZXk6IDAsXHJcbiAgICAgICAgaW1nOiAnL3B1YmxpYy9pbWFnZXMvMjMuanBnJyxcclxuICAgICAgICBpc0NvbGxlY3RlZDogZmFsc2UsXHJcbiAgICAgICAgdXNlcjoge1xyXG4gICAgICAgICAgICBuYW1lOiAn5YyX5Lqs5YS/56ul5Yy755aX5Y+R5bGV5Lit5b+DJyxcclxuICAgICAgICAgICAgYXV0aGVudGljYXRpb246IHRydWUsXHJcbiAgICAgICAgICAgIGFjdGl2aXR5Q291bnQ6IDEyLFxyXG4gICAgICAgICAgICBmYW5zOiA1MixcclxuICAgICAgICAgICAgaW1nOiAnL3B1YmxpYy9pbWFnZXMvMjMuanBnJyxcclxuICAgICAgICAgICAgZGVzYzogJ+WMl+S6rOWMu+eWl+WEv+erpeWPkeWxleS4reW/g+eahOWtpOeLrOeXh+WSjOWFtuS7lumanOeijeaVouS6juacjeWKoe+8jOaYr3h4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHgnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PeS6i+S7tlxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT0955Sf5ZG95ZGo5pyfXHJcbiAgICBvbkxvYWQocXVlcnk6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHF1ZXJ5KTtcclxuICAgIH1cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT3lhbbku5ZcclxuXHJcbn0pXHJcbiJdfQ==