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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQWdCQSxJQUFJLENBQUM7SUFDRCxJQUFJLEVBQUU7UUFDRixLQUFLLEVBQVcsRUFBRTtRQUNsQixRQUFRLEVBQUU7WUFDTixFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFO1lBQ3hDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUU7WUFDMUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRTtTQUNoRDtLQUNKO0lBQ0QsTUFBTSxZQUFDLEtBQWlCO1FBQ3BCLEtBQUssSUFBSSxJQUFJLENBQUMsT0FBUSxDQUFDLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFDRCxJQUFJO0lBRUosQ0FBQztJQUNELEtBQUssWUFBQyxDQUFlOztRQUNqQixJQUFNLElBQUksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDbkMsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQ2QsSUFBSSxDQUFDLE9BQVEsV0FBRyxHQUFDLGNBQVksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxXQUFRLElBQUcsSUFBSSxNQUFHLENBQUM7U0FDaEY7SUFDTCxDQUFDO0lBQ0QsUUFBUSxZQUFDLENBQVk7UUFDakIsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFOUIsSUFBTSxJQUFJLEdBQWdCLEVBQUUsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLElBQUksQ0FBVSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBN0IsQ0FBNkIsQ0FBQyxDQUFDO1FBRS9ELElBQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUV6QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLENBQUM7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgSUFjdGl2ZSB7XHJcbiAgICBpbWc6IHN0cmluZztcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBhdXRoZW50aWNhdGlvbjogc3RyaW5nO1xyXG4gICAgaWQ6IG51bWJlcjtcclxufVxyXG5pbnRlcmZhY2UgQ29tbWVudERhdGEge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIGFjdGl2ZTogbnVtYmVyO1xyXG4gICAgc3BvbnNvcjogbnVtYmVyO1xyXG4gICAgcGFydGljaXBhbnQ6IG51bWJlcjtcclxuICAgIGFub255bW91czogYm9vbGVhbixcclxuICAgIGNvbW1lbnQ6IHN0cmluZztcclxufVxyXG50eXBlIHN0YXJLZXkgPSAnYWN0aXZlJyB8ICdzcG9uc29yJyB8ICdwYXJ0aWNpcGFudCc7XHJcblxyXG5QYWdlKHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgICB2YWx1ZTogPElBY3RpdmU+e30sXHJcbiAgICAgICAgc3Rhckxpc3Q6IFtcclxuICAgICAgICAgICAgeyBuYW1lOiAn5rS75Yqo6K+E5Lu3Jywga2V5OiAnYWN0aXZlJywgc3RhcjogNSB9LFxyXG4gICAgICAgICAgICB7IG5hbWU6ICfkuLvlip7mlrnor4Tku7cnLCBrZXk6ICdzcG9uc29yJywgc3RhcjogNSB9LFxyXG4gICAgICAgICAgICB7IG5hbWU6ICflj4LliqDkurrlkZgnLCBrZXk6ICdwYXJ0aWNpcGFudCcsIHN0YXI6IDUgfVxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICBvbkxvYWQodmFsdWU6IElBbnlPYmplY3QpIHtcclxuICAgICAgICB2YWx1ZSAmJiB0aGlzLnNldERhdGEhKHsgdmFsdWUgfSk7XHJcbiAgICB9LFxyXG4gICAgbm9uZSgpIHtcclxuICAgICAgICAvL1xyXG4gICAgfSxcclxuICAgIHNjb3JlKGU6IFd4VG91Y2hFdmVudCkge1xyXG4gICAgICAgIGNvbnN0IHN0YXIgPSBlLnRhcmdldC5kYXRhc2V0LnN0YXI7XHJcbiAgICAgICAgaWYgKHN0YXIgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEhKHsgW2BzdGFyTGlzdFske2UuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4fV0uc3RhcmBdOiBzdGFyIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvblN1Ym1pdChlOiBCYXNlRXZlbnQpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0YS52YWx1ZTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IDxDb21tZW50RGF0YT57IGlkOiArdmFsdWUuaWQgfTtcclxuICAgICAgICB0aGlzLmRhdGEuc3Rhckxpc3QuZm9yRWFjaCh2ID0+IGRhdGFbPHN0YXJLZXk+di5rZXldID0gdi5zdGFyKTtcclxuXHJcbiAgICAgICAgY29uc3QgZm9ybSA9IGUuZGV0YWlsLnZhbHVlO1xyXG4gICAgICAgIGRhdGEuY29tbWVudCA9IGZvcm0uY29tbWVudDtcclxuICAgICAgICBkYXRhLmFub255bW91cyA9ICEhZm9ybS5hbm9ueW1vdXMubGVuZ3RoO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==