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
    getMore: function () {
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
    onShow: function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUdBLGdFQUFrRTtBQUNsRSw0Q0FBOEM7QUFDOUMsNENBQWdEO0FBRWhELElBQUksWUFDQSxJQUFJLEVBQUU7UUFDRixLQUFLLEVBQUUsRUFBa0I7UUFDekIsT0FBTyxFQUFFLElBQUk7S0FDaEIsSUFFRSxRQUFRLElBQ1gsT0FBTyxZQUFDLENBQWU7UUFBdkIsaUJBU0M7UUFSRyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzthQUNkLElBQUksQ0FBQyxVQUFDLEVBQWU7Z0JBQWIsVUFBRSxFQUFFLG9CQUFPOztZQUNoQixJQUFNLEtBQUssR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBWCxDQUFXLENBQUMsQ0FBQztZQUMxRCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDWixLQUFJLENBQUMsT0FBUSxXQUFHLEdBQUMsV0FBUyxLQUFLLGtCQUFlLElBQUcsQ0FBQyxPQUFPLE1BQUcsQ0FBQzthQUNoRTtRQUNMLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNELE9BQU87UUFBUCxpQkFVQztRQVRHLElBQUksQ0FBQyxZQUFZLEVBQUU7YUFDZCxJQUFJLENBQUMsVUFBQyxFQUFlO2dCQUFiLGNBQUksRUFBRSxnQkFBSztZQUNoQixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDM0MsS0FBSSxDQUFDLE9BQVEsQ0FBQztnQkFDVixLQUFLLE9BQUE7Z0JBQ0wsT0FBTyxFQUFFLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTTthQUNoQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFHRCxNQUFNO1FBQU4saUJBSUM7UUFIRyxJQUFJLENBQUMsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUFDLFVBQUMsRUFBZTtnQkFBYixjQUFJLEVBQUUsZ0JBQUs7WUFBTyxPQUFBLEtBQUksQ0FBQyxPQUFRLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQTVELENBQTRELENBQUM7YUFDdkYsS0FBSyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQXJCLENBQXFCLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBR0QsWUFBWSxFQUFaO1FBQUEsaUJBY0M7UUFiRyxPQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUU7YUFDbkIsSUFBSSxDQUFDLGNBQU0sT0FBQSxDQUNSLGNBQU8sQ0FBdUI7WUFDMUIsR0FBRyxFQUFFLDRCQUE0QjtZQUNqQyxJQUFJLEVBQUU7Z0JBQ0YsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7Z0JBQ3ZELFFBQVEsRUFBRSxFQUFFO2FBQ2Y7U0FDSixDQUFDLENBQ0wsRUFSVyxDQVFYLENBQUM7YUFDRCxJQUFJLENBQUMsVUFBQyxFQUF5QjtnQkFBdkIsWUFBcUIsRUFBYixjQUFJLEVBQUUsZ0JBQUs7WUFBUyxPQUFBLENBQ2pDLEVBQUUsSUFBSSxFQUFnQixJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFTLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUNyRDtRQUZvQyxDQUVwQyxDQUFDLENBQUM7SUFDWCxDQUFDLElBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDlhZHmjaLllYblk4FcclxuICovXHJcbmltcG9ydCAqIGFzIGxpc3RGdW5jIGZyb20gJy4uLy4uLy4uL3RlbXBsYXRlL2xpc3RfaXRlbS9saXN0X2l0ZW0nO1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvaHR0cCc7XHJcbmltcG9ydCB7IHBhcnNlRGF0YSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5cclxuUGFnZSh7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgZ29vZHM6IFtdIGFzIElDb21tb2RpdHlbXSxcclxuICAgICAgICBoYXNNb3JlOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT095LqL5Lu2XHJcbiAgICAuLi5saXN0RnVuYyxcclxuICAgIGNvbGxlY3QoZTogV3hUb3VjaEV2ZW50KSB7XHJcbiAgICAgICAgbGlzdEZ1bmMuY29sbGVjdChlKVxyXG4gICAgICAgICAgICAudGhlbigoeyBpZCwgY29sbGVjdCB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZGF0YS5nb29kcy5maW5kSW5kZXgodiA9PiB2LmlkID09PSBpZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSEoeyBbYGdvb2RzWyR7aW5kZXh9XS5pc0NvbGxlY3RlZGBdOiAhY29sbGVjdCB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuICAgIH0sXHJcbiAgICBnZXRNb3JlKCkge1xyXG4gICAgICAgIHRoaXMuX2dldFBhZ2VEYXRhKClcclxuICAgICAgICAgICAgLnRoZW4oKHsgbGlzdCwgdG90YWwgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZ29vZHMgPSBsaXN0LmNvbmNhdCh0aGlzLmRhdGEuZ29vZHMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICAgICAgICAgICAgZ29vZHMsXHJcbiAgICAgICAgICAgICAgICAgICAgaGFzTW9yZTogdG90YWwgPiBnb29kcy5sZW5ndGhcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlLmVyck1zZykpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PeeUn+WRveWRqOacn1xyXG4gICAgb25TaG93KCkge1xyXG4gICAgICAgIHRoaXMuX2dldFBhZ2VEYXRhKClcclxuICAgICAgICAgICAgLnRoZW4oKHsgbGlzdCwgdG90YWwgfSkgPT4gdGhpcy5zZXREYXRhISh7IGdvb2RzOiBsaXN0LCBoYXNNb3JlOiB0b3RhbCA+IGxpc3QubGVuZ3RoIH0pKVxyXG4gICAgICAgICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlLmVyck1zZykpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIF9nZXRQYWdlRGF0YSgpOiBQcm9taXNlPHsgbGlzdDogSUNvbW1vZGl0eVtdLCB0b3RhbDogbnVtYmVyIH0+IHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdDxQYWdlRGF0YTxJQ29tbW9kaXR5Pj4oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9hcGkvY29tbW9kaXR5L3BhZ2luZ1F1ZXJ5JyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlOiBNYXRoLmNlaWwodGhpcy5kYXRhLmdvb2RzLmxlbmd0aCAvIDEwKSArIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplOiAxMFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgIC50aGVuKCh7IGRhdGE6IHsgbGlzdCwgdG90YWwgfSB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICB7IGxpc3Q6IDxJQ29tbW9kaXR5W10+bGlzdC5tYXAocGFyc2VEYXRhKSwgdG90YWwgfVxyXG4gICAgICAgICAgICApKTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==