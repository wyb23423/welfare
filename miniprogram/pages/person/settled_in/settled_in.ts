/**
 * 商家入驻
 */
import ProjectFormBehavior from '../../../behavior/project_form';
import { uploadFile } from '../../../utils/http';

Component({
    behaviors: [ProjectFormBehavior],
    data: {
        form: {
            name: '',
            phone: '',
            detail: '',
            address: '',
            img: ''
        },
        telRule: {
            regexp: '^1[3456789]\\d{9}$',
            message: '无效电话号码'
        }
    },
    methods: {
        _submit() {
            uploadFile({
                url: '/api/merchant',
                name: 'file',
                filePath: this.data.form.img,
                formData: this.data.form
            })
                .then(() => wx.showToast({ title: '入驻成功' }))
                .catch(console.log);
        }
    }
});
