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
            obj.hasInfo = !!obj['form.realName'];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0EsNENBQThDO0FBQzlDLCtEQUFpRTtBQUVqRSxTQUFTLGFBQWE7SUFDbEIsSUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsMkdBQUEsOENBQTJDLElBQUEsQ0FBQztJQUVyRSxJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRywrRUFBQSxTQUFTLEVBQU0sR0FBRyxLQUFULE1BQU0sQ0FBRyxDQUFDO0lBQzNDLElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxHQUFHLGlHQUFBLG9CQUFtQixFQUFNLFlBQVksS0FBbEIsTUFBTSxDQUFZLENBQUM7SUFFOUQsT0FBTyxZQUFVLEtBQUssU0FBSSxLQUFLLE9BQUksQ0FBQztBQUN4QyxDQUFDO0FBRUQsU0FBUyxDQUFDO0lBQ04sU0FBUyxFQUFFLENBQUMsc0JBQW1CLENBQUM7SUFDaEMsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFO1lBQ0YsSUFBSSxFQUFFLEVBQUU7U0FDWDtRQUNELEtBQUssRUFBRTtZQUNILE1BQU0sRUFBRSxDQUFDO29CQUNMLE1BQU0sRUFBRSxhQUFhLEVBQUU7b0JBQ3ZCLE9BQU8sRUFBRSxRQUFRO2lCQUNwQixDQUFDO1lBQ0YsS0FBSyxFQUFFLENBQUM7b0JBQ0osTUFBTSxFQUFFLG9CQUFvQjtvQkFDNUIsT0FBTyxFQUFFLFFBQVE7aUJBQ3BCLENBQUM7WUFDRixLQUFLLEVBQUUsQ0FBQztvQkFDSixNQUFNLEVBQUUsMERBQTBEO29CQUNsRSxPQUFPLEVBQUUsU0FBUztpQkFDckIsQ0FBQztTQUNMO1FBQ0QsVUFBVSxFQUFFLElBQUk7UUFDaEIsV0FBVyxFQUFFLE9BQU87UUFDcEIsT0FBTyxFQUFFLEtBQUs7S0FDakI7SUFDRCxLQUFLO1FBQUwsaUJBY0M7UUFiRyxjQUFPLENBQVEsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLENBQUM7YUFDL0IsSUFBSSxDQUFDLFVBQUMsRUFBUTtnQkFBTixjQUFJO1lBQ1QsSUFBTSxHQUFHLEdBQUcsQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUNsRSxVQUFDLElBQUksRUFBRSxDQUFDO2dCQUNKLElBQUksQ0FBQyxVQUFRLENBQUcsQ0FBQyxHQUFnQixJQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLE9BQU8sSUFBSSxDQUFDO1lBQ2hCLENBQUMsRUFDVyxFQUFFLENBQ2pCLENBQUM7WUFDRixHQUFHLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDckMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQUM7YUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFDRCxPQUFPLEVBQUU7UUFDTCxPQUFPO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzQixDQUFDO1FBQ0QsT0FBTztZQUFQLGlCQWdCQztZQWZHLGNBQU8sQ0FBQztnQkFDSixHQUFHLEVBQUUsV0FBVztnQkFDaEIsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTthQUN2QixDQUFDO2lCQUNHLElBQUksQ0FBQyxjQUFNLE9BQUEsSUFBSSxPQUFPLENBQUMsVUFBQSxPQUFPO2dCQUMzQixFQUFFLENBQUMsU0FBUyxDQUFDO29CQUNULEtBQUssRUFBRSxVQUFVO29CQUNqQixRQUFRLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUE3QixDQUE2QjtpQkFDaEQsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLEVBTFUsQ0FLVixDQUFDO2lCQUNGLElBQUksQ0FBQyxVQUFBLFVBQVUsSUFBSSxPQUFBLFVBQVUsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxFQUFFLG9CQUFvQixFQUFFLENBQUMsRUFBeEQsQ0FBd0QsQ0FBQztpQkFDNUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUV4QixJQUFJLENBQUMsT0FBUSxDQUFDLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdkMsQ0FBQztLQUNKO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOS/ruaUueS4quS6uuS/oeaBr1xyXG4gKi9cclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2h0dHAnO1xyXG5pbXBvcnQgUHJvamVjdEZvcm1CZWhhdmlvciBmcm9tICcuLi8uLi8uLi9iZWhhdmlvci9wcm9qZWN0X2Zvcm0nO1xyXG5cclxuZnVuY3Rpb24gZ2V0SWRDYXJkUnVsZSgpIHtcclxuICAgIGNvbnN0IGNvbW1vbiA9IFN0cmluZy5yYXdgKCgwXFxkKXwoMVswLTJdKSkoKFswfDF8Ml1cXGQpfDNbMC0xXSlcXGR7M31gO1xyXG5cclxuICAgIGNvbnN0IHN0cjE1ID0gU3RyaW5nLnJhd2AoXFxkezd9JHtjb21tb259KWA7XHJcbiAgICBjb25zdCBzdHIxOCA9IFN0cmluZy5yYXdgKFxcZHs1fVsxLTldXFxkezN9JHtjb21tb259KFswLTldfFgpKWA7XHJcblxyXG4gICAgcmV0dXJuIGBeWzEtOV0oJHtzdHIxNX18JHtzdHIxOH0pJGA7XHJcbn1cclxuXHJcbkNvbXBvbmVudCh7XHJcbiAgICBiZWhhdmlvcnM6IFtQcm9qZWN0Rm9ybUJlaGF2aW9yXSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBmb3JtOiB7XHJcbiAgICAgICAgICAgIGNvZGU6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBydWxlczoge1xyXG4gICAgICAgICAgICBpZENhcmQ6IFt7XHJcbiAgICAgICAgICAgICAgICByZWdleHA6IGdldElkQ2FyZFJ1bGUoKSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfml6DmlYjouqvku73or4Hlj7cnXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBwaG9uZTogW3tcclxuICAgICAgICAgICAgICAgIHJlZ2V4cDogJ14xWzM0NTY3ODldXFxcXGR7OX0kJyxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfml6DmlYjnlLXor53lj7fnoIEnXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBlbWFpbDogW3tcclxuICAgICAgICAgICAgICAgIHJlZ2V4cDogL14oW2EtekEtWl18WzAtOV0pKFxcd3xcXC0pK0BbYS16QS1aMC05XStcXC4oW2EtekEtWl17Miw0fSkkLyxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfml6DmlYjnmoTnlLXlrZDpgq7ku7YnXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYW5HZXRDb2RlOiB0cnVlLFxyXG4gICAgICAgIGNvZGVCdG5UZXh0OiAn6I635Y+W6aqM6K+B56CBJyxcclxuICAgICAgICBoYXNJbmZvOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHJlYWR5KCkge1xyXG4gICAgICAgIHJlcXVlc3Q8SVVzZXI+KHsgdXJsOiAnL2FwaS91c2VyJyB9KVxyXG4gICAgICAgICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9iaiA9IFsnYWRkcmVzcycsICdpZENhcmQnLCAncGhvbmUnLCAncmVhbE5hbWUnLCAnZW1haWwnXS5yZWR1Y2UoXHJcbiAgICAgICAgICAgICAgICAgICAgKGZvcm0sIGspID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybVtgZm9ybS4ke2t9YF0gPSAoPElBbnlPYmplY3Q+ZGF0YSlba107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmb3JtO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgPElBbnlPYmplY3Q+e31cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBvYmouaGFzSW5mbyA9ICEhb2JqWydmb3JtLnJlYWxOYW1lJ107XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEob2JqKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oY29uc29sZS5sb2cpO1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBnZXRDb2RlKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZ2V0Q29kZScpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgX3N1Ym1pdCgpIHtcclxuICAgICAgICAgICAgcmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvYXBpL3VzZXInLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLmRhdGEuZm9ybVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfkv67mlLnkuKrkurrkv6Hmga/miJDlip8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogKCkgPT4gcmVzb2x2ZSh0aGlzLmRhdGEubm90R2V0SW5mbylcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4obm90R2V0SW5mbyA9PiBub3RHZXRJbmZvICYmIHd4LnJlTGF1bmNoKHsgdXJsOiAnL3BhZ2VzL2luZGV4L2luZGV4JyB9KSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEhKHsgJ2Zvcm0uY29kZSc6ICcnIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==