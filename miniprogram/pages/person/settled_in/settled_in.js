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
        oldData: {}
    },
    ready: function () {
        var _this = this;
        this.data.oldData = {};
        if (wx.getStorageSync(store_1.IS_MERCHANT)) {
            http_1.request({ url: '/api/merchant/getByUserId' })
                .then(function (_a) {
                var data = _a.data;
                var _b = JSON.parse(data.idCard), idCard1 = _b[0], idCard2 = _b[1];
                _this.data.oldData = __assign({}, data, { idCard1: idCard1, idCard2: idCard2 });
                _this.setData({ form: __assign({}, data, { idCard1: idCard1, idCard2: idCard2 }) });
            })
                .catch(console.log);
            wx.setNavigationBarTitle({ title: '修改信息' });
        }
    },
    methods: {
        _submit: function () {
            var _a = this.data, img = _a.oldData.img, form = _a.form;
            if (!(form.idCard1 && form.idCard2)) {
                return wx.showToast({ title: '身份证必须包含正反面', icon: 'none' });
            }
            var filePromises = ['img', 'idCard1', 'idCard2', 'credentials'].map(this.upload, this);
            Promise.all(filePromises)
                .then(function (_a) {
                var newImg = _a[0], idCard1 = _a[1], idCard2 = _a[2], credentials = _a[3];
                var data = __assign({}, form, { idCard: JSON.stringify([idCard1, idCard2]), credentials: credentials, img: newImg });
                return http_1.request({ url: '/api/merchant', data: data, method: img ? 'POST' : 'PUT' });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGxlZF9pbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNldHRsZWRfaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUdBLCtEQUFpRTtBQUNqRSw0Q0FBOEM7QUFDOUMsNENBQTZDO0FBQzdDLGlEQUFzRDtBQVl0RCxTQUFTLENBQVk7SUFDakIsU0FBUyxFQUFFLENBQUMsc0JBQW1CLENBQUM7SUFDaEMsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFO1lBQ0YsSUFBSSxFQUFFLEVBQUU7WUFDUixLQUFLLEVBQUUsRUFBRTtZQUNULE1BQU0sRUFBRSxFQUFFO1lBQ1YsT0FBTyxFQUFFLEVBQUU7WUFDWCxHQUFHLEVBQUUsRUFBRTtZQUNQLFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxPQUFPLEVBQUUsRUFBRTtTQUNkO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsTUFBTSxFQUFFLG9CQUFvQjtZQUM1QixPQUFPLEVBQUUsUUFBUTtTQUNwQjtRQUNELE9BQU8sRUFBRSxFQUFFO0tBQ2Q7SUFDRCxLQUFLO1FBQUwsaUJBYUM7UUFaRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDdkIsSUFBRyxFQUFFLENBQUMsY0FBYyxDQUFDLG1CQUFXLENBQUMsRUFBRTtZQUMvQixjQUFPLENBQVksRUFBQyxHQUFHLEVBQUUsMkJBQTJCLEVBQUMsQ0FBQztpQkFDakQsSUFBSSxDQUFDLFVBQUMsRUFBTTtvQkFBTCxjQUFJO2dCQUNGLElBQUEsNEJBQTRDLEVBQTNDLGVBQU8sRUFBRSxlQUFrQyxDQUFDO2dCQUNuRCxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sZ0JBQU8sSUFBSSxJQUFFLE9BQU8sU0FBQSxFQUFFLE9BQU8sU0FBQSxHQUFDLENBQUM7Z0JBQ2hELEtBQUksQ0FBQyxPQUFRLENBQUMsRUFBQyxJQUFJLGVBQU0sSUFBSSxJQUFFLE9BQU8sU0FBQSxFQUFFLE9BQU8sU0FBQSxHQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQ3ZELENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRXhCLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDO1NBQzdDO0lBQ0wsQ0FBQztJQUNELE9BQU8sRUFBRTtRQUNMLE9BQU87WUFDRyxJQUFBLGNBQWtDLEVBQXZCLG9CQUFHLEVBQUcsY0FBaUIsQ0FBQztZQUV6QyxJQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDaEMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQzthQUM1RDtZQUVELElBQU0sWUFBWSxHQUFHLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDekYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUM7aUJBQ3BCLElBQUksQ0FBQyxVQUFDLEVBQXVDO29CQUF0QyxjQUFNLEVBQUUsZUFBTyxFQUFFLGVBQU8sRUFBRSxtQkFBVztnQkFDekMsSUFBTSxJQUFJLGdCQUFPLElBQUksSUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQyxFQUFFLFdBQVcsYUFBQSxFQUFFLEdBQUcsRUFBRSxNQUFNLEdBQUMsQ0FBQztnQkFDN0YsT0FBTyxjQUFPLENBQUMsRUFBQyxHQUFHLEVBQUUsZUFBZSxFQUFFLElBQUksTUFBQSxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQztZQUMvRSxDQUFDLENBQUM7aUJBQ0QsSUFBSSxDQUFDLGNBQU0sT0FBQSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksa0JBQUksRUFBRSxDQUFDLEVBQWpELENBQWlELENBQUM7aUJBQzdELEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUIsQ0FBQztRQUNELE1BQU0sWUFBQyxHQUFrRDtZQUMvQyxJQUFBLGNBQTJCLEVBQTFCLG9CQUFPLEVBQUUsY0FBaUIsQ0FBQztZQUNsQyxPQUFPLGFBQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDM0MsQ0FBQztLQUNKO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOWVhuWutuWFpempu1xyXG4gKi9cclxuaW1wb3J0IFByb2plY3RGb3JtQmVoYXZpb3IgZnJvbSAnLi4vLi4vLi4vYmVoYXZpb3IvcHJvamVjdF9mb3JtJztcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2h0dHAnO1xyXG5pbXBvcnQgeyB1cGxvYWQgfSBmcm9tICcuLi8uLi8uLi91dGlscy91dGlsJztcclxuaW1wb3J0IHsgSVNfTUVSQ0hBTlQgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudC9zdG9yZSc7XHJcblxyXG50eXBlIE1lcmNoYW50RGF0YSA9IElNZXJjaGFudCAmIHtpZENhcmQxOiBzdHJpbmc7IGlkQ2FyZDI6IHN0cmluZ307XHJcblxyXG5pbnRlcmZhY2UgU2V0dGxlZEluIGV4dGVuZHMgV3hDb21wb25lbnQge1xyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGZvcm06IE1lcmNoYW50RGF0YTtcclxuICAgICAgICBvbGREYXRhOiBNZXJjaGFudERhdGE7XHJcbiAgICB9O1xyXG4gICAgdXBsb2FkKGtleTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+O1xyXG59XHJcblxyXG5Db21wb25lbnQ8U2V0dGxlZEluPih7XHJcbiAgICBiZWhhdmlvcnM6IFtQcm9qZWN0Rm9ybUJlaGF2aW9yXSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBmb3JtOiB7XHJcbiAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICBwaG9uZTogJycsXHJcbiAgICAgICAgICAgIGRldGFpbDogJycsXHJcbiAgICAgICAgICAgIGFkZHJlc3M6ICcnLFxyXG4gICAgICAgICAgICBpbWc6ICcnLFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJycsXHJcbiAgICAgICAgICAgIGlkQ2FyZDE6ICcnLFxyXG4gICAgICAgICAgICBpZENhcmQyOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGVsUnVsZToge1xyXG4gICAgICAgICAgICByZWdleHA6ICdeMVszNDU2Nzg5XVxcXFxkezl9JCcsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICfml6DmlYjnlLXor53lj7fnoIEnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbGREYXRhOiB7fVxyXG4gICAgfSxcclxuICAgIHJlYWR5KCkge1xyXG4gICAgICAgIHRoaXMuZGF0YS5vbGREYXRhID0ge307XHJcbiAgICAgICAgaWYod3guZ2V0U3RvcmFnZVN5bmMoSVNfTUVSQ0hBTlQpKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3Q8SU1lcmNoYW50Pih7dXJsOiAnL2FwaS9tZXJjaGFudC9nZXRCeVVzZXJJZCd9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IFtpZENhcmQxLCBpZENhcmQyXSA9IEpTT04ucGFyc2UoZGF0YS5pZENhcmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5vbGREYXRhID0gey4uLmRhdGEsIGlkQ2FyZDEsIGlkQ2FyZDJ9O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSEoe2Zvcm06IHsuLi5kYXRhLCBpZENhcmQxLCBpZENhcmQyfX0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XHJcblxyXG4gICAgICAgICAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe3RpdGxlOiAn5L+u5pS55L+h5oGvJ30pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgX3N1Ym1pdCgpIHtcclxuICAgICAgICAgICAgY29uc3Qge29sZERhdGE6IHtpbWd9LCBmb3JtfSA9IHRoaXMuZGF0YTtcclxuXHJcbiAgICAgICAgICAgIGlmKCEoZm9ybS5pZENhcmQxICYmIGZvcm0uaWRDYXJkMikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB3eC5zaG93VG9hc3Qoe3RpdGxlOiAn6Lqr5Lu96K+B5b+F6aG75YyF5ZCr5q2j5Y+N6Z2iJywgaWNvbjogJ25vbmUnfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGZpbGVQcm9taXNlcyA9IFsnaW1nJywgJ2lkQ2FyZDEnLCAnaWRDYXJkMicsICdjcmVkZW50aWFscyddLm1hcCh0aGlzLnVwbG9hZCwgdGhpcyk7XHJcbiAgICAgICAgICAgIFByb21pc2UuYWxsKGZpbGVQcm9taXNlcylcclxuICAgICAgICAgICAgICAgIC50aGVuKChbbmV3SW1nLCBpZENhcmQxLCBpZENhcmQyLCBjcmVkZW50aWFsc10pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gey4uLmZvcm0sIGlkQ2FyZDogSlNPTi5zdHJpbmdpZnkoW2lkQ2FyZDEsIGlkQ2FyZDJdKSwgY3JlZGVudGlhbHMsIGltZzogbmV3SW1nfTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVxdWVzdCh7dXJsOiAnL2FwaS9tZXJjaGFudCcsIGRhdGEsIG1ldGhvZDogaW1nID8gJ1BPU1QnIDogJ1BVVCd9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB3eC5zaG93VG9hc3QoeyB0aXRsZTogYCR7aW1nID8gJ+S/ruaUuScgOiAn55Sz6K+3J33miJDlip9gIH0pKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVwbG9hZChrZXk6ICdpZENhcmQxJyB8ICdpZENhcmQyJyB8ICdjcmVkZW50aWFscycgfCAnaW1nJykge1xyXG4gICAgICAgICAgICBjb25zdCB7b2xkRGF0YSwgZm9ybX0gPSB0aGlzLmRhdGE7XHJcbiAgICAgICAgICAgIHJldHVybiB1cGxvYWQoZm9ybVtrZXldLCBvbGREYXRhW2tleV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==