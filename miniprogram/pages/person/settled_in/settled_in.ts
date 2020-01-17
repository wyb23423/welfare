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
        hasOld: boolean;
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
        if(wx.getStorageSync(IS_MERCHANT)) {
            request<IMerchant>({url: '/api/merchant/getByUserId'})
                .then(({data}) => {
                    const [idCard1, idCard2] = data.idCard;
                    this.data.oldData = {...data, idCard1, idCard2};
                    this.setData!({
                        form: {...data, idCard1, idCard2},
                        hasOld: true
                    });
                })
                .catch(console.log);

            wx.setNavigationBarTitle({title: '修改信息'});
        }
    },
    methods: {
        _submit() {
            const { hasOld, form, oldData } = this.data;

            const filePromises = ['img', 'idCard1', 'idCard2', 'credentials'].map(this.upload, this);
            Promise.all(filePromises)
                .then(([newImg, idCard1, idCard2, credentials]) => {
                    const data = {...form, credentials, img: newImg};
                    if(idCard1 == null && idCard2 == null) {
                        data.idCard = <any>null;
                    } else {
                        data.idCard[0] = idCard1 ? idCard1 : oldData.idCard1;
                        data.idCard[1] = idCard2 ? idCard2 : oldData.idCard2;
                    }

                    return request({url: '/api/merchant', data, method: hasOld ? 'POST' : 'PUT'});
                })
                .then(() => wx.showToast({ title: `${hasOld ? '修改' : '申请'}成功` }))
                .catch(console.log);
        },
        upload(key: 'idCard1' | 'idCard2' | 'credentials' | 'img') {
            const {oldData: {[key]: oldPath}, form: {[key]: newPath}} = this.data;
            // if(Array.isArray(newPath)) {
            //     return Promise.all(newPath.map((v, i) => upload(v, oldPath[i])));
            // }

            return upload(newPath, <string>oldPath);
        }
    }
});
