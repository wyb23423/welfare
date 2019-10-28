"use strict";
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
            var _this = this;
            if (this.data.formEl) {
                this.data.formEl.valid()
                    .then(function () { return _this._submit() || true; })
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdF9mb3JtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvamVjdF9mb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBZUEsa0JBQWUsUUFBUSxDQUFjO0lBQ2pDLEtBQUs7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsS0FBSyxZQUFDLEVBQVU7Z0JBQVIsa0JBQU07WUFDVixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDbkMsQ0FBQztRQUNELElBQUksWUFBQyxDQUFZO1lBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDaEQsQ0FBQztRQUNELE9BQU8sWUFBQyxDQUFZOztZQUNoQixJQUFNLElBQUksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsT0FBUSxXQUFHLEdBQUMsVUFBUSxJQUFNLElBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBRyxDQUFDO1lBRTVFLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTtxQkFDWCxLQUFLLENBQUMsSUFBSSxDQUFDO3FCQUNYLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDM0I7UUFDTCxDQUFDO1FBQ0QsUUFBUTtZQUFSLGlCQVFDO1lBUEcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO3FCQUNuQixJQUFJLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxJQUFJLEVBQXRCLENBQXNCLENBQUM7cUJBQ2xDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDM0I7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ2xCO1FBQ0wsQ0FBQztRQUNELE9BQU87WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsQ0FBQztRQUNELFdBQVcsWUFBQyxLQUFhO1lBQ3JCLE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7S0FDSjtDQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDpobnnm67ph4zlpKfpg6jliIbooajljZXpgJrnlKjmlrnms5VcclxuICovXHJcbmltcG9ydCB7IEZvcm0gfSBmcm9tICcuLi9jb21wb25lbnRzL2Zvcm0vZm9ybSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb2plY3RGb3JtIGV4dGVuZHMgV3hDb21wb25lbnQge1xyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGZvcm1FbD86IEZvcm0gfCBudWxsLFxyXG4gICAgICAgIGZvcm06IElBbnlPYmplY3QsXHJcbiAgICAgICAgaGFzTWFzazogYm9vbGVhblxyXG4gICAgfTtcclxuICAgIF9zdWJtaXQoKTogUHJvbWlzZTx0cnVlPiB8IHZvaWQ7XHJcbiAgICBfcGFyc2VWYWx1ZSh2YWx1ZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpOiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJlaGF2aW9yPFByb2plY3RGb3JtPih7XHJcbiAgICByZWFkeSgpIHtcclxuICAgICAgICB0aGlzLmRhdGEuZm9ybUVsID0gdGhpcy5zZWxlY3RDb21wb25lbnQhKCcjZm9ybScpO1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICByZXNldCh7IGRldGFpbCB9KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7IGZvcm06IGRldGFpbCB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1hc2soZTogQmFzZUV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7IGhhc01hc2s6IGUuZGV0YWlsLnZpc2libGUgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbklucHV0KGU6IEJhc2VFdmVudCkge1xyXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gZS50YXJnZXQuaWQ7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSEoeyBbYGZvcm0uJHtuYW1lfWBdOiB0aGlzLl9wYXJzZVZhbHVlKGUuZGV0YWlsLnZhbHVlLCBuYW1lKSB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuZm9ybUVsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuZm9ybUVsXHJcbiAgICAgICAgICAgICAgICAgICAgLnZhbGlkKG5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25TdWJtaXQoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuZm9ybUVsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuZm9ybUVsLnZhbGlkKClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLl9zdWJtaXQoKSB8fCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdWJtaXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgX3N1Ym1pdCgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5kYXRhLmZvcm0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgX3BhcnNlVmFsdWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19