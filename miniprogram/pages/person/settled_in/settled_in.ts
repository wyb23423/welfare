/**
 * 创建活动
 */
import ProjectFormBehavior from '../../../behavior/project_form';

Component({
    behaviors: [ProjectFormBehavior],
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
    methods: {

    }
});
