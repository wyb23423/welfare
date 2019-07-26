"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = getApp();
Page({
    data: {
        menu: [
            {
                name: '我的关注',
                icon: 'heart',
                url: ''
            },
            {
                name: '我的收藏',
                icon: 'shoucang',
                url: ''
            },
            {
                name: '我的发起',
                icon: 'list-2-copy',
                url: '../history/history?type=initiate'
            },
            {
                name: '入驻商家',
                icon: 'shangjiarenzheng',
                url: ''
            },
            {
                name: '创建活动',
                icon: 'chuangjianhuodong',
                url: ''
            },
            {
                name: '商品上架',
                icon: 'shangjia',
                url: ''
            },
            {
                name: '我的订单',
                icon: 'dingdan',
                url: ''
            },
        ]
    },
    onLoad: function () {
        var userInfo = app.globalData.userInfo;
        this.setData({
            name: userInfo.nickName,
            img: userInfo.avatarUrl
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUtBLElBQU0sR0FBRyxHQUFXLE1BQU0sRUFBRSxDQUFDO0FBRTdCLElBQUksQ0FBQztJQUNELElBQUksRUFBRTtRQUNGLElBQUksRUFBRTtZQUNGO2dCQUNJLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRSxPQUFPO2dCQUNiLEdBQUcsRUFBRSxFQUFFO2FBQ1Y7WUFDRDtnQkFDSSxJQUFJLEVBQUUsTUFBTTtnQkFDWixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsR0FBRyxFQUFFLEVBQUU7YUFDVjtZQUNEO2dCQUNJLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRSxhQUFhO2dCQUNuQixHQUFHLEVBQUUsa0NBQWtDO2FBQzFDO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLE1BQU07Z0JBQ1osSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsR0FBRyxFQUFFLEVBQUU7YUFDVjtZQUNEO2dCQUNJLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRSxtQkFBbUI7Z0JBQ3pCLEdBQUcsRUFBRSxFQUFFO2FBQ1Y7WUFDRDtnQkFDSSxJQUFJLEVBQUUsTUFBTTtnQkFDWixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsR0FBRyxFQUFFLEVBQUU7YUFDVjtZQUNEO2dCQUNJLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRSxTQUFTO2dCQUNmLEdBQUcsRUFBRSxFQUFFO2FBQ1Y7U0FDSjtLQUNKO0lBQ0QsTUFBTTtRQUNGLElBQU0sUUFBUSxHQUFnQixHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztRQUN0RCxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1YsSUFBSSxFQUFFLFFBQVEsQ0FBQyxRQUFRO1lBQ3ZCLEdBQUcsRUFBRSxRQUFRLENBQUMsU0FBUztTQUMxQixDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOS4quS6uuS4reW/g1xyXG4gKi9cclxuaW1wb3J0IHsgSU15QXBwIH0gZnJvbSBcIi4uLy4uLy4uL2FwcFwiO1xyXG5cclxuY29uc3QgYXBwID0gPElNeUFwcD5nZXRBcHAoKTtcclxuXHJcblBhZ2Uoe1xyXG4gICAgZGF0YToge1xyXG4gICAgICAgIG1lbnU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+aIkeeahOWFs+azqCcsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnaGVhcnQnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5oiR55qE5pS26JePJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdzaG91Y2FuZycsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfmiJHnmoTlj5HotbcnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2xpc3QtMi1jb3B5JyxcclxuICAgICAgICAgICAgICAgIHVybDogJy4uL2hpc3RvcnkvaGlzdG9yeT90eXBlPWluaXRpYXRlJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5YWl6am75ZWG5a62JyxcclxuICAgICAgICAgICAgICAgIGljb246ICdzaGFuZ2ppYXJlbnpoZW5nJyxcclxuICAgICAgICAgICAgICAgIHVybDogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+WIm+W7uua0u+WKqCcsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnY2h1YW5namlhbmh1b2RvbmcnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5ZWG5ZOB5LiK5p62JyxcclxuICAgICAgICAgICAgICAgIGljb246ICdzaGFuZ2ppYScsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfmiJHnmoTorqLljZUnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2RpbmdkYW4nLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgY29uc3QgdXNlckluZm86IHd4LlVzZXJJbmZvID0gYXBwLmdsb2JhbERhdGEudXNlckluZm87XHJcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICAgIG5hbWU6IHVzZXJJbmZvLm5pY2tOYW1lLFxyXG4gICAgICAgICAgICBpbWc6IHVzZXJJbmZvLmF2YXRhclVybFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTsiXX0=