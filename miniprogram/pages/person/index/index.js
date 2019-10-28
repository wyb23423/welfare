"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = require("../../../constant/store");
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
                name: '创建活动',
                icon: 'chuangjianhuodong',
                url: '/pages/activity/create/create',
            }
        ]
    },
    onShow: function () {
        var _this = this;
        wx.getStorage({
            key: store_1.IS_BUSINESS,
            success: function (_a) {
                var data = _a.data;
                var menu = _this.data.menu;
                if (data) {
                    menu.push({
                        name: '商品上架',
                        icon: 'shangjia',
                        url: '/pages/goods/create/create',
                    }, {
                        name: '我的订单',
                        icon: 'dingdan',
                        url: ''
                    });
                    _this.setData({ menu: menu });
                }
            }
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUFzRDtBQU10RCxJQUFJLENBQUM7SUFDRCxJQUFJLEVBQUU7UUFDRixJQUFJLEVBQUU7WUFDRjtnQkFDSSxJQUFJLEVBQUUsTUFBTTtnQkFDWixJQUFJLEVBQUUsT0FBTztnQkFDYixHQUFHLEVBQUUsa0JBQWtCO2FBQzFCO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLE1BQU07Z0JBQ1osSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLEdBQUcsRUFBRSxvQ0FBb0M7YUFDNUM7WUFDRDtnQkFDSSxJQUFJLEVBQUUsTUFBTTtnQkFDWixJQUFJLEVBQUUsYUFBYTtnQkFDbkIsR0FBRyxFQUFFLGtDQUFrQzthQUMxQztZQUNEO2dCQUNJLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRSxrQkFBa0I7Z0JBQ3hCLEdBQUcsRUFBRSxxQ0FBcUM7YUFDN0M7WUFDRDtnQkFDSSxJQUFJLEVBQUUsTUFBTTtnQkFDWixJQUFJLEVBQUUsbUJBQW1CO2dCQUN6QixHQUFHLEVBQUUsK0JBQStCO2FBQ3ZDO1NBQ0o7S0FDSjtJQUNELE1BQU07UUFBTixpQkFzQkM7UUFyQkcsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNWLEdBQUcsRUFBRSxtQkFBVztZQUNoQixPQUFPLEVBQUUsVUFBQyxFQUFRO29CQUFOLGNBQUk7Z0JBQ1osSUFBTSxJQUFJLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQzVCLElBQUksSUFBSSxFQUFFO29CQUNOLElBQUksQ0FBQyxJQUFJLENBQ0w7d0JBQ0ksSUFBSSxFQUFFLE1BQU07d0JBQ1osSUFBSSxFQUFFLFVBQVU7d0JBQ2hCLEdBQUcsRUFBRSw0QkFBNEI7cUJBQ3BDLEVBQ0Q7d0JBQ0ksSUFBSSxFQUFFLE1BQU07d0JBQ1osSUFBSSxFQUFFLFNBQVM7d0JBQ2YsR0FBRyxFQUFFLEVBQUU7cUJBQ1YsQ0FDSixDQUFDO29CQUNGLEtBQUksQ0FBQyxPQUFRLENBQUMsRUFBRSxJQUFJLE1BQUEsRUFBRSxDQUFDLENBQUM7aUJBQzNCO1lBQ0wsQ0FBQztTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJU19CVVNJTkVTUyB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50L3N0b3JlJztcclxuXHJcbi8qKlxyXG4gKiDkuKrkurrkuK3lv4NcclxuICovXHJcblxyXG5QYWdlKHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBtZW51OiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfmiJHnmoTlhbPms6gnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2hlYXJ0JyxcclxuICAgICAgICAgICAgICAgIHVybDogJy4uL2ZvbGxvdy9mb2xsb3cnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfmiJHnmoTmlLbol48nLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3Nob3VjYW5nJyxcclxuICAgICAgICAgICAgICAgIHVybDogJy4uL2hpc3RvcnkvaGlzdG9yeT90eXBlPWNvbGxlY3Rpb24nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfmiJHnmoTlj5HotbcnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2xpc3QtMi1jb3B5JyxcclxuICAgICAgICAgICAgICAgIHVybDogJy4uL2hpc3RvcnkvaGlzdG9yeT90eXBlPWluaXRpYXRlJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5YWl6am75ZWG5a62JyxcclxuICAgICAgICAgICAgICAgIGljb246ICdzaGFuZ2ppYXJlbnpoZW5nJyxcclxuICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9wZXJzb24vc2V0dGxlZF9pbi9zZXR0bGVkX2luJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5Yib5bu65rS75YqoJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdjaHVhbmdqaWFuaHVvZG9uZycsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvYWN0aXZpdHkvY3JlYXRlL2NyZWF0ZScsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAgb25TaG93KCkge1xyXG4gICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICBrZXk6IElTX0JVU0lORVNTLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiAoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lbnUgPSB0aGlzLmRhdGEubWVudTtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVudS5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAn5ZWG5ZOB5LiK5p62JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdzaGFuZ2ppYScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvZ29vZHMvY3JlYXRlL2NyZWF0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICfmiJHnmoTorqLljZUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2RpbmdkYW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEhKHsgbWVudSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==