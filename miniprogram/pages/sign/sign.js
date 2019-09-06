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
            email: ''
        },
        rules: {
            phone: {
                regexp: '^1[3456789]\\d{9}$',
                message: '无效电话号码'
            },
            email: {
                regexp: '^(\\w-*\\.*)+@(\\w-?)+(\\.\\w{2,})+$',
                message: '无效邮箱'
            }
        }
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
                .then(function () { return wx.showToast({ title: '报名成功, 请准时参加!!' }); })
                .catch(console.log);
            return true;
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUlBLDREQUE4RDtBQUM5RCx5Q0FBMkM7QUFFM0MsU0FBUyxDQUFDO0lBQ04sU0FBUyxFQUFFLENBQUMsc0JBQW1CLENBQUM7SUFDaEMsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFO1lBQ0YsSUFBSSxFQUFFLEVBQUU7WUFDUixLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1NBQ1o7UUFDRCxLQUFLLEVBQUU7WUFDSCxLQUFLLEVBQUU7Z0JBQ0gsTUFBTSxFQUFFLG9CQUFvQjtnQkFDNUIsT0FBTyxFQUFFLFFBQVE7YUFDcEI7WUFDRCxLQUFLLEVBQUU7Z0JBQ0gsTUFBTSxFQUFFLHNDQUFzQztnQkFDOUMsT0FBTyxFQUFFLE1BQU07YUFDbEI7U0FDSjtLQUNKO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsT0FBTztZQUNILElBQU0sSUFBSSxHQUFHLGVBQWUsRUFBbUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUN0RCxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUM1QyxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDbEM7WUFFRCxjQUFPLENBQUM7Z0JBQ0osR0FBRyxFQUFFLDZCQUE2QjtnQkFDbEMsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsSUFBSSxlQUNHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUNqQixVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQzlCO2FBQ0osQ0FBQztpQkFDRyxJQUFJLENBQUMsY0FBTSxPQUFBLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLENBQUMsRUFBeEMsQ0FBd0MsQ0FBQztpQkFDcEQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUV4QixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO0tBQ0o7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5rS75Yqo5oql5ZCNXHJcbiAqL1xyXG5cclxuaW1wb3J0IFByb2plY3RGb3JtQmVoYXZpb3IgZnJvbSAnLi4vLi4vYmVoYXZpb3IvcHJvamVjdF9mb3JtJztcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uLy4uL3V0aWxzL2h0dHAnO1xyXG5cclxuQ29tcG9uZW50KHtcclxuICAgIGJlaGF2aW9yczogW1Byb2plY3RGb3JtQmVoYXZpb3JdLFxyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGZvcm06IHtcclxuICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgIHBob25lOiAnJyxcclxuICAgICAgICAgICAgZW1haWw6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBydWxlczoge1xyXG4gICAgICAgICAgICBwaG9uZToge1xyXG4gICAgICAgICAgICAgICAgcmVnZXhwOiAnXjFbMzQ1Njc4OV1cXFxcZHs5fSQnLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ+aXoOaViOeUteivneWPt+eggSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZW1haWw6IHtcclxuICAgICAgICAgICAgICAgIHJlZ2V4cDogJ14oXFxcXHctKlxcXFwuKikrQChcXFxcdy0/KSsoXFxcXC5cXFxcd3syLH0pKyQnLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ+aXoOaViOmCrueusSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgX3N1Ym1pdCgpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFnZSA9IGdldEN1cnJlbnRQYWdlczxJQW55T2JqZWN0LCBhbnk+KCkucG9wKCk7XHJcbiAgICAgICAgICAgIGlmICghKHBhZ2UgJiYgcGFnZS5vcHRpb25zICYmIHBhZ2Uub3B0aW9ucy5pZCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgn6Z2e5rOV6K6/6ZeuIScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9hcGkvYWN0aXZpdHkvcGFydGljaXBhdGlvbicsXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuZGF0YS5mb3JtLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2aXR5SWQ6IHBhZ2Uub3B0aW9ucy5pZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gd3guc2hvd1RvYXN0KHsgdGl0bGU6ICfmiqXlkI3miJDlip8sIOivt+WHhuaXtuWPguWKoCEhJyB9KSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=