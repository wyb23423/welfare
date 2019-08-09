"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var project_form_1 = require("../../../behavior/project_form");
Component({
    behaviors: [project_form_1.default],
    data: {
        form: {
            name: '',
            grade: '',
            award: '',
            details: '',
            time: [],
            img: ''
        },
        timeRule: {
            min: 2,
            message: '兑换时间需选择两个时间点'
        }
    },
    methods: {
        _parseValue: function (value, name) {
            if (name === 'grade' || name === 'award') {
                return isNaN(+value) ? '' : +value;
            }
            return value;
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JlYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsK0RBQWlFO0FBRWpFLFNBQVMsQ0FBQztJQUNOLFNBQVMsRUFBRSxDQUFDLHNCQUFtQixDQUFDO0lBQ2hDLElBQUksRUFBRTtRQUNGLElBQUksRUFBRTtZQUNGLElBQUksRUFBRSxFQUFFO1lBQ1IsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULE9BQU8sRUFBRSxFQUFFO1lBQ1gsSUFBSSxFQUFFLEVBQUU7WUFDUixHQUFHLEVBQUUsRUFBRTtTQUNWO1FBQ0QsUUFBUSxFQUFFO1lBQ04sR0FBRyxFQUFFLENBQUM7WUFDTixPQUFPLEVBQUUsY0FBYztTQUMxQjtLQUNKO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsV0FBVyxZQUFDLEtBQWEsRUFBRSxJQUFZO1lBQ25DLElBQUksSUFBSSxLQUFLLE9BQU8sSUFBSSxJQUFJLEtBQUssT0FBTyxFQUFFO2dCQUN0QyxPQUFPLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQ3RDO1lBRUQsT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQztLQUNKO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOWIm+W7uua0u+WKqFxyXG4gKi9cclxuaW1wb3J0IFByb2plY3RGb3JtQmVoYXZpb3IgZnJvbSAnLi4vLi4vLi4vYmVoYXZpb3IvcHJvamVjdF9mb3JtJztcclxuXHJcbkNvbXBvbmVudCh7XHJcbiAgICBiZWhhdmlvcnM6IFtQcm9qZWN0Rm9ybUJlaGF2aW9yXSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBmb3JtOiB7XHJcbiAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICBncmFkZTogJycsXHJcbiAgICAgICAgICAgIGF3YXJkOiAnJyxcclxuICAgICAgICAgICAgZGV0YWlsczogJycsXHJcbiAgICAgICAgICAgIHRpbWU6IFtdLFxyXG4gICAgICAgICAgICBpbWc6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0aW1lUnVsZToge1xyXG4gICAgICAgICAgICBtaW46IDIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICflhZHmjaLml7bpl7TpnIDpgInmi6nkuKTkuKrml7bpl7TngrknXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBfcGFyc2VWYWx1ZSh2YWx1ZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdncmFkZScgfHwgbmFtZSA9PT0gJ2F3YXJkJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzTmFOKCt2YWx1ZSkgPyAnJyA6ICt2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==