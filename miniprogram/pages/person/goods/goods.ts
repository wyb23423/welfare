import { request } from '../../../utils/http';

Component({
    data: {
        list: <ICommodity[]>[]
    },
    pageLifetimes: {
        show() {
            // TODO 从服务器拉取数据
            const list = [];
            for(let i=0; i<10; i++) {
                list.push({
                    id: i,
                    img: '/public/images/23.jpg',
                    name: '测试: ' + i,
                    authentication: '社区认证',
                    origination: Date.now(),
                    finish: Date.now() + 1000000,
                    integral: 10,
                    size: 10,
                    sign: 8,
                    status: [0, 1, 2][Math.round(Math.random() * 2)]
                });
            }

            this.setData!({list});
        }
    },
    methods: {
        updateStatus({target: {dataset: {index}}}: BaseEvent<{index: number}>) {
            const data = this.data.list[index];
            if(data.status === 2) {
                return wx.showToast({icon: 'none', title: '商品审核中'});
            }
            data.status = !data.status;

            request({
                url: ''
            });
        },
        delete({target: {dataset: {id}}}: BaseEvent<{id: number}>) {
            console.log(id, 'delete');
        }
    }
});
