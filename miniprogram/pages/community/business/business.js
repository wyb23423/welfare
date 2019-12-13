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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVzaW5lc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJidXNpbmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBSUEsMkRBQXdFO0FBQ3hFLG1EQUEyRDtBQUMzRCw0Q0FBOEM7QUFDOUMsaURBQXNEO0FBRXRELFNBQVMsQ0FBZ0I7SUFDckIsU0FBUyxFQUFFLENBQUMsb0JBQVMsQ0FBQztJQUN0QixJQUFJLEVBQUU7UUFDRixHQUFHLEVBQUUsb0JBQW9CO1FBQ3pCLE1BQU0sRUFBRSx3QkFBZSxDQUFDLE1BQU07S0FDakM7SUFDRCxhQUFhLEVBQUU7UUFDWCxJQUFJO1lBQ0EsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xCLENBQUM7S0FDSjtJQUNELE9BQU8sRUFBRTtRQUNMLFNBQVMsWUFBQyxFQUErRDtZQUF6RSxpQkF5QkM7Z0JBekJvQyxzQ0FBSztZQUN0QyxJQUFNLElBQUksR0FBZ0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDekMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pCLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLEtBQUssd0JBQWUsQ0FBQyxNQUFNLENBQUM7WUFFN0QsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDVCxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUztnQkFDMUMsT0FBTyxFQUFFLFVBQUMsRUFBUzt3QkFBUixvQkFBTztvQkFDZCxJQUFHLENBQUMsT0FBTyxFQUFFO3dCQUNULE9BQU87cUJBQ1Y7b0JBRUQsSUFBSSxjQUFjLEdBQUcsd0JBQWUsQ0FBQyxNQUFNLENBQUM7b0JBQzVDLElBQUcsQ0FBQyxLQUFLLEVBQUU7d0JBQ1AsSUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxtQkFBVyxDQUFDLENBQUM7d0JBQ25ELGNBQWMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLHdCQUFlLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyx3QkFBZSxDQUFDLE1BQU0sQ0FBQztxQkFDckY7b0JBQ0QsY0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLGVBQWUsRUFBRyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksZUFBTSxJQUFJLElBQUUsY0FBYyxnQkFBQSxHQUFDLEVBQUUsQ0FBQzt5QkFDN0UsSUFBSSxDQUFDOzt3QkFDRixFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7d0JBQzlCLEtBQUksQ0FBQyxPQUFPLFdBQUUsR0FBQyxVQUFRLEtBQUsscUJBQWtCLElBQUcsY0FBYyxNQUFFLENBQUM7b0JBQ3RFLENBQUMsQ0FBQzt5QkFDRCxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM1QixDQUFDO2FBQ0osQ0FBQyxDQUFDO1FBQ1AsQ0FBQztLQUNKO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qKlxyXG4gKiDllYblrrbliJfooahcclxuICovXHJcbmltcG9ydCBQYWdlUXVlcnksIHsgTGlzdENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2JlaGF2aW9yL3BhZ2VfcXVlcnknO1xyXG5pbXBvcnQgeyBCVVNJTkVTU19TVEFUVVMgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudC9zdGF0dXMnO1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvaHR0cCc7XHJcbmltcG9ydCB7IElTX09GRklDSUFMIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnQvc3RvcmUnO1xyXG5cclxuQ29tcG9uZW50PExpc3RDb21wb25lbnQ+KHtcclxuICAgIGJlaGF2aW9yczogW1BhZ2VRdWVyeV0sXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgdXJsOiAnL2FwaS9tZXJjaGFudC9saXN0JyxcclxuICAgICAgICBCQU5ORUQ6IEJVU0lORVNTX1NUQVRVUy5CQU5ORURcclxuICAgIH0sXHJcbiAgICBwYWdlTGlmZXRpbWVzOiB7XHJcbiAgICAgICAgc2hvdyh0aGlzOiBMaXN0Q29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMub25TaG93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBsaWZ0T3JCYW4oe2N1cnJlbnRUYXJnZXQ6IHtkYXRhc2V0OiB7aW5kZXh9fX06IEJhc2VFdmVudDx7aW5kZXg6IG51bWJlcn0+KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpc3Q6IElNZXJjaGFudFtdID0gdGhpcy5kYXRhLmxpc3Q7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBsaXN0W2luZGV4XTtcclxuICAgICAgICAgICAgY29uc3QgaXNCYW4gPSBpdGVtLmF1dGhlbnRpY2F0aW9uICE9PSBCVVNJTkVTU19TVEFUVVMuQkFOTkVEO1xyXG5cclxuICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IChpc0JhbiA/ICfnpoHmraInIDogJ+ino+emgScpICsgJ+ivpee7hOe7h+eahOadg+mZkO+8nycsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAoe2NvbmZpcm19KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIWNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGF1dGhlbnRpY2F0aW9uID0gQlVTSU5FU1NfU1RBVFVTLkJBTk5FRDtcclxuICAgICAgICAgICAgICAgICAgICBpZighaXNCYW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNDb21tdW5pdHkgPSB3eC5nZXRTdG9yYWdlU3luYyhJU19PRkZJQ0lBTCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uID0gaXNDb21tdW5pdHkgPyBCVVNJTkVTU19TVEFUVVMuQ09NTVVOSVRZIDogQlVTSU5FU1NfU1RBVFVTLk5PUk1BTDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdCh7IHVybDogJy9hcGkvbWVyY2hhbnQnLCAgbWV0aG9kOiAnUFVUJywgZGF0YTogey4uLml0ZW0sIGF1dGhlbnRpY2F0aW9ufSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe3RpdGxlOiAn5pON5L2c5oiQ5YqfJ30pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtbYGxpc3RbJHtpbmRleH1dLmF1dGhlbnRpY2F0aW9uYF06IGF1dGhlbnRpY2F0aW9ufSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==