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
                return Promise.all(newPath.map(function (v, i) { return util_1.upload(v, oldPath[i]); }));
            }
            return util_1.upload(newPath, oldPath);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGxlZF9pbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNldHRsZWRfaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUdBLCtEQUFpRTtBQUNqRSw0Q0FBOEM7QUFDOUMsNENBQTZDO0FBQzdDLGlEQUFzRDtBQVd0RCxTQUFTLENBQVk7SUFDakIsU0FBUyxFQUFFLENBQUMsc0JBQW1CLENBQUM7SUFDaEMsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFO1lBQ0YsSUFBSSxFQUFFLEVBQUU7WUFDUixLQUFLLEVBQUUsRUFBRTtZQUNULE1BQU0sRUFBRSxFQUFFO1lBQ1YsT0FBTyxFQUFFLEVBQUU7WUFDWCxHQUFHLEVBQUUsRUFBRTtZQUNQLFdBQVcsRUFBRSxFQUFFO1lBQ2YsTUFBTSxFQUFFLEVBQUU7U0FDYjtRQUNELE9BQU8sRUFBRTtZQUNMLEdBQUcsRUFBRSxDQUFDO1lBQ04sT0FBTyxFQUFFLFlBQVk7U0FDeEI7UUFDRCxPQUFPLEVBQUU7WUFDTCxNQUFNLEVBQUUsb0JBQW9CO1lBQzVCLE9BQU8sRUFBRSxRQUFRO1NBQ3BCO1FBQ0QsT0FBTyxFQUFFLEVBQUU7UUFDWCxNQUFNLEVBQUUsS0FBSztLQUNoQjtJQUNELEtBQUs7UUFBTCxpQkFlQztRQWRHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUN2QixJQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsbUJBQVcsQ0FBQyxFQUFFO1lBQy9CLGNBQU8sQ0FBWSxFQUFDLEdBQUcsRUFBRSwyQkFBMkIsRUFBQyxDQUFDO2lCQUNqRCxJQUFJLENBQUMsVUFBQyxFQUFNO29CQUFMLGNBQUk7Z0JBQ1IsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLGdCQUFPLElBQUksQ0FBQyxDQUFDO2dCQUM5QixLQUFJLENBQUMsT0FBUSxDQUFDO29CQUNWLElBQUksRUFBRSxJQUFJO29CQUNWLE1BQU0sRUFBRSxJQUFJO2lCQUNmLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRXhCLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDO1NBQzdDO0lBQ0wsQ0FBQztJQUNELE9BQU8sRUFBRTtRQUNMLE9BQU87WUFDRyxJQUFBLGNBQTJCLEVBQTFCLGtCQUFNLEVBQUUsY0FBa0IsQ0FBQztZQUVsQyxJQUFNLFlBQVksR0FBRyxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsYUFBYSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDN0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUM7aUJBQ3BCLElBQUksQ0FBQyxVQUFDLEVBQTZCO29CQUE1QixjQUFNLEVBQUUsY0FBTSxFQUFFLG1CQUFXO2dCQUMvQixJQUFNLElBQUksZ0JBQU8sSUFBSSxJQUFFLFdBQVcsYUFBQSxFQUFFLEdBQUcsRUFBRSxNQUFNLEdBQUMsQ0FBQztnQkFDakQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQU0sSUFBSSxDQUFDO2dCQUU3QyxPQUFPLGNBQU8sQ0FBQyxFQUFDLEdBQUcsRUFBRSxlQUFlLEVBQUUsSUFBSSxNQUFBLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDO1lBQ2xGLENBQUMsQ0FBQztpQkFDRCxJQUFJLENBQUMsY0FBTSxPQUFBLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxrQkFBSSxFQUFFLENBQUMsRUFBcEQsQ0FBb0QsQ0FBQztpQkFDaEUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QixDQUFDO1FBQ0QsTUFBTSxZQUFDLEdBQXFDO1lBQ2xDLElBQUEsY0FBK0QsRUFBcEQsUUFBSyxFQUFMLHdCQUFjLEVBQVUsUUFBSyxFQUFMLHFCQUE0QixDQUFDO1lBQ3RFLElBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDdkIsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsYUFBTSxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBckIsQ0FBcUIsQ0FBQyxDQUFDLENBQUM7YUFDcEU7WUFFRCxPQUFPLGFBQU0sQ0FBQyxPQUFPLEVBQVUsT0FBTyxDQUFDLENBQUM7UUFDNUMsQ0FBQztLQUNKO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOWVhuWutuWFpempu1xyXG4gKi9cclxuaW1wb3J0IFByb2plY3RGb3JtQmVoYXZpb3IgZnJvbSAnLi4vLi4vLi4vYmVoYXZpb3IvcHJvamVjdF9mb3JtJztcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2h0dHAnO1xyXG5pbXBvcnQgeyB1cGxvYWQgfSBmcm9tICcuLi8uLi8uLi91dGlscy91dGlsJztcclxuaW1wb3J0IHsgSVNfTUVSQ0hBTlQgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudC9zdG9yZSc7XHJcblxyXG5pbnRlcmZhY2UgU2V0dGxlZEluIGV4dGVuZHMgV3hDb21wb25lbnQge1xyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGZvcm06IElNZXJjaGFudDtcclxuICAgICAgICBvbGREYXRhOiBJTWVyY2hhbnQ7XHJcbiAgICAgICAgaGFzT2xkOiBib29sZWFuO1xyXG4gICAgfTtcclxuICAgIHVwbG9hZChrZXk6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nIHxzdHJpbmdbXT47XHJcbn1cclxuXHJcbkNvbXBvbmVudDxTZXR0bGVkSW4+KHtcclxuICAgIGJlaGF2aW9yczogW1Byb2plY3RGb3JtQmVoYXZpb3JdLFxyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGZvcm06IHtcclxuICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgIHBob25lOiAnJyxcclxuICAgICAgICAgICAgZGV0YWlsOiAnJyxcclxuICAgICAgICAgICAgYWRkcmVzczogJycsXHJcbiAgICAgICAgICAgIGltZzogJycsXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnJyxcclxuICAgICAgICAgICAgaWRDYXJkOiBbXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW1nUnVsZToge1xyXG4gICAgICAgICAgICBtaW46IDIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICfouqvku73or4Hlv4XpobvljIXlkKvmraPlj43pnaInXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0ZWxSdWxlOiB7XHJcbiAgICAgICAgICAgIHJlZ2V4cDogJ14xWzM0NTY3ODldXFxcXGR7OX0kJyxcclxuICAgICAgICAgICAgbWVzc2FnZTogJ+aXoOaViOeUteivneWPt+eggSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9sZERhdGE6IHt9LFxyXG4gICAgICAgIGhhc09sZDogZmFsc2VcclxuICAgIH0sXHJcbiAgICByZWFkeSgpIHtcclxuICAgICAgICB0aGlzLmRhdGEub2xkRGF0YSA9IHt9O1xyXG4gICAgICAgIGlmKHd4LmdldFN0b3JhZ2VTeW5jKElTX01FUkNIQU5UKSkge1xyXG4gICAgICAgICAgICByZXF1ZXN0PElNZXJjaGFudD4oe3VybDogJy9hcGkvbWVyY2hhbnQvZ2V0QnlVc2VySWQnfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEub2xkRGF0YSA9IHsuLi5kYXRhfTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybTogZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFzT2xkOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuXHJcbiAgICAgICAgICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7dGl0bGU6ICfkv67mlLnkv6Hmga8nfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBfc3VibWl0KCkge1xyXG4gICAgICAgICAgICBjb25zdCB7aGFzT2xkLCBmb3JtIH0gPSB0aGlzLmRhdGE7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBmaWxlUHJvbWlzZXMgPSBbJ2ltZycsICdpZENhcmQnLCAnY3JlZGVudGlhbHMnXS5tYXAodGhpcy51cGxvYWQsIHRoaXMpO1xyXG4gICAgICAgICAgICBQcm9taXNlLmFsbChmaWxlUHJvbWlzZXMpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoW25ld0ltZywgaWRDYXJkLCBjcmVkZW50aWFsc10pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gey4uLmZvcm0sIGNyZWRlbnRpYWxzLCBpbWc6IG5ld0ltZ307XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5pZENhcmQgPSBpZENhcmRbMF0gPyBpZENhcmQgOiA8YW55Pm51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXF1ZXN0KHt1cmw6ICcvYXBpL21lcmNoYW50JywgZGF0YSwgbWV0aG9kOiBoYXNPbGQgPyAnUE9TVCcgOiAnUFVUJ30pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHd4LnNob3dUb2FzdCh7IHRpdGxlOiBgJHtoYXNPbGQgPyAn5L+u5pS5JyA6ICfnlLPor7cnfeaIkOWKn2AgfSkpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXBsb2FkKGtleTogJ2lkQ2FyZCcgfCAnY3JlZGVudGlhbHMnIHwgJ2ltZycpIHtcclxuICAgICAgICAgICAgY29uc3Qge29sZERhdGE6IHtba2V5XTogb2xkUGF0aH0sIGZvcm06IHtba2V5XTogbmV3UGF0aH19ID0gdGhpcy5kYXRhO1xyXG4gICAgICAgICAgICBpZihBcnJheS5pc0FycmF5KG5ld1BhdGgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwobmV3UGF0aC5tYXAoKHYsIGkpID0+IHVwbG9hZCh2LCBvbGRQYXRoW2ldKSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdXBsb2FkKG5ld1BhdGgsIDxzdHJpbmc+b2xkUGF0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19