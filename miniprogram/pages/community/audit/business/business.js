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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVzaW5lc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJidXNpbmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBR0EsOERBQTJFO0FBQzNFLCtDQUFpRDtBQUVqRCxTQUFTLENBQWdCO0lBQ3JCLFNBQVMsRUFBRSxDQUFDLG9CQUFTLENBQUM7SUFDdEIsSUFBSSxFQUFDO1FBQ0QsR0FBRyxFQUFFLDBCQUEwQjtRQUMvQixVQUFVLEVBQUU7WUFDUixXQUFXLEVBQUUsTUFBTTtZQUNuQixRQUFRLEVBQUUsTUFBTTtTQUNuQjtRQUNELElBQUksRUFBRSxJQUFJO0tBQ2I7SUFDRCxLQUFLO1FBQ0QsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFDRCxPQUFPLEVBQUU7UUFDTCxLQUFLO1lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQy9CLENBQUM7UUFDRCxTQUFTLFlBQUMsRUFBb0U7Z0JBQTVELHFCQUFLO1lBQ25CLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRTdCLElBQUEsZ0JBQWdDLEVBQS9CLGVBQU8sRUFBRSxlQUFzQixDQUFDO1lBQ3ZDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxJQUFJLGVBQU0sSUFBSSxJQUFFLE9BQU8sU0FBQSxFQUFFLE9BQU8sU0FBQSxHQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQ3RELENBQUM7UUFDRCxNQUFNLFlBQUMsQ0FBMkI7WUFBbEMsaUJBcUJDO1lBcEJHLElBQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDbkMsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDVCxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVE7Z0JBQ2xDLE9BQU8sRUFBRSxVQUFDLEVBQVM7d0JBQVIsb0JBQU87b0JBQ2QsSUFBRyxDQUFDLE9BQU8sRUFBRTt3QkFDVCxPQUFPO3FCQUNWO29CQUVELGNBQU8sQ0FBQzt3QkFDSixHQUFHLEVBQUUsb0JBQW9CO3dCQUN6QixJQUFJLEVBQUUsRUFBRSxJQUFJLE1BQUEsRUFBRSxNQUFNLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO3FCQUNoRCxDQUFDO3lCQUNHLElBQUksQ0FBQzt3QkFDRixFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7d0JBQzlCLEtBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQzt3QkFDM0IsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUNuQixDQUFDLENBQUM7eUJBQ0QsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDNUIsQ0FBQzthQUNKLENBQUMsQ0FBQztRQUNQLENBQUM7S0FDSjtDQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDlrqHmoLjllYblrrZcclxuICovXHJcbmltcG9ydCBQYWdlUXVlcnksIHsgTGlzdENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2JlaGF2aW9yL3BhZ2VfcXVlcnknO1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvaHR0cCc7XHJcblxyXG5Db21wb25lbnQ8TGlzdENvbXBvbmVudD4oe1xyXG4gICAgYmVoYXZpb3JzOiBbUGFnZVF1ZXJ5XSxcclxuICAgIGRhdGE6e1xyXG4gICAgICAgIHVybDogJy9hZG1pbi9hdWRpdE1lcmNoYW50TGlzdCcsXHJcbiAgICAgICAgZGF0YUNvbmZpZzoge1xyXG4gICAgICAgICAgICBjdXJyZW50UGFnZTogJ3BhZ2UnLFxyXG4gICAgICAgICAgICBwYWdlU2l6ZTogJ3Jvd3MnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbmZvOiBudWxsLFxyXG4gICAgfSxcclxuICAgIHJlYWR5KHRoaXM6IExpc3RDb21wb25lbnQpIHtcclxuICAgICAgICB0aGlzLm9uU2hvdygpO1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBjbG9zZSgpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtpbmZvOiBudWxsfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaG93TW9kYWwoe21hcms6IHtpbmRleH19OiBCYXNlRXZlbnQ8SUFueU9iamVjdCwgSUFueU9iamVjdCwge2luZGV4OiBudW1iZXI7fT4pIHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuZGF0YS5saXN0W2luZGV4XTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IFtpZENhcmQxLCBpZENhcmQyXSA9IGl0ZW0uaWRDYXJkO1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe2luZm86IHsuLi5pdGVtLCBpZENhcmQxLCBpZENhcmQyfX0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZG9BdWl0KGU6IEJhc2VFdmVudDx7b2s/OiBzdHJpbmd9Pikge1xyXG4gICAgICAgICAgICBjb25zdCBpc09rID0gISFlLnRhcmdldC5kYXRhc2V0Lm9rO1xyXG4gICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogaXNPayA/ICflrqHmoLjpgJrov4fvvJ8nIDogJ+WuoeaguOS4jemAmui/h++8nycsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAoe2NvbmZpcm19KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIWNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9hcGkvYXVkaXRNZXJjaGFudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgaXNPaywgdXNlcklkOiB0aGlzLmRhdGEuaW5mby51c2VySWQgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7dGl0bGU6ICfmk43kvZzmiJDlip8nfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe2luZm86IG51bGx9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVmbGFzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=