/**
 * 商家入驻
 */
import ProjectFormBehavior from '../../../behavior/project_form';
import { request } from '../../../utils/http';
import { upload } from '../../../utils/util';
import { IS_MERCHANT } from '../../../constant/store';

interface SettledIn extends WxComponent {
    data: {
        form: IMerchant;
        oldData: IMerchant;
    };
    upload(key: string): Promise<string>;
}

Component<SettledIn>({
    behaviors: [ProjectFormBehavior],
    data: {
        form: {
            name: '',
            phone: '',
            detail: '',
            address: '',
            img: '',
            idCard: '',
            credentials: ''
        },
        telRule: {
            regexp: '^1[3456789]\\d{9}$',
            message: '无效电话号码'
        },
        oldData: <IMerchant>{}
    },
    ready() {
        this.data.oldData = {};
        if(wx.getStorageSync(IS_MERCHANT)) {
            request<IMerchant>({url: '/api/merchant/getByUserId'})
                .then(({data}) => {
                    this.data.oldData = {...data};
                    this.setData!({form: data});
                })
                .catch(console.log);

            wx.setNavigationBarTitle({title: '修改信息'});
        }
    },
    methods: {
        _submit() {
            const filePromises = ['img', 'idCard', 'credentials'].map(this.upload, this);
            const {oldData: {img}, form} = this.data;
            Promise.all(filePromises)
                .then(([newImg, idCard, credentials]) => {
                    const data = {...form, idCard, credentials, img: newImg};
                    return request({url: '/api/merchant', data, method: img ? 'POST' : 'PUT'});
                })
                .then(() => wx.showToast({ title: `${img ? '修改' : '申请'}成功` }))
                .catch(console.log);
        },
        upload(key: 'idCard' | 'credentials' | 'img') {
            const {oldData, form} = this.data;
            return upload(form[key], oldData[key]);
        }
    }
});
