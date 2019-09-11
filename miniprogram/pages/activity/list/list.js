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
var listFunc = require("../../../template/list_item/list_item");
var http_1 = require("../../../utils/http");
var util_1 = require("../../../utils/util");
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
    onShow: function () {
        var _this = this;
        this._getPageData()
            .then(function (_a) {
            var list = _a.list, total = _a.total;
            return _this.setData({ activitys: list, hasMore: total > list.length });
        })
            .catch(function (e) { return console.log(e.errMsg); });
    },
    _getPageData: function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, list, total;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, (http_1.request({
                            url: '/api/activity/pagingQuery',
                            data: {
                                currentPage: Math.ceil(this.data.activitys.length / 10) + 1,
                                pageSize: 10
                            }
                        }))];
                    case 1:
                        _a = (_b.sent()).data, list = _a.list, total = _a.total;
                        return [2, ({ list: list.map(util_1.parseData), total: total })];
                }
            });
        });
    } }));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsZ0VBQWtFO0FBQ2xFLDRDQUE4QztBQUM5Qyw0Q0FBZ0Q7QUFFaEQsSUFBSSxZQUNBLElBQUksRUFBRTtRQUNGLFNBQVMsRUFBRSxFQUFlO1FBQzFCLFdBQVcsRUFBYSxFQUFFO1FBQzFCLE9BQU8sRUFBRSxJQUFJO0tBQ2hCLElBRUUsUUFBUSxJQUNYLE9BQU87UUFBUCxpQkFVQztRQVRHLElBQUksQ0FBQyxZQUFZLEVBQUU7YUFDZCxJQUFJLENBQUMsVUFBQyxFQUFlO2dCQUFiLGNBQUksRUFBRSxnQkFBSztZQUNoQixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDbkQsS0FBSSxDQUFDLE9BQVEsQ0FBQztnQkFDVixTQUFTLFdBQUE7Z0JBQ1QsT0FBTyxFQUFFLEtBQUssR0FBRyxTQUFTLENBQUMsTUFBTTthQUNwQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFDRCxNQUFNLFlBQUMsQ0FBYTtRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUdELE1BQU07UUFBTixpQkFJQztRQUhHLElBQUksQ0FBQyxZQUFZLEVBQUU7YUFDZCxJQUFJLENBQUMsVUFBQyxFQUFlO2dCQUFiLGNBQUksRUFBRSxnQkFBSztZQUFPLE9BQUEsS0FBSSxDQUFDLE9BQVEsQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFBaEUsQ0FBZ0UsQ0FBQzthQUMzRixLQUFLLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFSyxZQUFZLEVBQWxCOzs7Ozs0QkFDc0MsV0FBTSxDQUFDLGNBQU8sQ0FBb0I7NEJBQ2hFLEdBQUcsRUFBRSwyQkFBMkI7NEJBQ2hDLElBQUksRUFBRTtnQ0FDRixXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQztnQ0FDM0QsUUFBUSxFQUFFLEVBQUU7NkJBQ2Y7eUJBQ0osQ0FBQyxDQUFDLEVBQUE7O3dCQU5LLEtBQTBCLENBQUEsU0FNL0IsQ0FBQSxLQU4wQixFQUFiLElBQUksVUFBQSxFQUFFLEtBQUssV0FBQTt3QkFRM0IsV0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFjLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQVMsQ0FBRSxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsRUFBQzs7OztLQUM5RCxJQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5YWs55uK5rS75YqoXHJcbiAqL1xyXG5pbXBvcnQgKiBhcyBsaXN0RnVuYyBmcm9tICcuLi8uLi8uLi90ZW1wbGF0ZS9saXN0X2l0ZW0vbGlzdF9pdGVtJztcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2h0dHAnO1xyXG5pbXBvcnQgeyBwYXJzZURhdGEgfSBmcm9tICcuLi8uLi8uLi91dGlscy91dGlsJztcclxuXHJcblBhZ2Uoe1xyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGFjdGl2aXR5czogW10gYXMgSUFjdGl2ZVtdLFxyXG4gICAgICAgIGRlZmF1bHRMaXN0OiA8SUFjdGl2ZVtdPltdLFxyXG4gICAgICAgIGhhc01vcmU6IHRydWVcclxuICAgIH0sXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3kuovku7ZcclxuICAgIC4uLmxpc3RGdW5jLFxyXG4gICAgZ2V0TW9yZSgpIHtcclxuICAgICAgICB0aGlzLl9nZXRQYWdlRGF0YSgpXHJcbiAgICAgICAgICAgIC50aGVuKCh7IGxpc3QsIHRvdGFsIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFjdGl2aXR5cyA9IGxpc3QuY29uY2F0KHRoaXMuZGF0YS5hY3Rpdml0eXMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZpdHlzLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhc01vcmU6IHRvdGFsID4gYWN0aXZpdHlzLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUuZXJyTXNnKSk7XHJcbiAgICB9LFxyXG4gICAgc2VhcmNoKGU6IElBbnlPYmplY3QpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLmRldGFpbC52YWx1ZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT0955Sf5ZG95ZGo5pyfXHJcbiAgICBvblNob3coKSB7XHJcbiAgICAgICAgdGhpcy5fZ2V0UGFnZURhdGEoKVxyXG4gICAgICAgICAgICAudGhlbigoeyBsaXN0LCB0b3RhbCB9KSA9PiB0aGlzLnNldERhdGEhKHsgYWN0aXZpdHlzOiBsaXN0LCBoYXNNb3JlOiB0b3RhbCA+IGxpc3QubGVuZ3RoIH0pKVxyXG4gICAgICAgICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlLmVyck1zZykpO1xyXG4gICAgfSxcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGFzeW5jIF9nZXRQYWdlRGF0YSgpOiBQcm9taXNlPHsgbGlzdDogSUFjdGl2ZVtdLCB0b3RhbDogbnVtYmVyIH0+IHtcclxuICAgICAgICBjb25zdCB7IGRhdGE6IHsgbGlzdCwgdG90YWwgfSB9ID0gYXdhaXQgKHJlcXVlc3Q8UGFnZURhdGE8SUFjdGl2ZT4+KHtcclxuICAgICAgICAgICAgdXJsOiAnL2FwaS9hY3Rpdml0eS9wYWdpbmdRdWVyeScsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlOiBNYXRoLmNlaWwodGhpcy5kYXRhLmFjdGl2aXR5cy5sZW5ndGggLyAxMCkgKyAxLFxyXG4gICAgICAgICAgICAgICAgcGFnZVNpemU6IDEwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoeyBsaXN0OiAoPElBY3RpdmVbXT5saXN0Lm1hcChwYXJzZURhdGEpKSwgdG90YWwgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=