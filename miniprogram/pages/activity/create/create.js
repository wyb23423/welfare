"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var project_form_1 = require("../../../behavior/project_form");
Component({
    behaviors: [project_form_1.default],
    data: {
        form: {
            name: '',
            intro: '',
            details: '',
            size: '',
            time: [],
            location: '',
            type: 0,
            img: ''
        },
        timeRule: {
            min: 2,
            message: '活动时间需选择两个时间点'
        }
    },
    methods: {
        _parseValue: function (value, name) {
            if (name === 'type' || name === 'size') {
                return isNaN(+value) ? '' : +value;
            }
            return value;
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JlYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsK0RBQWlFO0FBRWpFLFNBQVMsQ0FBQztJQUNOLFNBQVMsRUFBRSxDQUFDLHNCQUFtQixDQUFDO0lBQ2hDLElBQUksRUFBRTtRQUNGLElBQUksRUFBRTtZQUNGLElBQUksRUFBRSxFQUFFO1lBQ1IsS0FBSyxFQUFFLEVBQUU7WUFDVCxPQUFPLEVBQUUsRUFBRTtZQUNYLElBQUksRUFBRSxFQUFFO1lBQ1IsSUFBSSxFQUFFLEVBQUU7WUFDUixRQUFRLEVBQUUsRUFBRTtZQUNaLElBQUksRUFBRSxDQUFDO1lBQ1AsR0FBRyxFQUFFLEVBQUU7U0FDVjtRQUNELFFBQVEsRUFBRTtZQUNOLEdBQUcsRUFBRSxDQUFDO1lBQ04sT0FBTyxFQUFFLGNBQWM7U0FDMUI7S0FDSjtJQUNELE9BQU8sRUFBRTtRQUNMLFdBQVcsWUFBQyxLQUFhLEVBQUUsSUFBWTtZQUNuQyxJQUFJLElBQUksS0FBSyxNQUFNLElBQUksSUFBSSxLQUFLLE1BQU0sRUFBRTtnQkFDcEMsT0FBTyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUN0QztZQUVELE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7S0FDSjtDQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDliJvlu7rmtLvliqhcclxuICovXHJcbmltcG9ydCBQcm9qZWN0Rm9ybUJlaGF2aW9yIGZyb20gJy4uLy4uLy4uL2JlaGF2aW9yL3Byb2plY3RfZm9ybSc7XHJcblxyXG5Db21wb25lbnQoe1xyXG4gICAgYmVoYXZpb3JzOiBbUHJvamVjdEZvcm1CZWhhdmlvcl0sXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgZm9ybToge1xyXG4gICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgaW50cm86ICcnLFxyXG4gICAgICAgICAgICBkZXRhaWxzOiAnJyxcclxuICAgICAgICAgICAgc2l6ZTogJycsXHJcbiAgICAgICAgICAgIHRpbWU6IFtdLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXHJcbiAgICAgICAgICAgIHR5cGU6IDAsXHJcbiAgICAgICAgICAgIGltZzogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRpbWVSdWxlOiB7XHJcbiAgICAgICAgICAgIG1pbjogMixcclxuICAgICAgICAgICAgbWVzc2FnZTogJ+a0u+WKqOaXtumXtOmcgOmAieaLqeS4pOS4quaXtumXtOeCuSdcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIF9wYXJzZVZhbHVlKHZhbHVlOiBzdHJpbmcsIG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgICAgICBpZiAobmFtZSA9PT0gJ3R5cGUnIHx8IG5hbWUgPT09ICdzaXplJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzTmFOKCt2YWx1ZSkgPyAnJyA6ICt2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==