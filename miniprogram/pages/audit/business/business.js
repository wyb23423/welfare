"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var page_query_1 = require("../../../behavior/page_query");
var http_1 = require("../../../utils/http");
Component({
    behaviors: [page_query_1.default],
    data: {
        url: '/admin/auditMerchantList',
        dataConfig: {
            currentPage: 'page',
            pageSize: 'rows'
        },
        info: null,
    },
    ready: function () {
        this.onShow();
    },
    methods: {
        close: function () {
            this.setData({ info: null });
        },
        showModal: function (_a) {
            var index = _a.mark.index;
            this.setData({ info: this.data.list[index] });
        },
        doAuit: function (e) {
            var _this = this;
            var isOk = !!e.target.dataset.ok;
            wx.showModal({
                content: isOk ? '审核通过？' : '审核不通过？',
                success: function (_a) {
                    var confirm = _a.confirm;
                    if (!confirm) {
                        return;
                    }
                    http_1.request({
                        url: '/api/auditMerchant',
                        data: {
                            isOk: isOk,
                            userId: _this.data.info.userId
                        }
                    })
                        .then(function () {
                        wx.showToast({ title: '操作成功' });
                        _this.setData({ info: null });
                        _this.reflash();
                    })
                        .catch(console.log);
                }
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVzaW5lc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJidXNpbmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLDJEQUF3RTtBQUN4RSw0Q0FBOEM7QUFFOUMsU0FBUyxDQUFnQjtJQUNyQixTQUFTLEVBQUUsQ0FBQyxvQkFBUyxDQUFDO0lBQ3RCLElBQUksRUFBQztRQUNELEdBQUcsRUFBRSwwQkFBMEI7UUFDL0IsVUFBVSxFQUFFO1lBQ1IsV0FBVyxFQUFFLE1BQU07WUFDbkIsUUFBUSxFQUFFLE1BQU07U0FDbkI7UUFDRCxJQUFJLEVBQUUsSUFBSTtLQUNiO0lBQ0QsS0FBSztRQUNELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsS0FBSztZQUNELElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUMvQixDQUFDO1FBQ0QsU0FBUyxZQUFDLEVBQW9FO2dCQUE1RCxxQkFBSztZQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUNoRCxDQUFDO1FBQ0QsTUFBTSxZQUFDLENBQTJCO1lBQWxDLGlCQXdCQztZQXZCRyxJQUFNLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ25DLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0JBQ1QsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRO2dCQUNsQyxPQUFPLEVBQUUsVUFBQyxFQUFTO3dCQUFSLG9CQUFPO29CQUNkLElBQUcsQ0FBQyxPQUFPLEVBQUU7d0JBQ1QsT0FBTztxQkFDVjtvQkFFRCxjQUFPLENBQUM7d0JBQ0osR0FBRyxFQUFFLG9CQUFvQjt3QkFDekIsSUFBSSxFQUFFOzRCQUNGLElBQUksTUFBQTs0QkFDSixNQUFNLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTt5QkFDaEM7cUJBQ0osQ0FBQzt5QkFDRyxJQUFJLENBQUM7d0JBQ0YsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDO3dCQUM5QixLQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7d0JBQzNCLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDbkIsQ0FBQyxDQUFDO3lCQUNELEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzVCLENBQUM7YUFDSixDQUFDLENBQUM7UUFDUCxDQUFDO0tBQ0o7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5a6h5qC45ZWG5a62XHJcbiAqL1xyXG5pbXBvcnQgUGFnZVF1ZXJ5LCB7IExpc3RDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9iZWhhdmlvci9wYWdlX3F1ZXJ5JztcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2h0dHAnO1xyXG5cclxuQ29tcG9uZW50PExpc3RDb21wb25lbnQ+KHtcclxuICAgIGJlaGF2aW9yczogW1BhZ2VRdWVyeV0sXHJcbiAgICBkYXRhOntcclxuICAgICAgICB1cmw6ICcvYWRtaW4vYXVkaXRNZXJjaGFudExpc3QnLFxyXG4gICAgICAgIGRhdGFDb25maWc6IHtcclxuICAgICAgICAgICAgY3VycmVudFBhZ2U6ICdwYWdlJyxcclxuICAgICAgICAgICAgcGFnZVNpemU6ICdyb3dzJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5mbzogbnVsbCxcclxuICAgIH0sXHJcbiAgICByZWFkeSh0aGlzOiBMaXN0Q29tcG9uZW50KSB7XHJcbiAgICAgICAgdGhpcy5vblNob3coKTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgY2xvc2UoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7aW5mbzogbnVsbH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvd01vZGFsKHttYXJrOiB7aW5kZXh9fTogQmFzZUV2ZW50PElBbnlPYmplY3QsIElBbnlPYmplY3QsIHtpbmRleDogbnVtYmVyO30+KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7aW5mbzogdGhpcy5kYXRhLmxpc3RbaW5kZXhdfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkb0F1aXQoZTogQmFzZUV2ZW50PHtvaz86IHN0cmluZ30+KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzT2sgPSAhIWUudGFyZ2V0LmRhdGFzZXQub2s7XHJcbiAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBpc09rID8gJ+WuoeaguOmAmui/h++8nycgOiAn5a6h5qC45LiN6YCa6L+H77yfJyxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICh7Y29uZmlybX0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZighY29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2FwaS9hdWRpdE1lcmNoYW50JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNPayxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogdGhpcy5kYXRhLmluZm8udXNlcklkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe3RpdGxlOiAn5pON5L2c5oiQ5YqfJ30pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtpbmZvOiBudWxsfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZmxhc2goKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19