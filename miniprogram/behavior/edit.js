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
        add: function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, form, isGoods, formEl, e_1;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this.data, form = _a.form, isGoods = _a.isGoods, formEl = _a.formEl;
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 3, , 4]);
                            return [4, http_1.uploadFile({
                                    url: "/api/" + (isGoods ? 'commodity' : 'activity'),
                                    filePath: form.img,
                                    name: 'file',
                                    formData: form
                                })];
                        case 2:
                            _b.sent();
                            return [3, 4];
                        case 3:
                            e_1 = _b.sent();
                            return [2];
                        case 4:
                            wx.showToast({ title: '添加成功' });
                            formEl && formEl.reset();
                            return [2];
                    }
                });
            });
        },
        modify: function () {
            console.log(this.data.form);
        },
        _submit: function () {
            this.data.oldImg ? this.modify() : this.add();
        },
        _parseValue: function (value, name) {
            if (['size', 'integral', 'credit'].includes(name)) {
                return isNaN(+value) ? '' : +value;
            }
            return value;
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVkaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQW9EO0FBU3BELGtCQUFlLFFBQVEsQ0FBbUI7SUFDdEMsSUFBSSxFQUFFO1FBQ0YsTUFBTSxFQUFFLEVBQUU7UUFDVixPQUFPLEVBQUUsSUFBSTtRQUNiLElBQUksRUFBRTtZQUNGLElBQUksRUFBRSxFQUFFO1lBQ1IsS0FBSyxFQUFFLEVBQUU7WUFDVCxPQUFPLEVBQUUsRUFBRTtZQUNYLElBQUksRUFBRSxFQUFFO1lBQ1IsUUFBUSxFQUFFLEVBQUU7WUFDWixHQUFHLEVBQUUsRUFBRTtZQUNQLE1BQU0sRUFBRSxFQUFFO1lBQ1YsUUFBUSxFQUFFLEVBQUU7WUFDWixXQUFXLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUNiO0tBQ0o7SUFDRCxLQUFLO1FBQUwsaUJBdUJDO1FBdEJHLElBQU0sS0FBSyxHQUFVLGVBQWUsRUFBRSxDQUFDO1FBQ3ZDLElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUNoRCxJQUFHLE9BQU8sSUFBSSxPQUFPLENBQUMsRUFBRSxFQUFFO1lBQ3RCLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ2xDLGNBQU8sQ0FBYSxFQUFDLEdBQUcsRUFBRSxXQUFRLE9BQU8sQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxVQUFVLFVBQUksT0FBTyxDQUFDLEVBQUksRUFBQyxDQUFDO2lCQUNqRixJQUFJLENBQUMsVUFBQyxFQUFRO29CQUFOLGNBQUk7Z0JBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNyQixLQUFJLENBQUMsT0FBTyxDQUFDO29CQUNULElBQUksZUFDRyxJQUFJLElBQ1AsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFDOUIsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FDdkI7b0JBQ0QsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHO2lCQUNuQixDQUFDLENBQUM7WUFDUCxDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLGNBQU0sT0FBQSxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQTNCLENBQTJCLENBQUMsQ0FBQztZQUU5QyxFQUFFLENBQUMscUJBQXFCLENBQUM7Z0JBQ3JCLEtBQUssRUFBRSxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2FBQ3hDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUNELE9BQU8sRUFBRTtRQUNDLEdBQUc7Ozs7Ozs0QkFDQyxLQUEwQixJQUFJLENBQUMsSUFBSSxFQUFsQyxJQUFJLFVBQUEsRUFBRSxPQUFPLGFBQUEsRUFBRSxNQUFNLFlBQUEsQ0FBYzs7Ozs0QkFFdEMsV0FBTSxpQkFBVSxDQUFDO29DQUNiLEdBQUcsRUFBRSxXQUFRLE9BQU8sQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUU7b0NBQ2pELFFBQVEsRUFBRSxJQUFJLENBQUMsR0FBRztvQ0FDbEIsSUFBSSxFQUFFLE1BQU07b0NBQ1osUUFBUSxFQUFFLElBQUk7aUNBQ2pCLENBQUMsRUFBQTs7NEJBTEYsU0FLRSxDQUFDOzs7OzRCQUVILFdBQU87OzRCQUdYLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQzs0QkFDaEMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7Ozs7U0FDNUI7UUFDRCxNQUFNO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLENBQUM7UUFDRCxPQUFPO1lBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2xELENBQUM7UUFDRCxXQUFXLFlBQUMsS0FBYSxFQUFFLElBQVk7WUFDbkMsSUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUMvQyxPQUFPLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQ3RDO1lBRUQsT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQztLQUNKO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVxdWVzdCwgdXBsb2FkRmlsZSB9IGZyb20gJy4uL3V0aWxzL2h0dHAnO1xyXG5pbXBvcnQgeyBQcm9qZWN0Rm9ybSwgUHJvamVjdEZvcm1EYXRhIH0gZnJvbSAnLi9wcm9qZWN0X2Zvcm0nO1xyXG5cclxuaW50ZXJmYWNlIEVkaXRGb3JtQmVoYXZpb3IgZXh0ZW5kcyBQcm9qZWN0Rm9ybSB7XHJcbiAgICBkYXRhOiBQcm9qZWN0Rm9ybURhdGEgJiB7b2xkSW1nOiBzdHJpbmc7IGlzR29vZHM6IGJvb2xlYW59O1xyXG4gICAgYWRkKCk6IFByb21pc2U8dm9pZD47XHJcbiAgICBtb2RpZnkoKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmVoYXZpb3I8RWRpdEZvcm1CZWhhdmlvcj4oe1xyXG4gICAgZGF0YToge1xyXG4gICAgICAgIG9sZEltZzogJycsXHJcbiAgICAgICAgaXNHb29kczogdHJ1ZSxcclxuICAgICAgICBmb3JtOiB7XHJcbiAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICBpbnRybzogJycsXHJcbiAgICAgICAgICAgIGRldGFpbHM6ICcnLFxyXG4gICAgICAgICAgICBzaXplOiAnJyxcclxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxyXG4gICAgICAgICAgICBpbWc6ICcnLFxyXG4gICAgICAgICAgICBjcmVkaXQ6ICcnLFxyXG4gICAgICAgICAgICBpbnRlZ3JhbDogJycsXHJcbiAgICAgICAgICAgIG9yaWdpbmF0aW9uOiAtMSxcclxuICAgICAgICAgICAgZmluaXNoOiAtMVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZWFkeSgpIHtcclxuICAgICAgICBjb25zdCBwYWdlczogYW55W10gPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuICAgICAgICBjb25zdCBvcHRpb25zID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV0ub3B0aW9ucztcclxuICAgICAgICBpZihvcHRpb25zICYmIG9wdGlvbnMuaWQpIHtcclxuICAgICAgICAgICAgY29uc3QgaXNHb29kcyA9IHRoaXMuZGF0YS5pc0dvb2RzO1xyXG4gICAgICAgICAgICByZXF1ZXN0PElDb21tb2RpdHk+KHt1cmw6IGAvYXBpLyR7aXNHb29kcyA/ICdjb21tb2RpdHknIDogJ2FjdGl2aXR5J30vJHtvcHRpb25zLmlkfWB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGRhdGEubWVyY2hhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbmF0aW9uOiArZGF0YS5vcmlnaW5hdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmlzaDogK2RhdGEuZmluaXNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZEltZzogZGF0YS5pbWdcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4gd3gubmF2aWdhdGVCYWNrKHtkZWx0YTogMX0pKTtcclxuXHJcbiAgICAgICAgICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+e8lui+kScgKyAoaXNHb29kcyA/ICfllYblk4EnIDogJ+a0u+WKqCcpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgYXN5bmMgYWRkKCkge1xyXG4gICAgICAgICAgICBjb25zdCB7Zm9ybSwgaXNHb29kcywgZm9ybUVsfSA9IHRoaXMuZGF0YTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHVwbG9hZEZpbGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogYC9hcGkvJHtpc0dvb2RzID8gJ2NvbW1vZGl0eScgOiAnYWN0aXZpdHknfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsZVBhdGg6IGZvcm0uaW1nLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmaWxlJyxcclxuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YTogZm9ybVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB3eC5zaG93VG9hc3QoeyB0aXRsZTogJ+a3u+WKoOaIkOWKnycgfSk7XHJcbiAgICAgICAgICAgIGZvcm1FbCAmJiBmb3JtRWwucmVzZXQoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGlmeSgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5kYXRhLmZvcm0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgX3N1Ym1pdCgpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLm9sZEltZyA/IHRoaXMubW9kaWZ5KCkgOiB0aGlzLmFkZCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgX3BhcnNlVmFsdWUodmFsdWU6IHN0cmluZywgbmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIGlmIChbJ3NpemUnLCAnaW50ZWdyYWwnLCAnY3JlZGl0J10uaW5jbHVkZXMobmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpc05hTigrdmFsdWUpID8gJycgOiArdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=