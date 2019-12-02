"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var listFunc = require("../../template/list_item/list_item");
var http_1 = require("../../utils/http");
var util_1 = require("../../utils/util");
Page(__assign({ data: {
        activity: [],
        goods: [],
        ad: []
    } }, listFunc, { collect: function (e) {
        var _this = this;
        listFunc.collect(e)
            .then(function (_a) {
            var id = _a.id, collect = _a.collect;
            var _b;
            var index = _this.data.goods.findIndex(function (v) { return v.id === id; });
            if (index > -1) {
                _this.setData((_b = {}, _b["goods[" + index + "].isCollected"] = !collect, _b));
            }
        })
            .catch(console.log);
    },
    onShow: function () {
        var _this = this;
        http_1.request({
            url: '/api/activity/pagingQuery',
            data: {
                currentPage: 1,
                pageSize: 2
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
                pageSize: 2
            }
        })
            .then(function (_a) {
            var list = _a.data.list;
            return _this.setData({ goods: list.map(util_1.parseData) });
        })
            .catch(console.log);
    } }));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBR0EsNkRBQStEO0FBQy9ELHlDQUEyQztBQUMzQyx5Q0FBNkM7QUFFN0MsSUFBSSxZQUNGLElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRSxFQUFlO1FBQ3pCLEtBQUssRUFBRSxFQUFrQjtRQUN6QixFQUFFLEVBQUUsRUFBRTtLQUNQLElBRUUsUUFBUSxJQUNYLE9BQU8sWUFBQyxDQUFlO1FBQXZCLGlCQVNDO1FBUkMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFDaEIsSUFBSSxDQUFDLFVBQUMsRUFBZTtnQkFBYixVQUFFLEVBQUUsb0JBQU87O1lBQ2xCLElBQU0sS0FBSyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFYLENBQVcsQ0FBQyxDQUFDO1lBQzFELElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNkLEtBQUksQ0FBQyxPQUFRLFdBQUcsR0FBQyxXQUFTLEtBQUssa0JBQWUsSUFBRyxDQUFDLE9BQU8sTUFBRyxDQUFDO2FBQzlEO1FBQ0gsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQsTUFBTTtRQUFOLGlCQW9CQztRQW5CQyxjQUFPLENBQW9CO1lBQ3pCLEdBQUcsRUFBRSwyQkFBMkI7WUFDaEMsSUFBSSxFQUFFO2dCQUNKLFdBQVcsRUFBRSxDQUFDO2dCQUNkLFFBQVEsRUFBRSxDQUFDO2FBQ1o7U0FDRixDQUFDO2FBQ0MsSUFBSSxDQUFDLFVBQUMsRUFBa0I7Z0JBQVIsbUJBQUk7WUFBUyxPQUFBLEtBQUksQ0FBQyxPQUFRLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBUyxDQUFDLEVBQUUsQ0FBQztRQUFoRCxDQUFnRCxDQUFDO2FBQzlFLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFdEIsY0FBTyxDQUF1QjtZQUM1QixHQUFHLEVBQUUsNEJBQTRCO1lBQ2pDLElBQUksRUFBRTtnQkFDSixXQUFXLEVBQUUsQ0FBQztnQkFDZCxRQUFRLEVBQUUsQ0FBQzthQUNaO1NBQ0YsQ0FBQzthQUNDLElBQUksQ0FBQyxVQUFDLEVBQWtCO2dCQUFSLG1CQUFJO1lBQVMsT0FBQSxLQUFJLENBQUMsT0FBUSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQVMsQ0FBQyxFQUFFLENBQUM7UUFBN0MsQ0FBNkMsQ0FBQzthQUMzRSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUMsSUFHRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOmmlumhtVxyXG4gKi9cclxuaW1wb3J0ICogYXMgbGlzdEZ1bmMgZnJvbSAnLi4vLi4vdGVtcGxhdGUvbGlzdF9pdGVtL2xpc3RfaXRlbSc7XHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi91dGlscy9odHRwJztcclxuaW1wb3J0IHsgcGFyc2VEYXRhIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCc7XHJcblxyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICBhY3Rpdml0eTogW10gYXMgSUFjdGl2ZVtdLFxyXG4gICAgZ29vZHM6IFtdIGFzIElDb21tb2RpdHlbXSxcclxuICAgIGFkOiBbXVxyXG4gIH0sXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT095LqL5Lu2XHJcbiAgLi4ubGlzdEZ1bmMsXHJcbiAgY29sbGVjdChlOiBXeFRvdWNoRXZlbnQpIHtcclxuICAgIGxpc3RGdW5jLmNvbGxlY3QoZSlcclxuICAgICAgLnRoZW4oKHsgaWQsIGNvbGxlY3QgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5kYXRhLmdvb2RzLmZpbmRJbmRleCh2ID0+IHYuaWQgPT09IGlkKTtcclxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhISh7IFtgZ29vZHNbJHtpbmRleH1dLmlzQ29sbGVjdGVkYF06ICFjb2xsZWN0IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuICB9LFxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT0955Sf5ZG95ZGo5pyfXHJcbiAgb25TaG93KCkge1xyXG4gICAgcmVxdWVzdDxQYWdlRGF0YTxJQWN0aXZlPj4oe1xyXG4gICAgICB1cmw6ICcvYXBpL2FjdGl2aXR5L3BhZ2luZ1F1ZXJ5JyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGN1cnJlbnRQYWdlOiAxLFxyXG4gICAgICAgIHBhZ2VTaXplOiAyXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAgIC50aGVuKCh7IGRhdGE6IHsgbGlzdCB9IH0pID0+IHRoaXMuc2V0RGF0YSEoeyBhY3Rpdml0eTogbGlzdC5tYXAocGFyc2VEYXRhKSB9KSlcclxuICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuXHJcbiAgICByZXF1ZXN0PFBhZ2VEYXRhPElDb21tb2RpdHk+Pih7XHJcbiAgICAgIHVybDogJy9hcGkvY29tbW9kaXR5L3BhZ2luZ1F1ZXJ5JyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGN1cnJlbnRQYWdlOiAxLFxyXG4gICAgICAgIHBhZ2VTaXplOiAyXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAgIC50aGVuKCh7IGRhdGE6IHsgbGlzdCB9IH0pID0+IHRoaXMuc2V0RGF0YSEoeyBnb29kczogbGlzdC5tYXAocGFyc2VEYXRhKSB9KSlcclxuICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuICB9LFxyXG5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxufSk7XHJcbiJdfQ==