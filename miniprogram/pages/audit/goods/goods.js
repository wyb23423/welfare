"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var page_query_1 = require("../../../behavior/page_query");
var http_1 = require("../../../utils/http");
Component({
    behaviors: [page_query_1.default],
    data: {
        url: '/api/commodity/auditList',
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
            var id = _a.mark.id;
            wx.showActionSheet({
                itemList: ['拒绝', '通过'],
                success: function (_a) {
                    var tapIndex = _a.tapIndex;
                    http_1.request({
                        method: 'POST',
                        url: '/api/commodity/audit',
                        data: {
                            isOk: !!tapIndex,
                            commodityId: id
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnb29kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLDJEQUF3RTtBQUN4RSw0Q0FBOEM7QUFFOUMsU0FBUyxDQUFnQjtJQUNyQixTQUFTLEVBQUUsQ0FBQyxvQkFBUyxDQUFDO0lBQ3RCLElBQUksRUFBQztRQUNELEdBQUcsRUFBRSwwQkFBMEI7UUFDL0IsVUFBVSxFQUFFO1lBQ1IsV0FBVyxFQUFFLE1BQU07WUFDbkIsUUFBUSxFQUFFLE1BQU07U0FDbkI7S0FDSjtJQUNELEtBQUs7UUFDRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUNELE9BQU8sRUFBRTtRQUNMLGNBQWMsWUFBQyxFQUE4RDtZQUE3RSxpQkFvQkM7Z0JBcEJzQixlQUFFO1lBQ3JCLEVBQUUsQ0FBQyxlQUFlLENBQUM7Z0JBQ2YsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztnQkFDdEIsT0FBTyxFQUFFLFVBQUMsRUFBVTt3QkFBVCxzQkFBUTtvQkFDakIsY0FBTyxDQUFDO3dCQUNGLE1BQU0sRUFBRSxNQUFNO3dCQUNkLEdBQUcsRUFBRSxzQkFBc0I7d0JBQzNCLElBQUksRUFBRTs0QkFDRixJQUFJLEVBQUUsQ0FBQyxDQUFDLFFBQVE7NEJBQ2hCLFdBQVcsRUFBRSxFQUFFO3lCQUNsQjt3QkFDRCxNQUFNLEVBQUU7NEJBQ0osY0FBYyxFQUFFLG1DQUFtQzt5QkFDdEQ7cUJBQ04sQ0FBQzt5QkFDQyxJQUFJLENBQUMsY0FBTSxPQUFBLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFDLENBQUMsRUFBN0IsQ0FBNkIsQ0FBQzt5QkFDekMsSUFBSSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxFQUFFLEVBQWIsQ0FBYSxDQUFDO3lCQUN6QixLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN4QixDQUFDO2FBQ0osQ0FBQyxDQUFDO1FBQ1AsQ0FBQztLQUNKO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOWuoeaguOWVhuWTgVxyXG4gKi9cclxuaW1wb3J0IFBhZ2VRdWVyeSwgeyBMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vYmVoYXZpb3IvcGFnZV9xdWVyeSc7XHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi91dGlscy9odHRwJztcclxuXHJcbkNvbXBvbmVudDxMaXN0Q29tcG9uZW50Pih7XHJcbiAgICBiZWhhdmlvcnM6IFtQYWdlUXVlcnldLFxyXG4gICAgZGF0YTp7XHJcbiAgICAgICAgdXJsOiAnL2FwaS9jb21tb2RpdHkvYXVkaXRMaXN0JyxcclxuICAgICAgICBkYXRhQ29uZmlnOiB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlOiAncGFnZScsXHJcbiAgICAgICAgICAgIHBhZ2VTaXplOiAncm93cydcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVhZHkodGhpczogTGlzdENvbXBvbmVudCkge1xyXG4gICAgICAgIHRoaXMub25TaG93KCk7XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGF1dGhlbnRpY2F0aW9uKHttYXJrOiB7aWR9fTogQmFzZUV2ZW50PElBbnlPYmplY3QsIElBbnlPYmplY3QsIHtpZDogc3RyaW5nO30+KSB7XHJcbiAgICAgICAgICAgIHd4LnNob3dBY3Rpb25TaGVldCh7XHJcbiAgICAgICAgICAgICAgICBpdGVtTGlzdDogWyfmi5Lnu50nLCAn6YCa6L+HJ10sXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAoe3RhcEluZGV4fSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9hcGkvY29tbW9kaXR5L2F1ZGl0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNPazogISF0YXBJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1vZGl0eUlkOiBpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gd3guc2hvd1RvYXN0KHt0aXRsZTogJ+aTjeS9nOaIkOWKnyd9KSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLm9uU2hvdygpKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==