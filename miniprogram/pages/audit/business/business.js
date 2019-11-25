"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var page_query_1 = require("../../../behavior/page_query");
var http_1 = require("../../../utils/http");
Component({
    behaviors: [page_query_1.default],
    data: {
        url: '/admin/auditMerchantList',
        dataConfig: {
            currentPage: 'page',
            pageSize: 'rows'
        }
    },
    ready: function () {
        this.onShow();
    },
    methods: {
        authentication: function (_a) {
            var _this = this;
            var user = _a.mark.user;
            wx.showActionSheet({
                itemList: ['拒绝', '通过'],
                success: function (_a) {
                    var tapIndex = _a.tapIndex;
                    http_1.request({
                        method: 'POST',
                        url: '/admin/auditMerchant',
                        data: {
                            isOk: !!tapIndex,
                            userId: user
                        }
                    })
                        .then(function () { return wx.showToast({ title: '操作成功' }); })
                        .then(function () { return _this.onShow(); })
                        .catch(console.log);
                }
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVzaW5lc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJidXNpbmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLDJEQUF3RTtBQUN4RSw0Q0FBOEM7QUFFOUMsU0FBUyxDQUFnQjtJQUNyQixTQUFTLEVBQUUsQ0FBQyxvQkFBUyxDQUFDO0lBQ3RCLElBQUksRUFBQztRQUNELEdBQUcsRUFBRSwwQkFBMEI7UUFDL0IsVUFBVSxFQUFFO1lBQ1IsV0FBVyxFQUFFLE1BQU07WUFDbkIsUUFBUSxFQUFFLE1BQU07U0FDbkI7S0FDSjtJQUNELEtBQUs7UUFDRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUNELE9BQU8sRUFBRTtRQUNMLGNBQWMsWUFBQyxFQUFrRTtZQUFqRixpQkFpQkM7Z0JBakJzQixtQkFBSTtZQUN2QixFQUFFLENBQUMsZUFBZSxDQUFDO2dCQUNmLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7Z0JBQ3RCLE9BQU8sRUFBRSxVQUFDLEVBQVU7d0JBQVQsc0JBQVE7b0JBQ2pCLGNBQU8sQ0FBQzt3QkFDSixNQUFNLEVBQUUsTUFBTTt3QkFDZCxHQUFHLEVBQUUsc0JBQXNCO3dCQUMzQixJQUFJLEVBQUU7NEJBQ0osSUFBSSxFQUFFLENBQUMsQ0FBQyxRQUFROzRCQUNoQixNQUFNLEVBQUUsSUFBSTt5QkFDYjtxQkFDSixDQUFDO3lCQUNDLElBQUksQ0FBQyxjQUFNLE9BQUEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUMsQ0FBQyxFQUE3QixDQUE2QixDQUFDO3lCQUN6QyxJQUFJLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLEVBQUUsRUFBYixDQUFhLENBQUM7eUJBQ3pCLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3hCLENBQUM7YUFDSixDQUFDLENBQUM7UUFDUCxDQUFDO0tBQ0o7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5a6h5qC45ZWG5a62XHJcbiAqL1xyXG5pbXBvcnQgUGFnZVF1ZXJ5LCB7IExpc3RDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9iZWhhdmlvci9wYWdlX3F1ZXJ5JztcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2h0dHAnO1xyXG5cclxuQ29tcG9uZW50PExpc3RDb21wb25lbnQ+KHtcclxuICAgIGJlaGF2aW9yczogW1BhZ2VRdWVyeV0sXHJcbiAgICBkYXRhOntcclxuICAgICAgICB1cmw6ICcvYWRtaW4vYXVkaXRNZXJjaGFudExpc3QnLFxyXG4gICAgICAgIGRhdGFDb25maWc6IHtcclxuICAgICAgICAgICAgY3VycmVudFBhZ2U6ICdwYWdlJyxcclxuICAgICAgICAgICAgcGFnZVNpemU6ICdyb3dzJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZWFkeSh0aGlzOiBMaXN0Q29tcG9uZW50KSB7XHJcbiAgICAgICAgdGhpcy5vblNob3coKTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgYXV0aGVudGljYXRpb24oe21hcms6IHt1c2VyfX06IEJhc2VFdmVudDxJQW55T2JqZWN0LCBJQW55T2JqZWN0LCB7dXNlcjogc3RyaW5nO30+KSB7XHJcbiAgICAgICAgICAgIHd4LnNob3dBY3Rpb25TaGVldCh7XHJcbiAgICAgICAgICAgICAgICBpdGVtTGlzdDogWyfmi5Lnu50nLCAn6YCa6L+HJ10sXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAoe3RhcEluZGV4fSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2FkbWluL2F1ZGl0TWVyY2hhbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc09rOiAhIXRhcEluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IHVzZXJcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB3eC5zaG93VG9hc3Qoe3RpdGxlOiAn5pON5L2c5oiQ5YqfJ30pKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMub25TaG93KCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19