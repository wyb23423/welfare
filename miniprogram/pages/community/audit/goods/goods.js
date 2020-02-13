"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var page_query_1 = require("../../../../behavior/page_query");
var http_1 = require("../../../../utils/http");
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
        this.showHandler();
    },
    methods: {
        doAuit: function (e) {
            var _this = this;
            var isOk = !!e.target.dataset.ok;
            var index = e.currentTarget.dataset.index;
            var list = this.data.list;
            wx.showModal({
                content: isOk ? '审核通过？' : '审核不通过？',
                success: function (_a) {
                    var confirm = _a.confirm;
                    if (!confirm) {
                        return;
                    }
                    http_1.request({
                        url: '/api/commodity/audit',
                        data: { isOk: isOk, commodityId: list[index].id }
                    })
                        .then(function () { return wx.showToast({ title: '操作成功' }); })
                        .then(function () { return _this.reflash(); })
                        .catch(console.log);
                }
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnb29kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLDhEQUEyRTtBQUMzRSwrQ0FBaUQ7QUFFakQsU0FBUyxDQUFnQjtJQUNyQixTQUFTLEVBQUUsQ0FBQyxvQkFBUyxDQUFDO0lBQ3RCLElBQUksRUFBQztRQUNELEdBQUcsRUFBRSwwQkFBMEI7UUFDL0IsVUFBVSxFQUFFO1lBQ1IsV0FBVyxFQUFFLE1BQU07WUFDbkIsUUFBUSxFQUFFLE1BQU07U0FDbkI7S0FDSjtJQUNELEtBQUs7UUFDRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUNELE9BQU8sRUFBRTtRQUNMLE1BQU0sWUFBQyxDQUE0QztZQUFuRCxpQkFxQkM7WUFwQkcsSUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNuQyxJQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDNUMsSUFBTSxJQUFJLEdBQWlCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBRTFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0JBQ1QsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRO2dCQUNsQyxPQUFPLEVBQUUsVUFBQyxFQUFTO3dCQUFSLG9CQUFPO29CQUNkLElBQUcsQ0FBQyxPQUFPLEVBQUU7d0JBQ1QsT0FBTztxQkFDVjtvQkFFRCxjQUFPLENBQUM7d0JBQ0osR0FBRyxFQUFFLHNCQUFzQjt3QkFDM0IsSUFBSSxFQUFFLEVBQUUsSUFBSSxNQUFBLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUU7cUJBQzlDLENBQUM7eUJBQ0csSUFBSSxDQUFDLGNBQU0sT0FBQSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBQyxDQUFDLEVBQTdCLENBQTZCLENBQUM7eUJBQ3pDLElBQUksQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sRUFBRSxFQUFkLENBQWMsQ0FBQzt5QkFDMUIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDNUIsQ0FBQzthQUNKLENBQUMsQ0FBQztRQUNQLENBQUM7S0FDSjtDQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDlrqHmoLjllYblk4FcclxuICovXHJcbmltcG9ydCBQYWdlUXVlcnksIHsgTGlzdENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2JlaGF2aW9yL3BhZ2VfcXVlcnknO1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvaHR0cCc7XHJcblxyXG5Db21wb25lbnQ8TGlzdENvbXBvbmVudD4oe1xyXG4gICAgYmVoYXZpb3JzOiBbUGFnZVF1ZXJ5XSxcclxuICAgIGRhdGE6e1xyXG4gICAgICAgIHVybDogJy9hcGkvY29tbW9kaXR5L2F1ZGl0TGlzdCcsXHJcbiAgICAgICAgZGF0YUNvbmZpZzoge1xyXG4gICAgICAgICAgICBjdXJyZW50UGFnZTogJ3BhZ2UnLFxyXG4gICAgICAgICAgICBwYWdlU2l6ZTogJ3Jvd3MnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlYWR5KHRoaXM6IExpc3RDb21wb25lbnQpIHtcclxuICAgICAgICB0aGlzLnNob3dIYW5kbGVyKCk7XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGRvQXVpdChlOiBCYXNlRXZlbnQ8e29rPzogc3RyaW5nfSwge2luZGV4OiBudW1iZXJ9Pikge1xyXG4gICAgICAgICAgICBjb25zdCBpc09rID0gISFlLnRhcmdldC5kYXRhc2V0Lm9rO1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xyXG4gICAgICAgICAgICBjb25zdCBsaXN0OiBJQ29tbW9kaXR5W10gPSB0aGlzLmRhdGEubGlzdDtcclxuXHJcbiAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBpc09rID8gJ+WuoeaguOmAmui/h++8nycgOiAn5a6h5qC45LiN6YCa6L+H77yfJyxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICh7Y29uZmlybX0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZighY29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2FwaS9jb21tb2RpdHkvYXVkaXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGlzT2ssIGNvbW1vZGl0eUlkOiBsaXN0W2luZGV4XS5pZCB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gd3guc2hvd1RvYXN0KHt0aXRsZTogJ+aTjeS9nOaIkOWKnyd9KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5yZWZsYXNoKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==