"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("../utils/http");
var util_1 = require("../utils/util");
exports.default = Behavior({
    data: {
        list: [],
        hasMore: false,
        dataConfig: {
            currentPage: 'currentPage',
            pageSize: 'pageSize'
        }
    },
    methods: {
        onShow: function () {
            var _this = this;
            this.getPageData()
                .then(function (_a) {
                var list = _a.list, total = _a.total;
                return _this.setData({ list: list, hasMore: total > list.length });
            })
                .catch(function (e) { return console.log(e.errMsg); });
        },
        getMore: function () {
            var _this = this;
            if (!this.data.hasMore) {
                return;
            }
            this.getPageData(Math.ceil(this.data.list.length / 8) + 1)
                .then(function (_a) {
                var list = _a.list, total = _a.total;
                var tempList = list.concat(_this.data.list);
                _this.setData({
                    list: tempList,
                    hasMore: total > tempList.length
                });
            })
                .catch(function (e) { return console.log(e.errMsg); });
        },
        getPageData: function (page) {
            if (page === void 0) { page = 1; }
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, currentPage, pageSize, _c, list, total;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            if (!this.data.url) {
                                return [2, Promise.reject({ errMsg: '请求路径错误' })];
                            }
                            _b = this.data.dataConfig, currentPage = _b.currentPage, pageSize = _b.pageSize;
                            return [4, (http_1.request({
                                    url: this.data.url,
                                    data: (_a = {},
                                        _a[currentPage] = page,
                                        _a[pageSize] = 8,
                                        _a)
                                }))];
                        case 1:
                            _c = (_d.sent()).data, list = _c.list, total = _c.total;
                            return [2, ({ list: list.map(util_1.parseData), total: total })];
                    }
                });
            });
        },
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZV9xdWVyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhZ2VfcXVlcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUF3QztBQUN4QyxzQ0FBMEM7QUFXMUMsa0JBQWUsUUFBUSxDQUFnQjtJQUNuQyxJQUFJLEVBQUU7UUFDRixJQUFJLEVBQVMsRUFBRTtRQUNmLE9BQU8sRUFBRSxLQUFLO1FBQ2QsVUFBVSxFQUFFO1lBQ1IsV0FBVyxFQUFFLGFBQWE7WUFDMUIsUUFBUSxFQUFFLFVBQVU7U0FDdkI7S0FDSjtJQUNELE9BQU8sRUFBRTtRQUNMLE1BQU07WUFBTixpQkFJQztZQUhHLElBQUksQ0FBQyxXQUFXLEVBQUU7aUJBQ2IsSUFBSSxDQUFDLFVBQUMsRUFBZTtvQkFBYixjQUFJLEVBQUUsZ0JBQUs7Z0JBQU8sT0FBQSxLQUFJLENBQUMsT0FBUSxDQUFDLEVBQUUsSUFBSSxNQUFBLEVBQUUsT0FBTyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFBckQsQ0FBcUQsQ0FBQztpQkFDaEYsS0FBSyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQXJCLENBQXFCLENBQUMsQ0FBQztRQUMzQyxDQUFDO1FBQ0QsT0FBTztZQUFQLGlCQWNDO1lBYkcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNwQixPQUFPO2FBQ1Y7WUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDckQsSUFBSSxDQUFDLFVBQUMsRUFBZTtvQkFBYixjQUFJLEVBQUUsZ0JBQUs7Z0JBQ2hCLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDN0MsS0FBSSxDQUFDLE9BQVEsQ0FBQztvQkFDVixJQUFJLEVBQUUsUUFBUTtvQkFDZCxPQUFPLEVBQUUsS0FBSyxHQUFHLFFBQVEsQ0FBQyxNQUFNO2lCQUNuQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQXJCLENBQXFCLENBQUMsQ0FBQztRQUMzQyxDQUFDO1FBQ0ssV0FBVyxZQUFDLElBQWdCO1lBQWhCLHFCQUFBLEVBQUEsUUFBZ0I7Ozs7Ozs0QkFDOUIsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO2dDQUNmLFdBQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUMsQ0FBQyxFQUFDOzZCQUM3Qzs0QkFFSyxLQUEwQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBN0MsV0FBVyxpQkFBQSxFQUFFLFFBQVEsY0FBQSxDQUF5Qjs0QkFDbkIsV0FBTSxDQUFDLGNBQU8sQ0FBZ0I7b0NBQzVELEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7b0NBQ2xCLElBQUk7d0NBQ0EsR0FBQyxXQUFXLElBQUcsSUFBSTt3Q0FDbkIsR0FBQyxRQUFRLElBQUcsQ0FBQzsyQ0FDaEI7aUNBQ0osQ0FBQyxDQUFDLEVBQUE7OzRCQU5LLEtBQTBCLENBQUEsU0FNL0IsQ0FBQSxLQU4wQixFQUFiLElBQUksVUFBQSxFQUFFLEtBQUssV0FBQTs0QkFPM0IsV0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFVLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQVMsQ0FBRSxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsRUFBQzs7OztTQUMxRDtLQUNKO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uL3V0aWxzL2h0dHAnO1xyXG5pbXBvcnQgeyBwYXJzZURhdGEgfSBmcm9tICcuLi91dGlscy91dGlsJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGlzdENvbXBvbmVudCBleHRlbmRzIFd4Q29tcG9uZW50IHtcclxuICAgIG9uU2hvdygpOiB2b2lkO1xyXG4gICAgZ2V0TW9yZSgpOiB2b2lkO1xyXG4gICAgZ2V0UGFnZURhdGEocGFnZT86IG51bWJlcik6IFByb21pc2U8e1xyXG4gICAgICAgIGxpc3Q6IEFycmF5PElBY3RpdmUgfCBJQ29tbW9kaXR5PjtcclxuICAgICAgICB0b3RhbDogbnVtYmVyO1xyXG4gICAgfT47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJlaGF2aW9yPExpc3RDb21wb25lbnQ+KHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBsaXN0OiA8YW55W10+W10sXHJcbiAgICAgICAgaGFzTW9yZTogZmFsc2UsXHJcbiAgICAgICAgZGF0YUNvbmZpZzoge1xyXG4gICAgICAgICAgICBjdXJyZW50UGFnZTogJ2N1cnJlbnRQYWdlJyxcclxuICAgICAgICAgICAgcGFnZVNpemU6ICdwYWdlU2l6ZSdcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIG9uU2hvdygpIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRQYWdlRGF0YSgpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoeyBsaXN0LCB0b3RhbCB9KSA9PiB0aGlzLnNldERhdGEhKHsgbGlzdCwgaGFzTW9yZTogdG90YWwgPiBsaXN0Lmxlbmd0aCB9KSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUuZXJyTXNnKSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRNb3JlKCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZGF0YS5oYXNNb3JlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UGFnZURhdGEoTWF0aC5jZWlsKHRoaXMuZGF0YS5saXN0Lmxlbmd0aCAvIDgpICsgMSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCh7IGxpc3QsIHRvdGFsIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZW1wTGlzdCA9IGxpc3QuY29uY2F0KHRoaXMuZGF0YS5saXN0KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdDogdGVtcExpc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc01vcmU6IHRvdGFsID4gdGVtcExpc3QubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZS5lcnJNc2cpKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jIGdldFBhZ2VEYXRhKHBhZ2U6IG51bWJlciA9IDEpIHtcclxuICAgICAgICAgICAgaWYoIXRoaXMuZGF0YS51cmwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh7ZXJyTXNnOiAn6K+35rGC6Lev5b6E6ZSZ6K+vJ30pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCB7Y3VycmVudFBhZ2UsIHBhZ2VTaXplfSA9IHRoaXMuZGF0YS5kYXRhQ29uZmlnO1xyXG4gICAgICAgICAgICBjb25zdCB7IGRhdGE6IHsgbGlzdCwgdG90YWwgfSB9ID0gYXdhaXQgKHJlcXVlc3Q8UGFnZURhdGE8YW55Pj4oe1xyXG4gICAgICAgICAgICAgICAgdXJsOiB0aGlzLmRhdGEudXJsLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIFtjdXJyZW50UGFnZV06IHBhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgW3BhZ2VTaXplXTogOFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoeyBsaXN0OiAoPGFueVtdPmxpc3QubWFwKHBhcnNlRGF0YSkpLCB0b3RhbCB9KTtcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG59KTtcclxuIl19