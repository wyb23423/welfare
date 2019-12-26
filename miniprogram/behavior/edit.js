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
var http_1 = require("../utils/http");
var util_1 = require("../utils/util");
exports.default = Behavior({
    data: {
        oldImg: '',
        isGoods: true,
        form: {
            name: '',
            intro: '',
            details: '',
            size: '',
            location: '',
            img: '',
            credit: '',
            integral: '',
            origination: -1,
            finish: -1
        }
    },
    ready: function () {
        var _this = this;
        var pages = getCurrentPages();
        var options = pages[pages.length - 1].options;
        if (options && options.id) {
            var isGoods = this.data.isGoods;
            http_1.request({ url: "/api/" + (isGoods ? 'commodity' : 'activity') + "/" + options.id })
                .then(function (_a) {
                var data = _a.data;
                delete data.merchant;
                _this.setData({
                    form: __assign({}, data, { origination: +data.origination, finish: +data.finish }),
                    oldImg: data.img
                });
            })
                .catch(function () { return wx.navigateBack({ delta: 1 }); });
            wx.setNavigationBarTitle({
                title: '编辑' + (isGoods ? '商品' : '活动')
            });
        }
    },
    methods: {
        add: function (data) {
            return __awaiter(this, void 0, void 0, function () {
                var isGoods, e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            isGoods = this.data.isGoods;
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4, http_1.request({
                                    url: "/api/" + (isGoods ? 'commodity' : 'activity'),
                                    data: data,
                                    method: 'PUT'
                                })];
                        case 2:
                            _a.sent();
                            return [3, 4];
                        case 3:
                            e_1 = _a.sent();
                            return [2];
                        case 4:
                            wx.showToast({ title: '申请成功' });
                            return [2];
                    }
                });
            });
        },
        modify: function (data) {
            return __awaiter(this, void 0, void 0, function () {
                var isGoods, e_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            isGoods = this.data.isGoods;
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4, http_1.request({
                                    url: "/api/" + (isGoods ? 'commodity' : 'activity'),
                                    data: data,
                                    method: 'POST'
                                })];
                        case 2:
                            _a.sent();
                            return [3, 4];
                        case 3:
                            e_2 = _a.sent();
                            return [2];
                        case 4:
                            wx.showToast({ title: '修改成功' });
                            return [2];
                    }
                });
            });
        },
        _submit: function () {
            var _this = this;
            var _a = this.data, oldImg = _a.oldImg, form = _a.form, formEl = _a.formEl;
            util_1.upload(form.img, oldImg)
                .then(function (img) {
                var data = __assign({}, form, { img: img });
                return oldImg ? _this.modify(data) : _this.add(data);
            })
                .then(function () { return !oldImg && formEl && formEl.reset(); })
                .catch(console.log);
        },
        _parseValue: function (value, name) {
            if (['size', 'integral', 'credit'].includes(name)) {
                return isNaN(+value) ? '' : +value;
            }
            return value;
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVkaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXdDO0FBRXhDLHNDQUF1QztBQVF2QyxrQkFBZSxRQUFRLENBQW1CO0lBQ3RDLElBQUksRUFBRTtRQUNGLE1BQU0sRUFBRSxFQUFFO1FBQ1YsT0FBTyxFQUFFLElBQUk7UUFDYixJQUFJLEVBQUU7WUFDRixJQUFJLEVBQUUsRUFBRTtZQUNSLEtBQUssRUFBRSxFQUFFO1lBQ1QsT0FBTyxFQUFFLEVBQUU7WUFDWCxJQUFJLEVBQUUsRUFBRTtZQUNSLFFBQVEsRUFBRSxFQUFFO1lBQ1osR0FBRyxFQUFFLEVBQUU7WUFDUCxNQUFNLEVBQUUsRUFBRTtZQUNWLFFBQVEsRUFBRSxFQUFFO1lBQ1osV0FBVyxFQUFFLENBQUMsQ0FBQztZQUNmLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FDYjtLQUNKO0lBQ0QsS0FBSztRQUFMLGlCQXVCQztRQXRCRyxJQUFNLEtBQUssR0FBVSxlQUFlLEVBQUUsQ0FBQztRQUN2QyxJQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDaEQsSUFBRyxPQUFPLElBQUksT0FBTyxDQUFDLEVBQUUsRUFBRTtZQUN0QixJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNsQyxjQUFPLENBQWEsRUFBQyxHQUFHLEVBQUUsV0FBUSxPQUFPLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsVUFBVSxVQUFJLE9BQU8sQ0FBQyxFQUFJLEVBQUMsQ0FBQztpQkFDakYsSUFBSSxDQUFDLFVBQUMsRUFBUTtvQkFBTixjQUFJO2dCQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDckIsS0FBSSxDQUFDLE9BQU8sQ0FBQztvQkFDVCxJQUFJLGVBQ0csSUFBSSxJQUNQLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQzlCLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQ3ZCO29CQUNELE1BQU0sRUFBRSxJQUFJLENBQUMsR0FBRztpQkFDbkIsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxjQUFNLE9BQUEsRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUEzQixDQUEyQixDQUFDLENBQUM7WUFFOUMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO2dCQUNyQixLQUFLLEVBQUUsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQzthQUN4QyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFDRCxPQUFPLEVBQUU7UUFDQyxHQUFHLFlBQUMsSUFBZ0I7Ozs7Ozs0QkFDZixPQUFPLEdBQUksSUFBSSxDQUFDLElBQUksUUFBYixDQUFjOzs7OzRCQUV4QixXQUFNLGNBQU8sQ0FBQztvQ0FDVixHQUFHLEVBQUUsV0FBUSxPQUFPLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFFO29DQUNqRCxJQUFJLE1BQUE7b0NBQ0osTUFBTSxFQUFFLEtBQUs7aUNBQ2hCLENBQUMsRUFBQTs7NEJBSkYsU0FJRSxDQUFDOzs7OzRCQUVILFdBQU87OzRCQUdYLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQzs7Ozs7U0FDbkM7UUFDSyxNQUFNLFlBQUMsSUFBZ0I7Ozs7Ozs0QkFDbEIsT0FBTyxHQUFJLElBQUksQ0FBQyxJQUFJLFFBQWIsQ0FBYzs7Ozs0QkFFeEIsV0FBTSxjQUFPLENBQUM7b0NBQ1YsR0FBRyxFQUFFLFdBQVEsT0FBTyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBRTtvQ0FDakQsSUFBSSxNQUFBO29DQUNKLE1BQU0sRUFBRSxNQUFNO2lDQUNqQixDQUFDLEVBQUE7OzRCQUpGLFNBSUUsQ0FBQzs7Ozs0QkFFSCxXQUFPOzs0QkFHWCxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7Ozs7O1NBQ25DO1FBQ0QsT0FBTztZQUFQLGlCQVNDO1lBUlMsSUFBQSxjQUFrQyxFQUFqQyxrQkFBTSxFQUFFLGNBQUksRUFBRSxrQkFBbUIsQ0FBQztZQUN6QyxhQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUM7aUJBQ25CLElBQUksQ0FBQyxVQUFBLEdBQUc7Z0JBQ0wsSUFBTSxJQUFJLEdBQUcsYUFBZ0IsSUFBSSxJQUFFLEdBQUcsS0FBQSxHQUFDLENBQUM7Z0JBQ3hDLE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZELENBQUMsQ0FBQztpQkFDRCxJQUFJLENBQUMsY0FBTSxPQUFBLENBQUMsTUFBTSxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFLEVBQW5DLENBQW1DLENBQUM7aUJBQy9DLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUIsQ0FBQztRQUNELFdBQVcsWUFBQyxLQUFhLEVBQUUsSUFBWTtZQUNuQyxJQUFJLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQy9DLE9BQU8sS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFDdEM7WUFFRCxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDO0tBQ0o7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vdXRpbHMvaHR0cCc7XHJcbmltcG9ydCB7IFByb2plY3RGb3JtLCBQcm9qZWN0Rm9ybURhdGEgfSBmcm9tICcuL3Byb2plY3RfZm9ybSc7XHJcbmltcG9ydCB7IHVwbG9hZCB9IGZyb20gJy4uL3V0aWxzL3V0aWwnO1xyXG5cclxuaW50ZXJmYWNlIEVkaXRGb3JtQmVoYXZpb3IgZXh0ZW5kcyBQcm9qZWN0Rm9ybSB7XHJcbiAgICBkYXRhOiBQcm9qZWN0Rm9ybURhdGEgJiB7b2xkSW1nOiBzdHJpbmc7IGlzR29vZHM6IGJvb2xlYW59O1xyXG4gICAgYWRkKGRhdGE6IElDb21tb2RpdHkpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgbW9kaWZ5KGRhdGE6IElDb21tb2RpdHkpOiBQcm9taXNlPHZvaWQ+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCZWhhdmlvcjxFZGl0Rm9ybUJlaGF2aW9yPih7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgb2xkSW1nOiAnJyxcclxuICAgICAgICBpc0dvb2RzOiB0cnVlLFxyXG4gICAgICAgIGZvcm06IHtcclxuICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgIGludHJvOiAnJyxcclxuICAgICAgICAgICAgZGV0YWlsczogJycsXHJcbiAgICAgICAgICAgIHNpemU6ICcnLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXHJcbiAgICAgICAgICAgIGltZzogJycsXHJcbiAgICAgICAgICAgIGNyZWRpdDogJycsXHJcbiAgICAgICAgICAgIGludGVncmFsOiAnJyxcclxuICAgICAgICAgICAgb3JpZ2luYXRpb246IC0xLFxyXG4gICAgICAgICAgICBmaW5pc2g6IC0xXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlYWR5KCkge1xyXG4gICAgICAgIGNvbnN0IHBhZ2VzOiBhbnlbXSA9IGdldEN1cnJlbnRQYWdlcygpO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAxXS5vcHRpb25zO1xyXG4gICAgICAgIGlmKG9wdGlvbnMgJiYgb3B0aW9ucy5pZCkge1xyXG4gICAgICAgICAgICBjb25zdCBpc0dvb2RzID0gdGhpcy5kYXRhLmlzR29vZHM7XHJcbiAgICAgICAgICAgIHJlcXVlc3Q8SUNvbW1vZGl0eT4oe3VybDogYC9hcGkvJHtpc0dvb2RzID8gJ2NvbW1vZGl0eScgOiAnYWN0aXZpdHknfS8ke29wdGlvbnMuaWR9YH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgZGF0YS5tZXJjaGFudDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYXRpb246ICtkYXRhLm9yaWdpbmF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluaXNoOiArZGF0YS5maW5pc2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2xkSW1nOiBkYXRhLmltZ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB3eC5uYXZpZ2F0ZUJhY2soe2RlbHRhOiAxfSkpO1xyXG5cclxuICAgICAgICAgICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn57yW6L6RJyArIChpc0dvb2RzID8gJ+WVhuWTgScgOiAn5rS75YqoJylcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBhc3luYyBhZGQoZGF0YTogSUNvbW1vZGl0eSkge1xyXG4gICAgICAgICAgICBjb25zdCB7aXNHb29kc30gPSB0aGlzLmRhdGE7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCByZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IGAvYXBpLyR7aXNHb29kcyA/ICdjb21tb2RpdHknIDogJ2FjdGl2aXR5J31gLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUFVUJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB3eC5zaG93VG9hc3QoeyB0aXRsZTogJ+eUs+ivt+aIkOWKnycgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYyBtb2RpZnkoZGF0YTogSUNvbW1vZGl0eSkge1xyXG4gICAgICAgICAgICBjb25zdCB7aXNHb29kc30gPSB0aGlzLmRhdGE7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCByZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IGAvYXBpLyR7aXNHb29kcyA/ICdjb21tb2RpdHknIDogJ2FjdGl2aXR5J31gLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHsgdGl0bGU6ICfkv67mlLnmiJDlip8nIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgX3N1Ym1pdCgpIHtcclxuICAgICAgICAgICAgY29uc3Qge29sZEltZywgZm9ybSwgZm9ybUVsfSA9IHRoaXMuZGF0YTtcclxuICAgICAgICAgICAgdXBsb2FkKGZvcm0uaW1nLCBvbGRJbWcpXHJcbiAgICAgICAgICAgICAgICAudGhlbihpbWcgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSA8SUNvbW1vZGl0eT57Li4uZm9ybSwgaW1nfTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2xkSW1nID8gdGhpcy5tb2RpZnkoZGF0YSkgOiB0aGlzLmFkZChkYXRhKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiAhb2xkSW1nICYmIGZvcm1FbCAmJiBmb3JtRWwucmVzZXQoKSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBfcGFyc2VWYWx1ZSh2YWx1ZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgaWYgKFsnc2l6ZScsICdpbnRlZ3JhbCcsICdjcmVkaXQnXS5pbmNsdWRlcyhuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzTmFOKCt2YWx1ZSkgPyAnJyA6ICt2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==