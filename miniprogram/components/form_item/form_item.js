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
            if (value == null || value === '') {
                return true;
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybV9pdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZm9ybV9pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXQSxTQUFTLENBQVc7SUFDaEIsZUFBZSxFQUFFLENBQUMsY0FBYyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsV0FBVyxDQUFDO0lBQzVFLFVBQVUsRUFBRTtRQUNSLEtBQUssRUFBRTtZQUNILElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLEVBQUU7U0FDWjtRQUNELFVBQVUsRUFBRTtZQUNSLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLE1BQU07U0FDaEI7UUFDRCxJQUFJLEVBQUU7WUFDRixJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxFQUFFO1NBQ1o7UUFDRCxLQUFLLEVBQUU7WUFDSCxJQUFJLEVBQUUsS0FBSztZQUNYLEtBQUssRUFBRSxFQUFFO1lBQ1QsYUFBYSxFQUFFLENBQUMsTUFBTSxDQUFDO1NBQzFCO1FBQ0QsUUFBUSxFQUFFO1lBQ04sSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsS0FBSztTQUNmO0tBQ0o7SUFDRCxJQUFJLEVBQUU7UUFDRixNQUFNLEVBQUUsRUFBRTtRQUNWLFVBQVUsRUFBRSxLQUFLO0tBQ3BCO0lBQ0QsUUFBUTtRQUNKLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0I7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1QsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFD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LElBQUksQ0FBQyxVQUFDLENBQU8sSUFBSyxPQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFaLENBQVksQ0FBQzthQUN4RSxDQUFDLENBQUM7UUFDUCxDQUFDO0tBQ0o7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSdWxlIH0gZnJvbSAnLi4vZm9ybS9mb3JtJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRm9ybUl0ZW0gZXh0ZW5kcyBXeENvbXBvbmVudCB7XHJcbiAgICB2YWxpZCh2YWx1ZTogYW55KTogUHJvbWlzZTx0cnVlPjtcclxuICAgIF9yZXF1aXJlZCh2YWx1ZTogYW55LCBydWxlOiBSdWxlKTogYm9vbGVhbjtcclxuICAgIF9sZW4odmFsdWU6IGFueSwgcnVsZTogUnVsZSk6IGJvb2xlYW47XHJcbiAgICBfZXhlYyh2YWx1ZTogYW55LCBydWxlOiBSdWxlKTogYm9vbGVhbjtcclxuICAgIF9mdW5jKHZhbHVlOiBhbnksIHJ1bGU6IFJ1bGUpOiBQcm9taXNlPGJvb2xlYW4+O1xyXG4gICAgX2dldFZhbHVlKHZhbHVlOiBzdHJpbmcpOiBhbnk7XHJcbn1cclxuXHJcbkNvbXBvbmVudDxGb3JtSXRlbT4oe1xyXG4gICAgZXh0ZXJuYWxDbGFzc2VzOiBbJ2N1c3RvbS1jbGFzcycsICdsYWJlbC1jbGFzcycsICdpbnB1dC1jbGFzcycsICdtc2ctY2xhc3MnXSxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBsYWJlbDoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGFiZWx3aWR0aDoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnYXV0bydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHByb3A6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJ1bGVzOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEFycmF5LFxyXG4gICAgICAgICAgICB2YWx1ZTogW10sXHJcbiAgICAgICAgICAgIG9wdGlvbmFsVHlwZXM6IFtPYmplY3RdXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXF1aXJlZDoge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGVyck1zZzogJycsXHJcbiAgICAgICAgaXNSZXF1aXJlZDogZmFsc2VcclxuICAgIH0sXHJcbiAgICBhdHRhY2hlZCgpIHtcclxuICAgICAgICBjb25zdCBydWxlcyA9IHRoaXMuZGF0YS5ydWxlcztcclxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkocnVsZXMpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5ydWxlcyA9IFtydWxlc107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBpc1JlcXVpcmVkOiB0aGlzLmRhdGEucmVxdWlyZWQgfHwgdGhpcy5kYXRhLnJ1bGVzLnNvbWUoKHY6IFJ1bGUpID0+ICEhdi5yZXF1aXJlZClcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICByZWxhdGlvbnM6IHtcclxuICAgICAgICAnLi4vZm9ybS9mb3JtJzoge1xyXG4gICAgICAgICAgICB0eXBlOiAncGFyZW50JyxcclxuICAgICAgICAgICAgbGlua2VkKHRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5sYWJlbHdpZHRoID09PSAnYXV0bycpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnRMYWJlbFdpZHRoOiBzdHJpbmcgPSB0YXJnZXQuZGF0YS5sYWJlbHdpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghcGFyZW50TGFiZWxXaWR0aCB8fCBwYXJlbnRMYWJlbFdpZHRoID09PSAnYXV0bycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVTZWxlY3RvclF1ZXJ5KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZWxlY3QoJyNsYWJlbCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYm91bmRpbmdDbGllbnRSZWN0KHJlY3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOS4jeS8muaJp+ihjOOAguOAguOAglxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWN0LndpZHRoID4gdGFyZ2V0LmRhdGEubGFiZWxXaWR0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuc2V0RGF0YSEoeyBsYWJlbFdpZHRoOiByZWN0LndpZHRoIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSEoeyBsYWJlbHdpZHRoOiB0aGlzLmRhdGEubGFiZWxXaWR0aCArICdweCcgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhISh7IGxhYmVsd2lkdGg6IHBhcmVudExhYmVsV2lkdGggfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAvLyDmo4DmtYvlhoXlrrnmmK/lkKbmnInmlYhcclxuICAgICAgICBhc3luYyB2YWxpZCh2YWx1ZTogYW55KTogUHJvbWlzZTx0cnVlPiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVzOiBSdWxlW10gPSB0aGlzLmRhdGEucnVsZXM7XHJcblxyXG4gICAgICAgICAgICBsZXQgaGFzUnF1aXJlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJ1bGUgb2YgcnVsZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChydWxlLnJlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFzUnF1aXJlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsaWQgPSB0aGlzLl9yZXF1aXJlZCh2YWx1ZSwgcnVsZSlcclxuICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLl9sZW4odmFsdWUsIHJ1bGUpXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5fZXhlYyh2YWx1ZSwgcnVsZSlcclxuICAgICAgICAgICAgICAgICAgICAmJiAoYXdhaXQgdGhpcy5fZnVuYyh2YWx1ZSwgcnVsZSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoeyBlcnJNc2c6IHRoaXMuZGF0YS5lcnJNc2cgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghaGFzUnF1aXJlZCAmJiB0aGlzLmRhdGEucmVxdWlyZWQgJiYgIXRoaXMuX3JlcXVpcmVkKHZhbHVlLCB7fSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7IGVyck1zZzogdGhpcy5kYXRhLmVyck1zZyB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoeyBlcnJNc2c6ICcnIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOajgOa1i+W/hemcgOaAp1xyXG4gICAgICAgIF9yZXF1aXJlZCh2YWx1ZTogYW55LCBydWxlOiBSdWxlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIChydWxlLnJlcXVpcmVkIHx8IHRoaXMuZGF0YS5yZXF1aXJlZClcclxuICAgICAgICAgICAgICAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9PSBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgdHlwZW9mIHZhbHVlICE9PSAnbnVtYmVyJyAmJiAhT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgIHx8IHZhbHVlICE9PSB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5lcnJNc2cgPSBydWxlLnJlcXVpcmVkICYmIHJ1bGUubWVzc2FnZSA/IHJ1bGUubWVzc2FnZSA6IGAke3RoaXMuZGF0YS5sYWJlbCB8fCAn5b+F5aGr6aG5J33kuI3og73kuLrnqbpgO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOajgOa1i+WAvOaIluWAvOmVv+W6pueahOiMg+WbtFxyXG4gICAgICAgIF9sZW4odmFsdWU6IGFueSwgcnVsZTogUnVsZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCB8fCB2YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtaW4gPSBydWxlLm1pbiA9PSBudWxsID8gLU51bWJlci5NQVhfVkFMVUUgOiBydWxlLm1pbjtcclxuICAgICAgICAgICAgY29uc3QgbWF4ID0gcnVsZS5tYXggPT0gbnVsbCA/IE51bWJlci5NQVhfVkFMVUUgOiBydWxlLm1heDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHY6IGFueSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgPyB2YWx1ZSA6IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGg7XHJcbiAgICAgICAgICAgIGNvbnN0IG1haW4gPSBgJHt0aGlzLmRhdGEubGFiZWx9JHt0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gJ+eahOmVv+W6picgOiAnJ31gO1xyXG4gICAgICAgICAgICBpZiAodiA8IG1pbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLmVyck1zZyA9IHJ1bGUubWVzc2FnZSB8fCBgJHttYWlufeS4jeiDveWwj+S6jiR7bWlufWA7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHYgPiBtYXgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5lcnJNc2cgPSBydWxlLm1lc3NhZ2UgfHwgYCR7bWFpbn3kuI3og73lpKfkuo4ke21heH1gO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOagueaNruato+WImeajgOa1i1xyXG4gICAgICAgIF9leGVjKHZhbHVlOiBhbnksIHJ1bGU6IFJ1bGUpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlICE9IG51bGwgJiYgdmFsdWUgIT09ICcnICYmIHJ1bGUucmVnZXhwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBleHAgPSBuZXcgUmVnRXhwKHJ1bGUucmVnZXhwKTtcclxuICAgICAgICAgICAgICAgIGlmICghZXhwLnRlc3QodmFsdWUgKyAnJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuZXJyTXNnID0gcnVsZS5tZXNzYWdlIHx8IGAke3RoaXMuZGF0YS5sYWJlbH3kuI3mu6HotrPmraPliJkke3J1bGUucmVnZXhwfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOS9v+eUqOajgOa1i+WHveaVsFxyXG4gICAgICAgIF9mdW5jKHZhbHVlOiBhbnksIHJ1bGU6IFJ1bGUpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocnVsZS5mdW5jKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZm4gPSAocmVzdWx0OiBzdHJpbmcgfCBib29sZWFuIHwgdm9pZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5lcnJNc2cgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuZXJyTXNnID0gYCR7dGhpcy5kYXRhLmxhYmVsfeaXoOaViGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gcnVsZS5mdW5jKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzIGluc3RhbmNlb2YgUHJvbWlzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMudGhlbihmbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm4ocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvYnNlcnZlcnM6IHtcclxuICAgICAgICBydWxlcyh2YWw6IFJ1bGVbXSB8IFJ1bGUpIHtcclxuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbCkpIHtcclxuICAgICAgICAgICAgICAgIHZhbCA9IFt2YWxdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZDogdGhpcy5kYXRhLnJlcXVpcmVkIHx8IHZhbC5zb21lKCh2OiBSdWxlKSA9PiAhIXYucmVxdWlyZWQpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==