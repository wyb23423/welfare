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
var http_1 = require("../../../utils/http");
var util_1 = require("../../../utils/util");
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
            .catch(function (e) { return console.log(e.errMsg); });
    },
    onLoad: function () {
        var _this = this;
        this._getPageData()
            .then(function (_a) {
            var list = _a.list, total = _a.total;
            return _this.setData({ goods: list, hasMore: total > list.length });
        })
            .catch(function (e) { return console.log(e.errMsg); });
    },
    _getPageData: function () {
        var _this = this;
        return Promise.resolve()
            .then(function () { return (http_1.request({
            url: '/api/commodity/pagingQuery',
            data: {
                currentPage: Math.ceil(_this.data.goods.length / 10) + 1,
                pageSize: 10
            }
        })); })
            .then(function (_a) {
            var _b = _a.data, list = _b.list, total = _b.total;
            return ({ list: list.map(util_1.parseData), total: total });
        });
    } }));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUdBLGdFQUFrRTtBQUNsRSw0Q0FBOEM7QUFDOUMsNENBQWdEO0FBRWhELElBQUksWUFDQSxJQUFJLEVBQUU7UUFDRixLQUFLLEVBQUUsRUFBa0I7UUFDekIsT0FBTyxFQUFFLElBQUk7S0FDaEIsSUFFRSxRQUFRLElBQ1gsT0FBTztRQUFQLGlCQVVDO1FBVEcsSUFBSSxDQUFDLFlBQVksRUFBRTthQUNkLElBQUksQ0FBQyxVQUFDLEVBQWU7Z0JBQWIsY0FBSSxFQUFFLGdCQUFLO1lBQ2hCLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzQyxLQUFJLENBQUMsT0FBUSxDQUFDO2dCQUNWLEtBQUssT0FBQTtnQkFDTCxPQUFPLEVBQUUsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNO2FBQ2hDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFyQixDQUFxQixDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUdELE1BQU07UUFBTixpQkFJQztRQUhHLElBQUksQ0FBQyxZQUFZLEVBQUU7YUFDZCxJQUFJLENBQUMsVUFBQyxFQUFlO2dCQUFiLGNBQUksRUFBRSxnQkFBSztZQUFPLE9BQUEsS0FBSSxDQUFDLE9BQVEsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFBNUQsQ0FBNEQsQ0FBQzthQUN2RixLQUFLLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFHRCxZQUFZLEVBQVo7UUFBQSxpQkFjQztRQWJHLE9BQU8sT0FBTyxDQUFDLE9BQU8sRUFBRTthQUNuQixJQUFJLENBQUMsY0FBTSxPQUFBLENBQ1IsY0FBTyxDQUF1QjtZQUMxQixHQUFHLEVBQUUsNEJBQTRCO1lBQ2pDLElBQUksRUFBRTtnQkFDRixXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQztnQkFDdkQsUUFBUSxFQUFFLEVBQUU7YUFDZjtTQUNKLENBQUMsQ0FDTCxFQVJXLENBUVgsQ0FBQzthQUNELElBQUksQ0FBQyxVQUFDLEVBQXlCO2dCQUF2QixZQUFxQixFQUFiLGNBQUksRUFBRSxnQkFBSztZQUFTLE9BQUEsQ0FDakMsRUFBRSxJQUFJLEVBQWdCLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQVMsQ0FBQyxFQUFFLEtBQUssT0FBQSxFQUFFLENBQ3JEO1FBRm9DLENBRXBDLENBQUMsQ0FBQztJQUNYLENBQUMsSUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOWFkeaNouWVhuWTgVxyXG4gKi9cclxuaW1wb3J0ICogYXMgbGlzdEZ1bmMgZnJvbSAnLi4vLi4vLi4vdGVtcGxhdGUvbGlzdF9pdGVtL2xpc3RfaXRlbSc7XHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi91dGlscy9odHRwJztcclxuaW1wb3J0IHsgcGFyc2VEYXRhIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdXRpbCc7XHJcblxyXG5QYWdlKHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBnb29kczogW10gYXMgSUNvbW1vZGl0eVtdLFxyXG4gICAgICAgIGhhc01vcmU6IHRydWVcclxuICAgIH0sXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3kuovku7ZcclxuICAgIC4uLmxpc3RGdW5jLFxyXG4gICAgZ2V0TW9yZSgpIHtcclxuICAgICAgICB0aGlzLl9nZXRQYWdlRGF0YSgpXHJcbiAgICAgICAgICAgIC50aGVuKCh7IGxpc3QsIHRvdGFsIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGdvb2RzID0gbGlzdC5jb25jYXQodGhpcy5kYXRhLmdvb2RzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgICAgICAgICAgIGdvb2RzLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhc01vcmU6IHRvdGFsID4gZ29vZHMubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZS5lcnJNc2cpKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT3nlJ/lkb3lkajmnJ9cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLl9nZXRQYWdlRGF0YSgpXHJcbiAgICAgICAgICAgIC50aGVuKCh7IGxpc3QsIHRvdGFsIH0pID0+IHRoaXMuc2V0RGF0YSEoeyBnb29kczogbGlzdCwgaGFzTW9yZTogdG90YWwgPiBsaXN0Lmxlbmd0aCB9KSlcclxuICAgICAgICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZS5lcnJNc2cpKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBfZ2V0UGFnZURhdGEoKTogUHJvbWlzZTx7IGxpc3Q6IElDb21tb2RpdHlbXSwgdG90YWw6IG51bWJlciB9PiB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IChcclxuICAgICAgICAgICAgICAgIHJlcXVlc3Q8UGFnZURhdGE8SUNvbW1vZGl0eT4+KHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvYXBpL2NvbW1vZGl0eS9wYWdpbmdRdWVyeScsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFnZTogTWF0aC5jZWlsKHRoaXMuZGF0YS5nb29kcy5sZW5ndGggLyAxMCkgKyAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZTogMTBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAudGhlbigoeyBkYXRhOiB7IGxpc3QsIHRvdGFsIH0gfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgeyBsaXN0OiA8SUNvbW1vZGl0eVtdPmxpc3QubWFwKHBhcnNlRGF0YSksIHRvdGFsIH1cclxuICAgICAgICAgICAgKSk7XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=