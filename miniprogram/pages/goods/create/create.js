"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var project_form_1 = require("../../../behavior/project_form");
var http_1 = require("../../../utils/http");
Component({
    behaviors: [project_form_1.default],
    data: {
        form: {
            name: '',
            integral: '',
            credit: '',
            details: '',
            time: [],
            img: ''
        },
        timeRule: {
            min: 2,
            message: '兑换时间需选择两个时间点'
        }
    },
    methods: {
        _submit: function () {
            var _this = this;
            http_1.uploadFile({
                url: '/api/commodity',
                filePath: this.data.form.img,
                name: 'file',
                formData: __assign({}, this.data.form, { origination: this.data.form.time[0], finish: this.data.form.time[1] })
            })
                .then(function () { return wx.showToast({ title: '添加成功' }); })
                .then(function () { return _this.data.formEl && _this.data.formEl.reset(); })
                .catch(console.log);
        },
        _parseValue: function (value, name) {
            if (['credit', 'integral', 'size'].includes(name)) {
                return isNaN(+value) ? '' : +value;
            }
            return value;
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JlYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFHQSwrREFBaUU7QUFDakUsNENBQWlEO0FBRWpELFNBQVMsQ0FBQztJQUNOLFNBQVMsRUFBRSxDQUFDLHNCQUFtQixDQUFDO0lBQ2hDLElBQUksRUFBRTtRQUNGLElBQUksRUFBRTtZQUNGLElBQUksRUFBRSxFQUFFO1lBQ1IsUUFBUSxFQUFFLEVBQUU7WUFDWixNQUFNLEVBQUUsRUFBRTtZQUNWLE9BQU8sRUFBRSxFQUFFO1lBQ1gsSUFBSSxFQUFFLEVBQUU7WUFDUixHQUFHLEVBQUUsRUFBRTtTQUNWO1FBQ0QsUUFBUSxFQUFFO1lBQ04sR0FBRyxFQUFFLENBQUM7WUFDTixPQUFPLEVBQUUsY0FBYztTQUMxQjtLQUNKO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsT0FBTztZQUFQLGlCQWNDO1lBYkcsaUJBQVUsQ0FBQztnQkFDUCxHQUFHLEVBQUUsZ0JBQWdCO2dCQUNyQixRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRztnQkFDNUIsSUFBSSxFQUFFLE1BQU07Z0JBQ1osUUFBUSxlQUNELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUNqQixXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNuQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUNqQzthQUNKLENBQUM7aUJBQ0csSUFBSSxDQUFDLGNBQU0sT0FBQSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQS9CLENBQStCLENBQUM7aUJBQzNDLElBQUksQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEVBQTVDLENBQTRDLENBQUM7aUJBQ3hELEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUIsQ0FBQztRQUNELFdBQVcsWUFBQyxLQUFhLEVBQUUsSUFBWTtZQUNuQyxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQy9DLE9BQU8sS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFDdEM7WUFFRCxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDO0tBQ0o7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5ZWG5ZOB5LiK5p62XHJcbiAqL1xyXG5pbXBvcnQgUHJvamVjdEZvcm1CZWhhdmlvciBmcm9tICcuLi8uLi8uLi9iZWhhdmlvci9wcm9qZWN0X2Zvcm0nO1xyXG5pbXBvcnQgeyB1cGxvYWRGaWxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvaHR0cCc7XHJcblxyXG5Db21wb25lbnQoe1xyXG4gICAgYmVoYXZpb3JzOiBbUHJvamVjdEZvcm1CZWhhdmlvcl0sXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgZm9ybToge1xyXG4gICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgaW50ZWdyYWw6ICcnLFxyXG4gICAgICAgICAgICBjcmVkaXQ6ICcnLFxyXG4gICAgICAgICAgICBkZXRhaWxzOiAnJyxcclxuICAgICAgICAgICAgdGltZTogW10sXHJcbiAgICAgICAgICAgIGltZzogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRpbWVSdWxlOiB7XHJcbiAgICAgICAgICAgIG1pbjogMixcclxuICAgICAgICAgICAgbWVzc2FnZTogJ+WFkeaNouaXtumXtOmcgOmAieaLqeS4pOS4quaXtumXtOeCuSdcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIF9zdWJtaXQoKSB7XHJcbiAgICAgICAgICAgIHVwbG9hZEZpbGUoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL2FwaS9jb21tb2RpdHknLFxyXG4gICAgICAgICAgICAgICAgZmlsZVBhdGg6IHRoaXMuZGF0YS5mb3JtLmltZyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdmaWxlJyxcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5kYXRhLmZvcm0sXHJcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYXRpb246IHRoaXMuZGF0YS5mb3JtLnRpbWVbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgZmluaXNoOiB0aGlzLmRhdGEuZm9ybS50aW1lWzFdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB3eC5zaG93VG9hc3QoeyB0aXRsZTogJ+a3u+WKoOaIkOWKnycgfSkpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLmRhdGEuZm9ybUVsICYmIHRoaXMuZGF0YS5mb3JtRWwucmVzZXQoKSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBfcGFyc2VWYWx1ZSh2YWx1ZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgaWYgKFsnY3JlZGl0JywgJ2ludGVncmFsJywgJ3NpemUnXS5pbmNsdWRlcyhuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzTmFOKCt2YWx1ZSkgPyAnJyA6ICt2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==