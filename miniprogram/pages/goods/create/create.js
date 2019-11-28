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
            console.log(this.data.form.details);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JlYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFHQSwrREFBaUU7QUFDakUsNENBQWlEO0FBRWpELFNBQVMsQ0FBQztJQUNOLFNBQVMsRUFBRSxDQUFDLHNCQUFtQixDQUFDO0lBQ2hDLElBQUksRUFBRTtRQUNGLElBQUksRUFBRTtZQUNGLElBQUksRUFBRSxFQUFFO1lBQ1IsUUFBUSxFQUFFLEVBQUU7WUFDWixNQUFNLEVBQUUsRUFBRTtZQUNWLE9BQU8sRUFBRSxFQUFFO1lBQ1gsSUFBSSxFQUFFLEVBQUU7WUFDUixHQUFHLEVBQUUsRUFBRTtTQUNWO1FBQ0QsUUFBUSxFQUFFO1lBQ04sR0FBRyxFQUFFLENBQUM7WUFDTixPQUFPLEVBQUUsY0FBYztTQUMxQjtLQUNKO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsT0FBTztZQUFQLGlCQWVDO1lBZEcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNwQyxpQkFBVSxDQUFDO2dCQUNQLEdBQUcsRUFBRSxnQkFBZ0I7Z0JBQ3JCLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHO2dCQUM1QixJQUFJLEVBQUUsTUFBTTtnQkFDWixRQUFRLGVBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQ2pCLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ25DLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQ2pDO2FBQ0osQ0FBQztpQkFDRyxJQUFJLENBQUMsY0FBTSxPQUFBLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQztpQkFDM0MsSUFBSSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsRUFBNUMsQ0FBNEMsQ0FBQztpQkFDeEQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QixDQUFDO1FBQ0QsV0FBVyxZQUFDLEtBQWEsRUFBRSxJQUFZO1lBQ25DLElBQUksQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDL0MsT0FBTyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUN0QztZQUVELE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7S0FDSjtDQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDllYblk4HkuIrmnrZcclxuICovXHJcbmltcG9ydCBQcm9qZWN0Rm9ybUJlaGF2aW9yIGZyb20gJy4uLy4uLy4uL2JlaGF2aW9yL3Byb2plY3RfZm9ybSc7XHJcbmltcG9ydCB7IHVwbG9hZEZpbGUgfSBmcm9tICcuLi8uLi8uLi91dGlscy9odHRwJztcclxuXHJcbkNvbXBvbmVudCh7XHJcbiAgICBiZWhhdmlvcnM6IFtQcm9qZWN0Rm9ybUJlaGF2aW9yXSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBmb3JtOiB7XHJcbiAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICBpbnRlZ3JhbDogJycsXHJcbiAgICAgICAgICAgIGNyZWRpdDogJycsXHJcbiAgICAgICAgICAgIGRldGFpbHM6ICcnLFxyXG4gICAgICAgICAgICB0aW1lOiBbXSxcclxuICAgICAgICAgICAgaW1nOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGltZVJ1bGU6IHtcclxuICAgICAgICAgICAgbWluOiAyLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiAn5YWR5o2i5pe26Ze06ZyA6YCJ5oup5Lik5Liq5pe26Ze054K5J1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgX3N1Ym1pdCgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5kYXRhLmZvcm0uZGV0YWlscyk7XHJcbiAgICAgICAgICAgIHVwbG9hZEZpbGUoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL2FwaS9jb21tb2RpdHknLFxyXG4gICAgICAgICAgICAgICAgZmlsZVBhdGg6IHRoaXMuZGF0YS5mb3JtLmltZyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdmaWxlJyxcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5kYXRhLmZvcm0sXHJcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYXRpb246IHRoaXMuZGF0YS5mb3JtLnRpbWVbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgZmluaXNoOiB0aGlzLmRhdGEuZm9ybS50aW1lWzFdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB3eC5zaG93VG9hc3QoeyB0aXRsZTogJ+a3u+WKoOaIkOWKnycgfSkpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLmRhdGEuZm9ybUVsICYmIHRoaXMuZGF0YS5mb3JtRWwucmVzZXQoKSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBfcGFyc2VWYWx1ZSh2YWx1ZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgaWYgKFsnY3JlZGl0JywgJ2ludGVncmFsJywgJ3NpemUnXS5pbmNsdWRlcyhuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzTmFOKCt2YWx1ZSkgPyAnJyA6ICt2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==