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
                success: function () {
                    http_1.request({ url: '/api/user/communityAuthorization' })
                        .then(function () { return wx.showToast({ title: '申请成功' }); })
                        .then(function () { return _this.setData({ hasCommodity: false }); })
                        .catch(console.log);
                }
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uX2hlYWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwZXJzb25faGVhZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLDhDQUFzRTtBQUN0RSw4Q0FBc0Q7QUFDdEQseUNBQTJDO0FBRTNDLFNBQVMsQ0FBQztJQUNOLFVBQVUsRUFBRTtRQUNSLE9BQU8sRUFBRTtZQUNMLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDZjtLQUNKO0lBQ0QsS0FBSztRQUNELElBQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsMkJBQW1CLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1QsUUFBUSxFQUFFLEVBQUUsQ0FBQyxjQUFjLENBQUMsaUJBQVMsQ0FBQztZQUN0QyxZQUFZLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxzQkFBYyxDQUFDLFNBQVMsSUFBSSxJQUFJLEtBQUssc0JBQWMsQ0FBQyxRQUFRLENBQUM7U0FDekYsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELE9BQU8sRUFBRTtRQUNMLGNBQWM7WUFBZCxpQkFVQztZQVRHLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0JBQ1QsT0FBTyxFQUFFLFlBQVk7Z0JBQ3JCLE9BQU8sRUFBRTtvQkFDTCxjQUFPLENBQUMsRUFBQyxHQUFHLEVBQUUsa0NBQWtDLEVBQUMsQ0FBQzt5QkFDakQsSUFBSSxDQUFDLGNBQU0sT0FBQSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBQyxDQUFDLEVBQTdCLENBQTZCLENBQUM7eUJBQ3pDLElBQUksQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxFQUFDLFlBQVksRUFBRSxLQUFLLEVBQUMsQ0FBQyxFQUFuQyxDQUFtQyxDQUFDO3lCQUMvQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN4QixDQUFDO2FBQ0osQ0FBQyxDQUFDO1FBQ1AsQ0FBQztLQUNKO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOS4quS6uuS/oeaBr+mhtemhtumDqOWktOWDj+WPiuWQjeensFxyXG4gKi9cclxuaW1wb3J0IHsgVVNFUl9OQU1FLCBVU0VSX0FVVEhFTlRJQ0FUSU9OIH0gZnJvbSAnLi4vLi4vY29uc3RhbnQvc3RvcmUnO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbiB9IGZyb20gJy4uLy4uL2NvbnN0YW50L2luZGV4JztcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uLy4uL3V0aWxzL2h0dHAnO1xyXG5cclxuQ29tcG9uZW50KHtcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBpc2luZGV4OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZWFkeSgpIHtcclxuICAgICAgICBjb25zdCBhdXRoID0gd3guZ2V0U3RvcmFnZVN5bmMoVVNFUl9BVVRIRU5USUNBVElPTik7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgdXNlcm5hbWU6IHd4LmdldFN0b3JhZ2VTeW5jKFVTRVJfTkFNRSksXHJcbiAgICAgICAgICAgIGhhc0NvbW1vZGl0eTogIShhdXRoID09PSBBdXRoZW50aWNhdGlvbi5jb21tb2RpdHkgfHwgYXV0aCA9PT0gQXV0aGVudGljYXRpb24uYXVkaXRpbmcpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGF1dGhlbnRpY2F0aW9uKCkge1xyXG4gICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ+eUs+ivt+aIkOS4uuekvuWMuueuoeeQhuWRmD8nLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Qoe3VybDogJy9hcGkvdXNlci9jb21tdW5pdHlBdXRob3JpemF0aW9uJ30pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gd3guc2hvd1RvYXN0KHt0aXRsZTogJ+eUs+ivt+aIkOWKnyd9KSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLnNldERhdGEoe2hhc0NvbW1vZGl0eTogZmFsc2V9KSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=