"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("../../../utils/http");
var util_1 = require("../../../utils/util");
Page({
    data: {
        history: [],
        type: ''
    },
    onLoad: function (query) {
        this.data.type = query.type;
        var type = "_" + query.type;
        this[type] && this[type]();
        var titles = {
            await: '待参加',
            auditing: '待审核',
            complete: '已参加',
            toEvaluate: '待评价',
            initiate: '我的发起',
            collection: '我的收藏'
        };
        wx.setNavigationBarTitle({
            title: titles[query.type]
        });
    },
    delete: function (e) {
        var id = +e.target.dataset.id;
        wx.showModal({
            content: '删除该活动？',
            success: function (res) {
                if (res.confirm) {
                    http_1.request({
                        url: '/api/activity',
                        method: 'DELETE',
                        data: { id: id }
                    })
                        .then(function () { return wx.showToast({ title: '删除成功' }); })
                        .catch(console.log);
                }
            }
        });
    },
    none: function () {
    },
    _await: function () {
        this._request('/api/activity/participation/await');
    },
    _auditing: function () {
        this._request('/api/activity/participation/auditing');
    },
    _complete: function () {
        this._request('/api/activity/participation/complete');
    },
    _request: function (url) {
        var _this = this;
        http_1.request({ url: url })
            .then(function (_a) {
            var data = _a.data;
            return _this.setData({ type: _this.data.type, history: data.map(util_1.parseData) });
        })
            .catch(console.log);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlzdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhpc3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw0Q0FBOEM7QUFDOUMsNENBQWdEO0FBSWhELElBQUksQ0FBQztJQUNELElBQUksRUFBRTtRQUNGLE9BQU8sRUFBRSxFQUFlO1FBQ3hCLElBQUksRUFBRSxFQUFFO0tBQ1g7SUFDRCxNQUFNLFlBQUMsS0FBaUI7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUU1QixJQUFNLElBQUksR0FBZ0IsTUFBSSxLQUFLLENBQUMsSUFBTSxDQUFDO1FBQzNDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUUzQixJQUFNLE1BQU0sR0FBUTtZQUNoQixLQUFLLEVBQUUsS0FBSztZQUNaLFFBQVEsRUFBRSxLQUFLO1lBQ2YsUUFBUSxFQUFFLEtBQUs7WUFDZixVQUFVLEVBQUUsS0FBSztZQUNqQixRQUFRLEVBQUUsTUFBTTtZQUNoQixVQUFVLEVBQUUsTUFBTTtTQUNyQixDQUFDO1FBQ0YsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1lBQ3JCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztTQUM1QixDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0QsTUFBTSxZQUFDLENBQWU7UUFDbEIsSUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7UUFDaEMsRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUNULE9BQU8sRUFBRSxRQUFRO1lBQ2pCLE9BQU8sWUFBQyxHQUFHO2dCQUNQLElBQUksR0FBRyxDQUFDLE9BQU8sRUFBRTtvQkFDYixjQUFPLENBQUM7d0JBQ0osR0FBRyxFQUFFLGVBQWU7d0JBQ3BCLE1BQU0sRUFBRSxRQUFRO3dCQUNoQixJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUEsRUFBRTtxQkFDZixDQUFDO3lCQUNHLElBQUksQ0FBQyxjQUFNLE9BQUEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUEvQixDQUErQixDQUFDO3lCQUMzQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUMzQjtZQUNMLENBQUM7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0QsSUFBSTtJQUVKLENBQUM7SUFHRCxNQUFNO1FBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFDRCxTQUFTO1FBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFDRCxTQUFTO1FBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFDRCxRQUFRLFlBQUMsR0FBVztRQUFwQixpQkFJQztRQUhHLGNBQU8sQ0FBWSxFQUFFLEdBQUcsS0FBQSxFQUFFLENBQUM7YUFDdEIsSUFBSSxDQUFDLFVBQUMsRUFBUTtnQkFBTixjQUFJO1lBQU8sT0FBQSxLQUFJLENBQUMsT0FBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFTLENBQUMsRUFBRSxDQUFDO1FBQXJFLENBQXFFLENBQUM7YUFDekYsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2h0dHAnO1xyXG5pbXBvcnQgeyBwYXJzZURhdGEgfSBmcm9tICcuLi8uLi8uLi91dGlscy91dGlsJztcclxuXHJcbnR5cGUgSGlzdG9yeVR5cGUgPSAnX2F3YWl0JyB8ICdfYXVkaXRpbmcnIHwgJ19jb21wbGV0ZSc7XHJcblxyXG5QYWdlKHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBoaXN0b3J5OiBbXSBhcyBJQWN0aXZlW10sXHJcbiAgICAgICAgdHlwZTogJydcclxuICAgIH0sXHJcbiAgICBvbkxvYWQocXVlcnk6IElBbnlPYmplY3QpIHtcclxuICAgICAgICB0aGlzLmRhdGEudHlwZSA9IHF1ZXJ5LnR5cGU7XHJcblxyXG4gICAgICAgIGNvbnN0IHR5cGUgPSA8SGlzdG9yeVR5cGU+YF8ke3F1ZXJ5LnR5cGV9YDtcclxuICAgICAgICB0aGlzW3R5cGVdICYmIHRoaXNbdHlwZV0oKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGl0bGVzOiBhbnkgPSB7XHJcbiAgICAgICAgICAgIGF3YWl0OiAn5b6F5Y+C5YqgJyxcclxuICAgICAgICAgICAgYXVkaXRpbmc6ICflvoXlrqHmoLgnLFxyXG4gICAgICAgICAgICBjb21wbGV0ZTogJ+W3suWPguWKoCcsXHJcbiAgICAgICAgICAgIHRvRXZhbHVhdGU6ICflvoXor4Tku7cnLFxyXG4gICAgICAgICAgICBpbml0aWF0ZTogJ+aIkeeahOWPkei1tycsXHJcbiAgICAgICAgICAgIGNvbGxlY3Rpb246ICfmiJHnmoTmlLbol48nXHJcbiAgICAgICAgfTtcclxuICAgICAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe1xyXG4gICAgICAgICAgICB0aXRsZTogdGl0bGVzW3F1ZXJ5LnR5cGVdXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZGVsZXRlKGU6IFd4VG91Y2hFdmVudCkge1xyXG4gICAgICAgIGNvbnN0IGlkID0gK2UudGFyZ2V0LmRhdGFzZXQuaWQ7XHJcbiAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgY29udGVudDogJ+WIoOmZpOivpea0u+WKqO+8nycsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2FwaS9hY3Rpdml0eScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgaWQgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHd4LnNob3dUb2FzdCh7IHRpdGxlOiAn5Yig6Zmk5oiQ5YqfJyB9KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIG5vbmUoKSB7XHJcbiAgICAgICAgLy9cclxuICAgIH0sXHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgX2F3YWl0KCkge1xyXG4gICAgICAgIHRoaXMuX3JlcXVlc3QoJy9hcGkvYWN0aXZpdHkvcGFydGljaXBhdGlvbi9hd2FpdCcpO1xyXG4gICAgfSxcclxuICAgIF9hdWRpdGluZygpIHtcclxuICAgICAgICB0aGlzLl9yZXF1ZXN0KCcvYXBpL2FjdGl2aXR5L3BhcnRpY2lwYXRpb24vYXVkaXRpbmcnKTtcclxuICAgIH0sXHJcbiAgICBfY29tcGxldGUoKSB7XHJcbiAgICAgICAgdGhpcy5fcmVxdWVzdCgnL2FwaS9hY3Rpdml0eS9wYXJ0aWNpcGF0aW9uL2NvbXBsZXRlJyk7XHJcbiAgICB9LFxyXG4gICAgX3JlcXVlc3QodXJsOiBzdHJpbmcpIHtcclxuICAgICAgICByZXF1ZXN0PElBY3RpdmVbXT4oeyB1cmwgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB0aGlzLnNldERhdGEhKHsgdHlwZTogdGhpcy5kYXRhLnR5cGUsIGhpc3Rvcnk6IGRhdGEubWFwKHBhcnNlRGF0YSkgfSkpXHJcbiAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=