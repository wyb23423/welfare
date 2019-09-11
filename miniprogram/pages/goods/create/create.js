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
            if (name === 'credit' || name === 'integral') {
                return isNaN(+value) ? '' : +value;
            }
            return value;
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JlYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFHQSwrREFBaUU7QUFDakUsNENBQWlEO0FBRWpELFNBQVMsQ0FBQztJQUNOLFNBQVMsRUFBRSxDQUFDLHNCQUFtQixDQUFDO0lBQ2hDLElBQUksRUFBRTtRQUNGLElBQUksRUFBRTtZQUNGLElBQUksRUFBRSxFQUFFO1lBQ1IsUUFBUSxFQUFFLEVBQUU7WUFDWixNQUFNLEVBQUUsRUFBRTtZQUNWLE9BQU8sRUFBRSxFQUFFO1lBQ1gsSUFBSSxFQUFFLEVBQUU7WUFDUixHQUFHLEVBQUUsRUFBRTtTQUNWO1FBQ0QsUUFBUSxFQUFFO1lBQ04sR0FBRyxFQUFFLENBQUM7WUFDTixPQUFPLEVBQUUsY0FBYztTQUMxQjtLQUNKO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsT0FBTztZQUFQLGlCQWNDO1lBYkcsaUJBQVUsQ0FBQztnQkFDUCxHQUFHLEVBQUUsZ0JBQWdCO2dCQUNyQixRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRztnQkFDNUIsSUFBSSxFQUFFLE1BQU07Z0JBQ1osUUFBUSxlQUNELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUNqQixXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNuQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUNqQzthQUNKLENBQUM7aUJBQ0csSUFBSSxDQUFDLGNBQU0sT0FBQSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQS9CLENBQStCLENBQUM7aUJBQzNDLElBQUksQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEVBQTVDLENBQTRDLENBQUM7aUJBQ3hELEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUIsQ0FBQztRQUNELFdBQVcsWUFBQyxLQUFhLEVBQUUsSUFBWTtZQUNuQyxJQUFJLElBQUksS0FBSyxRQUFRLElBQUksSUFBSSxLQUFLLFVBQVUsRUFBRTtnQkFDMUMsT0FBTyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUN0QztZQUVELE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7S0FDSjtDQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDllYblk4HkuIrmnrZcclxuICovXHJcbmltcG9ydCBQcm9qZWN0Rm9ybUJlaGF2aW9yIGZyb20gJy4uLy4uLy4uL2JlaGF2aW9yL3Byb2plY3RfZm9ybSc7XHJcbmltcG9ydCB7IHVwbG9hZEZpbGUgfSBmcm9tICcuLi8uLi8uLi91dGlscy9odHRwJztcclxuXHJcbkNvbXBvbmVudCh7XHJcbiAgICBiZWhhdmlvcnM6IFtQcm9qZWN0Rm9ybUJlaGF2aW9yXSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBmb3JtOiB7XHJcbiAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICBpbnRlZ3JhbDogJycsXHJcbiAgICAgICAgICAgIGNyZWRpdDogJycsXHJcbiAgICAgICAgICAgIGRldGFpbHM6ICcnLFxyXG4gICAgICAgICAgICB0aW1lOiBbXSxcclxuICAgICAgICAgICAgaW1nOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGltZVJ1bGU6IHtcclxuICAgICAgICAgICAgbWluOiAyLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiAn5YWR5o2i5pe26Ze06ZyA6YCJ5oup5Lik5Liq5pe26Ze054K5J1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgX3N1Ym1pdCgpIHtcclxuICAgICAgICAgICAgdXBsb2FkRmlsZSh7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvYXBpL2NvbW1vZGl0eScsXHJcbiAgICAgICAgICAgICAgICBmaWxlUGF0aDogdGhpcy5kYXRhLmZvcm0uaW1nLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2ZpbGUnLFxyXG4gICAgICAgICAgICAgICAgZm9ybURhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLmRhdGEuZm9ybSxcclxuICAgICAgICAgICAgICAgICAgICBvcmlnaW5hdGlvbjogdGhpcy5kYXRhLmZvcm0udGltZVswXSxcclxuICAgICAgICAgICAgICAgICAgICBmaW5pc2g6IHRoaXMuZGF0YS5mb3JtLnRpbWVbMV1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHd4LnNob3dUb2FzdCh7IHRpdGxlOiAn5re75Yqg5oiQ5YqfJyB9KSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMuZGF0YS5mb3JtRWwgJiYgdGhpcy5kYXRhLmZvcm1FbC5yZXNldCgpKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIF9wYXJzZVZhbHVlKHZhbHVlOiBzdHJpbmcsIG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgICAgICBpZiAobmFtZSA9PT0gJ2NyZWRpdCcgfHwgbmFtZSA9PT0gJ2ludGVncmFsJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzTmFOKCt2YWx1ZSkgPyAnJyA6ICt2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==