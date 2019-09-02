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
            .catch(function (e) { return console.log(e.statusCode); });
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
            .catch(function (e) { return console.log(e.statusCode); });
    },
    _getPageData: function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            wx.request({
                url: constant_1.HOST + '/api/activity/pagingQuery',
                data: {
                    currentPage: Math.ceil(_this.data.activitys.length / 10) + 1,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUdBLGdFQUFrRTtBQUNsRSw4Q0FBb0Q7QUFFcEQsSUFBSSxZQUNBLElBQUksRUFBRTtRQUNGLFNBQVMsRUFBRSxFQUFlO1FBQzFCLFdBQVcsRUFBYSxFQUFFO1FBQzFCLE9BQU8sRUFBRSxJQUFJO0tBQ2hCLElBRUUsUUFBUSxJQUNYLE9BQU87UUFBUCxpQkFVQztRQVRHLElBQUksQ0FBQyxZQUFZLEVBQUU7YUFDZCxJQUFJLENBQUMsVUFBQyxFQUFlO2dCQUFiLGNBQUksRUFBRSxnQkFBSztZQUNoQixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDbkQsS0FBSSxDQUFDLE9BQVEsQ0FBQztnQkFDVixTQUFTLFdBQUE7Z0JBQ1QsT0FBTyxFQUFFLEtBQUssR0FBRyxTQUFTLENBQUMsTUFBTTthQUNwQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDRCxNQUFNLFlBQUMsQ0FBYTtRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUdELE1BQU07UUFBTixpQkFJQztRQUhHLElBQUksQ0FBQyxZQUFZLEVBQUU7YUFDZCxJQUFJLENBQUMsVUFBQyxFQUFlO2dCQUFiLGNBQUksRUFBRSxnQkFBSztZQUFPLE9BQUEsS0FBSSxDQUFDLE9BQVEsQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFBaEUsQ0FBZ0UsQ0FBQzthQUMzRixLQUFLLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxZQUFZLEVBQVo7UUFBQSxpQkFlQztRQWRHLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixFQUFFLENBQUMsT0FBTyxDQUFDO2dCQUNQLEdBQUcsRUFBRSxlQUFJLEdBQUcsMkJBQTJCO2dCQUN2QyxJQUFJLEVBQUU7b0JBQ0YsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7b0JBQzNELFFBQVEsRUFBRSxFQUFFO2lCQUNmO2dCQUNELE9BQU8sRUFBRSxVQUFDLEdBQUc7b0JBQ0QsSUFBQSxrQkFBcUIsRUFBYixjQUFJLEVBQUUsZ0JBQU8sQ0FBK0M7b0JBQzVFLE9BQU8sQ0FBQyxFQUFFLElBQUksRUFBYSxJQUFJLENBQUMsR0FBRyxDQUFDLG9CQUFTLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUM7Z0JBQzdELENBQUM7Z0JBQ0QsSUFBSSxFQUFFLE1BQU07YUFDZixDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsSUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOWFrOebiua0u+WKqFxyXG4gKi9cclxuaW1wb3J0ICogYXMgbGlzdEZ1bmMgZnJvbSAnLi4vLi4vLi4vdGVtcGxhdGUvbGlzdF9pdGVtL2xpc3RfaXRlbSc7XHJcbmltcG9ydCB7IEhPU1QsIHBhcnNlRGF0YSB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50JztcclxuXHJcblBhZ2Uoe1xyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGFjdGl2aXR5czogW10gYXMgSUFjdGl2ZVtdLFxyXG4gICAgICAgIGRlZmF1bHRMaXN0OiA8SUFjdGl2ZVtdPltdLFxyXG4gICAgICAgIGhhc01vcmU6IHRydWVcclxuICAgIH0sXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3kuovku7ZcclxuICAgIC4uLmxpc3RGdW5jLFxyXG4gICAgZ2V0TW9yZSgpIHtcclxuICAgICAgICB0aGlzLl9nZXRQYWdlRGF0YSgpXHJcbiAgICAgICAgICAgIC50aGVuKCh7IGxpc3QsIHRvdGFsIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFjdGl2aXR5cyA9IGxpc3QuY29uY2F0KHRoaXMuZGF0YS5hY3Rpdml0eXMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZpdHlzLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhc01vcmU6IHRvdGFsID4gYWN0aXZpdHlzLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUuc3RhdHVzQ29kZSkpO1xyXG4gICAgfSxcclxuICAgIHNlYXJjaChlOiBJQW55T2JqZWN0KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZS5kZXRhaWwudmFsdWUpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PeeUn+WRveWRqOacn1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuX2dldFBhZ2VEYXRhKClcclxuICAgICAgICAgICAgLnRoZW4oKHsgbGlzdCwgdG90YWwgfSkgPT4gdGhpcy5zZXREYXRhISh7IGFjdGl2aXR5czogbGlzdCwgaGFzTW9yZTogdG90YWwgPiBsaXN0Lmxlbmd0aCB9KSlcclxuICAgICAgICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZS5zdGF0dXNDb2RlKSk7XHJcbiAgICB9LFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgX2dldFBhZ2VEYXRhKCk6IFByb21pc2U8eyBsaXN0OiBJQWN0aXZlW10sIHRvdGFsOiBudW1iZXIgfT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBIT1NUICsgJy9hcGkvYWN0aXZpdHkvcGFnaW5nUXVlcnknLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlOiBNYXRoLmNlaWwodGhpcy5kYXRhLmFjdGl2aXR5cy5sZW5ndGggLyAxMCkgKyAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplOiAxMFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGE6IHsgbGlzdCwgdG90YWwgfSB9ID0gPFJlc3BvZW5zRGF0YTxQYWdlRGF0YTxJQWN0aXZlPj4+cmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7IGxpc3Q6IDxJQWN0aXZlW10+bGlzdC5tYXAocGFyc2VEYXRhKSwgdG90YWwgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmFpbDogcmVqZWN0XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuIl19