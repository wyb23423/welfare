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
var listFunc = require("../../../template/list_item/list_item");
var constant_1 = require("../../../constant");
var http_1 = require("../../../utils/http");
Page(__assign({ data: {
        activitys: [],
        defaultList: [],
        hasMore: true
    } }, listFunc, { getMore: function () {
        var _this = this;
        this._getPageData()
            .then(function (_a) {
            var list = _a.list, total = _a.total;
            var activitys = list.concat(_this.data.activitys);
            _this.setData({
                activitys: activitys,
                hasMore: total > activitys.length
            });
        })
            .catch(function (e) { return console.log(e.errMsg); });
    },
    search: function (e) {
        console.log(e.detail.value);
    },
    onLoad: function () {
        var _this = this;
        this._getPageData()
            .then(function (_a) {
            var list = _a.list, total = _a.total;
            return _this.setData({ activitys: list, hasMore: total > list.length });
        })
            .catch(function (e) { return console.log(e.errMsg); });
    },
    _getPageData: function () {
        var _this = this;
        return Promise.resolve()
            .then(function () { return (http_1.request({
            url: '/api/activity/pagingQuery',
            data: {
                currentPage: Math.ceil(_this.data.activitys.length / 10) + 1,
                pageSize: 10
            }
        })); })
            .then(function (_a) {
            var _b = _a.data, list = _b.list, total = _b.total;
            return ({ list: list.map(constant_1.parseData), total: total });
        });
    } }));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUdBLGdFQUFrRTtBQUNsRSw4Q0FBOEM7QUFDOUMsNENBQThDO0FBRTlDLElBQUksWUFDQSxJQUFJLEVBQUU7UUFDRixTQUFTLEVBQUUsRUFBZTtRQUMxQixXQUFXLEVBQWEsRUFBRTtRQUMxQixPQUFPLEVBQUUsSUFBSTtLQUNoQixJQUVFLFFBQVEsSUFDWCxPQUFPO1FBQVAsaUJBVUM7UUFURyxJQUFJLENBQUMsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUFDLFVBQUMsRUFBZTtnQkFBYixjQUFJLEVBQUUsZ0JBQUs7WUFDaEIsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ25ELEtBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1YsU0FBUyxXQUFBO2dCQUNULE9BQU8sRUFBRSxLQUFLLEdBQUcsU0FBUyxDQUFDLE1BQU07YUFDcEMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQXJCLENBQXFCLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0QsTUFBTSxZQUFDLENBQWE7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFHRCxNQUFNO1FBQU4saUJBSUM7UUFIRyxJQUFJLENBQUMsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUFDLFVBQUMsRUFBZTtnQkFBYixjQUFJLEVBQUUsZ0JBQUs7WUFBTyxPQUFBLEtBQUksQ0FBQyxPQUFRLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQWhFLENBQWdFLENBQUM7YUFDM0YsS0FBSyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQXJCLENBQXFCLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsWUFBWSxFQUFaO1FBQUEsaUJBY0M7UUFiRyxPQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUU7YUFDbkIsSUFBSSxDQUFDLGNBQU0sT0FBQSxDQUNSLGNBQU8sQ0FBb0I7WUFDdkIsR0FBRyxFQUFFLDJCQUEyQjtZQUNoQyxJQUFJLEVBQUU7Z0JBQ0YsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7Z0JBQzNELFFBQVEsRUFBRSxFQUFFO2FBQ2Y7U0FDSixDQUFDLENBQ0wsRUFSVyxDQVFYLENBQUM7YUFDRCxJQUFJLENBQUMsVUFBQyxFQUF5QjtnQkFBdkIsWUFBcUIsRUFBYixjQUFJLEVBQUUsZ0JBQUs7WUFBUyxPQUFBLENBQ2pDLEVBQUUsSUFBSSxFQUFhLElBQUksQ0FBQyxHQUFHLENBQUMsb0JBQVMsQ0FBQyxFQUFFLEtBQUssT0FBQSxFQUFFLENBQ2xEO1FBRm9DLENBRXBDLENBQUMsQ0FBQztJQUNYLENBQUMsSUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOWFrOebiua0u+WKqFxyXG4gKi9cclxuaW1wb3J0ICogYXMgbGlzdEZ1bmMgZnJvbSAnLi4vLi4vLi4vdGVtcGxhdGUvbGlzdF9pdGVtL2xpc3RfaXRlbSc7XHJcbmltcG9ydCB7IHBhcnNlRGF0YSB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50JztcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2h0dHAnO1xyXG5cclxuUGFnZSh7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgYWN0aXZpdHlzOiBbXSBhcyBJQWN0aXZlW10sXHJcbiAgICAgICAgZGVmYXVsdExpc3Q6IDxJQWN0aXZlW10+W10sXHJcbiAgICAgICAgaGFzTW9yZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PeS6i+S7tlxyXG4gICAgLi4ubGlzdEZ1bmMsXHJcbiAgICBnZXRNb3JlKCkge1xyXG4gICAgICAgIHRoaXMuX2dldFBhZ2VEYXRhKClcclxuICAgICAgICAgICAgLnRoZW4oKHsgbGlzdCwgdG90YWwgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWN0aXZpdHlzID0gbGlzdC5jb25jYXQodGhpcy5kYXRhLmFjdGl2aXR5cyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpdml0eXMsXHJcbiAgICAgICAgICAgICAgICAgICAgaGFzTW9yZTogdG90YWwgPiBhY3Rpdml0eXMubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZS5lcnJNc2cpKTtcclxuICAgIH0sXHJcbiAgICBzZWFyY2goZTogSUFueU9iamVjdCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUuZGV0YWlsLnZhbHVlKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT3nlJ/lkb3lkajmnJ9cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLl9nZXRQYWdlRGF0YSgpXHJcbiAgICAgICAgICAgIC50aGVuKCh7IGxpc3QsIHRvdGFsIH0pID0+IHRoaXMuc2V0RGF0YSEoeyBhY3Rpdml0eXM6IGxpc3QsIGhhc01vcmU6IHRvdGFsID4gbGlzdC5sZW5ndGggfSkpXHJcbiAgICAgICAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUuZXJyTXNnKSk7XHJcbiAgICB9LFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgX2dldFBhZ2VEYXRhKCk6IFByb21pc2U8eyBsaXN0OiBJQWN0aXZlW10sIHRvdGFsOiBudW1iZXIgfT4ge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiAoXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0PFBhZ2VEYXRhPElBY3RpdmU+Pih7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2FwaS9hY3Rpdml0eS9wYWdpbmdRdWVyeScsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFnZTogTWF0aC5jZWlsKHRoaXMuZGF0YS5hY3Rpdml0eXMubGVuZ3RoIC8gMTApICsgMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVNpemU6IDEwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgLnRoZW4oKHsgZGF0YTogeyBsaXN0LCB0b3RhbCB9IH0pID0+IChcclxuICAgICAgICAgICAgICAgIHsgbGlzdDogPElBY3RpdmVbXT5saXN0Lm1hcChwYXJzZURhdGEpLCB0b3RhbCB9XHJcbiAgICAgICAgICAgICkpO1xyXG4gICAgfVxyXG59KTtcclxuIl19