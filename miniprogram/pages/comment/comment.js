"use strict";
Page({
    data: {
        value: {},
        starList: [
            { name: '活动评价', key: 'active', star: 5 },
            { name: '主办方评价', key: 'sponsor', star: 5 },
            { name: '参加人员', key: 'participant', star: 5 }
        ]
    },
    onLoad: function (value) {
        value && this.setData({ value: value });
    },
    none: function () {
    },
    score: function (e) {
        var _a;
        var star = e.target.dataset.star;
        if (star != null) {
            this.setData((_a = {}, _a["starList[" + e.currentTarget.dataset.index + "].star"] = star, _a));
        }
    },
    onSubmit: function (e) {
        var value = this.data.value;
        var data = { id: +value.id };
        this.data.starList.forEach(function (v) { return data[v.key] = v.star; });
        var form = e.detail.value;
        data.comment = form.comment;
        data.anonymous = !!form.anonymous.length;
        console.log(data);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQVVBLElBQUksQ0FBQztJQUNELElBQUksRUFBRTtRQUNGLEtBQUssRUFBVyxFQUFFO1FBQ2xCLFFBQVEsRUFBRTtZQUNOLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUU7WUFDeEMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRTtZQUMxQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFO1NBQ2hEO0tBQ0o7SUFDRCxNQUFNLFlBQUMsS0FBaUI7UUFDcEIsS0FBSyxJQUFJLElBQUksQ0FBQyxPQUFRLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNELElBQUk7SUFFSixDQUFDO0lBQ0QsS0FBSyxZQUFDLENBQWU7O1FBQ2pCLElBQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztRQUNuQyxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDZCxJQUFJLENBQUMsT0FBUSxXQUFHLEdBQUMsY0FBWSxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLLFdBQVEsSUFBRyxJQUFJLE1BQUcsQ0FBQztTQUNoRjtJQUNMLENBQUM7SUFDRCxRQUFRLFlBQUMsQ0FBWTtRQUNqQixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUU5QixJQUFNLElBQUksR0FBZ0IsRUFBRSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDNUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsSUFBSSxDQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUE3QixDQUE2QixDQUFDLENBQUM7UUFFL0QsSUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBRXpDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsQ0FBQztDQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBDb21tZW50RGF0YSB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgYWN0aXZlOiBudW1iZXI7XHJcbiAgICBzcG9uc29yOiBudW1iZXI7XHJcbiAgICBwYXJ0aWNpcGFudDogbnVtYmVyO1xyXG4gICAgYW5vbnltb3VzOiBib29sZWFuLFxyXG4gICAgY29tbWVudDogc3RyaW5nO1xyXG59XHJcbnR5cGUgc3RhcktleSA9ICdhY3RpdmUnIHwgJ3Nwb25zb3InIHwgJ3BhcnRpY2lwYW50JztcclxuXHJcblBhZ2Uoe1xyXG4gICAgZGF0YToge1xyXG4gICAgICAgIHZhbHVlOiA8SUFjdGl2ZT57fSxcclxuICAgICAgICBzdGFyTGlzdDogW1xyXG4gICAgICAgICAgICB7IG5hbWU6ICfmtLvliqjor4Tku7cnLCBrZXk6ICdhY3RpdmUnLCBzdGFyOiA1IH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogJ+S4u+WKnuaWueivhOS7tycsIGtleTogJ3Nwb25zb3InLCBzdGFyOiA1IH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogJ+WPguWKoOS6uuWRmCcsIGtleTogJ3BhcnRpY2lwYW50Jywgc3RhcjogNSB9XHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIG9uTG9hZCh2YWx1ZTogSUFueU9iamVjdCkge1xyXG4gICAgICAgIHZhbHVlICYmIHRoaXMuc2V0RGF0YSEoeyB2YWx1ZSB9KTtcclxuICAgIH0sXHJcbiAgICBub25lKCkge1xyXG4gICAgICAgIC8vXHJcbiAgICB9LFxyXG4gICAgc2NvcmUoZTogV3hUb3VjaEV2ZW50KSB7XHJcbiAgICAgICAgY29uc3Qgc3RhciA9IGUudGFyZ2V0LmRhdGFzZXQuc3RhcjtcclxuICAgICAgICBpZiAoc3RhciAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSEoeyBbYHN0YXJMaXN0WyR7ZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXh9XS5zdGFyYF06IHN0YXIgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uU3VibWl0KGU6IEJhc2VFdmVudCkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5kYXRhLnZhbHVlO1xyXG5cclxuICAgICAgICBjb25zdCBkYXRhID0gPENvbW1lbnREYXRhPnsgaWQ6ICt2YWx1ZS5pZCB9O1xyXG4gICAgICAgIHRoaXMuZGF0YS5zdGFyTGlzdC5mb3JFYWNoKHYgPT4gZGF0YVs8c3RhcktleT52LmtleV0gPSB2LnN0YXIpO1xyXG5cclxuICAgICAgICBjb25zdCBmb3JtID0gZS5kZXRhaWwudmFsdWU7XHJcbiAgICAgICAgZGF0YS5jb21tZW50ID0gZm9ybS5jb21tZW50O1xyXG4gICAgICAgIGRhdGEuYW5vbnltb3VzID0gISFmb3JtLmFub255bW91cy5sZW5ndGg7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgfVxyXG59KTtcclxuIl19