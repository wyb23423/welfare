"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("../../../utils/http");
var store_1 = require("../../../constant/store");
var index_1 = require("../../../constant/index");
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
                url: '/pages/community/ad_setting/ad'
            },
            {
                name: '审核申请',
                icon: 'shenhe',
                url: '/pages/community/audit/audit',
                flag: false
            },
            {
                name: '组织列表',
                icon: 'shangjiarenzheng1',
                url: '/pages/community/business/business'
            },
            {
                name: '商品列表',
                icon: 'shangpinliebiaotubiao01',
                url: '/pages/community/goods/goods'
            }
        ],
        isAdmin: false,
        ad: null
    },
    onShow: function () {
        this.init();
    },
    init: function () {
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
            key: store_1.IS_MERCHANT,
            success: function (_a) {
                var data = _a.data;
                _this.data.bussiness.length = 1;
                data && _this.merchant();
            }
        });
        http_1.request({
            url: '/api/ad/getAd',
            data: { type: index_1.AD_TYPE.PERSON },
            notShowMsg: true
        })
            .then(function (_a) {
            var data = _a.data;
            return _this.setData({ ad: data });
        })
            .catch(function () { return _this.setData({ ad: null }); });
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
            }).catch(function () { return false; }),
            http_1.request({ url: '/api/activity/auditList', notShowMsg: true })
                .then(function (_a) {
                var data = _a.data;
                return !!data.length;
            }).catch(function () { return false; })
        ];
        Promise.all(promises).then(function (flags) { return _this.setData({ 'admin[1].flag': flags.includes(true) }); });
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
            url: '../commodity/commodity'
        }, {
            name: '我的订单',
            icon: 'dingdan',
            url: '../order/order'
        });
        this.setData({ bussiness: bussiness });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLDRDQUE4QztBQUM5QyxpREFBbUU7QUFDbkUsaURBQWtEO0FBUWxELElBQUksQ0FBQztJQUNELElBQUksRUFBRTtRQUNGLE9BQU8sRUFBRTtZQUNMO2dCQUNJLElBQUksRUFBRSxLQUFLO2dCQUNYLElBQUksRUFBRSxXQUFXO2dCQUNqQixHQUFHLEVBQUUsa0NBQWtDO2FBQzFDO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsR0FBRyxFQUFFLCtCQUErQjthQUN2QztZQUNEO2dCQUNJLElBQUksRUFBRSxLQUFLO2dCQUNYLElBQUksRUFBRSxZQUFZO2dCQUNsQixHQUFHLEVBQUUsa0NBQWtDO2FBQzFDO1NBTUo7UUFDRCxTQUFTLEVBQUU7WUFDUDtnQkFDSSxJQUFJLEVBQUUsTUFBTTtnQkFDWixJQUFJLEVBQUUsa0JBQWtCO2dCQUN4QixHQUFHLEVBQUUscUNBQXFDO2FBQzdDO1NBQ0o7UUFDRCxLQUFLLEVBQUU7WUFDSDtnQkFDSSxJQUFJLEVBQUUsTUFBTTtnQkFDWixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsR0FBRyxFQUFFLGdDQUFnQzthQUN4QztZQUNEO2dCQUNJLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRSxRQUFRO2dCQUNkLEdBQUcsRUFBRSw4QkFBOEI7Z0JBQ25DLElBQUksRUFBRSxLQUFLO2FBQ2Q7WUFDRDtnQkFDSSxJQUFJLEVBQUUsTUFBTTtnQkFDWixJQUFJLEVBQUUsbUJBQW1CO2dCQUN6QixHQUFHLEVBQUUsb0NBQW9DO2FBQzVDO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLE1BQU07Z0JBQ1osSUFBSSxFQUFFLHlCQUF5QjtnQkFDL0IsR0FBRyxFQUFFLDhCQUE4QjthQUN0QztTQUNKO1FBQ0QsT0FBTyxFQUFFLEtBQUs7UUFDZCxFQUFFLEVBQUUs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U0FBUyxHQUE2QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNyRCxTQUFTLENBQUMsQ0FBQyxDQUFFLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztRQUN2QyxTQUFTLENBQUMsSUFBSSxDQUNWLElBQUksRUFDSjtZQUNJLElBQUksRUFBRSxNQUFNO1lBQ1osSUFBSSxFQUFFLG1CQUFtQjtZQUN6QixHQUFHLEVBQUUsMkJBQTJCO1NBQ25DLEVBQ0Q7WUFDSSxJQUFJLEVBQUUsTUFBTTtZQUNaLElBQUksRUFBRSxhQUFhO1lBQ25CLEdBQUcsRUFBRSxzQkFBc0I7U0FDOUIsRUFDRCxJQUFJLEVBQ0o7WUFDSSxJQUFJLEVBQUUsTUFBTTtZQUNaLElBQUksRUFBRSxVQUFVO1lBQ2hCLEdBQUcsRUFBRSx3QkFBd0I7U0FDaEMsRUFDRDtZQUNJLElBQUksRUFBRSxNQUFNO1lBQ1osSUFBSSxFQUFFLFVBQVU7WUFDaEIsR0FBRyxFQUFFLHdCQUF3QjtTQUNoQyxFQUNEO1lBQ0ksSUFBSSxFQUFFLE1BQU07WUFDWixJQUFJLEVBQUUsU0FBUztZQUNmLEdBQUcsRUFBRSxnQkFBZ0I7U0FDeEIsQ0FDSixDQUFDO1FBQ0YsSUFBSSxDQUFDLE9BQVEsQ0FBQyxFQUFFLFNBQVMsV0FBQSxFQUFFLENBQUMsQ0FBQztJQUNqQyxDQUFDO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOS4quS6uuS4reW/g1xyXG4gKi9cclxuXHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi91dGlscy9odHRwJztcclxuaW1wb3J0IHsgSVNfT0ZGSUNJQUwsIElTX01FUkNIQU5UIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnQvc3RvcmUnO1xyXG5pbXBvcnQgeyBBRF9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnQvaW5kZXgnO1xyXG5cclxuaW50ZXJmYWNlIE1lbnVJdGVtIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGljb24/OiBzdHJpbmc7XHJcbiAgICB1cmw6IHN0cmluZztcclxufVxyXG5cclxuUGFnZSh7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgaGlzdG9yeTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5b6F5a6h5qC4JyxcclxuICAgICAgICAgICAgICAgIGljb246ICdkYWlzaGVuaGUnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnLi4vaGlzdG9yeS9oaXN0b3J5P3R5cGU9YXVkaXRpbmcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICflvoXlj4LliqAnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3dlbmRhbmcnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnLi4vaGlzdG9yeS9oaXN0b3J5P3R5cGU9YXdhaXQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICflvoXor4Tku7cnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2RhaXBpbmdqaWEnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnLi4vaGlzdG9yeS9oaXN0b3J5P3R5cGU9ZXZhbHVhdGUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIHtcclxuICAgICAgICAgICAgLy8gICAgIG5hbWU6ICflt7Llj4LliqAnLFxyXG4gICAgICAgICAgICAvLyAgICAgaWNvbjogJ3lpd2FuY2hlbmcnLFxyXG4gICAgICAgICAgICAvLyAgICAgdXJsOiAnLi4vaGlzdG9yeS9oaXN0b3J5P3R5cGU9Y29tcGxldGUnXHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGJ1c3NpbmVzczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn55Sz6K+35YWl6am7JyxcclxuICAgICAgICAgICAgICAgIGljb246ICdzaGFuZ2ppYXJlbnpoZW5nJyxcclxuICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9wZXJzb24vc2V0dGxlZF9pbi9zZXR0bGVkX2luJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBhZG1pbjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5bm/5ZGK6K6+572uJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdndWFuZ2dhbycsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvY29tbXVuaXR5L2FkX3NldHRpbmcvYWQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICflrqHmoLjnlLPor7cnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3NoZW5oZScsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvY29tbXVuaXR5L2F1ZGl0L2F1ZGl0JyxcclxuICAgICAgICAgICAgICAgIGZsYWc6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfnu4Tnu4fliJfooagnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3NoYW5namlhcmVuemhlbmcxJyxcclxuICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9jb21tdW5pdHkvYnVzaW5lc3MvYnVzaW5lc3MnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfllYblk4HliJfooagnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3NoYW5ncGlubGllYmlhb3R1YmlhbzAxJyxcclxuICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9jb21tdW5pdHkvZ29vZHMvZ29vZHMnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGlzQWRtaW46IGZhbHNlLFxyXG4gICAgICAgIGFkOiBudWxsXHJcbiAgICB9LFxyXG4gICAgb25TaG93KCkge1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIC8vIHd4LmdldFNldHRpbmcoe1xyXG4gICAgICAgIC8vICAgICBzdWNjZXNzOiAoe2F1dGhTZXR0aW5nfSkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgaWYoIWF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgd3gucmVMYXVuY2goe3VybDonL3BhZ2VzL2xvZ2luL2xvZ2luJ30pO1xyXG4gICAgICAgIC8vICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfSxcclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgIGtleTogSVNfT0ZGSUNJQUwsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6ICh7ZGF0YX0pID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSEoeyBpc0FkbWluOiBkYXRhfSk7XHJcbiAgICAgICAgICAgICAgICBkYXRhICYmIHRoaXMuY29tbW9kaXR5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgIGtleTogSVNfTUVSQ0hBTlQsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6ICh7ZGF0YX0pID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5idXNzaW5lc3MubGVuZ3RoID0gMTtcclxuICAgICAgICAgICAgICAgIGRhdGEgJiYgdGhpcy5tZXJjaGFudCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJlcXVlc3Q8SUFEPih7XHJcbiAgICAgICAgICAgIHVybDogJy9hcGkvYWQvZ2V0QWQnLFxyXG4gICAgICAgICAgICBkYXRhOiB7dHlwZTogQURfVFlQRS5QRVJTT059LFxyXG4gICAgICAgICAgICBub3RTaG93TXNnOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4gdGhpcy5zZXREYXRhISh7YWQ6IGRhdGF9KSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHRoaXMuc2V0RGF0YSEoe2FkOiBudWxsfSkpO1xyXG4gICAgfSxcclxuICAgIGNvbW1vZGl0eSgpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IFtcclxuICAgICAgICAgICAgcmVxdWVzdDxQYWdlRGF0YT4oe3VybDogJy9hZG1pbi9hdWRpdE1lcmNoYW50TGlzdCcsIGRhdGE6IHtwYWdlOiAxLCByb3dzOiAxfSwgbm90U2hvd01zZzogdHJ1ZSB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHtkYXRhOiB7dG90YWx9fSkgPT4gISF0b3RhbCkuY2F0Y2goKCkgPT4gZmFsc2UpLFxyXG4gICAgICAgICAgICByZXF1ZXN0PFBhZ2VEYXRhPih7dXJsOiAnL2FwaS9jb21tb2RpdHkvYXVkaXRMaXN0JywgZGF0YToge3BhZ2U6IDEsIHJvd3M6IDF9LCBub3RTaG93TXNnOiB0cnVlfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCh7ZGF0YToge3RvdGFsfX0pID0+ICEhdG90YWwpLmNhdGNoKCgpID0+IGZhbHNlKSxcclxuICAgICAgICAgICAgcmVxdWVzdDxJQWN0aXZlW10+KHt1cmw6ICcvYXBpL2FjdGl2aXR5L2F1ZGl0TGlzdCcsIG5vdFNob3dNc2c6IHRydWV9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4gISFkYXRhLmxlbmd0aCkuY2F0Y2goKCkgPT4gZmFsc2UpXHJcbiAgICAgICAgXTtcclxuICAgICAgICBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoZmxhZ3MpID0+IHRoaXMuc2V0RGF0YSEoeydhZG1pblsxXS5mbGFnJzogZmxhZ3MuaW5jbHVkZXModHJ1ZSl9KSk7XHJcbiAgICB9LFxyXG4gICAgbWVyY2hhbnQoKSB7XHJcbiAgICAgICAgY29uc3QgYnVzc2luZXNzOiBBcnJheTxNZW51SXRlbSB8IHN0cmluZz4gPSB0aGlzLmRhdGEuYnVzc2luZXNzO1xyXG4gICAgICAgICg8TWVudUl0ZW0+YnVzc2luZXNzWzBdKS5uYW1lID0gJ+S/ruaUueS/oeaBryc7XHJcbiAgICAgICAgYnVzc2luZXNzLnB1c2goXHJcbiAgICAgICAgICAgICfmtLvliqgnLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5Yib5bu65rS75YqoJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdjaHVhbmdqaWFuaHVvZG9uZycsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvYWN0aXZpdHkvZWRpdC9lZGl0JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+aIkeeahOa0u+WKqCcsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnbGlzdC0yLWNvcHknLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnLi4vYWN0aXZpdHkvYWN0aXZpdHknXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICfllYblk4EnLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5Yib5bu65ZWG5ZOBJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdzaGFuZ2ppYScsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvZ29vZHMvZWRpdC9lZGl0JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+aIkeeahOWVhuWTgScsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc2hhbmdwaW4nLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnLi4vY29tbW9kaXR5L2NvbW1vZGl0eSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+aIkeeahOiuouWNlScsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZGluZ2RhbicsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcuLi9vcmRlci9vcmRlcidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhISh7IGJ1c3NpbmVzcyB9KTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==