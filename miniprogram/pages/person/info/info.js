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
            code: ''
        },
        idCardRule: {
            regexp: '',
            message: '无效身份证号'
        },
        canGetCode: true,
        codeBtnText: '获取验证码',
        notGetInfo: false
    },
    onLoad: function (query) {
        var _this = this;
        this._setIdCardRule();
        if (!(query && query.notGetInfo)) {
            http_1.request({ url: '/api/user' })
                .then(function (_a) {
                var data = _a.data;
                _this.setData(['address', 'idCard', 'phone', 'realName', 'email']
                    .reduce(function (form, k) {
                    form["form." + k] = data[k];
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
    _setIdCardRule: function () {
        var common = String.raw(templateObject_1 || (templateObject_1 = __makeTemplateObject(["((0d)|(1[0-2]))(([0|1|2]d)|3[0-1])d{3}"], ["((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}"])));
        var str15 = String.raw(templateObject_2 || (templateObject_2 = __makeTemplateObject(["(d{7}", ")"], ["(\\d{7}", ")"])), common);
        var str18 = String.raw(templateObject_3 || (templateObject_3 = __makeTemplateObject(["(d{5}[1-9]d{3}", "([0-9]|X))"], ["(\\d{5}[1-9]\\d{3}", "([0-9]|X))"])), common);
        this.setData({ 'idCardRule.regexp': "^[1-9](" + str15 + "|" + str18 + ")$" });
    }
});
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBSUEsNENBQThDO0FBRTlDLElBQUksQ0FBQztJQUNELElBQUksRUFBRTtRQUNGLElBQUksRUFBRTtZQUNGLElBQUksRUFBRSxFQUFFO1NBQ1g7UUFDRCxVQUFVLEVBQUU7WUFDUixNQUFNLEVBQUUsRUFBRTtZQUNWLE9BQU8sRUFBRSxRQUFRO1NBQ3BCO1FBQ0QsVUFBVSxFQUFFLElBQUk7UUFDaEIsV0FBVyxFQUFFLE9BQU87UUFDcEIsVUFBVSxFQUFFLEtBQUs7S0FDcEI7SUFDRCxNQUFNLFlBQUMsS0FBa0I7UUFBekIsaUJBcUJDO1FBcEJHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV0QixJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQzlCLGNBQU8sQ0FBUSxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsQ0FBQztpQkFDL0IsSUFBSSxDQUFDLFVBQUMsRUFBUTtvQkFBTixjQUFJO2dCQUNULEtBQUksQ0FBQyxPQUFRLENBQ1QsQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDO3FCQUM5QyxNQUFNLENBQ0gsVUFBQyxJQUFJLEVBQUUsQ0FBQztvQkFDSixJQUFJLENBQUMsVUFBUSxDQUFHLENBQUMsR0FBZ0IsSUFBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMxQyxPQUFPLElBQUksQ0FBQztnQkFDaEIsQ0FBQyxFQUNXLEVBQUUsQ0FDakIsQ0FDUixDQUFDO1lBQ04sQ0FBQyxDQUFDO2lCQUNELElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDMUI7YUFBTTtZQUNILElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztTQUMvQjtJQUNMLENBQUM7SUFDRCxPQUFPLFlBQUMsQ0FBWTs7UUFDaEIsSUFBSSxDQUFDLE9BQVEsV0FBRyxHQUFDLFVBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFJLElBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLE1BQUcsQ0FBQztJQUMvRCxDQUFDO0lBQ0QsT0FBTztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUNELElBQUk7UUFBSixpQkE2QkM7UUE1QkcsSUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBa0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxFQUFXO2dCQUFWLFVBQUUsRUFBRSxhQUFLO1lBQ3ZFLElBQU0sS0FBSyxHQUFrQixLQUFJLENBQUMsZUFBZ0IsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFFN0QsSUFBSSxLQUFLLEVBQUU7Z0JBQ1AsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzdCO2lCQUFNO2dCQUNILE9BQU8sSUFBSSxDQUFDO2FBQ2Y7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO2FBQ1gsSUFBSSxDQUFDLGNBQU0sT0FBQSxDQUNSLGNBQU8sQ0FBQztZQUNKLEdBQUcsRUFBRSxXQUFXO1lBQ2hCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsSUFBSSxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtTQUN2QixDQUFDLENBQ0wsRUFOVyxDQU1YLENBQUM7YUFDRCxJQUFJLENBQUMsY0FBTSxPQUFBLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTztZQUMzQixFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNULEtBQUssRUFBRSxVQUFVO2dCQUNqQixRQUFRLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUE3QixDQUE2QjthQUNoRCxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsRUFMVSxDQUtWLENBQUM7YUFDRixJQUFJLENBQUMsVUFBQSxVQUFVLElBQUksT0FBQSxVQUFVLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxvQkFBb0IsRUFBRSxDQUFDLEVBQXhELENBQXdELENBQUM7YUFDNUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV4QixJQUFJLENBQUMsT0FBUSxDQUFDLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNELGNBQWM7UUFDVixJQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRywyR0FBQSw4Q0FBMkMsSUFBQSxDQUFDO1FBRXJFLElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxHQUFHLCtFQUFBLFNBQVMsRUFBTSxHQUFHLEtBQVQsTUFBTSxDQUFHLENBQUM7UUFDM0MsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsaUdBQUEsb0JBQW1CLEVBQU0sWUFBWSxLQUFsQixNQUFNLENBQVksQ0FBQztRQUU5RCxJQUFJLENBQUMsT0FBUSxDQUFDLEVBQUUsbUJBQW1CLEVBQUUsWUFBVSxLQUFLLFNBQUksS0FBSyxPQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5L+u5pS55Liq5Lq65L+h5oGvXHJcbiAqL1xyXG5pbXBvcnQgeyBJbnB1dEJlaGF2aW9yIH0gZnJvbSAnLi4vLi4vLi4vYmVoYXZpb3IvaW5wdXQnO1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvaHR0cCc7XHJcblxyXG5QYWdlKHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBmb3JtOiB7XHJcbiAgICAgICAgICAgIGNvZGU6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpZENhcmRSdWxlOiB7XHJcbiAgICAgICAgICAgIHJlZ2V4cDogJycsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICfml6DmlYjouqvku73or4Hlj7cnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYW5HZXRDb2RlOiB0cnVlLFxyXG4gICAgICAgIGNvZGVCdG5UZXh0OiAn6I635Y+W6aqM6K+B56CBJyxcclxuICAgICAgICBub3RHZXRJbmZvOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIG9uTG9hZChxdWVyeT86IElBbnlPYmplY3QpIHtcclxuICAgICAgICB0aGlzLl9zZXRJZENhcmRSdWxlKCk7XHJcblxyXG4gICAgICAgIGlmICghKHF1ZXJ5ICYmIHF1ZXJ5Lm5vdEdldEluZm8pKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3Q8SVVzZXI+KHsgdXJsOiAnL2FwaS91c2VyJyB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhIShcclxuICAgICAgICAgICAgICAgICAgICAgICAgWydhZGRyZXNzJywgJ2lkQ2FyZCcsICdwaG9uZScsICdyZWFsTmFtZScsICdlbWFpbCddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVkdWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChmb3JtLCBrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1bYGZvcm0uJHtrfWBdID0gKDxJQW55T2JqZWN0PmRhdGEpW2tdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZm9ybTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJQW55T2JqZWN0Pnt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihjb25zb2xlLmxvZyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLm5vdEdldEluZm8gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbklucHV0KGU6IEJhc2VFdmVudCkge1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSEoeyBbYGZvcm0uJHtlLnRhcmdldC5pZH1gXTogZS5kZXRhaWwudmFsdWUgfSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0Q29kZSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZ2V0Q29kZScpO1xyXG4gICAgfSxcclxuICAgIHNhdmUoKSB7XHJcbiAgICAgICAgY29uc3QgYXJyID0gT2JqZWN0LmVudHJpZXM8c3RyaW5nIHwgbnVtYmVyPih0aGlzLmRhdGEuZm9ybSkubWFwKChbaWQsIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IDxJbnB1dEJlaGF2aW9yPnRoaXMuc2VsZWN0Q29tcG9uZW50ISgnIycgKyBpZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbnB1dC52YWxpZCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBQcm9taXNlLmFsbChhcnIpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IChcclxuICAgICAgICAgICAgICAgIHJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9hcGkvdXNlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogdGhpcy5kYXRhLmZvcm1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+S/ruaUueS4quS6uuS/oeaBr+aIkOWKnycsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6ICgpID0+IHJlc29sdmUodGhpcy5kYXRhLm5vdEdldEluZm8pXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgIC50aGVuKG5vdEdldEluZm8gPT4gbm90R2V0SW5mbyAmJiB3eC5yZUxhdW5jaCh7IHVybDogJy9wYWdlcy9pbmRleC9pbmRleCcgfSkpXHJcbiAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0RGF0YSEoeyAnZm9ybS5jb2RlJzogJycgfSk7XHJcbiAgICB9LFxyXG4gICAgX3NldElkQ2FyZFJ1bGUoKSB7XHJcbiAgICAgICAgY29uc3QgY29tbW9uID0gU3RyaW5nLnJhd2AoKDBcXGQpfCgxWzAtMl0pKSgoWzB8MXwyXVxcZCl8M1swLTFdKVxcZHszfWA7XHJcblxyXG4gICAgICAgIGNvbnN0IHN0cjE1ID0gU3RyaW5nLnJhd2AoXFxkezd9JHtjb21tb259KWA7XHJcbiAgICAgICAgY29uc3Qgc3RyMTggPSBTdHJpbmcucmF3YChcXGR7NX1bMS05XVxcZHszfSR7Y29tbW9ufShbMC05XXxYKSlgO1xyXG5cclxuICAgICAgICB0aGlzLnNldERhdGEhKHsgJ2lkQ2FyZFJ1bGUucmVnZXhwJzogYF5bMS05XSgke3N0cjE1fXwke3N0cjE4fSkkYCB9KTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==