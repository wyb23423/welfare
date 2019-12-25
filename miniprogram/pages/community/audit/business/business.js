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
        this.onShow();
    },
    methods: {
        close: function () {
            this.setData({ info: null });
        },
        showModal: function (_a) {
            var index = _a.mark.index;
            var item = this.data.list[index];
            var _b = JSON.parse(item.idCard), idCard1 = _b[0], idCard2 = _b[1];
            item && this.setData({ info: __assign({}, item, { idCard1: idCard1, idCard2: idCard2 }) });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVzaW5lc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJidXNpbmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBR0EsOERBQTJFO0FBQzNFLCtDQUFpRDtBQUVqRCxTQUFTLENBQWdCO0lBQ3JCLFNBQVMsRUFBRSxDQUFDLG9CQUFTLENBQUM7SUFDdEIsSUFBSSxFQUFDO1FBQ0QsR0FBRyxFQUFFLDBCQUEwQjtRQUMvQixVQUFVLEVBQUU7WUFDUixXQUFXLEVBQUUsTUFBTTtZQUNuQixRQUFRLEVBQUUsTUFBTTtTQUNuQjtRQUNELElBQUksRUFBRSxJQUFJO0tBQ2I7SUFDRCxLQUFLO1FBQ0QsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFDRCxPQUFPLEVBQUU7UUFDTCxLQUFLO1lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQy9CLENBQUM7UUFDRCxTQUFTLFlBQUMsRUFBb0U7Z0JBQTVELHFCQUFLO1lBQ25CLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdCLElBQUEsNEJBQTRDLEVBQTNDLGVBQU8sRUFBRSxlQUFrQyxDQUFDO1lBQ25ELElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsSUFBSSxlQUFNLElBQUksSUFBRSxPQUFPLFNBQUEsRUFBRSxPQUFPLFNBQUEsR0FBQyxFQUFDLENBQUMsQ0FBQztRQUM5RCxDQUFDO1FBQ0QsTUFBTSxZQUFDLENBQTJCO1lBQWxDLGlCQXFCQztZQXBCRyxJQUFNLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ25DLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0JBQ1QsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRO2dCQUNsQyxPQUFPLEVBQUUsVUFBQyxFQUFTO3dCQUFSLG9CQUFPO29CQUNkLElBQUcsQ0FBQyxPQUFPLEVBQUU7d0JBQ1QsT0FBTztxQkFDVjtvQkFFRCxjQUFPLENBQUM7d0JBQ0osR0FBRyxFQUFFLG9CQUFvQjt3QkFDekIsSUFBSSxFQUFFLEVBQUUsSUFBSSxNQUFBLEVBQUUsTUFBTSxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtxQkFDaEQsQ0FBQzt5QkFDRyxJQUFJLENBQUM7d0JBQ0YsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDO3dCQUM5QixLQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7d0JBQzNCLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDbkIsQ0FBQyxDQUFDO3lCQUNELEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzVCLENBQUM7YUFDSixDQUFDLENBQUM7UUFDUCxDQUFDO0tBQ0o7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5a6h5qC45ZWG5a62XHJcbiAqL1xyXG5pbXBvcnQgUGFnZVF1ZXJ5LCB7IExpc3RDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9iZWhhdmlvci9wYWdlX3F1ZXJ5JztcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2h0dHAnO1xyXG5cclxuQ29tcG9uZW50PExpc3RDb21wb25lbnQ+KHtcclxuICAgIGJlaGF2aW9yczogW1BhZ2VRdWVyeV0sXHJcbiAgICBkYXRhOntcclxuICAgICAgICB1cmw6ICcvYWRtaW4vYXVkaXRNZXJjaGFudExpc3QnLFxyXG4gICAgICAgIGRhdGFDb25maWc6IHtcclxuICAgICAgICAgICAgY3VycmVudFBhZ2U6ICdwYWdlJyxcclxuICAgICAgICAgICAgcGFnZVNpemU6ICdyb3dzJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5mbzogbnVsbCxcclxuICAgIH0sXHJcbiAgICByZWFkeSh0aGlzOiBMaXN0Q29tcG9uZW50KSB7XHJcbiAgICAgICAgdGhpcy5vblNob3coKTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgY2xvc2UoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7aW5mbzogbnVsbH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvd01vZGFsKHttYXJrOiB7aW5kZXh9fTogQmFzZUV2ZW50PElBbnlPYmplY3QsIElBbnlPYmplY3QsIHtpbmRleDogbnVtYmVyO30+KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmRhdGEubGlzdFtpbmRleF07XHJcbiAgICAgICAgICAgIGNvbnN0IFtpZENhcmQxLCBpZENhcmQyXSA9IEpTT04ucGFyc2UoaXRlbS5pZENhcmQpO1xyXG4gICAgICAgICAgICBpdGVtICYmIHRoaXMuc2V0RGF0YSh7aW5mbzogey4uLml0ZW0sIGlkQ2FyZDEsIGlkQ2FyZDJ9fSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkb0F1aXQoZTogQmFzZUV2ZW50PHtvaz86IHN0cmluZ30+KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzT2sgPSAhIWUudGFyZ2V0LmRhdGFzZXQub2s7XHJcbiAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBpc09rID8gJ+WuoeaguOmAmui/h++8nycgOiAn5a6h5qC45LiN6YCa6L+H77yfJyxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICh7Y29uZmlybX0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZighY29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2FwaS9hdWRpdE1lcmNoYW50JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBpc09rLCB1c2VySWQ6IHRoaXMuZGF0YS5pbmZvLnVzZXJJZCB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHt0aXRsZTogJ+aTjeS9nOaIkOWKnyd9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7aW5mbzogbnVsbH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZsYXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==