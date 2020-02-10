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
            },
            {
                name: '参加统计',
                icon: 'tongji',
                url: '/pages/community/statistics/statistics'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLDRDQUE4QztBQUM5QyxpREFBbUU7QUFDbkUsaURBQWtEO0FBUWxELElBQUksQ0FBQztJQUNELElBQUksRUFBRTtRQUNGLE9BQU8sRUFBRTtZQUNMO2dCQUNJLElBQUksRUFBRSxLQUFLO2dCQUNYLElBQUksRUFBRSxXQUFXO2dCQUNqQixHQUFHLEVBQUUsa0NBQWtDO2FBQzFDO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsR0FBRyxFQUFFLCtCQUErQjthQUN2QztZQUNEO2dCQUNJLElBQUksRUFBRSxLQUFLO2dCQUNYLElBQUksRUFBRSxZQUFZO2dCQUNsQixHQUFHLEVBQUUsa0NBQWtDO2FBQzFDO1NBTUo7UUFDRCxTQUFTLEVBQUU7WUFDUDtnQkFDSSxJQUFJLEVBQUUsTUFBTTtnQkFDWixJQUFJLEVBQUUsa0JBQWtCO2dCQUN4QixHQUFHLEVBQUUscUNBQXFDO2FBQzdDO1NBQ0o7UUFDRCxLQUFLLEVBQUU7WUFDSDtnQkFDSSxJQUFJLEVBQUUsTUFBTTtnQkFDWixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsR0FBRyxFQUFFLGdDQUFnQzthQUN4QztZQUNEO2dCQUNJLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRSxRQUFRO2dCQUNkLEdBQUcsRUFBRSw4QkFBOEI7Z0JBQ25DLElBQUksRUFBRSxLQUFLO2FBQ2Q7WUFDRDtnQkFDSSxJQUFJLEVBQUUsTUFBTTtnQkFDWixJQUFJLEVBQUUsbUJBQW1CO2dCQUN6QixHQUFHLEVBQUUsb0NBQW9DO2FBQzVDO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLE1BQU07Z0JBQ1osSUFBSSxFQUFFLHlCQUF5QjtnQkFDL0IsR0FBRyxFQUFFLDhCQUE4QjthQUN0QztZQUNEO2dCQUNJLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRSxRQUFRO2dCQUNkLEdBQUcsRUFBRSx3Q0FBd0M7YUFDaEQ7U0FDSjtRQUNELE9BQU8sRUFBRSxLQUFLO1FBQ2QsRUFBRSxFQUFFLElBQUk7S0FDWDtJQUNELE1BQU07UUFDRixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFVaEIsQ0FBQztJQUNELElBQUk7UUFBSixpQkF3QkM7UUF2QkcsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNWLEdBQUcsRUFBRSxtQkFBVztZQUNoQixPQUFPLEVBQUUsVUFBQyxFQUFNO29CQUFMLGNBQUk7Z0JBQ1gsS0FBSSxDQUFDLE9BQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO2dCQUNoQyxJQUFJLElBQUksS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQzdCLENBQUM7U0FDSixDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1YsR0FBRyxFQUFFLG1CQUFXO1lBQ2hCLE9BQU8sRUFBRSxVQUFDLEVBQU07b0JBQUwsY0FBSTtnQkFDWCxLQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUMvQixJQUFJLElBQUksS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzVCLENBQUM7U0FDSixDQUFDLENBQUM7UUFFSCxjQUFPLENBQU07WUFDVCxHQUFHLEVBQUUsZUFBZTtZQUNwQixJQUFJLEVBQUUsRUFBQyxJQUFJLEVBQUUsZUFBTyxDQUFDLE1BQU0sRUFBQztZQUM1QixVQUFVLEVBQUUsSUFBSTtTQUNuQixDQUFDO2FBQ0csSUFBSSxDQUFDLFVBQUMsRUFBTTtnQkFBTCxjQUFJO1lBQU0sT0FBQSxLQUFJLENBQUMsT0FBUSxDQUFDLEVBQUMsRUFBRSxFQUFFLElBQUksRUFBQyxDQUFDO1FBQXpCLENBQXlCLENBQUM7YUFDM0MsS0FBSyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsT0FBUSxDQUFDLEVBQUMsRUFBRSxFQUFFLElBQUksRUFBQyxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0QsU0FBUztRQUFULGlCQVVDO1FBVEcsSUFBTSxRQUFRLEdBQUc7WUFDYixjQUFPLENBQVcsRUFBQyxHQUFHLEVBQUUsMEJBQTBCLEVBQUUsSUFBSSxFQUFFLEVBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFDLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxDQUFDO2lCQUM1RixJQUFJLENBQUMsVUFBQyxFQUFlO29CQUFQLHFCQUFLO2dCQUFPLE9BQUEsQ0FBQyxDQUFDLEtBQUs7WUFBUCxDQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBTSxPQUFBLEtBQUssRUFBTCxDQUFLLENBQUM7WUFDMUQsY0FBTyxDQUFXLEVBQUMsR0FBRyxFQUFFLDBCQUEwQixFQUFFLElBQUksRUFBRSxFQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUMsQ0FBQztpQkFDM0YsSUFBSSxDQUFDLFVBQUMsRUFBZTtvQkFBUCxxQkFBSztnQkFBTyxPQUFBLENBQUMsQ0FBQyxLQUFLO1lBQVAsQ0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLGNBQU0sT0FBQSxLQUFLLEVBQUwsQ0FBSyxDQUFDO1lBQzFELGNBQU8sQ0FBWSxFQUFDLEdBQUcsRUFBRSx5QkFBeUIsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDLENBQUM7aUJBQ2pFLElBQUksQ0FBQyxVQUFDLEVBQU07b0JBQUwsY0FBSTtnQkFBTSxPQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUFiLENBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFNLE9BQUEsS0FBSyxFQUFMLENBQUssQ0FBQztTQUMxRCxDQUFDO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFJLENBQUMsT0FBUSxDQUFDLEVBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUF0RCxDQUFzRCxDQUFDLENBQUM7SUFDbEcsQ0FBQztJQUNELFFBQVE7UUFDSixJQUFNLFNBQVMsR0FBNkIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDckQsU0FBUyxDQUFDLENBQUMsQ0FBRSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7UUFDdkMsU0FBUyxDQUFDLElBQUksQ0FDVixJQUFJLEVBQ0o7WUFDSSxJQUFJLEVBQUUsTUFBTTtZQUNaLElBQUksRUFBRSxtQkFBbUI7WUFDekIsR0FBRyxFQUFFLDJCQUEyQjtTQUNuQyxFQUNEO1lBQ0ksSUFBSSxFQUFFLE1BQU07WUFDWixJQUFJLEVBQUUsYUFBYTtZQUNuQixHQUFHLEVBQUUsc0JBQXNCO1NBQzlCLEVBQ0QsSUFBSSxFQUNKO1lBQ0ksSUFBSSxFQUFFLE1BQU07WUFDWixJQUFJLEVBQUUsVUFBVTtZQUNoQixHQUFHLEVBQUUsd0JBQXdCO1NBQ2hDLEVBQ0Q7WUFDSSxJQUFJLEVBQUUsTUFBTTtZQUNaLElBQUksRUFBRSxVQUFVO1lBQ2hCLEdBQUcsRUFBRSx3QkFBd0I7U0FDaEMsRUFDRDtZQUNJLElBQUksRUFBRSxNQUFNO1lBQ1osSUFBSSxFQUFFLFNBQVM7WUFDZixHQUFHLEVBQUUsZ0JBQWdCO1NBQ3hCLENBQ0osQ0FBQztRQUNGLElBQUksQ0FBQyxPQUFRLENBQUMsRUFBRSxTQUFTLFdBQUEsRUFBRSxDQUFDLENBQUM7SUFDakMsQ0FBQztDQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDkuKrkurrkuK3lv4NcclxuICovXHJcblxyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvaHR0cCc7XHJcbmltcG9ydCB7IElTX09GRklDSUFMLCBJU19NRVJDSEFOVCB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50L3N0b3JlJztcclxuaW1wb3J0IHsgQURfVFlQRSB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50L2luZGV4JztcclxuXHJcbmludGVyZmFjZSBNZW51SXRlbSB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBpY29uPzogc3RyaW5nO1xyXG4gICAgdXJsOiBzdHJpbmc7XHJcbn1cclxuXHJcblBhZ2Uoe1xyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGhpc3Rvcnk6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+W+heWuoeaguCcsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZGFpc2hlbmhlJyxcclxuICAgICAgICAgICAgICAgIHVybDogJy4uL2hpc3RvcnkvaGlzdG9yeT90eXBlPWF1ZGl0aW5nJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5b6F5Y+C5YqgJyxcclxuICAgICAgICAgICAgICAgIGljb246ICd3ZW5kYW5nJyxcclxuICAgICAgICAgICAgICAgIHVybDogJy4uL2hpc3RvcnkvaGlzdG9yeT90eXBlPWF3YWl0J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5b6F6K+E5Lu3JyxcclxuICAgICAgICAgICAgICAgIGljb246ICdkYWlwaW5namlhJyxcclxuICAgICAgICAgICAgICAgIHVybDogJy4uL2hpc3RvcnkvaGlzdG9yeT90eXBlPWV2YWx1YXRlJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyB7XHJcbiAgICAgICAgICAgIC8vICAgICBuYW1lOiAn5bey5Y+C5YqgJyxcclxuICAgICAgICAgICAgLy8gICAgIGljb246ICd5aXdhbmNoZW5nJyxcclxuICAgICAgICAgICAgLy8gICAgIHVybDogJy4uL2hpc3RvcnkvaGlzdG9yeT90eXBlPWNvbXBsZXRlJ1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBidXNzaW5lc3M6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+eUs+ivt+WFpempuycsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc2hhbmdqaWFyZW56aGVuZycsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvcGVyc29uL3NldHRsZWRfaW4vc2V0dGxlZF9pbidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgYWRtaW46IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+W5v+WRiuiuvue9ricsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZ3VhbmdnYW8nLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2NvbW11bml0eS9hZF9zZXR0aW5nL2FkJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5a6h5qC455Sz6K+3JyxcclxuICAgICAgICAgICAgICAgIGljb246ICdzaGVuaGUnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2NvbW11bml0eS9hdWRpdC9hdWRpdCcsXHJcbiAgICAgICAgICAgICAgICBmbGFnOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn57uE57uH5YiX6KGoJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdzaGFuZ2ppYXJlbnpoZW5nMScsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvY29tbXVuaXR5L2J1c2luZXNzL2J1c2luZXNzJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5ZWG5ZOB5YiX6KGoJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdzaGFuZ3BpbmxpZWJpYW90dWJpYW8wMScsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvY29tbXVuaXR5L2dvb2RzL2dvb2RzJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5Y+C5Yqg57uf6K6hJyxcclxuICAgICAgICAgICAgICAgIGljb246ICd0b25namknLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2NvbW11bml0eS9zdGF0aXN0aWNzL3N0YXRpc3RpY3MnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGlzQWRtaW46IGZhbHNlLFxyXG4gICAgICAgIGFkOiBudWxsXHJcbiAgICB9LFxyXG4gICAgb25TaG93KCkge1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIC8vIHd4LmdldFNldHRpbmcoe1xyXG4gICAgICAgIC8vICAgICBzdWNjZXNzOiAoe2F1dGhTZXR0aW5nfSkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgaWYoIWF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgd3gucmVMYXVuY2goe3VybDonL3BhZ2VzL2xvZ2luL2xvZ2luJ30pO1xyXG4gICAgICAgIC8vICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfSxcclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgIGtleTogSVNfT0ZGSUNJQUwsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6ICh7ZGF0YX0pID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSEoeyBpc0FkbWluOiBkYXRhfSk7XHJcbiAgICAgICAgICAgICAgICBkYXRhICYmIHRoaXMuY29tbW9kaXR5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgIGtleTogSVNfTUVSQ0hBTlQsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6ICh7ZGF0YX0pID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5idXNzaW5lc3MubGVuZ3RoID0gMTtcclxuICAgICAgICAgICAgICAgIGRhdGEgJiYgdGhpcy5tZXJjaGFudCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJlcXVlc3Q8SUFEPih7XHJcbiAgICAgICAgICAgIHVybDogJy9hcGkvYWQvZ2V0QWQnLFxyXG4gICAgICAgICAgICBkYXRhOiB7dHlwZTogQURfVFlQRS5QRVJTT059LFxyXG4gICAgICAgICAgICBub3RTaG93TXNnOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4gdGhpcy5zZXREYXRhISh7YWQ6IGRhdGF9KSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHRoaXMuc2V0RGF0YSEoe2FkOiBudWxsfSkpO1xyXG4gICAgfSxcclxuICAgIGNvbW1vZGl0eSgpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IFtcclxuICAgICAgICAgICAgcmVxdWVzdDxQYWdlRGF0YT4oe3VybDogJy9hZG1pbi9hdWRpdE1lcmNoYW50TGlzdCcsIGRhdGE6IHtwYWdlOiAxLCByb3dzOiAxfSwgbm90U2hvd01zZzogdHJ1ZSB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHtkYXRhOiB7dG90YWx9fSkgPT4gISF0b3RhbCkuY2F0Y2goKCkgPT4gZmFsc2UpLFxyXG4gICAgICAgICAgICByZXF1ZXN0PFBhZ2VEYXRhPih7dXJsOiAnL2FwaS9jb21tb2RpdHkvYXVkaXRMaXN0JywgZGF0YToge3BhZ2U6IDEsIHJvd3M6IDF9LCBub3RTaG93TXNnOiB0cnVlfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCh7ZGF0YToge3RvdGFsfX0pID0+ICEhdG90YWwpLmNhdGNoKCgpID0+IGZhbHNlKSxcclxuICAgICAgICAgICAgcmVxdWVzdDxJQWN0aXZlW10+KHt1cmw6ICcvYXBpL2FjdGl2aXR5L2F1ZGl0TGlzdCcsIG5vdFNob3dNc2c6IHRydWV9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4gISFkYXRhLmxlbmd0aCkuY2F0Y2goKCkgPT4gZmFsc2UpXHJcbiAgICAgICAgXTtcclxuICAgICAgICBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoZmxhZ3MpID0+IHRoaXMuc2V0RGF0YSEoeydhZG1pblsxXS5mbGFnJzogZmxhZ3MuaW5jbHVkZXModHJ1ZSl9KSk7XHJcbiAgICB9LFxyXG4gICAgbWVyY2hhbnQoKSB7XHJcbiAgICAgICAgY29uc3QgYnVzc2luZXNzOiBBcnJheTxNZW51SXRlbSB8IHN0cmluZz4gPSB0aGlzLmRhdGEuYnVzc2luZXNzO1xyXG4gICAgICAgICg8TWVudUl0ZW0+YnVzc2luZXNzWzBdKS5uYW1lID0gJ+S/ruaUueS/oeaBryc7XHJcbiAgICAgICAgYnVzc2luZXNzLnB1c2goXHJcbiAgICAgICAgICAgICfmtLvliqgnLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5Yib5bu65rS75YqoJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdjaHVhbmdqaWFuaHVvZG9uZycsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvYWN0aXZpdHkvZWRpdC9lZGl0JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+aIkeeahOa0u+WKqCcsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnbGlzdC0yLWNvcHknLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnLi4vYWN0aXZpdHkvYWN0aXZpdHknXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICfllYblk4EnLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5Yib5bu65ZWG5ZOBJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdzaGFuZ2ppYScsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvZ29vZHMvZWRpdC9lZGl0JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+aIkeeahOWVhuWTgScsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc2hhbmdwaW4nLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnLi4vY29tbW9kaXR5L2NvbW1vZGl0eSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+aIkeeahOiuouWNlScsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZGluZ2RhbicsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcuLi9vcmRlci9vcmRlcidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhISh7IGJ1c3NpbmVzcyB9KTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==