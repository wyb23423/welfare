"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = require("../../constant/store");
var http_1 = require("../../utils/http");
Component({
    properties: {
        isindex: {
            type: Boolean,
            value: false
        }
    },
    data: {
        time: 0,
        count: 0,
        hasCommodity: false,
        integral: 0,
        follow: 0,
        collection: 0
    },
    pageLifetimes: {
        show: function () {
            this.data.isindex && this.initInfoValue();
            this.data.hasCommodity = !wx.getStorageSync(store_1.IS_OFFICIAL);
            this.setData({ username: wx.getStorageSync(store_1.USER_NAME) });
        }
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
        },
        initInfoValue: function () {
            var _this = this;
            http_1.request({ url: '/api/follow', notShowMsg: true })
                .then(function (_a) {
                var data = _a.data;
                return _this.setData({ follow: data.length });
            })
                .catch(console.log);
            Promise.all([0, 1].map(function (type) {
                return http_1.request({
                    url: '/api/like',
                    data: { type: type },
                    notShowMsg: true
                }).catch(function () { return ({ data: [] }); });
            }))
                .then(function (_a) {
                var res1 = _a[0].data, res2 = _a[1].data;
                return _this.setData({ collection: res1.length + res2.length });
            })
                .catch(console.log);
            http_1.request({ url: '/api/user', notShowMsg: true })
                .then(function (_a) {
                var integral = _a.data.integral;
                return _this.setData({ integral: integral });
            })
                .catch(console.log);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uX2hlYWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwZXJzb25faGVhZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLDhDQUE4RDtBQUM5RCx5Q0FBMkM7QUFPM0MsU0FBUyxDQUFhO0lBQ2xCLFVBQVUsRUFBRTtRQUNSLE9BQU8sRUFBRTtZQUNMLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDZjtLQUNKO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFLENBQUM7UUFDUCxLQUFLLEVBQUUsQ0FBQztRQUNSLFlBQVksRUFBRSxLQUFLO1FBQ25CLFFBQVEsRUFBRSxDQUFDO1FBQ1gsTUFBTSxFQUFFLENBQUM7UUFDVCxVQUFVLEVBQUUsQ0FBQztLQUNoQjtJQUNELGFBQWEsRUFBRTtRQUNYLElBQUk7WUFDQSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLG1CQUFXLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxjQUFjLENBQUMsaUJBQVMsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUMzRCxDQUFDO0tBQ0o7SUFDRCxPQUFPLEVBQUU7UUFDTCxXQUFXO1lBRUgsSUFBQSxjQUF1QyxFQUF0QyxnQkFBSyxFQUFFLGNBQUksRUFBRSw4QkFBeUIsQ0FBQztZQUM1QyxJQUFHLENBQUMsWUFBWSxFQUFFO2dCQUNkLE9BQU87YUFDVjtZQUNELElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUN2QixJQUFHLEdBQUcsR0FBRyxJQUFJLElBQUksR0FBRyxFQUFFO2dCQUNsQixLQUFLLEdBQUcsQ0FBQyxDQUFDO2FBQ2I7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7WUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxLQUFLLENBQUM7WUFDMUIsS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEMsQ0FBQztRQUNELGNBQWM7WUFBZCxpQkFhQztZQVpHLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0JBQ1QsT0FBTyxFQUFFLFlBQVk7Z0JBQ3JCLE9BQU8sRUFBRSxVQUFDLEVBQVM7d0JBQVIsb0JBQU87b0JBQ2QsSUFBRyxPQUFPLEVBQUU7d0JBQ1IsY0FBTyxDQUFDLEVBQUMsR0FBRyxFQUFFLGtDQUFrQyxFQUFDLENBQUM7NkJBQzdDLElBQUksQ0FBQyxjQUFNLE9BQUEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUMsQ0FBQyxFQUE3QixDQUE2QixDQUFDOzZCQUN6QyxJQUFJLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxZQUFZLEVBQUUsS0FBSyxFQUFDLENBQUMsRUFBbkMsQ0FBbUMsQ0FBQzs2QkFDL0MsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDM0I7Z0JBQ0wsQ0FBQztnQkFDRCxRQUFRLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBcEMsQ0FBb0M7YUFDdkQsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUNELGFBQWE7WUFBYixpQkFxQkM7WUFuQkcsY0FBTyxDQUFjLEVBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLENBQUM7aUJBQ3pELElBQUksQ0FBQyxVQUFDLEVBQVE7b0JBQU4sY0FBSTtnQkFBTyxPQUFBLEtBQUksQ0FBQyxPQUFRLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQXRDLENBQXNDLENBQUM7aUJBQzFELEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFHeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJO2dCQUN2QixPQUFBLGNBQU8sQ0FBMkI7b0JBQzlCLEdBQUcsRUFBRSxXQUFXO29CQUNoQixJQUFJLEVBQUUsRUFBRSxJQUFJLE1BQUEsRUFBRTtvQkFDZCxVQUFVLEVBQUUsSUFBSTtpQkFDbkIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFNLE9BQUEsQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFFLEVBQUMsQ0FBQyxFQUFaLENBQVksQ0FBQztZQUo1QixDQUk0QixDQUMvQixDQUFDO2lCQUNHLElBQUksQ0FBQyxVQUFDLEVBQWdDO29CQUE3QixpQkFBVSxFQUFNLGlCQUFVO2dCQUFRLE9BQUEsS0FBSSxDQUFDLE9BQVEsQ0FBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUF4RCxDQUF3RCxDQUFDO2lCQUNwRyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBR3hCLGNBQU8sQ0FBUSxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxDQUFDO2lCQUNqRCxJQUFJLENBQUMsVUFBQyxFQUFzQjtvQkFBWiwyQkFBUTtnQkFBUyxPQUFBLEtBQUksQ0FBQyxPQUFRLENBQUMsRUFBRSxRQUFRLFVBQUEsRUFBRSxDQUFDO1lBQTNCLENBQTJCLENBQUM7aUJBQzdELEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUIsQ0FBQztLQUNKO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOS4quS6uuS/oeaBr+mhtemhtumDqOWktOWDj+WPiuWQjeensFxyXG4gKi9cclxuaW1wb3J0IHsgVVNFUl9OQU1FLCBJU19PRkZJQ0lBTCB9IGZyb20gJy4uLy4uL2NvbnN0YW50L3N0b3JlJztcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uLy4uL3V0aWxzL2h0dHAnO1xyXG5cclxuaW50ZXJmYWNlIFBlcnNvbkhlYWQgZXh0ZW5kcyBXeENvbXBvbmVudCB7XHJcbiAgICBhdXRoZW50aWNhdGlvbigpOiB2b2lkO1xyXG4gICAgaW5pdEluZm9WYWx1ZSgpOiB2b2lkO1xyXG59XHJcblxyXG5Db21wb25lbnQ8UGVyc29uSGVhZD4oe1xyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGlzaW5kZXg6IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgICB0aW1lOiAwLCAvLyDkuIrmrKHngrnlh7vlpLTlg4/ml7bpl7RcclxuICAgICAgICBjb3VudDogMCwgLy8g6L+e57ut54K55Ye75aS05YOP5qyh5pWwXHJcbiAgICAgICAgaGFzQ29tbW9kaXR5OiBmYWxzZSxcclxuICAgICAgICBpbnRlZ3JhbDogMCxcclxuICAgICAgICBmb2xsb3c6IDAsXHJcbiAgICAgICAgY29sbGVjdGlvbjogMFxyXG4gICAgfSxcclxuICAgIHBhZ2VMaWZldGltZXM6IHtcclxuICAgICAgICBzaG93KHRoaXM6IFBlcnNvbkhlYWQpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLmlzaW5kZXggJiYgdGhpcy5pbml0SW5mb1ZhbHVlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5oYXNDb21tb2RpdHkgPSAhd3guZ2V0U3RvcmFnZVN5bmMoSVNfT0ZGSUNJQUwpO1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe3VzZXJuYW1lOiB3eC5nZXRTdG9yYWdlU3luYyhVU0VSX05BTUUpfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBjbGlja0F2YXRvcigpIHtcclxuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByZWZlci1jb25zdFxyXG4gICAgICAgICAgICBsZXQge2NvdW50LCB0aW1lLCBoYXNDb21tb2RpdHl9ID0gdGhpcy5kYXRhO1xyXG4gICAgICAgICAgICBpZighaGFzQ29tbW9kaXR5KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgaWYobm93IC0gdGltZSA+PSA1MDApIHtcclxuICAgICAgICAgICAgICAgIGNvdW50ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmRhdGEudGltZSA9IG5vdztcclxuICAgICAgICAgICAgdGhpcy5kYXRhLmNvdW50ID0gKytjb3VudDtcclxuICAgICAgICAgICAgY291bnQgPj0gNSAmJiB0aGlzLmF1dGhlbnRpY2F0aW9uKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhdXRoZW50aWNhdGlvbigpIHtcclxuICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfnlLPor7fmiJDkuLrnpL7ljLrnrqHnkIblkZg/JyxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICh7Y29uZmlybX0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZihjb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3Qoe3VybDogJy9hcGkvdXNlci9jb21tdW5pdHlBdXRob3JpemF0aW9uJ30pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB3eC5zaG93VG9hc3Qoe3RpdGxlOiAn55Sz6K+35oiQ5YqfJ30pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5zZXREYXRhKHtoYXNDb21tb2RpdHk6IGZhbHNlfSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogKCkgPT4gdGhpcy5kYXRhLmNvdW50ID0gdGhpcy5kYXRhLnRpbWUgPSAwXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5pdEluZm9WYWx1ZSgpIHtcclxuICAgICAgICAgICAgLy8g5YWz5rOo5pWwXHJcbiAgICAgICAgICAgIHJlcXVlc3Q8SU1lcmNoYW50W10+KHsgdXJsOiAnL2FwaS9mb2xsb3cnLCBub3RTaG93TXNnOiB0cnVlIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoeyBkYXRhIH0pID0+IHRoaXMuc2V0RGF0YSEoeyBmb2xsb3c6IGRhdGEubGVuZ3RoIH0pKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuXHJcbiAgICAgICAgICAgIC8vIOaUtuiXj+aVsFxyXG4gICAgICAgICAgICBQcm9taXNlLmFsbChbMCwgMV0ubWFwKHR5cGUgPT5cclxuICAgICAgICAgICAgICAgIHJlcXVlc3Q8SUNvbW1vZGl0eVtdIHwgSUFjdGl2ZVtdPih7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2FwaS9saWtlJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHR5cGUgfSxcclxuICAgICAgICAgICAgICAgICAgICBub3RTaG93TXNnOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoKSA9PiAoe2RhdGE6IFtdfSkpXHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoW3sgZGF0YTogcmVzMSB9LCB7IGRhdGE6IHJlczIgfV0pID0+IHRoaXMuc2V0RGF0YSEoeyBjb2xsZWN0aW9uOiByZXMxLmxlbmd0aCArIHJlczIubGVuZ3RoIH0pKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuXHJcbiAgICAgICAgICAgIC8vIOenr+WIhijlhaznm4opXHJcbiAgICAgICAgICAgIHJlcXVlc3Q8SVVzZXI+KHsgdXJsOiAnL2FwaS91c2VyJywgbm90U2hvd01zZzogdHJ1ZSB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHsgZGF0YTogeyBpbnRlZ3JhbCB9IH0pID0+IHRoaXMuc2V0RGF0YSEoeyBpbnRlZ3JhbCB9KSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19