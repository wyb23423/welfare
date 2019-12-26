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
        isAdmin: false
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
            url: '../commodity/commodity'
        }, {
            name: '我的订单',
            icon: 'dingdan',
            url: '../order/order'
        });
        this.setData({ bussiness: bussiness });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLDRDQUE4QztBQUM5QyxpREFBbUU7QUFDbkUsaURBQWtEO0FBUWxELElBQUksQ0FBQztJQUNELElBQUksRUFBRTtRQUNGLE9BQU8sRUFBRTtZQUNMO2dCQUNJLElBQUksRUFBRSxLQUFLO2dCQUNYLElBQUksRUFBRSxXQUFXO2dCQUNqQixHQUFHLEVBQUUsa0NBQWtDO2FBQzFDO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsR0FBRyxFQUFFLCtCQUErQjthQUN2QztZQUNEO2dCQUNJLElBQUksRUFBRSxLQUFLO2dCQUNYLElBQUksRUFBRSxZQUFZO2dCQUNsQixHQUFHLEVBQUUsa0NBQWtDO2FBQzFDO1NBTUo7UUFDRCxTQUFTLEVBQUU7WUFDUDtnQkFDSSxJQUFJLEVBQUUsTUFBTTtnQkFDWixJQUFJLEVBQUUsa0JBQWtCO2dCQUN4QixHQUFHLEVBQUUscUNBQXFDO2FBQzdDO1NBQ0o7UUFDRCxLQUFLLEVBQUU7WUFDSDtnQkFDSSxJQUFJLEVBQUUsTUFBTTtnQkFDWixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsR0FBRyxFQUFFLGdDQUFnQzthQUN4QztZQUNEO2dCQUNJLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRSxRQUFRO2dCQUNkLEdBQUcsRUFBRSw4QkFBOEI7Z0JBQ25DLElBQUksRUFBRSxLQUFLO2FBQ2Q7WUFDRDtnQkFDSSxJQUFJLEVBQUUsTUFBTTtnQkFDWixJQUFJLEVBQUUsbUJBQW1CO2dCQUN6QixHQUFHLEVBQUUsb0NBQW9DO2FBQzVDO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLE1BQU07Z0JBQ1osSUFBSSxFQUFFLHlCQUF5QjtnQkFDL0IsR0FBRyxFQUFFLDhCQUE4QjthQUN0QztTQUNKO1FBQ0QsT0FBTyxFQUFFLEtBQUs7S0FDakI7SUFDRCxNQUFNO1FBQU4saUJBVUM7UUFURyxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1YsT0FBTyxFQUFFLFVBQUMsRUFBYTtvQkFBWiw0QkFBVztnQkFDbEIsSUFBRyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO29CQUMvQixFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUMsR0FBRyxFQUFDLG9CQUFvQixFQUFDLENBQUMsQ0FBQztpQkFDM0M7cUJBQU07b0JBQ0gsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUNmO1lBQ0wsQ0FBQztTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxJQUFJO1FBQUosaUJBd0JDO1FBdkJHLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDVixHQUFHLEVBQUUsbUJBQVc7WUFDaEIsT0FBTyxFQUFFLFVBQUMsRUFBTTtvQkFBTCxjQUFJO2dCQUNYLEtBQUksQ0FBQyxPQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztnQkFDaEMsSUFBSSxJQUFJLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUM3QixDQUFDO1NBQ0osQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNWLEdBQUcsRUFBRSxtQkFBVztZQUNoQixPQUFPLEVBQUUsVUFBQyxFQUFNO29CQUFMLGNBQUk7Z0JBQ1gsS0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDL0IsSUFBSSxJQUFJLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUM1QixDQUFDO1NBQ0osQ0FBQyxDQUFDO1FBRUgsY0FBTyxDQUFNO1lBQ1QsR0FBRyxFQUFFLGVBQWU7WUFDcEIsSUFBSSxFQUFFLEVBQUMsSUFBSSxFQUFFLGVBQU8sQ0FBQyxNQUFNLEVBQUM7WUFDNUIsVUFBVSxFQUFFLElBQUk7U0FDbkIsQ0FBQzthQUNHLElBQUksQ0FBQyxVQUFDLEVBQU07Z0JBQUwsY0FBSTtZQUFNLE9BQUEsS0FBSSxDQUFDLE9BQVEsQ0FBQyxFQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUMsQ0FBQztRQUF6QixDQUF5QixDQUFDO2FBQzNDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNELFNBQVM7UUFBVCxpQkFVQztRQVRHLElBQU0sUUFBUSxHQUFHO1lBQ2IsY0FBTyxDQUFXLEVBQUMsR0FBRyxFQUFFLDBCQUEwQixFQUFFLElBQUksRUFBRSxFQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FBQztpQkFDNUYsSUFBSSxDQUFDLFVBQUMsRUFBZTtvQkFBUCxxQkFBSztnQkFBTyxPQUFBLENBQUMsQ0FBQyxLQUFLO1lBQVAsQ0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLGNBQU0sT0FBQSxLQUFLLEVBQUwsQ0FBSyxDQUFDO1lBQzFELGNBQU8sQ0FBVyxFQUFDLEdBQUcsRUFBRSwwQkFBMEIsRUFBRSxJQUFJLEVBQUUsRUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDLENBQUM7aUJBQzNGLElBQUksQ0FBQyxVQUFDLEVBQWU7b0JBQVAscUJBQUs7Z0JBQU8sT0FBQSxDQUFDLENBQUMsS0FBSztZQUFQLENBQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFNLE9BQUEsS0FBSyxFQUFMLENBQUssQ0FBQztZQUMxRCxjQUFPLENBQVksRUFBQyxHQUFHLEVBQUUseUJBQXlCLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQyxDQUFDO2lCQUNqRSxJQUFJLENBQUMsVUFBQyxFQUFNO29CQUFMLGNBQUk7Z0JBQU0sT0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU07WUFBYixDQUFhLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBTSxPQUFBLEtBQUssRUFBTCxDQUFLLENBQUM7U0FDMUQsQ0FBQztRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSSxDQUFDLE9BQVEsQ0FBQyxFQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBdEQsQ0FBc0QsQ0FBQyxDQUFDO0lBQ2xHLENBQUM7SUFDRCxRQUFRO1FBQ0osSUFBTSxTQUFTLEdBQTZCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3JELFNBQVMsQ0FBQyxDQUFDLENBQUUsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ3ZDLFNBQVMsQ0FBQyxJQUFJLENBQ1YsSUFBSSxFQUNKO1lBQ0ksSUFBSSxFQUFFLE1BQU07WUFDWixJQUFJLEVBQUUsbUJBQW1CO1lBQ3pCLEdBQUcsRUFBRSwyQkFBMkI7U0FDbkMsRUFDRDtZQUNJLElBQUksRUFBRSxNQUFNO1lBQ1osSUFBSSxFQUFFLGFBQWE7WUFDbkIsR0FBRyxFQUFFLHNCQUFzQjtTQUM5QixFQUNELElBQUksRUFDSjtZQUNJLElBQUksRUFBRSxNQUFNO1lBQ1osSUFBSSxFQUFFLFVBQVU7WUFDaEIsR0FBRyxFQUFFLHdCQUF3QjtTQUNoQyxFQUNEO1lBQ0ksSUFBSSxFQUFFLE1BQU07WUFDWixJQUFJLEVBQUUsVUFBVTtZQUNoQixHQUFHLEVBQUUsd0JBQXdCO1NBQ2hDLEVBQ0Q7WUFDSSxJQUFJLEVBQUUsTUFBTTtZQUNaLElBQUksRUFBRSxTQUFTO1lBQ2YsR0FBRyxFQUFFLGdCQUFnQjtTQUN4QixDQUNKLENBQUM7UUFDRixJQUFJLENBQUMsT0FBUSxDQUFDLEVBQUUsU0FBUyxXQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5Liq5Lq65Lit5b+DXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2h0dHAnO1xyXG5pbXBvcnQgeyBJU19PRkZJQ0lBTCwgSVNfTUVSQ0hBTlQgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudC9zdG9yZSc7XHJcbmltcG9ydCB7IEFEX1RZUEUgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudC9pbmRleCc7XHJcblxyXG5pbnRlcmZhY2UgTWVudUl0ZW0ge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgaWNvbj86IHN0cmluZztcclxuICAgIHVybDogc3RyaW5nO1xyXG59XHJcblxyXG5QYWdlKHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBoaXN0b3J5OiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICflvoXlrqHmoLgnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2RhaXNoZW5oZScsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcuLi9oaXN0b3J5L2hpc3Rvcnk/dHlwZT1hdWRpdGluZydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+W+heWPguWKoCcsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnd2VuZGFuZycsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcuLi9oaXN0b3J5L2hpc3Rvcnk/dHlwZT1hd2FpdCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+W+heivhOS7tycsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZGFpcGluZ2ppYScsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcuLi9oaXN0b3J5L2hpc3Rvcnk/dHlwZT1ldmFsdWF0ZSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8ge1xyXG4gICAgICAgICAgICAvLyAgICAgbmFtZTogJ+W3suWPguWKoCcsXHJcbiAgICAgICAgICAgIC8vICAgICBpY29uOiAneWl3YW5jaGVuZycsXHJcbiAgICAgICAgICAgIC8vICAgICB1cmw6ICcuLi9oaXN0b3J5L2hpc3Rvcnk/dHlwZT1jb21wbGV0ZSdcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgYnVzc2luZXNzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfnlLPor7flhaXpqbsnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3NoYW5namlhcmVuemhlbmcnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL3BlcnNvbi9zZXR0bGVkX2luL3NldHRsZWRfaW4nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGFkbWluOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICflub/lkYrorr7nva4nLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2d1YW5nZ2FvJyxcclxuICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9jb21tdW5pdHkvYWRfc2V0dGluZy9hZCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+WuoeaguOeUs+ivtycsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc2hlbmhlJyxcclxuICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9jb21tdW5pdHkvYXVkaXQvYXVkaXQnLFxyXG4gICAgICAgICAgICAgICAgZmxhZzogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+e7hOe7h+WIl+ihqCcsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc2hhbmdqaWFyZW56aGVuZzEnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2NvbW11bml0eS9idXNpbmVzcy9idXNpbmVzcydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+WVhuWTgeWIl+ihqCcsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc2hhbmdwaW5saWViaWFvdHViaWFvMDEnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2NvbW11bml0eS9nb29kcy9nb29kcydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgaXNBZG1pbjogZmFsc2VcclxuICAgIH0sXHJcbiAgICBvblNob3coKSB7XHJcbiAgICAgICAgd3guZ2V0U2V0dGluZyh7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6ICh7YXV0aFNldHRpbmd9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZighYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pIHtcclxuICAgICAgICAgICAgICAgICAgICB3eC5yZUxhdW5jaCh7dXJsOicvcGFnZXMvbG9naW4vbG9naW4nfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAga2V5OiBJU19PRkZJQ0lBTCxcclxuICAgICAgICAgICAgc3VjY2VzczogKHtkYXRhfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhISh7IGlzQWRtaW46IGRhdGF9KTtcclxuICAgICAgICAgICAgICAgIGRhdGEgJiYgdGhpcy5jb21tb2RpdHkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAga2V5OiBJU19NRVJDSEFOVCxcclxuICAgICAgICAgICAgc3VjY2VzczogKHtkYXRhfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLmJ1c3NpbmVzcy5sZW5ndGggPSAxO1xyXG4gICAgICAgICAgICAgICAgZGF0YSAmJiB0aGlzLm1lcmNoYW50KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmVxdWVzdDxJQUQ+KHtcclxuICAgICAgICAgICAgdXJsOiAnL2FwaS9hZC9nZXRBZCcsXHJcbiAgICAgICAgICAgIGRhdGE6IHt0eXBlOiBBRF9UWVBFLlBFUlNPTn0sXHJcbiAgICAgICAgICAgIG5vdFNob3dNc2c6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoe2RhdGF9KSA9PiB0aGlzLnNldERhdGEhKHthZDogZGF0YX0pKVxyXG4gICAgICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xyXG4gICAgfSxcclxuICAgIGNvbW1vZGl0eSgpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IFtcclxuICAgICAgICAgICAgcmVxdWVzdDxQYWdlRGF0YT4oe3VybDogJy9hZG1pbi9hdWRpdE1lcmNoYW50TGlzdCcsIGRhdGE6IHtwYWdlOiAxLCByb3dzOiAxfSwgbm90U2hvd01zZzogdHJ1ZSB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHtkYXRhOiB7dG90YWx9fSkgPT4gISF0b3RhbCkuY2F0Y2goKCkgPT4gZmFsc2UpLFxyXG4gICAgICAgICAgICByZXF1ZXN0PFBhZ2VEYXRhPih7dXJsOiAnL2FwaS9jb21tb2RpdHkvYXVkaXRMaXN0JywgZGF0YToge3BhZ2U6IDEsIHJvd3M6IDF9LCBub3RTaG93TXNnOiB0cnVlfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCh7ZGF0YToge3RvdGFsfX0pID0+ICEhdG90YWwpLmNhdGNoKCgpID0+IGZhbHNlKSxcclxuICAgICAgICAgICAgcmVxdWVzdDxJQWN0aXZlW10+KHt1cmw6ICcvYXBpL2FjdGl2aXR5L2F1ZGl0TGlzdCcsIG5vdFNob3dNc2c6IHRydWV9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4gISFkYXRhLmxlbmd0aCkuY2F0Y2goKCkgPT4gZmFsc2UpXHJcbiAgICAgICAgXTtcclxuICAgICAgICBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoZmxhZ3MpID0+IHRoaXMuc2V0RGF0YSEoeydhZG1pblsxXS5mbGFnJzogZmxhZ3MuaW5jbHVkZXModHJ1ZSl9KSk7XHJcbiAgICB9LFxyXG4gICAgbWVyY2hhbnQoKSB7XHJcbiAgICAgICAgY29uc3QgYnVzc2luZXNzOiBBcnJheTxNZW51SXRlbSB8IHN0cmluZz4gPSB0aGlzLmRhdGEuYnVzc2luZXNzO1xyXG4gICAgICAgICg8TWVudUl0ZW0+YnVzc2luZXNzWzBdKS5uYW1lID0gJ+S/ruaUueS/oeaBryc7XHJcbiAgICAgICAgYnVzc2luZXNzLnB1c2goXHJcbiAgICAgICAgICAgICfmtLvliqgnLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5Yib5bu65rS75YqoJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdjaHVhbmdqaWFuaHVvZG9uZycsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvYWN0aXZpdHkvZWRpdC9lZGl0JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+aIkeeahOa0u+WKqCcsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnbGlzdC0yLWNvcHknLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnLi4vYWN0aXZpdHkvYWN0aXZpdHknXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICfllYblk4EnLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5Yib5bu65ZWG5ZOBJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdzaGFuZ2ppYScsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvZ29vZHMvZWRpdC9lZGl0JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+aIkeeahOWVhuWTgScsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc2hhbmdwaW4nLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnLi4vY29tbW9kaXR5L2NvbW1vZGl0eSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+aIkeeahOiuouWNlScsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZGluZ2RhbicsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcuLi9vcmRlci9vcmRlcidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhISh7IGJ1c3NpbmVzcyB9KTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==