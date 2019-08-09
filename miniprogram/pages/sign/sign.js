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
            tel: [{
                    regexp: '^1[3456789]\\d{9}$',
                    message: '无效电话号码'
                }],
            email: [{
                    regexp: '^(\\w-*\\.*)+@(\\w-?)+(\\.\\w{2,})+$',
                    message: '无效邮箱'
                }]
        }
    },
    methods: {
        _submit: function () {
            console.log(this.data.form);
            var pages = getCurrentPages();
            console.log(pages);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSw0REFBOEQ7QUFFOUQsU0FBUyxDQUFDO0lBQ04sU0FBUyxFQUFFLENBQUMsc0JBQW1CLENBQUM7SUFDaEMsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFO1lBQ0YsSUFBSSxFQUFFLEVBQUU7WUFDUixHQUFHLEVBQUUsRUFBRTtZQUNQLEtBQUssRUFBRSxFQUFFO1NBQ1o7UUFDRCxLQUFLLEVBQUU7WUFDSCxHQUFHLEVBQUUsQ0FBQztvQkFDRixNQUFNLEVBQUUsb0JBQW9CO29CQUM1QixPQUFPLEVBQUUsUUFBUTtpQkFDcEIsQ0FBQztZQUNGLEtBQUssRUFBRSxDQUFDO29CQUNKLE1BQU0sRUFBRSxzQ0FBc0M7b0JBQzlDLE9BQU8sRUFBRSxNQUFNO2lCQUNsQixDQUFDO1NBQ0w7S0FDSjtJQUNELE9BQU8sRUFBRTtRQUNMLE9BQU87WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFNUIsSUFBTSxLQUFLLEdBQUcsZUFBZSxFQUFFLENBQUM7WUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDO0tBQ0o7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5rS75Yqo5oql5ZCNXHJcbiAqL1xyXG5cclxuaW1wb3J0IFByb2plY3RGb3JtQmVoYXZpb3IgZnJvbSAnLi4vLi4vYmVoYXZpb3IvcHJvamVjdF9mb3JtJztcclxuXHJcbkNvbXBvbmVudCh7XHJcbiAgICBiZWhhdmlvcnM6IFtQcm9qZWN0Rm9ybUJlaGF2aW9yXSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBmb3JtOiB7XHJcbiAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICB0ZWw6ICcnLFxyXG4gICAgICAgICAgICBlbWFpbDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJ1bGVzOiB7XHJcbiAgICAgICAgICAgIHRlbDogW3tcclxuICAgICAgICAgICAgICAgIHJlZ2V4cDogJ14xWzM0NTY3ODldXFxcXGR7OX0kJyxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfml6DmlYjnlLXor53lj7fnoIEnXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBlbWFpbDogW3tcclxuICAgICAgICAgICAgICAgIHJlZ2V4cDogJ14oXFxcXHctKlxcXFwuKikrQChcXFxcdy0/KSsoXFxcXC5cXFxcd3syLH0pKyQnLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ+aXoOaViOmCrueusSdcclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIF9zdWJtaXQoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YS5mb3JtKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhZ2VzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pOyJdfQ==