interface ISponsor {
    img: string;
    name: string;
    desc: string;
    authentication: boolean;
    id: number;
}

Page({
    data: {
        list: <ISponsor[]>[]
    },
    onLoad() {
        const list: ISponsor[] = [];
        for (let i = 0; i < 10; i++) {
            list.push({
                id: i,
                authentication: Math.random() > 0.5,
                img: '/public/images/23.jpg',
                name: '北京儿童医疗发展中心',
                desc: '北京医疗儿童发展中心的孤独症和其他障碍敢于服务，是xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
            })
        }

        this.setData!({ list });
    },
    delete(e: WxTouchEvent) {
        const dataset = e.target.dataset;
        if (dataset.name) {
            wx.showModal({
                content: `取消关注${dataset.name}？`,
                success(res) {
                    if (res.confirm) {
                        console.log(+dataset.id);
                    }
                }
            });
        }
    }
})
