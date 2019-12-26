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
            idCard1: '',
            idCard2: '',
            idCard: ['', '']
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
            const {hasOld, form, oldData: {idCard}} = this.data;

            if(!(form.idCard1 && form.idCard2)) {
                return wx.showToast({title: '身份证必须包含正反面', icon: 'none'});
            }

            const filePromises = ['img', 'idCard1', 'idCard2', 'credentials'].map(this.upload, this);
            Promise.all(filePromises)
                .then(([newImg, idCard1, idCard2, credentials]) => {
                    const data = {...form, credentials, img: newImg};
                    if(idCard1 || idCard2) {
                        const idCardSrc: string[] = data.idCard = [];
                        idCardSrc.push(idCard1 || idCard[0]);
                        idCardSrc.push(idCard2 || idCard[1]);
                    } else {
                        data.idCard = <any>null;
                    }

                    return request({url: '/api/merchant', data, method: hasOld ? 'POST' : 'PUT'});
                })
                .then(() => wx.showToast({ title: `${hasOld ? '修改' : '申请'}成功` }))
                .catch(console.log);
        },
        upload(key: 'idCard1' | 'idCard2' | 'credentials' | 'img') {
            const {oldData, form} = this.data;
            return upload(form[key], oldData[key]);
        }
    }
});
