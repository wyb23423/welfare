"use strict";
Component({
    properties: {
        name: {
            type: String,
            value: ''
        }
    },
    relations: {
        '../carousel': { type: 'parent' }
    },
    data: {
        translate: '0%',
        zIndex: 0
    },
    observers: {
        translate: function (value) {
            var zIndex = 0;
            if (("" + value).startsWith('0')) {
                zIndex = 9;
            }
            else if (value === '-100%' || value === '100%') {
                zIndex = 8;
            }
            this.setData({ zIndex: zIndex });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIml0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFNBQVMsQ0FBQztJQUNOLFVBQVUsRUFBRTtRQUNSLElBQUksRUFBRTtZQUNGLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLEVBQUU7U0FDWjtLQUNKO0lBQ0QsU0FBUyxFQUFFO1FBQ1AsYUFBYSxFQUFFLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBQztLQUNsQztJQUNELElBQUksRUFBRTtRQUNGLFNBQVMsRUFBRSxJQUFJO1FBQ2YsTUFBTSxFQUFFLENBQUM7S0FDWjtJQUNELFNBQVMsRUFBRTtRQUNQLFNBQVMsWUFBb0IsS0FBYTtZQUN0QyxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDZixJQUFHLENBQUEsS0FBRyxLQUFPLENBQUEsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQzNCLE1BQU0sR0FBRyxDQUFDLENBQUM7YUFDZDtpQkFBTSxJQUFHLEtBQUssS0FBSyxPQUFPLElBQUksS0FBSyxLQUFLLE1BQU0sRUFBRTtnQkFDN0MsTUFBTSxHQUFHLENBQUMsQ0FBQzthQUNkO1lBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFDLE1BQU0sUUFBQSxFQUFDLENBQUMsQ0FBQztRQUMzQixDQUFDO0tBQ0o7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJDb21wb25lbnQoe1xyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIG5hbWU6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJydcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVsYXRpb25zOiB7XHJcbiAgICAgICAgJy4uL2Nhcm91c2VsJzoge3R5cGU6ICdwYXJlbnQnfVxyXG4gICAgfSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgICB0cmFuc2xhdGU6ICcwJScsXHJcbiAgICAgICAgekluZGV4OiAwXHJcbiAgICB9LFxyXG4gICAgb2JzZXJ2ZXJzOiB7XHJcbiAgICAgICAgdHJhbnNsYXRlKHRoaXM6IFd4Q29tcG9uZW50LCB2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIGxldCB6SW5kZXggPSAwO1xyXG4gICAgICAgICAgICBpZihgJHt2YWx1ZX1gLnN0YXJ0c1dpdGgoJzAnKSkge1xyXG4gICAgICAgICAgICAgICAgekluZGV4ID0gOTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHZhbHVlID09PSAnLTEwMCUnIHx8IHZhbHVlID09PSAnMTAwJScpIHtcclxuICAgICAgICAgICAgICAgIHpJbmRleCA9IDg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7ekluZGV4fSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19