"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = require("../../../constant/store");
var index_1 = require("../../../constant/index");
Page({
    data: {
        menu: [
            {
                name: '我的关注',
                icon: 'heart',
                url: '../follow/follow'
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
                url: '/pages/person/settled_in/settled_in'
            }
        ]
    },
    onShow: function () {
        var _this = this;
        this.data.menu.length = 4;
        wx.getStorage({
            key: store_1.USER_AUTHENTICATION,
            success: function (_a) {
                var data = _a.data;
                if (data === index_1.Authentication.commodity) {
                    _this.commodity();
                }
                else if (data === index_1.Authentication.official) {
                    _this.merchant();
                }
            }
        });
    },
    commodity: function () {
        var menu = this.data.menu;
        menu.push({
            name: '创建活动',
            icon: 'chuangjianhuodong',
            url: '/pages/activity/create/create',
        }, {
            name: '审核商家',
            url: '/pages/audit/business/business'
        }, {
            name: '审核商品',
            url: '/pages/audit/goods/goods'
        }, {
            name: '广告设置',
            url: '/pages/ad_setting/ad'
        });
        this.setData({ menu: menu });
    },
    merchant: function () {
        var menu = this.data.menu;
        menu[3].name = '修改商家信息';
        menu.push({
            name: '商品上架',
            icon: 'shangjia',
            url: '/pages/goods/create/create',
        }, {
            name: '我的订单',
            icon: 'dingdan',
            url: '/pages/person/order/order'
        });
        this.setData({ menu: menu });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUE4RDtBQUM5RCxpREFBeUQ7QUFZekQsSUFBSSxDQUFDO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFO1lBQ0Y7Z0JBQ0ksSUFBSSxFQUFFLE1BQU07Z0JBQ1osSUFBSSxFQUFFLE9BQU87Z0JBQ2IsR0FBRyxFQUFFLGtCQUFrQjthQUMxQjtZQUNEO2dCQUNJLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRSxVQUFVO2dCQUNoQixHQUFHLEVBQUUsb0NBQW9DO2FBQzVDO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLE1BQU07Z0JBQ1osSUFBSSxFQUFFLGFBQWE7Z0JBQ25CLEdBQUcsRUFBRSxrQ0FBa0M7YUFDMUM7WUFDRDtnQkFDSSxJQUFJLEVBQUUsTUFBTTtnQkFDWixJQUFJLEVBQUUsa0JBQWtCO2dCQUN4QixHQUFHLEVBQUUscUNBQXFDO2FBQzdDO1NBQ0o7S0FDSjtJQUNELE1BQU07UUFBTixpQkFZQztRQVhHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDMUIsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNWLEdBQUcsRUFBRSwyQkFBbUI7WUFDeEIsT0FBTyxFQUFFLFVBQUMsRUFBUTtvQkFBTixjQUFJO2dCQUNaLElBQUcsSUFBSSxLQUFLLHNCQUFjLENBQUMsU0FBUyxFQUFFO29CQUNsQyxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7aUJBQ3BCO3FCQUFNLElBQUksSUFBSSxLQUFLLHNCQUFjLENBQUMsUUFBUSxFQUFFO29CQUN6QyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7aUJBQ25CO1lBQ0wsQ0FBQztTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxTQUFTO1FBQ0wsSUFBTSxJQUFJLEdBQWdCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxJQUFJLENBQ0w7WUFDSSxJQUFJLEVBQUUsTUFBTTtZQUNaLElBQUksRUFBRSxtQkFBbUI7WUFDekIsR0FBRyxFQUFFLCtCQUErQjtTQUN2QyxFQUNEO1lBQ0ksSUFBSSxFQUFFLE1BQU07WUFDWixHQUFHLEVBQUUsZ0NBQWdDO1NBQ3hDLEVBQ0Q7WUFDSSxJQUFJLEVBQUUsTUFBTTtZQUNaLEdBQUcsRUFBRSwwQkFBMEI7U0FDbEMsRUFDRDtZQUNJLElBQUksRUFBRSxNQUFNO1lBQ1osR0FBRyxFQUFFLHNCQUFzQjtTQUM5QixDQUNKLENBQUM7UUFDRixJQUFJLENBQUMsT0FBUSxDQUFDLEVBQUUsSUFBSSxNQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDRCxRQUFRO1FBQ0osSUFBTSxJQUFJLEdBQWdCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQ0w7WUFDSSxJQUFJLEVBQUUsTUFBTTtZQUNaLElBQUksRUFBRSxVQUFVO1lBQ2hCLEdBQUcsRUFBRSw0QkFBNEI7U0FDcEMsRUFDRDtZQUNJLElBQUksRUFBRSxNQUFNO1lBQ1osSUFBSSxFQUFFLFNBQVM7WUFDZixHQUFHLEVBQUUsMkJBQTJCO1NBQ25DLENBQ0osQ0FBQztRQUNGLElBQUksQ0FBQyxPQUFRLENBQUMsRUFBRSxJQUFJLE1BQUEsRUFBRSxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVTRVJfQVVUSEVOVElDQVRJT04gfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudC9zdG9yZSc7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnQvaW5kZXgnO1xyXG5cclxuLyoqXHJcbiAqIOS4quS6uuS4reW/g1xyXG4gKi9cclxuXHJcbmludGVyZmFjZSBNZW51SXRlbSB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBpY29uPzogc3RyaW5nO1xyXG4gICAgdXJsOiBzdHJpbmc7XHJcbn1cclxuXHJcblBhZ2Uoe1xyXG4gICAgZGF0YToge1xyXG4gICAgICAgIG1lbnU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+aIkeeahOWFs+azqCcsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnaGVhcnQnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnLi4vZm9sbG93L2ZvbGxvdydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+aIkeeahOaUtuiXjycsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc2hvdWNhbmcnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnLi4vaGlzdG9yeS9oaXN0b3J5P3R5cGU9Y29sbGVjdGlvbidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+aIkeeahOWPkei1tycsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnbGlzdC0yLWNvcHknLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnLi4vaGlzdG9yeS9oaXN0b3J5P3R5cGU9aW5pdGlhdGUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICflhaXpqbvllYblrrYnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3NoYW5namlhcmVuemhlbmcnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL3BlcnNvbi9zZXR0bGVkX2luL3NldHRsZWRfaW4nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAgb25TaG93KCkge1xyXG4gICAgICAgIHRoaXMuZGF0YS5tZW51Lmxlbmd0aCA9IDQ7XHJcbiAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgIGtleTogVVNFUl9BVVRIRU5USUNBVElPTixcclxuICAgICAgICAgICAgc3VjY2VzczogKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihkYXRhID09PSBBdXRoZW50aWNhdGlvbi5jb21tb2RpdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1vZGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhID09PSBBdXRoZW50aWNhdGlvbi5vZmZpY2lhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVyY2hhbnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGNvbW1vZGl0eSgpIHtcclxuICAgICAgICBjb25zdCBtZW51OiBNZW51SXRlbVtdICA9IHRoaXMuZGF0YS5tZW51O1xyXG4gICAgICAgIG1lbnUucHVzaChcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+WIm+W7uua0u+WKqCcsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnY2h1YW5namlhbmh1b2RvbmcnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2FjdGl2aXR5L2NyZWF0ZS9jcmVhdGUnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5a6h5qC45ZWG5a62JyxcclxuICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9hdWRpdC9idXNpbmVzcy9idXNpbmVzcydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+WuoeaguOWVhuWTgScsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvYXVkaXQvZ29vZHMvZ29vZHMnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICflub/lkYrorr7nva4nLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2FkX3NldHRpbmcvYWQnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSEoeyBtZW51IH0pO1xyXG4gICAgfSxcclxuICAgIG1lcmNoYW50KCkge1xyXG4gICAgICAgIGNvbnN0IG1lbnU6IE1lbnVJdGVtW10gID0gdGhpcy5kYXRhLm1lbnU7XHJcbiAgICAgICAgbWVudVszXS5uYW1lID0gJ+S/ruaUueWVhuWutuS/oeaBryc7XHJcbiAgICAgICAgbWVudS5wdXNoKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5ZWG5ZOB5LiK5p62JyxcclxuICAgICAgICAgICAgICAgIGljb246ICdzaGFuZ2ppYScsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvZ29vZHMvY3JlYXRlL2NyZWF0ZScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfmiJHnmoTorqLljZUnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2RpbmdkYW4nLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL3BlcnNvbi9vcmRlci9vcmRlcidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhISh7IG1lbnUgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=