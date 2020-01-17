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
            idCard: []
        },
        imgRule: {
            min: 2,
            message: '身份证必须包含正反面'
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
            var _a = this.data, hasOld = _a.hasOld, form = _a.form, oldData = _a.oldData;
            var filePromises = ['img', 'idCard1', 'idCard2', 'credentials'].map(this.upload, this);
            Promise.all(filePromises)
                .then(function (_a) {
                var newImg = _a[0], idCard1 = _a[1], idCard2 = _a[2], credentials = _a[3];
                var data = __assign({}, form, { credentials: credentials, img: newImg });
                if (idCard1 == null && idCard2 == null) {
                    data.idCard = null;
                }
                else {
                    data.idCard[0] = idCard1 ? idCard1 : oldData.idCard1;
                    data.idCard[1] = idCard2 ? idCard2 : oldData.idCard2;
                }
                return http_1.request({ url: '/api/merchant', data: data, method: hasOld ? 'POST' : 'PUT' });
            })
                .then(function () { return wx.showToast({ title: (hasOld ? '修改' : '申请') + "\u6210\u529F" }); })
                .catch(console.log);
        },
        upload: function (key) {
            var _a = this.data, _b = key, oldPath = _a.oldData[_b], _c = key, newPath = _a.form[_c];
            return util_1.upload(newPath, oldPath);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGxlZF9pbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNldHRsZWRfaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUdBLCtEQUFpRTtBQUNqRSw0Q0FBOEM7QUFDOUMsNENBQTZDO0FBQzdDLGlEQUFzRDtBQWF0RCxTQUFTLENBQVk7SUFDakIsU0FBUyxFQUFFLENBQUMsc0JBQW1CLENBQUM7SUFDaEMsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFO1lBQ0YsSUFBSSxFQUFFLEVBQUU7WUFDUixLQUFLLEVBQUUsRUFBRTtZQUNULE1BQU0sRUFBRSxFQUFFO1lBQ1YsT0FBTyxFQUFFLEVBQUU7WUFDWCxHQUFHLEVBQUUsRUFBRTtZQUNQLFdBQVcsRUFBRSxFQUFFO1lBQ2YsTUFBTSxFQUFFLEVBQUU7U0FDYjtRQUNELE9BQU8sRUFBRTtZQUNMLEdBQUcsRUFBRSxDQUFDO1lBQ04sT0FBTyxFQUFFLFlBQVk7U0FDeEI7UUFDRCxPQUFPLEVBQUU7WUFDTCxNQUFNLEVBQUUsb0JBQW9CO1lBQzVCLE9BQU8sRUFBRSxRQUFRO1NBQ3BCO1FBQ0QsT0FBTyxFQUFFLEVBQUU7UUFDWCxNQUFNLEVBQUUsS0FBSztLQUNoQjtJQUNELEtBQUs7UUFBTCxpQkFnQkM7UUFmRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDdkIsSUFBRyxFQUFFLENBQUMsY0FBYyxDQUFDLG1CQUFXLENBQUMsRUFBRTtZQUMvQixjQUFPLENBQVksRUFBQyxHQUFHLEVBQUUsMkJBQTJCLEVBQUMsQ0FBQztpQkFDakQsSUFBSSxDQUFDLFVBQUMsRUFBTTtvQkFBTCxjQUFJO2dCQUNGLElBQUEsZ0JBQWdDLEVBQS9CLGVBQU8sRUFBRSxlQUFzQixDQUFDO2dCQUN2QyxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sZ0JBQU8sSUFBSSxJQUFFLE9BQU8sU0FBQSxFQUFFLE9BQU8sU0FBQSxHQUFDLENBQUM7Z0JBQ2hELEtBQUksQ0FBQyxPQUFRLENBQUM7b0JBQ1YsSUFBSSxlQUFNLElBQUksSUFBRSxPQUFPLFNBQUEsRUFBRSxPQUFPLFNBQUEsR0FBQztvQkFDakMsTUFBTSxFQUFFLElBQUk7aUJBQ2YsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFeEIsRUFBRSxDQUFDLHFCQUFxQixDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7U0FDN0M7SUFDTCxDQUFDO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsT0FBTztZQUNHLElBQUEsY0FBcUMsRUFBbkMsa0JBQU0sRUFBRSxjQUFJLEVBQUUsb0JBQXFCLENBQUM7WUFFNUMsSUFBTSxZQUFZLEdBQUcsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN6RixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQztpQkFDcEIsSUFBSSxDQUFDLFVBQUMsRUFBdUM7b0JBQXRDLGNBQU0sRUFBRSxlQUFPLEVBQUUsZUFBTyxFQUFFLG1CQUFXO2dCQUN6QyxJQUFNLElBQUksZ0JBQU8sSUFBSSxJQUFFLFdBQVcsYUFBQSxFQUFFLEdBQUcsRUFBRSxNQUFNLEdBQUMsQ0FBQztnQkFDakQsSUFBRyxPQUFPLElBQUksSUFBSSxJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7b0JBQ25DLElBQUksQ0FBQyxNQUFNLEdBQVEsSUFBSSxDQUFDO2lCQUMzQjtxQkFBTTtvQkFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO29CQUNyRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO2lCQUN4RDtnQkFFRCxPQUFPLGNBQU8sQ0FBQyxFQUFDLEdBQUcsRUFBRSxlQUFlLEVBQUUsSUFBSSxNQUFBLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDO1lBQ2xGLENBQUMsQ0FBQztpQkFDRCxJQUFJLENBQUMsY0FBTSxPQUFBLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxrQkFBSSxFQUFFLENBQUMsRUFBcEQsQ0FBb0QsQ0FBQztpQkFDaEUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QixDQUFDO1FBQ0QsTUFBTSxZQUFDLEdBQWtEO1lBQy9DLElBQUEsY0FBK0QsRUFBcEQsUUFBSyxFQUFMLHdCQUFjLEVBQVUsUUFBSyxFQUFMLHFCQUE0QixDQUFDO1lBS3RFLE9BQU8sYUFBTSxDQUFDLE9BQU8sRUFBVSxPQUFPLENBQUMsQ0FBQztRQUM1QyxDQUFDO0tBQ0o7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5ZWG5a625YWl6am7XHJcbiAqL1xyXG5pbXBvcnQgUHJvamVjdEZvcm1CZWhhdmlvciBmcm9tICcuLi8uLi8uLi9iZWhhdmlvci9wcm9qZWN0X2Zvcm0nO1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvaHR0cCc7XHJcbmltcG9ydCB7IHVwbG9hZCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5pbXBvcnQgeyBJU19NRVJDSEFOVCB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50L3N0b3JlJztcclxuXHJcbnR5cGUgTWVyY2hhbnREYXRhID0gSU1lcmNoYW50ICYge2lkQ2FyZDE6IHN0cmluZzsgaWRDYXJkMjogc3RyaW5nfTtcclxuXHJcbmludGVyZmFjZSBTZXR0bGVkSW4gZXh0ZW5kcyBXeENvbXBvbmVudCB7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgZm9ybTogTWVyY2hhbnREYXRhO1xyXG4gICAgICAgIG9sZERhdGE6IE1lcmNoYW50RGF0YTtcclxuICAgICAgICBoYXNPbGQ6IGJvb2xlYW47XHJcbiAgICB9O1xyXG4gICAgdXBsb2FkKGtleTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+O1xyXG59XHJcblxyXG5Db21wb25lbnQ8U2V0dGxlZEluPih7XHJcbiAgICBiZWhhdmlvcnM6IFtQcm9qZWN0Rm9ybUJlaGF2aW9yXSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBmb3JtOiB7XHJcbiAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICBwaG9uZTogJycsXHJcbiAgICAgICAgICAgIGRldGFpbDogJycsXHJcbiAgICAgICAgICAgIGFkZHJlc3M6ICcnLFxyXG4gICAgICAgICAgICBpbWc6ICcnLFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJycsXHJcbiAgICAgICAgICAgIGlkQ2FyZDogW11cclxuICAgICAgICB9LFxyXG4gICAgICAgIGltZ1J1bGU6IHtcclxuICAgICAgICAgICAgbWluOiAyLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiAn6Lqr5Lu96K+B5b+F6aG75YyF5ZCr5q2j5Y+N6Z2iJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGVsUnVsZToge1xyXG4gICAgICAgICAgICByZWdleHA6ICdeMVszNDU2Nzg5XVxcXFxkezl9JCcsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICfml6DmlYjnlLXor53lj7fnoIEnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbGREYXRhOiB7fSxcclxuICAgICAgICBoYXNPbGQ6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgcmVhZHkoKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhLm9sZERhdGEgPSB7fTtcclxuICAgICAgICBpZih3eC5nZXRTdG9yYWdlU3luYyhJU19NRVJDSEFOVCkpIHtcclxuICAgICAgICAgICAgcmVxdWVzdDxJTWVyY2hhbnQ+KHt1cmw6ICcvYXBpL21lcmNoYW50L2dldEJ5VXNlcklkJ30pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoe2RhdGF9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgW2lkQ2FyZDEsIGlkQ2FyZDJdID0gZGF0YS5pZENhcmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLm9sZERhdGEgPSB7Li4uZGF0YSwgaWRDYXJkMSwgaWRDYXJkMn07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm06IHsuLi5kYXRhLCBpZENhcmQxLCBpZENhcmQyfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFzT2xkOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuXHJcbiAgICAgICAgICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7dGl0bGU6ICfkv67mlLnkv6Hmga8nfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBfc3VibWl0KCkge1xyXG4gICAgICAgICAgICBjb25zdCB7IGhhc09sZCwgZm9ybSwgb2xkRGF0YSB9ID0gdGhpcy5kYXRhO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZmlsZVByb21pc2VzID0gWydpbWcnLCAnaWRDYXJkMScsICdpZENhcmQyJywgJ2NyZWRlbnRpYWxzJ10ubWFwKHRoaXMudXBsb2FkLCB0aGlzKTtcclxuICAgICAgICAgICAgUHJvbWlzZS5hbGwoZmlsZVByb21pc2VzKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKFtuZXdJbWcsIGlkQ2FyZDEsIGlkQ2FyZDIsIGNyZWRlbnRpYWxzXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7Li4uZm9ybSwgY3JlZGVudGlhbHMsIGltZzogbmV3SW1nfTtcclxuICAgICAgICAgICAgICAgICAgICBpZihpZENhcmQxID09IG51bGwgJiYgaWRDYXJkMiA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuaWRDYXJkID0gPGFueT5udWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuaWRDYXJkWzBdID0gaWRDYXJkMSA/IGlkQ2FyZDEgOiBvbGREYXRhLmlkQ2FyZDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuaWRDYXJkWzFdID0gaWRDYXJkMiA/IGlkQ2FyZDIgOiBvbGREYXRhLmlkQ2FyZDI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVxdWVzdCh7dXJsOiAnL2FwaS9tZXJjaGFudCcsIGRhdGEsIG1ldGhvZDogaGFzT2xkID8gJ1BPU1QnIDogJ1BVVCd9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB3eC5zaG93VG9hc3QoeyB0aXRsZTogYCR7aGFzT2xkID8gJ+S/ruaUuScgOiAn55Sz6K+3J33miJDlip9gIH0pKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVwbG9hZChrZXk6ICdpZENhcmQxJyB8ICdpZENhcmQyJyB8ICdjcmVkZW50aWFscycgfCAnaW1nJykge1xyXG4gICAgICAgICAgICBjb25zdCB7b2xkRGF0YToge1trZXldOiBvbGRQYXRofSwgZm9ybToge1trZXldOiBuZXdQYXRofX0gPSB0aGlzLmRhdGE7XHJcbiAgICAgICAgICAgIC8vIGlmKEFycmF5LmlzQXJyYXkobmV3UGF0aCkpIHtcclxuICAgICAgICAgICAgLy8gICAgIHJldHVybiBQcm9taXNlLmFsbChuZXdQYXRoLm1hcCgodiwgaSkgPT4gdXBsb2FkKHYsIG9sZFBhdGhbaV0pKSk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB1cGxvYWQobmV3UGF0aCwgPHN0cmluZz5vbGRQYXRoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=