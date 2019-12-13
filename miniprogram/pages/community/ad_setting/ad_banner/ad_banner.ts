import { chooseImage } from '../../../../components/upload/upload';
import { AD_TYPE } from '../../../../constant/index';
import { request } from '../../../../utils/http';
import { upload } from '../../../../utils/util';

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
        options: ['活动列表', '商品列表', '个人中心'],
        showMessage: [true, true]
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
                const img = await upload(await chooseImage(), '');
                const index = this.data.radioIndex;
                const {data: id} = await request<number>({
                    url: '/api/ad',
                    method: 'PUT',
                    data: { img, url: '', type: typeArr[index] },
                    header: {
                        'Content-type': 'application/x-www-form-urlencoded'
                    }
                });
                if(this.data.showMessage[0]) {
                    this.data.showMessage[0] = false;
                    wx.showToast({title: '设置成功'});
                }
                this.setData({[`ads[${index}]`]: { img, id, url: '' }});
            } catch(e) {
                console.log(e);
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
                            .then(() => {
                                if(this.data.showMessage[1]) {
                                    this.data.showMessage[1] = false;
                                    wx.showToast({title: '删除成功'});
                                }
                            })
                            .catch(console.log);
                    }
                }
            });
            this.setData({[`ads[${this.data.radioIndex}].img`]: void 0});
        },
    }
});
