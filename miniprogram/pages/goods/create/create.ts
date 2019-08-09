/**
 * 商品上架
 */
import ProjectFormBehavior from '../../../behavior/project_form';

Component({
    behaviors: [ProjectFormBehavior],
    data: {
        form: {
            name: '',
            grade: '',
            award: '',
            details: '',
            time: [],
            img: ''
        },
        timeRule: {
            min: 2,
            message: '兑换时间需选择两个时间点'
        }
    },
    methods: {
        _parseValue(value: string, name: string) {
            if (name === 'grade' || name === 'award') {
                return isNaN(+value) ? '' : +value;
            }

            return value;
        }
    }
});
