"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var project_form_1 = require("../../behavior/project_form");
Component({
    behaviors: [project_form_1.default],
    data: {
        form: {
            name: '',
            tel: '',
            email: ''
        },
        rules: {
            tel: {
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
            console.log(this.data.form);
            var page = getCurrentPages().pop();
            if (!(page && page.options && page.options.id)) {
                return Promise.reject('非法访问!');
            }
            console.log(page.options.id);
            return true;
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSw0REFBOEQ7QUFFOUQsU0FBUyxDQUFDO0lBQ04sU0FBUyxFQUFFLENBQUMsc0JBQW1CLENBQUM7SUFDaEMsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFO1lBQ0YsSUFBSSxFQUFFLEVBQUU7WUFDUixHQUFHLEVBQUUsRUFBRTtZQUNQLEtBQUssRUFBRSxFQUFFO1NBQ1o7UUFDRCxLQUFLLEVBQUU7WUFDSCxHQUFHLEVBQUU7Z0JBQ0QsTUFBTSxFQUFFLG9CQUFvQjtnQkFDNUIsT0FBTyxFQUFFLFFBQVE7YUFDcEI7WUFDRCxLQUFLLEVBQUU7Z0JBQ0gsTUFBTSxFQUFFLHNDQUFzQztnQkFDOUMsT0FBTyxFQUFFLE1BQU07YUFDbEI7U0FDSjtLQUNKO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsT0FBTztZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUU1QixJQUFNLElBQUksR0FBRyxlQUFlLEVBQW1CLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDdEQsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFDNUMsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2xDO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRTdCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7S0FDSjtDQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDmtLvliqjmiqXlkI1cclxuICovXHJcblxyXG5pbXBvcnQgUHJvamVjdEZvcm1CZWhhdmlvciBmcm9tICcuLi8uLi9iZWhhdmlvci9wcm9qZWN0X2Zvcm0nO1xyXG5cclxuQ29tcG9uZW50KHtcclxuICAgIGJlaGF2aW9yczogW1Byb2plY3RGb3JtQmVoYXZpb3JdLFxyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGZvcm06IHtcclxuICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgIHRlbDogJycsXHJcbiAgICAgICAgICAgIGVtYWlsOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcnVsZXM6IHtcclxuICAgICAgICAgICAgdGVsOiB7XHJcbiAgICAgICAgICAgICAgICByZWdleHA6ICdeMVszNDU2Nzg5XVxcXFxkezl9JCcsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAn5peg5pWI55S16K+d5Y+356CBJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlbWFpbDoge1xyXG4gICAgICAgICAgICAgICAgcmVnZXhwOiAnXihcXFxcdy0qXFxcXC4qKStAKFxcXFx3LT8pKyhcXFxcLlxcXFx3ezIsfSkrJCcsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAn5peg5pWI6YKu566xJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBfc3VibWl0KCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGEuZm9ybSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwYWdlID0gZ2V0Q3VycmVudFBhZ2VzPElBbnlPYmplY3QsIGFueT4oKS5wb3AoKTtcclxuICAgICAgICAgICAgaWYgKCEocGFnZSAmJiBwYWdlLm9wdGlvbnMgJiYgcGFnZS5vcHRpb25zLmlkKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCfpnZ7ms5Xorr/pl64hJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2cocGFnZS5vcHRpb25zLmlkKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7Il19