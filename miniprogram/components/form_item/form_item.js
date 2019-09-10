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
                if (this.data.labelwidth === 'auto') {
                    var parentLabelWidth = target.data.labelwidth;
                    if (!parentLabelWidth || parentLabelWidth === 'auto') {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybV9pdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZm9ybV9pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXQSxTQUFTLENBQVc7SUFDaEIsZUFBZSxFQUFFLENBQUMsY0FBYyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsV0FBVyxDQUFDO0lBQzVFLFVBQVUsRUFBRTtRQUNSLEtBQUssRUFBRTtZQUNILElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLEVBQUU7U0FDWjtRQUNELFVBQVUsRUFBRTtZQUNSLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLE1BQU07U0FDaEI7UUFDRCxJQUFJLEVBQUU7WUFDRixJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxFQUFFO1NBQ1o7UUFDRCxLQUFLLEVBQUU7WUFDSCxJQUFJLEVBQUUsS0FBSztZQUNYLEtBQUssRUFBRSxFQUFFO1lBQ1QsYUFBYSxFQUFFLENBQUMsTUFBTSxDQUFDO1NBQzFCO1FBQ0QsUUFBUSxFQUFFO1lBQ04sSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsS0FBSztTQUNmO0tBQ0o7SUFDRCxJQUFJLEVBQUU7UUFDRixNQUFNLEVBQUUsRUFBRTtRQUNWLFVBQVUsRUFBRSxLQUFLO0tBQ3BCO0lBQ0QsUUFBUTtRQUNKLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0I7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1QsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFD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Q0FBQyxDQUFDO1FBQ1AsQ0FBQztLQUNKO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUnVsZSB9IGZyb20gJy4uL2Zvcm0vZm9ybSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1JdGVtIGV4dGVuZHMgV3hDb21wb25lbnQge1xyXG4gICAgdmFsaWQodmFsdWU6IGFueSk6IFByb21pc2U8dHJ1ZT47XHJcbiAgICBfcmVxdWlyZWQodmFsdWU6IGFueSwgcnVsZTogUnVsZSk6IGJvb2xlYW47XHJcbiAgICBfbGVuKHZhbHVlOiBhbnksIHJ1bGU6IFJ1bGUpOiBib29sZWFuO1xyXG4gICAgX2V4ZWModmFsdWU6IGFueSwgcnVsZTogUnVsZSk6IGJvb2xlYW47XHJcbiAgICBfZnVuYyh2YWx1ZTogYW55LCBydWxlOiBSdWxlKTogUHJvbWlzZTxib29sZWFuPjtcclxuICAgIF9nZXRWYWx1ZSh2YWx1ZTogc3RyaW5nKTogYW55O1xyXG59XHJcblxyXG5Db21wb25lbnQ8Rm9ybUl0ZW0+KHtcclxuICAgIGV4dGVybmFsQ2xhc3NlczogWydjdXN0b20tY2xhc3MnLCAnbGFiZWwtY2xhc3MnLCAnaW5wdXQtY2xhc3MnLCAnbXNnLWNsYXNzJ10sXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgbGFiZWw6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxhYmVsd2lkdGg6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ2F1dG8nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcm9wOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBydWxlczoge1xyXG4gICAgICAgICAgICB0eXBlOiBBcnJheSxcclxuICAgICAgICAgICAgdmFsdWU6IFtdLFxyXG4gICAgICAgICAgICBvcHRpb25hbFR5cGVzOiBbT2JqZWN0XVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVxdWlyZWQ6IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBlcnJNc2c6ICcnLFxyXG4gICAgICAgIGlzUmVxdWlyZWQ6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgY29uc3QgcnVsZXMgPSB0aGlzLmRhdGEucnVsZXM7XHJcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHJ1bGVzKSkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEucnVsZXMgPSBbcnVsZXNdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgaXNSZXF1aXJlZDogdGhpcy5kYXRhLnJlcXVpcmVkIHx8IHRoaXMuZGF0YS5ydWxlcy5zb21lKCh2OiBSdWxlKSA9PiAhIXYucmVxdWlyZWQpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgcmVsYXRpb25zOiB7XHJcbiAgICAgICAgJy4uL2Zvcm0vZm9ybSc6IHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhcmVudCcsXHJcbiAgICAgICAgICAgIGxpbmtlZCh0YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGEubGFiZWx3aWR0aCA9PT0gJ2F1dG8nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50TGFiZWxXaWR0aDogc3RyaW5nID0gdGFyZ2V0LmRhdGEubGFiZWx3aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXBhcmVudExhYmVsV2lkdGggfHwgcGFyZW50TGFiZWxXaWR0aCA9PT0gJ2F1dG8nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlU2VsZWN0b3JRdWVyeSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2VsZWN0KCcjbGFiZWwnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJvdW5kaW5nQ2xpZW50UmVjdChyZWN0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDkuI3kvJrmiafooYzjgILjgILjgIJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVjdC53aWR0aCA+IHRhcmdldC5kYXRhLmxhYmVsV2lkdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnNldERhdGEhKHsgbGFiZWxXaWR0aDogcmVjdC53aWR0aCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEhKHsgbGFiZWx3aWR0aDogdGhpcy5kYXRhLmxhYmVsV2lkdGggKyAncHgnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSEoeyBsYWJlbHdpZHRoOiBwYXJlbnRMYWJlbFdpZHRoIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgLy8g5qOA5rWL5YaF5a655piv5ZCm5pyJ5pWIXHJcbiAgICAgICAgYXN5bmMgdmFsaWQodmFsdWU6IGFueSk6IFByb21pc2U8dHJ1ZT4ge1xyXG4gICAgICAgICAgICBjb25zdCBydWxlczogUnVsZVtdID0gdGhpcy5kYXRhLnJ1bGVzO1xyXG5cclxuICAgICAgICAgICAgbGV0IGhhc1JxdWlyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBydWxlIG9mIHJ1bGVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocnVsZS5yZXF1aXJlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhc1JxdWlyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbGlkID0gdGhpcy5fcmVxdWlyZWQodmFsdWUsIHJ1bGUpXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5fbGVuKHZhbHVlLCBydWxlKVxyXG4gICAgICAgICAgICAgICAgICAgICYmIHRoaXMuX2V4ZWModmFsdWUsIHJ1bGUpXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgKGF3YWl0IHRoaXMuX2Z1bmModmFsdWUsIHJ1bGUpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHsgZXJyTXNnOiB0aGlzLmRhdGEuZXJyTXNnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWhhc1JxdWlyZWQgJiYgdGhpcy5kYXRhLnJlcXVpcmVkICYmICF0aGlzLl9yZXF1aXJlZCh2YWx1ZSwge30pKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoeyBlcnJNc2c6IHRoaXMuZGF0YS5lcnJNc2cgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHsgZXJyTXNnOiAnJyB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDmo4DmtYvlv4XpnIDmgKdcclxuICAgICAgICBfcmVxdWlyZWQodmFsdWU6IGFueSwgcnVsZTogUnVsZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAocnVsZS5yZXF1aXJlZCB8fCB0aGlzLmRhdGEucmVxdWlyZWQpXHJcbiAgICAgICAgICAgICAgICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIHx8IHR5cGVvZiB2YWx1ZSAhPT0gJ251bWJlcicgJiYgIU9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICB8fCB2YWx1ZSAhPT0gdmFsdWVcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuZXJyTXNnID0gcnVsZS5yZXF1aXJlZCAmJiBydWxlLm1lc3NhZ2UgPyBydWxlLm1lc3NhZ2UgOiBgJHt0aGlzLmRhdGEubGFiZWwgfHwgJ+W/heWhq+mhuSd95LiN6IO95Li656m6YDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDmo4DmtYvlgLzmiJblgLzplb/luqbnmoTojIPlm7RcclxuICAgICAgICBfbGVuKHZhbHVlOiBhbnksIHJ1bGU6IFJ1bGUpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgY29uc3QgbWluID0gcnVsZS5taW4gPT0gbnVsbCA/IC1OdW1iZXIuTUFYX1ZBTFVFIDogcnVsZS5taW47XHJcbiAgICAgICAgICAgIGNvbnN0IG1heCA9IHJ1bGUubWF4ID09IG51bGwgPyBOdW1iZXIuTUFYX1ZBTFVFIDogcnVsZS5tYXg7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB2OiBhbnkgPSB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInID8gdmFsdWUgOiBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoO1xyXG4gICAgICAgICAgICBjb25zdCBtYWluID0gYCR7dGhpcy5kYXRhLmxhYmVsfSR7dHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/ICfnmoTplb/luqYnIDogJyd9YDtcclxuICAgICAgICAgICAgaWYgKHYgPCBtaW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5lcnJNc2cgPSBydWxlLm1lc3NhZ2UgfHwgYCR7bWFpbn3kuI3og73lsI/kuo4ke21pbn1gO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh2ID4gbWF4KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuZXJyTXNnID0gcnVsZS5tZXNzYWdlIHx8IGAke21haW595LiN6IO95aSn5LqOJHttYXh9YDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDmoLnmja7mraPliJnmo4DmtYtcclxuICAgICAgICBfZXhlYyh2YWx1ZTogYW55LCBydWxlOiBSdWxlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPSBudWxsICYmIHZhbHVlICE9PSAnJyAmJiBydWxlLnJlZ2V4cCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXhwID0gbmV3IFJlZ0V4cChydWxlLnJlZ2V4cCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWV4cC50ZXN0KHZhbHVlICsgJycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLmVyck1zZyA9IHJ1bGUubWVzc2FnZSB8fCBgJHt0aGlzLmRhdGEubGFiZWx95LiN5ruh6Laz5q2j5YiZJHtydWxlLnJlZ2V4cH1gO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDkvb/nlKjmo4DmtYvlh73mlbBcclxuICAgICAgICBfZnVuYyh2YWx1ZTogYW55LCBydWxlOiBSdWxlKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJ1bGUuZnVuYykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZuID0gKHJlc3VsdDogc3RyaW5nIHwgYm9vbGVhbiB8IHZvaWQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuZXJyTXNnID0gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLmVyck1zZyA9IGAke3RoaXMuZGF0YS5sYWJlbH3ml6DmlYhgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IHJ1bGUuZnVuYyh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcyBpbnN0YW5jZW9mIFByb21pc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnRoZW4oZm4pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZuKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgb2JzZXJ2ZXJzOiB7XHJcbiAgICAgICAgcnVsZXModmFsOiBSdWxlW10gfCBSdWxlKSB7XHJcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWwpKSB7XHJcbiAgICAgICAgICAgICAgICB2YWwgPSBbdmFsXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ6IHRoaXMuZGF0YS5yZXF1aXJlZCB8fCB2YWwuc29tZSgodjogUnVsZSkgPT4gISF2LnJlcXVpcmVkKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=