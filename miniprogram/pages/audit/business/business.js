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
                        },
                        header: {
                            'Content-Type': 'application/x-www-form-urlencoded'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVzaW5lc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJidXNpbmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLDJEQUF3RTtBQUN4RSw0Q0FBOEM7QUFFOUMsU0FBUyxDQUFnQjtJQUNyQixTQUFTLEVBQUUsQ0FBQyxvQkFBUyxDQUFDO0lBQ3RCLElBQUksRUFBQztRQUNELEdBQUcsRUFBRSwwQkFBMEI7UUFDL0IsVUFBVSxFQUFFO1lBQ1IsV0FBVyxFQUFFLE1BQU07WUFDbkIsUUFBUSxFQUFFLE1BQU07U0FDbkI7S0FDSjtJQUNELEtBQUs7UUFDRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUNELE9BQU8sRUFBRTtRQUNMLGNBQWMsWUFBQyxFQUFrRTtZQUFqRixpQkFvQkM7Z0JBcEJzQixtQkFBSTtZQUN2QixFQUFFLENBQUMsZUFBZSxDQUFDO2dCQUNmLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7Z0JBQ3RCLE9BQU8sRUFBRSxVQUFDLEVBQVU7d0JBQVQsc0JBQVE7b0JBQ2pCLGNBQU8sQ0FBQzt3QkFDSixNQUFNLEVBQUUsTUFBTTt3QkFDZCxHQUFHLEVBQUUsc0JBQXNCO3dCQUMzQixJQUFJLEVBQUU7NEJBQ0osSUFBSSxFQUFFLENBQUMsQ0FBQyxRQUFROzRCQUNoQixNQUFNLEVBQUUsSUFBSTt5QkFDYjt3QkFDRCxNQUFNLEVBQUU7NEJBQ04sY0FBYyxFQUFFLG1DQUFtQzt5QkFDdEQ7cUJBQ0YsQ0FBQzt5QkFDQyxJQUFJLENBQUMsY0FBTSxPQUFBLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFDLENBQUMsRUFBN0IsQ0FBNkIsQ0FBQzt5QkFDekMsSUFBSSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxFQUFFLEVBQWIsQ0FBYSxDQUFDO3lCQUN6QixLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN4QixDQUFDO2FBQ0osQ0FBQyxDQUFDO1FBQ1AsQ0FBQztLQUNKO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOWuoeaguOWVhuWutlxyXG4gKi9cclxuaW1wb3J0IFBhZ2VRdWVyeSwgeyBMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vYmVoYXZpb3IvcGFnZV9xdWVyeSc7XHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi91dGlscy9odHRwJztcclxuXHJcbkNvbXBvbmVudDxMaXN0Q29tcG9uZW50Pih7XHJcbiAgICBiZWhhdmlvcnM6IFtQYWdlUXVlcnldLFxyXG4gICAgZGF0YTp7XHJcbiAgICAgICAgdXJsOiAnL2FkbWluL2F1ZGl0TWVyY2hhbnRMaXN0JyxcclxuICAgICAgICBkYXRhQ29uZmlnOiB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlOiAncGFnZScsXHJcbiAgICAgICAgICAgIHBhZ2VTaXplOiAncm93cydcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVhZHkodGhpczogTGlzdENvbXBvbmVudCkge1xyXG4gICAgICAgIHRoaXMub25TaG93KCk7XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGF1dGhlbnRpY2F0aW9uKHttYXJrOiB7dXNlcn19OiBCYXNlRXZlbnQ8SUFueU9iamVjdCwgSUFueU9iamVjdCwge3VzZXI6IHN0cmluZzt9Pikge1xyXG4gICAgICAgICAgICB3eC5zaG93QWN0aW9uU2hlZXQoe1xyXG4gICAgICAgICAgICAgICAgaXRlbUxpc3Q6IFsn5ouS57udJywgJ+mAmui/hyddLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKHt0YXBJbmRleH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9hZG1pbi9hdWRpdE1lcmNoYW50JyxcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNPazogISF0YXBJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiB1c2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB3eC5zaG93VG9hc3Qoe3RpdGxlOiAn5pON5L2c5oiQ5YqfJ30pKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMub25TaG93KCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19