"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("../../utils/http");
function exchange(e) {
    var id = e.target.dataset.id;
    http_1.request({ url: '/api/commodity/participation/deal/' + id })
        .then(function () { return wx.showToast({ title: '兑换成功' }); })
        .catch(console.log);
}
exports.exchange = exchange;
function collect(e) {
    var _a = e.target.dataset, id = _a.id, collect = _a.collect;
    return http_1.request({
        url: '/api/like',
        method: collect ? 'DELETE' : 'PUT',
        data: {
            targetId: id,
            type: 1
        }
    })
        .then(function () { return ({ id: id, collect: collect }); });
}
exports.collect = collect;
function none() {
}
exports.none = none;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdF9pdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlzdF9pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUNBQTJDO0FBSzNDLFNBQWdCLFFBQVEsQ0FBWSxDQUFhO0lBQzdDLElBQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztJQUMvQixjQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsb0NBQW9DLEdBQUcsRUFBRSxFQUFFLENBQUM7U0FDdEQsSUFBSSxDQUFDLGNBQU0sT0FBQSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQS9CLENBQStCLENBQUM7U0FDM0MsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM1QixDQUFDO0FBTEQsNEJBS0M7QUFLRCxTQUFnQixPQUFPLENBQUMsQ0FBZTtJQUU3QixJQUFBLHFCQUFrQyxFQUFoQyxVQUFFLEVBQUUsb0JBQTRCLENBQUM7SUFFekMsT0FBTyxjQUFPLENBQUM7UUFDWCxHQUFHLEVBQUUsV0FBVztRQUNoQixNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUs7UUFDbEMsSUFBSSxFQUFFO1lBQ0YsUUFBUSxFQUFFLEVBQUU7WUFDWixJQUFJLEVBQUUsQ0FBQztTQUNWO0tBQ0osQ0FBQztTQUVHLElBQUksQ0FBQyxjQUFNLE9BQUEsQ0FBQyxFQUFFLEVBQUUsSUFBQSxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUMsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO0FBQ3ZDLENBQUM7QUFkRCwwQkFjQztBQUVELFNBQWdCLElBQUk7QUFFcEIsQ0FBQztBQUZELG9CQUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uLy4uL3V0aWxzL2h0dHAnO1xyXG5cclxuLypcclxuKiDlhZHmjaLllYblk4FcclxuKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGV4Y2hhbmdlKHRoaXM6IGFueSwgZTogSUFueU9iamVjdCkge1xyXG4gICAgY29uc3QgaWQgPSBlLnRhcmdldC5kYXRhc2V0LmlkO1xyXG4gICAgcmVxdWVzdCh7IHVybDogJy9hcGkvY29tbW9kaXR5L3BhcnRpY2lwYXRpb24vZGVhbC8nICsgaWQgfSlcclxuICAgICAgICAudGhlbigoKSA9PiB3eC5zaG93VG9hc3QoeyB0aXRsZTogJ+WFkeaNouaIkOWKnycgfSkpXHJcbiAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxufVxyXG5cclxuLyoqXHJcbiAqICjlj5bmtogp5pS26JeP5ZWG5ZOBXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29sbGVjdChlOiBXeFRvdWNoRXZlbnQpIHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1zaGFkb3dlZC12YXJpYWJsZVxyXG4gICAgY29uc3QgeyBpZCwgY29sbGVjdCB9ID0gZS50YXJnZXQuZGF0YXNldDtcclxuXHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL2FwaS9saWtlJyxcclxuICAgICAgICBtZXRob2Q6IGNvbGxlY3QgPyAnREVMRVRFJyA6ICdQVVQnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgdGFyZ2V0SWQ6IGlkLFxyXG4gICAgICAgICAgICB0eXBlOiAxXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICAgICAvLyAudGhlbigoKSA9PiB3eC5zaG93VG9hc3QoeyB0aXRsZTogJ+aTjeS9nOaIkOWKnycgfSkpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4gKHsgaWQsIGNvbGxlY3QgfSkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbm9uZSgpIHtcclxuICAgIC8vXHJcbn1cclxuIl19