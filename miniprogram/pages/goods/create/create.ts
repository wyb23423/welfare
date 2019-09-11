/**
 * 商品上架
 */
import ProjectFormBehavior from '../../../behavior/project_form';
import { uploadFile } from '../../../utils/http';

Component({
    behaviors: [ProjectFormBehavior],
    data: {
        form: {
            name: '',
            integral: '',
            credit: '',
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
        _submit() {
            uploadFile({
                url: '/api/commodity',
                filePath: this.data.form.img,
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
            if (name === 'credit' || name === 'integral') {
                return isNaN(+value) ? '' : +value;
            }

            return value;
        }
    }
});
