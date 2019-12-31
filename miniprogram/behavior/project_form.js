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
    ready: function () {
        this.data.formEl = this.selectComponent('#form');
    },
    methods: {
        reset: function (_a) {
            var detail = _a.detail;
            this.setData({ form: detail });
        },
        mask: function (e) {
            this.setData({ hasMask: e.detail.visible });
        },
        onInput: function (e) {
            var _a;
            var name = e.target.id;
            this.setData((_a = {}, _a["form." + name] = this._parseValue(e.detail.value, name), _a));
            if (this.data.formEl) {
                this.data.formEl
                    .valid(name)
                    .catch(console.log);
            }
        },
        onSubmit: function () {
            return __awaiter(this, void 0, void 0, function () {
                var e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 4, , 5]);
                            if (!this.data.formEl) return [3, 2];
                            return [4, this.data.formEl.valid()];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2:
                            this.setData({ loading: true });
                            return [4, this._submit()];
                        case 3:
                            _a.sent();
                            return [3, 5];
                        case 4:
                            e_1 = _a.sent();
                            return [3, 5];
                        case 5:
                            this.setData({ loading: false });
                            return [2];
                    }
                });
            });
        },
        _submit: function () {
            console.log(this.data.form);
        },
        _parseValue: function (value) {
            return value;
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdF9mb3JtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvamVjdF9mb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkEsa0JBQWUsUUFBUSxDQUFjO0lBQ2pDLEtBQUs7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsS0FBSyxZQUFDLEVBQVU7Z0JBQVIsa0JBQU07WUFDVixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDbkMsQ0FBQztRQUNELElBQUksWUFBQyxDQUFZO1lBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDaEQsQ0FBQztRQUNELE9BQU8sWUFBQyxDQUFZOztZQUNoQixJQUFNLElBQUksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsT0FBUSxXQUFHLEdBQUMsVUFBUSxJQUFNLElBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBRyxDQUFDO1lBRTVFLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTtxQkFDWCxLQUFLLENBQUMsSUFBSSxDQUFDO3FCQUNYLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDM0I7UUFDTCxDQUFDO1FBQ0ssUUFBUTs7Ozs7OztpQ0FFRixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBaEIsY0FBZ0I7NEJBQ2hCLFdBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEVBQUE7OzRCQUE5QixTQUE4QixDQUFDOzs7NEJBR25DLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQzs0QkFDOUIsV0FBTSxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUE7OzRCQUFwQixTQUFvQixDQUFDOzs7Ozs7NEJBS3pCLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQzs7Ozs7U0FDbEM7UUFDRCxPQUFPO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLENBQUM7UUFDRCxXQUFXLFlBQUMsS0FBd0I7WUFDaEMsT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQztLQUNKO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOmhueebrumHjOWkp+mDqOWIhuihqOWNlemAmueUqOaWueazlVxyXG4gKi9cclxuaW1wb3J0IHsgRm9ybSB9IGZyb20gJy4uL2NvbXBvbmVudHMvZm9ybS9mb3JtJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvamVjdEZvcm1EYXRhIHtcclxuICAgIGZvcm1FbD86IEZvcm0gfCBudWxsO1xyXG4gICAgZm9ybTogSUFueU9iamVjdDtcclxuICAgIGhhc01hc2s6IGJvb2xlYW47XHJcbiAgICBsb2FkaW5nOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb2plY3RGb3JtIGV4dGVuZHMgV3hDb21wb25lbnQge1xyXG4gICAgZGF0YTogUHJvamVjdEZvcm1EYXRhO1xyXG4gICAgX3N1Ym1pdCgpOiBQcm9taXNlPHRydWU+IHwgdm9pZDtcclxuICAgIF9wYXJzZVZhbHVlKHZhbHVlOiBzdHJpbmcsIG5hbWU6IHN0cmluZyk6IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmVoYXZpb3I8UHJvamVjdEZvcm0+KHtcclxuICAgIHJlYWR5KCkge1xyXG4gICAgICAgIHRoaXMuZGF0YS5mb3JtRWwgPSB0aGlzLnNlbGVjdENvbXBvbmVudCEoJyNmb3JtJyk7XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHJlc2V0KHsgZGV0YWlsIH0pIHtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHsgZm9ybTogZGV0YWlsIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWFzayhlOiBCYXNlRXZlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHsgaGFzTWFzazogZS5kZXRhaWwudmlzaWJsZSB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uSW5wdXQoZTogQmFzZUV2ZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBlLnRhcmdldC5pZDtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhISh7IFtgZm9ybS4ke25hbWV9YF06IHRoaXMuX3BhcnNlVmFsdWUoZS5kZXRhaWwudmFsdWUsIG5hbWUpIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5mb3JtRWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5mb3JtRWxcclxuICAgICAgICAgICAgICAgICAgICAudmFsaWQobmFtZSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYyBvblN1Ym1pdCgpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuZm9ybUVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5kYXRhLmZvcm1FbC52YWxpZCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7bG9hZGluZzogdHJ1ZX0pO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5fc3VibWl0KCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtsb2FkaW5nOiBmYWxzZX0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgX3N1Ym1pdCgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5kYXRhLmZvcm0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgX3BhcnNlVmFsdWUodmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=