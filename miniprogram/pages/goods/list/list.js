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
            return ({ list: list.map(constant_1.parseData), total: total });
        });
    } }));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUdBLGdFQUFrRTtBQUNsRSw4Q0FBOEM7QUFDOUMsNENBQThDO0FBRTlDLElBQUksWUFDQSxJQUFJLEVBQUU7UUFDRixLQUFLLEVBQUUsRUFBa0I7UUFDekIsT0FBTyxFQUFFLElBQUk7S0FDaEIsSUFFRSxRQUFRLElBQ1gsT0FBTztRQUFQLGlCQVVDO1FBVEcsSUFBSSxDQUFDLFlBQVksRUFBRTthQUNkLElBQUksQ0FBQyxVQUFDLEVBQWU7Z0JBQWIsY0FBSSxFQUFFLGdCQUFLO1lBQ2hCLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzQyxLQUFJLENBQUMsT0FBUSxDQUFDO2dCQUNWLEtBQUssT0FBQTtnQkFDTCxPQUFPLEVBQUUsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNO2FBQ2hDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFyQixDQUFxQixDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUdELE1BQU07UUFBTixpQkFJQztRQUhHLElBQUksQ0FBQyxZQUFZLEVBQUU7YUFDZCxJQUFJLENBQUMsVUFBQyxFQUFlO2dCQUFiLGNBQUksRUFBRSxnQkFBSztZQUFPLE9BQUEsS0FBSSxDQUFDLE9BQVEsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFBNUQsQ0FBNEQsQ0FBQzthQUN2RixLQUFLLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFHRCxZQUFZLEVBQVo7UUFBQSxpQkFjQztRQWJHLE9BQU8sT0FBTyxDQUFDLE9BQU8sRUFBRTthQUNuQixJQUFJLENBQUMsY0FBTSxPQUFBLENBQ1IsY0FBTyxDQUF1QjtZQUMxQixHQUFHLEVBQUUsNEJBQTRCO1lBQ2pDLElBQUksRUFBRTtnQkFDRixXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQztnQkFDdkQsUUFBUSxFQUFFLEVBQUU7YUFDZjtTQUNKLENBQUMsQ0FDTCxFQVJXLENBUVgsQ0FBQzthQUNELElBQUksQ0FBQyxVQUFDLEVBQXlCO2dCQUF2QixZQUFxQixFQUFiLGNBQUksRUFBRSxnQkFBSztZQUFTLE9BQUEsQ0FDakMsRUFBRSxJQUFJLEVBQWdCLElBQUksQ0FBQyxHQUFHLENBQUMsb0JBQVMsQ0FBQyxFQUFFLEtBQUssT0FBQSxFQUFFLENBQ3JEO1FBRm9DLENBRXBDLENBQUMsQ0FBQztJQUNYLENBQUMsSUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOWFkeaNouWVhuWTgVxyXG4gKi9cclxuaW1wb3J0ICogYXMgbGlzdEZ1bmMgZnJvbSAnLi4vLi4vLi4vdGVtcGxhdGUvbGlzdF9pdGVtL2xpc3RfaXRlbSc7XHJcbmltcG9ydCB7IHBhcnNlRGF0YSB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50JztcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2h0dHAnO1xyXG5cclxuUGFnZSh7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgZ29vZHM6IFtdIGFzIElDb21tb2RpdHlbXSxcclxuICAgICAgICBoYXNNb3JlOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT095LqL5Lu2XHJcbiAgICAuLi5saXN0RnVuYyxcclxuICAgIGdldE1vcmUoKSB7XHJcbiAgICAgICAgdGhpcy5fZ2V0UGFnZURhdGEoKVxyXG4gICAgICAgICAgICAudGhlbigoeyBsaXN0LCB0b3RhbCB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBnb29kcyA9IGxpc3QuY29uY2F0KHRoaXMuZGF0YS5nb29kcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgICAgICAgICAgICBnb29kcyxcclxuICAgICAgICAgICAgICAgICAgICBoYXNNb3JlOiB0b3RhbCA+IGdvb2RzLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUuZXJyTXNnKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT0955Sf5ZG95ZGo5pyfXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5fZ2V0UGFnZURhdGEoKVxyXG4gICAgICAgICAgICAudGhlbigoeyBsaXN0LCB0b3RhbCB9KSA9PiB0aGlzLnNldERhdGEhKHsgZ29vZHM6IGxpc3QsIGhhc01vcmU6IHRvdGFsID4gbGlzdC5sZW5ndGggfSkpXHJcbiAgICAgICAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUuZXJyTXNnKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgX2dldFBhZ2VEYXRhKCk6IFByb21pc2U8eyBsaXN0OiBJQ29tbW9kaXR5W10sIHRvdGFsOiBudW1iZXIgfT4ge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiAoXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0PFBhZ2VEYXRhPElDb21tb2RpdHk+Pih7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2FwaS9jb21tb2RpdHkvcGFnaW5nUXVlcnknLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhZ2U6IE1hdGguY2VpbCh0aGlzLmRhdGEuZ29vZHMubGVuZ3RoIC8gMTApICsgMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVNpemU6IDEwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgLnRoZW4oKHsgZGF0YTogeyBsaXN0LCB0b3RhbCB9IH0pID0+IChcclxuICAgICAgICAgICAgICAgIHsgbGlzdDogPElDb21tb2RpdHlbXT5saXN0Lm1hcChwYXJzZURhdGEpLCB0b3RhbCB9XHJcbiAgICAgICAgICAgICkpO1xyXG4gICAgfVxyXG59KTtcclxuIl19