/**
 * 活动报名
 */

import ProjectFormBehavior from '../../behavior/project_form';
import { request } from '../../utils/http';
import { EnInfo } from '../person/activity/sign/sign';

Component({
    behaviors: [ProjectFormBehavior],
    data: {
        form: {
            name: '',
            phone: '',
            mail: ''
        },
        rules: {
            phone: {
                regexp: '^1[3456789]\\d{9}$',
                message: '无效电话号码'
            },
            mail: {
                regexp: '^(\\w-*\\.*)+@(\\w-?)+(\\.\\w{2,})+$',
                message: '无效邮箱'
            }
        },
        hasOldData: false
    },
    attached() {
        request<EnInfo>({url: '/api/activity/participation/lastJoin', notShowMsg: true})
            .then(({data: {name, phone, mail}}) => this.setData({form: {name, phone, mail}, hasOldData: true}))
            .catch(console.error);
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
                .then(() => wx.showToast({ title: '报名成功' }))
                .catch(console.log);

            return true;
        }
    }
});
