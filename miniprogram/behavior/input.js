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
        labelWidth: {
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
    methods: {
        onInput: function (e) {
            var _this = this;
            var value = this.data.currType !== 'text' ? +e.detail.value : e.detail.value;
            this.valid(value).catch(function (errMsg) { return _this.setData({ errMsg: errMsg }); });
            this.triggerEvent('input', { value: value }, {});
        },
        onConfirm: function (e) {
            this.triggerEvent('confirm', {
                value: this.data.currType !== 'text' ? +e.detail.value : e.detail.value
            }, {});
        },
        valid: function (value) {
            return __awaiter(this, void 0, void 0, function () {
                var rules, _i, rules_1, rule, valid, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            this.data.errMsg = '';
                            rules = this.data.rules;
                            _i = 0, rules_1 = rules;
                            _b.label = 1;
                        case 1:
                            if (!(_i < rules_1.length)) return [3, 5];
                            rule = rules_1[_i];
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
                                return [2, Promise.reject(this.data.errMsg)];
                            }
                            _b.label = 4;
                        case 4:
                            _i++;
                            return [3, 1];
                        case 5: return [2, true];
                    }
                });
            });
        },
        _required: function (value, rule) {
            if ((rule.required || this.data.required) && (value == null || value === '')) {
                this.data.errMsg = rule.message || this.data.lable + "\u4E0D\u80FD\u4E3A\u7A7A";
                return false;
            }
            return true;
        },
        _len: function (value, rule) {
            var min = rule.min == null ? -Number.MAX_VALUE : rule.min;
            var max = rule.max == null ? Number.MAX_VALUE : rule.max;
            var v = typeof value === 'number' ? value : value.length;
            if (v < min || v > max) {
                var main = "" + this.data.lable + (typeof value === 'string' ? '的长度' : '');
                this.data.errMsg = rule.message || main + "\u5E94\u5904\u4E8E" + min + " - " + max + "\u4E4B\u95F4";
                return false;
            }
            return true;
        },
        _exec: function (value, rule) {
            if (rule.regexp && !rule.regexp.test(value + '')) {
                this.data.errMsg = rule.message || this.data.lable + "\u4E0D\u6EE1\u8DB3\u6B63\u5219" + rule.regexp;
                return false;
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
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBLGtCQUFlLFFBQVEsQ0FBZ0I7SUFDbkMsVUFBVSxFQUFFO1FBQ1IsS0FBSyxFQUFFO1lBQ0gsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsRUFBRTtTQUNaO1FBQ0QsVUFBVSxFQUFFO1lBQ1IsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsTUFBTTtTQUNoQjtRQUNELEtBQUssRUFBRTtZQUNILElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLEVBQUU7WUFDVCxhQUFhLEVBQUUsQ0FBQyxNQUFNLENBQUM7U0FDMUI7UUFDRCxXQUFXLEVBQUU7WUFDVCxJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxFQUFFO1NBQ1o7UUFDRCxRQUFRLEVBQUU7WUFDTixJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRSxLQUFLO1NBQ2Y7UUFFRCxLQUFLLEVBQUU7WUFDSCxJQUFJLEVBQUUsS0FBSztZQUNYLEtBQUssRUFBRSxFQUFFO1NBQ1o7UUFFRCxRQUFRLEVBQUU7WUFDTixJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRSxLQUFLO1NBQ2Y7S0FDSjtJQUNELElBQUksRUFBRTtRQUNGLE1BQU0sRUFBRSxFQUFFO1FBQ1YsUUFBUSxFQUFFLE1BQU07S0FDbkI7SUFDRCxPQUFPLEVBQUU7UUFDTCxPQUFPLFlBQUMsQ0FBWTtZQUFwQixpQkFJQztZQUhHLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDL0UsSUFBSSxDQUFDLEtBQUss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SSxDQUFDOzRCQUMxQyxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzt5QkFDekI7d0JBRUQsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNsQixDQUFDLENBQUE7b0JBRUQsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDN0IsSUFBSSxHQUFHLFlBQVksT0FBTyxFQUFFO3dCQUN4QixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3FCQUNoQjt5QkFBTTt3QkFDSCxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ1g7aUJBQ0o7cUJBQU07b0JBQ0gsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNqQjtZQUNMLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQztLQUNKO0NBQ0osQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW5wdXRCZWhhdmlvciBleHRlbmRzIFd4Q29tcG9uZW50IHtcclxuICAgIHZhbGlkKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBQcm9taXNlPHRydWU+O1xyXG4gICAgX3JlcXVpcmVkKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIsIHJ1bGU6IFJ1bGUpOiBib29sZWFuO1xyXG4gICAgX2xlbih2YWx1ZTogc3RyaW5nIHwgbnVtYmVyLCBydWxlOiBSdWxlKTogYm9vbGVhbjtcclxuICAgIF9leGVjKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIsIHJ1bGU6IFJ1bGUpOiBib29sZWFuO1xyXG4gICAgX2Z1bmModmFsdWU6IHN0cmluZyB8IG51bWJlciwgcnVsZTogUnVsZSk6IFByb21pc2U8Ym9vbGVhbj47XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFJ1bGUgPSB7XHJcbiAgICByZXF1aXJlZD86IGJvb2xlYW47XHJcbiAgICBtaW4/OiBudW1iZXI7XHJcbiAgICBtYXg/OiBudW1iZXI7XHJcbiAgICByZWdleHA/OiBSZWdFeHA7XHJcbiAgICBmdW5jPzogKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpID0+IHN0cmluZyB8IGJvb2xlYW4gfCB2b2lkIHwgUHJvbWlzZTxzdHJpbmcgfCBib29sZWFuIHwgdm9pZD47XHJcbiAgICBtZXNzYWdlPzogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmVoYXZpb3I8SW5wdXRCZWhhdmlvcj4oe1xyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGxhYmxlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsYWJlbFdpZHRoOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6ICdhdXRvJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsdWU6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJycsXHJcbiAgICAgICAgICAgIG9wdGlvbmFsVHlwZXM6IFtOdW1iZXJdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwbGFjZWhvbGRlcjoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGlzYWJsZWQ6IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDmo4DmtYvop4TliJlcclxuICAgICAgICBydWxlczoge1xyXG4gICAgICAgICAgICB0eXBlOiBBcnJheSxcclxuICAgICAgICAgICAgdmFsdWU6IFtdXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDmmK/lkKblv4XpobtcclxuICAgICAgICByZXF1aXJlZDoge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGVyck1zZzogJycsXHJcbiAgICAgICAgY3VyclR5cGU6ICd0ZXh0J1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBvbklucHV0KGU6IEJhc2VFdmVudCkge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0YS5jdXJyVHlwZSAhPT0gJ3RleHQnID8gK2UuZGV0YWlsLnZhbHVlIDogZS5kZXRhaWwudmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMudmFsaWQodmFsdWUpLmNhdGNoKChlcnJNc2c6IHN0cmluZykgPT4gdGhpcy5zZXREYXRhKHsgZXJyTXNnIH0pKTtcclxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2lucHV0JywgeyB2YWx1ZSB9LCB7fSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkNvbmZpcm0oZTogQmFzZUV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdjb25maXJtJywge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuZGF0YS5jdXJyVHlwZSAhPT0gJ3RleHQnID8gK2UuZGV0YWlsLnZhbHVlIDogZS5kZXRhaWwudmFsdWVcclxuICAgICAgICAgICAgfSwge30pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmMgdmFsaWQodmFsdWU6IHN0cmluZyB8IG51bWJlcik6IFByb21pc2U8dHJ1ZT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuZXJyTXNnID0gJyc7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBydWxlczogUnVsZVtdID0gdGhpcy5kYXRhLnJ1bGVzO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJ1bGUgb2YgcnVsZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbGlkID0gdGhpcy5fcmVxdWlyZWQodmFsdWUsIHJ1bGUpXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5fbGVuKHZhbHVlLCBydWxlKVxyXG4gICAgICAgICAgICAgICAgICAgICYmIHRoaXMuX2V4ZWModmFsdWUsIHJ1bGUpXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgKGF3YWl0IHRoaXMuX2Z1bmModmFsdWUsIHJ1bGUpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHRoaXMuZGF0YS5lcnJNc2cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOajgOa1i+W/hemcgOaAp1xyXG4gICAgICAgIF9yZXF1aXJlZCh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyLCBydWxlOiBSdWxlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIGlmICgocnVsZS5yZXF1aXJlZCB8fCB0aGlzLmRhdGEucmVxdWlyZWQpICYmICh2YWx1ZSA9PSBudWxsIHx8IHZhbHVlID09PSAnJykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5lcnJNc2cgPSBydWxlLm1lc3NhZ2UgfHwgYCR7dGhpcy5kYXRhLmxhYmxlfeS4jeiDveS4uuepumA7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g5qOA5rWL5YC85oiW5YC86ZW/5bqm55qE6IyD5Zu0XHJcbiAgICAgICAgX2xlbih2YWx1ZTogc3RyaW5nIHwgbnVtYmVyLCBydWxlOiBSdWxlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1pbiA9IHJ1bGUubWluID09IG51bGwgPyAtTnVtYmVyLk1BWF9WQUxVRSA6IHJ1bGUubWluO1xyXG4gICAgICAgICAgICBjb25zdCBtYXggPSBydWxlLm1heCA9PSBudWxsID8gTnVtYmVyLk1BWF9WQUxVRSA6IHJ1bGUubWF4O1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgdjogc3RyaW5nIHwgbnVtYmVyID0gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyA/IHZhbHVlIDogdmFsdWUubGVuZ3RoO1xyXG4gICAgICAgICAgICBpZiAodiA8IG1pbiB8fCB2ID4gbWF4KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYWluID0gYCR7dGhpcy5kYXRhLmxhYmxlfSR7dHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/ICfnmoTplb/luqYnIDogJyd9YDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5lcnJNc2cgPSBydWxlLm1lc3NhZ2UgfHwgYCR7bWFpbn3lupTlpITkuo4ke21pbn0gLSAke21heH3kuYvpl7RgO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOagueaNruato+WImeajgOa1i1xyXG4gICAgICAgIF9leGVjKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIsIHJ1bGU6IFJ1bGUpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgaWYgKHJ1bGUucmVnZXhwICYmICFydWxlLnJlZ2V4cC50ZXN0KHZhbHVlICsgJycpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuZXJyTXNnID0gcnVsZS5tZXNzYWdlIHx8IGAke3RoaXMuZGF0YS5sYWJsZX3kuI3mu6HotrPmraPliJkke3J1bGUucmVnZXhwfWA7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g5L2/55So5qOA5rWL5Ye95pWwXHJcbiAgICAgICAgX2Z1bmModmFsdWU6IHN0cmluZyB8IG51bWJlciwgcnVsZTogUnVsZSk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChydWxlLmZ1bmMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmbiA9IChyZXN1bHQ6IHN0cmluZyB8IGJvb2xlYW4gfCB2b2lkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLmVyck1zZyA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5lcnJNc2cgPSBgJHt0aGlzLmRhdGEubGFibGV95peg5pWIYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IHJ1bGUuZnVuYyh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcyBpbnN0YW5jZW9mIFByb21pc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnRoZW4oZm4pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZuKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSkiXX0=