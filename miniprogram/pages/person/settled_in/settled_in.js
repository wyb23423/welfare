"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var project_form_1 = require("../../../behavior/project_form");
var http_1 = require("../../../utils/http");
var store_1 = require("../../../constant/store");
var index_1 = require("../../../constant/index");
Component({
    behaviors: [project_form_1.default],
    data: {
        form: {
            name: '',
            phone: '',
            detail: '',
            address: '',
            img: ''
        },
        telRule: {
            regexp: '^1[3456789]\\d{9}$',
            message: '无效电话号码'
        },
        oldImg: ''
    },
    ready: function () {
        var _this = this;
        if (wx.getStorageSync(store_1.USER_AUTHENTICATION) === index_1.Authentication.official) {
            http_1.request({ url: '/api/merchant/getByUserId' })
                .then(function (_a) {
                var data = _a.data;
                _this.data.oldImg = data.img;
                _this.setData({ form: data });
            })
                .catch(console.log);
        }
    },
    methods: {
        _submit: function () {
            var _a = this.data, oldImg = _a.oldImg, form = _a.form;
            var url = oldImg ? '/api/merchant/update' : '/api/merchant';
            var message = oldImg ? '修改信息成功' : '入驻成功';
            if (oldImg === form.img) {
                http_1.request({ url: url, data: form })
                    .then(function () { return wx.showToast({ title: message }); })
                    .catch(console.log);
            }
            else {
                http_1.uploadFile({
                    url: url, name: 'file',
                    filePath: form.img,
                    formData: form
                })
                    .then(function () { return wx.showToast({ title: message }); })
                    .catch(console.log);
            }
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGxlZF9pbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNldHRsZWRfaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSwrREFBaUU7QUFDakUsNENBQTBEO0FBQzFELGlEQUE4RDtBQUM5RCxpREFBeUQ7QUFFekQsU0FBUyxDQUFDO0lBQ04sU0FBUyxFQUFFLENBQUMsc0JBQW1CLENBQUM7SUFDaEMsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFO1lBQ0YsSUFBSSxFQUFFLEVBQUU7WUFDUixLQUFLLEVBQUUsRUFBRTtZQUNULE1BQU0sRUFBRSxFQUFFO1lBQ1YsT0FBTyxFQUFFLEVBQUU7WUFDWCxHQUFHLEVBQUUsRUFBRTtTQUNWO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsTUFBTSxFQUFFLG9CQUFvQjtZQUM1QixPQUFPLEVBQUUsUUFBUTtTQUNwQjtRQUNELE1BQU0sRUFBRSxFQUFFO0tBQ2I7SUFDRCxLQUFLO1FBQUwsaUJBU0M7UUFSRyxJQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsMkJBQW1CLENBQUMsS0FBSyxzQkFBYyxDQUFDLFFBQVEsRUFBRTtZQUNuRSxjQUFPLENBQVksRUFBQyxHQUFHLEVBQUUsMkJBQTJCLEVBQUMsQ0FBQztpQkFDakQsSUFBSSxDQUFDLFVBQUMsRUFBTTtvQkFBTCxjQUFJO2dCQUNSLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxPQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztZQUNoQyxDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMzQjtJQUNMLENBQUM7SUFDRCxPQUFPLEVBQUU7UUFDTCxPQUFPO1lBQ0csSUFBQSxjQUEwQixFQUF6QixrQkFBTSxFQUFFLGNBQWlCLENBQUM7WUFDakMsSUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDO1lBQzlELElBQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDM0MsSUFBRyxNQUFNLEtBQUssSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDcEIsY0FBTyxDQUFDLEVBQUUsR0FBRyxLQUFBLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO3FCQUN2QixJQUFJLENBQUMsY0FBTSxPQUFBLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBaEMsQ0FBZ0MsQ0FBQztxQkFDNUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUMzQjtpQkFBTTtnQkFDSCxpQkFBVSxDQUFDO29CQUNQLEdBQUcsS0FBQSxFQUFFLElBQUksRUFBRSxNQUFNO29CQUNqQixRQUFRLEVBQUUsSUFBSSxDQUFDLEdBQUc7b0JBQ2xCLFFBQVEsRUFBRSxJQUFJO2lCQUNqQixDQUFDO3FCQUNHLElBQUksQ0FBQyxjQUFNLE9BQUEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFoQyxDQUFnQyxDQUFDO3FCQUM1QyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzNCO1FBQ0wsQ0FBQztLQUNKO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOWVhuWutuWFpempu1xyXG4gKi9cclxuaW1wb3J0IFByb2plY3RGb3JtQmVoYXZpb3IgZnJvbSAnLi4vLi4vLi4vYmVoYXZpb3IvcHJvamVjdF9mb3JtJztcclxuaW1wb3J0IHsgdXBsb2FkRmlsZSwgcmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2h0dHAnO1xyXG5pbXBvcnQgeyBVU0VSX0FVVEhFTlRJQ0FUSU9OIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnQvc3RvcmUnO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbiB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50L2luZGV4JztcclxuXHJcbkNvbXBvbmVudCh7XHJcbiAgICBiZWhhdmlvcnM6IFtQcm9qZWN0Rm9ybUJlaGF2aW9yXSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBmb3JtOiB7XHJcbiAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICBwaG9uZTogJycsXHJcbiAgICAgICAgICAgIGRldGFpbDogJycsXHJcbiAgICAgICAgICAgIGFkZHJlc3M6ICcnLFxyXG4gICAgICAgICAgICBpbWc6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0ZWxSdWxlOiB7XHJcbiAgICAgICAgICAgIHJlZ2V4cDogJ14xWzM0NTY3ODldXFxcXGR7OX0kJyxcclxuICAgICAgICAgICAgbWVzc2FnZTogJ+aXoOaViOeUteivneWPt+eggSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9sZEltZzogJydcclxuICAgIH0sXHJcbiAgICByZWFkeSgpIHtcclxuICAgICAgICBpZih3eC5nZXRTdG9yYWdlU3luYyhVU0VSX0FVVEhFTlRJQ0FUSU9OKSA9PT0gQXV0aGVudGljYXRpb24ub2ZmaWNpYWwpIHtcclxuICAgICAgICAgICAgcmVxdWVzdDxJTWVyY2hhbnQ+KHt1cmw6ICcvYXBpL21lcmNoYW50L2dldEJ5VXNlcklkJ30pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoe2RhdGF9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLm9sZEltZyA9IGRhdGEuaW1nO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSEoe2Zvcm06IGRhdGF9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgX3N1Ym1pdCgpIHtcclxuICAgICAgICAgICAgY29uc3Qge29sZEltZywgZm9ybX0gPSB0aGlzLmRhdGE7XHJcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IG9sZEltZyA/ICcvYXBpL21lcmNoYW50L3VwZGF0ZScgOiAnL2FwaS9tZXJjaGFudCc7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBvbGRJbWcgPyAn5L+u5pS55L+h5oGv5oiQ5YqfJyA6ICflhaXpqbvmiJDlip8nO1xyXG4gICAgICAgICAgICBpZihvbGRJbWcgPT09IGZvcm0uaW1nKSB7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0KHsgdXJsLCBkYXRhOiBmb3JtIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gd3guc2hvd1RvYXN0KHsgdGl0bGU6IG1lc3NhZ2UgfSkpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHVwbG9hZEZpbGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybCwgbmFtZTogJ2ZpbGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVQYXRoOiBmb3JtLmltZyxcclxuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YTogZm9ybVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB3eC5zaG93VG9hc3QoeyB0aXRsZTogbWVzc2FnZSB9KSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19