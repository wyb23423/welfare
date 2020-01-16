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
var project_form_1 = require("../../behavior/project_form");
var http_1 = require("../../utils/http");
Component({
    behaviors: [project_form_1.default],
    data: {
        form: {
            name: '',
            phone: '',
            mail: ''
        },
        rules: {
            phone: {
                regexp: '^1[3456789]\\d{9}$',
                message: '无效电话号码'
            },
            mail: {
                regexp: '^(\\w-*\\.*)+@(\\w-?)+(\\.\\w{2,})+$',
                message: '无效邮箱'
            }
        },
        hasOldData: false
    },
    attached: function () {
        var _this = this;
        http_1.request({ url: '/api/activity/participation/lastJoin', notShowMsg: true })
            .then(function (_a) {
            var _b = _a.data, name = _b.name, phone = _b.phone, mail = _b.mail;
            return _this.setData({ form: { name: name, phone: phone, mail: mail }, hasOldData: true });
        })
            .catch(console.error);
    },
    methods: {
        _submit: function () {
            var page = getCurrentPages().pop();
            if (!(page && page.options && page.options.id)) {
                return Promise.reject('非法访问!');
            }
            http_1.request({
                url: '/api/activity/participation',
                method: 'PUT',
                data: __assign({}, this.data.form, { activityId: page.options.id })
            })
                .then(function () { return wx.showToast({ title: '报名成功' }); })
                .catch(console.log);
            return true;
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUlBLDREQUE4RDtBQUM5RCx5Q0FBMkM7QUFHM0MsU0FBUyxDQUFDO0lBQ04sU0FBUyxFQUFFLENBQUMsc0JBQW1CLENBQUM7SUFDaEMsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFO1lBQ0YsSUFBSSxFQUFFLEVBQUU7WUFDUixLQUFLLEVBQUUsRUFBRTtZQUNULElBQUksRUFBRSxFQUFFO1NBQ1g7UUFDRCxLQUFLLEVBQUU7WUFDSCxLQUFLLEVBQUU7Z0JBQ0gsTUFBTSxFQUFFLG9CQUFvQjtnQkFDNUIsT0FBTyxFQUFFLFFBQVE7YUFDcEI7WUFDRCxJQUFJLEVBQUU7Z0JBQ0YsTUFBTSxFQUFFLHNDQUFzQztnQkFDOUMsT0FBTyxFQUFFLE1BQU07YUFDbEI7U0FDSjtRQUNELFVBQVUsRUFBRSxLQUFLO0tBQ3BCO0lBQ0QsUUFBUTtRQUFSLGlCQUlDO1FBSEcsY0FBTyxDQUFTLEVBQUMsR0FBRyxFQUFFLHNDQUFzQyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUMsQ0FBQzthQUMzRSxJQUFJLENBQUMsVUFBQyxFQUEyQjtnQkFBMUIsWUFBeUIsRUFBbEIsY0FBSSxFQUFFLGdCQUFLLEVBQUUsY0FBSTtZQUFPLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFDLElBQUksTUFBQSxFQUFFLEtBQUssT0FBQSxFQUFFLElBQUksTUFBQSxFQUFDLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQyxDQUFDO1FBQTNELENBQTJELENBQUM7YUFDbEcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsT0FBTztZQUNILElBQU0sSUFBSSxHQUFHLGVBQWUsRUFBbUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUN0RCxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUM1QyxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDbEM7WUFFRCxjQUFPLENBQUM7Z0JBQ0osR0FBRyxFQUFFLDZCQUE2QjtnQkFDbEMsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsSUFBSSxlQUNHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUNqQixVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQzlCO2FBQ0osQ0FBQztpQkFDRyxJQUFJLENBQUMsY0FBTSxPQUFBLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQztpQkFDM0MsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUV4QixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO0tBQ0o7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5rS75Yqo5oql5ZCNXHJcbiAqL1xyXG5cclxuaW1wb3J0IFByb2plY3RGb3JtQmVoYXZpb3IgZnJvbSAnLi4vLi4vYmVoYXZpb3IvcHJvamVjdF9mb3JtJztcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uLy4uL3V0aWxzL2h0dHAnO1xyXG5pbXBvcnQgeyBFbkluZm8gfSBmcm9tICcuLi9wZXJzb24vYWN0aXZpdHkvc2lnbi9zaWduJztcclxuXHJcbkNvbXBvbmVudCh7XHJcbiAgICBiZWhhdmlvcnM6IFtQcm9qZWN0Rm9ybUJlaGF2aW9yXSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBmb3JtOiB7XHJcbiAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICBwaG9uZTogJycsXHJcbiAgICAgICAgICAgIG1haWw6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBydWxlczoge1xyXG4gICAgICAgICAgICBwaG9uZToge1xyXG4gICAgICAgICAgICAgICAgcmVnZXhwOiAnXjFbMzQ1Njc4OV1cXFxcZHs5fSQnLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ+aXoOaViOeUteivneWPt+eggSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbWFpbDoge1xyXG4gICAgICAgICAgICAgICAgcmVnZXhwOiAnXihcXFxcdy0qXFxcXC4qKStAKFxcXFx3LT8pKyhcXFxcLlxcXFx3ezIsfSkrJCcsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAn5peg5pWI6YKu566xJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBoYXNPbGREYXRhOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGF0dGFjaGVkKCkge1xyXG4gICAgICAgIHJlcXVlc3Q8RW5JbmZvPih7dXJsOiAnL2FwaS9hY3Rpdml0eS9wYXJ0aWNpcGF0aW9uL2xhc3RKb2luJywgbm90U2hvd01zZzogdHJ1ZX0pXHJcbiAgICAgICAgICAgIC50aGVuKCh7ZGF0YToge25hbWUsIHBob25lLCBtYWlsfX0pID0+IHRoaXMuc2V0RGF0YSh7Zm9ybToge25hbWUsIHBob25lLCBtYWlsfSwgaGFzT2xkRGF0YTogdHJ1ZX0pKVxyXG4gICAgICAgICAgICAuY2F0Y2goY29uc29sZS5lcnJvcik7XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIF9zdWJtaXQoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhZ2UgPSBnZXRDdXJyZW50UGFnZXM8SUFueU9iamVjdCwgYW55PigpLnBvcCgpO1xyXG4gICAgICAgICAgICBpZiAoIShwYWdlICYmIHBhZ2Uub3B0aW9ucyAmJiBwYWdlLm9wdGlvbnMuaWQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ+mdnuazleiuv+mXriEnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvYXBpL2FjdGl2aXR5L3BhcnRpY2lwYXRpb24nLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLmRhdGEuZm9ybSxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpdml0eUlkOiBwYWdlLm9wdGlvbnMuaWRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHd4LnNob3dUb2FzdCh7IHRpdGxlOiAn5oql5ZCN5oiQ5YqfJyB9KSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=