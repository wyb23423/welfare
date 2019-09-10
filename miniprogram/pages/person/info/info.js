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
        notGetInfo: false
    },
    ready: function () {
        var _this = this;
        var page = getCurrentPages().pop();
        if (!(page && page.route === 'pages/person/info/info')) {
            return wx.showModal({
                title: '非法访问',
                content: '路由参数错误，即将返回主页',
                showCancel: false,
                complete: function () {
                    wx.reLaunch({ url: '/pages/index/index' });
                }
            });
        }
        if (!(page.options && page.options.notGetInfo)) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0EsNENBQThDO0FBQzlDLCtEQUFpRTtBQUdqRSxTQUFTLGFBQWE7SUFDbEIsSUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsMkdBQUEsOENBQTJDLElBQUEsQ0FBQztJQUVyRSxJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRywrRUFBQSxTQUFTLEVBQU0sR0FBRyxLQUFULE1BQU0sQ0FBRyxDQUFDO0lBQzNDLElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxHQUFHLGlHQUFBLG9CQUFtQixFQUFNLFlBQVksS0FBbEIsTUFBTSxDQUFZLENBQUM7SUFFOUQsT0FBTyxZQUFVLEtBQUssU0FBSSxLQUFLLE9BQUksQ0FBQztBQUN4QyxDQUFDO0FBRUQsU0FBUyxDQUFDO0lBQ04sU0FBUyxFQUFFLENBQUMsc0JBQW1CLENBQUM7SUFDaEMsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFO1lBQ0YsSUFBSSxFQUFFLEVBQUU7U0FDWDtRQUNELEtBQUssRUFBRTtZQUNILE1BQU0sRUFBRSxDQUFDO29CQUNMLE1BQU0sRUFBRSxhQUFhLEVBQUU7b0JBQ3ZCLE9BQU8sRUFBRSxRQUFRO2lCQUNwQixDQUFDO1lBQ0YsS0FBSyxFQUFFLENBQUM7b0JBQ0osTUFBTSxFQUFFLG9CQUFvQjtvQkFDNUIsT0FBTyxFQUFFLFFBQVE7aUJBQ3BCLENBQUM7WUFDRixLQUFLLEVBQUUsQ0FBQztvQkFDSixNQUFNLEVBQUUsMERBQTBEO29CQUNsRSxPQUFPLEVBQUUsU0FBUztpQkFDckIsQ0FBQztTQUNMO1FBQ0QsVUFBVSxFQUFFLElBQUk7UUFDaEIsV0FBVyxFQUFFLE9BQU87UUFDcEIsVUFBVSxFQUFFLEtBQUs7S0FDcEI7SUFDRCxLQUFLO1FBQUwsaUJBK0JDO1FBOUJHLElBQU0sSUFBSSxHQUFHLGVBQWUsRUFBbUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN0RCxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyx3QkFBd0IsQ0FBQyxFQUFFO1lBQ3BELE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDaEIsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsT0FBTyxFQUFFLGVBQWU7Z0JBQ3hCLFVBQVUsRUFBRSxLQUFLO2dCQUNqQixRQUFRO29CQUNKLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO2dCQUMvQyxDQUFDO2FBQ0osQ0FBQyxDQUFDO1NBQ047UUFFRCxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDNUMsY0FBTyxDQUFRLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxDQUFDO2lCQUMvQixJQUFJLENBQUMsVUFBQyxFQUFRO29CQUFOLGNBQUk7Z0JBQ1QsS0FBSSxDQUFDLE9BQVEsQ0FDVCxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUM7cUJBQzlDLE1BQU0sQ0FDSCxVQUFDLElBQUksRUFBRSxDQUFDO29CQUNKLElBQUksQ0FBQyxVQUFRLENBQUcsQ0FBQyxHQUFnQixJQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzFDLE9BQU8sSUFBSSxDQUFDO2dCQUNoQixDQUFDLEVBQ1csRUFBRSxDQUNqQixDQUNSLENBQUM7WUFDTixDQUFDLENBQUM7aUJBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMxQjthQUFNO1lBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1NBQy9CO0lBQ0wsQ0FBQztJQUNELE9BQU8sRUFBRTtRQUNMLE9BQU87WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNCLENBQUM7UUFDRCxPQUFPO1lBQVAsaUJBZ0JDO1lBZkcsY0FBTyxDQUFDO2dCQUNKLEdBQUcsRUFBRSxXQUFXO2dCQUNoQixNQUFNLEVBQUUsTUFBTTtnQkFDZCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO2FBQ3ZCLENBQUM7aUJBQ0csSUFBSSxDQUFDLGNBQU0sT0FBQSxJQUFJLE9BQU8sQ0FBQyxVQUFBLE9BQU87Z0JBQzNCLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0JBQ1QsS0FBSyxFQUFFLFVBQVU7b0JBQ2pCLFFBQVEsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQTdCLENBQTZCO2lCQUNoRCxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsRUFMVSxDQUtWLENBQUM7aUJBQ0YsSUFBSSxDQUFDLFVBQUEsVUFBVSxJQUFJLE9BQUEsVUFBVSxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQyxFQUF4RCxDQUF3RCxDQUFDO2lCQUM1RSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRXhCLElBQUksQ0FBQyxPQUFRLENBQUMsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN2QyxDQUFDO0tBQ0o7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5L+u5pS55Liq5Lq65L+h5oGvXHJcbiAqL1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvaHR0cCc7XHJcbmltcG9ydCBQcm9qZWN0Rm9ybUJlaGF2aW9yIGZyb20gJy4uLy4uLy4uL2JlaGF2aW9yL3Byb2plY3RfZm9ybSc7XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0SWRDYXJkUnVsZSgpIHtcclxuICAgIGNvbnN0IGNvbW1vbiA9IFN0cmluZy5yYXdgKCgwXFxkKXwoMVswLTJdKSkoKFswfDF8Ml1cXGQpfDNbMC0xXSlcXGR7M31gO1xyXG5cclxuICAgIGNvbnN0IHN0cjE1ID0gU3RyaW5nLnJhd2AoXFxkezd9JHtjb21tb259KWA7XHJcbiAgICBjb25zdCBzdHIxOCA9IFN0cmluZy5yYXdgKFxcZHs1fVsxLTldXFxkezN9JHtjb21tb259KFswLTldfFgpKWA7XHJcblxyXG4gICAgcmV0dXJuIGBeWzEtOV0oJHtzdHIxNX18JHtzdHIxOH0pJGA7XHJcbn1cclxuXHJcbkNvbXBvbmVudCh7XHJcbiAgICBiZWhhdmlvcnM6IFtQcm9qZWN0Rm9ybUJlaGF2aW9yXSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBmb3JtOiB7XHJcbiAgICAgICAgICAgIGNvZGU6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBydWxlczoge1xyXG4gICAgICAgICAgICBpZENhcmQ6IFt7XHJcbiAgICAgICAgICAgICAgICByZWdleHA6IGdldElkQ2FyZFJ1bGUoKSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfml6DmlYjouqvku73or4Hlj7cnXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBwaG9uZTogW3tcclxuICAgICAgICAgICAgICAgIHJlZ2V4cDogJ14xWzM0NTY3ODldXFxcXGR7OX0kJyxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfml6DmlYjnlLXor53lj7fnoIEnXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBlbWFpbDogW3tcclxuICAgICAgICAgICAgICAgIHJlZ2V4cDogL14oW2EtekEtWl18WzAtOV0pKFxcd3xcXC0pK0BbYS16QS1aMC05XStcXC4oW2EtekEtWl17Miw0fSkkLyxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfml6DmlYjnmoTnlLXlrZDpgq7ku7YnXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYW5HZXRDb2RlOiB0cnVlLFxyXG4gICAgICAgIGNvZGVCdG5UZXh0OiAn6I635Y+W6aqM6K+B56CBJyxcclxuICAgICAgICBub3RHZXRJbmZvOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHJlYWR5KCkge1xyXG4gICAgICAgIGNvbnN0IHBhZ2UgPSBnZXRDdXJyZW50UGFnZXM8SUFueU9iamVjdCwgYW55PigpLnBvcCgpO1xyXG4gICAgICAgIGlmICghKHBhZ2UgJiYgcGFnZS5yb3V0ZSA9PT0gJ3BhZ2VzL3BlcnNvbi9pbmZvL2luZm8nKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn6Z2e5rOV6K6/6ZeuJyxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfot6/nlLHlj4LmlbDplJnor6/vvIzljbPlsIbov5Tlm57kuLvpobUnLFxyXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZSgpIHtcclxuICAgICAgICAgICAgICAgICAgICB3eC5yZUxhdW5jaCh7IHVybDogJy9wYWdlcy9pbmRleC9pbmRleCcgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCEocGFnZS5vcHRpb25zICYmIHBhZ2Uub3B0aW9ucy5ub3RHZXRJbmZvKSkge1xyXG4gICAgICAgICAgICByZXF1ZXN0PElVc2VyPih7IHVybDogJy9hcGkvdXNlcicgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSEoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnYWRkcmVzcycsICdpZENhcmQnLCAncGhvbmUnLCAncmVhbE5hbWUnLCAnZW1haWwnXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZm9ybSwgaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtW2Bmb3JtLiR7a31gXSA9ICg8SUFueU9iamVjdD5kYXRhKVtrXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZvcm07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SUFueU9iamVjdD57fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oY29uc29sZS5sb2cpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5ub3RHZXRJbmZvID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGdldENvZGUoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnZXRDb2RlJyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBfc3VibWl0KCkge1xyXG4gICAgICAgICAgICByZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9hcGkvdXNlcicsXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHRoaXMuZGF0YS5mb3JtXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+S/ruaUueS4quS6uuS/oeaBr+aIkOWKnycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiByZXNvbHZlKHRoaXMuZGF0YS5ub3RHZXRJbmZvKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihub3RHZXRJbmZvID0+IG5vdEdldEluZm8gJiYgd3gucmVMYXVuY2goeyB1cmw6ICcvcGFnZXMvaW5kZXgvaW5kZXgnIH0pKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSEoeyAnZm9ybS5jb2RlJzogJycgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19