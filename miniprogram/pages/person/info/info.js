"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("../../../utils/http");
var project_form_1 = require("../../../behavior/project_form");
var util_1 = require("../../../utils/util");
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
        notGetInfo: false
    },
    ready: function () {
        var _this = this;
        var options = util_1.getOptions('pages/person/info/info');
        if (!options.notGetInfo) {
            http_1.request({ url: '/api/user' })
                .then(function (_a) {
                var data = _a.data;
                _this.setData(['address', 'idCard', 'phone', 'realName', 'email']
                    .reduce(function (form, k) {
                    form["form." + k] = data[k];
                    return form;
                }, {}));
            })
                .then(console.log);
        }
        else {
            this.data.notGetInfo = true;
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0EsNENBQThDO0FBQzlDLCtEQUFpRTtBQUNqRSw0Q0FBaUQ7QUFHakQsU0FBUyxhQUFhO0lBQ2xCLElBQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLDJHQUFBLDhDQUEyQyxJQUFBLENBQUM7SUFFckUsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsK0VBQUEsU0FBUyxFQUFNLEdBQUcsS0FBVCxNQUFNLENBQUcsQ0FBQztJQUMzQyxJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxpR0FBQSxvQkFBbUIsRUFBTSxZQUFZLEtBQWxCLE1BQU0sQ0FBWSxDQUFDO0lBRTlELE9BQU8sWUFBVSxLQUFLLFNBQUksS0FBSyxPQUFJLENBQUM7QUFDeEMsQ0FBQztBQUVELFNBQVMsQ0FBQztJQUNOLFNBQVMsRUFBRSxDQUFDLHNCQUFtQixDQUFDO0lBQ2hDLElBQUksRUFBRTtRQUNGLElBQUksRUFBRTtZQUNGLElBQUksRUFBRSxFQUFFO1NBQ1g7UUFDRCxLQUFLLEVBQUU7WUFDSCxNQUFNLEVBQUUsQ0FBQztvQkFDTCxNQUFNLEVBQUUsYUFBYSxFQUFFO29CQUN2QixPQUFPLEVBQUUsUUFBUTtpQkFDcEIsQ0FBQztZQUNGLEtBQUssRUFBRSxDQUFDO29CQUNKLE1BQU0sRUFBRSxvQkFBb0I7b0JBQzVCLE9BQU8sRUFBRSxRQUFRO2lCQUNwQixDQUFDO1lBQ0YsS0FBSyxFQUFFLENBQUM7b0JBQ0osTUFBTSxFQUFFLDBEQUEwRDtvQkFDbEUsT0FBTyxFQUFFLFNBQVM7aUJBQ3JCLENBQUM7U0FDTDtRQUNELFVBQVUsRUFBRSxJQUFJO1FBQ2hCLFdBQVcsRUFBRSxPQUFPO1FBQ3BCLFVBQVUsRUFBRSxLQUFLO0tBQ3BCO0lBQ0QsS0FBSztRQUFMLGlCQW9CQztRQW5CRyxJQUFNLE9BQU8sR0FBRyxpQkFBVSxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUU7WUFDckIsY0FBTyxDQUFRLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxDQUFDO2lCQUMvQixJQUFJLENBQUMsVUFBQyxFQUFRO29CQUFOLGNBQUk7Z0JBQ1QsS0FBSSxDQUFDLE9BQVEsQ0FDVCxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUM7cUJBQzlDLE1BQU0sQ0FDSCxVQUFDLElBQUksRUFBRSxDQUFDO29CQUNKLElBQUksQ0FBQyxVQUFRLENBQUcsQ0FBQyxHQUFnQixJQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzFDLE9BQU8sSUFBSSxDQUFDO2dCQUNoQixDQUFDLEVBQ1csRUFBRSxDQUNqQixDQUNSLENBQUM7WUFDTixDQUFDLENBQUM7aUJBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMxQjthQUFNO1lBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1NBQy9CO0lBQ0wsQ0FBQztJQUNELE9BQU8sRUFBRTtRQUNMLE9BQU87WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNCLENBQUM7UUFDRCxPQUFPO1lBQVAsaUJBZ0JDO1lBZkcsY0FBTyxDQUFDO2dCQUNKLEdBQUcsRUFBRSxXQUFXO2dCQUNoQixNQUFNLEVBQUUsTUFBTTtnQkFDZCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO2FBQ3ZCLENBQUM7aUJBQ0csSUFBSSxDQUFDLGNBQU0sT0FBQSxJQUFJLE9BQU8sQ0FBQyxVQUFBLE9BQU87Z0JBQzNCLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0JBQ1QsS0FBSyxFQUFFLFVBQVU7b0JBQ2pCLFFBQVEsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQTdCLENBQTZCO2lCQUNoRCxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsRUFMVSxDQUtWLENBQUM7aUJBQ0YsSUFBSSxDQUFDLFVBQUEsVUFBVSxJQUFJLE9BQUEsVUFBVSxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQyxFQUF4RCxDQUF3RCxDQUFDO2lCQUM1RSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRXhCLElBQUksQ0FBQyxPQUFRLENBQUMsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN2QyxDQUFDO0tBQ0o7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5L+u5pS55Liq5Lq65L+h5oGvXHJcbiAqL1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvaHR0cCc7XHJcbmltcG9ydCBQcm9qZWN0Rm9ybUJlaGF2aW9yIGZyb20gJy4uLy4uLy4uL2JlaGF2aW9yL3Byb2plY3RfZm9ybSc7XHJcbmltcG9ydCB7IGdldE9wdGlvbnMgfSBmcm9tICcuLi8uLi8uLi91dGlscy91dGlsJztcclxuXHJcblxyXG5mdW5jdGlvbiBnZXRJZENhcmRSdWxlKCkge1xyXG4gICAgY29uc3QgY29tbW9uID0gU3RyaW5nLnJhd2AoKDBcXGQpfCgxWzAtMl0pKSgoWzB8MXwyXVxcZCl8M1swLTFdKVxcZHszfWA7XHJcblxyXG4gICAgY29uc3Qgc3RyMTUgPSBTdHJpbmcucmF3YChcXGR7N30ke2NvbW1vbn0pYDtcclxuICAgIGNvbnN0IHN0cjE4ID0gU3RyaW5nLnJhd2AoXFxkezV9WzEtOV1cXGR7M30ke2NvbW1vbn0oWzAtOV18WCkpYDtcclxuXHJcbiAgICByZXR1cm4gYF5bMS05XSgke3N0cjE1fXwke3N0cjE4fSkkYDtcclxufVxyXG5cclxuQ29tcG9uZW50KHtcclxuICAgIGJlaGF2aW9yczogW1Byb2plY3RGb3JtQmVoYXZpb3JdLFxyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGZvcm06IHtcclxuICAgICAgICAgICAgY29kZTogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJ1bGVzOiB7XHJcbiAgICAgICAgICAgIGlkQ2FyZDogW3tcclxuICAgICAgICAgICAgICAgIHJlZ2V4cDogZ2V0SWRDYXJkUnVsZSgpLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ+aXoOaViOi6q+S7veivgeWPtydcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIHBob25lOiBbe1xyXG4gICAgICAgICAgICAgICAgcmVnZXhwOiAnXjFbMzQ1Njc4OV1cXFxcZHs5fSQnLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ+aXoOaViOeUteivneWPt+eggSdcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIGVtYWlsOiBbe1xyXG4gICAgICAgICAgICAgICAgcmVnZXhwOiAvXihbYS16QS1aXXxbMC05XSkoXFx3fFxcLSkrQFthLXpBLVowLTldK1xcLihbYS16QS1aXXsyLDR9KSQvLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ+aXoOaViOeahOeUteWtkOmCruS7tidcclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNhbkdldENvZGU6IHRydWUsXHJcbiAgICAgICAgY29kZUJ0blRleHQ6ICfojrflj5bpqozor4HnoIEnLFxyXG4gICAgICAgIG5vdEdldEluZm86IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgcmVhZHkoKSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGdldE9wdGlvbnMoJ3BhZ2VzL3BlcnNvbi9pbmZvL2luZm8nKTtcclxuICAgICAgICBpZiAoIW9wdGlvbnMubm90R2V0SW5mbykge1xyXG4gICAgICAgICAgICByZXF1ZXN0PElVc2VyPih7IHVybDogJy9hcGkvdXNlcicgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSEoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnYWRkcmVzcycsICdpZENhcmQnLCAncGhvbmUnLCAncmVhbE5hbWUnLCAnZW1haWwnXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZm9ybSwgaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtW2Bmb3JtLiR7a31gXSA9ICg8SUFueU9iamVjdD5kYXRhKVtrXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZvcm07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SUFueU9iamVjdD57fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oY29uc29sZS5sb2cpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5ub3RHZXRJbmZvID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGdldENvZGUoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnZXRDb2RlJyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBfc3VibWl0KCkge1xyXG4gICAgICAgICAgICByZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9hcGkvdXNlcicsXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHRoaXMuZGF0YS5mb3JtXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+S/ruaUueS4quS6uuS/oeaBr+aIkOWKnycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiByZXNvbHZlKHRoaXMuZGF0YS5ub3RHZXRJbmZvKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihub3RHZXRJbmZvID0+IG5vdEdldEluZm8gJiYgd3gucmVMYXVuY2goeyB1cmw6ICcvcGFnZXMvaW5kZXgvaW5kZXgnIH0pKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSEoeyAnZm9ybS5jb2RlJzogJycgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19