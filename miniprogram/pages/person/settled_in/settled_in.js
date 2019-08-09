"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var project_form_1 = require("../../../behavior/project_form");
Component({
    behaviors: [project_form_1.default],
    data: {
        form: {
            name: '',
            tel: '',
            details: '',
            location: '',
            img: ''
        },
        telRule: {
            regexp: '^1[3456789]\\d{9}$',
            message: '无效电话号码'
        }
    },
    methods: {}
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGxlZF9pbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNldHRsZWRfaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSwrREFBaUU7QUFFakUsU0FBUyxDQUFDO0lBQ04sU0FBUyxFQUFFLENBQUMsc0JBQW1CLENBQUM7SUFDaEMsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFO1lBQ0YsSUFBSSxFQUFFLEVBQUU7WUFDUixHQUFHLEVBQUUsRUFBRTtZQUNQLE9BQU8sRUFBRSxFQUFFO1lBQ1gsUUFBUSxFQUFFLEVBQUU7WUFDWixHQUFHLEVBQUUsRUFBRTtTQUNWO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsTUFBTSxFQUFFLG9CQUFvQjtZQUM1QixPQUFPLEVBQUUsUUFBUTtTQUNwQjtLQUNKO0lBQ0QsT0FBTyxFQUFFLEVBRVI7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5ZWG5a625YWl6am7XHJcbiAqL1xyXG5pbXBvcnQgUHJvamVjdEZvcm1CZWhhdmlvciBmcm9tICcuLi8uLi8uLi9iZWhhdmlvci9wcm9qZWN0X2Zvcm0nO1xyXG5cclxuQ29tcG9uZW50KHtcclxuICAgIGJlaGF2aW9yczogW1Byb2plY3RGb3JtQmVoYXZpb3JdLFxyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGZvcm06IHtcclxuICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgIHRlbDogJycsXHJcbiAgICAgICAgICAgIGRldGFpbHM6ICcnLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXHJcbiAgICAgICAgICAgIGltZzogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRlbFJ1bGU6IHtcclxuICAgICAgICAgICAgcmVnZXhwOiAnXjFbMzQ1Njc4OV1cXFxcZHs5fSQnLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiAn5peg5pWI55S16K+d5Y+356CBJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcblxyXG4gICAgfVxyXG59KTtcclxuIl19