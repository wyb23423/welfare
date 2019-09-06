"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("../../../utils/http");
Page({
    data: {
        form: {
            address: '',
            idCard: '',
            phone: '',
            realName: '',
            code: '',
            email: ''
        },
        idCardRule: {
            regexp: String.raw(templateObject_1 || (templateObject_1 = __makeTemplateObject(["^[1-9]d{7}((0d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])d{3}$|^[1-9]d{5}[1-9]d{3}((0d)|(1[0-2]))(([0|1|2]d)|3[0-1])d{3}([0-9]|X)$"], ["^[1-9]\\d{7}((0\\d)|(1[0-2]))(([0|1|2]\\\\d)|3[0-1])\\d{3}$|^[1-9]\\d{5}[1-9]\\d{3}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}([0-9]|X)$"]))),
            message: '无效身份证号'
        },
        canGetCode: true,
        codeBtnText: '获取验证码',
        notGetInfo: false
    },
    onLoad: function (query) {
        var _this = this;
        if (!(query && query.notGetInfo)) {
            http_1.request({ url: '/api/user' })
                .then(function (_a) {
                var data = _a.data;
                _this.setData(Object.keys(_this.data.form).reduce(function (form, k) {
                    if (k !== 'code') {
                        form["form." + k] = data[k];
                    }
                    return form;
                }, {}));
            })
                .then(console.log);
        }
        else {
            this.data.notGetInfo = true;
        }
    },
    onInput: function (e) {
        var _a;
        this.setData((_a = {}, _a["form." + e.target.id] = e.detail.value, _a));
    },
    getCode: function () {
        console.log('getCode');
    },
    save: function () {
        var _this = this;
        var arr = Object.entries(this.data.form).map(function (_a) {
            var id = _a[0], value = _a[1];
            var input = _this.selectComponent('#' + id);
            if (input) {
                return input.valid(value);
            }
            else {
                return true;
            }
        });
        Promise.all(arr)
            .then(function () { return (http_1.request({
            url: '/api/user',
            method: 'POST',
            data: _this.data.form
        })); })
            .then(function () { return new Promise(function (resolve) {
            wx.showToast({
                title: '修改个人信息成功',
                complete: function () { return resolve(_this.data.notGetInfo); }
            });
        }); })
            .then(function (notGetInfo) { return notGetInfo && wx.reLaunch({ url: '/pages/index/index' }); })
            .catch(console.log);
        this.setData({ 'form.code': '' });
    },
});
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBSUEsNENBQThDO0FBRTlDLElBQUksQ0FBQztJQUNELElBQUksRUFBRTtRQUNGLElBQUksRUFBRTtZQUNGLE9BQU8sRUFBRSxFQUFFO1lBQ1gsTUFBTSxFQUFFLEVBQUU7WUFDVixLQUFLLEVBQUUsRUFBRTtZQUNULFFBQVEsRUFBRSxFQUFFO1lBQ1osSUFBSSxFQUFFLEVBQUU7WUFDUixLQUFLLEVBQUUsRUFBRTtTQUNaO1FBQ0QsVUFBVSxFQUFFO1lBQ1IsTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLDRMQUFBLDJJQUFpSSxJQUFBO1lBQ25KLE9BQU8sRUFBRSxRQUFRO1NBQ3BCO1FBQ0QsVUFBVSxFQUFFLElBQUk7UUFDaEIsV0FBVyxFQUFFLE9BQU87UUFDcEIsVUFBVSxFQUFFLEtBQUs7S0FDcEI7SUFDRCxNQUFNLFlBQUMsS0FBa0I7UUFBekIsaUJBcUJDO1FBcEJHLElBQUksQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDOUIsY0FBTyxDQUFRLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxDQUFDO2lCQUMvQixJQUFJLENBQUMsVUFBQyxFQUFRO29CQUFOLGNBQUk7Z0JBQ1QsS0FBSSxDQUFDLE9BQVEsQ0FDVCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUM5QixVQUFDLElBQUksRUFBRSxDQUFDO29CQUNKLElBQUksQ0FBQyxLQUFLLE1BQU0sRUFBRTt3QkFDZCxJQUFJLENBQUMsVUFBUSxDQUFHLENBQUMsR0FBZ0IsSUFBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUM3QztvQkFFRCxPQUFPLElBQUksQ0FBQztnQkFDaEIsQ0FBQyxFQUNXLEVBQUUsQ0FDakIsQ0FDSixDQUFDO1lBQ04sQ0FBQyxDQUFDO2lCQUNELElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDMUI7YUFBTTtZQUNILElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztTQUMvQjtJQUNMLENBQUM7SUFDRCxPQUFPLFlBQUMsQ0FBWTs7UUFDaEIsSUFBSSxDQUFDLE9BQVEsV0FBRyxHQUFDLFVBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFJLElBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLE1BQUcsQ0FBQztJQUMvRCxDQUFDO0lBQ0QsT0FBTztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUNELElBQUk7UUFBSixpQkE2QkM7UUE1QkcsSUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBa0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxFQUFXO2dCQUFWLFVBQUUsRUFBRSxhQUFLO1lBQ3ZFLElBQU0sS0FBSyxHQUFrQixLQUFJLENBQUMsZUFBZ0IsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFFN0QsSUFBSSxLQUFLLEVBQUU7Z0JBQ1AsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzdCO2lCQUFNO2dCQUNILE9BQU8sSUFBSSxDQUFDO2FBQ2Y7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO2FBQ1gsSUFBSSxDQUFDLGNBQU0sT0FBQSxDQUNSLGNBQU8sQ0FBQztZQUNKLEdBQUcsRUFBRSxXQUFXO1lBQ2hCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsSUFBSSxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtTQUN2QixDQUFDLENBQ0wsRUFOVyxDQU1YLENBQUM7YUFDRCxJQUFJLENBQUMsY0FBTSxPQUFBLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTztZQUMzQixFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNULEtBQUssRUFBRSxVQUFVO2dCQUNqQixRQUFRLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUE3QixDQUE2QjthQUNoRCxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsRUFMVSxDQUtWLENBQUM7YUFDRixJQUFJLENBQUMsVUFBQSxVQUFVLElBQUksT0FBQSxVQUFVLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxvQkFBb0IsRUFBRSxDQUFDLEVBQXhELENBQXdELENBQUM7YUFDNUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV4QixJQUFJLENBQUMsT0FBUSxDQUFDLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQztDQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDkv67mlLnkuKrkurrkv6Hmga9cclxuICovXHJcbmltcG9ydCB7IElucHV0QmVoYXZpb3IgfSBmcm9tICcuLi8uLi8uLi9iZWhhdmlvci9pbnB1dCc7XHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi91dGlscy9odHRwJztcclxuXHJcblBhZ2Uoe1xyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGZvcm06IHtcclxuICAgICAgICAgICAgYWRkcmVzczogJycsXHJcbiAgICAgICAgICAgIGlkQ2FyZDogJycsXHJcbiAgICAgICAgICAgIHBob25lOiAnJyxcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBjb2RlOiAnJyxcclxuICAgICAgICAgICAgZW1haWw6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpZENhcmRSdWxlOiB7XHJcbiAgICAgICAgICAgIHJlZ2V4cDogU3RyaW5nLnJhd2BeWzEtOV1cXGR7N30oKDBcXGQpfCgxWzAtMl0pKSgoWzB8MXwyXVxcXFxkKXwzWzAtMV0pXFxkezN9JHxeWzEtOV1cXGR7NX1bMS05XVxcZHszfSgoMFxcZCl8KDFbMC0yXSkpKChbMHwxfDJdXFxkKXwzWzAtMV0pXFxkezN9KFswLTldfFgpJGAsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICfml6DmlYjouqvku73or4Hlj7cnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYW5HZXRDb2RlOiB0cnVlLFxyXG4gICAgICAgIGNvZGVCdG5UZXh0OiAn6I635Y+W6aqM6K+B56CBJyxcclxuICAgICAgICBub3RHZXRJbmZvOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIG9uTG9hZChxdWVyeT86IElBbnlPYmplY3QpIHtcclxuICAgICAgICBpZiAoIShxdWVyeSAmJiBxdWVyeS5ub3RHZXRJbmZvKSkge1xyXG4gICAgICAgICAgICByZXF1ZXN0PElVc2VyPih7IHVybDogJy9hcGkvdXNlcicgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSEoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZGF0YS5mb3JtKS5yZWR1Y2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZm9ybSwgaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrICE9PSAnY29kZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybVtgZm9ybS4ke2t9YF0gPSAoPElBbnlPYmplY3Q+ZGF0YSlba107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZm9ybTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SUFueU9iamVjdD57fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihjb25zb2xlLmxvZyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLm5vdEdldEluZm8gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbklucHV0KGU6IEJhc2VFdmVudCkge1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSEoeyBbYGZvcm0uJHtlLnRhcmdldC5pZH1gXTogZS5kZXRhaWwudmFsdWUgfSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0Q29kZSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZ2V0Q29kZScpO1xyXG4gICAgfSxcclxuICAgIHNhdmUoKSB7XHJcbiAgICAgICAgY29uc3QgYXJyID0gT2JqZWN0LmVudHJpZXM8c3RyaW5nIHwgbnVtYmVyPih0aGlzLmRhdGEuZm9ybSkubWFwKChbaWQsIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IDxJbnB1dEJlaGF2aW9yPnRoaXMuc2VsZWN0Q29tcG9uZW50ISgnIycgKyBpZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbnB1dC52YWxpZCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBQcm9taXNlLmFsbChhcnIpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IChcclxuICAgICAgICAgICAgICAgIHJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9hcGkvdXNlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogdGhpcy5kYXRhLmZvcm1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+S/ruaUueS4quS6uuS/oeaBr+aIkOWKnycsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6ICgpID0+IHJlc29sdmUodGhpcy5kYXRhLm5vdEdldEluZm8pXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgIC50aGVuKG5vdEdldEluZm8gPT4gbm90R2V0SW5mbyAmJiB3eC5yZUxhdW5jaCh7IHVybDogJy9wYWdlcy9pbmRleC9pbmRleCcgfSkpXHJcbiAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0RGF0YSEoeyAnZm9ybS5jb2RlJzogJycgfSk7XHJcbiAgICB9LFxyXG59KTtcclxuIl19