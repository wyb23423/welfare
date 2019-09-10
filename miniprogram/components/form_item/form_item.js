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
Component({
    externalClasses: ['custom-class', 'label-class', 'input-class', 'msg-class'],
    properties: {
        label: {
            type: String,
            value: ''
        },
        labelwidth: {
            type: String,
            value: 'auto'
        },
        prop: {
            type: String,
            value: ''
        },
        rules: {
            type: Array,
            value: [],
            optionalTypes: [Object]
        },
        required: {
            type: Boolean,
            value: false
        }
    },
    data: {
        errMsg: '',
        isRequired: false
    },
    attached: function () {
        var rules = this.data.rules;
        if (!Array.isArray(rules)) {
            this.data.rules = [rules];
        }
        this.setData({
            isRequired: this.data.required || this.data.rules.some(function (v) { return !!v.required; })
        });
    },
    relations: {
        '../form/form': {
            type: 'parent',
            linked: function (target) {
                var _this = this;
                if (this.data.labelwidth !== 'auto') {
                    var parentLabelWidth = target.data.labelwidth;
                    if (parentLabelWidth) {
                        if (parentLabelWidth === 'auto') {
                            this.createSelectorQuery()
                                .select('#label')
                                .boundingClientRect(function (rect) {
                                if (rect.width > target.data.labelWidth) {
                                    target.setData({ labelWidth: rect.width });
                                }
                                else {
                                    _this.setData({ labelwidth: _this.data.labelWidth + 'px' });
                                }
                            });
                        }
                        else {
                            this.setData({ labelwidth: parentLabelWidth });
                        }
                    }
                }
            }
        }
    },
    methods: {
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
            if ((rule.required || this.data.required)
                && (value == null
                    || typeof value !== 'number' && !Object.keys(value).length
                    || value !== value)) {
                this.data.errMsg = rule.required && rule.message ? rule.message : (this.data.label || '必填项') + "\u4E0D\u80FD\u4E3A\u7A7A";
                return false;
            }
            return true;
        },
        _len: function (value, rule) {
            var min = rule.min == null ? -Number.MAX_VALUE : rule.min;
            var max = rule.max == null ? Number.MAX_VALUE : rule.max;
            var v = typeof value === 'number' ? value : Object.keys(value).length;
            var main = "" + this.data.label + (typeof value === 'string' ? '的长度' : '');
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
                    this.data.errMsg = rule.message || this.data.label + "\u4E0D\u6EE1\u8DB3\u6B63\u5219" + rule.regexp;
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
                            _this.data.errMsg = _this.data.label + "\u65E0\u6548";
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
    },
    observers: {
        rules: function (val) {
            if (!Array.isArray(val)) {
                val = [val];
            }
            this.setData({
                isRequired: this.data.required || val.some(function (v) { return !!v.required; })
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybV9pdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZm9ybV9pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXQSxTQUFTLENBQVc7SUFDaEIsZUFBZSxFQUFFLENBQUMsY0FBYyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsV0FBVyxDQUFDO0lBQzVFLFVBQVUsRUFBRTtRQUNSLEtBQUssRUFBRTtZQUNILElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLEVBQUU7U0FDWjtRQUNELFVBQVUsRUFBRTtZQUNSLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLE1BQU07U0FDaEI7UUFDRCxJQUFJLEVBQUU7WUFDRixJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxFQUFFO1NBQ1o7UUFDRCxLQUFLLEVBQUU7WUFDSCxJQUFJLEVBQUUsS0FBSztZQUNYLEtBQUssRUFBRSxFQUFFO1lBQ1QsYUFBYSxFQUFFLENBQUMsTUFBTSxDQUFDO1NBQzFCO1FBQ0QsUUFBUSxFQUFFO1lBQ04sSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsS0FBSztTQUNmO0tBQ0o7SUFDRCxJQUFJLEVBQUU7UUFDRixNQUFNLEVBQUUsRUFBRTtRQUNWLFVBQVUsRUFBRSxLQUFLO0tBQ3BCO0lBQ0QsUUFBUTtRQUNKLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0I7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1QsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFD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WSxDQUFDO2FBQ3hFLENBQUMsQ0FBQztRQUNQLENBQUM7S0FDSjtDQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJ1bGUgfSBmcm9tICcuLi9mb3JtL2Zvcm0nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGb3JtSXRlbSBleHRlbmRzIFd4Q29tcG9uZW50IHtcclxuICAgIHZhbGlkKHZhbHVlOiBhbnkpOiBQcm9taXNlPHRydWU+O1xyXG4gICAgX3JlcXVpcmVkKHZhbHVlOiBhbnksIHJ1bGU6IFJ1bGUpOiBib29sZWFuO1xyXG4gICAgX2xlbih2YWx1ZTogYW55LCBydWxlOiBSdWxlKTogYm9vbGVhbjtcclxuICAgIF9leGVjKHZhbHVlOiBhbnksIHJ1bGU6IFJ1bGUpOiBib29sZWFuO1xyXG4gICAgX2Z1bmModmFsdWU6IGFueSwgcnVsZTogUnVsZSk6IFByb21pc2U8Ym9vbGVhbj47XHJcbiAgICBfZ2V0VmFsdWUodmFsdWU6IHN0cmluZyk6IGFueTtcclxufVxyXG5cclxuQ29tcG9uZW50PEZvcm1JdGVtPih7XHJcbiAgICBleHRlcm5hbENsYXNzZXM6IFsnY3VzdG9tLWNsYXNzJywgJ2xhYmVsLWNsYXNzJywgJ2lucHV0LWNsYXNzJywgJ21zZy1jbGFzcyddLFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGxhYmVsOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsYWJlbHdpZHRoOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6ICdhdXRvJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJvcDoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcnVsZXM6IHtcclxuICAgICAgICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgICAgICAgIHZhbHVlOiBbXSxcclxuICAgICAgICAgICAgb3B0aW9uYWxUeXBlczogW09iamVjdF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlcXVpcmVkOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgZXJyTXNnOiAnJyxcclxuICAgICAgICBpc1JlcXVpcmVkOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGF0dGFjaGVkKCkge1xyXG4gICAgICAgIGNvbnN0IHJ1bGVzID0gdGhpcy5kYXRhLnJ1bGVzO1xyXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShydWxlcykpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLnJ1bGVzID0gW3J1bGVzXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIGlzUmVxdWlyZWQ6IHRoaXMuZGF0YS5yZXF1aXJlZCB8fCB0aGlzLmRhdGEucnVsZXMuc29tZSgodjogUnVsZSkgPT4gISF2LnJlcXVpcmVkKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHJlbGF0aW9uczoge1xyXG4gICAgICAgICcuLi9mb3JtL2Zvcm0nOiB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXJlbnQnLFxyXG4gICAgICAgICAgICBsaW5rZWQodGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhLmxhYmVsd2lkdGggIT09ICdhdXRvJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudExhYmVsV2lkdGg6IHN0cmluZyA9IHRhcmdldC5kYXRhLmxhYmVsd2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmVudExhYmVsV2lkdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmVudExhYmVsV2lkdGggPT09ICdhdXRvJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVTZWxlY3RvclF1ZXJ5KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2VsZWN0KCcjbGFiZWwnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5ib3VuZGluZ0NsaWVudFJlY3QocmVjdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWN0LndpZHRoID4gdGFyZ2V0LmRhdGEubGFiZWxXaWR0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnNldERhdGEhKHsgbGFiZWxXaWR0aDogcmVjdC53aWR0aCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSEoeyBsYWJlbHdpZHRoOiB0aGlzLmRhdGEubGFiZWxXaWR0aCArICdweCcgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSEoeyBsYWJlbHdpZHRoOiBwYXJlbnRMYWJlbFdpZHRoIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgLy8g5qOA5rWL5YaF5a655piv5ZCm5pyJ5pWIXHJcbiAgICAgICAgYXN5bmMgdmFsaWQodmFsdWU6IGFueSk6IFByb21pc2U8dHJ1ZT4ge1xyXG4gICAgICAgICAgICBjb25zdCBydWxlczogUnVsZVtdID0gdGhpcy5kYXRhLnJ1bGVzO1xyXG5cclxuICAgICAgICAgICAgbGV0IGhhc1JxdWlyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBydWxlIG9mIHJ1bGVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocnVsZS5yZXF1aXJlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhc1JxdWlyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbGlkID0gdGhpcy5fcmVxdWlyZWQodmFsdWUsIHJ1bGUpXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5fbGVuKHZhbHVlLCBydWxlKVxyXG4gICAgICAgICAgICAgICAgICAgICYmIHRoaXMuX2V4ZWModmFsdWUsIHJ1bGUpXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgKGF3YWl0IHRoaXMuX2Z1bmModmFsdWUsIHJ1bGUpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHsgZXJyTXNnOiB0aGlzLmRhdGEuZXJyTXNnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWhhc1JxdWlyZWQgJiYgdGhpcy5kYXRhLnJlcXVpcmVkICYmICF0aGlzLl9yZXF1aXJlZCh2YWx1ZSwge30pKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoeyBlcnJNc2c6IHRoaXMuZGF0YS5lcnJNc2cgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHsgZXJyTXNnOiAnJyB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDmo4DmtYvlv4XpnIDmgKdcclxuICAgICAgICBfcmVxdWlyZWQodmFsdWU6IGFueSwgcnVsZTogUnVsZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAocnVsZS5yZXF1aXJlZCB8fCB0aGlzLmRhdGEucmVxdWlyZWQpXHJcbiAgICAgICAgICAgICAgICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIHx8IHR5cGVvZiB2YWx1ZSAhPT0gJ251bWJlcicgJiYgIU9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICB8fCB2YWx1ZSAhPT0gdmFsdWVcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuZXJyTXNnID0gcnVsZS5yZXF1aXJlZCAmJiBydWxlLm1lc3NhZ2UgPyBydWxlLm1lc3NhZ2UgOiBgJHt0aGlzLmRhdGEubGFiZWwgfHwgJ+W/heWhq+mhuSd95LiN6IO95Li656m6YDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDmo4DmtYvlgLzmiJblgLzplb/luqbnmoTojIPlm7RcclxuICAgICAgICBfbGVuKHZhbHVlOiBhbnksIHJ1bGU6IFJ1bGUpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgY29uc3QgbWluID0gcnVsZS5taW4gPT0gbnVsbCA/IC1OdW1iZXIuTUFYX1ZBTFVFIDogcnVsZS5taW47XHJcbiAgICAgICAgICAgIGNvbnN0IG1heCA9IHJ1bGUubWF4ID09IG51bGwgPyBOdW1iZXIuTUFYX1ZBTFVFIDogcnVsZS5tYXg7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB2OiBhbnkgPSB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInID8gdmFsdWUgOiBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoO1xyXG4gICAgICAgICAgICBjb25zdCBtYWluID0gYCR7dGhpcy5kYXRhLmxhYmVsfSR7dHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/ICfnmoTplb/luqYnIDogJyd9YDtcclxuICAgICAgICAgICAgaWYgKHYgPCBtaW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5lcnJNc2cgPSBydWxlLm1lc3NhZ2UgfHwgYCR7bWFpbn3kuI3og73lsI/kuo4ke21pbn1gO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh2ID4gbWF4KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuZXJyTXNnID0gcnVsZS5tZXNzYWdlIHx8IGAke21haW595LiN6IO95aSn5LqOJHttYXh9YDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDmoLnmja7mraPliJnmo4DmtYtcclxuICAgICAgICBfZXhlYyh2YWx1ZTogYW55LCBydWxlOiBSdWxlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPSBudWxsICYmIHZhbHVlICE9PSAnJyAmJiBydWxlLnJlZ2V4cCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXhwID0gbmV3IFJlZ0V4cChydWxlLnJlZ2V4cCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWV4cC50ZXN0KHZhbHVlICsgJycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLmVyck1zZyA9IHJ1bGUubWVzc2FnZSB8fCBgJHt0aGlzLmRhdGEubGFiZWx95LiN5ruh6Laz5q2j5YiZJHtydWxlLnJlZ2V4cH1gO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDkvb/nlKjmo4DmtYvlh73mlbBcclxuICAgICAgICBfZnVuYyh2YWx1ZTogYW55LCBydWxlOiBSdWxlKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJ1bGUuZnVuYykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZuID0gKHJlc3VsdDogc3RyaW5nIHwgYm9vbGVhbiB8IHZvaWQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuZXJyTXNnID0gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLmVyck1zZyA9IGAke3RoaXMuZGF0YS5sYWJlbH3ml6DmlYhgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IHJ1bGUuZnVuYyh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcyBpbnN0YW5jZW9mIFByb21pc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnRoZW4oZm4pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZuKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgb2JzZXJ2ZXJzOiB7XHJcbiAgICAgICAgcnVsZXModmFsOiBSdWxlW10gfCBSdWxlKSB7XHJcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWwpKSB7XHJcbiAgICAgICAgICAgICAgICB2YWwgPSBbdmFsXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ6IHRoaXMuZGF0YS5yZXF1aXJlZCB8fCB2YWwuc29tZSgodjogUnVsZSkgPT4gISF2LnJlcXVpcmVkKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=