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
                console.log(data, 2222222222222);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUE4RDtBQUM5RCxpREFBeUQ7QUFZekQsSUFBSSxDQUFDO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFO1lBQ0Y7Z0JBQ0ksSUFBSSxFQUFFLE1BQU07Z0JBQ1osSUFBSSxFQUFFLE9BQU87Z0JBQ2IsR0FBRyxFQUFFLGtCQUFrQjthQUMxQjtZQUNEO2dCQUNJLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRSxVQUFVO2dCQUNoQixHQUFHLEVBQUUsb0NBQW9DO2FBQzVDO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLE1BQU07Z0JBQ1osSUFBSSxFQUFFLGFBQWE7Z0JBQ25CLEdBQUcsRUFBRSxrQ0FBa0M7YUFDMUM7WUFDRDtnQkFDSSxJQUFJLEVBQUUsTUFBTTtnQkFDWixJQUFJLEVBQUUsa0JBQWtCO2dCQUN4QixHQUFHLEVBQUUscUNBQXFDO2FBQzdDO1NBQ0o7S0FDSjtJQUNELE1BQU07UUFBTixpQkFhQztRQVpHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDMUIsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNWLEdBQUcsRUFBRSwyQkFBbUI7WUFDeEIsT0FBTyxFQUFFLFVBQUMsRUFBUTtvQkFBTixjQUFJO2dCQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDO2dCQUNqQyxJQUFHLElBQUksS0FBSyxzQkFBYyxDQUFDLFNBQVMsRUFBRTtvQkFDbEMsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2lCQUNwQjtxQkFBTSxJQUFJLElBQUksS0FBSyxzQkFBYyxDQUFDLFFBQVEsRUFBRTtvQkFDekMsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUNuQjtZQUNMLENBQUM7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0QsU0FBUztRQUNMLElBQU0sSUFBSSxHQUFnQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN6QyxJQUFJLENBQUMsSUFBSSxDQUNMO1lBQ0ksSUFBSSxFQUFFLE1BQU07WUFDWixJQUFJLEVBQUUsbUJBQW1CO1lBQ3pCLEdBQUcsRUFBRSwrQkFBK0I7U0FDdkMsRUFDRDtZQUNJLElBQUksRUFBRSxNQUFNO1lBQ1osR0FBRyxFQUFFLGdDQUFnQztTQUN4QyxFQUNEO1lBQ0ksSUFBSSxFQUFFLE1BQU07WUFDWixHQUFHLEVBQUUsMEJBQTBCO1NBQ2xDLENBQ0osQ0FBQztRQUNGLElBQUksQ0FBQyxPQUFRLENBQUMsRUFBRSxJQUFJLE1BQUEsRUFBRSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNELFFBQVE7UUFDSixJQUFNLElBQUksR0FBZ0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDekMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FDTDtZQUNJLElBQUksRUFBRSxNQUFNO1lBQ1osSUFBSSxFQUFFLFVBQVU7WUFDaEIsR0FBRyxFQUFFLDRCQUE0QjtTQUNwQyxFQUNEO1lBQ0ksSUFBSSxFQUFFLE1BQU07WUFDWixJQUFJLEVBQUUsU0FBUztZQUNmLEdBQUcsRUFBRSwyQkFBMkI7U0FDbkMsQ0FDSixDQUFDO1FBQ0YsSUFBSSxDQUFDLE9BQVEsQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVVNFUl9BVVRIRU5USUNBVElPTiB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50L3N0b3JlJztcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb24gfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudC9pbmRleCc7XHJcblxyXG4vKipcclxuICog5Liq5Lq65Lit5b+DXHJcbiAqL1xyXG5cclxuaW50ZXJmYWNlIE1lbnVJdGVtIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGljb24/OiBzdHJpbmc7XHJcbiAgICB1cmw6IHN0cmluZztcclxufVxyXG5cclxuUGFnZSh7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgbWVudTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5oiR55qE5YWz5rOoJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdoZWFydCcsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcuLi9mb2xsb3cvZm9sbG93J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5oiR55qE5pS26JePJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdzaG91Y2FuZycsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcuLi9oaXN0b3J5L2hpc3Rvcnk/dHlwZT1jb2xsZWN0aW9uJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5oiR55qE5Y+R6LW3JyxcclxuICAgICAgICAgICAgICAgIGljb246ICdsaXN0LTItY29weScsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcuLi9oaXN0b3J5L2hpc3Rvcnk/dHlwZT1pbml0aWF0ZSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+WFpempu+WVhuWuticsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc2hhbmdqaWFyZW56aGVuZycsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvcGVyc29uL3NldHRsZWRfaW4vc2V0dGxlZF9pbidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICBvblNob3coKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhLm1lbnUubGVuZ3RoID0gNDtcclxuICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAga2V5OiBVU0VSX0FVVEhFTlRJQ0FUSU9OLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiAoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEsIDIyMjIyMjIyMjIyMjIpO1xyXG4gICAgICAgICAgICAgICAgaWYoZGF0YSA9PT0gQXV0aGVudGljYXRpb24uY29tbW9kaXR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tb2RpdHkoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YSA9PT0gQXV0aGVudGljYXRpb24ub2ZmaWNpYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lcmNoYW50KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBjb21tb2RpdHkoKSB7XHJcbiAgICAgICAgY29uc3QgbWVudTogTWVudUl0ZW1bXSAgPSB0aGlzLmRhdGEubWVudTtcclxuICAgICAgICBtZW51LnB1c2goXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfliJvlu7rmtLvliqgnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2NodWFuZ2ppYW5odW9kb25nJyxcclxuICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9hY3Rpdml0eS9jcmVhdGUvY3JlYXRlJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+WuoeaguOWVhuWuticsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvYXVkaXQvYnVzaW5lc3MvYnVzaW5lc3MnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICflrqHmoLjllYblk4EnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2F1ZGl0L2dvb2RzL2dvb2RzJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnNldERhdGEhKHsgbWVudSB9KTtcclxuICAgIH0sXHJcbiAgICBtZXJjaGFudCgpIHtcclxuICAgICAgICBjb25zdCBtZW51OiBNZW51SXRlbVtdICA9IHRoaXMuZGF0YS5tZW51O1xyXG4gICAgICAgIG1lbnVbM10ubmFtZSA9ICfkv67mlLnllYblrrbkv6Hmga8nO1xyXG4gICAgICAgIG1lbnUucHVzaChcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+WVhuWTgeS4iuaeticsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc2hhbmdqaWEnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2dvb2RzL2NyZWF0ZS9jcmVhdGUnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5oiR55qE6K6i5Y2VJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdkaW5nZGFuJyxcclxuICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9wZXJzb24vb3JkZXIvb3JkZXInXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSEoeyBtZW51IH0pO1xyXG4gICAgfVxyXG59KTtcclxuIl19