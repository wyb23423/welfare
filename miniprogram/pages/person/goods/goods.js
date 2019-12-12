"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("../../../utils/http");
var page_query_1 = require("../../../behavior/page_query");
var status_1 = require("../../../constant/status");
Component({
    behaviors: [page_query_1.default],
    data: {
        url: '/api/commodity/my',
        STATUS: {
            AUDITING: status_1.GOODS_STATUS.AUDITING,
            NORMAL: status_1.GOODS_STATUS.NORMAL,
            SOLD_OUT: status_1.GOODS_STATUS.SOLD_OUT,
            CLOSE: status_1.GOODS_STATUS.CLOSE
        }
    },
    pageLifetimes: {
        show: function () {
            this.onShow();
        }
    },
    methods: {
        updateStatus: function (_a) {
            var _this = this;
            var index = _a.target.dataset.index;
            var data = this.data.list[index];
            if (data.status === status_1.GOODS_STATUS.AUDITING) {
                return wx.showToast({ icon: 'none', title: '商品审核中' });
            }
            var status = data.status === status_1.GOODS_STATUS.NORMAL ? status_1.GOODS_STATUS.SOLD_OUT : status_1.GOODS_STATUS.NORMAL;
            http_1.request({
                url: '/api/commodity',
                data: __assign({}, data, { status: status }),
                method: 'POST'
            })
                .then(function () {
                var _a;
                return _this.setData((_a = {}, _a["list[" + index + "].status"] = status, _a));
            })
                .then(function () { return wx.showToast({ title: '操作成功' }); })
                .catch(console.log);
        },
        delete: function (_a) {
            var _this = this;
            var index = _a.target.dataset.index;
            var list = this.data.list;
            var data = list[index];
            wx.showModal({
                content: "\u5220\u9664\u5546\u54C1" + data.name + "?",
                success: function (_a) {
                    var confirm = _a.confirm;
                    if (!confirm) {
                        return;
                    }
                    http_1.request({
                        url: '/api/commodity',
                        data: { id: data.id },
                        method: 'DELETE'
                    })
                        .then(function () { return _this.reflash(); })
                        .then(function () { return wx.showToast({ title: '删除成功' }); })
                        .catch(console.log);
                }
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnb29kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBSUEsNENBQThDO0FBQzlDLDJEQUFzRTtBQUN0RSxtREFBd0Q7QUFFeEQsU0FBUyxDQUFnQjtJQUNyQixTQUFTLEVBQUUsQ0FBQyxvQkFBUyxDQUFDO0lBQ3RCLElBQUksRUFBRTtRQUNGLEdBQUcsRUFBRSxtQkFBbUI7UUFDeEIsTUFBTSxFQUFFO1lBQ0osUUFBUSxFQUFFLHFCQUFZLENBQUMsUUFBUTtZQUMvQixNQUFNLEVBQUUscUJBQVksQ0FBQyxNQUFNO1lBQzNCLFFBQVEsRUFBRSxxQkFBWSxDQUFDLFFBQVE7WUFDL0IsS0FBSyxFQUFFLHFCQUFZLENBQUMsS0FBSztTQUM1QjtLQUNKO0lBQ0QsYUFBYSxFQUFFO1FBQ1gsSUFBSTtZQUNBLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQixDQUFDO0tBQ0o7SUFDRCxPQUFPLEVBQUU7UUFDTCxZQUFZLFlBQUMsRUFBd0Q7WUFBckUsaUJBZUM7Z0JBZmdDLCtCQUFLO1lBQ2xDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25DLElBQUcsSUFBSSxDQUFDLE1BQU0sS0FBSyxxQkFBWSxDQUFDLFFBQVEsRUFBRTtnQkFDdEMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQzthQUN2RDtZQUNELElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEtBQUsscUJBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLHFCQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxxQkFBWSxDQUFDLE1BQU0sQ0FBQztZQUVqRyxjQUFPLENBQUM7Z0JBQ0osR0FBRyxFQUFFLGdCQUFnQjtnQkFDckIsSUFBSSxlQUFNLElBQUksSUFBRSxNQUFNLFFBQUEsR0FBQztnQkFDdkIsTUFBTSxFQUFFLE1BQU07YUFDakIsQ0FBQztpQkFDRyxJQUFJLENBQUM7O2dCQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sV0FBRSxHQUFDLFVBQVEsS0FBSyxhQUFVLElBQUcsTUFBTSxNQUFFO1lBQWpELENBQWlELENBQUM7aUJBQzdELElBQUksQ0FBQyxjQUFNLE9BQUEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUMsQ0FBQyxFQUE3QixDQUE2QixDQUFDO2lCQUN6QyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLENBQUM7UUFDRCxNQUFNLFlBQUMsRUFBd0Q7WUFBL0QsaUJBb0JDO2dCQXBCMEIsK0JBQUs7WUFDNUIsSUFBTSxJQUFJLEdBQWlCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQzFDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QixFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNULE9BQU8sRUFBRSw2QkFBTyxJQUFJLENBQUMsSUFBSSxNQUFHO2dCQUM1QixPQUFPLEVBQUUsVUFBQyxFQUFTO3dCQUFSLG9CQUFPO29CQUNkLElBQUcsQ0FBQyxPQUFPLEVBQUU7d0JBQ1QsT0FBTztxQkFDVjtvQkFFRCxjQUFPLENBQUM7d0JBQ0osR0FBRyxFQUFFLGdCQUFnQjt3QkFDckIsSUFBSSxFQUFFLEVBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUM7d0JBQ25CLE1BQU0sRUFBRSxRQUFRO3FCQUNuQixDQUFDO3lCQUNHLElBQUksQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sRUFBRSxFQUFkLENBQWMsQ0FBQzt5QkFDMUIsSUFBSSxDQUFDLGNBQU0sT0FBQSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBQyxDQUFDLEVBQTdCLENBQTZCLENBQUM7eUJBQ3pDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzVCLENBQUM7YUFDSixDQUFDLENBQUM7UUFDUCxDQUFDO0tBQ0o7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5oiR55qE5ZWG5ZOBXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2h0dHAnO1xyXG5pbXBvcnQgUGFnZVF1ZXJ5LCB7TGlzdENvbXBvbmVudH0gZnJvbSAnLi4vLi4vLi4vYmVoYXZpb3IvcGFnZV9xdWVyeSc7XHJcbmltcG9ydCB7IEdPT0RTX1NUQVRVUyB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50L3N0YXR1cyc7XHJcblxyXG5Db21wb25lbnQ8TGlzdENvbXBvbmVudD4oe1xyXG4gICAgYmVoYXZpb3JzOiBbUGFnZVF1ZXJ5XSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgICB1cmw6ICcvYXBpL2NvbW1vZGl0eS9teScsXHJcbiAgICAgICAgU1RBVFVTOiB7XHJcbiAgICAgICAgICAgIEFVRElUSU5HOiBHT09EU19TVEFUVVMuQVVESVRJTkcsXHJcbiAgICAgICAgICAgIE5PUk1BTDogR09PRFNfU1RBVFVTLk5PUk1BTCxcclxuICAgICAgICAgICAgU09MRF9PVVQ6IEdPT0RTX1NUQVRVUy5TT0xEX09VVCxcclxuICAgICAgICAgICAgQ0xPU0U6IEdPT0RTX1NUQVRVUy5DTE9TRVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBwYWdlTGlmZXRpbWVzOiB7XHJcbiAgICAgICAgc2hvdyh0aGlzOiBMaXN0Q29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMub25TaG93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICB1cGRhdGVTdGF0dXMoe3RhcmdldDoge2RhdGFzZXQ6IHtpbmRleH19fTogQmFzZUV2ZW50PHtpbmRleDogbnVtYmVyfT4pIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YS5saXN0W2luZGV4XTtcclxuICAgICAgICAgICAgaWYoZGF0YS5zdGF0dXMgPT09IEdPT0RTX1NUQVRVUy5BVURJVElORykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHd4LnNob3dUb2FzdCh7aWNvbjogJ25vbmUnLCB0aXRsZTogJ+WVhuWTgeWuoeaguOS4rSd9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBzdGF0dXMgPSBkYXRhLnN0YXR1cyA9PT0gR09PRFNfU1RBVFVTLk5PUk1BTCA/IEdPT0RTX1NUQVRVUy5TT0xEX09VVCA6IEdPT0RTX1NUQVRVUy5OT1JNQUw7XHJcblxyXG4gICAgICAgICAgICByZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9hcGkvY29tbW9kaXR5JyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHsuLi5kYXRhLCBzdGF0dXN9LFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMuc2V0RGF0YSh7W2BsaXN0WyR7aW5kZXh9XS5zdGF0dXNgXTogc3RhdHVzfSkpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB3eC5zaG93VG9hc3Qoe3RpdGxlOiAn5pON5L2c5oiQ5YqfJ30pKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlbGV0ZSh7dGFyZ2V0OiB7ZGF0YXNldDoge2luZGV4fX19OiBCYXNlRXZlbnQ8e2luZGV4OiBudW1iZXJ9Pikge1xyXG4gICAgICAgICAgICBjb25zdCBsaXN0OiBJQ29tbW9kaXR5W10gPSB0aGlzLmRhdGEubGlzdDtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGxpc3RbaW5kZXhdO1xyXG4gICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogYOWIoOmZpOWVhuWTgSR7ZGF0YS5uYW1lfT9gLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKHtjb25maXJtfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCFjb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvYXBpL2NvbW1vZGl0eScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtpZDogZGF0YS5pZH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURSdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLnJlZmxhc2goKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gd3guc2hvd1RvYXN0KHt0aXRsZTogJ+WIoOmZpOaIkOWKnyd9KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19