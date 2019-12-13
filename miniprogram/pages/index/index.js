"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("../../utils/http");
var util_1 = require("../../utils/util");
Page({
    data: {
        activity: [],
        goods: [],
        ads: []
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
        http_1.request({ url: '/api/ad/getCarouse' })
            .then(function (_a) {
            var data = _a.data;
            return _this.setData({ ads: data });
        })
            .catch(console.log);
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLHlDQUEyQztBQUMzQyx5Q0FBNkM7QUFFN0MsSUFBSSxDQUFDO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsUUFBUSxFQUFFLEVBQWU7UUFDekIsS0FBSyxFQUFFLEVBQWtCO1FBQ3pCLEdBQUcsRUFBUyxFQUFFO0tBQ2pCO0lBQ0QsTUFBTTtRQUFOLGlCQTJCQztRQXpCRyxjQUFPLENBQW9CO1lBQ3ZCLEdBQUcsRUFBRSwyQkFBMkI7WUFDaEMsSUFBSSxFQUFFO2dCQUNGLFdBQVcsRUFBRSxDQUFDO2dCQUNkLFFBQVEsRUFBRSxFQUFFO2FBQ2Y7U0FDSixDQUFDO2FBQ0csSUFBSSxDQUFDLFVBQUMsRUFBa0I7Z0JBQVIsbUJBQUk7WUFBUyxPQUFBLEtBQUksQ0FBQyxPQUFRLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBUyxDQUFDLEVBQUUsQ0FBQztRQUFoRCxDQUFnRCxDQUFDO2FBQzlFLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFHeEIsY0FBTyxDQUF1QjtZQUMxQixHQUFHLEVBQUUsNEJBQTRCO1lBQ2pDLElBQUksRUFBRTtnQkFDRixXQUFXLEVBQUUsQ0FBQztnQkFDZCxRQUFRLEVBQUUsRUFBRTthQUNmO1NBQ0osQ0FBQzthQUNHLElBQUksQ0FBQyxVQUFDLEVBQWtCO2dCQUFSLG1CQUFJO1lBQVMsT0FBQSxLQUFJLENBQUMsT0FBUSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQVMsQ0FBQyxFQUFFLENBQUM7UUFBN0MsQ0FBNkMsQ0FBQzthQUMzRSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBR3hCLGNBQU8sQ0FBUSxFQUFDLEdBQUcsRUFBRSxvQkFBb0IsRUFBQyxDQUFDO2FBQ3RDLElBQUksQ0FBQyxVQUFDLEVBQU07Z0JBQUwsY0FBSTtZQUFNLE9BQUEsS0FBSSxDQUFDLE9BQVEsQ0FBQyxFQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQztRQUExQixDQUEwQixDQUFDO2FBQzVDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDpppbpobVcclxuICovXHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi91dGlscy9odHRwJztcclxuaW1wb3J0IHsgcGFyc2VEYXRhIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCc7XHJcblxyXG5QYWdlKHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBhY3Rpdml0eTogW10gYXMgSUFjdGl2ZVtdLFxyXG4gICAgICAgIGdvb2RzOiBbXSBhcyBJQ29tbW9kaXR5W10sXHJcbiAgICAgICAgYWRzOiA8SUFEW10+W11cclxuICAgIH0sXHJcbiAgICBvblNob3coKSB7XHJcbiAgICAgICAgLy8g5rS75YqoXHJcbiAgICAgICAgcmVxdWVzdDxQYWdlRGF0YTxJQWN0aXZlPj4oe1xyXG4gICAgICAgICAgICB1cmw6ICcvYXBpL2FjdGl2aXR5L3BhZ2luZ1F1ZXJ5JyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFBhZ2U6IDEsXHJcbiAgICAgICAgICAgICAgICBwYWdlU2l6ZTogMTBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCh7IGRhdGE6IHsgbGlzdCB9IH0pID0+IHRoaXMuc2V0RGF0YSEoeyBhY3Rpdml0eTogbGlzdC5tYXAocGFyc2VEYXRhKSB9KSlcclxuICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuXHJcbiAgICAgICAgLy8g5ZWG5ZOBXHJcbiAgICAgICAgcmVxdWVzdDxQYWdlRGF0YTxJQ29tbW9kaXR5Pj4oe1xyXG4gICAgICAgICAgICB1cmw6ICcvYXBpL2NvbW1vZGl0eS9wYWdpbmdRdWVyeScsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlOiAxLFxyXG4gICAgICAgICAgICAgICAgcGFnZVNpemU6IDEwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoeyBkYXRhOiB7IGxpc3QgfSB9KSA9PiB0aGlzLnNldERhdGEhKHsgZ29vZHM6IGxpc3QubWFwKHBhcnNlRGF0YSkgfSkpXHJcbiAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XHJcblxyXG4gICAgICAgIC8vIOW5v+WRilxyXG4gICAgICAgIHJlcXVlc3Q8SUFEW10+KHt1cmw6ICcvYXBpL2FkL2dldENhcm91c2UnfSlcclxuICAgICAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4gdGhpcy5zZXREYXRhISh7YWRzOiBkYXRhfSkpXHJcbiAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XHJcbiAgICB9LFxyXG59KTtcclxuIl19