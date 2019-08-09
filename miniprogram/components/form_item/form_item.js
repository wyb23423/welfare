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
                    || typeof value !== 'number' && !Object.keys(value).length)) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybV9pdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZm9ybV9pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXQSxTQUFTLENBQVc7SUFDaEIsZUFBZSxFQUFFLENBQUMsY0FBYyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsV0FBVyxDQUFDO0lBQzVFLFVBQVUsRUFBRTtRQUNSLEtBQUssRUFBRTtZQUNILElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLEVBQUU7U0FDWjtRQUNELFVBQVUsRUFBRTtZQUNSLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLE1BQU07U0FDaEI7UUFDRCxJQUFJLEVBQUU7WUFDRixJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxFQUFFO1NBQ1o7UUFDRCxLQUFLLEVBQUU7WUFDSCxJQUFJLEVBQUUsS0FBSztZQUNYLEtBQUssRUFBRSxFQUFFO1lBQ1QsYUFBYSxFQUFFLENBQUMsTUFBTSxDQUFDO1NBQzFCO1FBQ0QsUUFBUSxFQUFFO1lBQ04sSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsS0FBSztTQUNmO0tBQ0o7SUFDRCxJQUFJLEVBQUU7UUFDRixNQUFNLEVBQUUsRUFBRTtRQUNWLFVBQVUsRUFBRSxLQUFLO0tBQ3BCO0lBQ0QsUUFBUTtRQUNKLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0I7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1QsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFD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O1FBQ1AsQ0FBQztLQUNKO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUnVsZSB9IGZyb20gXCIuLi9mb3JtL2Zvcm1cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRm9ybUl0ZW0gZXh0ZW5kcyBXeENvbXBvbmVudCB7XHJcbiAgICB2YWxpZCh2YWx1ZTogYW55KTogUHJvbWlzZTx0cnVlPjtcclxuICAgIF9yZXF1aXJlZCh2YWx1ZTogYW55LCBydWxlOiBSdWxlKTogYm9vbGVhbjtcclxuICAgIF9sZW4odmFsdWU6IGFueSwgcnVsZTogUnVsZSk6IGJvb2xlYW47XHJcbiAgICBfZXhlYyh2YWx1ZTogYW55LCBydWxlOiBSdWxlKTogYm9vbGVhbjtcclxuICAgIF9mdW5jKHZhbHVlOiBhbnksIHJ1bGU6IFJ1bGUpOiBQcm9taXNlPGJvb2xlYW4+O1xyXG4gICAgX2dldFZhbHVlKHZhbHVlOiBzdHJpbmcpOiBhbnk7XHJcbn1cclxuXHJcbkNvbXBvbmVudDxGb3JtSXRlbT4oe1xyXG4gICAgZXh0ZXJuYWxDbGFzc2VzOiBbJ2N1c3RvbS1jbGFzcycsICdsYWJlbC1jbGFzcycsICdpbnB1dC1jbGFzcycsICdtc2ctY2xhc3MnXSxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBsYWJlbDoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGFiZWx3aWR0aDoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnYXV0bydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHByb3A6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJ1bGVzOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEFycmF5LFxyXG4gICAgICAgICAgICB2YWx1ZTogW10sXHJcbiAgICAgICAgICAgIG9wdGlvbmFsVHlwZXM6IFtPYmplY3RdXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXF1aXJlZDoge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGVyck1zZzogJycsXHJcbiAgICAgICAgaXNSZXF1aXJlZDogZmFsc2VcclxuICAgIH0sXHJcbiAgICBhdHRhY2hlZCgpIHtcclxuICAgICAgICBjb25zdCBydWxlcyA9IHRoaXMuZGF0YS5ydWxlcztcclxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkocnVsZXMpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5ydWxlcyA9IFtydWxlc107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBpc1JlcXVpcmVkOiB0aGlzLmRhdGEucmVxdWlyZWQgfHwgdGhpcy5kYXRhLnJ1bGVzLnNvbWUoKHY6IFJ1bGUpID0+ICEhdi5yZXF1aXJlZClcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICByZWxhdGlvbnM6IHtcclxuICAgICAgICAnLi4vZm9ybS9mb3JtJzoge1xyXG4gICAgICAgICAgICB0eXBlOiAncGFyZW50JyxcclxuICAgICAgICAgICAgbGlua2VkKHRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5sYWJlbHdpZHRoICE9PSAnYXV0bycpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnRMYWJlbFdpZHRoOiBzdHJpbmcgPSB0YXJnZXQuZGF0YS5sYWJlbHdpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnRMYWJlbFdpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnRMYWJlbFdpZHRoID09PSAnYXV0bycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlU2VsZWN0b3JRdWVyeSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNlbGVjdCgnI2xhYmVsJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYm91bmRpbmdDbGllbnRSZWN0KHJlY3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVjdC53aWR0aCA+IHRhcmdldC5kYXRhLmxhYmVsV2lkdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5zZXREYXRhISh7IGxhYmVsV2lkdGg6IHJlY3Qud2lkdGggfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEhKHsgbGFiZWx3aWR0aDogdGhpcy5kYXRhLmxhYmVsV2lkdGggKyAncHgnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEhKHsgbGFiZWx3aWR0aDogcGFyZW50TGFiZWxXaWR0aCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIC8vIOajgOa1i+WGheWuueaYr+WQpuacieaViFxyXG4gICAgICAgIGFzeW5jIHZhbGlkKHZhbHVlOiBhbnkpOiBQcm9taXNlPHRydWU+IHtcclxuICAgICAgICAgICAgY29uc3QgcnVsZXM6IFJ1bGVbXSA9IHRoaXMuZGF0YS5ydWxlcztcclxuXHJcbiAgICAgICAgICAgIGxldCBoYXNScXVpcmVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgcnVsZSBvZiBydWxlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJ1bGUucmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBoYXNScXVpcmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWxpZCA9IHRoaXMuX3JlcXVpcmVkKHZhbHVlLCBydWxlKVxyXG4gICAgICAgICAgICAgICAgICAgICYmIHRoaXMuX2xlbih2YWx1ZSwgcnVsZSlcclxuICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLl9leGVjKHZhbHVlLCBydWxlKVxyXG4gICAgICAgICAgICAgICAgICAgICYmIChhd2FpdCB0aGlzLl9mdW5jKHZhbHVlLCBydWxlKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF2YWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7IGVyck1zZzogdGhpcy5kYXRhLmVyck1zZyB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFoYXNScXVpcmVkICYmIHRoaXMuZGF0YS5yZXF1aXJlZCAmJiAhdGhpcy5fcmVxdWlyZWQodmFsdWUsIHt9KSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHsgZXJyTXNnOiB0aGlzLmRhdGEuZXJyTXNnIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7IGVyck1zZzogJycgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g5qOA5rWL5b+F6ZyA5oCnXHJcbiAgICAgICAgX3JlcXVpcmVkKHZhbHVlOiBhbnksIHJ1bGU6IFJ1bGUpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgKHJ1bGUucmVxdWlyZWQgfHwgdGhpcy5kYXRhLnJlcXVpcmVkKVxyXG4gICAgICAgICAgICAgICAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID09IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB8fCB0eXBlb2YgdmFsdWUgIT09ICdudW1iZXInICYmICFPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLmVyck1zZyA9IHJ1bGUucmVxdWlyZWQgJiYgcnVsZS5tZXNzYWdlID8gcnVsZS5tZXNzYWdlIDogYCR7dGhpcy5kYXRhLmxhYmVsIHx8ICflv4XloavpobknfeS4jeiDveS4uuepumA7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g5qOA5rWL5YC85oiW5YC86ZW/5bqm55qE6IyD5Zu0XHJcbiAgICAgICAgX2xlbih2YWx1ZTogYW55LCBydWxlOiBSdWxlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1pbiA9IHJ1bGUubWluID09IG51bGwgPyAtTnVtYmVyLk1BWF9WQUxVRSA6IHJ1bGUubWluO1xyXG4gICAgICAgICAgICBjb25zdCBtYXggPSBydWxlLm1heCA9PSBudWxsID8gTnVtYmVyLk1BWF9WQUxVRSA6IHJ1bGUubWF4O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdjogYW55ID0gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyA/IHZhbHVlIDogT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aDtcclxuICAgICAgICAgICAgY29uc3QgbWFpbiA9IGAke3RoaXMuZGF0YS5sYWJlbH0ke3R5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyAn55qE6ZW/5bqmJyA6ICcnfWA7XHJcbiAgICAgICAgICAgIGlmICh2IDwgbWluKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuZXJyTXNnID0gcnVsZS5tZXNzYWdlIHx8IGAke21haW595LiN6IO95bCP5LqOJHttaW59YDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodiA+IG1heCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLmVyck1zZyA9IHJ1bGUubWVzc2FnZSB8fCBgJHttYWlufeS4jeiDveWkp+S6jiR7bWF4fWA7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g5qC55o2u5q2j5YiZ5qOA5rWLXHJcbiAgICAgICAgX2V4ZWModmFsdWU6IGFueSwgcnVsZTogUnVsZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZSAhPT0gJycgJiYgcnVsZS5yZWdleHApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGV4cCA9IG5ldyBSZWdFeHAocnVsZS5yZWdleHApO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFleHAudGVzdCh2YWx1ZSArICcnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5lcnJNc2cgPSBydWxlLm1lc3NhZ2UgfHwgYCR7dGhpcy5kYXRhLmxhYmVsfeS4jea7oei2s+ato+WImSR7cnVsZS5yZWdleHB9YDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g5L2/55So5qOA5rWL5Ye95pWwXHJcbiAgICAgICAgX2Z1bmModmFsdWU6IGFueSwgcnVsZTogUnVsZSk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChydWxlLmZ1bmMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmbiA9IChyZXN1bHQ6IHN0cmluZyB8IGJvb2xlYW4gfCB2b2lkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLmVyck1zZyA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5lcnJNc2cgPSBgJHt0aGlzLmRhdGEubGFiZWx95peg5pWIYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IHJ1bGUuZnVuYyh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcyBpbnN0YW5jZW9mIFByb21pc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnRoZW4oZm4pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZuKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvYnNlcnZlcnM6IHtcclxuICAgICAgICBydWxlcyh2YWw6IFJ1bGVbXSB8IFJ1bGUpIHtcclxuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbCkpIHtcclxuICAgICAgICAgICAgICAgIHZhbCA9IFt2YWxdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZDogdGhpcy5kYXRhLnJlcXVpcmVkIHx8IHZhbC5zb21lKCh2OiBSdWxlKSA9PiAhIXYucmVxdWlyZWQpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==