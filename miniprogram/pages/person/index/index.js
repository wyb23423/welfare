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
            }
        ],
        isAdmin: false,
        ad: ''
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLDRDQUE4QztBQUM5QyxpREFBc0Q7QUFDdEQsaURBQWtEO0FBUWxELElBQUksQ0FBQztJQUNELElBQUksRUFBRTtRQUNGLE9BQU8sRUFBRTtZQUNMO2dCQUNJLElBQUksRUFBRSxLQUFLO2dCQUNYLElBQUksRUFBRSxXQUFXO2dCQUNqQixHQUFHLEVBQUUsa0NBQWtDO2FBQzFDO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsR0FBRyxFQUFFLCtCQUErQjthQUN2QztZQUNEO2dCQUNJLElBQUksRUFBRSxLQUFLO2dCQUNYLElBQUksRUFBRSxZQUFZO2dCQUNsQixHQUFHLEVBQUUsa0NBQWtDO2FBQzFDO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCLEdBQUcsRUFBRSxrQ0FBa0M7YUFDMUM7U0FDSjtRQUNELFNBQVMsRUFBRTtZQUNQO2dCQUNJLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRSxrQkFBa0I7Z0JBQ3hCLEdBQUcsRUFBRSxxQ0FBcUM7YUFDN0M7U0FDSjtRQUNELEtBQUssRUFBRTtZQUNIO2dCQUNJLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRSxVQUFVO2dCQUNoQixHQUFHLEVBQUUsZ0NBQWdDO2FBQ3hDO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLE1BQU07Z0JBQ1osSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsR0FBRyxFQUFFLDhCQUE4QjtnQkFDbkMsSUFBSSxFQUFFLEtBQUs7YUFDZDtZQUNEO2dCQUNJLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRSxtQkFBbUI7Z0JBQ3pCLEdBQUcsRUFBRSxvQ0FBb0M7YUFDNUM7U0FDSjtRQUNELE9BQU8sRUFBRSxLQUFLO1FBQ2QsRUFBRSxFQUFFLEVB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QVMsQ0FBQyxJQUFJLENBQ1YsSUFBSSxFQUNKO1lBQ0ksSUFBSSxFQUFFLE1BQU07WUFDWixJQUFJLEVBQUUsbUJBQW1CO1lBQ3pCLEdBQUcsRUFBRSwyQkFBMkI7U0FDbkMsRUFDRDtZQUNJLElBQUksRUFBRSxNQUFNO1lBQ1osSUFBSSxFQUFFLGFBQWE7WUFDbkIsR0FBRyxFQUFFLHNCQUFzQjtTQUM5QixFQUNELElBQUksRUFDSjtZQUNJLElBQUksRUFBRSxNQUFNO1lBQ1osSUFBSSxFQUFFLFVBQVU7WUFDaEIsR0FBRyxFQUFFLHdCQUF3QjtTQUNoQyxFQUNEO1lBQ0ksSUFBSSxFQUFFLE1BQU07WUFDWixJQUFJLEVBQUUsVUFBVTtZQUNoQixHQUFHLEVBQUUsZ0JBQWdCO1NBQ3hCLEVBQ0Q7WUFDSSxJQUFJLEVBQUUsTUFBTTtZQUNaLElBQUksRUFBRSxTQUFTO1lBQ2YsR0FBRyxFQUFFLGdCQUFnQjtTQUN4QixDQUNKLENBQUM7UUFDRixJQUFJLENBQUMsT0FBUSxDQUFDLEVBQUUsU0FBUyxXQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5Liq5Lq65Lit5b+DXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2h0dHAnO1xyXG5pbXBvcnQgeyBJU19PRkZJQ0lBTCB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50L3N0b3JlJztcclxuaW1wb3J0IHsgQURfVFlQRSB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50L2luZGV4JztcclxuXHJcbmludGVyZmFjZSBNZW51SXRlbSB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBpY29uPzogc3RyaW5nO1xyXG4gICAgdXJsOiBzdHJpbmc7XHJcbn1cclxuXHJcblBhZ2Uoe1xyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGhpc3Rvcnk6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+W+heWuoeaguCcsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZGFpc2hlbmhlJyxcclxuICAgICAgICAgICAgICAgIHVybDogJy4uL2hpc3RvcnkvaGlzdG9yeT90eXBlPWF1ZGl0aW5nJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5b6F5Y+C5YqgJyxcclxuICAgICAgICAgICAgICAgIGljb246ICd3ZW5kYW5nJyxcclxuICAgICAgICAgICAgICAgIHVybDogJy4uL2hpc3RvcnkvaGlzdG9yeT90eXBlPWF3YWl0J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5b6F6K+E5Lu3JyxcclxuICAgICAgICAgICAgICAgIGljb246ICdkYWlwaW5namlhJyxcclxuICAgICAgICAgICAgICAgIHVybDogJy4uL2hpc3RvcnkvaGlzdG9yeT90eXBlPWV2YWx1YXRlJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5bey5Y+C5YqgJyxcclxuICAgICAgICAgICAgICAgIGljb246ICd5aXdhbmNoZW5nJyxcclxuICAgICAgICAgICAgICAgIHVybDogJy4uL2hpc3RvcnkvaGlzdG9yeT90eXBlPWNvbXBsZXRlJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBidXNzaW5lc3M6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+eUs+ivt+WFpempuycsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc2hhbmdqaWFyZW56aGVuZycsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvcGVyc29uL3NldHRsZWRfaW4vc2V0dGxlZF9pbidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgYWRtaW46IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+W5v+WRiuiuvue9ricsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZ3VhbmdnYW8nLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2NvbW11bml0eS9hZF9zZXR0aW5nL2FkJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5a6h5qC455Sz6K+3JyxcclxuICAgICAgICAgICAgICAgIGljb246ICdzaGVuaGUnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2NvbW11bml0eS9hdWRpdC9hdWRpdCcsXHJcbiAgICAgICAgICAgICAgICBmbGFnOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn57uE57uH5YiX6KGoJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdzaGFuZ2ppYXJlbnpoZW5nMScsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvY29tbXVuaXR5L2J1c2luZXNzL2J1c2luZXNzJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBpc0FkbWluOiBmYWxzZSxcclxuICAgICAgICBhZDogJydcclxuICAgIH0sXHJcbiAgICBvblNob3coKSB7XHJcbiAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgIGtleTogSVNfT0ZGSUNJQUwsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6ICh7ZGF0YX0pID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSEoeyBpc0FkbWluOiBkYXRhfSk7XHJcbiAgICAgICAgICAgICAgICBkYXRhICYmIHRoaXMuY29tbW9kaXR5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgIGtleTogSVNfT0ZGSUNJQUwsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6ICh7ZGF0YX0pID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5idXNzaW5lc3MubGVuZ3RoID0gMTtcclxuICAgICAgICAgICAgICAgIGRhdGEgJiYgdGhpcy5tZXJjaGFudCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJlcXVlc3Q8SUFEPih7XHJcbiAgICAgICAgICAgIHVybDogJy9hcGkvYWQvZ2V0QWQnLFxyXG4gICAgICAgICAgICBkYXRhOiB7dHlwZTogQURfVFlQRS5QRVJTT059LFxyXG4gICAgICAgICAgICBub3RTaG93TXNnOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4gdGhpcy5zZXREYXRhISh7YWQ6IGRhdGEuaW1nfSkpXHJcbiAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XHJcbiAgICB9LFxyXG4gICAgY29tbW9kaXR5KCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gW1xyXG4gICAgICAgICAgICByZXF1ZXN0PFBhZ2VEYXRhPih7dXJsOiAnL2FkbWluL2F1ZGl0TWVyY2hhbnRMaXN0JywgZGF0YToge3BhZ2U6IDEsIHJvd3M6IDF9LCBub3RTaG93TXNnOiB0cnVlIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoe2RhdGE6IHt0b3RhbH19KSA9PiAhIXRvdGFsKS5jYXRjaCgoKSA9PiBmYWxzZSksXHJcbiAgICAgICAgICAgIHJlcXVlc3Q8UGFnZURhdGE+KHt1cmw6ICcvYXBpL2NvbW1vZGl0eS9hdWRpdExpc3QnLCBkYXRhOiB7cGFnZTogMSwgcm93czogMX0sIG5vdFNob3dNc2c6IHRydWV9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHtkYXRhOiB7dG90YWx9fSkgPT4gISF0b3RhbCkuY2F0Y2goKCkgPT4gZmFsc2UpLFxyXG4gICAgICAgICAgICByZXF1ZXN0PElBY3RpdmVbXT4oe3VybDogJy9hcGkvYWN0aXZpdHkvYXVkaXRMaXN0Jywgbm90U2hvd01zZzogdHJ1ZX0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoe2RhdGF9KSA9PiAhIWRhdGEubGVuZ3RoKS5jYXRjaCgoKSA9PiBmYWxzZSlcclxuICAgICAgICBdO1xyXG4gICAgICAgIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKChmbGFncykgPT4gdGhpcy5zZXREYXRhISh7J2FkbWluWzFdLmZsYWcnOiBmbGFncy5pbmNsdWRlcyh0cnVlKX0pKTtcclxuICAgIH0sXHJcbiAgICBtZXJjaGFudCgpIHtcclxuICAgICAgICBjb25zdCBidXNzaW5lc3M6IEFycmF5PE1lbnVJdGVtIHwgc3RyaW5nPiA9IHRoaXMuZGF0YS5idXNzaW5lc3M7XHJcbiAgICAgICAgKDxNZW51SXRlbT5idXNzaW5lc3NbMF0pLm5hbWUgPSAn5L+u5pS55L+h5oGvJztcclxuICAgICAgICBidXNzaW5lc3MucHVzaChcclxuICAgICAgICAgICAgJ+a0u+WKqCcsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfliJvlu7rmtLvliqgnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2NodWFuZ2ppYW5odW9kb25nJyxcclxuICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9hY3Rpdml0eS9lZGl0L2VkaXQnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5oiR55qE5rS75YqoJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdsaXN0LTItY29weScsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcuLi9hY3Rpdml0eS9hY3Rpdml0eSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ+WVhuWTgScsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfliJvlu7rllYblk4EnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3NoYW5namlhJyxcclxuICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9nb29kcy9lZGl0L2VkaXQnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5oiR55qE5ZWG5ZOBJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdzaGFuZ3BpbicsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcuLi9nb29kcy9nb29kcydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+aIkeeahOiuouWNlScsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZGluZ2RhbicsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcuLi9vcmRlci9vcmRlcidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhISh7IGJ1c3NpbmVzcyB9KTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==