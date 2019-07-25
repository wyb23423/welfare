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
            img: '/public/images/23.jpg'
        }
    },
    onLoad: function (query) {
        console.log(query);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRldGFpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSw0Q0FBaUQ7QUFFakQsSUFBSSxDQUFDO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsT0FBTyxFQUFFLGtCQUFrQjtRQUMzQixTQUFTLEVBQUUsaUJBQVUsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ2pDLE9BQU8sRUFBRSxpQkFBVSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUMvRCxJQUFJLEVBQUUsRUFBRTtRQUNSLE9BQU8sRUFBRSxFQUFFO1FBQ1gsS0FBSyxFQUFFLHVCQUF1QjtRQUM5QixLQUFLLEVBQUUsQ0FBQztRQUNSLEdBQUcsRUFBRSx1QkFBdUI7UUFDNUIsV0FBVyxFQUFFLEtBQUs7UUFDbEIsSUFBSSxFQUFFO1lBQ0YsSUFBSSxFQUFFLFlBQVk7WUFDbEIsY0FBYyxFQUFFLElBQUk7WUFDcEIsYUFBYSxFQUFFLEVBQUU7WUFDakIsSUFBSSxFQUFFLEVBQUU7WUFDUixHQUFHLEVBQUUsdUJBQXVCO1NBQy9CO0tBQ0o7SUFJRCxNQUFNLFlBQUMsS0FBVTtRQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkIsQ0FBQztDQUdKLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDlhaznm4rmtLvliqjor6bmg4VcclxuICovXHJcbmltcG9ydCB7IGZvcm1hdFRpbWUgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvdXRpbFwiO1xyXG5cclxuUGFnZSh7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgYWRkcmVzczogJ+WMl+S6rOa1t+a3gOiKseWbreWMl+i3r+W7uuiuvuaZuuiwt+Wkp+WOpjXlsYInLFxyXG4gICAgICAgIHN0YXJ0VGltZTogZm9ybWF0VGltZShuZXcgRGF0ZSgpKSxcclxuICAgICAgICBlbmRUaW1lOiBmb3JtYXRUaW1lKG5ldyBEYXRlKERhdGUubm93KCkgKyAxMDAwICogNjAgKiA2MCAqIDI0KSksXHJcbiAgICAgICAgbG9vazogMjMsXHJcbiAgICAgICAgY29sbGVjdDogNDAsXHJcbiAgICAgICAgdGl0bGU6ICfmnInniLHnmoTmiJHku6zkuI3lraTni6zigJTigJToh6rpl63nl4flhL/nq6XkuYnor4rns7vliJfmtLvliqgnLFxyXG4gICAgICAgIG1vbmV5OiAwLFxyXG4gICAgICAgIGltZzogJy9wdWJsaWMvaW1hZ2VzLzIzLmpwZycsXHJcbiAgICAgICAgaXNDb2xsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgIHVzZXI6IHtcclxuICAgICAgICAgICAgbmFtZTogJ+WMl+S6rOWEv+erpeWMu+eWl+WPkeWxleS4reW/gycsXHJcbiAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uOiB0cnVlLFxyXG4gICAgICAgICAgICBhY3Rpdml0eUNvdW50OiAxMixcclxuICAgICAgICAgICAgZmFuczogNTIsXHJcbiAgICAgICAgICAgIGltZzogJy9wdWJsaWMvaW1hZ2VzLzIzLmpwZydcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT095LqL5Lu2XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT3nlJ/lkb3lkajmnJ9cclxuICAgIG9uTG9hZChxdWVyeTogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocXVlcnkpO1xyXG4gICAgfVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PeWFtuS7llxyXG5cclxufSlcclxuIl19