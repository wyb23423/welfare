"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
            .then(function () {
            console.log('修改个人信息成功');
        })
            .catch(console.log);
        this.setData({ 'form.code': '' });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFLQSxJQUFJLENBQUM7SUFDRCxJQUFJLEVBQUU7UUFDRixJQUFJLEVBQUU7WUFDRixPQUFPLEVBQUUsTUFBTTtZQUNmLE1BQU0sRUFBRSxvQkFBb0I7WUFDNUIsS0FBSyxFQUFFLFdBQVc7WUFDbEIsSUFBSSxFQUFFLE1BQU07WUFDWixJQUFJLEVBQUUsRUFBRTtZQUNSLEtBQUssRUFBRSxFQUFFO1NBQ1o7UUFDRCxVQUFVLEVBQUU7WUFDUixNQUFNLEVBQUUseUlBQXlJO1lBQ2pKLE9BQU8sRUFBRSxRQUFRO1NBQ3BCO1FBQ0QsVUFBVSxFQUFFLElBQUk7UUFDaEIsV0FBVyxFQUFFLE9BQU87S0FDdkI7SUFDRCxPQUFPLFlBQUMsQ0FBWTs7UUFDaEIsSUFBSSxDQUFDLE9BQVEsV0FBRyxHQUFDLFVBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFJLElBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLE1BQUcsQ0FBQztJQUMvRCxDQUFDO0lBQ0QsT0FBTztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUNELElBQUk7UUFBSixpQkFrQkM7UUFqQkcsSUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBa0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxFQUFXO2dCQUFWLFVBQUUsRUFBRSxhQUFLO1lBQ3ZFLElBQU0sS0FBSyxHQUFrQixLQUFJLENBQUMsZUFBZ0IsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFFN0QsSUFBSSxLQUFLLEVBQUU7Z0JBQ1AsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzdCO2lCQUFNO2dCQUNILE9BQU8sSUFBSSxDQUFDO2FBQ2Y7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO2FBQ1gsSUFBSSxDQUFDO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXhCLElBQUksQ0FBQyxPQUFRLENBQUMsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOS/ruaUueS4quS6uuS/oeaBr1xyXG4gKi9cclxuaW1wb3J0IHsgSW5wdXRCZWhhdmlvciB9IGZyb20gJy4uLy4uLy4uL2JlaGF2aW9yL2lucHV0JztcclxuXHJcblBhZ2Uoe1xyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGZvcm06IHtcclxuICAgICAgICAgICAgYWRkcmVzczogJ+WtpuWbremDveW4gicsXHJcbiAgICAgICAgICAgIGlkY2FyZDogJzExMTExMTExMTExMTExMTExMScsXHJcbiAgICAgICAgICAgIHBob25lOiAxMzExMTExMTExMSxcclxuICAgICAgICAgICAgbmFtZTogJ+W+oeWdguW+oeWdgicsXHJcbiAgICAgICAgICAgIGNvZGU6ICcnLFxyXG4gICAgICAgICAgICBlbWFpbDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGlkY2FyZFJ1bGU6IHtcclxuICAgICAgICAgICAgcmVnZXhwOiAnXlsxLTldXFxcXGR7N30oKDBcXFxcZCl8KDFbMC0yXSkpKChbMHwxfDJdXFxcXGQpfDNbMC0xXSlcXFxcZHszfSR8XlsxLTldXFxcXGR7NX1bMS05XVxcXFxkezN9KCgwXFxcXGQpfCgxWzAtMl0pKSgoWzB8MXwyXVxcXFxkKXwzWzAtMV0pXFxcXGR7M30oWzAtOV18WCkkJyxcclxuICAgICAgICAgICAgbWVzc2FnZTogJ+aXoOaViOi6q+S7veivgeWPtydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNhbkdldENvZGU6IHRydWUsXHJcbiAgICAgICAgY29kZUJ0blRleHQ6ICfojrflj5bpqozor4HnoIEnLFxyXG4gICAgfSxcclxuICAgIG9uSW5wdXQoZTogQmFzZUV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhISh7IFtgZm9ybS4ke2UudGFyZ2V0LmlkfWBdOiBlLmRldGFpbC52YWx1ZSB9KTtcclxuICAgIH0sXHJcbiAgICBnZXRDb2RlKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXRDb2RlJyk7XHJcbiAgICB9LFxyXG4gICAgc2F2ZSgpIHtcclxuICAgICAgICBjb25zdCBhcnIgPSBPYmplY3QuZW50cmllczxzdHJpbmcgfCBudW1iZXI+KHRoaXMuZGF0YS5mb3JtKS5tYXAoKFtpZCwgdmFsdWVdKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gPElucHV0QmVoYXZpb3I+dGhpcy5zZWxlY3RDb21wb25lbnQhKCcjJyArIGlkKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlucHV0LnZhbGlkKHZhbHVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFByb21pc2UuYWxsKGFycilcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+S/ruaUueS4quS6uuS/oeaBr+aIkOWKnycpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xyXG5cclxuICAgICAgICB0aGlzLnNldERhdGEhKHsgJ2Zvcm0uY29kZSc6ICcnIH0pO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==