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
var listFunc = require("../../template/list_item/list_item");
var http_1 = require("../../utils/http");
var util_1 = require("../../utils/util");
function getPageData(type, page) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, list, total;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, (http_1.request({
                        url: "/api/" + (type === 'activity' ? type : 'commodity') + "/pagingQuery",
                        data: {
                            currentPage: page,
                            pageSize: 10
                        }
                    }))];
                case 1:
                    _a = (_b.sent()).data, list = _a.list, total = _a.total;
                    return [2, ({ list: list.map(util_1.parseData), total: total })];
            }
        });
    });
}
Component({
    properties: {
        type: {
            type: String,
            value: 'activity'
        }
    },
    data: {
        list: [],
        hasMore: false
    },
    pageLifetimes: {
        show: function () {
            var _this = this;
            getPageData(this.data.type, 1)
                .then(function (_a) {
                var list = _a.list, total = _a.total;
                return _this.setData({ list: list, hasMore: total > list.length });
            })
                .catch(function (e) { return console.log(e.errMsg); });
        }
    },
    methods: __assign({}, listFunc, { getMore: function () {
            var _this = this;
            if (!this.data.hasMore) {
                return;
            }
            getPageData(this.data.type, Math.ceil(this.data.list.length / 10) + 1)
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
        search: function (e) {
            console.log(e.detail.value);
        } })
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsNkRBQStEO0FBQy9ELHlDQUEyQztBQUMzQyx5Q0FBNkM7QUFFN0MsU0FBZSxXQUFXLENBQUMsSUFBWSxFQUFFLElBQVk7Ozs7O3dCQUNmLFdBQU0sQ0FBQyxjQUFPLENBQWlDO3dCQUM3RSxHQUFHLEVBQUUsV0FBUSxJQUFJLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsa0JBQWM7d0JBQ25FLElBQUksRUFBRTs0QkFDRixXQUFXLEVBQUUsSUFBSTs0QkFDakIsUUFBUSxFQUFFLEVBQUU7eUJBQ2Y7cUJBQ0osQ0FBQyxDQUFDLEVBQUE7O29CQU5LLEtBQTBCLENBQUEsU0FNL0IsQ0FBQSxLQU4wQixFQUFiLElBQUksVUFBQSxFQUFFLEtBQUssV0FBQTtvQkFRM0IsV0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFnQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFTLENBQUUsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLEVBQUM7Ozs7Q0FDaEY7QUFNRCxTQUFTLENBQUM7SUFDTixVQUFVLEVBQUU7UUFDUixJQUFJLEVBQUU7WUFDRixJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxVQUFVO1NBQ3BCO0tBQ0o7SUFDRCxJQUFJLEVBQUU7UUFDRixJQUFJLEVBQStCLEVBQUU7UUFDckMsT0FBTyxFQUFFLEtBQUs7S0FDakI7SUFDRCxhQUFhLEVBQUU7UUFDWCxJQUFJO1lBQUosaUJBSUM7WUFIRyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2lCQUN6QixJQUFJLENBQUMsVUFBQyxFQUFlO29CQUFiLGNBQUksRUFBRSxnQkFBSztnQkFBTyxPQUFBLEtBQUksQ0FBQyxPQUFRLENBQUMsRUFBRSxJQUFJLE1BQUEsRUFBRSxPQUFPLEVBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUFyRCxDQUFxRCxDQUFDO2lCQUNoRixLQUFLLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO1FBQzNDLENBQUM7S0FDSjtJQUNELE9BQU8sZUFDQSxRQUFRLElBQ1gsT0FBTztZQUFQLGlCQWNDO1lBYkcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNwQixPQUFPO2FBQ1Y7WUFFRCxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNqRSxJQUFJLENBQUMsVUFBQyxFQUFlO29CQUFiLGNBQUksRUFBRSxnQkFBSztnQkFDaEIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM3QyxLQUFJLENBQUMsT0FBUSxDQUFDO29CQUNWLElBQUksRUFBRSxRQUFRO29CQUNkLE9BQU8sRUFBRSxLQUFLLEdBQUcsUUFBUSxDQUFDLE1BQU07aUJBQ25DLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO1FBQzNDLENBQUM7UUFDRCxNQUFNLFlBQUMsQ0FBYTtZQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxHQUNKO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOa0u+WKqC/llYblk4HliJfooahcclxuICovXHJcblxyXG5pbXBvcnQgKiBhcyBsaXN0RnVuYyBmcm9tICcuLi8uLi90ZW1wbGF0ZS9saXN0X2l0ZW0vbGlzdF9pdGVtJztcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uLy4uL3V0aWxzL2h0dHAnO1xyXG5pbXBvcnQgeyBwYXJzZURhdGEgfSBmcm9tICcuLi8uLi91dGlscy91dGlsJztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFBhZ2VEYXRhKHR5cGU6IHN0cmluZywgcGFnZTogbnVtYmVyKSB7XHJcbiAgICBjb25zdCB7IGRhdGE6IHsgbGlzdCwgdG90YWwgfSB9ID0gYXdhaXQgKHJlcXVlc3Q8UGFnZURhdGE8SUFjdGl2ZSB8IElDb21tb2RpdHk+Pih7XHJcbiAgICAgICAgdXJsOiBgL2FwaS8ke3R5cGUgPT09ICdhY3Rpdml0eScgPyB0eXBlIDogJ2NvbW1vZGl0eSd9L3BhZ2luZ1F1ZXJ5YCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlOiBwYWdlLFxyXG4gICAgICAgICAgICBwYWdlU2l6ZTogMTBcclxuICAgICAgICB9XHJcbiAgICB9KSk7XHJcblxyXG4gICAgcmV0dXJuICh7IGxpc3Q6ICg8QXJyYXk8SUFjdGl2ZSB8IElDb21tb2RpdHk+Pmxpc3QubWFwKHBhcnNlRGF0YSkpLCB0b3RhbCB9KTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMaXN0Q29tcG9uZW50IGV4dGVuZHMgV3hDb21wb25lbnQge1xyXG4gICAgZ2V0TW9yZSgpOiB2b2lkO1xyXG59XHJcblxyXG5Db21wb25lbnQoe1xyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHR5cGU6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ2FjdGl2aXR5J1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgbGlzdDogPEFycmF5PElBY3RpdmUgfCBJQ29tbW9kaXR5Pj5bXSxcclxuICAgICAgICBoYXNNb3JlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHBhZ2VMaWZldGltZXM6IHtcclxuICAgICAgICBzaG93KCkge1xyXG4gICAgICAgICAgICBnZXRQYWdlRGF0YSh0aGlzLmRhdGEudHlwZSwgMSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCh7IGxpc3QsIHRvdGFsIH0pID0+IHRoaXMuc2V0RGF0YSEoeyBsaXN0LCBoYXNNb3JlOiB0b3RhbCA+IGxpc3QubGVuZ3RoIH0pKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZS5lcnJNc2cpKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIC4uLmxpc3RGdW5jLFxyXG4gICAgICAgIGdldE1vcmUoKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5kYXRhLmhhc01vcmUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZ2V0UGFnZURhdGEodGhpcy5kYXRhLnR5cGUsIE1hdGguY2VpbCh0aGlzLmRhdGEubGlzdC5sZW5ndGggLyAxMCkgKyAxKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHsgbGlzdCwgdG90YWwgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBMaXN0ID0gbGlzdC5jb25jYXQodGhpcy5kYXRhLmxpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0OiB0ZW1wTGlzdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFzTW9yZTogdG90YWwgPiB0ZW1wTGlzdC5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlLmVyck1zZykpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VhcmNoKGU6IElBbnlPYmplY3QpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZS5kZXRhaWwudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==