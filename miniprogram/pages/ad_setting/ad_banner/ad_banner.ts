import { chooseImage } from '../../../components/upload/upload';
import { AD_TYPE } from '../../../constant/index';
import { request } from '../../../utils/http';

const typeArr = [AD_TYPE.ACTIVITY, AD_TYPE.GOODS, AD_TYPE.PERSON];

Component({
    properties: {
        hidden: {
            type: Boolean,
            value: false
        }
    },
    data: {
        ads: [null, null, null],
        radioIndex: 0,
        options: ['活动列表', '商品列表', '个人中心']
    },
    attached() {
        typeArr.forEach((v, i) => {
            request<IAD>({
                url: '/api/ad/getAd',
                data: {type: v}
            })
                .then(({data}) => this.setData({[`ads[${i}]`]: data}))
                .catch(console.log);
        });
    },
    methods: {
        radioChange({detail: {value}}: BaseEvent) {
            this.setData({radioIndex: value});
        },
        async modify() {
            try {
                const img = await chooseImage();
                const index = this.data.radioIndex;
                const {data: id} = await request<number>({
                    url: '/api/ad',
                    method: 'PUT',
                    data: { img, url: '', type: typeArr[index] }
                });
                this.setData({[`imgs[${index}]`]: { img, id, url: '' }});
            } catch(e) {
                //
            }
        },
        remove() {
            wx.showModal({
                content: '删除该广告?',
                success: ({confirm}) => {
                    if(confirm) {
                        const {ads, radioIndex: index} = this.data;
                        request({
                            url: '/api/ad/remove',
                            data: {id: ads[index].id}
                        })
                            .then(() => this.setData({[`ads[${index}]`]: null}))
                            .catch(console.log);
                    }
                }
            });
            this.setData({[`ads[${this.data.radioIndex}].img`]: void 0});
        },
    }
});
