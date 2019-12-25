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
        ad: ''
    },
    onShow: function () {
        var _this = this;
        wx.getSetting({
            success: function (_a) {
                var authSetting = _a.authSetting;
                if (!authSetting['scope.userInfo']) {
                    wx.reLaunch({ url: '/pages/login/login' });
                }
                else {
                    _this.init();
                }
            }
        });
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
        this.merchant();
        http_1.request({
            url: '/api/ad/getAd',
            data: { type: index_1.AD_TYPE.PERSON },
            notShowMsg: true
        })
            .then(function (_a) {
            var data = _a.data;
            return _this.setData({ ad: data.img });
        })
            .catch(console.log);
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
            url: '../goods/goods'
        }, {
            name: '我的订单',
            icon: 'dingdan',
            url: '../order/order'
        });
        this.setData({ bussiness: bussiness });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLDRDQUE4QztBQUM5QyxpREFBbUU7QUFDbkUsaURBQWtEO0FBUWxELElBQUksQ0FBQztJQUNELElBQUksRUFBRTtRQUNGLE9BQU8sRUFBRTtZQUNMO2dCQUNJLElBQUksRUFBRSxLQUFLO2dCQUNYLElBQUksRUFBRSxXQUFXO2dCQUNqQixHQUFHLEVBQUUsa0NBQWtDO2FBQzFDO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsR0FBRyxFQUFFLCtCQUErQjthQUN2QztZQUNEO2dCQUNJLElBQUksRUFBRSxLQUFLO2dCQUNYLElBQUksRUFBRSxZQUFZO2dCQUNsQixHQUFHLEVBQUUsa0NBQWtDO2FBQzFDO1NBTUo7UUFDRCxTQUFTLEVBQUU7WUFDUDtnQkFDSSxJQUFJLEVBQUUsTUFBTTtnQkFDWixJQUFJLEVBQUUsa0JBQWtCO2dCQUN4QixHQUFHLEVBQUUscUNBQXFDO2FBQzdDO1NBQ0o7UUFDRCxLQUFLLEVBQUU7WUFDSDtnQkFDSSxJQUFJLEVBQUUsTUFBTTtnQkFDWixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsR0FBRyxFQUFFLGdDQUFnQzthQUN4QztZQUNEO2dCQUNJLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRSxRQUFRO2dCQUNkLEdBQUcsRUFBRSw4QkFBOEI7Z0JBQ25DLElBQUksRUFBRSxLQUFLO2FBQ2Q7WUFDRDtnQkFDSSxJQUFJLEVBQUUsTUFBTTtnQkFDWixJQUFJLEVBQUUsbUJBQW1CO2dCQUN6QixHQUFHLEVBQUUsb0NBQW9DO2FBQzVDO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLE1BQU07Z0JBQ1osSUFBSSxFQUFFLHlCQUF5QjtnQkFDL0IsR0FBRyxFQUFFLDhCQUE4QjthQUN0QztTQUNKO1FBQ0QsT0FBTyxFQUFFLEtBQUs7UUFDZCxFQUFFLEVBQUUs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TSxTQUFTLEdBQTZCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3JELFNBQVMsQ0FBQyxDQUFDLENBQUUsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ3ZDLFNBQVMsQ0FBQyxJQUFJLENBQ1YsSUFBSSxFQUNKO1lBQ0ksSUFBSSxFQUFFLE1BQU07WUFDWixJQUFJLEVBQUUsbUJBQW1CO1lBQ3pCLEdBQUcsRUFBRSwyQkFBMkI7U0FDbkMsRUFDRDtZQUNJLElBQUksRUFBRSxNQUFNO1lBQ1osSUFBSSxFQUFFLGFBQWE7WUFDbkIsR0FBRyxFQUFFLHNCQUFzQjtTQUM5QixFQUNELElBQUksRUFDSjtZQUNJLElBQUksRUFBRSxNQUFNO1lBQ1osSUFBSSxFQUFFLFVBQVU7WUFDaEIsR0FBRyxFQUFFLHdCQUF3QjtTQUNoQyxFQUNEO1lBQ0ksSUFBSSxFQUFFLE1BQU07WUFDWixJQUFJLEVBQUUsVUFBVTtZQUNoQixHQUFHLEVBQUUsZ0JBQWdCO1NBQ3hCLEVBQ0Q7WUFDSSxJQUFJLEVBQUUsTUFBTTtZQUNaLElBQUksRUFBRSxTQUFTO1lBQ2YsR0FBRyxFQUFFLGdCQUFnQjtTQUN4QixDQUNKLENBQUM7UUFDRixJQUFJLENBQUMsT0FBUSxDQUFDLEVBQUUsU0FBUyxXQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5Liq5Lq65Lit5b+DXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2h0dHAnO1xyXG5pbXBvcnQgeyBJU19PRkZJQ0lBTCwgSVNfTUVSQ0hBTlQgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudC9zdG9yZSc7XHJcbmltcG9ydCB7IEFEX1RZUEUgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudC9pbmRleCc7XHJcblxyXG5pbnRlcmZhY2UgTWVudUl0ZW0ge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgaWNvbj86IHN0cmluZztcclxuICAgIHVybDogc3RyaW5nO1xyXG59XHJcblxyXG5QYWdlKHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBoaXN0b3J5OiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICflvoXlrqHmoLgnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2RhaXNoZW5oZScsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcuLi9oaXN0b3J5L2hpc3Rvcnk/dHlwZT1hdWRpdGluZydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+W+heWPguWKoCcsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnd2VuZGFuZycsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcuLi9oaXN0b3J5L2hpc3Rvcnk/dHlwZT1hd2FpdCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+W+heivhOS7tycsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZGFpcGluZ2ppYScsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcuLi9oaXN0b3J5L2hpc3Rvcnk/dHlwZT1ldmFsdWF0ZSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8ge1xyXG4gICAgICAgICAgICAvLyAgICAgbmFtZTogJ+W3suWPguWKoCcsXHJcbiAgICAgICAgICAgIC8vICAgICBpY29uOiAneWl3YW5jaGVuZycsXHJcbiAgICAgICAgICAgIC8vICAgICB1cmw6ICcuLi9oaXN0b3J5L2hpc3Rvcnk/dHlwZT1jb21wbGV0ZSdcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgYnVzc2luZXNzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfnlLPor7flhaXpqbsnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3NoYW5namlhcmVuemhlbmcnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL3BlcnNvbi9zZXR0bGVkX2luL3NldHRsZWRfaW4nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGFkbWluOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICflub/lkYrorr7nva4nLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2d1YW5nZ2FvJyxcclxuICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9jb21tdW5pdHkvYWRfc2V0dGluZy9hZCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+WuoeaguOeUs+ivtycsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc2hlbmhlJyxcclxuICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9jb21tdW5pdHkvYXVkaXQvYXVkaXQnLFxyXG4gICAgICAgICAgICAgICAgZmxhZzogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+e7hOe7h+WIl+ihqCcsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc2hhbmdqaWFyZW56aGVuZzEnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2NvbW11bml0eS9idXNpbmVzcy9idXNpbmVzcydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+WVhuWTgeWIl+ihqCcsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc2hhbmdwaW5saWViaWFvdHViaWFvMDEnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2NvbW11bml0eS9nb29kcy9nb29kcydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgaXNBZG1pbjogZmFsc2UsXHJcbiAgICAgICAgYWQ6ICcnXHJcbiAgICB9LFxyXG4gICAgb25TaG93KCkge1xyXG4gICAgICAgIHd4LmdldFNldHRpbmcoe1xyXG4gICAgICAgICAgICBzdWNjZXNzOiAoe2F1dGhTZXR0aW5nfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoIWF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3gucmVMYXVuY2goe3VybDonL3BhZ2VzL2xvZ2luL2xvZ2luJ30pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgIGtleTogSVNfT0ZGSUNJQUwsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6ICh7ZGF0YX0pID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSEoeyBpc0FkbWluOiBkYXRhfSk7XHJcbiAgICAgICAgICAgICAgICBkYXRhICYmIHRoaXMuY29tbW9kaXR5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5tZXJjaGFudCgpO1xyXG5cclxuICAgICAgICAvLyB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAvLyAgICAga2V5OiBJU19NRVJDSEFOVCxcclxuICAgICAgICAvLyAgICAgc3VjY2VzczogKHtkYXRhfSkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5kYXRhLmJ1c3NpbmVzcy5sZW5ndGggPSAxO1xyXG4gICAgICAgIC8vICAgICAgICAgZGF0YSAmJiB0aGlzLm1lcmNoYW50KCk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgcmVxdWVzdDxJQUQ+KHtcclxuICAgICAgICAgICAgdXJsOiAnL2FwaS9hZC9nZXRBZCcsXHJcbiAgICAgICAgICAgIGRhdGE6IHt0eXBlOiBBRF9UWVBFLlBFUlNPTn0sXHJcbiAgICAgICAgICAgIG5vdFNob3dNc2c6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoe2RhdGF9KSA9PiB0aGlzLnNldERhdGEhKHthZDogZGF0YS5pbWd9KSlcclxuICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuICAgIH0sXHJcbiAgICBjb21tb2RpdHkoKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBbXHJcbiAgICAgICAgICAgIHJlcXVlc3Q8UGFnZURhdGE+KHt1cmw6ICcvYWRtaW4vYXVkaXRNZXJjaGFudExpc3QnLCBkYXRhOiB7cGFnZTogMSwgcm93czogMX0sIG5vdFNob3dNc2c6IHRydWUgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCh7ZGF0YToge3RvdGFsfX0pID0+ICEhdG90YWwpLmNhdGNoKCgpID0+IGZhbHNlKSxcclxuICAgICAgICAgICAgcmVxdWVzdDxQYWdlRGF0YT4oe3VybDogJy9hcGkvY29tbW9kaXR5L2F1ZGl0TGlzdCcsIGRhdGE6IHtwYWdlOiAxLCByb3dzOiAxfSwgbm90U2hvd01zZzogdHJ1ZX0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoe2RhdGE6IHt0b3RhbH19KSA9PiAhIXRvdGFsKS5jYXRjaCgoKSA9PiBmYWxzZSksXHJcbiAgICAgICAgICAgIHJlcXVlc3Q8SUFjdGl2ZVtdPih7dXJsOiAnL2FwaS9hY3Rpdml0eS9hdWRpdExpc3QnLCBub3RTaG93TXNnOiB0cnVlfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCh7ZGF0YX0pID0+ICEhZGF0YS5sZW5ndGgpLmNhdGNoKCgpID0+IGZhbHNlKVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKGZsYWdzKSA9PiB0aGlzLnNldERhdGEhKHsnYWRtaW5bMV0uZmxhZyc6IGZsYWdzLmluY2x1ZGVzKHRydWUpfSkpO1xyXG4gICAgfSxcclxuICAgIG1lcmNoYW50KCkge1xyXG4gICAgICAgIGNvbnN0IGJ1c3NpbmVzczogQXJyYXk8TWVudUl0ZW0gfCBzdHJpbmc+ID0gdGhpcy5kYXRhLmJ1c3NpbmVzcztcclxuICAgICAgICAoPE1lbnVJdGVtPmJ1c3NpbmVzc1swXSkubmFtZSA9ICfkv67mlLnkv6Hmga8nO1xyXG4gICAgICAgIGJ1c3NpbmVzcy5wdXNoKFxyXG4gICAgICAgICAgICAn5rS75YqoJyxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+WIm+W7uua0u+WKqCcsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnY2h1YW5namlhbmh1b2RvbmcnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2FjdGl2aXR5L2VkaXQvZWRpdCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfmiJHnmoTmtLvliqgnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2xpc3QtMi1jb3B5JyxcclxuICAgICAgICAgICAgICAgIHVybDogJy4uL2FjdGl2aXR5L2FjdGl2aXR5J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAn5ZWG5ZOBJyxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+WIm+W7uuWVhuWTgScsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc2hhbmdqaWEnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2dvb2RzL2VkaXQvZWRpdCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfmiJHnmoTllYblk4EnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3NoYW5ncGluJyxcclxuICAgICAgICAgICAgICAgIHVybDogJy4uL2dvb2RzL2dvb2RzJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5oiR55qE6K6i5Y2VJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdkaW5nZGFuJyxcclxuICAgICAgICAgICAgICAgIHVybDogJy4uL29yZGVyL29yZGVyJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnNldERhdGEhKHsgYnVzc2luZXNzIH0pO1xyXG4gICAgfVxyXG59KTtcclxuIl19