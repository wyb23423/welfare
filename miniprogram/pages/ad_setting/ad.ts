/**
 * 广告
 */

Page({
    data: {
        tabIndex: 0,
        tabItems: ['滚动广告', '横幅广告']
    },
    switchTab({target: {dataset: {tab}}}: BaseEvent) {
        if(this.data.tabIndex !== tab) {
            this.setData!({tabIndex: tab});
        }
    }
});
