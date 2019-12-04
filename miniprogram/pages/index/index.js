"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("../../utils/http");
var util_1 = require("../../utils/util");
Page({
    data: {
        activity: [],
        goods: [],
        ad: []
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLHlDQUEyQztBQUMzQyx5Q0FBNkM7QUFFN0MsSUFBSSxDQUFDO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsUUFBUSxFQUFFLEVBQWU7UUFDekIsS0FBSyxFQUFFLEVBQWtCO1FBQ3pCLEVBQUUsRUFBRSxFQUFFO0tBQ1Q7SUFFRCxNQUFNO1FBQU4saUJBb0JDO1FBbkJHLGNBQU8sQ0FBb0I7WUFDdkIsR0FBRyxFQUFFLDJCQUEyQjtZQUNoQyxJQUFJLEVBQUU7Z0JBQ0YsV0FBVyxFQUFFLENBQUM7Z0JBQ2QsUUFBUSxFQUFFLEVBQUU7YUFDZjtTQUNKLENBQUM7YUFDRCxJQUFJLENBQUMsVUFBQyxFQUFrQjtnQkFBUixtQkFBSTtZQUFTLE9BQUEsS0FBSSxDQUFDLE9BQVEsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFTLENBQUMsRUFBRSxDQUFDO1FBQWhELENBQWdELENBQUM7YUFDOUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVwQixjQUFPLENBQXVCO1lBQzFCLEdBQUcsRUFBRSw0QkFBNEI7WUFDakMsSUFBSSxFQUFFO2dCQUNGLFdBQVcsRUFBRSxDQUFDO2dCQUNkLFFBQVEsRUFBRSxFQUFFO2FBQ2Y7U0FDSixDQUFDO2FBQ0QsSUFBSSxDQUFDLFVBQUMsRUFBa0I7Z0JBQVIsbUJBQUk7WUFBUyxPQUFBLEtBQUksQ0FBQyxPQUFRLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBUyxDQUFDLEVBQUUsQ0FBQztRQUE3QyxDQUE2QyxDQUFDO2FBQzNFLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQztDQUdKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDpppbpobVcclxuICovXHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi91dGlscy9odHRwJztcclxuaW1wb3J0IHsgcGFyc2VEYXRhIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCc7XHJcblxyXG5QYWdlKHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBhY3Rpdml0eTogW10gYXMgSUFjdGl2ZVtdLFxyXG4gICAgICAgIGdvb2RzOiBbXSBhcyBJQ29tbW9kaXR5W10sXHJcbiAgICAgICAgYWQ6IFtdXHJcbiAgICB9LFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT3nlJ/lkb3lkajmnJ9cclxuICAgIG9uU2hvdygpIHtcclxuICAgICAgICByZXF1ZXN0PFBhZ2VEYXRhPElBY3RpdmU+Pih7XHJcbiAgICAgICAgICAgIHVybDogJy9hcGkvYWN0aXZpdHkvcGFnaW5nUXVlcnknLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UGFnZTogMSxcclxuICAgICAgICAgICAgICAgIHBhZ2VTaXplOiAxMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoeyBkYXRhOiB7IGxpc3QgfSB9KSA9PiB0aGlzLnNldERhdGEhKHsgYWN0aXZpdHk6IGxpc3QubWFwKHBhcnNlRGF0YSkgfSkpXHJcbiAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuXHJcbiAgICAgICAgcmVxdWVzdDxQYWdlRGF0YTxJQ29tbW9kaXR5Pj4oe1xyXG4gICAgICAgICAgICB1cmw6ICcvYXBpL2NvbW1vZGl0eS9wYWdpbmdRdWVyeScsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlOiAxLFxyXG4gICAgICAgICAgICAgICAgcGFnZVNpemU6IDEwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKCh7IGRhdGE6IHsgbGlzdCB9IH0pID0+IHRoaXMuc2V0RGF0YSEoeyBnb29kczogbGlzdC5tYXAocGFyc2VEYXRhKSB9KSlcclxuICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xyXG4gICAgfSxcclxuXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbn0pO1xyXG4iXX0=