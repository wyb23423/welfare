"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("../../utils/http");
Component({
    data: {
        list: [],
        isShow: false,
        activityId: 0
    },
    methods: {
        close: function () {
            this.triggerEvent('close', {}, {});
            this.setData({ isShow: false });
        },
        show: function (activityId) {
            var _this = this;
            var data = { isShow: true, activityId: activityId, list: [] };
            http_1.request({
                url: '/api/activity/auditList',
                data: { activityId: activityId }
            })
                .then(function (_a) {
                var list = _a.data;
                return data.list = list;
            })
                .catch(console.log)
                .finally(function () { return _this.setData(data); });
        },
        doAuit: function (e) {
            var _this = this;
            var flag = !!e.target.dataset.ok;
            var index = e.currentTarget.dataset.index;
            wx.showModal({
                title: this.data.list[index].name,
                content: (!flag ? '拒绝' : '同意') + '该用户参加该活动?',
                success: function (_a) {
                    var confirm = _a.confirm;
                    return confirm && _this._doAuit(flag, index);
                }
            });
        },
        _doAuit: function (flag, index) {
            var _this = this;
            var list = this.data.list;
            http_1.request({
                url: '/api/activity/audit',
                data: {
                    flag: flag,
                    activityId: this.data.activityId,
                    userId: list[index].userId
                }
            })
                .then(function () {
                wx.showToast({ title: '操作成功' });
                list.splice(index, 1);
                _this.setData({ list: list });
            })
                .catch(console.log);
        }
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5saXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZW5saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUNBQTJDO0FBbUIzQyxTQUFTLENBQVM7SUFDZCxJQUFJLEVBQUU7UUFDRixJQUFJLEVBQUUsRUFBRTtRQUNSLE1BQU0sRUFBRSxLQUFLO1FBQ2IsVUFBVSxFQUFFLENBQUM7S0FDaEI7SUFDRCxPQUFPLEVBQUU7UUFDTCxLQUFLO1lBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztRQUNsQyxDQUFDO1FBQ0QsSUFBSSxZQUFDLFVBQWtCO1lBQXZCLGlCQVVDO1lBVEcsSUFBTSxJQUFJLEdBQUcsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLFVBQVUsWUFBQSxFQUFFLElBQUksRUFBWSxFQUFFLEVBQUMsQ0FBQztZQUU1RCxjQUFPLENBQVc7Z0JBQ2QsR0FBRyxFQUFFLHlCQUF5QjtnQkFDOUIsSUFBSSxFQUFFLEVBQUUsVUFBVSxZQUFBLEVBQUU7YUFDdkIsQ0FBQztpQkFDRCxJQUFJLENBQUMsVUFBQyxFQUFZO29CQUFYLGNBQVU7Z0JBQU0sT0FBQSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUk7WUFBaEIsQ0FBZ0IsQ0FBQztpQkFDeEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7aUJBQ2xCLE9BQU8sQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7UUFDRCxNQUFNLFlBQUMsQ0FBNEM7WUFBbkQsaUJBU0M7WUFSRyxJQUFNLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ25DLElBQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUU1QyxFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNULEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJO2dCQUNqQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxXQUFXO2dCQUM1QyxPQUFPLEVBQUUsVUFBQyxFQUFTO3dCQUFSLG9CQUFPO29CQUFNLE9BQUEsT0FBTyxJQUFJLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQztnQkFBcEMsQ0FBb0M7YUFDL0QsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUNELE9BQU8sWUFBQyxJQUFhLEVBQUUsS0FBYTtZQUFwQyxpQkFpQkM7WUFoQkcsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFFNUIsY0FBTyxDQUFDO2dCQUNKLEdBQUcsRUFBRSxxQkFBcUI7Z0JBQzFCLElBQUksRUFBRTtvQkFDRixJQUFJLE1BQUE7b0JBQ0osVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVTtvQkFDaEMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNO2lCQUM3QjthQUNKLENBQUM7aUJBQ0QsSUFBSSxDQUFDO2dCQUNGLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLEtBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxJQUFJLE1BQUEsRUFBQyxDQUFDLENBQUM7WUFDekIsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEIsQ0FBQztLQUNKO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uLy4uL3V0aWxzL2h0dHAnO1xyXG5cclxuaW50ZXJmYWNlIEVuSW5mbyB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBwaG9uZTogc3RyaW5nO1xyXG4gICAgdXNlcklkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRW5MaXN0IGV4dGVuZHMgV3hDb21wb25lbnQge1xyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGlzU2hvdzogYm9vbGVhbjtcclxuICAgICAgICBsaXN0OiBFbkluZm9bXSxcclxuICAgICAgICBhY3Rpdml0eUlkOiBudW1iZXJcclxuICAgIH07XHJcbiAgICBzaG93KGFjdGl2aXR5SWQ6IG51bWJlcik6IHZvaWQ7XHJcbiAgICBjbG9zZSgpOiB2b2lkO1xyXG4gICAgX2RvQXVpdChmbGFnOiBib29sZWFuLCBpbmRleDogbnVtYmVyKTogdm9pZDtcclxufVxyXG5cclxuQ29tcG9uZW50PEVuTGlzdD4oe1xyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGxpc3Q6IFtdLFxyXG4gICAgICAgIGlzU2hvdzogZmFsc2UsXHJcbiAgICAgICAgYWN0aXZpdHlJZDogMFxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBjbG9zZSgpIHtcclxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2Nsb3NlJywge30sIHt9KTtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtpc1Nob3c6IGZhbHNlfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaG93KGFjdGl2aXR5SWQ6IG51bWJlcikge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0ge2lzU2hvdzogdHJ1ZSwgYWN0aXZpdHlJZCwgbGlzdDogPEVuSW5mb1tdPltdfTtcclxuXHJcbiAgICAgICAgICAgIHJlcXVlc3Q8RW5JbmZvW10+KHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9hcGkvYWN0aXZpdHkvYXVkaXRMaXN0JyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHsgYWN0aXZpdHlJZCB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCh7ZGF0YTogbGlzdH0pID0+IGRhdGEubGlzdCA9IGxpc3QpXHJcbiAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZylcclxuICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4gdGhpcy5zZXREYXRhKGRhdGEpKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRvQXVpdChlOiBCYXNlRXZlbnQ8e29rPzogc3RyaW5nfSwge2luZGV4OiBudW1iZXJ9Pikge1xyXG4gICAgICAgICAgICBjb25zdCBmbGFnID0gISFlLnRhcmdldC5kYXRhc2V0Lm9rO1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xyXG5cclxuICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLmRhdGEubGlzdFtpbmRleF0ubmFtZSxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICghZmxhZyA/ICfmi5Lnu50nIDogJ+WQjOaEjycpICsgJ+ivpeeUqOaIt+WPguWKoOivpea0u+WKqD8nLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKHtjb25maXJtfSkgPT4gY29uZmlybSAmJiB0aGlzLl9kb0F1aXQoZmxhZywgaW5kZXgpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgX2RvQXVpdChmbGFnOiBib29sZWFuLCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpc3QgPSB0aGlzLmRhdGEubGlzdDtcclxuXHJcbiAgICAgICAgICAgIHJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL2FwaS9hY3Rpdml0eS9hdWRpdCcsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxhZyxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpdml0eUlkOiB0aGlzLmRhdGEuYWN0aXZpdHlJZCxcclxuICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGxpc3RbaW5kZXhdLnVzZXJJZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe3RpdGxlOiAn5pON5L2c5oiQ5YqfJyB9KTtcclxuICAgICAgICAgICAgICAgIGxpc3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7bGlzdH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=