import { chooseImage } from '../../../../components/upload/upload';
import { request } from '../../../../utils/http';
import { AD_TYPE } from '../../../../constant/index';
import { upload } from '../../../../utils/util';

type ADItem = Pick<IAD, 'img' | 'id' | 'url'>;

interface AdIndex extends WxComponent {
    data: {
        ads: ADItem[];
    };
}

Component<AdIndex>({
    properties: {
        hidden: {
            type: Boolean,
            value: false
        }
    },
    data: {
        ads: <ADItem[]>[],
        isDouble: true
    },
    attached() {
        request<IAD[]>({url: '/api/ad/getCarouse'})
            .then(({data}) => this.setData({ads: data}))
            .catch(console.log);
    },
    methods: {
        remove({currentTarget: {dataset: {index}}}: BaseEvent) {
            wx.showModal({
                content: '删除该广告?',
                success: ({confirm}) => {
                    if(confirm) {
                        const ads = this.data.ads;
                        request({
                            url: '/api/ad/remove',
                            data: {id: ads[index].id}
                        })
                            .then(() => {
                                wx.showToast({title: '删除成功'});
                                ads.splice(index, 1);
                                this.setData({ads});
                            })
                            .catch(console.log);
                    }
                }
            });
        },
        add() {
            chooseImage()
                .then((src) => Promise.all([upload(src, ''), src]))
                .then(async ([origin, src]) => {
                    const { data: id } = await request<number>({
                        url: '/api/ad',
                        method: 'PUT',
                        data: { img: origin, url: '', type: AD_TYPE.INDEX },
                        header: { 'Content-type': 'application/x-www-form-urlencoded' }
                    });
                    return this.data.ads.push({ img: src, id, url: '' });
                })
                .then(() => this.setData(this.data))
                .then(() => wx.showToast({title: '添加成功'}))
                .catch(console.log);
        },
    }
});
