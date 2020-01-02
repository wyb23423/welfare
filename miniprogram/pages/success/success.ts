/**
 * 操作成功反馈页
 */

interface SuccessQuery {
    title: string;
    content: string;
}

Page({
    data: {
        title: '',
        content: ''
    },
    onLoad(query?: Record<string, string>) {
        if(!query) {
            return this.ok();
        }

        this.setData!(query);
    },
    ok() {
        wx.navigateBack({delta: 1});
    }
});
