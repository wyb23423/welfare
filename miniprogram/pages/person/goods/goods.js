"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("../../../utils/http");
var page_query_1 = require("../../../behavior/page_query");
var status_1 = require("../../../constant/status");
function updateStatus(component, index) {
    var data = component.data.list[index];
    if (data.status === status_1.GOODS_STATUS.AUDITING) {
        return wx.showToast({ icon: 'none', title: '商品审核中' });
    }
    var isNormal = data.status === status_1.GOODS_STATUS.NORMAL;
    wx.showModal({
        content: (isNormal ? '下' : '上') + '架该商品?',
        success: function (_a) {
            var confirm = _a.confirm;
            if (!confirm) {
                return;
            }
            var status = isNormal ? status_1.GOODS_STATUS.SOLD_OUT : status_1.GOODS_STATUS.NORMAL;
            http_1.request({
                url: '/api/commodity',
                data: { id: data.id, status: status },
                method: 'POST'
            })
                .then(function () {
                var _a;
                return component.setData((_a = {}, _a["list[" + index + "].status"] = status, _a));
            })
                .then(function () { return wx.showToast({ title: '操作成功' }); })
                .catch(console.log);
        }
    });
}
exports.updateStatus = updateStatus;
function deleteGoods(component, index) {
    var list = component.data.list;
    var data = list[index];
    wx.showModal({
        content: '删除该商品?',
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
                .then(function () { return component.reflash(); })
                .then(function () { return wx.showToast({ title: '删除成功' }); })
                .catch(console.log);
        }
    });
}
exports.deleteGoods = deleteGoods;
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
            var index = _a.target.dataset.index;
            updateStatus(this, index);
        },
        delete: function (_a) {
            var index = _a.target.dataset.index;
            deleteGoods(this, index);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnb29kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLDRDQUE4QztBQUM5QywyREFBc0U7QUFDdEUsbURBQXdEO0FBS3hELFNBQWdCLFlBQVksQ0FBQyxTQUF3QixFQUFFLEtBQWE7SUFDaEUsSUFBTSxJQUFJLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsSUFBRyxJQUFJLENBQUMsTUFBTSxLQUFLLHFCQUFZLENBQUMsUUFBUSxFQUFFO1FBQ3RDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUM7S0FDdkQ7SUFFRCxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxLQUFLLHFCQUFZLENBQUMsTUFBTSxDQUFDO0lBQ3JELEVBQUUsQ0FBQyxTQUFTLENBQUM7UUFDVCxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUEsR0FBRyxDQUFDLEdBQUcsT0FBTztRQUN4QyxPQUFPLEVBQUUsVUFBQyxFQUFTO2dCQUFSLG9CQUFPO1lBQ2QsSUFBRyxDQUFDLE9BQU8sRUFBRTtnQkFDVCxPQUFPO2FBQ1Y7WUFFRCxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLHFCQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxxQkFBWSxDQUFDLE1BQU0sQ0FBQztZQUN0RSxjQUFPLENBQUM7Z0JBQ0osR0FBRyxFQUFFLGdCQUFnQjtnQkFDckIsSUFBSSxFQUFFLEVBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsTUFBTSxRQUFBLEVBQUM7Z0JBQzNCLE1BQU0sRUFBRSxNQUFNO2FBQ2pCLENBQUM7aUJBQ0csSUFBSSxDQUFDOztnQkFBTSxPQUFBLFNBQVMsQ0FBQyxPQUFPLFdBQUUsR0FBQyxVQUFRLEtBQUssYUFBVSxJQUFHLE1BQU0sTUFBRTtZQUF0RCxDQUFzRCxDQUFDO2lCQUNsRSxJQUFJLENBQUMsY0FBTSxPQUFBLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFDLENBQUMsRUFBN0IsQ0FBNkIsQ0FBQztpQkFDekMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QixDQUFDO0tBQ0osQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQXpCRCxvQ0F5QkM7QUFLRCxTQUFnQixXQUFXLENBQUMsU0FBd0IsRUFBRSxLQUFhO0lBQy9ELElBQU0sSUFBSSxHQUFpQixTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUMvQyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsRUFBRSxDQUFDLFNBQVMsQ0FBQztRQUNULE9BQU8sRUFBRSxRQUFRO1FBQ2pCLE9BQU8sRUFBRSxVQUFDLEVBQVM7Z0JBQVIsb0JBQU87WUFDZCxJQUFHLENBQUMsT0FBTyxFQUFFO2dCQUNULE9BQU87YUFDVjtZQUVELGNBQU8sQ0FBQztnQkFDSixHQUFHLEVBQUUsZ0JBQWdCO2dCQUNyQixJQUFJLEVBQUUsRUFBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBQztnQkFDbkIsTUFBTSxFQUFFLFFBQVE7YUFDbkIsQ0FBQztpQkFDRyxJQUFJLENBQUMsY0FBTSxPQUFBLFNBQVMsQ0FBQyxPQUFPLEVBQUUsRUFBbkIsQ0FBbUIsQ0FBQztpQkFDL0IsSUFBSSxDQUFDLGNBQU0sT0FBQSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBQyxDQUFDLEVBQTdCLENBQTZCLENBQUM7aUJBQ3pDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUIsQ0FBQztLQUNKLENBQUMsQ0FBQztBQUNQLENBQUM7QUFwQkQsa0NBb0JDO0FBR0QsU0FBUyxDQUFnQjtJQUNyQixTQUFTLEVBQUUsQ0FBQyxvQkFBUyxDQUFDO0lBQ3RCLElBQUksRUFBRTtRQUNGLEdBQUcsRUFBRSxtQkFBbUI7UUFDeEIsTUFBTSxFQUFFO1lBQ0osUUFBUSxFQUFFLHFCQUFZLENBQUMsUUFBUTtZQUMvQixNQUFNLEVBQUUscUJBQVksQ0FBQyxNQUFNO1lBQzNCLFFBQVEsRUFBRSxxQkFBWSxDQUFDLFFBQVE7WUFDL0IsS0FBSyxFQUFFLHFCQUFZLENBQUMsS0FBSztTQUM1QjtLQUNKO0lBQ0QsYUFBYSxFQUFFO1FBQ1gsSUFBSTtZQUNBLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQixDQUFDO0tBQ0o7SUFDRCxPQUFPLEVBQUU7UUFDTCxZQUFZLFlBQUMsRUFBd0Q7Z0JBQXBDLCtCQUFLO1lBQ2xDLFlBQVksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDOUIsQ0FBQztRQUNELE1BQU0sWUFBQyxFQUF3RDtnQkFBcEMsK0JBQUs7WUFDNUIsV0FBVyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM3QixDQUFDO0tBQ0o7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5oiR55qE5ZWG5ZOBXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2h0dHAnO1xyXG5pbXBvcnQgUGFnZVF1ZXJ5LCB7TGlzdENvbXBvbmVudH0gZnJvbSAnLi4vLi4vLi4vYmVoYXZpb3IvcGFnZV9xdWVyeSc7XHJcbmltcG9ydCB7IEdPT0RTX1NUQVRVUyB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50L3N0YXR1cyc7XHJcblxyXG4vKipcclxuICog5pu05paw5ZWG5ZOB54q25oCBXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlU3RhdHVzKGNvbXBvbmVudDogTGlzdENvbXBvbmVudCwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgY29uc3QgZGF0YSA9IGNvbXBvbmVudC5kYXRhLmxpc3RbaW5kZXhdO1xyXG4gICAgaWYoZGF0YS5zdGF0dXMgPT09IEdPT0RTX1NUQVRVUy5BVURJVElORykge1xyXG4gICAgICAgIHJldHVybiB3eC5zaG93VG9hc3Qoe2ljb246ICdub25lJywgdGl0bGU6ICfllYblk4HlrqHmoLjkuK0nfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaXNOb3JtYWwgPSBkYXRhLnN0YXR1cyA9PT0gR09PRFNfU1RBVFVTLk5PUk1BTDtcclxuICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgY29udGVudDogKGlzTm9ybWFsID8gJ+S4iycgOifkuIonKSArICfmnrbor6XllYblk4E/JyxcclxuICAgICAgICBzdWNjZXNzOiAoe2NvbmZpcm19KSA9PiB7XHJcbiAgICAgICAgICAgIGlmKCFjb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IGlzTm9ybWFsID8gR09PRFNfU1RBVFVTLlNPTERfT1VUIDogR09PRFNfU1RBVFVTLk5PUk1BTDtcclxuICAgICAgICAgICAgcmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvYXBpL2NvbW1vZGl0eScsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7aWQ6IGRhdGEuaWQsIHN0YXR1c30sXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gY29tcG9uZW50LnNldERhdGEoe1tgbGlzdFske2luZGV4fV0uc3RhdHVzYF06IHN0YXR1c30pKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gd3guc2hvd1RvYXN0KHt0aXRsZTogJ+aTjeS9nOaIkOWKnyd9KSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliKDpmaTllYblk4FcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVHb29kcyhjb21wb25lbnQ6IExpc3RDb21wb25lbnQsIGluZGV4OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGxpc3Q6IElDb21tb2RpdHlbXSA9IGNvbXBvbmVudC5kYXRhLmxpc3Q7XHJcbiAgICBjb25zdCBkYXRhID0gbGlzdFtpbmRleF07XHJcbiAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgIGNvbnRlbnQ6ICfliKDpmaTor6XllYblk4E/JyxcclxuICAgICAgICBzdWNjZXNzOiAoe2NvbmZpcm19KSA9PiB7XHJcbiAgICAgICAgICAgIGlmKCFjb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL2FwaS9jb21tb2RpdHknLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge2lkOiBkYXRhLmlkfSxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURSdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IGNvbXBvbmVudC5yZWZsYXNoKCkpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB3eC5zaG93VG9hc3Qoe3RpdGxlOiAn5Yig6Zmk5oiQ5YqfJ30pKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbkNvbXBvbmVudDxMaXN0Q29tcG9uZW50Pih7XHJcbiAgICBiZWhhdmlvcnM6IFtQYWdlUXVlcnldLFxyXG4gICAgZGF0YToge1xyXG4gICAgICAgIHVybDogJy9hcGkvY29tbW9kaXR5L215JyxcclxuICAgICAgICBTVEFUVVM6IHtcclxuICAgICAgICAgICAgQVVESVRJTkc6IEdPT0RTX1NUQVRVUy5BVURJVElORyxcclxuICAgICAgICAgICAgTk9STUFMOiBHT09EU19TVEFUVVMuTk9STUFMLFxyXG4gICAgICAgICAgICBTT0xEX09VVDogR09PRFNfU1RBVFVTLlNPTERfT1VULFxyXG4gICAgICAgICAgICBDTE9TRTogR09PRFNfU1RBVFVTLkNMT1NFXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHBhZ2VMaWZldGltZXM6IHtcclxuICAgICAgICBzaG93KHRoaXM6IExpc3RDb21wb25lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5vblNob3coKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHVwZGF0ZVN0YXR1cyh7dGFyZ2V0OiB7ZGF0YXNldDoge2luZGV4fX19OiBCYXNlRXZlbnQ8e2luZGV4OiBudW1iZXJ9Pikge1xyXG4gICAgICAgICAgICB1cGRhdGVTdGF0dXModGhpcywgaW5kZXgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGVsZXRlKHt0YXJnZXQ6IHtkYXRhc2V0OiB7aW5kZXh9fX06IEJhc2VFdmVudDx7aW5kZXg6IG51bWJlcn0+KSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZUdvb2RzKHRoaXMsIGluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=