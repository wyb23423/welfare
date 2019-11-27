"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = require("../../constant/store");
var index_1 = require("../../constant/index");
var http_1 = require("../../utils/http");
Component({
    properties: {
        isindex: {
            type: Boolean,
            value: false
        }
    },
    ready: function () {
        var auth = wx.getStorageSync(store_1.USER_AUTHENTICATION);
        this.setData({
            username: wx.getStorageSync(store_1.USER_NAME),
            hasCommodity: !(auth === index_1.Authentication.commodity || auth === index_1.Authentication.auditing)
        });
    },
    methods: {
        authentication: function () {
            var _this = this;
            wx.showModal({
                content: '申请成为社区管理员?',
                success: function (_a) {
                    var confirm = _a.confirm;
                    if (confirm) {
                        http_1.request({ url: '/api/user/communityAuthorization' })
                            .then(function () { return wx.showToast({ title: '申请成功' }); })
                            .then(function () { return _this.setData({ hasCommodity: false }); })
                            .catch(console.log);
                    }
                }
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uX2hlYWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwZXJzb25faGVhZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLDhDQUFzRTtBQUN0RSw4Q0FBc0Q7QUFDdEQseUNBQTJDO0FBRTNDLFNBQVMsQ0FBQztJQUNOLFVBQVUsRUFBRTtRQUNSLE9BQU8sRUFBRTtZQUNMLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDZjtLQUNKO0lBQ0QsS0FBSztRQUNELElBQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsMkJBQW1CLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1QsUUFBUSxFQUFFLEVBQUUsQ0FBQyxjQUFjLENBQUMsaUJBQVMsQ0FBQztZQUN0QyxZQUFZLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxzQkFBYyxDQUFDLFNBQVMsSUFBSSxJQUFJLEtBQUssc0JBQWMsQ0FBQyxRQUFRLENBQUM7U0FDekYsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELE9BQU8sRUFBRTtRQUNMLGNBQWM7WUFBZCxpQkFZQztZQVhHLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0JBQ1QsT0FBTyxFQUFFLFlBQVk7Z0JBQ3JCLE9BQU8sRUFBRSxVQUFDLEVBQVM7d0JBQVIsb0JBQU87b0JBQ2QsSUFBRyxPQUFPLEVBQUU7d0JBQ1IsY0FBTyxDQUFDLEVBQUMsR0FBRyxFQUFFLGtDQUFrQyxFQUFDLENBQUM7NkJBQzdDLElBQUksQ0FBQyxjQUFNLE9BQUEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUMsQ0FBQyxFQUE3QixDQUE2QixDQUFDOzZCQUN6QyxJQUFJLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxZQUFZLEVBQUUsS0FBSyxFQUFDLENBQUMsRUFBbkMsQ0FBbUMsQ0FBQzs2QkFDL0MsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDM0I7Z0JBQ0wsQ0FBQzthQUNKLENBQUMsQ0FBQztRQUNQLENBQUM7S0FDSjtDQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDkuKrkurrkv6Hmga/pobXpobbpg6jlpLTlg4/lj4rlkI3np7BcclxuICovXHJcbmltcG9ydCB7IFVTRVJfTkFNRSwgVVNFUl9BVVRIRU5USUNBVElPTiB9IGZyb20gJy4uLy4uL2NvbnN0YW50L3N0b3JlJztcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb24gfSBmcm9tICcuLi8uLi9jb25zdGFudC9pbmRleCc7XHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi91dGlscy9odHRwJztcclxuXHJcbkNvbXBvbmVudCh7XHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgaXNpbmRleDoge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVhZHkoKSB7XHJcbiAgICAgICAgY29uc3QgYXV0aCA9IHd4LmdldFN0b3JhZ2VTeW5jKFVTRVJfQVVUSEVOVElDQVRJT04pO1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiB3eC5nZXRTdG9yYWdlU3luYyhVU0VSX05BTUUpLFxyXG4gICAgICAgICAgICBoYXNDb21tb2RpdHk6ICEoYXV0aCA9PT0gQXV0aGVudGljYXRpb24uY29tbW9kaXR5IHx8IGF1dGggPT09IEF1dGhlbnRpY2F0aW9uLmF1ZGl0aW5nKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBhdXRoZW50aWNhdGlvbigpIHtcclxuICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfnlLPor7fmiJDkuLrnpL7ljLrnrqHnkIblkZg/JyxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICh7Y29uZmlybX0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZihjb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3Qoe3VybDogJy9hcGkvdXNlci9jb21tdW5pdHlBdXRob3JpemF0aW9uJ30pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB3eC5zaG93VG9hc3Qoe3RpdGxlOiAn55Sz6K+35oiQ5YqfJ30pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5zZXREYXRhKHtoYXNDb21tb2RpdHk6IGZhbHNlfSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19