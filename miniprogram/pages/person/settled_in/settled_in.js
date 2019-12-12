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
var store_1 = require("../../../constant/store");
var index_1 = require("../../../constant/index");
var util_1 = require("../../../utils/util");
Component({
    behaviors: [project_form_1.default],
    data: {
        form: {
            name: '',
            phone: '',
            detail: '',
            address: '',
            img: '',
            idCard: '',
            credentials: ''
        },
        telRule: {
            regexp: '^1[3456789]\\d{9}$',
            message: '无效电话号码'
        },
        oldData: {}
    },
    ready: function () {
        var _this = this;
        this.data.oldData = {};
        if (wx.getStorageSync(store_1.USER_AUTHENTICATION) === index_1.Authentication.official) {
            http_1.request({ url: '/api/merchant/getByUserId' })
                .then(function (_a) {
                var data = _a.data;
                _this.data.oldData = __assign({}, data);
                _this.setData({ form: data });
            })
                .catch(console.log);
            wx.setNavigationBarTitle({ title: '修改信息' });
        }
    },
    methods: {
        _submit: function () {
            var filePromises = ['img', 'idCard', 'credentials'].map(this.upload, this);
            var _a = this.data, img = _a.oldData.img, form = _a.form;
            Promise.all(filePromises)
                .then(function (_a) {
                var newImg = _a[0], idCard = _a[1], credentials = _a[2];
                var data = __assign({}, form, { idCard: idCard, credentials: credentials, img: newImg });
                var url = img ? '/api/merchant/update' : '/api/merchant';
                return http_1.request({ url: url, data: data, method: img ? 'POST' : 'PUT' });
            })
                .then(function () { return wx.showToast({ title: (img ? '修改' : '申请') + "\u6210\u529F" }); })
                .catch(console.log);
        },
        upload: function (key) {
            var _a = this.data, oldData = _a.oldData, form = _a.form;
            return util_1.upload(form[key], oldData[key]);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGxlZF9pbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNldHRsZWRfaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUdBLCtEQUFpRTtBQUNqRSw0Q0FBMEQ7QUFDMUQsaURBQThEO0FBQzlELGlEQUF5RDtBQUN6RCw0Q0FBNkM7QUFVN0MsU0FBUyxDQUFZO0lBQ2pCLFNBQVMsRUFBRSxDQUFDLHNCQUFtQixDQUFDO0lBQ2hDLElBQUksRUFBRTtRQUNGLElBQUksRUFBRTtZQUNGLElBQUksRUFBRSxFQUFFO1lBQ1IsS0FBSyxFQUFFLEVBQUU7WUFDVCxNQUFNLEVBQUUsRUFBRTtZQUNWLE9BQU8sRUFBRSxFQUFFO1lBQ1gsR0FBRyxFQUFFLEVBQUU7WUFDUCxNQUFNLEVBQUUsRUFBRTtZQUNWLFdBQVcsRUFBRSxFQUFFO1NBQ2xCO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsTUFBTSxFQUFFLG9CQUFvQjtZQUM1QixPQUFPLEVBQUUsUUFBUTtTQUNwQjtRQUNELE9BQU8sRUFBYSxFQUFFO0tBQ3pCO0lBQ0QsS0FBSztRQUFMLGlCQVlDO1FBWEcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQywyQkFBbUIsQ0FBQyxLQUFLLHNCQUFjLENBQUMsUUFBUSxFQUFFO1lBQ25FLGNBQU8sQ0FBWSxFQUFDLEdBQUcsRUFBRSwyQkFBMkIsRUFBQyxDQUFDO2lCQUNqRCxJQUFJLENBQUMsVUFBQyxFQUFNO29CQUFMLGNBQUk7Z0JBQ1IsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLGdCQUFPLElBQUksQ0FBQyxDQUFDO2dCQUM5QixLQUFJLENBQUMsT0FBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7WUFDaEMsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFeEIsRUFBRSxDQUFDLHFCQUFxQixDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7U0FDN0M7SUFDTCxDQUFDO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsT0FBTztZQUNILElBQU0sWUFBWSxHQUFHLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN2RSxJQUFBLGNBQWtDLEVBQXZCLG9CQUFHLEVBQUcsY0FBaUIsQ0FBQztZQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQztpQkFDcEIsSUFBSSxDQUFDLFVBQUMsRUFBNkI7b0JBQTVCLGNBQU0sRUFBRSxjQUFNLEVBQUUsbUJBQVc7Z0JBQy9CLElBQU0sSUFBSSxnQkFBTyxJQUFJLElBQUUsTUFBTSxRQUFBLEVBQUUsV0FBVyxhQUFBLEVBQUUsR0FBRyxFQUFFLE1BQU0sR0FBQyxDQUFDO2dCQUN6RCxJQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUM7Z0JBQzNELE9BQU8sY0FBTyxDQUFDLEVBQUMsR0FBRyxLQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDO1lBQzlELENBQUMsQ0FBQztpQkFDRCxJQUFJLENBQUMsY0FBTSxPQUFBLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxrQkFBSSxFQUFFLENBQUMsRUFBakQsQ0FBaUQsQ0FBQztpQkFDN0QsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QixDQUFDO1FBQ0QsTUFBTSxZQUFDLEdBQXFDO1lBQ2xDLElBQUEsY0FBMkIsRUFBMUIsb0JBQU8sRUFBRSxjQUFpQixDQUFDO1lBQ2xDLE9BQU8sYUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMzQyxDQUFDO0tBQ0o7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5ZWG5a625YWl6am7XHJcbiAqL1xyXG5pbXBvcnQgUHJvamVjdEZvcm1CZWhhdmlvciBmcm9tICcuLi8uLi8uLi9iZWhhdmlvci9wcm9qZWN0X2Zvcm0nO1xyXG5pbXBvcnQgeyB1cGxvYWRGaWxlLCByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvaHR0cCc7XHJcbmltcG9ydCB7IFVTRVJfQVVUSEVOVElDQVRJT04gfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudC9zdG9yZSc7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnQvaW5kZXgnO1xyXG5pbXBvcnQgeyB1cGxvYWQgfSBmcm9tICcuLi8uLi8uLi91dGlscy91dGlsJztcclxuXHJcbmludGVyZmFjZSBTZXR0bGVkSW4gZXh0ZW5kcyBXeENvbXBvbmVudCB7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgZm9ybTogSU1lcmNoYW50O1xyXG4gICAgICAgIG9sZERhdGE6IElNZXJjaGFudDtcclxuICAgIH07XHJcbiAgICB1cGxvYWQoa2V5OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz47XHJcbn1cclxuXHJcbkNvbXBvbmVudDxTZXR0bGVkSW4+KHtcclxuICAgIGJlaGF2aW9yczogW1Byb2plY3RGb3JtQmVoYXZpb3JdLFxyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGZvcm06IHtcclxuICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgIHBob25lOiAnJyxcclxuICAgICAgICAgICAgZGV0YWlsOiAnJyxcclxuICAgICAgICAgICAgYWRkcmVzczogJycsXHJcbiAgICAgICAgICAgIGltZzogJycsXHJcbiAgICAgICAgICAgIGlkQ2FyZDogJycsXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGVsUnVsZToge1xyXG4gICAgICAgICAgICByZWdleHA6ICdeMVszNDU2Nzg5XVxcXFxkezl9JCcsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICfml6DmlYjnlLXor53lj7fnoIEnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbGREYXRhOiA8SU1lcmNoYW50Pnt9XHJcbiAgICB9LFxyXG4gICAgcmVhZHkoKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhLm9sZERhdGEgPSB7fTtcclxuICAgICAgICBpZih3eC5nZXRTdG9yYWdlU3luYyhVU0VSX0FVVEhFTlRJQ0FUSU9OKSA9PT0gQXV0aGVudGljYXRpb24ub2ZmaWNpYWwpIHtcclxuICAgICAgICAgICAgcmVxdWVzdDxJTWVyY2hhbnQ+KHt1cmw6ICcvYXBpL21lcmNoYW50L2dldEJ5VXNlcklkJ30pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoe2RhdGF9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLm9sZERhdGEgPSB7Li4uZGF0YX07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhISh7Zm9ybTogZGF0YX0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XHJcblxyXG4gICAgICAgICAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe3RpdGxlOiAn5L+u5pS55L+h5oGvJ30pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgX3N1Ym1pdCgpIHtcclxuICAgICAgICAgICAgY29uc3QgZmlsZVByb21pc2VzID0gWydpbWcnLCAnaWRDYXJkJywgJ2NyZWRlbnRpYWxzJ10ubWFwKHRoaXMudXBsb2FkLCB0aGlzKTtcclxuICAgICAgICAgICAgY29uc3Qge29sZERhdGE6IHtpbWd9LCBmb3JtfSA9IHRoaXMuZGF0YTtcclxuICAgICAgICAgICAgUHJvbWlzZS5hbGwoZmlsZVByb21pc2VzKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKFtuZXdJbWcsIGlkQ2FyZCwgY3JlZGVudGlhbHNdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHsuLi5mb3JtLCBpZENhcmQsIGNyZWRlbnRpYWxzLCBpbWc6IG5ld0ltZ307XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gaW1nID8gJy9hcGkvbWVyY2hhbnQvdXBkYXRlJyA6ICcvYXBpL21lcmNoYW50JztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVxdWVzdCh7dXJsLCBkYXRhLCBtZXRob2Q6IGltZyA/ICdQT1NUJyA6ICdQVVQnfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gd3guc2hvd1RvYXN0KHsgdGl0bGU6IGAke2ltZyA/ICfkv67mlLknIDogJ+eUs+ivtyd95oiQ5YqfYCB9KSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB1cGxvYWQoa2V5OiAnaWRDYXJkJyB8ICdjcmVkZW50aWFscycgfCAnaW1nJykge1xyXG4gICAgICAgICAgICBjb25zdCB7b2xkRGF0YSwgZm9ybX0gPSB0aGlzLmRhdGE7XHJcbiAgICAgICAgICAgIHJldHVybiB1cGxvYWQoZm9ybVtrZXldLCBvbGREYXRhW2tleV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==