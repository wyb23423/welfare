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
var util_1 = require("../../../utils/util");
var store_1 = require("../../../constant/store");
Component({
    behaviors: [project_form_1.default],
    data: {
        form: {
            name: '',
            phone: '',
            detail: '',
            address: '',
            img: '',
            credentials: '',
            idCard1: '',
            idCard2: ''
        },
        telRule: {
            regexp: '^1[3456789]\\d{9}$',
            message: '无效电话号码'
        },
        oldData: {},
        hasOld: false
    },
    ready: function () {
        var _this = this;
        this.data.oldData = {};
        if (wx.getStorageSync(store_1.IS_MERCHANT)) {
            http_1.request({ url: '/api/merchant/getByUserId' })
                .then(function (_a) {
                var data = _a.data;
                var _b = data.idCard, idCard1 = _b[0], idCard2 = _b[1];
                _this.data.oldData = __assign({}, data, { idCard1: idCard1, idCard2: idCard2 });
                _this.setData({
                    form: __assign({}, data, { idCard1: idCard1, idCard2: idCard2 }),
                    hasOld: true
                });
            })
                .catch(console.log);
            wx.setNavigationBarTitle({ title: '修改信息' });
        }
    },
    methods: {
        _submit: function () {
            var _a = this.data, hasOld = _a.hasOld, form = _a.form;
            if (!(form.idCard1 && form.idCard2)) {
                return wx.showToast({ title: '身份证必须包含正反面', icon: 'none' });
            }
            var filePromises = ['img', 'idCard1', 'idCard2', 'credentials'].map(this.upload, this);
            Promise.all(filePromises)
                .then(function (_a) {
                var newImg = _a[0], idCard1 = _a[1], idCard2 = _a[2], credentials = _a[3];
                var data = __assign({}, form, { idCard: [idCard1, idCard2], credentials: credentials, img: newImg });
                return http_1.request({ url: '/api/merchant', data: data, method: hasOld ? 'POST' : 'PUT' });
            })
                .then(function () { return wx.showToast({ title: (hasOld ? '修改' : '申请') + "\u6210\u529F" }); })
                .catch(console.log);
        },
        upload: function (key) {
            var _a = this.data, oldData = _a.oldData, form = _a.form;
            return util_1.upload(form[key], oldData[key]);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGxlZF9pbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNldHRsZWRfaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUdBLCtEQUFpRTtBQUNqRSw0Q0FBOEM7QUFDOUMsNENBQTZDO0FBQzdDLGlEQUFzRDtBQWF0RCxTQUFTLENBQVk7SUFDakIsU0FBUyxFQUFFLENBQUMsc0JBQW1CLENBQUM7SUFDaEMsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFO1lBQ0YsSUFBSSxFQUFFLEVBQUU7WUFDUixLQUFLLEVBQUUsRUFBRTtZQUNULE1BQU0sRUFBRSxFQUFFO1lBQ1YsT0FBTyxFQUFFLEVBQUU7WUFDWCxHQUFHLEVBQUUsRUFBRTtZQUNQLFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxPQUFPLEVBQUUsRUFBRTtTQUNkO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsTUFBTSxFQUFFLG9CQUFvQjtZQUM1QixPQUFPLEVBQUUsUUFBUTtTQUNwQjtRQUNELE9BQU8sRUFBRSxFQUFFO1FBQ1gsTUFBTSxFQUFFLEtBQUs7S0FDaEI7SUFDRCxLQUFLO1FBQUwsaUJBZ0JDO1FBZkcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxtQkFBVyxDQUFDLEVBQUU7WUFDL0IsY0FBTyxDQUFZLEVBQUMsR0FBRyxFQUFFLDJCQUEyQixFQUFDLENBQUM7aUJBQ2pELElBQUksQ0FBQyxVQUFDLEVBQU07b0JBQUwsY0FBSTtnQkFDRixJQUFBLGdCQUFnQyxFQUEvQixlQUFPLEVBQUUsZUFBc0IsQ0FBQztnQkFDdkMsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLGdCQUFPLElBQUksSUFBRSxPQUFPLFNBQUEsRUFBRSxPQUFPLFNBQUEsR0FBQyxDQUFDO2dCQUNoRCxLQUFJLENBQUMsT0FBUSxDQUFDO29CQUNWLElBQUksZUFBTSxJQUFJLElBQUUsT0FBTyxTQUFBLEVBQUUsT0FBTyxTQUFBLEdBQUM7b0JBQ2pDLE1BQU0sRUFBRSxJQUFJO2lCQUNmLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRXhCLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDO1NBQzdDO0lBQ0wsQ0FBQztJQUNELE9BQU8sRUFBRTtRQUNMLE9BQU87WUFDRyxJQUFBLGNBQTBCLEVBQXpCLGtCQUFNLEVBQUUsY0FBaUIsQ0FBQztZQUVqQyxJQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDaEMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQzthQUM1RDtZQUVELElBQU0sWUFBWSxHQUFHLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDekYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUM7aUJBQ3BCLElBQUksQ0FBQyxVQUFDLEVBQXVDO29CQUF0QyxjQUFNLEVBQUUsZUFBTyxFQUFFLGVBQU8sRUFBRSxtQkFBVztnQkFDekMsSUFBTSxJQUFJLGdCQUFPLElBQUksSUFBRSxNQUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUUsV0FBVyxhQUFBLEVBQUUsR0FBRyxFQUFFLE1BQU0sR0FBQyxDQUFDO2dCQUM3RSxPQUFPLGNBQU8sQ0FBQyxFQUFDLEdBQUcsRUFBRSxlQUFlLEVBQUUsSUFBSSxNQUFBLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDO1lBQ2xGLENBQUMsQ0FBQztpQkFDRCxJQUFJLENBQUMsY0FBTSxPQUFBLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxrQkFBSSxFQUFFLENBQUMsRUFBcEQsQ0FBb0QsQ0FBQztpQkFDaEUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QixDQUFDO1FBQ0QsTUFBTSxZQUFDLEdBQWtEO1lBQy9DLElBQUEsY0FBMkIsRUFBMUIsb0JBQU8sRUFBRSxjQUFpQixDQUFDO1lBQ2xDLE9BQU8sYUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMzQyxDQUFDO0tBQ0o7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5ZWG5a625YWl6am7XHJcbiAqL1xyXG5pbXBvcnQgUHJvamVjdEZvcm1CZWhhdmlvciBmcm9tICcuLi8uLi8uLi9iZWhhdmlvci9wcm9qZWN0X2Zvcm0nO1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvaHR0cCc7XHJcbmltcG9ydCB7IHVwbG9hZCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5pbXBvcnQgeyBJU19NRVJDSEFOVCB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50L3N0b3JlJztcclxuXHJcbnR5cGUgTWVyY2hhbnREYXRhID0gSU1lcmNoYW50ICYge2lkQ2FyZDE6IHN0cmluZzsgaWRDYXJkMjogc3RyaW5nfTtcclxuXHJcbmludGVyZmFjZSBTZXR0bGVkSW4gZXh0ZW5kcyBXeENvbXBvbmVudCB7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgZm9ybTogTWVyY2hhbnREYXRhO1xyXG4gICAgICAgIG9sZERhdGE6IE1lcmNoYW50RGF0YTtcclxuICAgICAgICBoYXNPbGQ6IGJvb2xlYW47XHJcbiAgICB9O1xyXG4gICAgdXBsb2FkKGtleTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+O1xyXG59XHJcblxyXG5Db21wb25lbnQ8U2V0dGxlZEluPih7XHJcbiAgICBiZWhhdmlvcnM6IFtQcm9qZWN0Rm9ybUJlaGF2aW9yXSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBmb3JtOiB7XHJcbiAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICBwaG9uZTogJycsXHJcbiAgICAgICAgICAgIGRldGFpbDogJycsXHJcbiAgICAgICAgICAgIGFkZHJlc3M6ICcnLFxyXG4gICAgICAgICAgICBpbWc6ICcnLFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJycsXHJcbiAgICAgICAgICAgIGlkQ2FyZDE6ICcnLFxyXG4gICAgICAgICAgICBpZENhcmQyOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGVsUnVsZToge1xyXG4gICAgICAgICAgICByZWdleHA6ICdeMVszNDU2Nzg5XVxcXFxkezl9JCcsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICfml6DmlYjnlLXor53lj7fnoIEnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbGREYXRhOiB7fSxcclxuICAgICAgICBoYXNPbGQ6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgcmVhZHkoKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhLm9sZERhdGEgPSB7fTtcclxuICAgICAgICBpZih3eC5nZXRTdG9yYWdlU3luYyhJU19NRVJDSEFOVCkpIHtcclxuICAgICAgICAgICAgcmVxdWVzdDxJTWVyY2hhbnQ+KHt1cmw6ICcvYXBpL21lcmNoYW50L2dldEJ5VXNlcklkJ30pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoe2RhdGF9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgW2lkQ2FyZDEsIGlkQ2FyZDJdID0gZGF0YS5pZENhcmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLm9sZERhdGEgPSB7Li4uZGF0YSwgaWRDYXJkMSwgaWRDYXJkMn07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm06IHsuLi5kYXRhLCBpZENhcmQxLCBpZENhcmQyfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFzT2xkOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuXHJcbiAgICAgICAgICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7dGl0bGU6ICfkv67mlLnkv6Hmga8nfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBfc3VibWl0KCkge1xyXG4gICAgICAgICAgICBjb25zdCB7aGFzT2xkLCBmb3JtfSA9IHRoaXMuZGF0YTtcclxuXHJcbiAgICAgICAgICAgIGlmKCEoZm9ybS5pZENhcmQxICYmIGZvcm0uaWRDYXJkMikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB3eC5zaG93VG9hc3Qoe3RpdGxlOiAn6Lqr5Lu96K+B5b+F6aG75YyF5ZCr5q2j5Y+N6Z2iJywgaWNvbjogJ25vbmUnfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGZpbGVQcm9taXNlcyA9IFsnaW1nJywgJ2lkQ2FyZDEnLCAnaWRDYXJkMicsICdjcmVkZW50aWFscyddLm1hcCh0aGlzLnVwbG9hZCwgdGhpcyk7XHJcbiAgICAgICAgICAgIFByb21pc2UuYWxsKGZpbGVQcm9taXNlcylcclxuICAgICAgICAgICAgICAgIC50aGVuKChbbmV3SW1nLCBpZENhcmQxLCBpZENhcmQyLCBjcmVkZW50aWFsc10pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gey4uLmZvcm0sIGlkQ2FyZDogW2lkQ2FyZDEsIGlkQ2FyZDJdLCBjcmVkZW50aWFscywgaW1nOiBuZXdJbWd9O1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXF1ZXN0KHt1cmw6ICcvYXBpL21lcmNoYW50JywgZGF0YSwgbWV0aG9kOiBoYXNPbGQgPyAnUE9TVCcgOiAnUFVUJ30pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHd4LnNob3dUb2FzdCh7IHRpdGxlOiBgJHtoYXNPbGQgPyAn5L+u5pS5JyA6ICfnlLPor7cnfeaIkOWKn2AgfSkpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXBsb2FkKGtleTogJ2lkQ2FyZDEnIHwgJ2lkQ2FyZDInIHwgJ2NyZWRlbnRpYWxzJyB8ICdpbWcnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHtvbGREYXRhLCBmb3JtfSA9IHRoaXMuZGF0YTtcclxuICAgICAgICAgICAgcmV0dXJuIHVwbG9hZChmb3JtW2tleV0sIG9sZERhdGFba2V5XSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19