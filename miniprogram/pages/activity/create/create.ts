/**
 * 创建活动
 */
import ProjectFormBehavior from '../../../behavior/project_form';
import { uploadFile } from '../../../utils/http';

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
        _submit() {
            uploadFile({
                url: '/api/activity',
                filePath: this.data.from.img,
                name: 'file',
                formData: {
                    ...this.data.form,
                    origination: this.data.form.time[0],
                    finish: this.data.form.time[1]
                }
            })
                .then(() => wx.showToast({ title: '添加成功' }))
                .then(() => this.data.formEl && this.data.formEl.reset())
                .catch(console.log);
        },
        _parseValue(value: string, name: string) {
            if (name === 'size') {
                return isNaN(+value) ? '' : +value;
            }

            return value;
        }
    }
});
