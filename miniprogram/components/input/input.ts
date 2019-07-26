/**
 * 表单组件, 不支持动态改变type
 */

import inputBehavior from '../../behavior/input';
import * as computed from 'miniprogram-computed';

Component({
    behaviors: [inputBehavior, computed],
    externalClasses: ['custom-class', 'label-class', 'input-class'],
    properties: {
        confirmType: {
            type: String,
            value: 'done'
        },
        type: {
            type: String,
            value: ''
        },
        maxlength: {
            type: Number,
            value: 140
        }
    },
    attached() {
        const type: string = this.data.type;
        let currType: string = ['number', 'idcard', 'digit'].indexOf(type) > -1 ? type : 'text';

        if (type === 'email') {
            this.data.rules.push({
                id: 'email',
                regexp: /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/,
                message: '无效的电子邮件'
            });
        } else if (type === 'tel') {
            this.data.rules.push({
                id: 'tel',
                regexp: /^1[3456789]\d{9}$/,
                message: '无效手机号'
            });
            currType = 'number';
        }

        this.setData({ currType });
    }
})