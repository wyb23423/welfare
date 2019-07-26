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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBLGtCQUFlLFFBQVEsQ0FBZ0I7SUFDbkMsVUFBVSxFQUFFO1FBQ1IsS0FBSyxFQUFFO1lBQ0gsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsRUFBRTtTQUNaO1FBQ0QsVUFBVSxFQUFFO1lBQ1IsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsTUFBTTtTQUNoQjtRQUNELEtBQUssRUFBRTtZQUNILElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLEVBQUU7WUFDVCxhQUFhLEVBQUUsQ0FBQyxNQUFNLENBQUM7U0FDMUI7UUFDRCxXQUFXLEVBQUU7WUFDVCxJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxFQUFFO1NBQ1o7UUFDRCxRQUFRLEVBQUU7WUFDTixJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRSxLQUFLO1NBQ2Y7UUFFRCxLQUFLLEVBQUU7WUFDSCxJQUFJLEVBQUUsS0FBSztZQUNYLEtBQUssRUFBRSxFQUFFO1NBQ1o7UUFFRCxRQUFRLEVBQUU7WUFDTixJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRSxLQUFLO1NBQ2Y7S0FDSjtJQUNELElBQUksRUFBRTtRQUNGLE1BQU0sRUFBRSxFQUFFO1FBQ1YsUUFBUSxFQUFFLE1BQU07S0FDbkI7SUFDRCxRQUFRO1FBQ0osSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNULFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFPLElBQUssT0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBWixDQUFZLENBQUM7U0FDcEYsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELE9B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RUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUNYO2lCQUNKO3FCQUFNO29CQUNILE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDakI7WUFDTCxDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUM7UUFDRCxTQUFTLFlBQUMsS0FBYTtZQUNuQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLE1BQU0sSUFBSSxLQUFLLEtBQUssRUFBRSxFQUFFO2dCQUMvQyxPQUFPLENBQUMsS0FBSyxDQUFDO2FBQ2pCO1lBRUQsT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQztLQUNKO0NBQ0osQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW5wdXRCZWhhdmlvciBleHRlbmRzIFd4Q29tcG9uZW50IHtcclxuICAgIHZhbGlkKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBQcm9taXNlPHRydWU+O1xyXG4gICAgX3JlcXVpcmVkKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIsIHJ1bGU6IFJ1bGUpOiBib29sZWFuO1xyXG4gICAgX2xlbih2YWx1ZTogc3RyaW5nIHwgbnVtYmVyLCBydWxlOiBSdWxlKTogYm9vbGVhbjtcclxuICAgIF9leGVjKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIsIHJ1bGU6IFJ1bGUpOiBib29sZWFuO1xyXG4gICAgX2Z1bmModmFsdWU6IHN0cmluZyB8IG51bWJlciwgcnVsZTogUnVsZSk6IFByb21pc2U8Ym9vbGVhbj47XHJcbiAgICBfZ2V0VmFsdWUodmFsdWU6IHN0cmluZyk6IHN0cmluZyB8IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgUnVsZSA9IHtcclxuICAgIHJlcXVpcmVkPzogYm9vbGVhbjtcclxuICAgIG1pbj86IG51bWJlcjtcclxuICAgIG1heD86IG51bWJlcjtcclxuICAgIHJlZ2V4cD86IHN0cmluZztcclxuICAgIGZ1bmM/OiAodmFsdWU6IHN0cmluZyB8IG51bWJlcikgPT4gc3RyaW5nIHwgYm9vbGVhbiB8IHZvaWQgfCBQcm9taXNlPHN0cmluZyB8IGJvb2xlYW4gfCB2b2lkPjtcclxuICAgIG1lc3NhZ2U/OiBzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCZWhhdmlvcjxJbnB1dEJlaGF2aW9yPih7XHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgbGFibGU6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxhYmVsd2lkdGg6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ2F1dG8nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWx1ZToge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnJyxcclxuICAgICAgICAgICAgb3B0aW9uYWxUeXBlczogW051bWJlcl1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkaXNhYmxlZDoge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOajgOa1i+inhOWImVxyXG4gICAgICAgIHJ1bGVzOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEFycmF5LFxyXG4gICAgICAgICAgICB2YWx1ZTogW11cclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOaYr+WQpuW/hemhu1xyXG4gICAgICAgIHJlcXVpcmVkOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgZXJyTXNnOiAnJyxcclxuICAgICAgICBjdXJyVHlwZTogJ3RleHQnXHJcbiAgICB9LFxyXG4gICAgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgaXNSZXF1aXJlZDogdGhpcy5kYXRhLnJlcXVpcmVkIHx8IHRoaXMuZGF0YS5ydWxlcy5zb21lKCh2OiBSdWxlKSA9PiAhIXYucmVxdWlyZWQpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIG9uSW5wdXQoZTogQmFzZUV2ZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fZ2V0VmFsdWUoZS5kZXRhaWwudmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLnZhbGlkKHZhbHVlKS5jYXRjaChjb25zb2xlLmxvZyk7XHJcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdpbnB1dCcsIHsgdmFsdWUgfSwge30pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25Db25maXJtKGU6IEJhc2VFdmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgnY29uZmlybScsIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLl9nZXRWYWx1ZShlLmRldGFpbC52YWx1ZSlcclxuICAgICAgICAgICAgfSwge30pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g5qOA5rWL5YaF5a655piv5ZCm5pyJ5pWIXHJcbiAgICAgICAgYXN5bmMgdmFsaWQodmFsdWU6IHN0cmluZyB8IG51bWJlcik6IFByb21pc2U8dHJ1ZT4ge1xyXG4gICAgICAgICAgICBjb25zdCBydWxlczogUnVsZVtdID0gdGhpcy5kYXRhLnJ1bGVzO1xyXG5cclxuICAgICAgICAgICAgbGV0IGhhc1JxdWlyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBydWxlIG9mIHJ1bGVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocnVsZS5yZXF1aXJlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhc1JxdWlyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbGlkID0gdGhpcy5fcmVxdWlyZWQodmFsdWUsIHJ1bGUpXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5fbGVuKHZhbHVlLCBydWxlKVxyXG4gICAgICAgICAgICAgICAgICAgICYmIHRoaXMuX2V4ZWModmFsdWUsIHJ1bGUpXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgKGF3YWl0IHRoaXMuX2Z1bmModmFsdWUsIHJ1bGUpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHsgZXJyTXNnOiB0aGlzLmRhdGEuZXJyTXNnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWhhc1JxdWlyZWQgJiYgdGhpcy5kYXRhLnJlcXVpcmVkICYmICF0aGlzLl9yZXF1aXJlZCh2YWx1ZSwge30pKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoeyBlcnJNc2c6IHRoaXMuZGF0YS5lcnJNc2cgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHsgZXJyTXNnOiAnJyB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDmo4DmtYvlv4XpnIDmgKdcclxuICAgICAgICBfcmVxdWlyZWQodmFsdWU6IHN0cmluZyB8IG51bWJlciwgcnVsZTogUnVsZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICBpZiAoKHJ1bGUucmVxdWlyZWQgfHwgdGhpcy5kYXRhLnJlcXVpcmVkKSAmJiAodmFsdWUgPT0gbnVsbCB8fCB2YWx1ZSA9PT0gJycpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuZXJyTXNnID0gcnVsZS5yZXF1aXJlZCAmJiBydWxlLm1lc3NhZ2UgPyBydWxlLm1lc3NhZ2UgOiBgJHt0aGlzLmRhdGEubGFibGV95LiN6IO95Li656m6YDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDmo4DmtYvlgLzmiJblgLzplb/luqbnmoTojIPlm7RcclxuICAgICAgICBfbGVuKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIsIHJ1bGU6IFJ1bGUpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgY29uc3QgbWluID0gcnVsZS5taW4gPT0gbnVsbCA/IC1OdW1iZXIuTUFYX1ZBTFVFIDogcnVsZS5taW47XHJcbiAgICAgICAgICAgIGNvbnN0IG1heCA9IHJ1bGUubWF4ID09IG51bGwgPyBOdW1iZXIuTUFYX1ZBTFVFIDogcnVsZS5tYXg7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB2OiBzdHJpbmcgfCBudW1iZXIgPSB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInID8gdmFsdWUgOiB2YWx1ZS5sZW5ndGg7XHJcbiAgICAgICAgICAgIGNvbnN0IG1haW4gPSBgJHt0aGlzLmRhdGEubGFibGV9JHt0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gJ+eahOmVv+W6picgOiAnJ31gO1xyXG4gICAgICAgICAgICBpZiAodiA8IG1pbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLmVyck1zZyA9IHJ1bGUubWVzc2FnZSB8fCBgJHttYWlufeS4jeiDveWwj+S6jiR7bWlufWA7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHYgPiBtYXgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5lcnJNc2cgPSBydWxlLm1lc3NhZ2UgfHwgYCR7bWFpbn3kuI3og73lpKfkuo4ke21heH1gO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOagueaNruato+WImeajgOa1i1xyXG4gICAgICAgIF9leGVjKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIsIHJ1bGU6IFJ1bGUpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlICE9IG51bGwgJiYgdmFsdWUgIT09ICcnICYmIHJ1bGUucmVnZXhwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBleHAgPSBuZXcgUmVnRXhwKHJ1bGUucmVnZXhwKTtcclxuICAgICAgICAgICAgICAgIGlmICghZXhwLnRlc3QodmFsdWUgKyAnJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuZXJyTXNnID0gcnVsZS5tZXNzYWdlIHx8IGAke3RoaXMuZGF0YS5sYWJsZX3kuI3mu6HotrPmraPliJkke3J1bGUucmVnZXhwfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOS9v+eUqOajgOa1i+WHveaVsFxyXG4gICAgICAgIF9mdW5jKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIsIHJ1bGU6IFJ1bGUpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocnVsZS5mdW5jKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZm4gPSAocmVzdWx0OiBzdHJpbmcgfCBib29sZWFuIHwgdm9pZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5lcnJNc2cgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuZXJyTXNnID0gYCR7dGhpcy5kYXRhLmxhYmxlfeaXoOaViGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBydWxlLmZ1bmModmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMgaW5zdGFuY2VvZiBQcm9taXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy50aGVuKGZuKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbihyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIF9nZXRWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuY3VyclR5cGUgIT09ICd0ZXh0JyAmJiB2YWx1ZSAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiArdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pIl19