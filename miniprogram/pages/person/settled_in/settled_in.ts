/**
 * 商家入驻
 */
import ProjectFormBehavior from '../../../behavior/project_form';
import { uploadFile, request } from '../../../utils/http';
import { USER_AUTHENTICATION } from '../../../constant/store';
import { Authentication } from '../../../constant/index';

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
        },
        oldImg: ''
    },
    ready() {
        if(wx.getStorageSync(USER_AUTHENTICATION) === Authentication.official) {
            request<IMerchant>({url: '/api/merchant/getByUserId'})
                .then(({data}) => {
                    this.data.oldImg = data.img;
                    this.setData!({form: data});
                })
                .catch(console.log);
        }
    },
    methods: {
        _submit() {
            const {oldImg, form} = this.data;
            const url = oldImg ? '/api/merchant/update' : '/api/merchant';
            const message = oldImg ? '修改信息成功' : '入驻成功';
            if(oldImg === form.img) {
                request({ url, data: form })
                    .then(() => wx.showToast({ title: message }))
                    .catch(console.log);
            } else {
                uploadFile({
                    url, name: 'file',
                    filePath: form.img,
                    formData: form
                })
                    .then(() => wx.showToast({ title: message }))
                    .catch(console.log);
            }
        }
    }
});
