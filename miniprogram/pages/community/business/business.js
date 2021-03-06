"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var page_query_1 = require("../../../behavior/page_query");
var status_1 = require("../../../constant/status");
var http_1 = require("../../../utils/http");
Component({
    behaviors: [page_query_1.default],
    data: {
        url: '/api/merchant/list',
        BANNED: status_1.BUSINESS_STATUS.BANNED
    },
    pageLifetimes: {
        show: function () {
            this.showHandler();
        }
    },
    methods: {
        liftOrBan: function (_a) {
            var _this = this;
            var index = _a.currentTarget.dataset.index;
            var list = this.data.list;
            var item = list[index];
            var isBan = item.authentication !== status_1.BUSINESS_STATUS.BANNED;
            if (!isBan) {
                return;
            }
            wx.showModal({
                content: (isBan ? '禁止' : '解禁') + '该组织的权限？',
                success: function (_a) {
                    var confirm = _a.confirm;
                    if (!confirm) {
                        return;
                    }
                    http_1.request({ url: '/api/merchant/delete', data: { id: item.id } })
                        .then(function () {
                        var _a;
                        wx.showToast({ title: '操作成功' });
                        _this.setData((_a = {}, _a["list[" + index + "].authentication"] = status_1.BUSINESS_STATUS.BANNED, _a));
                    })
                        .catch(console.log);
                }
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVzaW5lc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJidXNpbmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLDJEQUF3RTtBQUN4RSxtREFBMkQ7QUFDM0QsNENBQThDO0FBRzlDLFNBQVMsQ0FBZ0I7SUFDckIsU0FBUyxFQUFFLENBQUMsb0JBQVMsQ0FBQztJQUN0QixJQUFJLEVBQUU7UUFDRixHQUFHLEVBQUUsb0JBQW9CO1FBQ3pCLE1BQU0sRUFBRSx3QkFBZSxDQUFDLE1BQU07S0FDakM7SUFDRCxhQUFhLEVBQUU7UUFDWCxJQUFJO1lBQ0EsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZCLENBQUM7S0FDSjtJQUNELE9BQU8sRUFBRTtRQUNMLFNBQVMsWUFBQyxFQUErRDtZQUF6RSxpQkFvQ0M7Z0JBcENvQyxzQ0FBSztZQUN0QyxJQUFNLElBQUksR0FBZ0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDekMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pCLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLEtBQUssd0JBQWUsQ0FBQyxNQUFNLENBQUM7WUFFN0QsSUFBRyxDQUFDLEtBQUssRUFBRTtnQkFDUCxPQUFPO2FBQ1Y7WUFFRCxFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNULE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxTQUFTO2dCQUMxQyxPQUFPLEVBQUUsVUFBQyxFQUFTO3dCQUFSLG9CQUFPO29CQUNkLElBQUcsQ0FBQyxPQUFPLEVBQUU7d0JBQ1QsT0FBTztxQkFDVjtvQkFFRCxjQUFPLENBQUMsRUFBQyxHQUFHLEVBQUUsc0JBQXNCLEVBQUUsSUFBSSxFQUFFLEVBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUMsRUFBQyxDQUFDO3lCQUNsRCxJQUFJLENBQUM7O3dCQUNGLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQzt3QkFDOUIsS0FBSSxDQUFDLE9BQU8sV0FBRSxHQUFDLFVBQVEsS0FBSyxxQkFBa0IsSUFBRyx3QkFBZSxDQUFDLE1BQU0sTUFBRSxDQUFDO29CQUM5RSxDQUFDLENBQUM7eUJBQ0QsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFhaEMsQ0FBQzthQUNKLENBQUMsQ0FBQztRQUNQLENBQUM7S0FDSjtDQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKipcclxuICog57uE57uH5YiX6KGoKOeuoeeQhilcclxuICovXHJcbmltcG9ydCBQYWdlUXVlcnksIHsgTGlzdENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2JlaGF2aW9yL3BhZ2VfcXVlcnknO1xyXG5pbXBvcnQgeyBCVVNJTkVTU19TVEFUVVMgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudC9zdGF0dXMnO1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvaHR0cCc7XHJcbi8vIGltcG9ydCB7IElTX09GRklDSUFMIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnQvc3RvcmUnO1xyXG5cclxuQ29tcG9uZW50PExpc3RDb21wb25lbnQ+KHtcclxuICAgIGJlaGF2aW9yczogW1BhZ2VRdWVyeV0sXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgdXJsOiAnL2FwaS9tZXJjaGFudC9saXN0JyxcclxuICAgICAgICBCQU5ORUQ6IEJVU0lORVNTX1NUQVRVUy5CQU5ORURcclxuICAgIH0sXHJcbiAgICBwYWdlTGlmZXRpbWVzOiB7XHJcbiAgICAgICAgc2hvdyh0aGlzOiBMaXN0Q29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0hhbmRsZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGxpZnRPckJhbih7Y3VycmVudFRhcmdldDoge2RhdGFzZXQ6IHtpbmRleH19fTogQmFzZUV2ZW50PHtpbmRleDogbnVtYmVyfT4pIHtcclxuICAgICAgICAgICAgY29uc3QgbGlzdDogSU1lcmNoYW50W10gPSB0aGlzLmRhdGEubGlzdDtcclxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IGxpc3RbaW5kZXhdO1xyXG4gICAgICAgICAgICBjb25zdCBpc0JhbiA9IGl0ZW0uYXV0aGVudGljYXRpb24gIT09IEJVU0lORVNTX1NUQVRVUy5CQU5ORUQ7XHJcblxyXG4gICAgICAgICAgICBpZighaXNCYW4pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IChpc0JhbiA/ICfnpoHmraInIDogJ+ino+emgScpICsgJ+ivpee7hOe7h+eahOadg+mZkO+8nycsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAoe2NvbmZpcm19KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIWNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdCh7dXJsOiAnL2FwaS9tZXJjaGFudC9kZWxldGUnLCBkYXRhOiB7aWQ6IGl0ZW0uaWR9fSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe3RpdGxlOiAn5pON5L2c5oiQ5YqfJ30pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7W2BsaXN0WyR7aW5kZXh9XS5hdXRoZW50aWNhdGlvbmBdOiBCVVNJTkVTU19TVEFUVVMuQkFOTkVEfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IGF1dGhlbnRpY2F0aW9uID0gQlVTSU5FU1NfU1RBVFVTLkJBTk5FRDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBpZighaXNCYW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc3QgaXNDb21tdW5pdHkgPSB3eC5nZXRTdG9yYWdlU3luYyhJU19PRkZJQ0lBTCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGF1dGhlbnRpY2F0aW9uID0gaXNDb21tdW5pdHkgPyBCVVNJTkVTU19TVEFUVVMuQ09NTVVOSVRZIDogQlVTSU5FU1NfU1RBVFVTLk5PUk1BTDtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVxdWVzdCh7IHVybDogJy9hcGkvbWVyY2hhbnQnLCBtZXRob2Q6ICdQT1NUJywgZGF0YToge2lkOiBpdGVtLmlkLCBhdXRoZW50aWNhdGlvbn0gfSlcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgd3guc2hvd1RvYXN0KHt0aXRsZTogJ+aTjeS9nOaIkOWKnyd9KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuc2V0RGF0YSh7W2BsaXN0WyR7aW5kZXh9XS5hdXRoZW50aWNhdGlvbmBdOiBhdXRoZW50aWNhdGlvbn0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=