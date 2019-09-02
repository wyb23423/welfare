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
            intro: '',
            details: '',
            size: '',
            time: [],
            location: '',
            img: ''
        },
        timeRule: {
            min: 2,
            message: '活动时间需选择两个时间点'
        }
    },
    methods: {
        _submit: function () {
            var _this = this;
            http_1.uploadFile({
                url: '/api/activity',
                filePath: this.data.from.img,
                name: 'file',
                formData: __assign({}, this.data.form, { origination: this.data.form.time[0], finish: this.data.form.time[1] })
            })
                .then(function () { return wx.showToast({ title: '添加成功' }); })
                .then(function () { return _this.data.formEl && _this.data.formEl.reset(); })
                .catch(console.log);
        },
        _parseValue: function (value, name) {
            if (name === 'size') {
                return isNaN(+value) ? '' : +value;
            }
            return value;
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JlYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFHQSwrREFBaUU7QUFDakUsNENBQWlEO0FBRWpELFNBQVMsQ0FBQztJQUNOLFNBQVMsRUFBRSxDQUFDLHNCQUFtQixDQUFDO0lBQ2hDLElBQUksRUFBRTtRQUNGLElBQUksRUFBRTtZQUNGLElBQUksRUFBRSxFQUFFO1lBQ1IsS0FBSyxFQUFFLEVBQUU7WUFDVCxPQUFPLEVBQUUsRUFBRTtZQUNYLElBQUksRUFBRSxFQUFFO1lBQ1IsSUFBSSxFQUFFLEVBQUU7WUFDUixRQUFRLEVBQUUsRUFBRTtZQUNaLEdBQUcsRUFBRSxFQUFFO1NBQ1Y7UUFDRCxRQUFRLEVBQUU7WUFDTixHQUFHLEVBQUUsQ0FBQztZQUNOLE9BQU8sRUFBRSxjQUFjO1NBQzFCO0tBQ0o7SUFDRCxPQUFPLEVBQUU7UUFDTCxPQUFPO1lBQVAsaUJBY0M7WUFiRyxpQkFBVSxDQUFDO2dCQUNQLEdBQUcsRUFBRSxlQUFlO2dCQUNwQixRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRztnQkFDNUIsSUFBSSxFQUFFLE1BQU07Z0JBQ1osUUFBUSxlQUNELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUNqQixXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNuQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUNqQzthQUNKLENBQUM7aUJBQ0csSUFBSSxDQUFDLGNBQU0sT0FBQSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQS9CLENBQStCLENBQUM7aUJBQzNDLElBQUksQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEVBQTVDLENBQTRDLENBQUM7aUJBQ3hELEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUIsQ0FBQztRQUNELFdBQVcsWUFBQyxLQUFhLEVBQUUsSUFBWTtZQUNuQyxJQUFJLElBQUksS0FBSyxNQUFNLEVBQUU7Z0JBQ2pCLE9BQU8sS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFDdEM7WUFFRCxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDO0tBQ0o7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5Yib5bu65rS75YqoXHJcbiAqL1xyXG5pbXBvcnQgUHJvamVjdEZvcm1CZWhhdmlvciBmcm9tICcuLi8uLi8uLi9iZWhhdmlvci9wcm9qZWN0X2Zvcm0nO1xyXG5pbXBvcnQgeyB1cGxvYWRGaWxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvaHR0cCc7XHJcblxyXG5Db21wb25lbnQoe1xyXG4gICAgYmVoYXZpb3JzOiBbUHJvamVjdEZvcm1CZWhhdmlvcl0sXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgZm9ybToge1xyXG4gICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgaW50cm86ICcnLFxyXG4gICAgICAgICAgICBkZXRhaWxzOiAnJyxcclxuICAgICAgICAgICAgc2l6ZTogJycsXHJcbiAgICAgICAgICAgIHRpbWU6IFtdLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXHJcbiAgICAgICAgICAgIGltZzogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRpbWVSdWxlOiB7XHJcbiAgICAgICAgICAgIG1pbjogMixcclxuICAgICAgICAgICAgbWVzc2FnZTogJ+a0u+WKqOaXtumXtOmcgOmAieaLqeS4pOS4quaXtumXtOeCuSdcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIF9zdWJtaXQoKSB7XHJcbiAgICAgICAgICAgIHVwbG9hZEZpbGUoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL2FwaS9hY3Rpdml0eScsXHJcbiAgICAgICAgICAgICAgICBmaWxlUGF0aDogdGhpcy5kYXRhLmZyb20uaW1nLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2ZpbGUnLFxyXG4gICAgICAgICAgICAgICAgZm9ybURhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLmRhdGEuZm9ybSxcclxuICAgICAgICAgICAgICAgICAgICBvcmlnaW5hdGlvbjogdGhpcy5kYXRhLmZvcm0udGltZVswXSxcclxuICAgICAgICAgICAgICAgICAgICBmaW5pc2g6IHRoaXMuZGF0YS5mb3JtLnRpbWVbMV1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHd4LnNob3dUb2FzdCh7IHRpdGxlOiAn5re75Yqg5oiQ5YqfJyB9KSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMuZGF0YS5mb3JtRWwgJiYgdGhpcy5kYXRhLmZvcm1FbC5yZXNldCgpKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIF9wYXJzZVZhbHVlKHZhbHVlOiBzdHJpbmcsIG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgICAgICBpZiAobmFtZSA9PT0gJ3NpemUnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNOYU4oK3ZhbHVlKSA/ICcnIDogK3ZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19