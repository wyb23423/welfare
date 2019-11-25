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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUE4RDtBQUM5RCxpREFBeUQ7QUFZekQsSUFBSSxDQUFDO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFO1lBQ0Y7Z0JBQ0ksSUFBSSxFQUFFLE1BQU07Z0JBQ1osSUFBSSxFQUFFLE9BQU87Z0JBQ2IsR0FBRyxFQUFFLGtCQUFrQjthQUMxQjtZQUNEO2dCQUNJLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRSxVQUFVO2dCQUNoQixHQUFHLEVBQUUsb0NBQW9DO2FBQzVDO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLE1BQU07Z0JBQ1osSUFBSSxFQUFFLGFBQWE7Z0JBQ25CLEdBQUcsRUFBRSxrQ0FBa0M7YUFDMUM7WUFDRDtnQkFDSSxJQUFJLEVBQUUsTUFBTTtnQkFDWixJQUFJLEVBQUUsa0JBQWtCO2dCQUN4QixHQUFHLEVBQUUscUNBQXFDO2FBQzdDO1NBQ0o7S0FDSjtJQUNELE1BQU07UUFBTixpQkFZQztRQVhHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDMUIsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNWLEdBQUcsRUFBRSwyQkFBbUI7WUFDeEIsT0FBTyxFQUFFLFVBQUMsRUFBUTtvQkFBTixjQUFJO2dCQUNaLElBQUcsSUFBSSxLQUFLLHNCQUFjLENBQUMsU0FBUyxFQUFFO29CQUNsQyxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7aUJBQ3BCO3FCQUFNLElBQUksSUFBSSxLQUFLLHNCQUFjLENBQUMsUUFBUSxFQUFFO29CQUN6QyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7aUJBQ25CO1lBQ0wsQ0FBQztTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxTQUFTO1FBQ0wsSUFBTSxJQUFJLEdBQWdCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxJQUFJLENBQ0w7WUFDSSxJQUFJLEVBQUUsTUFBTTtZQUNaLElBQUksRUFBRSxtQkFBbUI7WUFDekIsR0FBRyxFQUFFLCtCQUErQjtTQUN2QyxFQUNEO1lBQ0ksSUFBSSxFQUFFLE1BQU07WUFDWixHQUFHLEVBQUUsZ0NBQWdDO1NBQ3hDLEVBQ0Q7WUFDSSxJQUFJLEVBQUUsTUFBTTtZQUNaLEdBQUcsRUFBRSwwQkFBMEI7U0FDbEMsQ0FDSixDQUFDO1FBQ0YsSUFBSSxDQUFDLE9BQVEsQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0QsUUFBUTtRQUNKLElBQU0sSUFBSSxHQUFnQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN6QyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxDQUNMO1lBQ0ksSUFBSSxFQUFFLE1BQU07WUFDWixJQUFJLEVBQUUsVUFBVTtZQUNoQixHQUFHLEVBQUUsNEJBQTRCO1NBQ3BDLEVBQ0Q7WUFDSSxJQUFJLEVBQUUsTUFBTTtZQUNaLElBQUksRUFBRSxTQUFTO1lBQ2YsR0FBRyxFQUFFLDJCQUEyQjtTQUNuQyxDQUNKLENBQUM7UUFDRixJQUFJLENBQUMsT0FBUSxDQUFDLEVBQUUsSUFBSSxNQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVU0VSX0FVVEhFTlRJQ0FUSU9OIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnQvc3RvcmUnO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbiB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50L2luZGV4JztcclxuXHJcbi8qKlxyXG4gKiDkuKrkurrkuK3lv4NcclxuICovXHJcblxyXG5pbnRlcmZhY2UgTWVudUl0ZW0ge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgaWNvbj86IHN0cmluZztcclxuICAgIHVybDogc3RyaW5nO1xyXG59XHJcblxyXG5QYWdlKHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBtZW51OiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfmiJHnmoTlhbPms6gnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2hlYXJ0JyxcclxuICAgICAgICAgICAgICAgIHVybDogJy4uL2ZvbGxvdy9mb2xsb3cnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfmiJHnmoTmlLbol48nLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3Nob3VjYW5nJyxcclxuICAgICAgICAgICAgICAgIHVybDogJy4uL2hpc3RvcnkvaGlzdG9yeT90eXBlPWNvbGxlY3Rpb24nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfmiJHnmoTlj5HotbcnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2xpc3QtMi1jb3B5JyxcclxuICAgICAgICAgICAgICAgIHVybDogJy4uL2hpc3RvcnkvaGlzdG9yeT90eXBlPWluaXRpYXRlJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5YWl6am75ZWG5a62JyxcclxuICAgICAgICAgICAgICAgIGljb246ICdzaGFuZ2ppYXJlbnpoZW5nJyxcclxuICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9wZXJzb24vc2V0dGxlZF9pbi9zZXR0bGVkX2luJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIG9uU2hvdygpIHtcclxuICAgICAgICB0aGlzLmRhdGEubWVudS5sZW5ndGggPSA0O1xyXG4gICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICBrZXk6IFVTRVJfQVVUSEVOVElDQVRJT04sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6ICh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoZGF0YSA9PT0gQXV0aGVudGljYXRpb24uY29tbW9kaXR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tb2RpdHkoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YSA9PT0gQXV0aGVudGljYXRpb24ub2ZmaWNpYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lcmNoYW50KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBjb21tb2RpdHkoKSB7XHJcbiAgICAgICAgY29uc3QgbWVudTogTWVudUl0ZW1bXSAgPSB0aGlzLmRhdGEubWVudTtcclxuICAgICAgICBtZW51LnB1c2goXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfliJvlu7rmtLvliqgnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2NodWFuZ2ppYW5odW9kb25nJyxcclxuICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9hY3Rpdml0eS9jcmVhdGUvY3JlYXRlJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+WuoeaguOWVhuWuticsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvYXVkaXQvYnVzaW5lc3MvYnVzaW5lc3MnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICflrqHmoLjllYblk4EnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2F1ZGl0L2dvb2RzL2dvb2RzJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnNldERhdGEhKHsgbWVudSB9KTtcclxuICAgIH0sXHJcbiAgICBtZXJjaGFudCgpIHtcclxuICAgICAgICBjb25zdCBtZW51OiBNZW51SXRlbVtdICA9IHRoaXMuZGF0YS5tZW51O1xyXG4gICAgICAgIG1lbnVbM10ubmFtZSA9ICfkv67mlLnllYblrrbkv6Hmga8nO1xyXG4gICAgICAgIG1lbnUucHVzaChcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+WVhuWTgeS4iuaeticsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc2hhbmdqaWEnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2dvb2RzL2NyZWF0ZS9jcmVhdGUnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5oiR55qE6K6i5Y2VJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdkaW5nZGFuJyxcclxuICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9wZXJzb24vb3JkZXIvb3JkZXInXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSEoeyBtZW51IH0pO1xyXG4gICAgfVxyXG59KTtcclxuIl19