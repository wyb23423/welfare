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
                type: 'auditing'
            },
            {
                name: '待参加',
                icon: 'wendang',
                type: 'await'
            },
            {
                name: '待评价',
                icon: 'daipingjia',
                type: 'evaluate'
            },
            {
                name: '已参加',
                icon: 'yiwancheng',
                type: 'complete'
            }
        ],
        person: [
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
        ],
        bussiness: [
            {
                name: '入驻商家',
                icon: 'shangjiarenzheng',
                url: '/pages/person/settled_in/settled_in'
            }
        ],
        admin: [
            {
                name: '创建活动',
                icon: 'chuangjianhuodong',
                url: '/pages/activity/create/create',
            },
            {
                name: '广告设置',
                icon: 'guanggao',
                url: '/pages/ad_setting/ad'
            },
            {
                name: '我的发起',
                icon: 'list-2-copy',
                url: '../history/history?type=initiate',
                flag: false
            },
            {
                name: '审核商家',
                icon: 'shangjiarenzheng1',
                url: '/pages/audit/business/business',
                flag: false
            },
            {
                name: '审核商品',
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
                'admin[3].flag': f1,
                'admin[4].flag': f2
            });
        });
    },
    merchant: function () {
        var bussiness = this.data.bussiness;
        bussiness[0].name = '商家信息';
        bussiness.push({
            name: '商品上架',
            icon: 'shangjia',
            url: '/pages/goods/create/create',
        }, {
            name: '我的订单',
            icon: 'dingdan',
            url: '/pages/person/order/order'
        });
        this.setData({ bussiness: bussiness });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUE4RDtBQUM5RCxpREFBeUQ7QUFDekQsNENBQThDO0FBWTlDLElBQUksQ0FBQztJQUNELElBQUksRUFBRTtRQUNGLE9BQU8sRUFBRTtZQUNMO2dCQUNJLElBQUksRUFBRSxLQUFLO2dCQUNYLElBQUksRUFBRSxXQUFXO2dCQUNqQixJQUFJLEVBQUUsVUFBVTthQUNuQjtZQUNEO2dCQUNJLElBQUksRUFBRSxLQUFLO2dCQUNYLElBQUksRUFBRSxTQUFTO2dCQUNmLElBQUksRUFBRSxPQUFPO2FBQ2hCO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCLElBQUksRUFBRSxVQUFVO2FBQ25CO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCLElBQUksRUFBRSxVQUFVO2FBQ25CO1NBQ0o7UUFDRCxNQUFNLEVBQUU7WUFDSjtnQkFDSSxJQUFJLEVBQUUsTUFBTTtnQkFDWixJQUFJLEVBQUUsT0FBTztnQkFDYixHQUFHLEVBQUUsa0JBQWtCO2FBQzFCO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLE1BQU07Z0JBQ1osSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLEdBQUcsRUFBRSxvQ0FBb0M7YUFDNUM7U0FDSjtRQUNELFNBQVMsRUFBRTtZQUNQO2dCQUNJLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRSxrQkFBa0I7Z0JBQ3hCLEdBQUcsRUFBRSxxQ0FBcUM7YUFDN0M7U0FDSjtRQUNELEtBQUssRUFBRTtZQUNIO2dCQUNJLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRSxtQkFBbUI7Z0JBQ3pCLEdBQUcsRUFBRSwrQkFBK0I7YUFDdkM7WUFDRDtnQkFDSSxJQUFJLEVBQUUsTUFBTTtnQkFDWixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsR0FBRyxFQUFFLHNCQUFzQjthQUM5QjtZQUNEO2dCQUNJLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRSxhQUFhO2dCQUNuQixHQUFHLEVBQUUsa0NBQWtDO2dCQUN2QyxJQUFJLEVBQUUsS0FBSzthQUNkO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLE1BQU07Z0JBQ1osSUFBSSxFQUFFLG1CQUFtQjtnQkFDekIsR0FBRyxFQUFFLGdDQUFnQztnQkFDckMsSUFBSSxFQUFFLEtBQUs7YUFDZDtZQUNEO2dCQUNJLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRSxrQkFBa0I7Z0JBQ3hCLEdBQUcsRUFBRSwwQkFBMEI7Z0JBQy9CLElBQUksRUFBRSxLQUFLO2FBQ2Q7U0FDSjtRQUNELE9BQU8sRUFBRSxLQUFLO0tBQ2pCO0lBQ0QsTUFBTTtRQUFOLGlCQVlDO1FBWEcsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNWLEdBQUcsRUFBRSwyQkFBbUI7WUFDeEIsT0FBTyxFQUFFLFVBQUMsRUFBTTtvQkFBTCxjQUFJO2dCQUNYLElBQU0sT0FBTyxHQUFHLElBQUksS0FBSyxzQkFBYyxDQUFDLFNBQVMsQ0FBQztnQkFDbEQsS0FBSSxDQUFDLE9BQVEsQ0FBQyxFQUFFLE9BQU8sU0FBQSxFQUFDLENBQUMsQ0FBQztnQkFDMUIsT0FBTyxJQUFJLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFFNUIsS0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDL0IsSUFBSSxLQUFLLHNCQUFjLENBQUMsUUFBUSxJQUFJLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN4RCxDQUFDO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELFNBQVM7UUFBVCxpQkFjQztRQWJHLElBQU0sUUFBUSxHQUFHO1lBQ2IsY0FBTyxDQUFXLEVBQUMsR0FBRyxFQUFFLDBCQUEwQixFQUFFLElBQUksRUFBRSxFQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FBQztpQkFDNUYsSUFBSSxDQUFDLFVBQUMsRUFBZTtvQkFBUCxxQkFBSztnQkFBTyxPQUFBLENBQUMsQ0FBQyxLQUFLO1lBQVAsQ0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLGNBQU0sT0FBQSxLQUFLLEVBQUwsQ0FBSyxDQUFDO1lBQzFELGNBQU8sQ0FBVyxFQUFDLEdBQUcsRUFBRSwwQkFBMEIsRUFBQyxJQUFJLEVBQUUsRUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUMsRUFBQyxVQUFVLEVBQUUsSUFBSSxFQUFDLENBQUM7aUJBQ3pGLElBQUksQ0FBQyxVQUFDLEVBQWU7b0JBQVAscUJBQUs7Z0JBQU8sT0FBQSxDQUFDLENBQUMsS0FBSztZQUFQLENBQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFNLE9BQUEsS0FBSyxFQUFMLENBQUssQ0FBQztTQUM3RCxDQUFDO1FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxFQUFRO2dCQUFQLFVBQUUsRUFBRSxVQUFFO1lBQy9CLEtBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1YsZUFBZSxFQUFFLEVBQUU7Z0JBQ25CLGVBQWUsRUFBRSxFQUFFO2FBQ3RCLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELFFBQVE7UUFDSixJQUFNLFNBQVMsR0FBZ0IsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDbkQsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7UUFDM0IsU0FBUyxDQUFDLElBQUksQ0FDVjtZQUNJLElBQUksRUFBRSxNQUFNO1lBQ1osSUFBSSxFQUFFLFVBQVU7WUFDaEIsR0FBRyxFQUFFLDRCQUE0QjtTQUNwQyxFQUNEO1lBQ0ksSUFBSSxFQUFFLE1BQU07WUFDWixJQUFJLEVBQUUsU0FBUztZQUNmLEdBQUcsRUFBRSwyQkFBMkI7U0FDbkMsQ0FDSixDQUFDO1FBQ0YsSUFBSSxDQUFDLE9BQVEsQ0FBQyxFQUFFLFNBQVMsV0FBQSxFQUFFLENBQUMsQ0FBQztJQUNqQyxDQUFDO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVVNFUl9BVVRIRU5USUNBVElPTiB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50L3N0b3JlJztcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb24gfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudC9pbmRleCc7XHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi91dGlscy9odHRwJztcclxuXHJcbi8qKlxyXG4gKiDkuKrkurrkuK3lv4NcclxuICovXHJcblxyXG5pbnRlcmZhY2UgTWVudUl0ZW0ge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgaWNvbj86IHN0cmluZztcclxuICAgIHVybDogc3RyaW5nO1xyXG59XHJcblxyXG5QYWdlKHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBoaXN0b3J5OiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICflvoXlrqHmoLgnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2RhaXNoZW5oZScsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnYXVkaXRpbmcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICflvoXlj4LliqAnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3dlbmRhbmcnLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2F3YWl0J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5b6F6K+E5Lu3JyxcclxuICAgICAgICAgICAgICAgIGljb246ICdkYWlwaW5namlhJyxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdldmFsdWF0ZSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+W3suWPguWKoCcsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAneWl3YW5jaGVuZycsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnY29tcGxldGUnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHBlcnNvbjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5oiR55qE5YWz5rOoJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdoZWFydCcsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcuLi9mb2xsb3cvZm9sbG93J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5oiR55qE5pS26JePJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdzaG91Y2FuZycsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcuLi9oaXN0b3J5L2hpc3Rvcnk/dHlwZT1jb2xsZWN0aW9uJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgYnVzc2luZXNzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICflhaXpqbvllYblrrYnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3NoYW5namlhcmVuemhlbmcnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL3BlcnNvbi9zZXR0bGVkX2luL3NldHRsZWRfaW4nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGFkbWluOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfliJvlu7rmtLvliqgnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2NodWFuZ2ppYW5odW9kb25nJyxcclxuICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9hY3Rpdml0eS9jcmVhdGUvY3JlYXRlJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+W5v+WRiuiuvue9ricsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZ3VhbmdnYW8nLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2FkX3NldHRpbmcvYWQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICfmiJHnmoTlj5HotbcnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2xpc3QtMi1jb3B5JyxcclxuICAgICAgICAgICAgICAgIHVybDogJy4uL2hpc3RvcnkvaGlzdG9yeT90eXBlPWluaXRpYXRlJyxcclxuICAgICAgICAgICAgICAgIGZsYWc6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICflrqHmoLjllYblrrYnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3NoYW5namlhcmVuemhlbmcxJyxcclxuICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9hdWRpdC9idXNpbmVzcy9idXNpbmVzcycsXHJcbiAgICAgICAgICAgICAgICBmbGFnOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5a6h5qC45ZWG5ZOBJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdzaGFuZ3BpbnJlbnpoZW5nJyxcclxuICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9hdWRpdC9nb29kcy9nb29kcycsXHJcbiAgICAgICAgICAgICAgICBmbGFnOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBpc0FkbWluOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIG9uU2hvdygpIHtcclxuICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAga2V5OiBVU0VSX0FVVEhFTlRJQ0FUSU9OLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiAoe2RhdGF9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc0FkbWluID0gZGF0YSA9PT0gQXV0aGVudGljYXRpb24uY29tbW9kaXR5O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhISh7IGlzQWRtaW59KTtcclxuICAgICAgICAgICAgICAgIGlzQWRtaW4gJiYgdGhpcy5jb21tb2RpdHkoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuYnVzc2luZXNzLmxlbmd0aCA9IDE7XHJcbiAgICAgICAgICAgICAgICBkYXRhID09PSBBdXRoZW50aWNhdGlvbi5vZmZpY2lhbCAmJiB0aGlzLm1lcmNoYW50KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBjb21tb2RpdHkoKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBbXHJcbiAgICAgICAgICAgIHJlcXVlc3Q8UGFnZURhdGE+KHt1cmw6ICcvYWRtaW4vYXVkaXRNZXJjaGFudExpc3QnLCBkYXRhOiB7cGFnZTogMSwgcm93czogMX0sIG5vdFNob3dNc2c6IHRydWUgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCh7ZGF0YToge3RvdGFsfX0pID0+ICEhdG90YWwpLmNhdGNoKCgpID0+IGZhbHNlKSxcclxuICAgICAgICAgICAgcmVxdWVzdDxQYWdlRGF0YT4oe3VybDogJy9hcGkvY29tbW9kaXR5L2F1ZGl0TGlzdCcsZGF0YToge3BhZ2U6IDEsIHJvd3M6IDF9LG5vdFNob3dNc2c6IHRydWV9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHtkYXRhOiB7dG90YWx9fSkgPT4gISF0b3RhbCkuY2F0Y2goKCkgPT4gZmFsc2UpXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKFtmMSwgZjJdKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgICAgICAgJ2FkbWluWzNdLmZsYWcnOiBmMSxcclxuICAgICAgICAgICAgICAgICdhZG1pbls0XS5mbGFnJzogZjJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgbWVyY2hhbnQoKSB7XHJcbiAgICAgICAgY29uc3QgYnVzc2luZXNzOiBNZW51SXRlbVtdICA9IHRoaXMuZGF0YS5idXNzaW5lc3M7XHJcbiAgICAgICAgYnVzc2luZXNzWzBdLm5hbWUgPSAn5ZWG5a625L+h5oGvJztcclxuICAgICAgICBidXNzaW5lc3MucHVzaChcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+WVhuWTgeS4iuaeticsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc2hhbmdqaWEnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2dvb2RzL2NyZWF0ZS9jcmVhdGUnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5oiR55qE6K6i5Y2VJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdkaW5nZGFuJyxcclxuICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9wZXJzb24vb3JkZXIvb3JkZXInXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSEoeyBidXNzaW5lc3MgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=