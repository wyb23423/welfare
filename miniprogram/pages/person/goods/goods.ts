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
                    sign: 8
                });
            }

            this.setData!({list});
        }
    },
    methods: {
        lowerShelf({target: {dataset: {id}}}: BaseEvent<{id: number}>) {
            console.log(id, 'lowerShelf');
        },
        delete({target: {dataset: {id}}}: BaseEvent<{id: number}>) {
            console.log(id, 'delete');
        }
    }
});
