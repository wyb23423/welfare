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
                _this.merchant();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUE4RDtBQUM5RCxpREFBeUQ7QUFDekQsNENBQThDO0FBWTlDLElBQUksQ0FBQztJQUNELElBQUksRUFBRTtRQUNGLE9BQU8sRUFBRTtZQUNMO2dCQUNJLElBQUksRUFBRSxLQUFLO2dCQUNYLElBQUksRUFBRSxXQUFXO2dCQUNqQixHQUFHLEVBQUUsa0NBQWtDO2FBQzFDO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsR0FBRyxFQUFFLCtCQUErQjthQUN2QztZQUNEO2dCQUNJLElBQUksRUFBRSxLQUFLO2dCQUNYLElBQUksRUFBRSxZQUFZO2dCQUNsQixHQUFHLEVBQUUsa0NBQWtDO2FBQzFDO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCLEdBQUcsRUFBRSxrQ0FBa0M7YUFDMUM7U0FDSjtRQUNELFNBQVMsRUFBRTtZQUNQO2dCQUNJLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRSxrQkFBa0I7Z0JBQ3hCLEdBQUcsRUFBRSxxQ0FBcUM7YUFDN0M7U0FDSjtRQUNELEtBQUssRUFBRTtZQUNIO2dCQUNJLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRSxVQUFVO2dCQUNoQixHQUFHLEVBQUUsc0JBQXNCO2FBQzlCO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLE1BQU07Z0JBQ1osSUFBSSxFQUFFLG1CQUFtQjtnQkFDekIsR0FBRyxFQUFFLGdDQUFnQztnQkFDckMsSUFBSSxFQUFFLEtBQUs7YUFDZDtZQUNEO2dCQUNJLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRSxrQkFBa0I7Z0JBQ3hCLEdBQUcsRUFBRSwwQkFBMEI7Z0JBQy9CLElBQUksRUFBRSxLQUFLO2FBQ2Q7U0FDSjtRQUNELE9BQU8sRUFB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RU5USUNBVElPTiB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50L3N0b3JlJztcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb24gfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudC9pbmRleCc7XHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi91dGlscy9odHRwJztcclxuXHJcbi8qKlxyXG4gKiDkuKrkurrkuK3lv4NcclxuICovXHJcblxyXG5pbnRlcmZhY2UgTWVudUl0ZW0ge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgaWNvbj86IHN0cmluZztcclxuICAgIHVybDogc3RyaW5nO1xyXG59XHJcblxyXG5QYWdlKHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBoaXN0b3J5OiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICflvoXlrqHmoLgnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2RhaXNoZW5oZScsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcuLi9oaXN0b3J5L2hpc3Rvcnk/dHlwZT1hdWRpdGluZydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+W+heWPguWKoCcsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnd2VuZGFuZycsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcuLi9oaXN0b3J5L2hpc3Rvcnk/dHlwZT1hd2FpdCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+W+heivhOS7tycsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZGFpcGluZ2ppYScsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcuLi9oaXN0b3J5L2hpc3Rvcnk/dHlwZT1ldmFsdWF0ZSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+W3suWPguWKoCcsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAneWl3YW5jaGVuZycsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcuLi9oaXN0b3J5L2hpc3Rvcnk/dHlwZT1jb21wbGV0ZSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgYnVzc2luZXNzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfnlLPor7flhaXpqbsnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3NoYW5namlhcmVuemhlbmcnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL3BlcnNvbi9zZXR0bGVkX2luL3NldHRsZWRfaW4nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGFkbWluOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICflub/lkYrorr7nva4nLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2d1YW5nZ2FvJyxcclxuICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9hZF9zZXR0aW5nL2FkJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5ZWG5a625a6h5qC4JyxcclxuICAgICAgICAgICAgICAgIGljb246ICdzaGFuZ2ppYXJlbnpoZW5nMScsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvYXVkaXQvYnVzaW5lc3MvYnVzaW5lc3MnLFxyXG4gICAgICAgICAgICAgICAgZmxhZzogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+WVhuWTgeWuoeaguCcsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc2hhbmdwaW5yZW56aGVuZycsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvYXVkaXQvZ29vZHMvZ29vZHMnLFxyXG4gICAgICAgICAgICAgICAgZmxhZzogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgaXNBZG1pbjogZmFsc2VcclxuICAgIH0sXHJcbiAgICBvblNob3coKSB7XHJcbiAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgIGtleTogVVNFUl9BVVRIRU5USUNBVElPTixcclxuICAgICAgICAgICAgc3VjY2VzczogKHtkYXRhfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNBZG1pbiA9IGRhdGEgPT09IEF1dGhlbnRpY2F0aW9uLmNvbW1vZGl0eTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSEoeyBpc0FkbWlufSk7XHJcbiAgICAgICAgICAgICAgICBpc0FkbWluICYmIHRoaXMuY29tbW9kaXR5KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLmJ1c3NpbmVzcy5sZW5ndGggPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZXJjaGFudCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgY29tbW9kaXR5KCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gW1xyXG4gICAgICAgICAgICByZXF1ZXN0PFBhZ2VEYXRhPih7dXJsOiAnL2FkbWluL2F1ZGl0TWVyY2hhbnRMaXN0JywgZGF0YToge3BhZ2U6IDEsIHJvd3M6IDF9LCBub3RTaG93TXNnOiB0cnVlIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoe2RhdGE6IHt0b3RhbH19KSA9PiAhIXRvdGFsKS5jYXRjaCgoKSA9PiBmYWxzZSksXHJcbiAgICAgICAgICAgIHJlcXVlc3Q8UGFnZURhdGE+KHt1cmw6ICcvYXBpL2NvbW1vZGl0eS9hdWRpdExpc3QnLGRhdGE6IHtwYWdlOiAxLCByb3dzOiAxfSxub3RTaG93TXNnOiB0cnVlfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCh7ZGF0YToge3RvdGFsfX0pID0+ICEhdG90YWwpLmNhdGNoKCgpID0+IGZhbHNlKVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKChbZjEsIGYyXSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgICAgICAgICdhZG1pblsxXS5mbGFnJzogZjEsXHJcbiAgICAgICAgICAgICAgICAnYWRtaW5bMl0uZmxhZyc6IGYyXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIG1lcmNoYW50KCkge1xyXG4gICAgICAgIGNvbnN0IGJ1c3NpbmVzczogQXJyYXk8TWVudUl0ZW0gfCBzdHJpbmc+ID0gdGhpcy5kYXRhLmJ1c3NpbmVzcztcclxuICAgICAgICAoPE1lbnVJdGVtPmJ1c3NpbmVzc1swXSkubmFtZSA9ICfkv67mlLnkv6Hmga8nO1xyXG4gICAgICAgIGJ1c3NpbmVzcy5wdXNoKFxyXG4gICAgICAgICAgICAn5rS75YqoJyxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+WIm+W7uua0u+WKqCcsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnY2h1YW5namlhbmh1b2RvbmcnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2FjdGl2aXR5L2VkaXQvZWRpdCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfmiJHnmoTmtLvliqgnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2xpc3QtMi1jb3B5JyxcclxuICAgICAgICAgICAgICAgIHVybDogJy4uL2hpc3RvcnkvaGlzdG9yeT90eXBlPWluaXRpYXRlJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAn5ZWG5ZOBJyxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+WIm+W7uuWVhuWTgScsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc2hhbmdqaWEnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2dvb2RzL2VkaXQvZWRpdCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfmiJHnmoTllYblk4EnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3NoYW5ncGluJyxcclxuICAgICAgICAgICAgICAgIHVybDogJy4uL2dvb2RzL2dvb2RzJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5oiR55qE6K6i5Y2VJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdkaW5nZGFuJyxcclxuICAgICAgICAgICAgICAgIHVybDogJy4uL29yZGVyL29yZGVyJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnNldERhdGEhKHsgYnVzc2luZXNzIH0pO1xyXG4gICAgfVxyXG59KTtcclxuIl19