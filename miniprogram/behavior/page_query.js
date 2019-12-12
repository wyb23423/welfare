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
        },
        url: ''
    },
    methods: {
        reflash: function (isDel) {
            if (isDel === void 0) { isDel = true; }
            if (isDel && this.data.list.length <= 1) {
                this.setData({ list: [] });
            }
            else {
                this.onShow();
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZV9xdWVyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhZ2VfcXVlcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUF3QztBQUN4QyxzQ0FBMEM7QUFZMUMsa0JBQWUsUUFBUSxDQUFnQjtJQUNuQyxJQUFJLEVBQUU7UUFDRixJQUFJLEVBQVMsRUFBRTtRQUNmLE9BQU8sRUFBRSxLQUFLO1FBQ2QsVUFBVSxFQUFFO1lBQ1IsV0FBVyxFQUFFLGFBQWE7WUFDMUIsUUFBUSxFQUFFLFVBQVU7U0FDdkI7UUFDRCxHQUFHLEVBQUUsRUFBRTtLQUNWO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsT0FBTyxZQUFDLEtBQXFCO1lBQXJCLHNCQUFBLEVBQUEsWUFBcUI7WUFDekIsSUFBRyxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtnQkFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDO2FBQzVCO2lCQUFNO2dCQUNILElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUNqQjtRQUNMLENBQUM7UUFDRCxNQUFNO1lBQU4saUJBSUM7WUFIRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO2lCQUMxQyxJQUFJLENBQUMsVUFBQyxFQUFlO29CQUFiLGNBQUksRUFBRSxnQkFBSztnQkFBTyxPQUFBLEtBQUksQ0FBQyxPQUFRLENBQUMsRUFBRSxJQUFJLE1BQUEsRUFBRSxPQUFPLEVBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUFyRCxDQUFxRCxDQUFDO2lCQUNoRixLQUFLLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO1FBQzNDLENBQUM7UUFDRCxPQUFPO1lBQVAsaUJBZUM7WUFkRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ3BCLE9BQU87YUFDVjtZQUVELElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDL0MsSUFBSSxDQUFDLFVBQUMsRUFBZTtvQkFBYixjQUFJLEVBQUUsZ0JBQUs7Z0JBQ2hCLElBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZDLEtBQUksQ0FBQyxPQUFRLENBQUM7b0JBQ1YsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsT0FBTyxFQUFFLEtBQUssR0FBRyxRQUFRLENBQUMsTUFBTTtpQkFDbkMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFyQixDQUFxQixDQUFDLENBQUM7UUFDM0MsQ0FBQztRQUNLLFdBQVcsWUFBQyxJQUFnQixFQUFFLElBQWdCO1lBQWxDLHFCQUFBLEVBQUEsUUFBZ0I7WUFBRSxxQkFBQSxFQUFBLFFBQWdCOzs7Ozs7NEJBQ2hELElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQ0FDZixXQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBQyxNQUFNLEVBQUUsUUFBUSxFQUFDLENBQUMsRUFBQzs2QkFDN0M7NEJBRUssS0FBMEIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQTdDLFdBQVcsaUJBQUEsRUFBRSxRQUFRLGNBQUEsQ0FBeUI7NEJBQ25CLFdBQU0sQ0FBQyxjQUFPLENBQWdCO29DQUM1RCxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHO29DQUNsQixJQUFJO3dDQUNBLEdBQUMsV0FBVyxJQUFHLElBQUk7d0NBQ25CLEdBQUMsUUFBUSxJQUFHLElBQUk7MkNBQ25CO2lDQUNKLENBQUMsQ0FBQyxFQUFBOzs0QkFOSyxLQUEwQixDQUFBLFNBTS9CLENBQUEsS0FOMEIsRUFBYixJQUFJLFVBQUEsRUFBRSxLQUFLLFdBQUE7NEJBTzNCLFdBQU8sQ0FBQyxFQUFFLElBQUksRUFBVSxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFTLENBQUUsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLEVBQUM7Ozs7U0FDMUQ7S0FDSjtDQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi91dGlscy9odHRwJztcclxuaW1wb3J0IHsgcGFyc2VEYXRhIH0gZnJvbSAnLi4vdXRpbHMvdXRpbCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExpc3RDb21wb25lbnQgZXh0ZW5kcyBXeENvbXBvbmVudCB7XHJcbiAgICByZWZsYXNoKGlzRGVsPzogYm9vbGVhbik6IHZvaWQ7XHJcbiAgICBvblNob3coKTogdm9pZDtcclxuICAgIGdldE1vcmUoKTogdm9pZDtcclxuICAgIGdldFBhZ2VEYXRhKHBhZ2U/OiBudW1iZXIsIHNpemU/OiBudW1iZXIpOiBQcm9taXNlPHtcclxuICAgICAgICBsaXN0OiBBcnJheTxJQWN0aXZlIHwgSUNvbW1vZGl0eT47XHJcbiAgICAgICAgdG90YWw6IG51bWJlcjtcclxuICAgIH0+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCZWhhdmlvcjxMaXN0Q29tcG9uZW50Pih7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgbGlzdDogPGFueVtdPltdLFxyXG4gICAgICAgIGhhc01vcmU6IGZhbHNlLFxyXG4gICAgICAgIGRhdGFDb25maWc6IHtcclxuICAgICAgICAgICAgY3VycmVudFBhZ2U6ICdjdXJyZW50UGFnZScsXHJcbiAgICAgICAgICAgIHBhZ2VTaXplOiAncGFnZVNpemUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB1cmw6ICcnXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHJlZmxhc2goaXNEZWw6IGJvb2xlYW4gPSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmKGlzRGVsICYmIHRoaXMuZGF0YS5saXN0Lmxlbmd0aCA8PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe2xpc3Q6IFtdfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uU2hvdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvblNob3coKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UGFnZURhdGEoMSwgdGhpcy5kYXRhLmxpc3QubGVuZ3RoIHx8IDgpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoeyBsaXN0LCB0b3RhbCB9KSA9PiB0aGlzLnNldERhdGEhKHsgbGlzdCwgaGFzTW9yZTogdG90YWwgPiBsaXN0Lmxlbmd0aCB9KSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUuZXJyTXNnKSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRNb3JlKCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZGF0YS5oYXNNb3JlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGFMaXN0ID0gdGhpcy5kYXRhLmxpc3Q7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UGFnZURhdGEoTWF0aC5jZWlsKGRhdGFMaXN0Lmxlbmd0aCAvIDgpICsgMSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCh7IGxpc3QsIHRvdGFsIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZW1wTGlzdCA9IGRhdGFMaXN0LmNvbmNhdChsaXN0KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdDogdGVtcExpc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc01vcmU6IHRvdGFsID4gdGVtcExpc3QubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZS5lcnJNc2cpKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jIGdldFBhZ2VEYXRhKHBhZ2U6IG51bWJlciA9IDEsIHNpemU6IG51bWJlciA9IDgpIHtcclxuICAgICAgICAgICAgaWYoIXRoaXMuZGF0YS51cmwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh7ZXJyTXNnOiAn6K+35rGC6Lev5b6E6ZSZ6K+vJ30pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCB7Y3VycmVudFBhZ2UsIHBhZ2VTaXplfSA9IHRoaXMuZGF0YS5kYXRhQ29uZmlnO1xyXG4gICAgICAgICAgICBjb25zdCB7IGRhdGE6IHsgbGlzdCwgdG90YWwgfSB9ID0gYXdhaXQgKHJlcXVlc3Q8UGFnZURhdGE8YW55Pj4oe1xyXG4gICAgICAgICAgICAgICAgdXJsOiB0aGlzLmRhdGEudXJsLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIFtjdXJyZW50UGFnZV06IHBhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgW3BhZ2VTaXplXTogc2l6ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoeyBsaXN0OiAoPGFueVtdPmxpc3QubWFwKHBhcnNlRGF0YSkpLCB0b3RhbCB9KTtcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG59KTtcclxuIl19