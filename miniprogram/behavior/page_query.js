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
        reflash: function () {
            this.data.list.length > 1 ? this.onShow() : this.setData({ list: [] });
        },
        onShow: function () {
            var _this = this;
            this.getPageData(1, this.data.list.length || 8)
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
            var dataList = this.data.list;
            this.getPageData(Math.ceil(dataList.length / 8) + 1)
                .then(function (_a) {
                var list = _a.list, total = _a.total;
                var tempList = dataList.concat(list);
                _this.setData({
                    list: tempList,
                    hasMore: total > tempList.length
                });
            })
                .catch(function (e) { return console.log(e.errMsg); });
        },
        getPageData: function (page, size) {
            if (page === void 0) { page = 1; }
            if (size === void 0) { size = 8; }
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
                                        _a[pageSize] = size,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZV9xdWVyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhZ2VfcXVlcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUF3QztBQUN4QyxzQ0FBMEM7QUFZMUMsa0JBQWUsUUFBUSxDQUFnQjtJQUNuQyxJQUFJLEVBQUU7UUFDRixJQUFJLEVBQVMsRUFBRTtRQUNmLE9BQU8sRUFBRSxLQUFLO1FBQ2QsVUFBVSxFQUFFO1lBQ1IsV0FBVyxFQUFFLGFBQWE7WUFDMUIsUUFBUSxFQUFFLFVBQVU7U0FDdkI7S0FDSjtJQUNELE9BQU8sRUFBRTtRQUNMLE9BQU87WUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQztRQUN6RSxDQUFDO1FBQ0QsTUFBTTtZQUFOLGlCQUlDO1lBSEcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztpQkFDMUMsSUFBSSxDQUFDLFVBQUMsRUFBZTtvQkFBYixjQUFJLEVBQUUsZ0JBQUs7Z0JBQU8sT0FBQSxLQUFJLENBQUMsT0FBUSxDQUFDLEVBQUUsSUFBSSxNQUFBLEVBQUUsT0FBTyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFBckQsQ0FBcUQsQ0FBQztpQkFDaEYsS0FBSyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQXJCLENBQXFCLENBQUMsQ0FBQztRQUMzQyxDQUFDO1FBQ0QsT0FBTztZQUFQLGlCQWVDO1lBZEcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNwQixPQUFPO2FBQ1Y7WUFFRCxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNoQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQy9DLElBQUksQ0FBQyxVQUFDLEVBQWU7b0JBQWIsY0FBSSxFQUFFLGdCQUFLO2dCQUNoQixJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN2QyxLQUFJLENBQUMsT0FBUSxDQUFDO29CQUNWLElBQUksRUFBRSxRQUFRO29CQUNkLE9BQU8sRUFBRSxLQUFLLEdBQUcsUUFBUSxDQUFDLE1BQU07aUJBQ25DLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO1FBQzNDLENBQUM7UUFDSyxXQUFXLFlBQUMsSUFBZ0IsRUFBRSxJQUFnQjtZQUFsQyxxQkFBQSxFQUFBLFFBQWdCO1lBQUUscUJBQUEsRUFBQSxRQUFnQjs7Ozs7OzRCQUNoRCxJQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0NBQ2YsV0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUMsTUFBTSxFQUFFLFFBQVEsRUFBQyxDQUFDLEVBQUM7NkJBQzdDOzRCQUVLLEtBQTBCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUE3QyxXQUFXLGlCQUFBLEVBQUUsUUFBUSxjQUFBLENBQXlCOzRCQUNuQixXQUFNLENBQUMsY0FBTyxDQUFnQjtvQ0FDNUQsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRztvQ0FDbEIsSUFBSTt3Q0FDQSxHQUFDLFdBQVcsSUFBRyxJQUFJO3dDQUNuQixHQUFDLFFBQVEsSUFBRyxJQUFJOzJDQUNuQjtpQ0FDSixDQUFDLENBQUMsRUFBQTs7NEJBTkssS0FBMEIsQ0FBQSxTQU0vQixDQUFBLEtBTjBCLEVBQWIsSUFBSSxVQUFBLEVBQUUsS0FBSyxXQUFBOzRCQU8zQixXQUFPLENBQUMsRUFBRSxJQUFJLEVBQVUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBUyxDQUFFLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxFQUFDOzs7O1NBQzFEO0tBQ0o7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vdXRpbHMvaHR0cCc7XHJcbmltcG9ydCB7IHBhcnNlRGF0YSB9IGZyb20gJy4uL3V0aWxzL3V0aWwnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMaXN0Q29tcG9uZW50IGV4dGVuZHMgV3hDb21wb25lbnQge1xyXG4gICAgcmVmbGFzaCgpOiB2b2lkO1xyXG4gICAgb25TaG93KCk6IHZvaWQ7XHJcbiAgICBnZXRNb3JlKCk6IHZvaWQ7XHJcbiAgICBnZXRQYWdlRGF0YShwYWdlPzogbnVtYmVyLCBzaXplPzogbnVtYmVyKTogUHJvbWlzZTx7XHJcbiAgICAgICAgbGlzdDogQXJyYXk8SUFjdGl2ZSB8IElDb21tb2RpdHk+O1xyXG4gICAgICAgIHRvdGFsOiBudW1iZXI7XHJcbiAgICB9PjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmVoYXZpb3I8TGlzdENvbXBvbmVudD4oe1xyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGxpc3Q6IDxhbnlbXT5bXSxcclxuICAgICAgICBoYXNNb3JlOiBmYWxzZSxcclxuICAgICAgICBkYXRhQ29uZmlnOiB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlOiAnY3VycmVudFBhZ2UnLFxyXG4gICAgICAgICAgICBwYWdlU2l6ZTogJ3BhZ2VTaXplJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgcmVmbGFzaCgpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLmxpc3QubGVuZ3RoID4gMSA/IHRoaXMub25TaG93KCkgOiB0aGlzLnNldERhdGEoe2xpc3Q6IFtdfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvblNob3coKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UGFnZURhdGEoMSwgdGhpcy5kYXRhLmxpc3QubGVuZ3RoIHx8IDgpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoeyBsaXN0LCB0b3RhbCB9KSA9PiB0aGlzLnNldERhdGEhKHsgbGlzdCwgaGFzTW9yZTogdG90YWwgPiBsaXN0Lmxlbmd0aCB9KSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUuZXJyTXNnKSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRNb3JlKCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZGF0YS5oYXNNb3JlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGFMaXN0ID0gdGhpcy5kYXRhLmxpc3Q7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UGFnZURhdGEoTWF0aC5jZWlsKGRhdGFMaXN0Lmxlbmd0aCAvIDgpICsgMSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCh7IGxpc3QsIHRvdGFsIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZW1wTGlzdCA9IGRhdGFMaXN0LmNvbmNhdChsaXN0KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdDogdGVtcExpc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc01vcmU6IHRvdGFsID4gdGVtcExpc3QubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZS5lcnJNc2cpKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jIGdldFBhZ2VEYXRhKHBhZ2U6IG51bWJlciA9IDEsIHNpemU6IG51bWJlciA9IDgpIHtcclxuICAgICAgICAgICAgaWYoIXRoaXMuZGF0YS51cmwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh7ZXJyTXNnOiAn6K+35rGC6Lev5b6E6ZSZ6K+vJ30pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCB7Y3VycmVudFBhZ2UsIHBhZ2VTaXplfSA9IHRoaXMuZGF0YS5kYXRhQ29uZmlnO1xyXG4gICAgICAgICAgICBjb25zdCB7IGRhdGE6IHsgbGlzdCwgdG90YWwgfSB9ID0gYXdhaXQgKHJlcXVlc3Q8UGFnZURhdGE8YW55Pj4oe1xyXG4gICAgICAgICAgICAgICAgdXJsOiB0aGlzLmRhdGEudXJsLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIFtjdXJyZW50UGFnZV06IHBhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgW3BhZ2VTaXplXTogc2l6ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoeyBsaXN0OiAoPGFueVtdPmxpc3QubWFwKHBhcnNlRGF0YSkpLCB0b3RhbCB9KTtcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG59KTtcclxuIl19