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
            evaluate: '待评价',
            initiate: '我的发起',
            collection: '我的收藏'
        };
        wx.setNavigationBarTitle({
            title: titles[query.type]
        });
    },
    delete: function (e) {
        var _this = this;
        var index = +e.target.dataset.index;
        var history = this.data.history;
        wx.showModal({
            content: '删除该活动？',
            success: function (res) {
                if (res.confirm) {
                    http_1.request({
                        url: '/api/activity',
                        method: 'DELETE',
                        data: { activityId: history[index].id }
                    })
                        .then(function () {
                        wx.showToast({ title: '删除成功' });
                        history.splice(index, 1);
                        _this.setData({ history: history });
                    })
                        .catch(console.log);
                }
            }
        });
    },
    none: function () {
    },
    _await: function () {
        this._request('/api/activity/participation/list/await');
    },
    _auditing: function () {
        this._request('/api/activity/participation/list/auditing');
    },
    _complete: function () {
        this._request('/api/activity/participation/list/complete');
    },
    _evaluate: function () {
        this._request('/api/activity/participation/list/evaluate');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlzdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhpc3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw0Q0FBOEM7QUFDOUMsNENBQWdEO0FBSWhELElBQUksQ0FBQztJQUNELElBQUksRUFBRTtRQUNGLE9BQU8sRUFBRSxFQUFlO1FBQ3hCLElBQUksRUFBRSxFQUFFO0tBQ1g7SUFDRCxNQUFNLFlBQUMsS0FBaUI7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUU1QixJQUFNLElBQUksR0FBZ0IsTUFBSSxLQUFLLENBQUMsSUFBTSxDQUFDO1FBQzNDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUUzQixJQUFNLE1BQU0sR0FBUTtZQUNoQixLQUFLLEVBQUUsS0FBSztZQUNaLFFBQVEsRUFBRSxLQUFLO1lBQ2YsUUFBUSxFQUFFLEtBQUs7WUFDZixRQUFRLEVBQUUsS0FBSztZQUNmLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFVBQVUsRUFBRSxNQUFNO1NBQ3JCLENBQUM7UUFDRixFQUFFLENBQUMscUJBQXFCLENBQUM7WUFDckIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1NBQzVCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxNQUFNLFlBQUMsQ0FBZTtRQUF0QixpQkFzQkM7UUFyQkcsSUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDdEMsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFbEMsRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUNULE9BQU8sRUFBRSxRQUFRO1lBQ2pCLE9BQU8sRUFBRSxVQUFDLEdBQUc7Z0JBQ1QsSUFBSSxHQUFHLENBQUMsT0FBTyxFQUFFO29CQUNiLGNBQU8sQ0FBQzt3QkFDSixHQUFHLEVBQUUsZUFBZTt3QkFDcEIsTUFBTSxFQUFFLFFBQVE7d0JBQ2hCLElBQUksRUFBRSxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFO3FCQUMxQyxDQUFDO3lCQUNHLElBQUksQ0FBQzt3QkFDRixFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7d0JBQ2hDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUN6QixLQUFJLENBQUMsT0FBUSxDQUFDLEVBQUUsT0FBTyxTQUFBLEVBQUUsQ0FBQyxDQUFDO29CQUMvQixDQUFDLENBQUM7eUJBQ0QsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDM0I7WUFDTCxDQUFDO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELElBQUk7SUFFSixDQUFDO0lBR0QsTUFBTTtRQUNGLElBQUksQ0FBQyxRQUFRLENBQUMsd0NBQXdDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBQ0QsU0FBUztRQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsMkNBQTJDLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBQ0QsU0FBUztRQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsMkNBQTJDLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBQ0QsU0FBUztRQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsMkNBQTJDLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBQ0QsUUFBUSxZQUFDLEdBQVc7UUFBcEIsaUJBSUM7UUFIRyxjQUFPLENBQVksRUFBRSxHQUFHLEtBQUEsRUFBRSxDQUFDO2FBQ3RCLElBQUksQ0FBQyxVQUFDLEVBQVE7Z0JBQU4sY0FBSTtZQUFPLE9BQUEsS0FBSSxDQUFDLE9BQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBUyxDQUFDLEVBQUUsQ0FBQztRQUFyRSxDQUFxRSxDQUFDO2FBQ3pGLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi91dGlscy9odHRwJztcclxuaW1wb3J0IHsgcGFyc2VEYXRhIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdXRpbCc7XHJcblxyXG50eXBlIEhpc3RvcnlUeXBlID0gJ19hd2FpdCcgfCAnX2F1ZGl0aW5nJyB8ICdfY29tcGxldGUnO1xyXG5cclxuUGFnZSh7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgaGlzdG9yeTogW10gYXMgSUFjdGl2ZVtdLFxyXG4gICAgICAgIHR5cGU6ICcnXHJcbiAgICB9LFxyXG4gICAgb25Mb2FkKHF1ZXJ5OiBJQW55T2JqZWN0KSB7XHJcbiAgICAgICAgdGhpcy5kYXRhLnR5cGUgPSBxdWVyeS50eXBlO1xyXG5cclxuICAgICAgICBjb25zdCB0eXBlID0gPEhpc3RvcnlUeXBlPmBfJHtxdWVyeS50eXBlfWA7XHJcbiAgICAgICAgdGhpc1t0eXBlXSAmJiB0aGlzW3R5cGVdKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRpdGxlczogYW55ID0ge1xyXG4gICAgICAgICAgICBhd2FpdDogJ+W+heWPguWKoCcsXHJcbiAgICAgICAgICAgIGF1ZGl0aW5nOiAn5b6F5a6h5qC4JyxcclxuICAgICAgICAgICAgY29tcGxldGU6ICflt7Llj4LliqAnLFxyXG4gICAgICAgICAgICBldmFsdWF0ZTogJ+W+heivhOS7tycsXHJcbiAgICAgICAgICAgIGluaXRpYXRlOiAn5oiR55qE5Y+R6LW3JyxcclxuICAgICAgICAgICAgY29sbGVjdGlvbjogJ+aIkeeahOaUtuiXjydcclxuICAgICAgICB9O1xyXG4gICAgICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XHJcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZXNbcXVlcnkudHlwZV1cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBkZWxldGUoZTogV3hUb3VjaEV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSArZS50YXJnZXQuZGF0YXNldC5pbmRleDtcclxuICAgICAgICBjb25zdCBoaXN0b3J5ID0gdGhpcy5kYXRhLmhpc3Rvcnk7XHJcblxyXG4gICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfliKDpmaTor6XmtLvliqjvvJ8nLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2FwaS9hY3Rpdml0eScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgYWN0aXZpdHlJZDogaGlzdG9yeVtpbmRleF0uaWQgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7IHRpdGxlOiAn5Yig6Zmk5oiQ5YqfJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpc3Rvcnkuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSEoeyBoaXN0b3J5IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgbm9uZSgpIHtcclxuICAgICAgICAvL1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBfYXdhaXQoKSB7XHJcbiAgICAgICAgdGhpcy5fcmVxdWVzdCgnL2FwaS9hY3Rpdml0eS9wYXJ0aWNpcGF0aW9uL2xpc3QvYXdhaXQnKTtcclxuICAgIH0sXHJcbiAgICBfYXVkaXRpbmcoKSB7XHJcbiAgICAgICAgdGhpcy5fcmVxdWVzdCgnL2FwaS9hY3Rpdml0eS9wYXJ0aWNpcGF0aW9uL2xpc3QvYXVkaXRpbmcnKTtcclxuICAgIH0sXHJcbiAgICBfY29tcGxldGUoKSB7XHJcbiAgICAgICAgdGhpcy5fcmVxdWVzdCgnL2FwaS9hY3Rpdml0eS9wYXJ0aWNpcGF0aW9uL2xpc3QvY29tcGxldGUnKTtcclxuICAgIH0sXHJcbiAgICBfZXZhbHVhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5fcmVxdWVzdCgnL2FwaS9hY3Rpdml0eS9wYXJ0aWNpcGF0aW9uL2xpc3QvZXZhbHVhdGUnKTtcclxuICAgIH0sXHJcbiAgICBfcmVxdWVzdCh1cmw6IHN0cmluZykge1xyXG4gICAgICAgIHJlcXVlc3Q8SUFjdGl2ZVtdPih7IHVybCB9KVxyXG4gICAgICAgICAgICAudGhlbigoeyBkYXRhIH0pID0+IHRoaXMuc2V0RGF0YSEoeyB0eXBlOiB0aGlzLmRhdGEudHlwZSwgaGlzdG9yeTogZGF0YS5tYXAocGFyc2VEYXRhKSB9KSlcclxuICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==