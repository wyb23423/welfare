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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV0Esa0JBQWUsUUFBUSxDQUFnQjtJQUNuQyxVQUFVLEVBQUU7UUFDUixLQUFLLEVBQUU7WUFDSCxJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxFQUFFO1NBQ1o7UUFDRCxVQUFVLEVBQUU7WUFDUixJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxNQUFNO1NBQ2hCO1FBQ0QsS0FBSyxFQUFFO1lBQ0gsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsRUFBRTtZQUNULGFBQWEsRUFBRSxDQUFDLE1BQU0sQ0FBQztTQUMxQjtRQUNELFdBQVcsRUFBRTtZQUNULElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLEVBQUU7U0FDWjtRQUNELFFBQVEsRUFBRTtZQUNOLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDZjtRQUVELEtBQUssRUFBRTtZQUNILElBQUksRUFBRSxLQUFLO1lBQ1gsS0FBSyxFQUFFLEVBQUU7U0FDWjtRQUVELFFBQVEsRUFBRTtZQUNOLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDZjtLQUNKO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsTUFBTSxFQUFFLEVBQUU7UUFDVixRQUFRLEVBQUUsTUFBTTtLQUNuQjtJQUNELFFBQVE7UUFDSixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1QsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQU8sSUFBSyxPQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFaLENBQVksQ0FBQztTQUNwRixDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0QsT0FB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QUFFLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ1g7aUJBQ0o7cUJBQU07b0JBQ0gsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNqQjtZQUNMLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQztRQUNELFNBQVMsWUFBQyxLQUFhO1lBQ25CLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssTUFBTSxJQUFJLEtBQUssS0FBSyxFQUFFLEVBQUU7Z0JBQy9DLE9BQU8sQ0FBQyxLQUFLLENBQUM7YUFDakI7WUFFRCxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDO0tBQ0o7Q0FDSixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSdWxlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9ybS9mb3JtXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElucHV0QmVoYXZpb3IgZXh0ZW5kcyBXeENvbXBvbmVudCB7XHJcbiAgICB2YWxpZCh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogUHJvbWlzZTx0cnVlPjtcclxuICAgIF9yZXF1aXJlZCh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyLCBydWxlOiBSdWxlKTogYm9vbGVhbjtcclxuICAgIF9sZW4odmFsdWU6IHN0cmluZyB8IG51bWJlciwgcnVsZTogUnVsZSk6IGJvb2xlYW47XHJcbiAgICBfZXhlYyh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyLCBydWxlOiBSdWxlKTogYm9vbGVhbjtcclxuICAgIF9mdW5jKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIsIHJ1bGU6IFJ1bGUpOiBQcm9taXNlPGJvb2xlYW4+O1xyXG4gICAgX2dldFZhbHVlKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcgfCBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJlaGF2aW9yPElucHV0QmVoYXZpb3I+KHtcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBsYWJsZToge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGFiZWx3aWR0aDoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnYXV0bydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbHVlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6ICcnLFxyXG4gICAgICAgICAgICBvcHRpb25hbFR5cGVzOiBbTnVtYmVyXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRpc2FibGVkOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g5qOA5rWL6KeE5YiZXHJcbiAgICAgICAgcnVsZXM6IHtcclxuICAgICAgICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgICAgICAgIHZhbHVlOiBbXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g5piv5ZCm5b+F6aG7XHJcbiAgICAgICAgcmVxdWlyZWQ6IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBlcnJNc2c6ICcnLFxyXG4gICAgICAgIGN1cnJUeXBlOiAndGV4dCdcclxuICAgIH0sXHJcbiAgICBhdHRhY2hlZCgpIHtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBpc1JlcXVpcmVkOiB0aGlzLmRhdGEucmVxdWlyZWQgfHwgdGhpcy5kYXRhLnJ1bGVzLnNvbWUoKHY6IFJ1bGUpID0+ICEhdi5yZXF1aXJlZClcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgb25JbnB1dChlOiBCYXNlRXZlbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLl9nZXRWYWx1ZShlLmRldGFpbC52YWx1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMudmFsaWQodmFsdWUpLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2lucHV0JywgeyB2YWx1ZSB9LCB7fSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkNvbmZpcm0oZTogQmFzZUV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdjb25maXJtJywge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuX2dldFZhbHVlKGUuZGV0YWlsLnZhbHVlKVxyXG4gICAgICAgICAgICB9LCB7fSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDmo4DmtYvlhoXlrrnmmK/lkKbmnInmlYhcclxuICAgICAgICBhc3luYyB2YWxpZCh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogUHJvbWlzZTx0cnVlPiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVzOiBSdWxlW10gPSB0aGlzLmRhdGEucnVsZXM7XHJcblxyXG4gICAgICAgICAgICBsZXQgaGFzUnF1aXJlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJ1bGUgb2YgcnVsZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChydWxlLnJlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFzUnF1aXJlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsaWQgPSB0aGlzLl9yZXF1aXJlZCh2YWx1ZSwgcnVsZSlcclxuICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLl9sZW4odmFsdWUsIHJ1bGUpXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5fZXhlYyh2YWx1ZSwgcnVsZSlcclxuICAgICAgICAgICAgICAgICAgICAmJiAoYXdhaXQgdGhpcy5fZnVuYyh2YWx1ZSwgcnVsZSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoeyBlcnJNc2c6IHRoaXMuZGF0YS5lcnJNc2cgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghaGFzUnF1aXJlZCAmJiB0aGlzLmRhdGEucmVxdWlyZWQgJiYgIXRoaXMuX3JlcXVpcmVkKHZhbHVlLCB7fSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7IGVyck1zZzogdGhpcy5kYXRhLmVyck1zZyB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoeyBlcnJNc2c6ICcnIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOajgOa1i+W/hemcgOaAp1xyXG4gICAgICAgIF9yZXF1aXJlZCh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyLCBydWxlOiBSdWxlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIGlmICgocnVsZS5yZXF1aXJlZCB8fCB0aGlzLmRhdGEucmVxdWlyZWQpICYmICh2YWx1ZSA9PSBudWxsIHx8IHZhbHVlID09PSAnJykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5lcnJNc2cgPSBydWxlLnJlcXVpcmVkICYmIHJ1bGUubWVzc2FnZSA/IHJ1bGUubWVzc2FnZSA6IGAke3RoaXMuZGF0YS5sYWJsZX3kuI3og73kuLrnqbpgO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOajgOa1i+WAvOaIluWAvOmVv+W6pueahOiMg+WbtFxyXG4gICAgICAgIF9sZW4odmFsdWU6IHN0cmluZyB8IG51bWJlciwgcnVsZTogUnVsZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICBjb25zdCBtaW4gPSBydWxlLm1pbiA9PSBudWxsID8gLU51bWJlci5NQVhfVkFMVUUgOiBydWxlLm1pbjtcclxuICAgICAgICAgICAgY29uc3QgbWF4ID0gcnVsZS5tYXggPT0gbnVsbCA/IE51bWJlci5NQVhfVkFMVUUgOiBydWxlLm1heDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHY6IHN0cmluZyB8IG51bWJlciA9IHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgPyB2YWx1ZSA6IHZhbHVlLmxlbmd0aDtcclxuICAgICAgICAgICAgY29uc3QgbWFpbiA9IGAke3RoaXMuZGF0YS5sYWJsZX0ke3R5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyAn55qE6ZW/5bqmJyA6ICcnfWA7XHJcbiAgICAgICAgICAgIGlmICh2IDwgbWluKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuZXJyTXNnID0gcnVsZS5tZXNzYWdlIHx8IGAke21haW595LiN6IO95bCP5LqOJHttaW59YDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodiA+IG1heCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLmVyck1zZyA9IHJ1bGUubWVzc2FnZSB8fCBgJHttYWlufeS4jeiDveWkp+S6jiR7bWF4fWA7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g5qC55o2u5q2j5YiZ5qOA5rWLXHJcbiAgICAgICAgX2V4ZWModmFsdWU6IHN0cmluZyB8IG51bWJlciwgcnVsZTogUnVsZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZSAhPT0gJycgJiYgcnVsZS5yZWdleHApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGV4cCA9IG5ldyBSZWdFeHAocnVsZS5yZWdleHApO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFleHAudGVzdCh2YWx1ZSArICcnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5lcnJNc2cgPSBydWxlLm1lc3NhZ2UgfHwgYCR7dGhpcy5kYXRhLmxhYmxlfeS4jea7oei2s+ato+WImSR7cnVsZS5yZWdleHB9YDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g5L2/55So5qOA5rWL5Ye95pWwXHJcbiAgICAgICAgX2Z1bmModmFsdWU6IHN0cmluZyB8IG51bWJlciwgcnVsZTogUnVsZSk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChydWxlLmZ1bmMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmbiA9IChyZXN1bHQ6IHN0cmluZyB8IGJvb2xlYW4gfCB2b2lkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLmVyck1zZyA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5lcnJNc2cgPSBgJHt0aGlzLmRhdGEubGFibGV95peg5pWIYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IHJ1bGUuZnVuYyh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcyBpbnN0YW5jZW9mIFByb21pc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnRoZW4oZm4pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZuKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgX2dldFZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5jdXJyVHlwZSAhPT0gJ3RleHQnICYmIHZhbHVlICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICt2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSkiXX0=