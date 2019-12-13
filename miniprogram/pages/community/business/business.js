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
var page_query_1 = require("../../../behavior/page_query");
var status_1 = require("../../../constant/status");
var http_1 = require("../../../utils/http");
var store_1 = require("../../../constant/store");
Component({
    behaviors: [page_query_1.default],
    data: {
        url: '/api/merchant/list',
        BANNED: status_1.BUSINESS_STATUS.BANNED
    },
    pageLifetimes: {
        show: function () {
            this.onShow();
        }
    },
    methods: {
        liftOrBan: function (_a) {
            var _this = this;
            var index = _a.currentTarget.dataset.index;
            var list = this.data.list;
            var item = list[index];
            var isBan = item.authentication !== status_1.BUSINESS_STATUS.BANNED;
            wx.showModal({
                content: (isBan ? '禁止' : '解禁') + '该组织的权限？',
                success: function (_a) {
                    var confirm = _a.confirm;
                    if (!confirm) {
                        return;
                    }
                    var authentication = status_1.BUSINESS_STATUS.BANNED;
                    if (!isBan) {
                        var isCommunity = wx.getStorageSync(store_1.IS_OFFICIAL);
                        authentication = isCommunity ? status_1.BUSINESS_STATUS.COMMUNITY : status_1.BUSINESS_STATUS.NORMAL;
                    }
                    http_1.request({ url: '/api/merchant', method: 'PUT', data: __assign({}, item, { authentication: authentication }) })
                        .then(function () {
                        var _a;
                        wx.showToast({ title: '操作成功' });
                        _this.setData((_a = {}, _a["list[" + index + "].authentication"] = authentication, _a));
                    })
                        .catch(console.log);
                }
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVzaW5lc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJidXNpbmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBSUEsMkRBQXdFO0FBQ3hFLG1EQUEyRDtBQUMzRCw0Q0FBOEM7QUFDOUMsaURBQXNEO0FBRXRELFNBQVMsQ0FBZ0I7SUFDckIsU0FBUyxFQUFFLENBQUMsb0JBQVMsQ0FBQztJQUN0QixJQUFJLEVBQUU7UUFDRixHQUFHLEVBQUUsb0JBQW9CO1FBQ3pCLE1BQU0sRUFBRSx3QkFBZSxDQUFDLE1BQU07S0FDakM7SUFDRCxhQUFhLEVBQUU7UUFDWCxJQUFJO1lBQ0EsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xCLENBQUM7S0FDSjtJQUNELE9BQU8sRUFBRTtRQUNMLFNBQVMsWUFBQyxFQUErRDtZQUF6RSxpQkF5QkM7Z0JBekJvQyxzQ0FBSztZQUN0QyxJQUFNLElBQUksR0FBZ0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDekMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pCLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLEtBQUssd0JBQWUsQ0FBQyxNQUFNLENBQUM7WUFFN0QsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDVCxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUztnQkFDMUMsT0FBTyxFQUFFLFVBQUMsRUFBUzt3QkFBUixvQkFBTztvQkFDZCxJQUFHLENBQUMsT0FBTyxFQUFFO3dCQUNULE9BQU87cUJBQ1Y7b0JBRUQsSUFBSSxjQUFjLEdBQUcsd0JBQWUsQ0FBQyxNQUFNLENBQUM7b0JBQzVDLElBQUcsQ0FBQyxLQUFLLEVBQUU7d0JBQ1AsSUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxtQkFBVyxDQUFDLENBQUM7d0JBQ25ELGNBQWMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLHdCQUFlLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyx3QkFBZSxDQUFDLE1BQU0sQ0FBQztxQkFDckY7b0JBQ0QsY0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLGVBQWUsRUFBRyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksZUFBTSxJQUFJLElBQUUsY0FBYyxnQkFBQSxHQUFDLEVBQUUsQ0FBQzt5QkFDN0UsSUFBSSxDQUFDOzt3QkFDRixFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7d0JBQzlCLEtBQUksQ0FBQyxPQUFPLFdBQUUsR0FBQyxVQUFRLEtBQUsscUJBQWtCLElBQUcsY0FBYyxNQUFFLENBQUM7b0JBQ3RFLENBQUMsQ0FBQzt5QkFDRCxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM1QixDQUFDO2FBQ0osQ0FBQyxDQUFDO1FBQ1AsQ0FBQztLQUNKO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qKlxyXG4gKiDnu4Tnu4fliJfooago566h55CGKVxyXG4gKi9cclxuaW1wb3J0IFBhZ2VRdWVyeSwgeyBMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vYmVoYXZpb3IvcGFnZV9xdWVyeSc7XHJcbmltcG9ydCB7IEJVU0lORVNTX1NUQVRVUyB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50L3N0YXR1cyc7XHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi91dGlscy9odHRwJztcclxuaW1wb3J0IHsgSVNfT0ZGSUNJQUwgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudC9zdG9yZSc7XHJcblxyXG5Db21wb25lbnQ8TGlzdENvbXBvbmVudD4oe1xyXG4gICAgYmVoYXZpb3JzOiBbUGFnZVF1ZXJ5XSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgICB1cmw6ICcvYXBpL21lcmNoYW50L2xpc3QnLFxyXG4gICAgICAgIEJBTk5FRDogQlVTSU5FU1NfU1RBVFVTLkJBTk5FRFxyXG4gICAgfSxcclxuICAgIHBhZ2VMaWZldGltZXM6IHtcclxuICAgICAgICBzaG93KHRoaXM6IExpc3RDb21wb25lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5vblNob3coKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGxpZnRPckJhbih7Y3VycmVudFRhcmdldDoge2RhdGFzZXQ6IHtpbmRleH19fTogQmFzZUV2ZW50PHtpbmRleDogbnVtYmVyfT4pIHtcclxuICAgICAgICAgICAgY29uc3QgbGlzdDogSU1lcmNoYW50W10gPSB0aGlzLmRhdGEubGlzdDtcclxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IGxpc3RbaW5kZXhdO1xyXG4gICAgICAgICAgICBjb25zdCBpc0JhbiA9IGl0ZW0uYXV0aGVudGljYXRpb24gIT09IEJVU0lORVNTX1NUQVRVUy5CQU5ORUQ7XHJcblxyXG4gICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogKGlzQmFuID8gJ+emgeatoicgOiAn6Kej56aBJykgKyAn6K+l57uE57uH55qE5p2D6ZmQ77yfJyxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICh7Y29uZmlybX0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZighY29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgYXV0aGVudGljYXRpb24gPSBCVVNJTkVTU19TVEFUVVMuQkFOTkVEO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCFpc0Jhbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0NvbW11bml0eSA9IHd4LmdldFN0b3JhZ2VTeW5jKElTX09GRklDSUFMKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0aGVudGljYXRpb24gPSBpc0NvbW11bml0eSA/IEJVU0lORVNTX1NUQVRVUy5DT01NVU5JVFkgOiBCVVNJTkVTU19TVEFUVVMuTk9STUFMO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0KHsgdXJsOiAnL2FwaS9tZXJjaGFudCcsICBtZXRob2Q6ICdQVVQnLCBkYXRhOiB7Li4uaXRlbSwgYXV0aGVudGljYXRpb259IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7dGl0bGU6ICfmk43kvZzmiJDlip8nfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1tgbGlzdFske2luZGV4fV0uYXV0aGVudGljYXRpb25gXTogYXV0aGVudGljYXRpb259KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19