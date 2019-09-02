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
Page(__assign({ data: {
        goods: [],
        hasMore: true
    } }, listFunc, { getMore: function () {
        var _this = this;
        this._getPageData()
            .then(function (_a) {
            var list = _a.list, total = _a.total;
            var goods = list.concat(_this.data.goods);
            _this.setData({
                goods: goods,
                hasMore: total > goods.length
            });
        })
            .catch(function (e) { return console.log(e.statusCode); });
    },
    onLoad: function () {
        var _this = this;
        this._getPageData()
            .then(function (_a) {
            var list = _a.list, total = _a.total;
            return _this.setData({ goods: list, hasMore: total > list.length });
        })
            .catch(function (e) { return console.log(e.statusCode); });
    },
    _getPageData: function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            wx.request({
                url: constant_1.HOST + '/api/commodity/pagingQuery',
                data: {
                    currentPage: Math.ceil(_this.data.goods.length / 10) + 1,
                    pageSize: 10
                },
                success: function (res) {
                    var _a = res.data.data, list = _a.list, total = _a.total;
                    resolve({ list: list.map(constant_1.parseData), total: total });
                },
                fail: reject
            });
        });
    } }));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUdBLGdFQUFrRTtBQUNsRSw4Q0FBb0Q7QUFFcEQsSUFBSSxZQUNBLElBQUksRUFBRTtRQUNGLEtBQUssRUFBRSxFQUFrQjtRQUN6QixPQUFPLEVBQUUsSUFBSTtLQUNoQixJQUVFLFFBQVEsSUFDWCxPQUFPO1FBQVAsaUJBVUM7UUFURyxJQUFJLENBQUMsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUFDLFVBQUMsRUFBZTtnQkFBYixjQUFJLEVBQUUsZ0JBQUs7WUFDaEIsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNDLEtBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1YsS0FBSyxPQUFBO2dCQUNMLE9BQU8sRUFBRSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU07YUFDaEMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBR0QsTUFBTTtRQUFOLGlCQUlDO1FBSEcsSUFBSSxDQUFDLFlBQVksRUFBRTthQUNkLElBQUksQ0FBQyxVQUFDLEVBQWU7Z0JBQWIsY0FBSSxFQUFFLGdCQUFLO1lBQU8sT0FBQSxLQUFJLENBQUMsT0FBUSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUE1RCxDQUE0RCxDQUFDO2FBQ3ZGLEtBQUssQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUF6QixDQUF5QixDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUdELFlBQVksRUFBWjtRQUFBLGlCQWVDO1FBZEcsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQy9CLEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0JBQ1AsR0FBRyxFQUFFLGVBQUksR0FBRyw0QkFBNEI7Z0JBQ3hDLElBQUksRUFBRTtvQkFDRixXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQztvQkFDdkQsUUFBUSxFQUFFLEVBQUU7aUJBQ2Y7Z0JBQ0QsT0FBTyxFQUFFLFVBQUMsR0FBRztvQkFDRCxJQUFBLGtCQUFxQixFQUFiLGNBQUksRUFBRSxnQkFBTyxDQUFrRDtvQkFDL0UsT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFnQixJQUFJLENBQUMsR0FBRyxDQUFDLG9CQUFTLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUM7Z0JBQ2hFLENBQUM7Z0JBQ0QsSUFBSSxFQUFFLE1BQU07YUFDZixDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsSUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOWFkeaNouWVhuWTgVxyXG4gKi9cclxuaW1wb3J0ICogYXMgbGlzdEZ1bmMgZnJvbSAnLi4vLi4vLi4vdGVtcGxhdGUvbGlzdF9pdGVtL2xpc3RfaXRlbSc7XHJcbmltcG9ydCB7IEhPU1QsIHBhcnNlRGF0YSB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50JztcclxuXHJcblBhZ2Uoe1xyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGdvb2RzOiBbXSBhcyBJQ29tbW9kaXR5W10sXHJcbiAgICAgICAgaGFzTW9yZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PeS6i+S7tlxyXG4gICAgLi4ubGlzdEZ1bmMsXHJcbiAgICBnZXRNb3JlKCkge1xyXG4gICAgICAgIHRoaXMuX2dldFBhZ2VEYXRhKClcclxuICAgICAgICAgICAgLnRoZW4oKHsgbGlzdCwgdG90YWwgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZ29vZHMgPSBsaXN0LmNvbmNhdCh0aGlzLmRhdGEuZ29vZHMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICAgICAgICAgICAgZ29vZHMsXHJcbiAgICAgICAgICAgICAgICAgICAgaGFzTW9yZTogdG90YWwgPiBnb29kcy5sZW5ndGhcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlLnN0YXR1c0NvZGUpKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT3nlJ/lkb3lkajmnJ9cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLl9nZXRQYWdlRGF0YSgpXHJcbiAgICAgICAgICAgIC50aGVuKCh7IGxpc3QsIHRvdGFsIH0pID0+IHRoaXMuc2V0RGF0YSEoeyBnb29kczogbGlzdCwgaGFzTW9yZTogdG90YWwgPiBsaXN0Lmxlbmd0aCB9KSlcclxuICAgICAgICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZS5zdGF0dXNDb2RlKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgX2dldFBhZ2VEYXRhKCk6IFByb21pc2U8eyBsaXN0OiBJQ29tbW9kaXR5W10sIHRvdGFsOiBudW1iZXIgfT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBIT1NUICsgJy9hcGkvY29tbW9kaXR5L3BhZ2luZ1F1ZXJ5JyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFnZTogTWF0aC5jZWlsKHRoaXMuZGF0YS5nb29kcy5sZW5ndGggLyAxMCkgKyAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplOiAxMFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGE6IHsgbGlzdCwgdG90YWwgfSB9ID0gPFJlc3BvZW5zRGF0YTxQYWdlRGF0YTxJQ29tbW9kaXR5Pj4+cmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7IGxpc3Q6IDxJQ29tbW9kaXR5W10+bGlzdC5tYXAocGFyc2VEYXRhKSwgdG90YWwgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmFpbDogcmVqZWN0XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuIl19