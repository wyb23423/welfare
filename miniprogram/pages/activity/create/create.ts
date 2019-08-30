/**
 * 创建活动
 */
import ProjectFormBehavior from '../../../behavior/project_form';

Component({
    behaviors: [ProjectFormBehavior],
    data: {
        form: {
            name: '',
            intro: '',
            details: '',
            size: '',
            time: [],
            location: '',
            img: ''
        },
        timeRule: {
            min: 2,
            message: '活动时间需选择两个时间点'
        }
    },
    methods: {
        _parseValue(value: string, name: string) {
            if (name === 'type' || name === 'size') {
                return isNaN(+value) ? '' : +value;
            }

            return value;
        }
    }
});
