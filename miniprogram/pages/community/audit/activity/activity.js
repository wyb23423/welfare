"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("../../../../utils/http");
var util_1 = require("../../../../utils/util");
Component({
    data: {
        url: '/api/activity/auditList',
        dataConfig: {
            currentPage: 'page',
            pageSize: 'rows'
        },
        list: []
    },
    attached: function () {
        var _this = this;
        http_1.request({ url: this.data.url })
            .then(function (_a) {
            var data = _a.data;
            return _this.setData({ list: data.map(util_1.parseData) });
        })
            .catch(console.log);
    },
    methods: {
        doAuit: function (e) {
            var _this = this;
            var isOk = !!e.target.dataset.ok;
            var index = e.currentTarget.dataset.index;
            var list = this.data.list;
            wx.showModal({
                content: isOk ? '审核通过？' : '审核不通过？',
                success: function (_a) {
                    var confirm = _a.confirm;
                    if (!confirm) {
                        return;
                    }
                    http_1.request({
                        url: '/api/activity/audit',
                        data: {
                            flag: isOk,
                            activityId: list[index].id
                        }
                    })
                        .then(function () {
                        wx.showToast({ title: '操作成功' });
                        list.splice(index, 1);
                        _this.setData({ list: list });
                    })
                        .catch(console.log);
                }
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY3Rpdml0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLCtDQUFpRDtBQUNqRCwrQ0FBbUQ7QUFFbkQsU0FBUyxDQUFDO0lBRU4sSUFBSSxFQUFDO1FBQ0QsR0FBRyxFQUFFLHlCQUF5QjtRQUM5QixVQUFVLEVBQUU7WUFDUixXQUFXLEVBQUUsTUFBTTtZQUNuQixRQUFRLEVBQUUsTUFBTTtTQUNuQjtRQUNELElBQUksRUFBYSxFQUFFO0tBQ3RCO0lBQ0QsUUFBUTtRQUFSLGlCQUlDO1FBSEcsY0FBTyxDQUFZLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDckMsSUFBSSxDQUFDLFVBQUMsRUFBTTtnQkFBTCxjQUFJO1lBQU0sT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQVMsQ0FBQyxFQUFDLENBQUM7UUFBekMsQ0FBeUMsQ0FBQzthQUMzRCxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDRCxPQUFPLEVBQUU7UUFDTCxNQUFNLFlBQUMsQ0FBNEM7WUFBbkQsaUJBMkJDO1lBMUJHLElBQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDbkMsSUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQzVDLElBQU0sSUFBSSxHQUFjLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBRXZDLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0JBQ1QsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRO2dCQUNsQyxPQUFPLEVBQUUsVUFBQyxFQUFTO3dCQUFSLG9CQUFPO29CQUNkLElBQUcsQ0FBQyxPQUFPLEVBQUU7d0JBQ1QsT0FBTztxQkFDVjtvQkFFRCxjQUFPLENBQUM7d0JBQ0osR0FBRyxFQUFFLHFCQUFxQjt3QkFDMUIsSUFBSSxFQUFFOzRCQUNGLElBQUksRUFBRSxJQUFJOzRCQUNWLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTt5QkFDN0I7cUJBQ0osQ0FBQzt5QkFDRyxJQUFJLENBQUM7d0JBQ0YsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDO3dCQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDdEIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxFQUFDLElBQUksTUFBQSxFQUFDLENBQUMsQ0FBQztvQkFDekIsQ0FBQyxDQUFDO3lCQUNELEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzVCLENBQUM7YUFDSixDQUFDLENBQUM7UUFDUCxDQUFDO0tBQ0o7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5a6h5qC45ZWG5ZOBXHJcbiAqL1xyXG4vLyBpbXBvcnQgUGFnZVF1ZXJ5LCB7IExpc3RDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9iZWhhdmlvci9wYWdlX3F1ZXJ5JztcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2h0dHAnO1xyXG5pbXBvcnQgeyBwYXJzZURhdGEgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy91dGlsJztcclxuXHJcbkNvbXBvbmVudCh7XHJcbiAgICAvLyBiZWhhdmlvcnM6IFtQYWdlUXVlcnldLFxyXG4gICAgZGF0YTp7XHJcbiAgICAgICAgdXJsOiAnL2FwaS9hY3Rpdml0eS9hdWRpdExpc3QnLFxyXG4gICAgICAgIGRhdGFDb25maWc6IHtcclxuICAgICAgICAgICAgY3VycmVudFBhZ2U6ICdwYWdlJyxcclxuICAgICAgICAgICAgcGFnZVNpemU6ICdyb3dzJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGlzdDogPElBY3RpdmVbXT5bXVxyXG4gICAgfSxcclxuICAgIGF0dGFjaGVkKCkge1xyXG4gICAgICAgIHJlcXVlc3Q8SUFjdGl2ZVtdPih7IHVybDogdGhpcy5kYXRhLnVybCB9KVxyXG4gICAgICAgICAgICAudGhlbigoe2RhdGF9KSA9PiB0aGlzLnNldERhdGEoe2xpc3Q6IGRhdGEubWFwKHBhcnNlRGF0YSl9KSlcclxuICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgZG9BdWl0KGU6IEJhc2VFdmVudDx7b2s/OiBzdHJpbmd9LCB7aW5kZXg6IG51bWJlcn0+KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzT2sgPSAhIWUudGFyZ2V0LmRhdGFzZXQub2s7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpc3Q6IElBY3RpdmVbXSA9IHRoaXMuZGF0YS5saXN0O1xyXG5cclxuICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGlzT2sgPyAn5a6h5qC46YCa6L+H77yfJyA6ICflrqHmoLjkuI3pgJrov4fvvJ8nLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKHtjb25maXJtfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCFjb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvYXBpL2FjdGl2aXR5L2F1ZGl0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhZzogaXNPayxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2aXR5SWQ6IGxpc3RbaW5kZXhdLmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe3RpdGxlOiAn5pON5L2c5oiQ5YqfJ30pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtsaXN0fSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==