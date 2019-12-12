"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("../../../utils/http");
var store_1 = require("../../../constant/store");
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
            key: store_1.IS_OFFICIAL,
            success: function (_a) {
                var data = _a.data;
                _this.setData({ isAdmin: data });
                data && _this.commodity();
            }
        });
        wx.getStorage({
            key: store_1.IS_OFFICIAL,
            success: function (_a) {
                var data = _a.data;
                _this.data.bussiness.length = 1;
                data && _this.merchant();
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
            url: '../activity/activity'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDRDQUE4QztBQUM5QyxpREFBc0Q7QUFZdEQsSUFBSSxDQUFDO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsT0FBTyxFQUFFO1lBQ0w7Z0JBQ0ksSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLEdBQUcsRUFBRSxrQ0FBa0M7YUFDMUM7WUFDRDtnQkFDSSxJQUFJLEVBQUUsS0FBSztnQkFDWCxJQUFJLEVBQUUsU0FBUztnQkFDZixHQUFHLEVBQUUsK0JBQStCO2FBQ3ZDO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCLEdBQUcsRUFBRSxrQ0FBa0M7YUFDMUM7WUFDRDtnQkFDSSxJQUFJLEVBQUUsS0FBSztnQkFDWCxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsR0FBRyxFQUFFLGtDQUFrQzthQUMxQztTQUNKO1FBQ0QsU0FBUyxFQUFFO1lBQ1A7Z0JBQ0ksSUFBSSxFQUFFLE1BQU07Z0JBQ1osSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsR0FBRyxFQUFFLHFDQUFxQzthQUM3QztTQUNKO1FBQ0QsS0FBSyxFQUFFO1lBQ0g7Z0JBQ0ksSUFBSSxFQUFFLE1BQU07Z0JBQ1osSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLEdBQUcsRUFBRSxzQkFBc0I7YUFDOUI7WUFDRDtnQkFDSSxJQUFJLEVBQUUsTUFBTTtnQkFDWixJQUFJLEVBQUUsbUJBQW1CO2dCQUN6QixHQUFHLEVBQUUsZ0NBQWdDO2dCQUNyQyxJQUFJLEVBQUUsS0FBSzthQUNkO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLE1BQU07Z0JBQ1osSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsR0FBRyxFQUFFLDBCQUEwQjtnQkFDL0IsSUFBSSxFQUFFLEtBQUs7YUFDZDtTQUNKO1FBQ0QsT0FBTyxFQUFFLEtBQUs7S0FDakI7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QUFDO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXV0aGVudGljYXRpb24gfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudC9pbmRleCc7XHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi91dGlscy9odHRwJztcclxuaW1wb3J0IHsgSVNfT0ZGSUNJQUwgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudC9zdG9yZSc7XHJcblxyXG4vKipcclxuICog5Liq5Lq65Lit5b+DXHJcbiAqL1xyXG5cclxuaW50ZXJmYWNlIE1lbnVJdGVtIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGljb24/OiBzdHJpbmc7XHJcbiAgICB1cmw6IHN0cmluZztcclxufVxyXG5cclxuUGFnZSh7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgaGlzdG9yeTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5b6F5a6h5qC4JyxcclxuICAgICAgICAgICAgICAgIGljb246ICdkYWlzaGVuaGUnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnLi4vaGlzdG9yeS9oaXN0b3J5P3R5cGU9YXVkaXRpbmcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICflvoXlj4LliqAnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3dlbmRhbmcnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnLi4vaGlzdG9yeS9oaXN0b3J5P3R5cGU9YXdhaXQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICflvoXor4Tku7cnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2RhaXBpbmdqaWEnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnLi4vaGlzdG9yeS9oaXN0b3J5P3R5cGU9ZXZhbHVhdGUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICflt7Llj4LliqAnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3lpd2FuY2hlbmcnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnLi4vaGlzdG9yeS9oaXN0b3J5P3R5cGU9Y29tcGxldGUnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGJ1c3NpbmVzczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn55Sz6K+35YWl6am7JyxcclxuICAgICAgICAgICAgICAgIGljb246ICdzaGFuZ2ppYXJlbnpoZW5nJyxcclxuICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9wZXJzb24vc2V0dGxlZF9pbi9zZXR0bGVkX2luJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBhZG1pbjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5bm/5ZGK6K6+572uJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdndWFuZ2dhbycsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvYWRfc2V0dGluZy9hZCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+WVhuWutuWuoeaguCcsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc2hhbmdqaWFyZW56aGVuZzEnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2F1ZGl0L2J1c2luZXNzL2J1c2luZXNzJyxcclxuICAgICAgICAgICAgICAgIGZsYWc6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfllYblk4HlrqHmoLgnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3NoYW5ncGlucmVuemhlbmcnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2F1ZGl0L2dvb2RzL2dvb2RzJyxcclxuICAgICAgICAgICAgICAgIGZsYWc6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGlzQWRtaW46IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgb25TaG93KCkge1xyXG4gICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICBrZXk6IElTX09GRklDSUFMLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiAoe2RhdGF9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEhKHsgaXNBZG1pbjogZGF0YX0pO1xyXG4gICAgICAgICAgICAgICAgZGF0YSAmJiB0aGlzLmNvbW1vZGl0eSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICBrZXk6IElTX09GRklDSUFMLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiAoe2RhdGF9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuYnVzc2luZXNzLmxlbmd0aCA9IDE7XHJcbiAgICAgICAgICAgICAgICBkYXRhICYmIHRoaXMubWVyY2hhbnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGNvbW1vZGl0eSgpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IFtcclxuICAgICAgICAgICAgcmVxdWVzdDxQYWdlRGF0YT4oe3VybDogJy9hZG1pbi9hdWRpdE1lcmNoYW50TGlzdCcsIGRhdGE6IHtwYWdlOiAxLCByb3dzOiAxfSwgbm90U2hvd01zZzogdHJ1ZSB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHtkYXRhOiB7dG90YWx9fSkgPT4gISF0b3RhbCkuY2F0Y2goKCkgPT4gZmFsc2UpLFxyXG4gICAgICAgICAgICByZXF1ZXN0PFBhZ2VEYXRhPih7dXJsOiAnL2FwaS9jb21tb2RpdHkvYXVkaXRMaXN0JyxkYXRhOiB7cGFnZTogMSwgcm93czogMX0sbm90U2hvd01zZzogdHJ1ZX0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoe2RhdGE6IHt0b3RhbH19KSA9PiAhIXRvdGFsKS5jYXRjaCgoKSA9PiBmYWxzZSlcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoW2YxLCBmMl0pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICAgICAgICAnYWRtaW5bMV0uZmxhZyc6IGYxLFxyXG4gICAgICAgICAgICAgICAgJ2FkbWluWzJdLmZsYWcnOiBmMlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBtZXJjaGFudCgpIHtcclxuICAgICAgICBjb25zdCBidXNzaW5lc3M6IEFycmF5PE1lbnVJdGVtIHwgc3RyaW5nPiA9IHRoaXMuZGF0YS5idXNzaW5lc3M7XHJcbiAgICAgICAgKDxNZW51SXRlbT5idXNzaW5lc3NbMF0pLm5hbWUgPSAn5L+u5pS55L+h5oGvJztcclxuICAgICAgICBidXNzaW5lc3MucHVzaChcclxuICAgICAgICAgICAgJ+a0u+WKqCcsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfliJvlu7rmtLvliqgnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2NodWFuZ2ppYW5odW9kb25nJyxcclxuICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9hY3Rpdml0eS9lZGl0L2VkaXQnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5oiR55qE5rS75YqoJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdsaXN0LTItY29weScsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcuLi9hY3Rpdml0eS9hY3Rpdml0eSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ+WVhuWTgScsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfliJvlu7rllYblk4EnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3NoYW5namlhJyxcclxuICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9nb29kcy9lZGl0L2VkaXQnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5oiR55qE5ZWG5ZOBJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdzaGFuZ3BpbicsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcuLi9nb29kcy9nb29kcydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+aIkeeahOiuouWNlScsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZGluZ2RhbicsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcuLi9vcmRlci9vcmRlcidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhISh7IGJ1c3NpbmVzcyB9KTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==