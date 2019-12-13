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
        all: false,
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
                var _a, _b, url, all, _c, currentPage, pageSize, _d, list, total;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            _b = this.data, url = _b.url, all = _b.all;
                            if (!url) {
                                return [2, Promise.reject({ errMsg: '请求路径错误' })];
                            }
                            _c = this.data.dataConfig, currentPage = _c.currentPage, pageSize = _c.pageSize;
                            return [4, (http_1.request({
                                    url: url,
                                    data: (_a = {
                                            all: all
                                        },
                                        _a[currentPage] = page,
                                        _a[pageSize] = size,
                                        _a)
                                }))];
                        case 1:
                            _d = (_e.sent()).data, list = _d.list, total = _d.total;
                            return [2, ({ list: list.map(util_1.parseData), total: total })];
                    }
                });
            });
        },
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZV9xdWVyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhZ2VfcXVlcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUF3QztBQUN4QyxzQ0FBMEM7QUFZMUMsa0JBQWUsUUFBUSxDQUFnQjtJQUNuQyxJQUFJLEVBQUU7UUFDRixJQUFJLEVBQVMsRUFBRTtRQUNmLE9BQU8sRUFBRSxLQUFLO1FBQ2QsVUFBVSxFQUFFO1lBQ1IsV0FBVyxFQUFFLGFBQWE7WUFDMUIsUUFBUSxFQUFFLFVBQVU7U0FDdkI7UUFDRCxHQUFHLEVBQUUsS0FBSztRQUNWLEdBQUcsRUFBRSxFQUFFO0tBQ1Y7SUFDRCxPQUFPLEVBQUU7UUFDTCxPQUFPLFlBQUMsS0FBcUI7WUFBckIsc0JBQUEsRUFBQSxZQUFxQjtZQUN6QixJQUFHLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO2dCQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUM7YUFDNUI7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ2pCO1FBQ0wsQ0FBQztRQUNELE1BQU07WUFBTixpQkFJQztZQUhHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7aUJBQzFDLElBQUksQ0FBQyxVQUFDLEVBQWU7b0JBQWIsY0FBSSxFQUFFLGdCQUFLO2dCQUFPLE9BQUEsS0FBSSxDQUFDLE9BQVEsQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLE9BQU8sRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQXJELENBQXFELENBQUM7aUJBQ2hGLEtBQUssQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFyQixDQUFxQixDQUFDLENBQUM7UUFDM0MsQ0FBQztRQUNELE9BQU87WUFBUCxpQkFlQztZQWRHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDcEIsT0FBTzthQUNWO1lBRUQsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDaEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUMvQyxJQUFJLENBQUMsVUFBQyxFQUFlO29CQUFiLGNBQUksRUFBRSxnQkFBSztnQkFDaEIsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdkMsS0FBSSxDQUFDLE9BQVEsQ0FBQztvQkFDVixJQUFJLEVBQUUsUUFBUTtvQkFDZCxPQUFPLEVBQUUsS0FBSyxHQUFHLFFBQVEsQ0FBQyxNQUFNO2lCQUNuQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQXJCLENBQXFCLENBQUMsQ0FBQztRQUMzQyxDQUFDO1FBQ0ssV0FBVyxZQUFDLElBQWdCLEVBQUUsSUFBZ0I7WUFBbEMscUJBQUEsRUFBQSxRQUFnQjtZQUFFLHFCQUFBLEVBQUEsUUFBZ0I7Ozs7Ozs0QkFDMUMsS0FBYSxJQUFJLENBQUMsSUFBSSxFQUFyQixHQUFHLFNBQUEsRUFBRSxHQUFHLFNBQUEsQ0FBYzs0QkFDN0IsSUFBRyxDQUFDLEdBQUcsRUFBRTtnQ0FDTCxXQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBQyxNQUFNLEVBQUUsUUFBUSxFQUFDLENBQUMsRUFBQzs2QkFDN0M7NEJBRUssS0FBMEIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQTdDLFdBQVcsaUJBQUEsRUFBRSxRQUFRLGNBQUEsQ0FBeUI7NEJBQ25CLFdBQU0sQ0FBQyxjQUFPLENBQWdCO29DQUM1RCxHQUFHLEtBQUE7b0NBQ0gsSUFBSTs0Q0FDQSxHQUFHLEtBQUE7O3dDQUNILEdBQUMsV0FBVyxJQUFHLElBQUk7d0NBQ25CLEdBQUMsUUFBUSxJQUFHLElBQUk7MkNBQ25CO2lDQUNKLENBQUMsQ0FBQyxFQUFBOzs0QkFQSyxLQUEwQixDQUFBLFNBTy9CLENBQUEsS0FQMEIsRUFBYixJQUFJLFVBQUEsRUFBRSxLQUFLLFdBQUE7NEJBUTNCLFdBQU8sQ0FBQyxFQUFFLElBQUksRUFBVSxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFTLENBQUUsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLEVBQUM7Ozs7U0FDMUQ7S0FDSjtDQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi91dGlscy9odHRwJztcclxuaW1wb3J0IHsgcGFyc2VEYXRhIH0gZnJvbSAnLi4vdXRpbHMvdXRpbCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExpc3RDb21wb25lbnQgZXh0ZW5kcyBXeENvbXBvbmVudCB7XHJcbiAgICByZWZsYXNoKGlzRGVsPzogYm9vbGVhbik6IHZvaWQ7XHJcbiAgICBvblNob3coKTogdm9pZDtcclxuICAgIGdldE1vcmUoKTogdm9pZDtcclxuICAgIGdldFBhZ2VEYXRhKHBhZ2U/OiBudW1iZXIsIHNpemU/OiBudW1iZXIpOiBQcm9taXNlPHtcclxuICAgICAgICBsaXN0OiBBcnJheTxJQWN0aXZlIHwgSUNvbW1vZGl0eT47XHJcbiAgICAgICAgdG90YWw6IG51bWJlcjtcclxuICAgIH0+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCZWhhdmlvcjxMaXN0Q29tcG9uZW50Pih7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgbGlzdDogPGFueVtdPltdLFxyXG4gICAgICAgIGhhc01vcmU6IGZhbHNlLFxyXG4gICAgICAgIGRhdGFDb25maWc6IHtcclxuICAgICAgICAgICAgY3VycmVudFBhZ2U6ICdjdXJyZW50UGFnZScsXHJcbiAgICAgICAgICAgIHBhZ2VTaXplOiAncGFnZVNpemUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhbGw6IGZhbHNlLFxyXG4gICAgICAgIHVybDogJydcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgcmVmbGFzaChpc0RlbDogYm9vbGVhbiA9IHRydWUpIHtcclxuICAgICAgICAgICAgaWYoaXNEZWwgJiYgdGhpcy5kYXRhLmxpc3QubGVuZ3RoIDw9IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7bGlzdDogW119KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25TaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uU2hvdygpIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRQYWdlRGF0YSgxLCB0aGlzLmRhdGEubGlzdC5sZW5ndGggfHwgOClcclxuICAgICAgICAgICAgICAgIC50aGVuKCh7IGxpc3QsIHRvdGFsIH0pID0+IHRoaXMuc2V0RGF0YSEoeyBsaXN0LCBoYXNNb3JlOiB0b3RhbCA+IGxpc3QubGVuZ3RoIH0pKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZS5lcnJNc2cpKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldE1vcmUoKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5kYXRhLmhhc01vcmUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZGF0YUxpc3QgPSB0aGlzLmRhdGEubGlzdDtcclxuICAgICAgICAgICAgdGhpcy5nZXRQYWdlRGF0YShNYXRoLmNlaWwoZGF0YUxpc3QubGVuZ3RoIC8gOCkgKyAxKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHsgbGlzdCwgdG90YWwgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBMaXN0ID0gZGF0YUxpc3QuY29uY2F0KGxpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0OiB0ZW1wTGlzdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFzTW9yZTogdG90YWwgPiB0ZW1wTGlzdC5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlLmVyck1zZykpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmMgZ2V0UGFnZURhdGEocGFnZTogbnVtYmVyID0gMSwgc2l6ZTogbnVtYmVyID0gOCkge1xyXG4gICAgICAgICAgICBjb25zdCB7dXJsLCBhbGx9ID0gdGhpcy5kYXRhO1xyXG4gICAgICAgICAgICBpZighdXJsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Qoe2Vyck1zZzogJ+ivt+axgui3r+W+hOmUmeivryd9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3Qge2N1cnJlbnRQYWdlLCBwYWdlU2l6ZX0gPSB0aGlzLmRhdGEuZGF0YUNvbmZpZztcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhOiB7IGxpc3QsIHRvdGFsIH0gfSA9IGF3YWl0IChyZXF1ZXN0PFBhZ2VEYXRhPGFueT4+KHtcclxuICAgICAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBhbGwsXHJcbiAgICAgICAgICAgICAgICAgICAgW2N1cnJlbnRQYWdlXTogcGFnZSxcclxuICAgICAgICAgICAgICAgICAgICBbcGFnZVNpemVdOiBzaXplXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgcmV0dXJuICh7IGxpc3Q6ICg8YW55W10+bGlzdC5tYXAocGFyc2VEYXRhKSksIHRvdGFsIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=