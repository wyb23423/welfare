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
        if (wx.getStorageSync(store_1.IS_MERCHANT)) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGxlZF9pbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNldHRsZWRfaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUdBLCtEQUFpRTtBQUNqRSw0Q0FBOEM7QUFDOUMsNENBQTZDO0FBQzdDLGlEQUFzRDtBQVV0RCxTQUFTLENBQVk7SUFDakIsU0FBUyxFQUFFLENBQUMsc0JBQW1CLENBQUM7SUFDaEMsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFO1lBQ0YsSUFBSSxFQUFFLEVBQUU7WUFDUixLQUFLLEVBQUUsRUFBRTtZQUNULE1BQU0sRUFBRSxFQUFFO1lBQ1YsT0FBTyxFQUFFLEVBQUU7WUFDWCxHQUFHLEVBQUUsRUFBRTtZQUNQLE1BQU0sRUFBRSxFQUFFO1lBQ1YsV0FBVyxFQUFFLEVBQUU7U0FDbEI7UUFDRCxPQUFPLEVBQUU7WUFDTCxNQUFNLEVBQUUsb0JBQW9CO1lBQzVCLE9BQU8sRUFBRSxRQUFRO1NBQ3BCO1FBQ0QsT0FBTyxFQUFhLEVBQUU7S0FDekI7SUFDRCxLQUFLO1FBQUwsaUJBWUM7UUFYRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDdkIsSUFBRyxFQUFFLENBQUMsY0FBYyxDQUFDLG1CQUFXLENBQUMsRUFBRTtZQUMvQixjQUFPLENBQVksRUFBQyxHQUFHLEVBQUUsMkJBQTJCLEVBQUMsQ0FBQztpQkFDakQsSUFBSSxDQUFDLFVBQUMsRUFBTTtvQkFBTCxjQUFJO2dCQUNSLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxnQkFBTyxJQUFJLENBQUMsQ0FBQztnQkFDOUIsS0FBSSxDQUFDLE9BQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1lBQ2hDLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRXhCLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDO1NBQzdDO0lBQ0wsQ0FBQztJQUNELE9BQU8sRUFBRTtRQUNMLE9BQU87WUFDSCxJQUFNLFlBQVksR0FBRyxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsYUFBYSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDdkUsSUFBQSxjQUFrQyxFQUF2QixvQkFBRyxFQUFHLGNBQWlCLENBQUM7WUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUM7aUJBQ3BCLElBQUksQ0FBQyxVQUFDLEVBQTZCO29CQUE1QixjQUFNLEVBQUUsY0FBTSxFQUFFLG1CQUFXO2dCQUMvQixJQUFNLElBQUksZ0JBQU8sSUFBSSxJQUFFLE1BQU0sUUFBQSxFQUFFLFdBQVcsYUFBQSxFQUFFLEdBQUcsRUFBRSxNQUFNLEdBQUMsQ0FBQztnQkFDekQsT0FBTyxjQUFPLENBQUMsRUFBQyxHQUFHLEVBQUUsZUFBZSxFQUFFLElBQUksTUFBQSxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQztZQUMvRSxDQUFDLENBQUM7aUJBQ0QsSUFBSSxDQUFDLGNBQU0sT0FBQSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksa0JBQUksRUFBRSxDQUFDLEVBQWpELENBQWlELENBQUM7aUJBQzdELEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUIsQ0FBQztRQUNELE1BQU0sWUFBQyxHQUFxQztZQUNsQyxJQUFBLGNBQTJCLEVBQTFCLG9CQUFPLEVBQUUsY0FBaUIsQ0FBQztZQUNsQyxPQUFPLGFBQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDM0MsQ0FBQztLQUNKO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOWVhuWutuWFpempu1xyXG4gKi9cclxuaW1wb3J0IFByb2plY3RGb3JtQmVoYXZpb3IgZnJvbSAnLi4vLi4vLi4vYmVoYXZpb3IvcHJvamVjdF9mb3JtJztcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2h0dHAnO1xyXG5pbXBvcnQgeyB1cGxvYWQgfSBmcm9tICcuLi8uLi8uLi91dGlscy91dGlsJztcclxuaW1wb3J0IHsgSVNfTUVSQ0hBTlQgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudC9zdG9yZSc7XHJcblxyXG5pbnRlcmZhY2UgU2V0dGxlZEluIGV4dGVuZHMgV3hDb21wb25lbnQge1xyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGZvcm06IElNZXJjaGFudDtcclxuICAgICAgICBvbGREYXRhOiBJTWVyY2hhbnQ7XHJcbiAgICB9O1xyXG4gICAgdXBsb2FkKGtleTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+O1xyXG59XHJcblxyXG5Db21wb25lbnQ8U2V0dGxlZEluPih7XHJcbiAgICBiZWhhdmlvcnM6IFtQcm9qZWN0Rm9ybUJlaGF2aW9yXSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBmb3JtOiB7XHJcbiAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICBwaG9uZTogJycsXHJcbiAgICAgICAgICAgIGRldGFpbDogJycsXHJcbiAgICAgICAgICAgIGFkZHJlc3M6ICcnLFxyXG4gICAgICAgICAgICBpbWc6ICcnLFxyXG4gICAgICAgICAgICBpZENhcmQ6ICcnLFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRlbFJ1bGU6IHtcclxuICAgICAgICAgICAgcmVnZXhwOiAnXjFbMzQ1Njc4OV1cXFxcZHs5fSQnLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiAn5peg5pWI55S16K+d5Y+356CBJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb2xkRGF0YTogPElNZXJjaGFudD57fVxyXG4gICAgfSxcclxuICAgIHJlYWR5KCkge1xyXG4gICAgICAgIHRoaXMuZGF0YS5vbGREYXRhID0ge307XHJcbiAgICAgICAgaWYod3guZ2V0U3RvcmFnZVN5bmMoSVNfTUVSQ0hBTlQpKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3Q8SU1lcmNoYW50Pih7dXJsOiAnL2FwaS9tZXJjaGFudC9nZXRCeVVzZXJJZCd9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5vbGREYXRhID0gey4uLmRhdGF9O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSEoe2Zvcm06IGRhdGF9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xyXG5cclxuICAgICAgICAgICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHt0aXRsZTogJ+S/ruaUueS/oeaBryd9KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIF9zdWJtaXQoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbGVQcm9taXNlcyA9IFsnaW1nJywgJ2lkQ2FyZCcsICdjcmVkZW50aWFscyddLm1hcCh0aGlzLnVwbG9hZCwgdGhpcyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHtvbGREYXRhOiB7aW1nfSwgZm9ybX0gPSB0aGlzLmRhdGE7XHJcbiAgICAgICAgICAgIFByb21pc2UuYWxsKGZpbGVQcm9taXNlcylcclxuICAgICAgICAgICAgICAgIC50aGVuKChbbmV3SW1nLCBpZENhcmQsIGNyZWRlbnRpYWxzXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7Li4uZm9ybSwgaWRDYXJkLCBjcmVkZW50aWFscywgaW1nOiBuZXdJbWd9O1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXF1ZXN0KHt1cmw6ICcvYXBpL21lcmNoYW50JywgZGF0YSwgbWV0aG9kOiBpbWcgPyAnUE9TVCcgOiAnUFVUJ30pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHd4LnNob3dUb2FzdCh7IHRpdGxlOiBgJHtpbWcgPyAn5L+u5pS5JyA6ICfnlLPor7cnfeaIkOWKn2AgfSkpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXBsb2FkKGtleTogJ2lkQ2FyZCcgfCAnY3JlZGVudGlhbHMnIHwgJ2ltZycpIHtcclxuICAgICAgICAgICAgY29uc3Qge29sZERhdGEsIGZvcm19ID0gdGhpcy5kYXRhO1xyXG4gICAgICAgICAgICByZXR1cm4gdXBsb2FkKGZvcm1ba2V5XSwgb2xkRGF0YVtrZXldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=