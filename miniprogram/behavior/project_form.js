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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdF9mb3JtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvamVjdF9mb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBY0Esa0JBQWUsUUFBUSxDQUFjO0lBQ2pDLEtBQUs7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsT0FBTyxZQUFDLENBQVk7O1lBQ2hCLElBQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxPQUFRLFdBQUcsR0FBQyxVQUFRLElBQU0sSUFBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFHLENBQUM7WUFFNUUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO3FCQUNYLEtBQUssQ0FBQyxJQUFJLENBQUM7cUJBQ1gsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUMzQjtRQUNMLENBQUM7UUFDRCxRQUFRO1lBQVIsaUJBUUM7WUFQRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7cUJBQ25CLElBQUksQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLElBQUksRUFBdEIsQ0FBc0IsQ0FBQztxQkFDbEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUMzQjtpQkFBTTtnQkFDSCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDbEI7UUFDTCxDQUFDO1FBQ0QsT0FBTztZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxDQUFDO1FBQ0QsV0FBVyxZQUFDLEtBQWE7WUFDckIsT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQztLQUNKO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOmhueebrumHjOWkp+mDqOWIhuihqOWNlemAmueUqOaWueazlVxyXG4gKi9cclxuaW1wb3J0IHsgRm9ybSB9IGZyb20gJy4uL2NvbXBvbmVudHMvZm9ybS9mb3JtJztcclxuXHJcbmludGVyZmFjZSBQcm9qZWN0Rm9ybSBleHRlbmRzIFd4Q29tcG9uZW50IHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBmb3JtRWw/OiBGb3JtIHwgbnVsbCxcclxuICAgICAgICBmb3JtOiBJQW55T2JqZWN0XHJcbiAgICB9O1xyXG4gICAgX3N1Ym1pdCgpOiBQcm9taXNlPHRydWU+IHwgdm9pZDtcclxuICAgIF9wYXJzZVZhbHVlKHZhbHVlOiBzdHJpbmcsIG5hbWU6IHN0cmluZyk6IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmVoYXZpb3I8UHJvamVjdEZvcm0+KHtcclxuICAgIHJlYWR5KCkge1xyXG4gICAgICAgIHRoaXMuZGF0YS5mb3JtRWwgPSB0aGlzLnNlbGVjdENvbXBvbmVudCEoJyNmb3JtJyk7XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIG9uSW5wdXQoZTogQmFzZUV2ZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBlLnRhcmdldC5pZDtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhISh7IFtgZm9ybS4ke25hbWV9YF06IHRoaXMuX3BhcnNlVmFsdWUoZS5kZXRhaWwudmFsdWUsIG5hbWUpIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5mb3JtRWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5mb3JtRWxcclxuICAgICAgICAgICAgICAgICAgICAudmFsaWQobmFtZSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvblN1Ym1pdCgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5mb3JtRWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5mb3JtRWwudmFsaWQoKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMuX3N1Ym1pdCgpIHx8IHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N1Ym1pdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBfc3VibWl0KCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGEuZm9ybSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBfcGFyc2VWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=