/**
 * 商家入驻
 */
import ProjectFormBehavior from '../../../behavior/project_form';
import { request } from '../../../utils/http';
import { upload } from '../../../utils/util';
import { IS_MERCHANT } from '../../../constant/store';

type MerchantData = IMerchant & {idCard1: string; idCard2: string};

interface SettledIn extends WxComponent {
    data: {
        form: MerchantData;
        oldData: MerchantData;
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
            credentials: '',
            idCard1: '',
            idCard2: ''
        },
        telRule: {
            regexp: '^1[3456789]\\d{9}$',
            message: '无效电话号码'
        },
        oldData: {}
    },
    ready() {
        this.data.oldData = {};
        if(wx.getStorageSync(IS_MERCHANT)) {
            request<IMerchant>({url: '/api/merchant/getByUserId'})
                .then(({data}) => {
                    const [idCard1, idCard2] = JSON.parse(data.idCard);
                    this.data.oldData = {...data, idCard1, idCard2};
                    this.setData!({form: {...data, idCard1, idCard2}});
                })
                .catch(console.log);

            wx.setNavigationBarTitle({title: '修改信息'});
        }
    },
    methods: {
        _submit() {
            const {oldData: {img}, form} = this.data;

            if(!(form.idCard1 && form.idCard2)) {
                return wx.showToast({title: '身份证必须包含正反面', icon: 'none'});
            }

            const filePromises = ['img', 'idCard1', 'idCard2', 'credentials'].map(this.upload, this);
            Promise.all(filePromises)
                .then(([newImg, idCard1, idCard2, credentials]) => {
                    const data = {...form, idCard: JSON.stringify([idCard1, idCard2]), credentials, img: newImg};
                    return request({url: '/api/merchant', data, method: img ? 'POST' : 'PUT'});
                })
                .then(() => wx.showToast({ title: `${img ? '修改' : '申请'}成功` }))
                .catch(console.log);
        },
        upload(key: 'idCard1' | 'idCard2' | 'credentials' | 'img') {
            const {oldData, form} = this.data;
            return upload(form[key], oldData[key]);
        }
    }
});
