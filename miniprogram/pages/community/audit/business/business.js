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
var page_query_1 = require("../../../../behavior/page_query");
var http_1 = require("../../../../utils/http");
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
        this.showHandler();
    },
    methods: {
        close: function () {
            this.setData({ info: null });
        },
        showModal: function (_a) {
            var index = _a.mark.index;
            var item = this.data.list[index];
            var _b = item.idCard, idCard1 = _b[0], idCard2 = _b[1];
            this.setData({ info: __assign({}, item, { idCard1: idCard1, idCard2: idCard2 }) });
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
                        url: '/admin/auditMerchant',
                        data: { isOk: isOk, userId: _this.data.info.userId }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVzaW5lc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJidXNpbmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBR0EsOERBQTJFO0FBQzNFLCtDQUFpRDtBQUVqRCxTQUFTLENBQWdCO0lBQ3JCLFNBQVMsRUFBRSxDQUFDLG9CQUFTLENBQUM7SUFDdEIsSUFBSSxFQUFDO1FBQ0QsR0FBRyxFQUFFLDBCQUEwQjtRQUMvQixVQUFVLEVBQUU7WUFDUixXQUFXLEVBQUUsTUFBTTtZQUNuQixRQUFRLEVBQUUsTUFBTTtTQUNuQjtRQUNELElBQUksRUFBRSxJQUFJO0tBQ2I7SUFDRCxLQUFLO1FBQ0QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxPQUFPLEVBQUU7UUFDTCxLQUFLO1lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQy9CLENBQUM7UUFDRCxTQUFTLFlBQUMsRUFBb0U7Z0JBQTVELHFCQUFLO1lBQ25CLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRTdCLElBQUEsZ0JBQWdDLEVBQS9CLGVBQU8sRUFBRSxlQUFzQixDQUFDO1lBQ3ZDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxJQUFJLGVBQU0sSUFBSSxJQUFFLE9BQU8sU0FBQSxFQUFFLE9BQU8sU0FBQSxHQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQ3RELENBQUM7UUFDRCxNQUFNLFlBQUMsQ0FBMkI7WUFBbEMsaUJBcUJDO1lBcEJHLElBQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDbkMsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDVCxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVE7Z0JBQ2xDLE9BQU8sRUFBRSxVQUFDLEVBQVM7d0JBQVIsb0JBQU87b0JBQ2QsSUFBRyxDQUFDLE9BQU8sRUFBRTt3QkFDVCxPQUFPO3FCQUNWO29CQUVELGNBQU8sQ0FBQzt3QkFDSixHQUFHLEVBQUUsc0JBQXNCO3dCQUMzQixJQUFJLEVBQUUsRUFBRSxJQUFJLE1BQUEsRUFBRSxNQUFNLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO3FCQUNoRCxDQUFDO3lCQUNHLElBQUksQ0FBQzt3QkFDRixFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7d0JBQzlCLEtBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQzt3QkFDM0IsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUNuQixDQUFDLENBQUM7eUJBQ0QsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDNUIsQ0FBQzthQUNKLENBQUMsQ0FBQztRQUNQLENBQUM7S0FDSjtDQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDlrqHmoLjllYblrrZcclxuICovXHJcbmltcG9ydCBQYWdlUXVlcnksIHsgTGlzdENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2JlaGF2aW9yL3BhZ2VfcXVlcnknO1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvaHR0cCc7XHJcblxyXG5Db21wb25lbnQ8TGlzdENvbXBvbmVudD4oe1xyXG4gICAgYmVoYXZpb3JzOiBbUGFnZVF1ZXJ5XSxcclxuICAgIGRhdGE6e1xyXG4gICAgICAgIHVybDogJy9hZG1pbi9hdWRpdE1lcmNoYW50TGlzdCcsXHJcbiAgICAgICAgZGF0YUNvbmZpZzoge1xyXG4gICAgICAgICAgICBjdXJyZW50UGFnZTogJ3BhZ2UnLFxyXG4gICAgICAgICAgICBwYWdlU2l6ZTogJ3Jvd3MnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbmZvOiBudWxsLFxyXG4gICAgfSxcclxuICAgIHJlYWR5KHRoaXM6IExpc3RDb21wb25lbnQpIHtcclxuICAgICAgICB0aGlzLnNob3dIYW5kbGVyKCk7XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGNsb3NlKCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe2luZm86IG51bGx9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNob3dNb2RhbCh7bWFyazoge2luZGV4fX06IEJhc2VFdmVudDxJQW55T2JqZWN0LCBJQW55T2JqZWN0LCB7aW5kZXg6IG51bWJlcjt9Pikge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5kYXRhLmxpc3RbaW5kZXhdO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgW2lkQ2FyZDEsIGlkQ2FyZDJdID0gaXRlbS5pZENhcmQ7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7aW5mbzogey4uLml0ZW0sIGlkQ2FyZDEsIGlkQ2FyZDJ9fSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkb0F1aXQoZTogQmFzZUV2ZW50PHtvaz86IHN0cmluZ30+KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzT2sgPSAhIWUudGFyZ2V0LmRhdGFzZXQub2s7XHJcbiAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBpc09rID8gJ+WuoeaguOmAmui/h++8nycgOiAn5a6h5qC45LiN6YCa6L+H77yfJyxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICh7Y29uZmlybX0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZighY29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2FkbWluL2F1ZGl0TWVyY2hhbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGlzT2ssIHVzZXJJZDogdGhpcy5kYXRhLmluZm8udXNlcklkIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe3RpdGxlOiAn5pON5L2c5oiQ5YqfJ30pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtpbmZvOiBudWxsfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZmxhc2goKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19