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
        wx.getStorage({
            key: store_1.USER_AUTHENTICATION,
            success: function (_a) {
                var data = _a.data;
                var menu = _this.data.menu;
                if (data === index_1.Authentication.commodity) {
                    menu.push({
                        name: '创建活动',
                        icon: 'chuangjianhuodong',
                        url: '/pages/activity/create/create',
                    });
                    _this.setData({ menu: menu });
                }
                else if (data === index_1.Authentication.official) {
                    menu.push({
                        name: '商品上架',
                        icon: 'shangjia',
                        url: '/pages/goods/create/create',
                    }, {
                        name: '我的订单',
                        icon: 'dingdan',
                        url: '/pages/person/order/order'
                    });
                    _this.setData({ menu: menu });
                }
            }
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUE4RDtBQUM5RCxpREFBeUQ7QUFNekQsSUFBSSxDQUFDO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFO1lBQ0Y7Z0JBQ0ksSUFBSSxFQUFFLE1BQU07Z0JBQ1osSUFBSSxFQUFFLE9BQU87Z0JBQ2IsR0FBRyxFQUFFLGtCQUFrQjthQUMxQjtZQUNEO2dCQUNJLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRSxVQUFVO2dCQUNoQixHQUFHLEVBQUUsb0NBQW9DO2FBQzVDO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLE1BQU07Z0JBQ1osSUFBSSxFQUFFLGFBQWE7Z0JBQ25CLEdBQUcsRUFBRSxrQ0FBa0M7YUFDMUM7WUFDRDtnQkFDSSxJQUFJLEVBQUUsTUFBTTtnQkFDWixJQUFJLEVBQUUsa0JBQWtCO2dCQUN4QixHQUFHLEVBQUUscUNBQXFDO2FBQzdDO1NBQ0o7S0FDSjtJQUNELE1BQU07UUFBTixpQkE2QkM7UUE1QkcsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNWLEdBQUcsRUFBRSwyQkFBbUI7WUFDeEIsT0FBTyxFQUFFLFVBQUMsRUFBUTtvQkFBTixjQUFJO2dCQUNaLElBQU0sSUFBSSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUM1QixJQUFHLElBQUksS0FBSyxzQkFBYyxDQUFDLFNBQVMsRUFBRTtvQkFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQzt3QkFDTixJQUFJLEVBQUUsTUFBTTt3QkFDWixJQUFJLEVBQUUsbUJBQW1CO3dCQUN6QixHQUFHLEVBQUUsK0JBQStCO3FCQUN2QyxDQUFDLENBQUM7b0JBQ0gsS0FBSSxDQUFDLE9BQVEsQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLENBQUMsQ0FBQztpQkFDM0I7cUJBQU0sSUFBSSxJQUFJLEtBQUssc0JBQWMsQ0FBQyxRQUFRLEVBQUU7b0JBQ3pDLElBQUksQ0FBQyxJQUFJLENBQ0w7d0JBQ0ksSUFBSSxFQUFFLE1BQU07d0JBQ1osSUFBSSxFQUFFLFVBQVU7d0JBQ2hCLEdBQUcsRUFBRSw0QkFBNEI7cUJBQ3BDLEVBQ0Q7d0JBQ0ksSUFBSSxFQUFFLE1BQU07d0JBQ1osSUFBSSxFQUFFLFNBQVM7d0JBQ2YsR0FBRyxFQUFFLDJCQUEyQjtxQkFDbkMsQ0FDSixDQUFDO29CQUNGLEtBQUksQ0FBQyxPQUFRLENBQUMsRUFBRSxJQUFJLE1BQUEsRUFBRSxDQUFDLENBQUM7aUJBQzNCO1lBQ0wsQ0FBQztTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVU0VSX0FVVEhFTlRJQ0FUSU9OIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnQvc3RvcmUnO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbiB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50L2luZGV4JztcclxuXHJcbi8qKlxyXG4gKiDkuKrkurrkuK3lv4NcclxuICovXHJcblxyXG5QYWdlKHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBtZW51OiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfmiJHnmoTlhbPms6gnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2hlYXJ0JyxcclxuICAgICAgICAgICAgICAgIHVybDogJy4uL2ZvbGxvdy9mb2xsb3cnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfmiJHnmoTmlLbol48nLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3Nob3VjYW5nJyxcclxuICAgICAgICAgICAgICAgIHVybDogJy4uL2hpc3RvcnkvaGlzdG9yeT90eXBlPWNvbGxlY3Rpb24nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfmiJHnmoTlj5HotbcnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2xpc3QtMi1jb3B5JyxcclxuICAgICAgICAgICAgICAgIHVybDogJy4uL2hpc3RvcnkvaGlzdG9yeT90eXBlPWluaXRpYXRlJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5YWl6am75ZWG5a62JyxcclxuICAgICAgICAgICAgICAgIGljb246ICdzaGFuZ2ppYXJlbnpoZW5nJyxcclxuICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9wZXJzb24vc2V0dGxlZF9pbi9zZXR0bGVkX2luJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIG9uU2hvdygpIHtcclxuICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAga2V5OiBVU0VSX0FVVEhFTlRJQ0FUSU9OLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiAoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lbnUgPSB0aGlzLmRhdGEubWVudTtcclxuICAgICAgICAgICAgICAgIGlmKGRhdGEgPT09IEF1dGhlbnRpY2F0aW9uLmNvbW1vZGl0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lbnUucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICfliJvlu7rmtLvliqgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnY2h1YW5namlhbmh1b2RvbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvYWN0aXZpdHkvY3JlYXRlL2NyZWF0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhISh7IG1lbnUgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEgPT09IEF1dGhlbnRpY2F0aW9uLm9mZmljaWFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVudS5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAn5ZWG5ZOB5LiK5p62JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdzaGFuZ2ppYScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvZ29vZHMvY3JlYXRlL2NyZWF0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICfmiJHnmoTorqLljZUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2RpbmdkYW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL3BlcnNvbi9vcmRlci9vcmRlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhISh7IG1lbnUgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=