"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("../../../utils/http");
var project_form_1 = require("../../../behavior/project_form");
function getIdCardRule() {
    var common = String.raw(templateObject_1 || (templateObject_1 = __makeTemplateObject(["((0d)|(1[0-2]))(([0|1|2]d)|3[0-1])d{3}"], ["((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}"])));
    var str15 = String.raw(templateObject_2 || (templateObject_2 = __makeTemplateObject(["(d{7}", ")"], ["(\\d{7}", ")"])), common);
    var str18 = String.raw(templateObject_3 || (templateObject_3 = __makeTemplateObject(["(d{5}[1-9]d{3}", "([0-9]|X))"], ["(\\d{5}[1-9]\\d{3}", "([0-9]|X))"])), common);
    return "^[1-9](" + str15 + "|" + str18 + ")$";
}
Component({
    behaviors: [project_form_1.default],
    data: {
        form: {
            code: ''
        },
        rules: {
            idCard: [{
                    regexp: getIdCardRule(),
                    message: '无效身份证号'
                }],
            phone: [{
                    regexp: '^1[3456789]\\d{9}$',
                    message: '无效电话号码'
                }],
            email: [{
                    regexp: /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/,
                    message: '无效的电子邮件'
                }]
        },
        canGetCode: true,
        codeBtnText: '获取验证码',
        hasInfo: false
    },
    ready: function () {
        var _this = this;
        http_1.request({ url: '/api/user' })
            .then(function (_a) {
            var data = _a.data;
            var obj = ['address', 'idCard', 'phone', 'realName', 'email'].reduce(function (form, k) {
                form["form." + k] = data[k];
                return form;
            }, {});
            obj.hasInfo = !!obj.realName;
            _this.setData(obj);
        })
            .then(console.log);
    },
    methods: {
        getCode: function () {
            console.log('getCode');
        },
        _submit: function () {
            var _this = this;
            http_1.request({
                url: '/api/user',
                method: 'POST',
                data: this.data.form
            })
                .then(function () { return new Promise(function (resolve) {
                wx.showToast({
                    title: '修改个人信息成功',
                    complete: function () { return resolve(_this.data.notGetInfo); }
                });
            }); })
                .then(function (notGetInfo) { return notGetInfo && wx.reLaunch({ url: '/pages/index/index' }); })
                .catch(console.log);
            this.setData({ 'form.code': '' });
        }
    }
});
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0EsNENBQThDO0FBQzlDLCtEQUFpRTtBQUVqRSxTQUFTLGFBQWE7SUFDbEIsSUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsMkdBQUEsOENBQTJDLElBQUEsQ0FBQztJQUVyRSxJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRywrRUFBQSxTQUFTLEVBQU0sR0FBRyxLQUFULE1BQU0sQ0FBRyxDQUFDO0lBQzNDLElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxHQUFHLGlHQUFBLG9CQUFtQixFQUFNLFlBQVksS0FBbEIsTUFBTSxDQUFZLENBQUM7SUFFOUQsT0FBTyxZQUFVLEtBQUssU0FBSSxLQUFLLE9BQUksQ0FBQztBQUN4QyxDQUFDO0FBRUQsU0FBUyxDQUFDO0lBQ04sU0FBUyxFQUFFLENBQUMsc0JBQW1CLENBQUM7SUFDaEMsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFO1lBQ0YsSUFBSSxFQUFFLEVBQUU7U0FDWDtRQUNELEtBQUssRUFBRTtZQUNILE1BQU0sRUFBRSxDQUFDO29CQUNMLE1BQU0sRUFBRSxhQUFhLEVBQUU7b0JBQ3ZCLE9BQU8sRUFBRSxRQUFRO2lCQUNwQixDQUFDO1lBQ0YsS0FBSyxFQUFFLENBQUM7b0JBQ0osTUFBTSxFQUFFLG9CQUFvQjtvQkFDNUIsT0FBTyxFQUFFLFFBQVE7aUJBQ3BCLENBQUM7WUFDRixLQUFLLEVBQUUsQ0FBQztvQkFDSixNQUFNLEVBQUUsMERBQTBEO29CQUNsRSxPQUFPLEVBQUUsU0FBUztpQkFDckIsQ0FBQztTQUNMO1FBQ0QsVUFBVSxFQUFFLElBQUk7UUFDaEIsV0FBVyxFQUFFLE9BQU87UUFDcEIsT0FBTyxFQUFFLEtBQUs7S0FDakI7SUFDRCxLQUFLO1FBQUwsaUJBY0M7UUFiRyxjQUFPLENBQVEsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLENBQUM7YUFDL0IsSUFBSSxDQUFDLFVBQUMsRUFBUTtnQkFBTixjQUFJO1lBQ1QsSUFBTSxHQUFHLEdBQUcsQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUNsRSxVQUFDLElBQUksRUFBRSxDQUFDO2dCQUNKLElBQUksQ0FBQyxVQUFRLENBQUcsQ0FBQyxHQUFnQixJQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLE9BQU8sSUFBSSxDQUFDO1lBQ2hCLENBQUMsRUFDVyxFQUFFLENBQ2pCLENBQUM7WUFDRixHQUFHLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDO1lBQzdCLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUFDO2FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsT0FBTztZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0IsQ0FBQztRQUNELE9BQU87WUFBUCxpQkFnQkM7WUFmRyxjQUFPLENBQUM7Z0JBQ0osR0FBRyxFQUFFLFdBQVc7Z0JBQ2hCLE1BQU0sRUFBRSxNQUFNO2dCQUNkLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDdkIsQ0FBQztpQkFDRyxJQUFJLENBQUMsY0FBTSxPQUFBLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTztnQkFDM0IsRUFBRSxDQUFDLFNBQVMsQ0FBQztvQkFDVCxLQUFLLEVBQUUsVUFBVTtvQkFDakIsUUFBUSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBN0IsQ0FBNkI7aUJBQ2hELENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxFQUxVLENBS1YsQ0FBQztpQkFDRixJQUFJLENBQUMsVUFBQSxVQUFVLElBQUksT0FBQSxVQUFVLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxvQkFBb0IsRUFBRSxDQUFDLEVBQXhELENBQXdELENBQUM7aUJBQzVFLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFeEIsSUFBSSxDQUFDLE9BQVEsQ0FBQyxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7S0FDSjtDQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDkv67mlLnkuKrkurrkv6Hmga9cclxuICovXHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi91dGlscy9odHRwJztcclxuaW1wb3J0IFByb2plY3RGb3JtQmVoYXZpb3IgZnJvbSAnLi4vLi4vLi4vYmVoYXZpb3IvcHJvamVjdF9mb3JtJztcclxuXHJcbmZ1bmN0aW9uIGdldElkQ2FyZFJ1bGUoKSB7XHJcbiAgICBjb25zdCBjb21tb24gPSBTdHJpbmcucmF3YCgoMFxcZCl8KDFbMC0yXSkpKChbMHwxfDJdXFxkKXwzWzAtMV0pXFxkezN9YDtcclxuXHJcbiAgICBjb25zdCBzdHIxNSA9IFN0cmluZy5yYXdgKFxcZHs3fSR7Y29tbW9ufSlgO1xyXG4gICAgY29uc3Qgc3RyMTggPSBTdHJpbmcucmF3YChcXGR7NX1bMS05XVxcZHszfSR7Y29tbW9ufShbMC05XXxYKSlgO1xyXG5cclxuICAgIHJldHVybiBgXlsxLTldKCR7c3RyMTV9fCR7c3RyMTh9KSRgO1xyXG59XHJcblxyXG5Db21wb25lbnQoe1xyXG4gICAgYmVoYXZpb3JzOiBbUHJvamVjdEZvcm1CZWhhdmlvcl0sXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgZm9ybToge1xyXG4gICAgICAgICAgICBjb2RlOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcnVsZXM6IHtcclxuICAgICAgICAgICAgaWRDYXJkOiBbe1xyXG4gICAgICAgICAgICAgICAgcmVnZXhwOiBnZXRJZENhcmRSdWxlKCksXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAn5peg5pWI6Lqr5Lu96K+B5Y+3J1xyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgcGhvbmU6IFt7XHJcbiAgICAgICAgICAgICAgICByZWdleHA6ICdeMVszNDU2Nzg5XVxcXFxkezl9JCcsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAn5peg5pWI55S16K+d5Y+356CBJ1xyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgZW1haWw6IFt7XHJcbiAgICAgICAgICAgICAgICByZWdleHA6IC9eKFthLXpBLVpdfFswLTldKShcXHd8XFwtKStAW2EtekEtWjAtOV0rXFwuKFthLXpBLVpdezIsNH0pJC8sXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAn5peg5pWI55qE55S15a2Q6YKu5Lu2J1xyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FuR2V0Q29kZTogdHJ1ZSxcclxuICAgICAgICBjb2RlQnRuVGV4dDogJ+iOt+WPlumqjOivgeeggScsXHJcbiAgICAgICAgaGFzSW5mbzogZmFsc2VcclxuICAgIH0sXHJcbiAgICByZWFkeSgpIHtcclxuICAgICAgICByZXF1ZXN0PElVc2VyPih7IHVybDogJy9hcGkvdXNlcicgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvYmogPSBbJ2FkZHJlc3MnLCAnaWRDYXJkJywgJ3Bob25lJywgJ3JlYWxOYW1lJywgJ2VtYWlsJ10ucmVkdWNlKFxyXG4gICAgICAgICAgICAgICAgICAgIChmb3JtLCBrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1bYGZvcm0uJHtrfWBdID0gKDxJQW55T2JqZWN0PmRhdGEpW2tdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZm9ybTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIDxJQW55T2JqZWN0Pnt9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgb2JqLmhhc0luZm8gPSAhIW9iai5yZWFsTmFtZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YShvYmopO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihjb25zb2xlLmxvZyk7XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGdldENvZGUoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnZXRDb2RlJyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBfc3VibWl0KCkge1xyXG4gICAgICAgICAgICByZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9hcGkvdXNlcicsXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHRoaXMuZGF0YS5mb3JtXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+S/ruaUueS4quS6uuS/oeaBr+aIkOWKnycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiByZXNvbHZlKHRoaXMuZGF0YS5ub3RHZXRJbmZvKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihub3RHZXRJbmZvID0+IG5vdEdldEluZm8gJiYgd3gucmVMYXVuY2goeyB1cmw6ICcvcGFnZXMvaW5kZXgvaW5kZXgnIH0pKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSEoeyAnZm9ybS5jb2RlJzogJycgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19