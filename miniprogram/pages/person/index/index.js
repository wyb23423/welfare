"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = require("../../../constant/store");
var index_1 = require("../../../constant/index");
var http_1 = require("../../../utils/http");
Page({
    data: {
        history: [
            {
                name: '待审核',
                icon: 'daishenhe',
                url: '../history/history?type=auditing'
            },
            {
                name: '待参加',
                icon: 'wendang',
                url: '../history/history?type=await'
            },
            {
                name: '待评价',
                icon: 'daipingjia',
                url: '../history/history?type=evaluate'
            },
            {
                name: '已参加',
                icon: 'yiwancheng',
                url: '../history/history?type=complete'
            }
        ],
        bussiness: [
            {
                name: '申请入驻',
                icon: 'shangjiarenzheng',
                url: '/pages/person/settled_in/settled_in'
            }
        ],
        admin: [
            {
                name: '广告设置',
                icon: 'guanggao',
                url: '/pages/ad_setting/ad'
            },
            {
                name: '商家审核',
                icon: 'shangjiarenzheng1',
                url: '/pages/audit/business/business',
                flag: false
            },
            {
                name: '商品审核',
                icon: 'shangpinrenzheng',
                url: '/pages/audit/goods/goods',
                flag: false
            }
        ],
        isAdmin: false
    },
    onShow: function () {
        var _this = this;
        wx.getStorage({
            key: store_1.USER_AUTHENTICATION,
            success: function (_a) {
                var data = _a.data;
                var isAdmin = data === index_1.Authentication.commodity;
                _this.setData({ isAdmin: isAdmin });
                isAdmin && _this.commodity();
                _this.data.bussiness.length = 1;
                data === index_1.Authentication.official && _this.merchant();
            }
        });
    },
    commodity: function () {
        var _this = this;
        var promises = [
            http_1.request({ url: '/admin/auditMerchantList', data: { page: 1, rows: 1 }, notShowMsg: true })
                .then(function (_a) {
                var total = _a.data.total;
                return !!total;
            }).catch(function () { return false; }),
            http_1.request({ url: '/api/commodity/auditList', data: { page: 1, rows: 1 }, notShowMsg: true })
                .then(function (_a) {
                var total = _a.data.total;
                return !!total;
            }).catch(function () { return false; })
        ];
        Promise.all(promises).then(function (_a) {
            var f1 = _a[0], f2 = _a[1];
            _this.setData({
                'admin[1].flag': f1,
                'admin[2].flag': f2
            });
        });
    },
    merchant: function () {
        var bussiness = this.data.bussiness;
        bussiness[0].name = '修改信息';
        bussiness.push('活动', {
            name: '创建活动',
            icon: 'chuangjianhuodong',
            url: '/pages/activity/edit/edit',
        }, {
            name: '我的活动',
            icon: 'list-2-copy',
            url: '../history/history?type=initiate'
        }, '商品', {
            name: '创建商品',
            icon: 'shangjia',
            url: '/pages/goods/edit/edit',
        }, {
            name: '我的商品',
            icon: 'shangpin',
            url: '../goods/goods'
        }, {
            name: '我的订单',
            icon: 'dingdan',
            url: '../order/order'
        });
        this.setData({ bussiness: bussiness });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUE4RDtBQUM5RCxpREFBeUQ7QUFDekQsNENBQThDO0FBWTlDLElBQUksQ0FBQztJQUNELElBQUksRUFBRTtRQUNGLE9BQU8sRUFBRTtZQUNMO2dCQUNJLElBQUksRUFBRSxLQUFLO2dCQUNYLElBQUksRUFBRSxXQUFXO2dCQUNqQixHQUFHLEVBQUUsa0NBQWtDO2FBQzFDO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsR0FBRyxFQUFFLCtCQUErQjthQUN2QztZQUNEO2dCQUNJLElBQUksRUFBRSxLQUFLO2dCQUNYLElBQUksRUFBRSxZQUFZO2dCQUNsQixHQUFHLEVBQUUsa0NBQWtDO2FBQzFDO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCLEdBQUcsRUFBRSxrQ0FBa0M7YUFDMUM7U0FDSjtRQUNELFNBQVMsRUFBRTtZQUNQO2dCQUNJLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRSxrQkFBa0I7Z0JBQ3hCLEdBQUcsRUFBRSxxQ0FBcUM7YUFDN0M7U0FDSjtRQUNELEtBQUssRUFBRTtZQUNIO2dCQUNJLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRSxVQUFVO2dCQUNoQixHQUFHLEVBQUUsc0JBQXNCO2FBQzlCO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLE1BQU07Z0JBQ1osSUFBSSxFQUFFLG1CQUFtQjtnQkFDekIsR0FBRyxFQUFFLGdDQUFnQztnQkFDckMsSUFBSSxFQUFFLEtBQUs7YUFDZDtZQUNEO2dCQUNJLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRSxrQkFBa0I7Z0JBQ3hCLEdBQUcsRUFBRSwwQkFBMEI7Z0JBQy9CLElBQUksRUFBRSxLQUFLO2FBQ2Q7U0FDSjtRQUNELE9BQU8sRUFB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ZXNDb250ZW50IjpbImltcG9ydCB7IFVTRVJfQVVUSEVOVElDQVRJT04gfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudC9zdG9yZSc7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnQvaW5kZXgnO1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvaHR0cCc7XHJcblxyXG4vKipcclxuICog5Liq5Lq65Lit5b+DXHJcbiAqL1xyXG5cclxuaW50ZXJmYWNlIE1lbnVJdGVtIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGljb24/OiBzdHJpbmc7XHJcbiAgICB1cmw6IHN0cmluZztcclxufVxyXG5cclxuUGFnZSh7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgaGlzdG9yeTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5b6F5a6h5qC4JyxcclxuICAgICAgICAgICAgICAgIGljb246ICdkYWlzaGVuaGUnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnLi4vaGlzdG9yeS9oaXN0b3J5P3R5cGU9YXVkaXRpbmcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICflvoXlj4LliqAnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3dlbmRhbmcnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnLi4vaGlzdG9yeS9oaXN0b3J5P3R5cGU9YXdhaXQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICflvoXor4Tku7cnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2RhaXBpbmdqaWEnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnLi4vaGlzdG9yeS9oaXN0b3J5P3R5cGU9ZXZhbHVhdGUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICflt7Llj4LliqAnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3lpd2FuY2hlbmcnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnLi4vaGlzdG9yeS9oaXN0b3J5P3R5cGU9Y29tcGxldGUnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGJ1c3NpbmVzczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn55Sz6K+35YWl6am7JyxcclxuICAgICAgICAgICAgICAgIGljb246ICdzaGFuZ2ppYXJlbnpoZW5nJyxcclxuICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9wZXJzb24vc2V0dGxlZF9pbi9zZXR0bGVkX2luJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBhZG1pbjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5bm/5ZGK6K6+572uJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdndWFuZ2dhbycsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvYWRfc2V0dGluZy9hZCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+WVhuWutuWuoeaguCcsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc2hhbmdqaWFyZW56aGVuZzEnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2F1ZGl0L2J1c2luZXNzL2J1c2luZXNzJyxcclxuICAgICAgICAgICAgICAgIGZsYWc6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfllYblk4HlrqHmoLgnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3NoYW5ncGlucmVuemhlbmcnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2F1ZGl0L2dvb2RzL2dvb2RzJyxcclxuICAgICAgICAgICAgICAgIGZsYWc6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGlzQWRtaW46IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgb25TaG93KCkge1xyXG4gICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICBrZXk6IFVTRVJfQVVUSEVOVElDQVRJT04sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6ICh7ZGF0YX0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzQWRtaW4gPSBkYXRhID09PSBBdXRoZW50aWNhdGlvbi5jb21tb2RpdHk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEhKHsgaXNBZG1pbn0pO1xyXG4gICAgICAgICAgICAgICAgaXNBZG1pbiAmJiB0aGlzLmNvbW1vZGl0eSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5idXNzaW5lc3MubGVuZ3RoID0gMTtcclxuICAgICAgICAgICAgICAgIGRhdGEgPT09IEF1dGhlbnRpY2F0aW9uLm9mZmljaWFsICYmIHRoaXMubWVyY2hhbnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGNvbW1vZGl0eSgpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IFtcclxuICAgICAgICAgICAgcmVxdWVzdDxQYWdlRGF0YT4oe3VybDogJy9hZG1pbi9hdWRpdE1lcmNoYW50TGlzdCcsIGRhdGE6IHtwYWdlOiAxLCByb3dzOiAxfSwgbm90U2hvd01zZzogdHJ1ZSB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHtkYXRhOiB7dG90YWx9fSkgPT4gISF0b3RhbCkuY2F0Y2goKCkgPT4gZmFsc2UpLFxyXG4gICAgICAgICAgICByZXF1ZXN0PFBhZ2VEYXRhPih7dXJsOiAnL2FwaS9jb21tb2RpdHkvYXVkaXRMaXN0JyxkYXRhOiB7cGFnZTogMSwgcm93czogMX0sbm90U2hvd01zZzogdHJ1ZX0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoe2RhdGE6IHt0b3RhbH19KSA9PiAhIXRvdGFsKS5jYXRjaCgoKSA9PiBmYWxzZSlcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoW2YxLCBmMl0pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICAgICAgICAnYWRtaW5bMV0uZmxhZyc6IGYxLFxyXG4gICAgICAgICAgICAgICAgJ2FkbWluWzJdLmZsYWcnOiBmMlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBtZXJjaGFudCgpIHtcclxuICAgICAgICBjb25zdCBidXNzaW5lc3M6IEFycmF5PE1lbnVJdGVtIHwgc3RyaW5nPiA9IHRoaXMuZGF0YS5idXNzaW5lc3M7XHJcbiAgICAgICAgKDxNZW51SXRlbT5idXNzaW5lc3NbMF0pLm5hbWUgPSAn5L+u5pS55L+h5oGvJztcclxuICAgICAgICBidXNzaW5lc3MucHVzaChcclxuICAgICAgICAgICAgJ+a0u+WKqCcsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfliJvlu7rmtLvliqgnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2NodWFuZ2ppYW5odW9kb25nJyxcclxuICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9hY3Rpdml0eS9lZGl0L2VkaXQnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5oiR55qE5rS75YqoJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdsaXN0LTItY29weScsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcuLi9oaXN0b3J5L2hpc3Rvcnk/dHlwZT1pbml0aWF0ZSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ+WVhuWTgScsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfliJvlu7rllYblk4EnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3NoYW5namlhJyxcclxuICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9nb29kcy9lZGl0L2VkaXQnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5oiR55qE5ZWG5ZOBJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdzaGFuZ3BpbicsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcuLi9nb29kcy9nb29kcydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+aIkeeahOiuouWNlScsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZGluZ2RhbicsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcuLi9vcmRlci9vcmRlcidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhISh7IGJ1c3NpbmVzcyB9KTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==