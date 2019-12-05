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
var project_form_1 = require("../../../behavior/project_form");
var http_1 = require("../../../utils/http");
Component({
    behaviors: [project_form_1.default],
    data: {
        form: {
            name: '',
            integral: '',
            credit: '',
            details: '',
            time: [],
            img: ''
        },
        timeRule: {
            min: 2,
            message: '兑换时间需选择两个时间点'
        },
        oldImg: ''
    },
    ready: function () {
        var _this = this;
        var pages = getCurrentPages();
        var options = pages[pages.length - 1].options;
        if (options && options.id) {
            http_1.request({ url: '/api/commodity/' + options.id })
                .then(function (_a) {
                var data = _a.data;
                _this.setData({
                    form: __assign({}, data, { time: [+data.origination, +data.finish] }),
                    oldImg: data.img
                });
            });
            wx.setNavigationBarTitle({ title: '编辑商品' });
        }
    },
    methods: {
        add: function () {
            return __awaiter(this, void 0, void 0, function () {
                var e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4, http_1.uploadFile({
                                    url: '/api/commodity',
                                    filePath: this.data.form.img,
                                    name: 'file',
                                    formData: __assign({}, this.data.form, { origination: this.data.form.time[0], finish: this.data.form.time[1] })
                                })];
                        case 1:
                            _a.sent();
                            return [3, 3];
                        case 2:
                            e_1 = _a.sent();
                            return [2];
                        case 3:
                            wx.showToast({ title: '添加成功' });
                            this.data.formEl && this.data.formEl.reset();
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
            if (['credit', 'integral', 'size'].includes(name)) {
                return isNaN(+value) ? '' : +value;
            }
            return value;
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JlYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLCtEQUFtRztBQUNuRyw0Q0FBMEQ7QUFRMUQsU0FBUyxDQUFZO0lBQ2pCLFNBQVMsRUFBRSxDQUFDLHNCQUFtQixDQUFDO0lBQ2hDLElBQUksRUFBRTtRQUNGLElBQUksRUFBRTtZQUNGLElBQUksRUFBRSxFQUFFO1lBQ1IsUUFBUSxFQUFFLEVBQUU7WUFDWixNQUFNLEVBQUUsRUFBRTtZQUNWLE9BQU8sRUFBRSxFQUFFO1lBQ1gsSUFBSSxFQUFFLEVBQUU7WUFDUixHQUFHLEVBQUUsRUFBRTtTQUNWO1FBQ0QsUUFBUSxFQUFFO1lBQ04sR0FBRyxFQUFFLENBQUM7WUFDTixPQUFPLEVBQUUsY0FBYztTQUMxQjtRQUNELE1BQU0sRUFBRSxFQUFFO0tBQ2I7SUFDRCxLQUFLO1FBQUwsaUJBa0JDO1FBakJHLElBQU0sS0FBSyxHQUFVLGVBQWUsRUFBRSxDQUFDO1FBQ3ZDLElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUNoRCxJQUFHLE9BQU8sSUFBSSxPQUFPLENBQUMsRUFBRSxFQUFFO1lBQ3RCLGNBQU8sQ0FBYSxFQUFDLEdBQUcsRUFBRSxpQkFBaUIsR0FBRyxPQUFPLENBQUMsRUFBRSxFQUFDLENBQUM7aUJBQ3JELElBQUksQ0FBQyxVQUFDLEVBQVE7b0JBQU4sY0FBSTtnQkFFVCxLQUFJLENBQUMsT0FBTyxDQUFDO29CQUNULElBQUksZUFDRyxJQUFJLElBQ1AsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUMxQztvQkFDRCxNQUFNLEVBQUUsSUFBSSxDQUFDLEdBQUc7aUJBQ25CLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1lBRVAsRUFBRSxDQUFDLHFCQUFxQixDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7U0FDN0M7SUFDTCxDQUFDO0lBQ0QsT0FBTyxFQUFFO1FBQ0MsR0FBRzs7Ozs7Ozs0QkFFRCxXQUFNLGlCQUFVLENBQUM7b0NBQ2IsR0FBRyxFQUFFLGdCQUFnQjtvQ0FDckIsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7b0NBQzVCLElBQUksRUFBRSxNQUFNO29DQUNaLFFBQVEsZUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFDakIsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDbkMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FDakM7aUNBQ0osQ0FBQyxFQUFBOzs0QkFURixTQVNFLENBQUM7Ozs7NEJBRUgsV0FBTzs7NEJBR1gsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDOzRCQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7Ozs7U0FDaEQ7UUFDRCxNQUFNO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLENBQUM7UUFDRCxPQUFPO1lBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2xELENBQUM7UUFDRCxXQUFXLFlBQUMsS0FBYSxFQUFFLElBQVk7WUFDbkMsSUFBSSxDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUMvQyxPQUFPLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQ3RDO1lBRUQsT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQztLQUNKO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOWVhuWTgeS4iuaetlxyXG4gKi9cclxuaW1wb3J0IFByb2plY3RGb3JtQmVoYXZpb3IsIHsgUHJvamVjdEZvcm0sIFByb2plY3RGb3JtRGF0YSB9IGZyb20gJy4uLy4uLy4uL2JlaGF2aW9yL3Byb2plY3RfZm9ybSc7XHJcbmltcG9ydCB7IHVwbG9hZEZpbGUsIHJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi91dGlscy9odHRwJztcclxuXHJcbmludGVyZmFjZSBHb29kc0Zvcm0gZXh0ZW5kcyBQcm9qZWN0Rm9ybSB7XHJcbiAgICBkYXRhOiBQcm9qZWN0Rm9ybURhdGEgJiB7b2xkSW1nOiBzdHJpbmd9O1xyXG4gICAgYWRkKCk6IFByb21pc2U8dm9pZD47XHJcbiAgICBtb2RpZnkoKTogdm9pZDtcclxufVxyXG5cclxuQ29tcG9uZW50PEdvb2RzRm9ybT4oe1xyXG4gICAgYmVoYXZpb3JzOiBbUHJvamVjdEZvcm1CZWhhdmlvcl0sXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgZm9ybToge1xyXG4gICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgaW50ZWdyYWw6ICcnLFxyXG4gICAgICAgICAgICBjcmVkaXQ6ICcnLFxyXG4gICAgICAgICAgICBkZXRhaWxzOiAnJyxcclxuICAgICAgICAgICAgdGltZTogW10sXHJcbiAgICAgICAgICAgIGltZzogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRpbWVSdWxlOiB7XHJcbiAgICAgICAgICAgIG1pbjogMixcclxuICAgICAgICAgICAgbWVzc2FnZTogJ+WFkeaNouaXtumXtOmcgOmAieaLqeS4pOS4quaXtumXtOeCuSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9sZEltZzogJydcclxuICAgIH0sXHJcbiAgICByZWFkeSgpIHtcclxuICAgICAgICBjb25zdCBwYWdlczogYW55W10gPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuICAgICAgICBjb25zdCBvcHRpb25zID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV0ub3B0aW9ucztcclxuICAgICAgICBpZihvcHRpb25zICYmIG9wdGlvbnMuaWQpIHtcclxuICAgICAgICAgICAgcmVxdWVzdDxJQ29tbW9kaXR5Pih7dXJsOiAnL2FwaS9jb21tb2RpdHkvJyArIG9wdGlvbnMuaWR9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm06IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lOiBbK2RhdGEub3JpZ2luYXRpb24sICtkYXRhLmZpbmlzaF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2xkSW1nOiBkYXRhLmltZ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe3RpdGxlOiAn57yW6L6R5ZWG5ZOBJ30pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgYXN5bmMgYWRkKCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdXBsb2FkRmlsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2FwaS9jb21tb2RpdHknLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVQYXRoOiB0aGlzLmRhdGEuZm9ybS5pbWcsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2ZpbGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuZGF0YS5mb3JtLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5hdGlvbjogdGhpcy5kYXRhLmZvcm0udGltZVswXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmluaXNoOiB0aGlzLmRhdGEuZm9ybS50aW1lWzFdXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB3eC5zaG93VG9hc3QoeyB0aXRsZTogJ+a3u+WKoOaIkOWKnycgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5mb3JtRWwgJiYgdGhpcy5kYXRhLmZvcm1FbC5yZXNldCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kaWZ5KCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGEuZm9ybSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBfc3VibWl0KCkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEub2xkSW1nID8gdGhpcy5tb2RpZnkoKSA6IHRoaXMuYWRkKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBfcGFyc2VWYWx1ZSh2YWx1ZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgaWYgKFsnY3JlZGl0JywgJ2ludGVncmFsJywgJ3NpemUnXS5pbmNsdWRlcyhuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzTmFOKCt2YWx1ZSkgPyAnJyA6ICt2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==