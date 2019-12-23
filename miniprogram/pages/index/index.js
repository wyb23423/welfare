"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("../../utils/http");
var util_1 = require("../../utils/util");
Page({
    data: {
        activity: [],
        goods: [],
        ads: new Array(5).fill({ img: '/public/images/23.jpg' })
    },
    onShow: function () {
        var _this = this;
        http_1.request({
            url: '/api/activity/pagingQuery',
            data: {
                currentPage: 1,
                pageSize: 10
            }
        })
            .then(function (_a) {
            var list = _a.data.list;
            return _this.setData({ activity: list.map(util_1.parseData) });
        })
            .catch(console.log);
        http_1.request({
            url: '/api/commodity/pagingQuery',
            data: {
                currentPage: 1,
                pageSize: 10
            }
        })
            .then(function (_a) {
            var list = _a.data.list;
            return _this.setData({ goods: list.map(util_1.parseData) });
        })
            .catch(console.log);
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLHlDQUEyQztBQUMzQyx5Q0FBNkM7QUFFN0MsSUFBSSxDQUFDO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsUUFBUSxFQUFFLEVBQWU7UUFDekIsS0FBSyxFQUFFLEVBQWtCO1FBQ3pCLEdBQUcsRUFBUyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxHQUFHLEVBQUUsdUJBQXVCLEVBQUMsQ0FBQztLQUNoRTtJQUNELE1BQU07UUFBTixpQkEyQkM7UUF6QkcsY0FBTyxDQUFvQjtZQUN2QixHQUFHLEVBQUUsMkJBQTJCO1lBQ2hDLElBQUksRUFBRTtnQkFDRixXQUFXLEVBQUUsQ0FBQztnQkFDZCxRQUFRLEVBQUUsRUFBRTthQUNmO1NBQ0osQ0FBQzthQUNHLElBQUksQ0FBQyxVQUFDLEVBQWtCO2dCQUFSLG1CQUFJO1lBQVMsT0FBQSxLQUFJLENBQUMsT0FBUSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQVMsQ0FBQyxFQUFFLENBQUM7UUFBaEQsQ0FBZ0QsQ0FBQzthQUM5RSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBR3hCLGNBQU8sQ0FBdUI7WUFDMUIsR0FBRyxFQUFFLDRCQUE0QjtZQUNqQyxJQUFJLEVBQUU7Z0JBQ0YsV0FBVyxFQUFFLENBQUM7Z0JBQ2QsUUFBUSxFQUFFLEVBQUU7YUFDZjtTQUNKLENBQUM7YUFDRyxJQUFJLENBQUMsVUFBQyxFQUFrQjtnQkFBUixtQkFBSTtZQUFTLE9BQUEsS0FBSSxDQUFDLE9BQVEsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFTLENBQUMsRUFBRSxDQUFDO1FBQTdDLENBQTZDLENBQUM7YUFDM0UsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQU01QixDQUFDO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOmmlumhtVxyXG4gKi9cclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uLy4uL3V0aWxzL2h0dHAnO1xyXG5pbXBvcnQgeyBwYXJzZURhdGEgfSBmcm9tICcuLi8uLi91dGlscy91dGlsJztcclxuXHJcblBhZ2Uoe1xyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGFjdGl2aXR5OiBbXSBhcyBJQWN0aXZlW10sXHJcbiAgICAgICAgZ29vZHM6IFtdIGFzIElDb21tb2RpdHlbXSxcclxuICAgICAgICBhZHM6IDxJQURbXT5uZXcgQXJyYXkoNSkuZmlsbCh7aW1nOiAnL3B1YmxpYy9pbWFnZXMvMjMuanBnJ30pXHJcbiAgICB9LFxyXG4gICAgb25TaG93KCkge1xyXG4gICAgICAgIC8vIOa0u+WKqFxyXG4gICAgICAgIHJlcXVlc3Q8UGFnZURhdGE8SUFjdGl2ZT4+KHtcclxuICAgICAgICAgICAgdXJsOiAnL2FwaS9hY3Rpdml0eS9wYWdpbmdRdWVyeScsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlOiAxLFxyXG4gICAgICAgICAgICAgICAgcGFnZVNpemU6IDEwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoeyBkYXRhOiB7IGxpc3QgfSB9KSA9PiB0aGlzLnNldERhdGEhKHsgYWN0aXZpdHk6IGxpc3QubWFwKHBhcnNlRGF0YSkgfSkpXHJcbiAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XHJcblxyXG4gICAgICAgIC8vIOWVhuWTgVxyXG4gICAgICAgIHJlcXVlc3Q8UGFnZURhdGE8SUNvbW1vZGl0eT4+KHtcclxuICAgICAgICAgICAgdXJsOiAnL2FwaS9jb21tb2RpdHkvcGFnaW5nUXVlcnknLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UGFnZTogMSxcclxuICAgICAgICAgICAgICAgIHBhZ2VTaXplOiAxMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHsgZGF0YTogeyBsaXN0IH0gfSkgPT4gdGhpcy5zZXREYXRhISh7IGdvb2RzOiBsaXN0Lm1hcChwYXJzZURhdGEpIH0pKVxyXG4gICAgICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xyXG5cclxuICAgICAgICAvLyDlub/lkYpcclxuICAgICAgICAvLyByZXF1ZXN0PElBRFtdPih7dXJsOiAnL2FwaS9hZC9nZXRDYXJvdXNlJ30pXHJcbiAgICAgICAgLy8gICAgIC50aGVuKCh7ZGF0YX0pID0+IHRoaXMuc2V0RGF0YSEoe2FkczogZGF0YX0pKVxyXG4gICAgICAgIC8vICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==