interface CommentData {
    id: number;
    active: number;
    sponsor: number;
    participant: number;
    anonymous: boolean,
    comment: string;
}
type starKey = 'active' | 'sponsor' | 'participant';

Page({
    data: {
        value: <IActive>{},
        starList: [
            { name: '活动评价', key: 'active', star: 5 },
            { name: '主办方评价', key: 'sponsor', star: 5 },
            { name: '参加人员', key: 'participant', star: 5 }
        ]
    },
    onLoad(value: IAnyObject) {
        value && this.setData!({ value });
    },
    none() {
        //
    },
    score(e: WxTouchEvent) {
        const star = e.target.dataset.star;
        if (star != null) {
            this.setData!({ [`starList[${e.currentTarget.dataset.index}].star`]: star });
        }
    },
    onSubmit(e: BaseEvent) {
        const value = this.data.value;

        const data = <CommentData>{ id: +value.id };
        this.data.starList.forEach(v => data[<starKey>v.key] = v.star);

        const form = e.detail.value;
        data.comment = form.comment;
        data.anonymous = !!form.anonymous.length;

        console.log(data);
    }
});
