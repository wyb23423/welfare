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
            img: '',
            credit: '',
            integral: ''
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
                filePath: this.data.form.img,
                name: 'file',
                formData: __assign({}, this.data.form, { origination: this.data.form.time[0], finish: this.data.form.time[1] })
            })
                .then(function () { return wx.showToast({ title: '添加成功' }); })
                .then(function () { return _this.data.formEl && _this.data.formEl.reset(); })
                .catch(console.log);
        },
        _parseValue: function (value, name) {
            if (['size', 'integral', 'credit'].includes(name)) {
                return isNaN(+value) ? '' : +value;
            }
            return value;
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JlYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFHQSwrREFBaUU7QUFDakUsNENBQWlEO0FBRWpELFNBQVMsQ0FBQztJQUNOLFNBQVMsRUFBRSxDQUFDLHNCQUFtQixDQUFDO0lBQ2hDLElBQUksRUFBRTtRQUNGLElBQUksRUFBRTtZQUNGLElBQUksRUFBRSxFQUFFO1lBQ1IsS0FBSyxFQUFFLEVBQUU7WUFDVCxPQUFPLEVBQUUsRUFBRTtZQUNYLElBQUksRUFBRSxFQUFFO1lBQ1IsSUFBSSxFQUFFLEVBQUU7WUFDUixRQUFRLEVBQUUsRUFBRTtZQUNaLEdBQUcsRUFBRSxFQUFFO1lBQ1AsTUFBTSxFQUFFLEVBQUU7WUFDVixRQUFRLEVBQUUsRUFBRTtTQUNmO1FBQ0QsUUFBUSxFQUFFO1lBQ04sR0FBRyxFQUFFLENBQUM7WUFDTixPQUFPLEVBQUUsY0FBYztTQUMxQjtLQUNKO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsT0FBTztZQUFQLGlCQWNDO1lBYkcsaUJBQVUsQ0FBQztnQkFDUCxHQUFHLEVBQUUsZUFBZTtnQkFDcEIsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7Z0JBQzVCLElBQUksRUFBRSxNQUFNO2dCQUNaLFFBQVEsZUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFDakIsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDbkMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FDakM7YUFDSixDQUFDO2lCQUNHLElBQUksQ0FBQyxjQUFNLE9BQUEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUEvQixDQUErQixDQUFDO2lCQUMzQyxJQUFJLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUE1QyxDQUE0QyxDQUFDO2lCQUN4RCxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLENBQUM7UUFDRCxXQUFXLFlBQUMsS0FBYSxFQUFFLElBQVk7WUFDbkMsSUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUMvQyxPQUFPLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQ3RDO1lBRUQsT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQztLQUNKO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOWIm+W7uua0u+WKqFxyXG4gKi9cclxuaW1wb3J0IFByb2plY3RGb3JtQmVoYXZpb3IgZnJvbSAnLi4vLi4vLi4vYmVoYXZpb3IvcHJvamVjdF9mb3JtJztcclxuaW1wb3J0IHsgdXBsb2FkRmlsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2h0dHAnO1xyXG5cclxuQ29tcG9uZW50KHtcclxuICAgIGJlaGF2aW9yczogW1Byb2plY3RGb3JtQmVoYXZpb3JdLFxyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGZvcm06IHtcclxuICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgIGludHJvOiAnJyxcclxuICAgICAgICAgICAgZGV0YWlsczogJycsXHJcbiAgICAgICAgICAgIHNpemU6ICcnLFxyXG4gICAgICAgICAgICB0aW1lOiBbXSxcclxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxyXG4gICAgICAgICAgICBpbWc6ICcnLFxyXG4gICAgICAgICAgICBjcmVkaXQ6ICcnLFxyXG4gICAgICAgICAgICBpbnRlZ3JhbDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRpbWVSdWxlOiB7XHJcbiAgICAgICAgICAgIG1pbjogMixcclxuICAgICAgICAgICAgbWVzc2FnZTogJ+a0u+WKqOaXtumXtOmcgOmAieaLqeS4pOS4quaXtumXtOeCuSdcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIF9zdWJtaXQoKSB7XHJcbiAgICAgICAgICAgIHVwbG9hZEZpbGUoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL2FwaS9hY3Rpdml0eScsXHJcbiAgICAgICAgICAgICAgICBmaWxlUGF0aDogdGhpcy5kYXRhLmZvcm0uaW1nLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2ZpbGUnLFxyXG4gICAgICAgICAgICAgICAgZm9ybURhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLmRhdGEuZm9ybSxcclxuICAgICAgICAgICAgICAgICAgICBvcmlnaW5hdGlvbjogdGhpcy5kYXRhLmZvcm0udGltZVswXSxcclxuICAgICAgICAgICAgICAgICAgICBmaW5pc2g6IHRoaXMuZGF0YS5mb3JtLnRpbWVbMV1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHd4LnNob3dUb2FzdCh7IHRpdGxlOiAn5re75Yqg5oiQ5YqfJyB9KSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMuZGF0YS5mb3JtRWwgJiYgdGhpcy5kYXRhLmZvcm1FbC5yZXNldCgpKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIF9wYXJzZVZhbHVlKHZhbHVlOiBzdHJpbmcsIG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgICAgICBpZiAoWydzaXplJywgJ2ludGVncmFsJywgJ2NyZWRpdCddLmluY2x1ZGVzKG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNOYU4oK3ZhbHVlKSA/ICcnIDogK3ZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19