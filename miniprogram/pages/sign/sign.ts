/**
 * 活动报名
 */

import ProjectFormBehavior from '../../behavior/project_form';
import { request } from '../../utils/http';

Component({
    behaviors: [ProjectFormBehavior],
    data: {
        form: {
            name: '',
            phone: '',
            email: ''
        },
        rules: {
            phone: {
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
            const page = getCurrentPages<IAnyObject, any>().pop();
            if (!(page && page.options && page.options.id)) {
                return Promise.reject('非法访问!');
            }

            request({
                url: '/api/activity/participation',
                method: 'PUT',
                data: {
                    ...this.data.form,
                    activityId: page.options.id
                }
            })
                .then(() => wx.showToast({ title: '报名成功, 请准时参加!!' }))
                .catch(console.log);

            return true;
        }
    }
});
