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
        },
        hasinfo: {
            type: Boolean,
            value: true
        }
    },
    data: {
        time: 0,
        count: 0,
        hasCommodity: false
    },
    ready: function () {
        var auth = wx.getStorageSync(store_1.USER_AUTHENTICATION);
        this.data.hasCommodity = !(auth === index_1.Authentication.commodity || auth === index_1.Authentication.auditing);
        this.setData({ username: wx.getStorageSync(store_1.USER_NAME) });
    },
    methods: {
        clickAvator: function () {
            var _a = this.data, count = _a.count, time = _a.time, hasCommodity = _a.hasCommodity;
            if (!hasCommodity) {
                return;
            }
            var now = Date.now();
            if (now - time >= 500) {
                count = 0;
            }
            this.data.time = now;
            this.data.count = ++count;
            count >= 5 && this.authentication();
        },
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
                },
                complete: function () { return _this.data.count = _this.data.time = 0; }
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uX2hlYWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwZXJzb25faGVhZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLDhDQUFzRTtBQUN0RSw4Q0FBc0Q7QUFDdEQseUNBQTJDO0FBTTNDLFNBQVMsQ0FBYTtJQUNsQixVQUFVLEVBQUU7UUFDUixPQUFPLEVBQUU7WUFDTCxJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRSxLQUFLO1NBQ2Y7UUFDRCxPQUFPLEVBQUU7WUFDTCxJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRSxJQUFJO1NBQ2Q7S0FDSjtJQUNELElBQUksRUFBRTtRQUNGLElBQUksRUFBRSxDQUFDO1FBQ1AsS0FBSyxFQUFFLENBQUM7UUFDUixZQUFZLEVBQUUsS0FBSztLQUN0QjtJQUNELEtBQUs7UUFDRCxJQUFNLElBQUksR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLDJCQUFtQixDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLElBQUksS0FBSyxzQkFBYyxDQUFDLFNBQVMsSUFBSSxJQUFJLEtBQUssc0JBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxjQUFjLENBQUMsaUJBQVMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsV0FBVztZQUVILElBQUEsY0FBdUMsRUFBdEMsZ0JBQUssRUFBRSxjQUFJLEVBQUUsOEJBQXlCLENBQUM7WUFDNUMsSUFBRyxDQUFDLFlBQVksRUFBRTtnQkFDZCxPQUFPO2FBQ1Y7WUFDRCxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDdkIsSUFBRyxHQUFHLEdBQUcsSUFBSSxJQUFJLEdBQUcsRUFBRTtnQkFDbEIsS0FBSyxHQUFHLENBQUMsQ0FBQzthQUNiO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsS0FBSyxDQUFDO1lBQzFCLEtBQUssSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hDLENBQUM7UUFDRCxjQUFjO1lBQWQsaUJBYUM7WUFaRyxFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNULE9BQU8sRUFBRSxZQUFZO2dCQUNyQixPQUFPLEVBQUUsVUFBQyxFQUFTO3dCQUFSLG9CQUFPO29CQUNkLElBQUcsT0FBTyxFQUFFO3dCQUNSLGNBQU8sQ0FBQyxFQUFDLEdBQUcsRUFBRSxrQ0FBa0MsRUFBQyxDQUFDOzZCQUM3QyxJQUFJLENBQUMsY0FBTSxPQUFBLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFDLENBQUMsRUFBN0IsQ0FBNkIsQ0FBQzs2QkFDekMsSUFBSSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsWUFBWSxFQUFFLEtBQUssRUFBQyxDQUFDLEVBQW5DLENBQW1DLENBQUM7NkJBQy9DLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQzNCO2dCQUNMLENBQUM7Z0JBQ0QsUUFBUSxFQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEVBQXBDLENBQW9DO2FBQ3ZELENBQUMsQ0FBQztRQUNQLENBQUM7S0FDSjtDQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDkuKrkurrkv6Hmga/pobXpobbpg6jlpLTlg4/lj4rlkI3np7BcclxuICovXHJcbmltcG9ydCB7IFVTRVJfTkFNRSwgVVNFUl9BVVRIRU5USUNBVElPTiB9IGZyb20gJy4uLy4uL2NvbnN0YW50L3N0b3JlJztcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb24gfSBmcm9tICcuLi8uLi9jb25zdGFudC9pbmRleCc7XHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi91dGlscy9odHRwJztcclxuXHJcbmludGVyZmFjZSBQZXJzb25IZWFkIGV4dGVuZHMgV3hDb21wb25lbnQge1xyXG4gICAgYXV0aGVudGljYXRpb24oKTogdm9pZDtcclxufVxyXG5cclxuQ29tcG9uZW50PFBlcnNvbkhlYWQ+KHtcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBpc2luZGV4OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGFzaW5mbzoge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgdGltZTogMCwgLy8g5LiK5qyh54K55Ye75aS05YOP5pe26Ze0XHJcbiAgICAgICAgY291bnQ6IDAsIC8vIOi/nue7reeCueWHu+WktOWDj+asoeaVsFxyXG4gICAgICAgIGhhc0NvbW1vZGl0eTogZmFsc2VcclxuICAgIH0sXHJcbiAgICByZWFkeSgpIHtcclxuICAgICAgICBjb25zdCBhdXRoID0gd3guZ2V0U3RvcmFnZVN5bmMoVVNFUl9BVVRIRU5USUNBVElPTik7XHJcbiAgICAgICAgdGhpcy5kYXRhLmhhc0NvbW1vZGl0eSA9ICEoYXV0aCA9PT0gQXV0aGVudGljYXRpb24uY29tbW9kaXR5IHx8IGF1dGggPT09IEF1dGhlbnRpY2F0aW9uLmF1ZGl0aW5nKTtcclxuICAgICAgICB0aGlzLnNldERhdGEoe3VzZXJuYW1lOiB3eC5nZXRTdG9yYWdlU3luYyhVU0VSX05BTUUpfSk7XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGNsaWNrQXZhdG9yKCkge1xyXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJlZmVyLWNvbnN0XHJcbiAgICAgICAgICAgIGxldCB7Y291bnQsIHRpbWUsIGhhc0NvbW1vZGl0eX0gPSB0aGlzLmRhdGE7XHJcbiAgICAgICAgICAgIGlmKCFoYXNDb21tb2RpdHkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICBpZihub3cgLSB0aW1lID49IDUwMCkge1xyXG4gICAgICAgICAgICAgICAgY291bnQgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS50aW1lID0gbm93O1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuY291bnQgPSArK2NvdW50O1xyXG4gICAgICAgICAgICBjb3VudCA+PSA1ICYmIHRoaXMuYXV0aGVudGljYXRpb24oKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGF1dGhlbnRpY2F0aW9uKCkge1xyXG4gICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ+eUs+ivt+aIkOS4uuekvuWMuueuoeeQhuWRmD8nLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKHtjb25maXJtfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdCh7dXJsOiAnL2FwaS91c2VyL2NvbW11bml0eUF1dGhvcml6YXRpb24nfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHd4LnNob3dUb2FzdCh7dGl0bGU6ICfnlLPor7fmiJDlip8nfSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLnNldERhdGEoe2hhc0NvbW1vZGl0eTogZmFsc2V9KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiB0aGlzLmRhdGEuY291bnQgPSB0aGlzLmRhdGEudGltZSA9IDBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19