"use strict";
Page({
    onShow: function () {
    },
    getUserInfo: function (_a) {
        var userInfo = _a.detail.userInfo;
        if (!userInfo) {
            return;
        }
        console.log(userInfo);
        wx.switchTab({ url: '/pages/person/index/index' });
    },
    cancel: function () {
        wx.switchTab({ url: '/pages/index/index' });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSxDQUFDO0lBQ0QsTUFBTTtJQUVOLENBQUM7SUFDRCxXQUFXLFlBQUMsRUFBbUU7WUFBekQsNkJBQVE7UUFDMUIsSUFBRyxDQUFDLFFBQVEsRUFBRTtZQUNWLE9BQU87U0FDVjtRQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFDLEdBQUcsRUFBRSwyQkFBMkIsRUFBQyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUNELE1BQU07UUFDRixFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUMsR0FBRyxFQUFFLG9CQUFvQixFQUFDLENBQUMsQ0FBQztJQUM5QyxDQUFDO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiUGFnZSh7XHJcbiAgICBvblNob3coKSB7XHJcbiAgICAgICAgLy9cclxuICAgIH0sXHJcbiAgICBnZXRVc2VySW5mbyh7ZGV0YWlsOiB7dXNlckluZm99fToge2RldGFpbDogd3guR2V0VXNlckluZm9TdWNjZXNzQ2FsbGJhY2tSZXN1bHR9KSB7XHJcbiAgICAgICAgaWYoIXVzZXJJbmZvKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJJbmZvKTtcclxuICAgICAgICB3eC5zd2l0Y2hUYWIoe3VybDogJy9wYWdlcy9wZXJzb24vaW5kZXgvaW5kZXgnfSk7XHJcbiAgICB9LFxyXG4gICAgY2FuY2VsKCkge1xyXG4gICAgICAgIHd4LnN3aXRjaFRhYih7dXJsOiAnL3BhZ2VzL2luZGV4L2luZGV4J30pO1xyXG4gICAgfVxyXG59KTtcclxuIl19