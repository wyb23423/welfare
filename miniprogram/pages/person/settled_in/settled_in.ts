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
        hasOld: boolean;
    };
    upload(key: string): Promise<string | string[]>;
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
            idCard: []
        },
        imgRule: {
            min: 2,
            message: '身份证必须包含正反面'
        },
        telRule: {
            regexp: '^1[3456789]\\d{9}$',
            message: '无效电话号码'
        },
        oldData: {},
        hasOld: false
    },
    ready() {
        this.data.oldData = {};
        if (wx.getStorageSync(IS_MERCHANT)) {
            request<IMerchant>({ url: '/api/merchant/getByUserId' })
                .then(({ data }) => {
                    this.data.oldData = { ...data };
                    this.setData!({
                        form: data,
                        hasOld: true
                    });
                })
                .catch(console.log);

            wx.setNavigationBarTitle({ title: '修改信息' });
        }
    },
    methods: {
        _submit() {
            const { hasOld, form } = this.data;

            const filePromises = ['img', 'idCard', 'credentials'].map(this.upload, this);
            Promise.all(filePromises)
                .then(([newImg, idCard, credentials]) => {
                    const data = { ...form, credentials, img: newImg };
                    data.idCard = idCard[0] ? idCard : <any>null;

                    return request({ url: '/api/merchant', data, method: hasOld ? 'POST' : 'PUT' });
                })
                .then(() => wx.showToast({ title: `${hasOld ? '修改' : '申请'}成功` }))
                .catch(console.log);
        },
        upload(key: 'idCard' | 'credentials' | 'img') {
            const { oldData: { [key]: oldPath }, form: { [key]: newPath } } = this.data;
            if (Array.isArray(newPath)) {
                return Promise.all(newPath.map((v, i) => upload(v, (oldPath || [])[i])));
            }

            return upload(newPath, <string>oldPath);
        }
    }
});
