Page({
    data: {
        history: [] as IAnyObject[],
        type: ''
    },
    onLoad(query: IAnyObject) {
        const activitys = [];
        for (let i = 1; i < 10; i++) {
            activitys.push({
                id: i,
                img: '/public/images/23.jpg',
                title: '有爱的我们不孤独——自闭症儿童义诊系列活动__' + i,
                authentication: '认证',
                sign: 11,
                size: 24,
                review: Math.random() < 0.5
            });
        };
        this.setData!({ type: query.type, history: activitys });

        const titles: any = {
            toStayIn: '待参加',
            toAudit: '待审核',
            haveToAttend: '已参加',
            toEvaluate: '待评价',
            initiate: '我的发起'
        }
        wx.setNavigationBarTitle({
            title: titles[query.type]
        })
    }
})