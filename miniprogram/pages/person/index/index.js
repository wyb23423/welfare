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
            },
            {
                name: '广告设置',
                url: '/pages/ad/ad'
            }
        ]
    },
    onShow: function () {
        var _this = this;
        this.data.menu.length = 5;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUE4RDtBQUM5RCxpREFBeUQ7QUFZekQsSUFBSSxDQUFDO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFO1lBQ0Y7Z0JBQ0ksSUFBSSxFQUFFLE1BQU07Z0JBQ1osSUFBSSxFQUFFLE9BQU87Z0JBQ2IsR0FBRyxFQUFFLGtCQUFrQjthQUMxQjtZQUNEO2dCQUNJLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRSxVQUFVO2dCQUNoQixHQUFHLEVBQUUsb0NBQW9DO2FBQzVDO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLE1BQU07Z0JBQ1osSUFBSSxFQUFFLGFBQWE7Z0JBQ25CLEdBQUcsRUFBRSxrQ0FBa0M7YUFDMUM7WUFDRDtnQkFDSSxJQUFJLEVBQUUsTUFBTTtnQkFDWixJQUFJLEVBQUUsa0JBQWtCO2dCQUN4QixHQUFHLEVBQUUscUNBQXFDO2FBQzdDO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLE1BQU07Z0JBQ1osR0FBRyxFQUFFLGNBQWM7YUFDdEI7U0FDSjtLQUNKO0lBQ0QsTUFBTTtRQUFOLGlCQVlDO1FBWEcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUMxQixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1YsR0FBRyxFQUFFLDJCQUFtQjtZQUN4QixPQUFPLEVBQUUsVUFBQyxFQUFRO29CQUFOLGNBQUk7Z0JBQ1osSUFBRyxJQUFJLEtBQUssc0JBQWMsQ0FBQyxTQUFTLEVBQUU7b0JBQ2xDLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztpQkFDcEI7cUJBQU0sSUFBSSxJQUFJLEtBQUssc0JBQWMsQ0FBQyxRQUFRLEVBQUU7b0JBQ3pDLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDbkI7WUFDTCxDQUFDO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELFNBQVM7UUFDTCxJQUFNLElBQUksR0FBZ0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDekMsSUFBSSxDQUFDLElBQUksQ0FDTDtZQUNJLElBQUksRUFBRSxNQUFNO1lBQ1osSUFBSSxFQUFFLG1CQUFtQjtZQUN6QixHQUFHLEVBQUUsK0JBQStCO1NBQ3ZDLEVBQ0Q7WUFDSSxJQUFJLEVBQUUsTUFBTTtZQUNaLEdBQUcsRUFBRSxnQ0FBZ0M7U0FDeEMsRUFDRDtZQUNJLElBQUksRUFBRSxNQUFNO1lBQ1osR0FBRyxFQUFFLDBCQUEwQjtTQUNsQyxDQUNKLENBQUM7UUFDRixJQUFJLENBQUMsT0FBUSxDQUFDLEVBQUUsSUFBSSxNQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDRCxRQUFRO1FBQ0osSUFBTSxJQUFJLEdBQWdCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQ0w7WUFDSSxJQUFJLEVBQUUsTUFBTTtZQUNaLElBQUksRUFBRSxVQUFVO1lBQ2hCLEdBQUcsRUFBRSw0QkFBNEI7U0FDcEMsRUFDRDtZQUNJLElBQUksRUFBRSxNQUFNO1lBQ1osSUFBSSxFQUFFLFNBQVM7WUFDZixHQUFHLEVBQUUsMkJBQTJCO1NBQ25DLENBQ0osQ0FBQztRQUNGLElBQUksQ0FBQyxPQUFRLENBQUMsRUFBRSxJQUFJLE1BQUEsRUFBRSxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVTRVJfQVVUSEVOVElDQVRJT04gfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudC9zdG9yZSc7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnQvaW5kZXgnO1xyXG5cclxuLyoqXHJcbiAqIOS4quS6uuS4reW/g1xyXG4gKi9cclxuXHJcbmludGVyZmFjZSBNZW51SXRlbSB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBpY29uPzogc3RyaW5nO1xyXG4gICAgdXJsOiBzdHJpbmc7XHJcbn1cclxuXHJcblBhZ2Uoe1xyXG4gICAgZGF0YToge1xyXG4gICAgICAgIG1lbnU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+aIkeeahOWFs+azqCcsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnaGVhcnQnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnLi4vZm9sbG93L2ZvbGxvdydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+aIkeeahOaUtuiXjycsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc2hvdWNhbmcnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnLi4vaGlzdG9yeS9oaXN0b3J5P3R5cGU9Y29sbGVjdGlvbidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+aIkeeahOWPkei1tycsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnbGlzdC0yLWNvcHknLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnLi4vaGlzdG9yeS9oaXN0b3J5P3R5cGU9aW5pdGlhdGUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICflhaXpqbvllYblrrYnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3NoYW5namlhcmVuemhlbmcnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL3BlcnNvbi9zZXR0bGVkX2luL3NldHRsZWRfaW4nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICflub/lkYrorr7nva4nLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2FkL2FkJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIG9uU2hvdygpIHtcclxuICAgICAgICB0aGlzLmRhdGEubWVudS5sZW5ndGggPSA1O1xyXG4gICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICBrZXk6IFVTRVJfQVVUSEVOVElDQVRJT04sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6ICh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoZGF0YSA9PT0gQXV0aGVudGljYXRpb24uY29tbW9kaXR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tb2RpdHkoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YSA9PT0gQXV0aGVudGljYXRpb24ub2ZmaWNpYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lcmNoYW50KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBjb21tb2RpdHkoKSB7XHJcbiAgICAgICAgY29uc3QgbWVudTogTWVudUl0ZW1bXSAgPSB0aGlzLmRhdGEubWVudTtcclxuICAgICAgICBtZW51LnB1c2goXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfliJvlu7rmtLvliqgnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2NodWFuZ2ppYW5odW9kb25nJyxcclxuICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9hY3Rpdml0eS9jcmVhdGUvY3JlYXRlJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+WuoeaguOWVhuWuticsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvYXVkaXQvYnVzaW5lc3MvYnVzaW5lc3MnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICflrqHmoLjllYblk4EnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2F1ZGl0L2dvb2RzL2dvb2RzJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnNldERhdGEhKHsgbWVudSB9KTtcclxuICAgIH0sXHJcbiAgICBtZXJjaGFudCgpIHtcclxuICAgICAgICBjb25zdCBtZW51OiBNZW51SXRlbVtdICA9IHRoaXMuZGF0YS5tZW51O1xyXG4gICAgICAgIG1lbnVbM10ubmFtZSA9ICfkv67mlLnllYblrrbkv6Hmga8nO1xyXG4gICAgICAgIG1lbnUucHVzaChcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+WVhuWTgeS4iuaeticsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc2hhbmdqaWEnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2dvb2RzL2NyZWF0ZS9jcmVhdGUnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5oiR55qE6K6i5Y2VJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdkaW5nZGFuJyxcclxuICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9wZXJzb24vb3JkZXIvb3JkZXInXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSEoeyBtZW51IH0pO1xyXG4gICAgfVxyXG59KTtcclxuIl19