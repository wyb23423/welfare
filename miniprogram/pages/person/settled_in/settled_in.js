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
                _this.data.oldData = __assign({}, data);
                _this.setData({
                    form: data,
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
            var filePromises = ['img', 'idCard', 'credentials'].map(this.upload, this);
            Promise.all(filePromises)
                .then(function (_a) {
                var newImg = _a[0], idCard = _a[1], credentials = _a[2];
                var data = __assign({}, form, { credentials: credentials, img: newImg });
                data.idCard = idCard[0] ? idCard : null;
                return http_1.request({ url: '/api/merchant', data: data, method: hasOld ? 'POST' : 'PUT' });
            })
                .then(function () { return wx.showToast({ title: (hasOld ? '修改' : '申请') + "\u6210\u529F" }); })
                .catch(console.log);
        },
        upload: function (key) {
            var _a = this.data, _b = key, oldPath = _a.oldData[_b], _c = key, newPath = _a.form[_c];
            if (Array.isArray(newPath)) {
                return Promise.all(newPath.map(function (v, i) { return util_1.upload(v, (oldPath || [])[i]); }));
            }
            return util_1.upload(newPath, oldPath);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGxlZF9pbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNldHRsZWRfaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUdBLCtEQUFpRTtBQUNqRSw0Q0FBOEM7QUFDOUMsNENBQTZDO0FBQzdDLGlEQUFzRDtBQVd0RCxTQUFTLENBQVk7SUFDakIsU0FBUyxFQUFFLENBQUMsc0JBQW1CLENBQUM7SUFDaEMsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFO1lBQ0YsSUFBSSxFQUFFLEVBQUU7WUFDUixLQUFLLEVBQUUsRUFBRTtZQUNULE1BQU0sRUFBRSxFQUFFO1lBQ1YsT0FBTyxFQUFFLEVBQUU7WUFDWCxHQUFHLEVBQUUsRUFBRTtZQUNQLFdBQVcsRUFBRSxFQUFFO1lBQ2YsTUFBTSxFQUFFLEVBQUU7U0FDYjtRQUNELE9BQU8sRUFBRTtZQUNMLEdBQUcsRUFBRSxDQUFDO1lBQ04sT0FBTyxFQUFFLFlBQVk7U0FDeEI7UUFDRCxPQUFPLEVBQUU7WUFDTCxNQUFNLEVBQUUsb0JBQW9CO1lBQzVCLE9BQU8sRUFBRSxRQUFRO1NBQ3BCO1FBQ0QsT0FBTyxFQUFFLEVBQUU7UUFDWCxNQUFNLEVBQUUsS0FBSztLQUNoQjtJQUNELEtBQUs7UUFBTCxpQkFlQztRQWRHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUN2QixJQUFJLEVBQUUsQ0FBQyxjQUFjLENBQUMsbUJBQVcsQ0FBQyxFQUFFO1lBQ2hDLGNBQU8sQ0FBWSxFQUFFLEdBQUcsRUFBRSwyQkFBMkIsRUFBRSxDQUFDO2lCQUNuRCxJQUFJLENBQUMsVUFBQyxFQUFRO29CQUFOLGNBQUk7Z0JBQ1QsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLGdCQUFRLElBQUksQ0FBRSxDQUFDO2dCQUNoQyxLQUFJLENBQUMsT0FBUSxDQUFDO29CQUNWLElBQUksRUFBRSxJQUFJO29CQUNWLE1BQU0sRUFBRSxJQUFJO2lCQUNmLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRXhCLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQy9DO0lBQ0wsQ0FBQztJQUNELE9BQU8sRUFBRTtRQUNMLE9BQU87WUFDRyxJQUFBLGNBQTRCLEVBQTFCLGtCQUFNLEVBQUUsY0FBa0IsQ0FBQztZQUVuQyxJQUFNLFlBQVksR0FBRyxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsYUFBYSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDN0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUM7aUJBQ3BCLElBQUksQ0FBQyxVQUFDLEVBQTZCO29CQUE1QixjQUFNLEVBQUUsY0FBTSxFQUFFLG1CQUFXO2dCQUMvQixJQUFNLElBQUksZ0JBQVEsSUFBSSxJQUFFLFdBQVcsYUFBQSxFQUFFLEdBQUcsRUFBRSxNQUFNLEdBQUUsQ0FBQztnQkFDbkQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQU0sSUFBSSxDQUFDO2dCQUU3QyxPQUFPLGNBQU8sQ0FBQyxFQUFFLEdBQUcsRUFBRSxlQUFlLEVBQUUsSUFBSSxNQUFBLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ3BGLENBQUMsQ0FBQztpQkFDRCxJQUFJLENBQUMsY0FBTSxPQUFBLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxrQkFBSSxFQUFFLENBQUMsRUFBcEQsQ0FBb0QsQ0FBQztpQkFDaEUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QixDQUFDO1FBQ0QsTUFBTSxZQUFDLEdBQXFDO1lBQ2xDLElBQUEsY0FBcUUsRUFBeEQsUUFBSyxFQUFMLHdCQUFjLEVBQVksUUFBSyxFQUFMLHFCQUE4QixDQUFDO1lBQzVFLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDeEIsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsYUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUE3QixDQUE2QixDQUFDLENBQUMsQ0FBQzthQUM1RTtZQUVELE9BQU8sYUFBTSxDQUFDLE9BQU8sRUFBVSxPQUFPLENBQUMsQ0FBQztRQUM1QyxDQUFDO0tBQ0o7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5ZWG5a625YWl6am7XHJcbiAqL1xyXG5pbXBvcnQgUHJvamVjdEZvcm1CZWhhdmlvciBmcm9tICcuLi8uLi8uLi9iZWhhdmlvci9wcm9qZWN0X2Zvcm0nO1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvaHR0cCc7XHJcbmltcG9ydCB7IHVwbG9hZCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5pbXBvcnQgeyBJU19NRVJDSEFOVCB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50L3N0b3JlJztcclxuXHJcbmludGVyZmFjZSBTZXR0bGVkSW4gZXh0ZW5kcyBXeENvbXBvbmVudCB7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgZm9ybTogSU1lcmNoYW50O1xyXG4gICAgICAgIG9sZERhdGE6IElNZXJjaGFudDtcclxuICAgICAgICBoYXNPbGQ6IGJvb2xlYW47XHJcbiAgICB9O1xyXG4gICAgdXBsb2FkKGtleTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmcgfCBzdHJpbmdbXT47XHJcbn1cclxuXHJcbkNvbXBvbmVudDxTZXR0bGVkSW4+KHtcclxuICAgIGJlaGF2aW9yczogW1Byb2plY3RGb3JtQmVoYXZpb3JdLFxyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGZvcm06IHtcclxuICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgIHBob25lOiAnJyxcclxuICAgICAgICAgICAgZGV0YWlsOiAnJyxcclxuICAgICAgICAgICAgYWRkcmVzczogJycsXHJcbiAgICAgICAgICAgIGltZzogJycsXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnJyxcclxuICAgICAgICAgICAgaWRDYXJkOiBbXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW1nUnVsZToge1xyXG4gICAgICAgICAgICBtaW46IDIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICfouqvku73or4Hlv4XpobvljIXlkKvmraPlj43pnaInXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0ZWxSdWxlOiB7XHJcbiAgICAgICAgICAgIHJlZ2V4cDogJ14xWzM0NTY3ODldXFxcXGR7OX0kJyxcclxuICAgICAgICAgICAgbWVzc2FnZTogJ+aXoOaViOeUteivneWPt+eggSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9sZERhdGE6IHt9LFxyXG4gICAgICAgIGhhc09sZDogZmFsc2VcclxuICAgIH0sXHJcbiAgICByZWFkeSgpIHtcclxuICAgICAgICB0aGlzLmRhdGEub2xkRGF0YSA9IHt9O1xyXG4gICAgICAgIGlmICh3eC5nZXRTdG9yYWdlU3luYyhJU19NRVJDSEFOVCkpIHtcclxuICAgICAgICAgICAgcmVxdWVzdDxJTWVyY2hhbnQ+KHsgdXJsOiAnL2FwaS9tZXJjaGFudC9nZXRCeVVzZXJJZCcgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5vbGREYXRhID0geyAuLi5kYXRhIH07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm06IGRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc09sZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XHJcblxyXG4gICAgICAgICAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoeyB0aXRsZTogJ+S/ruaUueS/oeaBrycgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBfc3VibWl0KCkge1xyXG4gICAgICAgICAgICBjb25zdCB7IGhhc09sZCwgZm9ybSB9ID0gdGhpcy5kYXRhO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZmlsZVByb21pc2VzID0gWydpbWcnLCAnaWRDYXJkJywgJ2NyZWRlbnRpYWxzJ10ubWFwKHRoaXMudXBsb2FkLCB0aGlzKTtcclxuICAgICAgICAgICAgUHJvbWlzZS5hbGwoZmlsZVByb21pc2VzKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKFtuZXdJbWcsIGlkQ2FyZCwgY3JlZGVudGlhbHNdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHsgLi4uZm9ybSwgY3JlZGVudGlhbHMsIGltZzogbmV3SW1nIH07XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5pZENhcmQgPSBpZENhcmRbMF0gPyBpZENhcmQgOiA8YW55Pm51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXF1ZXN0KHsgdXJsOiAnL2FwaS9tZXJjaGFudCcsIGRhdGEsIG1ldGhvZDogaGFzT2xkID8gJ1BPU1QnIDogJ1BVVCcgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gd3guc2hvd1RvYXN0KHsgdGl0bGU6IGAke2hhc09sZCA/ICfkv67mlLknIDogJ+eUs+ivtyd95oiQ5YqfYCB9KSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB1cGxvYWQoa2V5OiAnaWRDYXJkJyB8ICdjcmVkZW50aWFscycgfCAnaW1nJykge1xyXG4gICAgICAgICAgICBjb25zdCB7IG9sZERhdGE6IHsgW2tleV06IG9sZFBhdGggfSwgZm9ybTogeyBba2V5XTogbmV3UGF0aCB9IH0gPSB0aGlzLmRhdGE7XHJcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG5ld1BhdGgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwobmV3UGF0aC5tYXAoKHYsIGkpID0+IHVwbG9hZCh2LCAob2xkUGF0aCB8fCBbXSlbaV0pKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB1cGxvYWQobmV3UGF0aCwgPHN0cmluZz5vbGRQYXRoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=