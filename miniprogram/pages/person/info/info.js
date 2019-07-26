"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = getApp();
Page({
    data: {
        form: {
            address: '学园都市',
            idcard: '111111111111111111',
            phone: 13111111111,
            name: '御坂御坂',
            code: '',
            email: ''
        },
        idcardRule: {
            regexp: '^[1-9]\\d{7}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}$|^[1-9]\\d{5}[1-9]\\d{3}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}([0-9]|X)$',
            message: '无效身份证号'
        },
        canGetCode: true,
        codeBtnText: '获取验证码',
    },
    onLoad: function () {
        var userInfo = app.globalData.userInfo;
        this.setData({
            name: userInfo.nickName,
            img: userInfo.avatarUrl
        });
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
        Promise.all(arr).then(function () { return console.log(_this.data.form); }).catch(console.log);
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFNQSxJQUFNLEdBQUcsR0FBVyxNQUFNLEVBQUUsQ0FBQztBQUU3QixJQUFJLENBQUM7SUFDRCxJQUFJLEVBQUU7UUFDRixJQUFJLEVBQUU7WUFDRixPQUFPLEVBQUUsTUFBTTtZQUNmLE1BQU0sRUFBRSxvQkFBb0I7WUFDNUIsS0FBSyxFQUFFLFdBQVc7WUFDbEIsSUFBSSxFQUFFLE1BQU07WUFDWixJQUFJLEVBQUUsRUFBRTtZQUNSLEtBQUssRUFBRSxFQUFFO1NBQ1o7UUFDRCxVQUFVLEVBQUU7WUFDUixNQUFNLEVBQUUseUlBQXlJO1lBQ2pKLE9BQU8sRUFBRSxRQUFRO1NBQ3BCO1FBQ0QsVUFBVSxFQUFFLElBQUk7UUFDaEIsV0FBVyxFQUFFLE9BQU87S0FDdkI7SUFDRCxNQUFNO1FBQ0YsSUFBTSxRQUFRLEdBQWdCLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1FBQ3RELElBQUksQ0FBQyxPQUFRLENBQUM7WUFDVixJQUFJLEVBQUUsUUFBUSxDQUFDLFFBQVE7WUFDdkIsR0FBRyxFQUFFLFFBQVEsQ0FBQyxTQUFTO1NBQzFCLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDRCxPQUFPLFlBQUMsQ0FBWTs7UUFDaEIsSUFBSSxDQUFDLE9BQVEsV0FBRyxHQUFDLFVBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFJLElBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLE1BQUcsQ0FBQztJQUMvRCxDQUFDO0lBQ0QsT0FBTztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUNELElBQUk7UUFBSixpQkFZQztRQVhHLElBQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQWtCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFBVztnQkFBVixVQUFFLEVBQUUsYUFBSztZQUN2RSxJQUFNLEtBQUssR0FBa0IsS0FBSSxDQUFDLGVBQWdCLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBRTdELElBQUksS0FBSyxFQUFFO2dCQUNQLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM3QjtpQkFBTTtnQkFDSCxPQUFPLElBQUksQ0FBQzthQUNmO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUEzQixDQUEyQixDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoRixDQUFDO0NBQ0osQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFxyXG4gKi9cclxuaW1wb3J0IHsgSU15QXBwIH0gZnJvbSBcIi4uLy4uLy4uL2FwcFwiO1xyXG5pbXBvcnQgeyBJbnB1dEJlaGF2aW9yIH0gZnJvbSBcIi4uLy4uLy4uL2JlaGF2aW9yL2lucHV0XCI7XHJcblxyXG5jb25zdCBhcHAgPSA8SU15QXBwPmdldEFwcCgpO1xyXG5cclxuUGFnZSh7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgZm9ybToge1xyXG4gICAgICAgICAgICBhZGRyZXNzOiAn5a2m5Zut6YO95biCJyxcclxuICAgICAgICAgICAgaWRjYXJkOiAnMTExMTExMTExMTExMTExMTExJyxcclxuICAgICAgICAgICAgcGhvbmU6IDEzMTExMTExMTExLFxyXG4gICAgICAgICAgICBuYW1lOiAn5b6h5Z2C5b6h5Z2CJyxcclxuICAgICAgICAgICAgY29kZTogJycsXHJcbiAgICAgICAgICAgIGVtYWlsOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaWRjYXJkUnVsZToge1xyXG4gICAgICAgICAgICByZWdleHA6ICdeWzEtOV1cXFxcZHs3fSgoMFxcXFxkKXwoMVswLTJdKSkoKFswfDF8Ml1cXFxcZCl8M1swLTFdKVxcXFxkezN9JHxeWzEtOV1cXFxcZHs1fVsxLTldXFxcXGR7M30oKDBcXFxcZCl8KDFbMC0yXSkpKChbMHwxfDJdXFxcXGQpfDNbMC0xXSlcXFxcZHszfShbMC05XXxYKSQnLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiAn5peg5pWI6Lqr5Lu96K+B5Y+3J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FuR2V0Q29kZTogdHJ1ZSxcclxuICAgICAgICBjb2RlQnRuVGV4dDogJ+iOt+WPlumqjOivgeeggScsXHJcbiAgICB9LFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNvbnN0IHVzZXJJbmZvOiB3eC5Vc2VySW5mbyA9IGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvO1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgICBuYW1lOiB1c2VySW5mby5uaWNrTmFtZSxcclxuICAgICAgICAgICAgaW1nOiB1c2VySW5mby5hdmF0YXJVcmxcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuICAgIG9uSW5wdXQoZTogQmFzZUV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhISh7IFtgZm9ybS4ke2UudGFyZ2V0LmlkfWBdOiBlLmRldGFpbC52YWx1ZSB9KTtcclxuICAgIH0sXHJcbiAgICBnZXRDb2RlKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXRDb2RlJyk7XHJcbiAgICB9LFxyXG4gICAgc2F2ZSgpIHtcclxuICAgICAgICBjb25zdCBhcnIgPSBPYmplY3QuZW50cmllczxzdHJpbmcgfCBudW1iZXI+KHRoaXMuZGF0YS5mb3JtKS5tYXAoKFtpZCwgdmFsdWVdKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gPElucHV0QmVoYXZpb3I+dGhpcy5zZWxlY3RDb21wb25lbnQhKCcjJyArIGlkKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlucHV0LnZhbGlkKHZhbHVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFByb21pc2UuYWxsKGFycikudGhlbigoKSA9PiBjb25zb2xlLmxvZyh0aGlzLmRhdGEuZm9ybSkpLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuICAgIH0sXHJcbn0pIl19