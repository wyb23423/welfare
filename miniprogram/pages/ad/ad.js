"use strict";
Page({
    data: {
        tabIndex: 0,
        tabItems: ['滚动广告', '横幅广告']
    },
    switchTab: function (_a) {
        var tab = _a.target.dataset.tab;
        if (this.data.tabIndex !== tab) {
            this.setData({ tabIndex: tab });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBSUEsSUFBSSxDQUFDO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsUUFBUSxFQUFFLENBQUM7UUFDWCxRQUFRLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO0tBQzdCO0lBQ0QsU0FBUyxZQUFDLEVBQXFDO1lBQWpCLDJCQUFHO1FBQzdCLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssR0FBRyxFQUFFO1lBQzNCLElBQUksQ0FBQyxPQUFRLENBQUMsRUFBQyxRQUFRLEVBQUUsR0FBRyxFQUFDLENBQUMsQ0FBQztTQUNsQztJQUNMLENBQUM7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5bm/5ZGKXHJcbiAqL1xyXG5cclxuUGFnZSh7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgdGFiSW5kZXg6IDAsXHJcbiAgICAgICAgdGFiSXRlbXM6IFsn5rua5Yqo5bm/5ZGKJywgJ+aoquW5heW5v+WRiiddXHJcbiAgICB9LFxyXG4gICAgc3dpdGNoVGFiKHt0YXJnZXQ6IHtkYXRhc2V0OiB7dGFifX19OiBCYXNlRXZlbnQpIHtcclxuICAgICAgICBpZih0aGlzLmRhdGEudGFiSW5kZXggIT09IHRhYikge1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEhKHt0YWJJbmRleDogdGFifSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19