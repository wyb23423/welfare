/**
 * 活动报名
 */

import ProjectFormBehavior from '../../behavior/project_form';

Component({
    behaviors: [ProjectFormBehavior],
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
        _submit() {
            console.log(this.data.form);

            const page = getCurrentPages<IAnyObject, any>().pop();
            if (!(page && page.options && page.options.id)) {
                return Promise.reject('非法访问!');
            }
            console.log(page.options.id);

            return true;
        }
    }
});