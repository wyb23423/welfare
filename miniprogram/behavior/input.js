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
exports.default = Behavior({
    properties: {
        lable: {
            type: String,
            value: ''
        },
        labelwidth: {
            type: String,
            value: 'auto'
        },
        value: {
            type: String,
            value: '',
            optionalTypes: [Number]
        },
        placeholder: {
            type: String,
            value: ''
        },
        disabled: {
            type: Boolean,
            value: false
        },
        rules: {
            type: Array,
            value: []
        },
        required: {
            type: Boolean,
            value: false
        }
    },
    data: {
        errMsg: '',
        currType: 'text'
    },
    attached: function () {
        this.setData({
            isRequired: this.data.required || this.data.rules.some(function (v) { return !!v.required; })
        });
    },
    methods: {
        onInput: function (e) {
            var value = this._getValue(e.detail.value);
            this.valid(value).catch(console.log);
            this.triggerEvent('input', { value: value }, {});
        },
        onConfirm: function (e) {
            this.triggerEvent('confirm', {
                value: this._getValue(e.detail.value)
            }, {});
        },
        valid: function (value) {
            return __awaiter(this, void 0, void 0, function () {
                var rules, hasRquired, _i, rules_1, rule, valid, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            rules = this.data.rules;
                            hasRquired = false;
                            _i = 0, rules_1 = rules;
                            _b.label = 1;
                        case 1:
                            if (!(_i < rules_1.length)) return [3, 5];
                            rule = rules_1[_i];
                            if (rule.required) {
                                hasRquired = true;
                            }
                            _a = this._required(value, rule)
                                && this._len(value, rule)
                                && this._exec(value, rule);
                            if (!_a) return [3, 3];
                            return [4, this._func(value, rule)];
                        case 2:
                            _a = (_b.sent());
                            _b.label = 3;
                        case 3:
                            valid = _a;
                            if (!valid) {
                                this.setData({ errMsg: this.data.errMsg });
                                return [2, Promise.reject()];
                            }
                            _b.label = 4;
                        case 4:
                            _i++;
                            return [3, 1];
                        case 5:
                            if (!hasRquired && this.data.required && !this._required(value, {})) {
                                this.setData({ errMsg: this.data.errMsg });
                                return [2, Promise.reject()];
                            }
                            this.setData({ errMsg: '' });
                            return [2, true];
                    }
                });
            });
        },
        _required: function (value, rule) {
            if ((rule.required || this.data.required) && (value == null || value === '')) {
                this.data.errMsg = rule.required && rule.message ? rule.message : this.data.lable + "\u4E0D\u80FD\u4E3A\u7A7A";
                return false;
            }
            return true;
        },
        _len: function (value, rule) {
            var min = rule.min == null ? -Number.MAX_VALUE : rule.min;
            var max = rule.max == null ? Number.MAX_VALUE : rule.max;
            var v = typeof value === 'number' ? value : value.length;
            var main = "" + this.data.lable + (typeof value === 'string' ? '的长度' : '');
            if (v < min) {
                this.data.errMsg = rule.message || main + "\u4E0D\u80FD\u5C0F\u4E8E" + min;
                return false;
            }
            if (v > max) {
                this.data.errMsg = rule.message || main + "\u4E0D\u80FD\u5927\u4E8E" + max;
                return false;
            }
            return true;
        },
        _exec: function (value, rule) {
            if (value != null && value !== '' && rule.regexp) {
                var exp = new RegExp(rule.regexp);
                if (!exp.test(value + '')) {
                    this.data.errMsg = rule.message || this.data.lable + "\u4E0D\u6EE1\u8DB3\u6B63\u5219" + rule.regexp;
                    return false;
                }
            }
            return true;
        },
        _func: function (value, rule) {
            var _this = this;
            return new Promise(function (resolve) {
                if (rule.func) {
                    var fn = function (result) {
                        if (typeof result === 'string') {
                            _this.data.errMsg = result;
                            return resolve(false);
                        }
                        if (result === false) {
                            _this.data.errMsg = _this.data.lable + "\u65E0\u6548";
                            return resolve(false);
                        }
                        resolve(true);
                    };
                    var res = rule.func(value);
                    if (res instanceof Promise) {
                        res.then(fn);
                    }
                    else {
                        fn(res);
                    }
                }
                else {
                    resolve(true);
                }
            });
        },
        _getValue: function (value) {
            if (this.data.currType !== 'text' && value !== '') {
                return +value;
            }
            return value;
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV0Esa0JBQWUsUUFBUSxDQUFnQjtJQUNuQyxVQUFVLEVBQUU7UUFDUixLQUFLLEVBQUU7WUFDSCxJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxFQUFFO1NBQ1o7UUFDRCxVQUFVLEVBQUU7WUFDUixJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxNQUFNO1NBQ2hCO1FBQ0QsS0FBSyxFQUFFO1lBQ0gsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsRUFBRTtZQUNULGFBQWEsRUFBRSxDQUFDLE1BQU0sQ0FBQztTQUMxQjtRQUNELFdBQVcsRUFBRTtZQUNULElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLEVBQUU7U0FDWjtRQUNELFFBQVEsRUFBRTtZQUNOLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDZjtRQUVELEtBQUssRUFBRTtZQUNILElBQUksRUFBRSxLQUFLO1lBQ1gsS0FBSyxFQUFFLEVBQUU7U0FDWjtRQUVELFFBQVEsRUFBRTtZQUNOLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDZjtLQUNKO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsTUFBTSxFQUFFLEVBQUU7UUFDVixRQUFRLEVBQUUsTUFBTTtLQUNuQjtJQUNELFFBQVE7UUFDSixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1QsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQU8sSUFBSyxPQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFaLENBQVksQ0FBQztTQUNwRixDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0QsT0FB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QUFFLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ1g7aUJBQ0o7cUJBQU07b0JBQ0gsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNqQjtZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUNELFNBQVMsWUFBQyxLQUFhO1lBQ25CLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssTUFBTSxJQUFJLEtBQUssS0FBSyxFQUFFLEVBQUU7Z0JBQy9DLE9BQU8sQ0FBQyxLQUFLLENBQUM7YUFDakI7WUFFRCxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDO0tBQ0o7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSdWxlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9mb3JtL2Zvcm0nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJbnB1dEJlaGF2aW9yIGV4dGVuZHMgV3hDb21wb25lbnQge1xyXG4gICAgdmFsaWQodmFsdWU6IHN0cmluZyB8IG51bWJlcik6IFByb21pc2U8dHJ1ZT47XHJcbiAgICBfcmVxdWlyZWQodmFsdWU6IHN0cmluZyB8IG51bWJlciwgcnVsZTogUnVsZSk6IGJvb2xlYW47XHJcbiAgICBfbGVuKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIsIHJ1bGU6IFJ1bGUpOiBib29sZWFuO1xyXG4gICAgX2V4ZWModmFsdWU6IHN0cmluZyB8IG51bWJlciwgcnVsZTogUnVsZSk6IGJvb2xlYW47XHJcbiAgICBfZnVuYyh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyLCBydWxlOiBSdWxlKTogUHJvbWlzZTxib29sZWFuPjtcclxuICAgIF9nZXRWYWx1ZSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHwgbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCZWhhdmlvcjxJbnB1dEJlaGF2aW9yPih7XHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgbGFibGU6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxhYmVsd2lkdGg6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ2F1dG8nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWx1ZToge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnJyxcclxuICAgICAgICAgICAgb3B0aW9uYWxUeXBlczogW051bWJlcl1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkaXNhYmxlZDoge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOajgOa1i+inhOWImVxyXG4gICAgICAgIHJ1bGVzOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEFycmF5LFxyXG4gICAgICAgICAgICB2YWx1ZTogW11cclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOaYr+WQpuW/hemhu1xyXG4gICAgICAgIHJlcXVpcmVkOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgZXJyTXNnOiAnJyxcclxuICAgICAgICBjdXJyVHlwZTogJ3RleHQnXHJcbiAgICB9LFxyXG4gICAgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgaXNSZXF1aXJlZDogdGhpcy5kYXRhLnJlcXVpcmVkIHx8IHRoaXMuZGF0YS5ydWxlcy5zb21lKCh2OiBSdWxlKSA9PiAhIXYucmVxdWlyZWQpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIG9uSW5wdXQoZTogQmFzZUV2ZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fZ2V0VmFsdWUoZS5kZXRhaWwudmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLnZhbGlkKHZhbHVlKS5jYXRjaChjb25zb2xlLmxvZyk7XHJcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdpbnB1dCcsIHsgdmFsdWUgfSwge30pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25Db25maXJtKGU6IEJhc2VFdmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgnY29uZmlybScsIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLl9nZXRWYWx1ZShlLmRldGFpbC52YWx1ZSlcclxuICAgICAgICAgICAgfSwge30pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g5qOA5rWL5YaF5a655piv5ZCm5pyJ5pWIXHJcbiAgICAgICAgYXN5bmMgdmFsaWQodmFsdWU6IHN0cmluZyB8IG51bWJlcik6IFByb21pc2U8dHJ1ZT4ge1xyXG4gICAgICAgICAgICBjb25zdCBydWxlczogUnVsZVtdID0gdGhpcy5kYXRhLnJ1bGVzO1xyXG5cclxuICAgICAgICAgICAgbGV0IGhhc1JxdWlyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBydWxlIG9mIHJ1bGVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocnVsZS5yZXF1aXJlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhc1JxdWlyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbGlkID0gdGhpcy5fcmVxdWlyZWQodmFsdWUsIHJ1bGUpXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5fbGVuKHZhbHVlLCBydWxlKVxyXG4gICAgICAgICAgICAgICAgICAgICYmIHRoaXMuX2V4ZWModmFsdWUsIHJ1bGUpXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgKGF3YWl0IHRoaXMuX2Z1bmModmFsdWUsIHJ1bGUpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHsgZXJyTXNnOiB0aGlzLmRhdGEuZXJyTXNnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWhhc1JxdWlyZWQgJiYgdGhpcy5kYXRhLnJlcXVpcmVkICYmICF0aGlzLl9yZXF1aXJlZCh2YWx1ZSwge30pKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoeyBlcnJNc2c6IHRoaXMuZGF0YS5lcnJNc2cgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHsgZXJyTXNnOiAnJyB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDmo4DmtYvlv4XpnIDmgKdcclxuICAgICAgICBfcmVxdWlyZWQodmFsdWU6IHN0cmluZyB8IG51bWJlciwgcnVsZTogUnVsZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICBpZiAoKHJ1bGUucmVxdWlyZWQgfHwgdGhpcy5kYXRhLnJlcXVpcmVkKSAmJiAodmFsdWUgPT0gbnVsbCB8fCB2YWx1ZSA9PT0gJycpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuZXJyTXNnID0gcnVsZS5yZXF1aXJlZCAmJiBydWxlLm1lc3NhZ2UgPyBydWxlLm1lc3NhZ2UgOiBgJHt0aGlzLmRhdGEubGFibGV95LiN6IO95Li656m6YDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDmo4DmtYvlgLzmiJblgLzplb/luqbnmoTojIPlm7RcclxuICAgICAgICBfbGVuKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIsIHJ1bGU6IFJ1bGUpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgY29uc3QgbWluID0gcnVsZS5taW4gPT0gbnVsbCA/IC1OdW1iZXIuTUFYX1ZBTFVFIDogcnVsZS5taW47XHJcbiAgICAgICAgICAgIGNvbnN0IG1heCA9IHJ1bGUubWF4ID09IG51bGwgPyBOdW1iZXIuTUFYX1ZBTFVFIDogcnVsZS5tYXg7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB2OiBzdHJpbmcgfCBudW1iZXIgPSB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInID8gdmFsdWUgOiB2YWx1ZS5sZW5ndGg7XHJcbiAgICAgICAgICAgIGNvbnN0IG1haW4gPSBgJHt0aGlzLmRhdGEubGFibGV9JHt0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gJ+eahOmVv+W6picgOiAnJ31gO1xyXG4gICAgICAgICAgICBpZiAodiA8IG1pbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLmVyck1zZyA9IHJ1bGUubWVzc2FnZSB8fCBgJHttYWlufeS4jeiDveWwj+S6jiR7bWlufWA7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHYgPiBtYXgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5lcnJNc2cgPSBydWxlLm1lc3NhZ2UgfHwgYCR7bWFpbn3kuI3og73lpKfkuo4ke21heH1gO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOagueaNruato+WImeajgOa1i1xyXG4gICAgICAgIF9leGVjKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIsIHJ1bGU6IFJ1bGUpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlICE9IG51bGwgJiYgdmFsdWUgIT09ICcnICYmIHJ1bGUucmVnZXhwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBleHAgPSBuZXcgUmVnRXhwKHJ1bGUucmVnZXhwKTtcclxuICAgICAgICAgICAgICAgIGlmICghZXhwLnRlc3QodmFsdWUgKyAnJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuZXJyTXNnID0gcnVsZS5tZXNzYWdlIHx8IGAke3RoaXMuZGF0YS5sYWJsZX3kuI3mu6HotrPmraPliJkke3J1bGUucmVnZXhwfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOS9v+eUqOajgOa1i+WHveaVsFxyXG4gICAgICAgIF9mdW5jKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIsIHJ1bGU6IFJ1bGUpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocnVsZS5mdW5jKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZm4gPSAocmVzdWx0OiBzdHJpbmcgfCBib29sZWFuIHwgdm9pZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5lcnJNc2cgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuZXJyTXNnID0gYCR7dGhpcy5kYXRhLmxhYmxlfeaXoOaViGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gcnVsZS5mdW5jKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzIGluc3RhbmNlb2YgUHJvbWlzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMudGhlbihmbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm4ocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgX2dldFZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5jdXJyVHlwZSAhPT0gJ3RleHQnICYmIHZhbHVlICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICt2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==