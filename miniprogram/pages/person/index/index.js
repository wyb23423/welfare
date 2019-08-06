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
                url: '../history/history?type=collection'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUtBLElBQU0sR0FBRyxHQUFXLE1BQU0sRUFBRSxDQUFDO0FBRTdCLElBQUksQ0FBQztJQUNELElBQUksRUFBRTtRQUNGLElBQUksRUFBRTtZQUNGO2dCQUNJLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRSxPQUFPO2dCQUNiLEdBQUcsRUFBRSxFQUFFO2FBQ1Y7WUFDRDtnQkFDSSxJQUFJLEVBQUUsTUFBTTtnQkFDWixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsR0FBRyxFQUFFLG9DQUFvQzthQUM1QztZQUNEO2dCQUNJLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRSxhQUFhO2dCQUNuQixHQUFHLEVBQUUsa0NBQWtDO2FBQzFDO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLE1BQU07Z0JBQ1osSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsR0FBRyxFQUFFLEVBQUU7YUFDVjtZQUNEO2dCQUNJLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRSxtQkFBbUI7Z0JBQ3pCLEdBQUcsRUFBRSxFQUFFO2FBQ1Y7WUFDRDtnQkFDSSxJQUFJLEVBQUUsTUFBTTtnQkFDWixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsR0FBRyxFQUFFLEVBQUU7YUFDVjtZQUNEO2dCQUNJLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRSxTQUFTO2dCQUNmLEdBQUcsRUFBRSxFQUFFO2FBQ1Y7U0FDSjtLQUNKO0lBQ0QsTUFBTTtRQUNGLElBQU0sUUFBUSxHQUFnQixHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztRQUN0RCxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1YsSUFBSSxFQUFFLFFBQVEsQ0FBQyxRQUFRO1lBQ3ZCLEdBQUcsRUFBRSxRQUFRLENBQUMsU0FBUztTQUMxQixDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOS4quS6uuS4reW/g1xyXG4gKi9cclxuaW1wb3J0IHsgSU15QXBwIH0gZnJvbSBcIi4uLy4uLy4uL2FwcFwiO1xyXG5cclxuY29uc3QgYXBwID0gPElNeUFwcD5nZXRBcHAoKTtcclxuXHJcblBhZ2Uoe1xyXG4gICAgZGF0YToge1xyXG4gICAgICAgIG1lbnU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+aIkeeahOWFs+azqCcsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnaGVhcnQnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5oiR55qE5pS26JePJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdzaG91Y2FuZycsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcuLi9oaXN0b3J5L2hpc3Rvcnk/dHlwZT1jb2xsZWN0aW9uJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5oiR55qE5Y+R6LW3JyxcclxuICAgICAgICAgICAgICAgIGljb246ICdsaXN0LTItY29weScsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcuLi9oaXN0b3J5L2hpc3Rvcnk/dHlwZT1pbml0aWF0ZSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+WFpempu+WVhuWuticsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc2hhbmdqaWFyZW56aGVuZycsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfliJvlu7rmtLvliqgnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2NodWFuZ2ppYW5odW9kb25nJyxcclxuICAgICAgICAgICAgICAgIHVybDogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+WVhuWTgeS4iuaeticsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc2hhbmdqaWEnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5oiR55qE6K6i5Y2VJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdkaW5nZGFuJyxcclxuICAgICAgICAgICAgICAgIHVybDogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNvbnN0IHVzZXJJbmZvOiB3eC5Vc2VySW5mbyA9IGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvO1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgICBuYW1lOiB1c2VySW5mby5uaWNrTmFtZSxcclxuICAgICAgICAgICAgaW1nOiB1c2VySW5mby5hdmF0YXJVcmxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7Il19