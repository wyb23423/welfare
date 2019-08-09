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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdF9mb3JtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvamVjdF9mb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBY0Esa0JBQWUsUUFBUSxDQUFjO0lBQ2pDLEtBQUs7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsT0FBTyxZQUFDLENBQVk7O1lBQ2hCLElBQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxPQUFRLFdBQUcsR0FBQyxVQUFRLElBQU0sSUFBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFHLENBQUM7WUFFNUUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO3FCQUNYLEtBQUssQ0FBQyxJQUFJLENBQUM7cUJBQ1gsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQTthQUMxQjtRQUNMLENBQUM7UUFDRCxRQUFRO1lBQVIsaUJBUUM7WUFQRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7cUJBQ25CLElBQUksQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLElBQUksRUFBdEIsQ0FBc0IsQ0FBQztxQkFDbEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQTthQUMxQjtpQkFBTTtnQkFDSCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDbEI7UUFDTCxDQUFDO1FBQ0QsT0FBTztZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxDQUFDO1FBQ0QsV0FBVyxZQUFDLEtBQWE7WUFDckIsT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQztLQUNKO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOmhueebrumHjOWkp+mDqOWIhuihqOWNlemAmueUqOaWueazlVxyXG4gKi9cclxuaW1wb3J0IHsgRm9ybSB9IGZyb20gXCIuLi9jb21wb25lbnRzL2Zvcm0vZm9ybVwiO1xyXG5cclxuaW50ZXJmYWNlIFByb2plY3RGb3JtIGV4dGVuZHMgV3hDb21wb25lbnQge1xyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGZvcm1FbD86IEZvcm0gfCBudWxsLFxyXG4gICAgICAgIGZvcm06IElBbnlPYmplY3RcclxuICAgIH0sXHJcbiAgICBfc3VibWl0KCk6IFByb21pc2U8dHJ1ZT4gfCB2b2lkO1xyXG4gICAgX3BhcnNlVmFsdWUodmFsdWU6IHN0cmluZywgbmFtZTogc3RyaW5nKTogYW55O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCZWhhdmlvcjxQcm9qZWN0Rm9ybT4oe1xyXG4gICAgcmVhZHkoKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhLmZvcm1FbCA9IHRoaXMuc2VsZWN0Q29tcG9uZW50ISgnI2Zvcm0nKTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgb25JbnB1dChlOiBCYXNlRXZlbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGUudGFyZ2V0LmlkO1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEhKHsgW2Bmb3JtLiR7bmFtZX1gXTogdGhpcy5fcGFyc2VWYWx1ZShlLmRldGFpbC52YWx1ZSwgbmFtZSkgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLmZvcm1FbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLmZvcm1FbFxyXG4gICAgICAgICAgICAgICAgICAgIC52YWxpZChuYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25TdWJtaXQoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuZm9ybUVsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuZm9ybUVsLnZhbGlkKClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLl9zdWJtaXQoKSB8fCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZylcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N1Ym1pdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBfc3VibWl0KCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGEuZm9ybSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBfcGFyc2VWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=