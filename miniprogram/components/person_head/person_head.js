"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = getApp();
Component({
    properties: {
        isindex: {
            type: Boolean,
            value: false
        }
    },
    data: {
        img: '',
        name: ''
    },
    attached: function () {
        var userInfo = app.globalData.userInfo;
        this.setData({
            name: userInfo.nickName,
            img: userInfo.avatarUrl
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uX2hlYWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwZXJzb25faGVhZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUtBLElBQU0sR0FBRyxHQUFXLE1BQU0sRUFBRSxDQUFDO0FBRTdCLFNBQVMsQ0FBQztJQUNOLFVBQVUsRUFBRTtRQUNSLE9BQU8sRUFBRTtZQUNMLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDZjtLQUNKO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsR0FBRyxFQUFFLEVBQUU7UUFDUCxJQUFJLEVBQUUsRUFBRTtLQUNYO0lBQ0QsUUFBUTtRQUNKLElBQU0sUUFBUSxHQUFnQixHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztRQUN0RCxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1YsSUFBSSxFQUFFLFFBQVEsQ0FBQyxRQUFRO1lBQ3ZCLEdBQUcsRUFBRSxRQUFRLENBQUMsU0FBUztTQUMxQixDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOS4quS6uuS/oeaBr+mhtemhtumDqOWktOWDj+WPiuWQjeensFxyXG4gKi9cclxuaW1wb3J0IHsgSU15QXBwIH0gZnJvbSAnLi4vLi4vYXBwJztcclxuXHJcbmNvbnN0IGFwcCA9IDxJTXlBcHA+Z2V0QXBwKCk7XHJcblxyXG5Db21wb25lbnQoe1xyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGlzaW5kZXg6IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBpbWc6ICcnLFxyXG4gICAgICAgIG5hbWU6ICcnXHJcbiAgICB9LFxyXG4gICAgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgY29uc3QgdXNlckluZm86IHd4LlVzZXJJbmZvID0gYXBwLmdsb2JhbERhdGEudXNlckluZm87XHJcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICAgIG5hbWU6IHVzZXJJbmZvLm5pY2tOYW1lLFxyXG4gICAgICAgICAgICBpbWc6IHVzZXJJbmZvLmF2YXRhclVybFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuIl19