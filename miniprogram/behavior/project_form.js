"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Behavior({
    ready: function () {
        this.data.formEl = this.selectComponent('#form');
    },
    methods: {
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
            var _this = this;
            if (this.data.formEl) {
                this.data.formEl.valid()
                    .then(function () { return _this._submit(); })
                    .catch(console.log);
            }
            else {
                this._submit();
            }
        },
        _submit: function () {
            console.log(this.data.form);
        },
        _parseValue: function (value) {
            return value;
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdF9mb3JtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvamVjdF9mb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBY0Esa0JBQWUsUUFBUSxDQUFjO0lBQ2pDLEtBQUs7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsT0FBTyxZQUFDLENBQVk7O1lBQ2hCLElBQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxPQUFRLFdBQUcsR0FBQyxVQUFRLElBQU0sSUFBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFHLENBQUM7WUFFNUUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO3FCQUNYLEtBQUssQ0FBQyxJQUFJLENBQUM7cUJBQ1gsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQTthQUMxQjtRQUNMLENBQUM7UUFDRCxRQUFRO1lBQVIsaUJBUUM7WUFQRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7cUJBQ25CLElBQUksQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sRUFBRSxFQUFkLENBQWMsQ0FBQztxQkFDMUIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQTthQUMxQjtpQkFBTTtnQkFDSCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDbEI7UUFDTCxDQUFDO1FBQ0QsT0FBTztZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxDQUFDO1FBQ0QsV0FBVyxZQUFDLEtBQWE7WUFDckIsT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQztLQUNKO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOmhueebrumHjOWkp+mDqOWIhuihqOWNlemAmueUqOaWueazlVxyXG4gKi9cclxuaW1wb3J0IHsgRm9ybSB9IGZyb20gXCIuLi9jb21wb25lbnRzL2Zvcm0vZm9ybVwiO1xyXG5cclxuaW50ZXJmYWNlIFByb2plY3RGb3JtIGV4dGVuZHMgV3hDb21wb25lbnQge1xyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGZvcm1FbD86IEZvcm0gfCBudWxsLFxyXG4gICAgICAgIGZvcm06IElBbnlPYmplY3RcclxuICAgIH0sXHJcbiAgICBfc3VibWl0KCk6IHZvaWQ7XHJcbiAgICBfcGFyc2VWYWx1ZSh2YWx1ZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpOiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJlaGF2aW9yPFByb2plY3RGb3JtPih7XHJcbiAgICByZWFkeSgpIHtcclxuICAgICAgICB0aGlzLmRhdGEuZm9ybUVsID0gdGhpcy5zZWxlY3RDb21wb25lbnQhKCcjZm9ybScpO1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBvbklucHV0KGU6IEJhc2VFdmVudCkge1xyXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gZS50YXJnZXQuaWQ7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSEoeyBbYGZvcm0uJHtuYW1lfWBdOiB0aGlzLl9wYXJzZVZhbHVlKGUuZGV0YWlsLnZhbHVlLCBuYW1lKSB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuZm9ybUVsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuZm9ybUVsXHJcbiAgICAgICAgICAgICAgICAgICAgLnZhbGlkKG5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvblN1Ym1pdCgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5mb3JtRWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5mb3JtRWwudmFsaWQoKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMuX3N1Ym1pdCgpKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZylcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N1Ym1pdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBfc3VibWl0KCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGEuZm9ybSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBfcGFyc2VWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=