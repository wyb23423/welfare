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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uX2hlYWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwZXJzb25faGVhZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUtBLElBQU0sR0FBRyxHQUFXLE1BQU0sRUFBRSxDQUFDO0FBRTdCLFNBQVMsQ0FBQztJQUNOLFVBQVUsRUFBRTtRQUNSLE9BQU8sRUFBRTtZQUNMLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDZjtLQUNKO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsR0FBRyxFQUFFLEVBQUU7UUFDUCxJQUFJLEVBQUUsRUFBRTtLQUNYO0lBQ0QsUUFBUTtRQUNKLElBQU0sUUFBUSxHQUFnQixHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztRQUN0RCxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1YsSUFBSSxFQUFFLFFBQVEsQ0FBQyxRQUFRO1lBQ3ZCLEdBQUcsRUFBRSxRQUFRLENBQUMsU0FBUztTQUMxQixDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0osQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOS4quS6uuS/oeaBr+mhtemhtumDqOWktOWDj+WPiuWQjeensFxyXG4gKi9cclxuaW1wb3J0IHsgSU15QXBwIH0gZnJvbSBcIi4uLy4uL2FwcFwiO1xyXG5cclxuY29uc3QgYXBwID0gPElNeUFwcD5nZXRBcHAoKTtcclxuXHJcbkNvbXBvbmVudCh7XHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgaXNpbmRleDoge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGltZzogJycsXHJcbiAgICAgICAgbmFtZTogJydcclxuICAgIH0sXHJcbiAgICBhdHRhY2hlZCgpIHtcclxuICAgICAgICBjb25zdCB1c2VySW5mbzogd3guVXNlckluZm8gPSBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbztcclxuICAgICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgICAgbmFtZTogdXNlckluZm8ubmlja05hbWUsXHJcbiAgICAgICAgICAgIGltZzogdXNlckluZm8uYXZhdGFyVXJsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pXHJcbiJdfQ==