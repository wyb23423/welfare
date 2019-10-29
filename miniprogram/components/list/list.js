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
Component({
    properties: {
        isGoods: {
            type: Number,
            value: 0
        }
    },
    data: {
        list: [],
        hasMore: false
    },
    pageLifetimes: {
        show: function () {
            var _this = this;
            this.getPageData()
                .then(function (_a) {
                var list = _a.list, total = _a.total;
                return _this.setData({ list: list, hasMore: total > list.length });
            })
                .catch(function (e) { return console.log(e.errMsg); });
        }
    },
    methods: __assign({}, listFunc, { search: function (e) {
            console.log(e.detail.value);
        },
        getMore: function () {
            var _this = this;
            if (!this.data.hasMore) {
                return;
            }
            this.getPageData(Math.ceil(this.data.list.length / 4) + 1)
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
                var _a, list, total;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4, (http_1.request({
                                url: "/api/" + (this.data.isGoods ? 'commodity' : 'activity') + "/pagingQuery",
                                data: {
                                    currentPage: page,
                                    pageSize: 4
                                }
                            }))];
                        case 1:
                            _a = (_b.sent()).data, list = _a.list, total = _a.total;
                            return [2, ({ list: list.map(util_1.parseData), total: total })];
                    }
                });
            });
        } })
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsNkRBQStEO0FBQy9ELHlDQUEyQztBQUMzQyx5Q0FBNkM7QUFVN0MsU0FBUyxDQUFnQjtJQUNyQixVQUFVLEVBQUU7UUFDUixPQUFPLEVBQUU7WUFDTCxJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxDQUFDO1NBQ1g7S0FDSjtJQUNELElBQUksRUFBRTtRQUNGLElBQUksRUFBK0IsRUFBRTtRQUNyQyxPQUFPLEVBQUUsS0FBSztLQUNqQjtJQUNELGFBQWEsRUFBRTtRQUNYLElBQUk7WUFBSixpQkFJQztZQUhHLElBQUksQ0FBQyxXQUFXLEVBQUU7aUJBQ2IsSUFBSSxDQUFDLFVBQUMsRUFBZTtvQkFBYixjQUFJLEVBQUUsZ0JBQUs7Z0JBQU8sT0FBQSxLQUFJLENBQUMsT0FBUSxDQUFDLEVBQUUsSUFBSSxNQUFBLEVBQUUsT0FBTyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFBckQsQ0FBcUQsQ0FBQztpQkFDaEYsS0FBSyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQXJCLENBQXFCLENBQUMsQ0FBQztRQUMzQyxDQUFDO0tBQ0o7SUFDRCxPQUFPLGVBQ0EsUUFBUSxJQUNYLE1BQU0sWUFBQyxDQUFhO1lBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxDQUFDO1FBR0QsT0FBTztZQUFQLGlCQWNDO1lBYkcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNwQixPQUFPO2FBQ1Y7WUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDckQsSUFBSSxDQUFDLFVBQUMsRUFBZTtvQkFBYixjQUFJLEVBQUUsZ0JBQUs7Z0JBQ2hCLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDN0MsS0FBSSxDQUFDLE9BQVEsQ0FBQztvQkFDVixJQUFJLEVBQUUsUUFBUTtvQkFDZCxPQUFPLEVBQUUsS0FBSyxHQUFHLFFBQVEsQ0FBQyxNQUFNO2lCQUNuQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQXJCLENBQXFCLENBQUMsQ0FBQztRQUMzQyxDQUFDO1FBQ0ssV0FBVyxZQUFDLElBQWdCO1lBQWhCLHFCQUFBLEVBQUEsUUFBZ0I7Ozs7O2dDQUNJLFdBQU0sQ0FBQyxjQUFPLENBQWlDO2dDQUM3RSxHQUFHLEVBQUUsV0FBUSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxVQUFVLGtCQUFlO2dDQUN4RSxJQUFJLEVBQUU7b0NBQ0YsV0FBVyxFQUFFLElBQUk7b0NBQ2pCLFFBQVEsRUFBRSxDQUFDO2lDQUNkOzZCQUNKLENBQUMsQ0FBQyxFQUFBOzs0QkFOSyxLQUEwQixDQUFBLFNBTS9CLENBQUEsS0FOMEIsRUFBYixJQUFJLFVBQUEsRUFBRSxLQUFLLFdBQUE7NEJBUTNCLFdBQU8sQ0FBQyxFQUFFLElBQUksRUFBZ0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBUyxDQUFFLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxFQUFDOzs7O1NBQ2hGLEdBQ0o7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5rS75YqoL+WVhuWTgeWIl+ihqFxyXG4gKi9cclxuXHJcbmltcG9ydCAqIGFzIGxpc3RGdW5jIGZyb20gJy4uLy4uL3RlbXBsYXRlL2xpc3RfaXRlbS9saXN0X2l0ZW0nO1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vdXRpbHMvaHR0cCc7XHJcbmltcG9ydCB7IHBhcnNlRGF0YSB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMaXN0Q29tcG9uZW50IGV4dGVuZHMgV3hDb21wb25lbnQge1xyXG4gICAgZ2V0TW9yZSgpOiB2b2lkO1xyXG4gICAgZ2V0UGFnZURhdGEocGFnZT86IG51bWJlcik6IFByb21pc2U8e1xyXG4gICAgICAgIGxpc3Q6IEFycmF5PElBY3RpdmUgfCBJQ29tbW9kaXR5PjtcclxuICAgICAgICB0b3RhbDogbnVtYmVyO1xyXG4gICAgfT47XHJcbn1cclxuXHJcbkNvbXBvbmVudDxMaXN0Q29tcG9uZW50Pih7XHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgaXNHb29kczoge1xyXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgICAgIHZhbHVlOiAwXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBsaXN0OiA8QXJyYXk8SUFjdGl2ZSB8IElDb21tb2RpdHk+PltdLFxyXG4gICAgICAgIGhhc01vcmU6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgcGFnZUxpZmV0aW1lczoge1xyXG4gICAgICAgIHNob3codGhpczogTGlzdENvbXBvbmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmdldFBhZ2VEYXRhKClcclxuICAgICAgICAgICAgICAgIC50aGVuKCh7IGxpc3QsIHRvdGFsIH0pID0+IHRoaXMuc2V0RGF0YSEoeyBsaXN0LCBoYXNNb3JlOiB0b3RhbCA+IGxpc3QubGVuZ3RoIH0pKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZS5lcnJNc2cpKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIC4uLmxpc3RGdW5jLFxyXG4gICAgICAgIHNlYXJjaChlOiBJQW55T2JqZWN0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUuZGV0YWlsLnZhbHVlKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICBnZXRNb3JlKCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZGF0YS5oYXNNb3JlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UGFnZURhdGEoTWF0aC5jZWlsKHRoaXMuZGF0YS5saXN0Lmxlbmd0aCAvIDQpICsgMSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCh7IGxpc3QsIHRvdGFsIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZW1wTGlzdCA9IGxpc3QuY29uY2F0KHRoaXMuZGF0YS5saXN0KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdDogdGVtcExpc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc01vcmU6IHRvdGFsID4gdGVtcExpc3QubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZS5lcnJNc2cpKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jIGdldFBhZ2VEYXRhKHBhZ2U6IG51bWJlciA9IDEpIHtcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhOiB7IGxpc3QsIHRvdGFsIH0gfSA9IGF3YWl0IChyZXF1ZXN0PFBhZ2VEYXRhPElBY3RpdmUgfCBJQ29tbW9kaXR5Pj4oe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBgL2FwaS8ke3RoaXMuZGF0YS5pc0dvb2RzID8gJ2NvbW1vZGl0eScgOiAnYWN0aXZpdHknIH0vcGFnaW5nUXVlcnlgLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlOiBwYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplOiA0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoeyBsaXN0OiAoPEFycmF5PElBY3RpdmUgfCBJQ29tbW9kaXR5Pj5saXN0Lm1hcChwYXJzZURhdGEpKSwgdG90YWwgfSk7XHJcbiAgICAgICAgfSxcclxuICAgIH1cclxufSk7XHJcbiJdfQ==