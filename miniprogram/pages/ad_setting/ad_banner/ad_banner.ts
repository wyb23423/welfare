import { chooseImage } from '../../../components/upload/upload';

Component({
    properties: {
        hidden: {
            type: Boolean,
            value: false
        }
    },
    data: {
        imgs: ['/public/images/23.jpg', '', ''],
        radioIndex: 0,
        options: ['活动列表', '商品列表', '个人中心']
    },
    methods: {
        radioChange({detail: {value}}: BaseEvent) {
            this.setData({radioIndex: value});
        },
        async modify() {
            try {
                const url = await chooseImage();
                this.setData({[`imgs[${this.data.radioIndex}]`]: url});
            } catch(e) {
                //
            }
        },
        remove() {
            this.setData({[`imgs[${this.data.radioIndex}]`]: ''});
        },
        onSubmit() {
            const {imgs, radioIndex} = this.data;
            console.log(imgs[radioIndex]);
        }
    }
});
