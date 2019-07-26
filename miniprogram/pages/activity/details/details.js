"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../../../utils/util");
Page({
    data: {
        id: 1,
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
        this.setData({ id: query.id });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRldGFpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSw0Q0FBaUQ7QUFFakQsSUFBSSxDQUFDO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsRUFBRSxFQUFFLENBQUM7UUFDTCxPQUFPLEVBQUUsa0JBQWtCO1FBQzNCLFNBQVMsRUFBRSxpQkFBVSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7UUFDakMsT0FBTyxFQUFFLGlCQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQy9ELElBQUksRUFBRSxFQUFFO1FBQ1IsT0FBTyxFQUFFLEVBQUU7UUFDWCxLQUFLLEVBQUUsdUJBQXVCO1FBQzlCLEtBQUssRUFBRSxDQUFDO1FBQ1IsR0FBRyxFQUFFLHVCQUF1QjtRQUM1QixXQUFXLEVBQUUsS0FBSztRQUNsQixJQUFJLEVBQUU7WUFDRixJQUFJLEVBQUUsWUFBWTtZQUNsQixjQUFjLEVBQUUsSUFBSTtZQUNwQixhQUFhLEVBQUUsRUFBRTtZQUNqQixJQUFJLEVBQUUsRUFBRTtZQUNSLEdBQUcsRUFBRSx1QkFBdUI7WUFDNUIsSUFBSSxFQUFFLHNFQUFzRTtTQUMvRTtLQUNKO0lBSUQsTUFBTSxZQUFDLEtBQVU7UUFDYixJQUFJLENBQUMsT0FBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Q0FHSixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5YWs55uK5rS75Yqo6K+m5oOFXHJcbiAqL1xyXG5pbXBvcnQgeyBmb3JtYXRUaW1lIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3V0aWxcIjtcclxuXHJcblBhZ2Uoe1xyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIGFkZHJlc3M6ICfljJfkuqzmtbfmt4DoirHlm63ljJfot6/lu7rorr7mmbrosLflpKfljqY15bGCJyxcclxuICAgICAgICBzdGFydFRpbWU6IGZvcm1hdFRpbWUobmV3IERhdGUoKSksXHJcbiAgICAgICAgZW5kVGltZTogZm9ybWF0VGltZShuZXcgRGF0ZShEYXRlLm5vdygpICsgMTAwMCAqIDYwICogNjAgKiAyNCkpLFxyXG4gICAgICAgIGxvb2s6IDIzLFxyXG4gICAgICAgIGNvbGxlY3Q6IDQwLFxyXG4gICAgICAgIHRpdGxlOiAn5pyJ54ix55qE5oiR5Lus5LiN5a2k54us4oCU4oCU6Ieq6Zet55eH5YS/56ul5LmJ6K+K57O75YiX5rS75YqoJyxcclxuICAgICAgICBtb25leTogMCxcclxuICAgICAgICBpbWc6ICcvcHVibGljL2ltYWdlcy8yMy5qcGcnLFxyXG4gICAgICAgIGlzQ29sbGVjdGVkOiBmYWxzZSxcclxuICAgICAgICB1c2VyOiB7XHJcbiAgICAgICAgICAgIG5hbWU6ICfljJfkuqzlhL/nq6XljLvnlpflj5HlsZXkuK3lv4MnLFxyXG4gICAgICAgICAgICBhdXRoZW50aWNhdGlvbjogdHJ1ZSxcclxuICAgICAgICAgICAgYWN0aXZpdHlDb3VudDogMTIsXHJcbiAgICAgICAgICAgIGZhbnM6IDUyLFxyXG4gICAgICAgICAgICBpbWc6ICcvcHVibGljL2ltYWdlcy8yMy5qcGcnLFxyXG4gICAgICAgICAgICBkZXNjOiAn5YyX5Lqs5Yy755aX5YS/56ul5Y+R5bGV5Lit5b+D55qE5a2k54us55eH5ZKM5YW25LuW6Zqc56KN5pWi5LqO5pyN5Yqh77yM5piveHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eCdcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT095LqL5Lu2XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT3nlJ/lkb3lkajmnJ9cclxuICAgIG9uTG9hZChxdWVyeTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhISh7IGlkOiBxdWVyeS5pZCB9KTtcclxuICAgIH1cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT3lhbbku5ZcclxuXHJcbn0pXHJcbiJdfQ==